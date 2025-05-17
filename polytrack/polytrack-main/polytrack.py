# from direct.showbase.ShowBase import ShowBase
# from direct.task import Task
# from direct.gui.OnscreenText import OnscreenText
# from panda3d.core import (
#     WindowProperties, Vec3,
#     CollisionTraverser, CollisionNode, CollisionSphere, CollisionHandlerEvent,
#     BitMask32, TransformState, LineSegs, NodePath
# )
# from panda3d.bullet import (
#     BulletWorld, BulletRigidBodyNode, BulletBoxShape,
#     BulletPlaneShape, BulletVehicle, ZUp
# )

# class FullDemo(ShowBase):
#     def __init__(self,
#                  width=1280, height=720, fullscreen=False,
#                  track_models=None):
#         super().__init__()

#         # --- Window setup ---
#         props = WindowProperties()
#         props.setSize(width, height)
#         props.setFullscreen(fullscreen)
#         self.win.requestProperties(props)

#         # --- Physics world ---
#         self.world = BulletWorld()
#         self.world.setGravity(Vec3(0,0,-9.81))

#         # Ground plane
#         plane = BulletPlaneShape(Vec3(0,0,1), 0)
#         ground = BulletRigidBodyNode('Ground')
#         ground.addShape(plane)
#         ground.setMass(0)
#         gnp = self.render.attachNewNode(ground)
#         gnp.setPos(0,0,0)
#         ground.setIntoCollideMask(BitMask32.allOn())
#         self.world.attachRigidBody(ground)

#         # --- Vehicle chassis + BulletVehicle ---
#         chassis_shape = BulletBoxShape(Vec3(0.6,1.4,0.5))
#         chassis = BulletRigidBodyNode('Chassis')
#         chassis.addShape(chassis_shape)
#         chassis.setMass(800.0)
#         chassis.setDeactivationEnabled(False)
#         self.chassis_np = self.render.attachNewNode(chassis)
#         self.chassis_np.setZ(0.5)  # or fine-tune until the wheels just touch the ground
#         chassis.setIntoCollideMask(BitMask32.allOn())
#         self.world.attachRigidBody(chassis)

#         self.vehicle = BulletVehicle(self.world, chassis)
#         self.vehicle.setCoordinateSystem(ZUp)
#         self.world.attachVehicle(self.vehicle)

#         # wheel parameters
#         wheel_radius    = 0.3
#         wheel_width     = 0.2
#         wheel_friction  = 1000
#         suspension_rest = 0.6
#         suspension_stiff = 20.0  # increase stiffness a bit
#         suspension_damp  = 6.0   # dampening more helps reduce bounce
#         suspension_trav = 15.0  # 30cm, less jitter
#         roll_influence  = 0.1

#         positions = [
#             Vec3( 0.8,  1.1, 0.3),  # FR
#             Vec3(-0.8,  1.1, 0.3),  # FL
#             Vec3( 0.8, -1.1, 0.3),  # RR
#             Vec3(-0.8, -1.1, 0.3),  # RL
#         ]
#         for i,pos in enumerate(positions):
#             is_front = (i < 2)
#             wheel = self.vehicle.createWheel()

#             # Create a NodePath for visual geometry, but pass its PandaNode
#             wheel_np = self.render.attachNewNode(f'Wheel-{i}')
#             wheel.setNode(wheel_np.node())

#             # 1) Connection & orientation
#             wheel.setChassisConnectionPointCs(pos)     # point on chassis
#             wheel.setWheelDirectionCs(Vec3(0, 0, -1))  # downwards
#             wheel.setWheelAxleCs(Vec3(1, 0, 0))        # sideways

#             # 2) Physical parameters
#             wheel.setWheelRadius(wheel_radius)             # correct setter :contentReference[oaicite:0]{index=0}
#             wheel.setFrontWheel(is_front)                  # steerable if front :contentReference[oaicite:1]{index=1}

#             wheel.setSuspensionStiffness(suspension_stiff)           # :contentReference[oaicite:2]{index=2}  
#             wheel.setWheelsDampingCompression(suspension_damp)       # :contentReference[oaicite:3]{index=3}  
#             wheel.setWheelsDampingRelaxation(suspension_damp)        # :contentReference[oaicite:4]{index=4}  
#             wheel.setMaxSuspensionTravelCm(suspension_trav)           # :contentReference[oaicite:6]{index=6}  
#             wheel.setFrictionSlip(wheel_friction)                     # :contentReference[oaicite:7]{index=7}  
#             wheel.setRollInfluence(roll_influence)                   # :contentReference[oaicite:8]{index=8}

