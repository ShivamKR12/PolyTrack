try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="18cfe22f-9f52-4a7d-a73e-bc9cf041c67d",e._sentryDebugIdIdentifier="sentry-dbid-18cfe22f-9f52-4a7d-a73e-bc9cf041c67d")}catch(e){}{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=Object.assign({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:crazygames-portal":!0})}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{92372:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(58168),a=r(98587),i=r(96540),o=r(31523),l=r(75659),s=r(51006),d=r(31609);function u(e){return(0,d.Ay)("MuiOption",e)}(0,r(38413).A)("MuiOption",["root","disabled","selected","highlighted"]);var h=r(70189),f=r(74848);let c=["children","component","disabled","label","slotProps","slots","value"],p=i.forwardRef(function(e,t){let{children:r,component:d,disabled:p,label:g,slotProps:m={},slots:b={},value:y}=e,w=(0,a.A)(e,c),A=i.useContext(s.i);if(!A)throw Error("OptionUnstyled must be used within a SelectUnstyled");let v=d||b.root||"li",C={value:y,label:g||r,disabled:p},M=A.getOptionState(C),k=A.getOptionProps(C),x=A.listboxRef,R=(0,n.A)({},e,M),S=i.useRef(null),_=(0,o.A)(t,S);i.useEffect(()=>{if(M.highlighted){if(!x.current||!S.current)return;let e=x.current.getBoundingClientRect(),t=S.current.getBoundingClientRect();t.top<e.top?x.current.scrollTop-=e.top-t.top:t.bottom>e.bottom&&(x.current.scrollTop+=t.bottom-e.bottom)}},[M.highlighted,x]);let E=function(e){let{disabled:t,highlighted:r,selected:n}=e;return(0,l.A)({root:["root",t&&"disabled",r&&"highlighted",n&&"selected"]},u,{})}(R),T=(0,h.A)({elementType:v,externalSlotProps:m.root,externalForwardedProps:w,additionalProps:(0,n.A)({},k,{ref:_}),className:E.root,ownerState:R});return(0,f.jsx)(v,(0,n.A)({},T,{children:r}))}),g=i.memo(p)},39062:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(79071),a=r(67413);let i=(0,r(38413).A)("MuiBox",["root"]),o=(0,a.A)({defaultClassName:i.root,generateClassName:n.A.generate})},15327:(e,t,r)=>{r.d(t,{A:()=>d});var n,a=r(96540),i=r(21529),o=r(67558),l=r(53951);let s=(n||(n=r.t(a,2))).useSyncExternalStore;function d(e,t={}){let r=(0,l.A)(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:u=!1,matchMedia:h=n?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:c=!1}=(0,o.A)({name:"MuiUseMediaQuery",props:t,theme:r}),p="function"==typeof e?e(r):e;return(void 0!==s?function(e,t,r,n,i){let o=a.useCallback(()=>t,[t]),l=a.useMemo(()=>{if(i&&r)return()=>r(e).matches;if(null!==n){let{matches:t}=n(e);return()=>t}return o},[o,e,n,i,r]),[d,u]=a.useMemo(()=>{if(null===r)return[o,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[o,r,e]);return s(u,d,l)}:function(e,t,r,n,o){let[l,s]=a.useState(()=>o&&r?r(e).matches:n?n(e).matches:t);return(0,i.A)(()=>{let t=!0;if(!r)return;let n=r(e),a=()=>{t&&s(n.matches)};return a(),n.addListener(a),()=>{t=!1,n.removeListener(a)}},[e,r]),l})(p=p.replace(/^@media( ?)/m,""),u,h,f,c)}},57515:(e,t,r)=>{r.d(t,{A:()=>R});var n=r(98587),a=r(58168),i=r(96540),o=r(34164),l=r(17437),s=r(75659),d=r(24279),u=r(3552),h=r(6637),f=r(38413),c=r(31609);function p(e){return(0,c.Ay)("MuiSkeleton",e)}(0,f.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=r(74848);let m=["animation","className","component","height","style","variant","width"],b=e=>e,y,w,A,v,C=e=>{let{classes:t,variant:r,animation:n,hasChildren:a,width:i,height:o}=e;return(0,s.A)({root:["root",r,n,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]},p,t)},M=(0,l.i7)(y||(y=b`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,l.i7)(w||(w=b`
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
`)),x=(0,u.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(e=>{let{theme:t,ownerState:r}=e,n=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",i=parseFloat(t.shape.borderRadius);return(0,a.A)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.X4)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===r.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===r.variant&&{borderRadius:"50%"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},r.hasChildren&&{"& > *":{visibility:"hidden"}},r.hasChildren&&!r.width&&{maxWidth:"fit-content"},r.hasChildren&&!r.height&&{height:"auto"})},e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,l.AH)(A||(A=b`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),M)},e=>{let{ownerState:t,theme:r}=e;return"wave"===t.animation&&(0,l.AH)(v||(v=b`
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
    `),k,(r.vars||r).palette.action.hover)}),R=i.forwardRef(function(e,t){let r=(0,h.A)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:l,component:s="span",height:d,style:u,variant:f="text",width:c}=r,p=(0,n.A)(r,m),b=(0,a.A)({},r,{animation:i,component:s,variant:f,hasChildren:!!p.children}),y=C(b);return(0,g.jsx)(x,(0,a.A)({as:s,ref:t,className:(0,o.A)(y.root,l),ownerState:b},p,{style:(0,a.A)({width:c,height:d},u)}))})}}]);