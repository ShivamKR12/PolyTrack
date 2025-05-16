try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f2d366b3-886d-498e-a11c-40f071c686fc",e._sentryDebugIdIdentifier="sentry-dbid-f2d366b3-886d-498e-a11c-40f071c686fc")}catch(e){}{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=Object.assign({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:crazygames-portal":!0})}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12572],{94282:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(74848),r=n(13368),i=n.n(r);n(96540);var s=n(45300),o=n(49754),l=n(35265),d=n(57298);let c="favicons/manifest-icon-3.png",h="favicons/favicon-transparent.png",p=e=>{let{title:t,metaDescription:n,canonical:r,alternatives:p=[],children:u}=e,f=p.find(e=>{let{locale:t}=e;return t===l.Xn}),m=(e,t,n)=>(0,o.Ay)(e,{width:t,height:n,fit:"crop"}),g="development"===s.A.Instance.environment;return(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:`${g?"\uD83E\uDD99 - ":""}${t}`}),(0,a.jsx)("link",{rel:"manifest",href:"/manifest"}),(0,a.jsx)("meta",{httpEquiv:"Accept-CH",content:"DPR"}),(0,a.jsx)("meta",{name:"description",content:n}),r&&(0,a.jsx)("link",{rel:"canonical",href:r}),p.map(e=>{let{href:t,locale:n}=e,r=(0,l.cZ)(n);return(0,a.jsx)("link",{rel:"alternate",hrefLang:r,href:t},r)}),f&&(0,a.jsx)("link",{rel:"alternate",href:f.href,hrefLang:"x-default"}),(0,a.jsx)("meta",{name:"theme-color",content:d.l.black[70]}),(0,a.jsx)("meta",{name:"HandheldFriendly",content:"true"}),(0,a.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),(0,a.jsx)("meta",{property:"al:android:package",content:"com.crazygames.crazygamesapp"}),(0,a.jsx)("link",{rel:"apple-touch-icon",href:m(c,120,120)}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:m(c,152,152)}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"167x167",href:m(c,167,167)}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:m(c,180,180)}),(0,a.jsx)("link",{rel:"mask-icon",href:(0,o.Ay)("favicons/safari-pinned-tab.svg",{},!1),color:"#6842ff"}),(0,a.jsx)("link",{rel:"icon",href:m(h,16,16),sizes:"16x16"}),(0,a.jsx)("link",{rel:"icon",href:m(h,32,32),sizes:"32x32"}),(0,a.jsx)("link",{rel:"icon",href:m(h,48,48),sizes:"48x48"}),(0,a.jsx)("link",{rel:"icon",href:m(h,196,196),sizes:"196x196"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#603cba"}),(0,a.jsx)("meta",{name:"msapplication-TileImage",content:m(h,144,144)}),u]})}},38037:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(74848),r=n(96540),i=n(64996);let s=function(e){return t=>{let{services:n}=r.useContext(i.A);return(0,a.jsx)(e,{services:n,...t})}}},46069:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(74848),r=n(96540),i=n(9656);let s=function(e){return t=>{let n=r.useContext(i.A);return(0,a.jsx)(e,{deviceType:n,...t})}}},62603:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(74848),r=n(96540),i=n(74575);let s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>class extends r.Component{static async getInitialProps(n){let{trlService:a}=(0,i.V)(n);if(!n.req){let r=Promise.all(t.map(e=>a.loadTrlMessagesToLingui(e))),[i]=await Promise.all([e.getInitialProps?await e.getInitialProps(n):{},r]);return{...i}}let r=Promise.all(t.map(e=>a.getTrlMessages(e))),[s,o]=await Promise.all([e.getInitialProps?e.getInitialProps(n):Promise.resolve({}),r]);return{messages:o.reduce((e,t)=>Object.assign(e,t)),...s}}render(){let{...t}=this.props;return(0,a.jsx)(e,{...t})}}}},57515:(e,t,n)=>{n.d(t,{A:()=>M});var a=n(98587),r=n(58168),i=n(96540),s=n(34164),o=n(17437),l=n(75659),d=n(24279),c=n(3552),h=n(6637),p=n(38413),u=n(31609);function f(e){return(0,u.Ay)("MuiSkeleton",e)}(0,p.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var m=n(74848);let g=["animation","className","component","height","style","variant","width"],b=e=>e,x,y,v,w,k=e=>{let{classes:t,variant:n,animation:a,hasChildren:r,width:i,height:s}=e;return(0,l.A)({root:["root",n,a,r&&"withChildren",r&&!i&&"fitContent",r&&!s&&"heightAuto"]},f,t)},j=(0,o.i7)(x||(x=b`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),A=(0,o.i7)(y||(y=b`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),C=(0,c.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(e=>{let{theme:t,ownerState:n}=e,a=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",i=parseFloat(t.shape.borderRadius);return(0,r.A)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.X4)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})},e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,o.AH)(v||(v=b`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),j)},e=>{let{ownerState:t,theme:n}=e;return"wave"===t.animation&&(0,o.AH)(w||(w=b`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),A,(n.vars||n).palette.action.hover)}),M=i.forwardRef(function(e,t){let n=(0,h.A)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:l="span",height:d,style:c,variant:p="text",width:u}=n,f=(0,a.A)(n,g),b=(0,r.A)({},n,{animation:i,component:l,variant:p,hasChildren:!!f.children}),x=k(b);return(0,m.jsx)(C,(0,r.A)({as:l,ref:t,className:(0,s.A)(x.root,o),ownerState:b},f,{style:(0,r.A)({width:u,height:d},c)}))})}}]);