#         self.front_wheels = [0, 1]  # Front Left and Right
#         self.rear_wheels = [2, 3]

#         # --- Load track segments ---
#         # default sequence if none provided
#         # if track_models is None:
#         #     self.track_models = {
#         #         'straight':  "models/road.glb",
#         #         'ramp':      "models/road_wide.glb",
#         #         'loop':      "models/plane.glb",
#         #     }
#         #     sequence = [
#         #         ('straight',  10,  0, 0, 0),
#         #         ('ramp',      30, 20, 0, 0),
#         #         ('straight',  70, 40, 5, 0),
#         #         ('loop',      100, 60, 5, 0),
#         #         ('straight',  0, 80, 5, 0),
#         #     ]
#         # else:
#         #     self.track_models, sequence = track_models

#         # for t, x,y,z,h in sequence:
#         #     m = self.loader.loadModel(self.track_models[t])
#         #     m.setScale(0.05)
#         #     m.reparentTo(self.render)
#         #     m.setPos(x,y,z)
#         #     m.setH(h)

#         # model = self.loader.loadModel("models/road.glb")  # or plane.glb or car.glb
#         # model.setScale(0.05)  # optional, tweak based on your model
#         # model.setPos(0, 0, 0)  # move wherever you want
#         # model.reparentTo(self.render)
#         # # Print hierarchy to see what's inside
#         # model.ls()

#         road = self.loader.loadModel("models/road.glb")

#         pieces = [
#             ("Start",        (0, 0, 0)),
#             ("Straight",     (0, 10, 0)),
#             ("TurnSharp",    (10, 10, 0)),
#             ("SlopeUp",      (20, 10, 0)),
#             ("Checkpoint",   (30, 10, 0)),
#         ]

#         for name, pos in pieces:
#             part = road.find(f"**/{name}")
#             if not part.isEmpty():
#                 part = part.copyTo(self.render)
#                 part.setScale(0.05)
#                 part.setPos(*pos)
#             else:
#                 print(f"Missing: {name}")

#         self.smoothed_pos = self.chassis_np.getPos()

#         # --- Chase camera settings ---
#         self.cam_target_offset = Vec3(10, -30, 30)
#         self.camera.setPos(self.chassis_np.getPos() + self.cam_target_offset)
#         self.camera.lookAt(self.chassis_np)

#         # --- Collision for finish line + timer UI ---
#         self.cTrav = CollisionTraverser()
#         self.cHandler = CollisionHandlerEvent()
#         self.cHandler.addInPattern('%fn-into-%in')

#         finish_col = CollisionNode('finish')
#         finish_col.addSolid(CollisionSphere(0, 50, 1, 3))
#         finish_col.setIntoCollideMask(0x1)
#         self.finish_np = self.render.attachNewNode(finish_col)

#         vehicle_col = CollisionNode('vehicle')
#         vehicle_col.addSolid(CollisionSphere(0,0,0,1))
#         vehicle_col.setFromCollideMask(0x1)
#         self.vis_np = self.chassis_np.attachNewNode(vehicle_col)
#         self.cTrav.addCollider(self.vis_np, self.cHandler)

#         self.accept('vehicle-into-finish', self.on_finish)

#         self.timer_text = OnscreenText(text="Time: 0.000",
#                                       pos=(-1.2,0.9), scale=0.07)
#         self.timer_running = False
#         self.start_time = 0.0
#         self.elapsed = 0.0

#         # --- Input mappings ---
#         self.key_map = dict.fromkeys(
#             ["forward","backward","left","right"], False)
#         for key in ["w","s","a","d",
#                     "arrow_up","arrow_down","arrow_left","arrow_right"]:
#             up = key + "-up"
#             action = {
#                 'w':      ("forward", True),
#                 'w-up':   ("forward", False),
#                 's':      ("backward", True),
#                 's-up':   ("backward", False),
#                 'a':      ("left", True),
#                 'a-up':   ("left", False),
#                 'd':      ("right", True),
#                 'd-up':   ("right", False),
#                 'arrow_up':("forward", True),
#                 'arrow_up-up':("forward", False),
#                 'arrow_down':("backward", True),
#                 'arrow_down-up':("backward", False),
#                 'arrow_left':("left", True),
#                 'arrow_left-up':("left", False),
#                 'arrow_right':("right", True),
#                 'arrow_right-up':("right", False),
#             }[key]
#             self.accept(key,    self.set_key, [action[0], action[1]])
#             self.accept(key+"-up", self.set_key, [action[0], not action[1]])

