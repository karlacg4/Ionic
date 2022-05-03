"use strict";(self["webpackChunkhelloWorld"]=self["webpackChunkhelloWorld"]||[]).push([[980],{980:function(e,t,n){n.d(t,{c:function(){return y}});var o=n(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let i;const a=e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){const o="animation-timing-function";e[o]=n,delete e[t]}else{const o=r(t);o!==t&&(e[o]=n,delete e[t])}}})),e),r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=e=>{if(void 0===i){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;i=!t&&n?"-webkit-":""}return i},l=(e,t,n)=>{const o=t.startsWith("animation")?s(e):"";e.style.setProperty(o+t,n)},f=(e,t)=>{const n=t.startsWith("animation")?s(e):"";e.style.removeProperty(n+t)},c=(e,t)=>{let n;const o={passive:!0},i=()=>{n&&n()},a=n=>{e===n.target&&(i(),t(n))};return e&&(e.addEventListener("webkitAnimationEnd",a,o),e.addEventListener("animationend",a,o),n=()=>{e.removeEventListener("webkitAnimationEnd",a,o),e.removeEventListener("animationend",a,o)}),i},d=(e=[])=>e.map((e=>{const t=e.offset,n=[];for(const o in e)e.hasOwnProperty(o)&&"offset"!==o&&n.push(`${o}: ${e[o]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "),m=[],h=e=>{let t=m.indexOf(e);return t<0&&(t=m.push(e)-1),`ion-animation-${t}`},u=e=>{const t=e.getRootNode();return t.head||t},p=(e,t,n)=>{const o=u(n),i=s(n),a=o.querySelector("#"+e);if(a)return a;const r=(n.ownerDocument||document).createElement("style");return r.id=e,r.textContent=`@${i}keyframes ${e} { ${t} } @${i}keyframes ${e}-alt { ${t} }`,o.appendChild(r),r},g=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},y=e=>{let t,n,i,r,s,m,u,y,v,E,$,A,b,C=[],w=[],k=[],T=!1,S={},D=[],L=[],P={},W=0,F=!1,R=!1,N=!0,O=!1,K=!0,x=!1;const I=e,j=[],M=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q=[],U="function"===typeof AnimationEffect||"function"===typeof window.AnimationEffect,V="function"===typeof Element&&"function"===typeof Element.prototype.animate&&U,X=100,Y=()=>Q,_=e=>(z.forEach((t=>{t.destroy(e)})),ee(e),q.length=0,z.length=0,C.length=0,ie(),T=!1,K=!0,b),ee=e=>{ae(),e&&re()},te=()=>{F=!1,R=!1,K=!0,v=void 0,E=void 0,$=void 0,W=0,O=!1,N=!0,x=!1},ne=()=>0!==W&&!x,oe=(e,t)=>{const n=(null===t||void 0===t?void 0:t.oneTimeCallback)?M:j;return n.push({c:e,o:t}),b},ie=()=>(j.length=0,M.length=0,b),ae=()=>{if(V)Q.forEach((e=>{e.cancel()})),Q.length=0;else{const e=q.slice();(0,o.r)((()=>{e.forEach((e=>{f(e,"animation-name"),f(e,"animation-duration"),f(e,"animation-timing-function"),f(e,"animation-iteration-count"),f(e,"animation-delay"),f(e,"animation-play-state"),f(e,"animation-fill-mode"),f(e,"animation-direction")}))}))}},re=()=>{Z.forEach((e=>{(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),Z.length=0},se=e=>(B.push(e),b),le=e=>(G.push(e),b),fe=e=>(H.push(e),b),ce=e=>(J.push(e),b),de=e=>(w=g(w,e),b),me=e=>(k=g(k,e),b),he=(e={})=>(S=e,b),ue=(e=[])=>{for(const t of e)S[t]="";return b},pe=e=>(D=g(D,e),b),ge=e=>(L=g(L,e),b),ye=(e={})=>(P=e,b),ve=(e=[])=>{for(const t of e)P[t]="";return b},Ee=()=>void 0!==s?s:u?u.getFill():"both",$e=()=>void 0!==v?v:void 0!==m?m:u?u.getDirection():"normal",Ae=()=>F?"linear":void 0!==i?i:u?u.getEasing():"linear",be=()=>R?0:void 0!==E?E:void 0!==n?n:u?u.getDuration():0,Ce=()=>void 0!==r?r:u?u.getIterations():1,we=()=>void 0!==$?$:void 0!==t?t:u?u.getDelay():0,ke=()=>C,Te=e=>(m=e,He(!0),b),Se=e=>(s=e,He(!0),b),De=e=>(t=e,He(!0),b),Le=e=>(i=e,He(!0),b),Pe=e=>(V||0!==e||(e=1),n=e,He(!0),b),We=e=>(r=e,He(!0),b),Fe=e=>(u=e,b),Re=e=>{if(null!=e)if(1===e.nodeType)q.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)q.push(e[t]);else console.error("Invalid addElement value");return b},Ne=e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(b),z.push(t);else e.parent(b),z.push(e);return b},Oe=e=>{const t=C!==e;return C=e,t&&Ke(C),b},Ke=e=>{V?Y().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):Me()},xe=()=>{B.forEach((e=>e())),G.forEach((e=>e()));const e=w,t=k,n=S;q.forEach((o=>{const i=o.classList;e.forEach((e=>i.add(e))),t.forEach((e=>i.remove(e)));for(const e in n)n.hasOwnProperty(e)&&l(o,e,n[e])}))},Ie=()=>{_e(),H.forEach((e=>e())),J.forEach((e=>e()));const e=N?1:0,t=D,n=L,o=P;q.forEach((e=>{const i=e.classList;t.forEach((e=>i.add(e))),n.forEach((e=>i.remove(e)));for(const t in o)o.hasOwnProperty(t)&&l(e,t,o[t])})),j.forEach((t=>t.c(e,b))),M.forEach((t=>t.c(e,b))),M.length=0,K=!0,N&&(O=!0),N=!0},je=()=>{0!==W&&(W--,0===W&&(Ie(),u&&u.animationFinish()))},Me=(t=!0)=>{re();const n=a(C);q.forEach((i=>{if(n.length>0){const a=d(n);A=void 0!==e?e:h(a);const r=p(A,a,i);Z.push(r),l(i,"animation-duration",`${be()}ms`),l(i,"animation-timing-function",Ae()),l(i,"animation-delay",`${we()}ms`),l(i,"animation-fill-mode",Ee()),l(i,"animation-direction",$e());const s=Ce()===1/0?"infinite":Ce().toString();l(i,"animation-iteration-count",s),l(i,"animation-play-state","paused"),t&&l(i,"animation-name",`${r.id}-alt`),(0,o.r)((()=>{l(i,"animation-name",r.id||null)}))}}))},qe=()=>{q.forEach((e=>{const t=e.animate(C,{id:I,delay:we(),duration:be(),easing:Ae(),iterations:Ce(),fill:Ee(),direction:$e()});t.pause(),Q.push(t)})),Q.length>0&&(Q[0].onfinish=()=>{je()})},ze=(e=!0)=>{xe(),C.length>0&&(V?qe():Me(e)),T=!0},Ze=e=>{if(e=Math.min(Math.max(e,0),.9999),V)Q.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+be()*e,t.pause()}));else{const t=`-${be()*e}ms`;q.forEach((e=>{C.length>0&&(l(e,"animation-delay",t),l(e,"animation-play-state","paused"))}))}},Be=e=>{Q.forEach((e=>{e.effect.updateTiming({delay:we(),duration:be(),easing:Ae(),iterations:Ce(),fill:Ee(),direction:$e()})})),void 0!==e&&Ze(e)},Ge=(e=!0,t)=>{(0,o.r)((()=>{q.forEach((n=>{l(n,"animation-name",A||null),l(n,"animation-duration",`${be()}ms`),l(n,"animation-timing-function",Ae()),l(n,"animation-delay",void 0!==t?`-${t*be()}ms`:`${we()}ms`),l(n,"animation-fill-mode",Ee()||null),l(n,"animation-direction",$e()||null);const i=Ce()===1/0?"infinite":Ce().toString();l(n,"animation-iteration-count",i),e&&l(n,"animation-name",`${A}-alt`),(0,o.r)((()=>{l(n,"animation-name",A||null)}))}))}))},He=(e=!1,t=!0,n)=>(e&&z.forEach((o=>{o.update(e,t,n)})),V?Be(n):Ge(t,n),b),Je=(e=!1,t)=>(z.forEach((n=>{n.progressStart(e,t)})),Ve(),F=e,T||ze(),He(!1,!0,t),b),Qe=e=>(z.forEach((t=>{t.progressStep(e)})),Ze(e),b),Ue=(e,t,n)=>(F=!1,z.forEach((o=>{o.progressEnd(e,t,n)})),void 0!==n&&(E=n),O=!1,N=!0,0===e?(v="reverse"===$e()?"normal":"reverse","reverse"===v&&(N=!1),V?(He(),Ze(1-t)):($=(1-t)*be()*-1,He(!1,!1))):1===e&&(V?(He(),Ze(t)):($=t*be()*-1,He(!1,!1))),void 0!==e&&(oe((()=>{E=void 0,v=void 0,$=void 0}),{oneTimeCallback:!0}),u||it()),b),Ve=()=>{T&&(V?Q.forEach((e=>{e.pause()})):q.forEach((e=>{l(e,"animation-play-state","paused")})),x=!0)},Xe=()=>(z.forEach((e=>{e.pause()})),Ve(),b),Ye=()=>{y=void 0,je()},_e=()=>{y&&clearTimeout(y)},et=()=>{if(_e(),(0,o.r)((()=>{q.forEach((e=>{C.length>0&&l(e,"animation-play-state","running")}))})),0===C.length||0===q.length)je();else{const e=we()||0,t=be()||0,n=Ce()||1;isFinite(n)&&(y=setTimeout(Ye,e+t*n+X)),c(q[0],(()=>{_e(),(0,o.r)((()=>{tt(),(0,o.r)(je)}))}))}},tt=()=>{q.forEach((e=>{f(e,"animation-duration"),f(e,"animation-delay"),f(e,"animation-play-state")}))},nt=()=>{Q.forEach((e=>{e.play()})),0!==C.length&&0!==q.length||je()},ot=()=>{V?(Ze(0),Be()):Ge()},it=e=>new Promise((t=>{(null===e||void 0===e?void 0:e.sync)&&(R=!0,oe((()=>R=!1),{oneTimeCallback:!0})),T||ze(),O&&(ot(),O=!1),K&&(W=z.length+1,K=!1),oe((()=>t()),{oneTimeCallback:!0}),z.forEach((e=>{e.play()})),V?nt():et(),x=!1})),at=()=>{z.forEach((e=>{e.stop()})),T&&(ae(),T=!1),te()},rt=(e,t)=>{const n=C[0];return void 0===n||void 0!==n.offset&&0!==n.offset?C=[{offset:0,[e]:t},...C]:n[e]=t,b},st=(e,t)=>{const n=C[C.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?C=[...C,{offset:1,[e]:t}]:n[e]=t,b},lt=(e,t,n)=>rt(e,t).to(e,n);return b={parentAnimation:u,elements:q,childAnimations:z,id:I,animationFinish:je,from:rt,to:st,fromTo:lt,parent:Fe,play:it,pause:Xe,stop:at,destroy:_,keyframes:Oe,addAnimation:Ne,addElement:Re,update:He,fill:Se,direction:Te,iterations:We,duration:Pe,easing:Le,delay:De,getWebAnimations:Y,getKeyframes:ke,getFill:Ee,getDirection:$e,getDelay:we,getIterations:Ce,getEasing:Ae,getDuration:be,afterAddRead:fe,afterAddWrite:ce,afterClearStyles:ve,afterStyles:ye,afterRemoveClass:ge,afterAddClass:pe,beforeAddRead:se,beforeAddWrite:le,beforeClearStyles:ue,beforeStyles:he,beforeRemoveClass:me,beforeAddClass:de,onFinish:oe,isRunning:ne,progressStart:Je,progressStep:Qe,progressEnd:Ue}}}}]);
//# sourceMappingURL=980.a303018a.js.map