#         # brake / restart / timer
#         self.accept('space', self.set_brake, [50.0])
#         self.accept('space-up', self.clear_forces)
#         self.accept('r', self.reset_vehicle)
#         self.accept('r', self.reset_timer)
#         self.accept('w', self.start_timer)

#         # gamepad
#         # self.enableJoystick()
#         self.joy_axes = {"axis0":0.0, "axis1":0.0}
#         # self.accept("joystick0-axis0", self.on_joy_axis, ["axis0"])
#         # self.accept("joystick0-axis1", self.on_joy_axis, ["axis1"])
#         # self.accept("joystick0-button0", self.reset_vehicle)

#         # --- Tasks ---
#         self.taskMgr.add(self.update_physics, 'physics')
#         self.taskMgr.add(self.update_vehicle, 'vehicle')
#         self.taskMgr.add(self.update_camera,  'camera')
#         self.taskMgr.add(self.update_timer,   'timer')

#     def draw_axes(render, pos=Vec3(0,0,0), scale=1):
#         ls = LineSegs()
#         ls.setThickness(2.0)

#         # X axis (red)
#         ls.setColor(1, 0, 0, 1)
#         ls.moveTo(pos)
#         ls.drawTo(pos + Vec3(scale, 0, 0))

#         # Y axis (green)
#         ls.setColor(0, 1, 0, 1)
#         ls.moveTo(pos)
#         ls.drawTo(pos + Vec3(0, scale, 0))

#         # Z axis (blue)
#         ls.setColor(0, 0, 1, 1)
#         ls.moveTo(pos)
#         ls.drawTo(pos + Vec3(0, 0, scale))

#         node = ls.create()
#         np = render.attachNewNode(node)
#         return np

#     def draw_debug_trail(self):
#         self.debug_points = []

#         self.debug_points.append(self.chassis_np.getPos(render))

#         if len(self.debug_points) > 500:  # cap the length of the trail
#             self.debug_points.pop(0)

#         if hasattr(self, 'debug_line'):
#             self.debug_line.removeNode()

#         ls = LineSegs()
#         ls.setColor(1, 0, 0, 1)
#         ls.setThickness(1.5)

#         if self.debug_points:
#             ls.moveTo(self.debug_points[0])
#             for p in self.debug_points[1:]:
#                 ls.drawTo(p)

#         self.debug_line = self.render.attachNewNode(ls.create())

#     # --- Input handlers ---
#     def set_key(self, key, val):    self.key_map[key] = val
#     def on_joy_axis(self, axis, val):
#         self.joy_axes[axis] = val if abs(val)>0.1 else 0.0

#     def set_brake(self, b): 
#         for i in range(4): self.vehicle.setBrake(b, i)
#     def clear_forces(self):
#         for i in range(4):
#             self.vehicle.applyEngineForce(0, i)
#             self.vehicle.setBrake(0, i)

#     def start_timer(self):
#         if not self.timer_running:
#             self.start_time = globalClock.getFrameTime()
#             self.timer_running = True

#     def reset_timer(self):
#         self.timer_running = False
#         self.elapsed = 0.0
#         self.timer_text.setText("Time: 0.000")

#     def on_finish(self, entry):
#         if self.timer_running:
#             self.timer_running = False
#             self.timer_text.setText(f"Finished! {self.elapsed:.3f}s")

#     def reset_vehicle(self):
#         self.vehicle.resetSuspension()
#         self.chassis_np.setPos(0,0,1); self.chassis_np.setHpr(0,0,0)
#         self.chassis_np.node().setLinearVelocity(Vec3(0,0,0))
#         self.chassis_np.node().setAngularVelocity(Vec3(0,0,0))

#     # --- Task updates ---
#     def update_physics(self, task):
#         dt = globalClock.getDt()
#         self.world.doPhysics(dt, 10, 1.0/180.0)
#         return Task.cont

#     def update_vehicle(self, task):
#         dt = globalClock.getDt()
#         engine_force = 2000.0
#         steering_angle = 0.3  # Radians, tweak this for sharper turning

#         self.draw_debug_trail()

#         self.frame_counter = getattr(self, 'frame_counter', 0) + 1
#         if self.frame_counter % 30 == 0:
#             print("Chassis Pos:", self.chassis_np.getPos())

#         # Clear previous forces
#         self.clear_forces()

#         # Handle steering
#         if self.key_map["left"]:
#             for i in self.front_wheels:
#                 self.vehicle.setSteeringValue(steering_angle, i)
#         elif self.key_map["right"]:
#             for i in self.front_wheels:
#                 self.vehicle.setSteeringValue(-steering_angle, i)
#         else:
#             for i in self.front_wheels:
#                 self.vehicle.setSteeringValue(0, i)

#         # Handle driving
#         if self.key_map["forward"]:
#             for i in self.rear_wheels:
#                 self.vehicle.applyEngineForce(engine_force, i)
#         elif self.key_map["backward"]:
#             for i in self.rear_wheels:
#                 self.vehicle.applyEngineForce(-engine_force, i)

#         # Gamepad (optional)
#         jf = -self.joy_axes["axis1"]
#         js = self.joy_axes["axis0"]
#         if abs(jf) > 0:
#             for i in self.rear_wheels:
#                 self.vehicle.applyEngineForce(engine_force * jf, i)
#         if abs(js) > 0:
#             for i in self.front_wheels:
#                 self.vehicle.setSteeringValue(-steering_angle * js, i)

#         return Task.cont

#     def update_camera(self, task):
#         self.draw_debug_trail()

#         alpha = 0.15  # Increased smoothing factor for smoother camera movement
#         dt = globalClock.getDt()

#         # Smooth the chassis position
#         chassis_pos = self.chassis_np.getPos()
#         self.smoothed_pos = self.smoothed_pos * (1 - alpha) + chassis_pos * alpha

#         desired = self.smoothed_pos + self.cam_target_offset
#         cur = self.camera.getPos()

#         # Increased micro-movement threshold to avoid jitter
#         threshold = 0.0001

#         if (desired - cur).lengthSquared() > threshold:
#             # Use alpha smoothing directly for camera position
#             new_pos = cur * (1 - alpha) + desired * alpha
#             self.camera.setPos(new_pos)

#         # Smooth the lookAt target to avoid abrupt camera rotation
#         if not hasattr(self, 'smoothed_lookat'):
#             self.smoothed_lookat = chassis_pos
#         else:
#             self.smoothed_lookat = self.smoothed_lookat * (1 - alpha) + chassis_pos * alpha

#         self.camera.lookAt(self.smoothed_lookat)
#         return Task.cont

#     def update_timer(self, task):
#         if self.timer_running:
#             self.elapsed = globalClock.getFrameTime() - self.start_time
#             self.timer_text.setText(f"Time: {self.elapsed:.3f}")
#         return Task.cont

# if __name__ == "__main__":
#     app = FullDemo(width=1920, height=1080, fullscreen=False)
#     app.run()





#!/usr/bin/env python3
"""
serve_game.py

A minimal Flask app to serve an HTML/JS game folder containing:
  lib/ammo.wasm.js
  lib/ammo.wasm.wasm
  a82f15d48dbc61b6edeb.woff2
  forced_square.json
  index.html
  main.bundle.js
  manifest.json
  simulation_worker.bundle.js

Usage:
  $ pip install Flask
  $ python serve_game.py
Then open http://127.0.0.1:5000/ in your browser.
"""

import os
from flask import Flask, send_from_directory, abort

# Adjust this if your files live in a different folder
GAME_DIR = os.path.join(os.path.dirname(__file__))

app = Flask(__name__, static_folder=GAME_DIR, static_url_path='')

# Serve index.html at the root
@app.route('/')
def root():
    return send_from_directory(GAME_DIR, 'index.html')

# Catch-all for other static assets
@app.route('/<path:filename>')
def serve_static(filename):
    # Security: ensure we don’t serve files outside GAME_DIR
    safe_path = os.path.normpath(os.path.join(GAME_DIR, filename))
    if not safe_path.startswith(os.path.abspath(GAME_DIR)):
        return abort(404)
    if os.path.exists(safe_path):
        return send_from_directory(GAME_DIR, filename)
    else:
        return abort(404)

if __name__ == '__main__':
    # Make sure GAME_DIR exists
    if not os.path.isdir(GAME_DIR):
        print(f"Error: game directory '{GAME_DIR}' not found.")
        exit(1)

    # Run in debug mode for auto‐reload
    app.run(host='0.0.0.0', port=5000, debug=True)
