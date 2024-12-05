import{i as ce,e as F,r as L,c as v,o as K,a as U,t as Pe,w as Ge,R as Xe,h as w,s as qe,d as Je,f as Ye,Q as te,g as $e,j as D,k as Ze,l as p,u as et,m as tt,n as I,p as ke,q as ze,v as Se,x as se,y as de,z as nt,A as at,B as Be,C as lt,D as fe,E as ot,F as it,G as rt,H as ut,I as re,J as Z,K as st,L as ct,M as dt,N as ft,O as ee,P as j}from"./index.5653b5d8.js";import{u as vt,a as ue,b as Le,r as ht}from"./rtl.0e494107.js";let bt=0;const gt=["click","keydown"],mt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${bt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function yt(e,_,o,n){const a=ce(Pe,F);if(a===F)return console.error("QTab/QRouteTab component needs to be child of QTabs"),F;const{proxy:h}=D(),m=L(null),x=L(null),b=L(null),c=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),R=v(()=>a.currentModel.value===e.name),k=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(R.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(n!==void 0?n.linkClass.value:"")),$=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),d=v(()=>e.disable===!0||a.hasFocus.value===!0||R.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function C(i,r){if(r!==!0&&m.value!==null&&m.value.focus(),e.disable===!0){n!==void 0&&n.hasRouterLink.value===!0&&qe(i);return}if(n===void 0){a.updateModel({name:e.name}),o("click",i);return}if(n.hasRouterLink.value===!0){const g=(T={})=>{let P;const B=T.to===void 0||Ze(T.to,e.to)===!0?a.avoidRouteWatcher=vt():null;return n.navigateToRouterLink(i,{...T,returnRouterError:!0}).catch(E=>{P=E}).then(E=>{if(B===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,P===void 0&&(E===void 0||E.message!==void 0&&E.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),T.returnRouterError===!0)return P!==void 0?Promise.reject(P):E})};o("click",i,g),i.defaultPrevented!==!0&&g();return}o("click",i)}function A(i){Je(i,[13,32])?C(i,!0):Ye(i)!==!0&&i.keyCode>=35&&i.keyCode<=40&&i.altKey!==!0&&i.metaKey!==!0&&a.onKbdNavigate(i.keyCode,h.$el)===!0&&qe(i),o("keydown",i)}function Q(){const i=a.tabProps.value.narrowIndicator,r=[],g=w("div",{ref:b,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&r.push(w(te,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&r.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&r.push(e.alertIcon!==void 0?w(te,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),i===!0&&r.push(g);const T=[w("div",{class:"q-focus-helper",tabindex:-1,ref:m}),w("div",{class:$.value},$e(_.default,r))];return i===!1&&T.push(g),T}const M={name:v(()=>e.name),rootRef:x,tabIndicatorRef:b,routeData:n};K(()=>{a.unregisterTab(M)}),U(()=>{a.registerTab(M)});function u(i,r){const g={ref:x,class:k.value,tabindex:d.value,role:"tab","aria-selected":R.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:C,onKeydown:A,...r};return Ge(w(i,g,Q()),[[Xe,c.value]])}return{renderTab:u,$tabs:a}}var Re=p({name:"QRouteTab",props:{...et,...mt},emits:gt,setup(e,{slots:_,emit:o}){const n=tt({useDisableForRouterLinkProps:!1}),{renderTab:a,$tabs:h}=yt(e,_,o,{exact:v(()=>e.exact),...n});return I(()=>`${e.name} | ${e.exact} | ${(n.resolvedLink.value||{}).href}`,()=>{h.verifyRouteModel()}),()=>a(n.linkTag.value,n.linkAttrs.value)}});function wt(){const e=L(!ke.value);return e.value===!1&&U(()=>{e.value=!0}),e}const Ie=typeof ResizeObserver!="undefined",_e=Ie===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ne=p({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:_}){let o=null,n,a={width:-1,height:-1};function h(b){b===!0||e.debounce===0||e.debounce==="0"?m():o===null&&(o=setTimeout(m,e.debounce))}function m(){if(o!==null&&(clearTimeout(o),o=null),n){const{offsetWidth:b,offsetHeight:c}=n;(b!==a.width||c!==a.height)&&(a={width:b,height:c},_("resize",a))}}const{proxy:x}=D();if(x.trigger=h,Ie===!0){let b;const c=R=>{n=x.$el.parentNode,n?(b=new ResizeObserver(h),b.observe(n),m()):R!==!0&&Se(()=>{c(!0)})};return U(()=>{c()}),K(()=>{o!==null&&clearTimeout(o),b!==void 0&&(b.disconnect!==void 0?b.disconnect():n&&b.unobserve(n))}),ze}else{let R=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",h,se.passive),c=void 0)},k=function(){R(),n&&n.contentDocument&&(c=n.contentDocument.defaultView,c.addEventListener("resize",h,se.passive),m())};const b=wt();let c;return U(()=>{Se(()=>{n=x.$el,n&&k()})}),K(R),()=>{if(b.value===!0)return w("object",{style:_e.style,tabindex:-1,type:"text/html",data:_e.url,"aria-hidden":"true",onLoad:k})}}}});function Tt(e,_,o){const n=o===!0?["left","right"]:["top","bottom"];return`absolute-${_===!0?n[0]:n[1]}${e?` text-${e}`:""}`}const Ct=["left","center","right","justify"];var qt=p({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ct.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:_,emit:o}){const{proxy:n}=D(),{$q:a}=n,{registerTick:h}=ue(),{registerTick:m}=ue(),{registerTick:x}=ue(),{registerTimeout:b,removeTimeout:c}=Le(),{registerTimeout:R,removeTimeout:k}=Le(),$=L(null),d=L(null),C=L(e.modelValue),A=L(!1),Q=L(!0),M=L(!1),u=L(!1),i=[],r=L(0),g=L(!1);let T=null,P=null,B;const E=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Tt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ae=v(()=>{const t=r.value,l=C.value;for(let s=0;s<t;s++)if(i[s].name.value===l)return!0;return!1}),Me=v(()=>`q-tabs__content--align-${A.value===!0?"left":u.value===!0?"justify":e.align}`),Ee=v(()=>`q-tabs row no-wrap items-center q-tabs--${A.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Qe=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Me.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),G=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),X=v(()=>e.vertical!==!0&&a.lang.rtl===!0),ae=v(()=>ht===!1&&X.value===!0);I(X,N),I(()=>e.modelValue,t=>{le({name:t,setCurrent:!0,skipEmit:!0})}),I(()=>e.outsideArrows,J);function le({name:t,setCurrent:l,skipEmit:s}){C.value!==t&&(s!==!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",t),(l===!0||e["onUpdate:modelValue"]===void 0)&&(He(C.value,t),C.value=t))}function J(){h(()=>{ve({width:$.value.offsetWidth,height:$.value.offsetHeight})})}function ve(t){if(G.value===void 0||d.value===null)return;const l=t[G.value.container],s=Math.min(d.value[G.value.scroll],Array.prototype.reduce.call(d.value.children,(S,y)=>S+(y[G.value.content]||0),0)),q=l>0&&s>l;A.value=q,q===!0&&m(N),u.value=l<parseInt(e.breakpoint,10)}function He(t,l){const s=t!=null&&t!==""?i.find(S=>S.name.value===t):null,q=l!=null&&l!==""?i.find(S=>S.name.value===l):null;if(s&&q){const S=s.tabIndicatorRef.value,y=q.tabIndicatorRef.value;T!==null&&(clearTimeout(T),T=null),S.style.transition="none",S.style.transform="none",y.style.transition="none",y.style.transform="none";const f=S.getBoundingClientRect(),z=y.getBoundingClientRect();y.style.transform=e.vertical===!0?`translate3d(0,${f.top-z.top}px,0) scale3d(1,${z.height?f.height/z.height:1},1)`:`translate3d(${f.left-z.left}px,0,0) scale3d(${z.width?f.width/z.width:1},1,1)`,x(()=>{T=setTimeout(()=>{T=null,y.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",y.style.transform="none"},70)})}q&&A.value===!0&&W(q.rootRef.value)}function W(t){const{left:l,width:s,top:q,height:S}=d.value.getBoundingClientRect(),y=t.getBoundingClientRect();let f=e.vertical===!0?y.top-q:y.left-l;if(f<0){d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(f),N();return}f+=e.vertical===!0?y.height-S:y.width-s,f>0&&(d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(f),N())}function N(){const t=d.value;if(t===null)return;const l=t.getBoundingClientRect(),s=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);X.value===!0?(Q.value=Math.ceil(s+l.width)<t.scrollWidth-1,M.value=s>0):(Q.value=s>0,M.value=e.vertical===!0?Math.ceil(s+l.height)<t.scrollHeight:Math.ceil(s+l.width)<t.scrollWidth)}function he(t){P!==null&&clearInterval(P),P=setInterval(()=>{Oe(t)===!0&&V()},5)}function be(){he(ae.value===!0?Number.MAX_SAFE_INTEGER:0)}function ge(){he(ae.value===!0?0:Number.MAX_SAFE_INTEGER)}function V(){P!==null&&(clearInterval(P),P=null)}function Fe(t,l){const s=Array.prototype.filter.call(d.value.children,z=>z===l||z.matches&&z.matches(".q-tab.q-focusable")===!0),q=s.length;if(q===0)return;if(t===36)return W(s[0]),s[0].focus(),!0;if(t===35)return W(s[q-1]),s[q-1].focus(),!0;const S=t===(e.vertical===!0?38:37),y=t===(e.vertical===!0?40:39),f=S===!0?-1:y===!0?1:void 0;if(f!==void 0){const z=X.value===!0?-1:1,H=s.indexOf(l)+f*z;return H>=0&&H<q&&(W(s[H]),s[H].focus({preventScroll:!0})),!0}}const Ve=v(()=>ae.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,l)=>{t.scrollLeft=-l}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,l)=>{t.scrollTop=l}}:{get:t=>t.scrollLeft,set:(t,l)=>{t.scrollLeft=l}});function Oe(t){const l=d.value,{get:s,set:q}=Ve.value;let S=!1,y=s(l);const f=t<y?-1:1;return y+=f*5,y<0?(S=!0,y=0):(f===-1&&y<=t||f===1&&y>=t)&&(S=!0,y=t),q(l,y),N(),S}function me(t,l){for(const s in t)if(t[s]!==l[s])return!1;return!0}function De(){let t=null,l={matchedLen:0,queryDiff:9999,hrefLen:0};const s=i.filter(f=>f.routeData!==void 0&&f.routeData.hasRouterLink.value===!0),{hash:q,query:S}=n.$route,y=Object.keys(S).length;for(const f of s){const z=f.routeData.exact.value===!0;if(f.routeData[z===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:H,query:oe,matched:Ke,href:Ue}=f.routeData.resolvedLink.value,ie=Object.keys(oe).length;if(z===!0){if(H!==q||ie!==y||me(S,oe)===!1)continue;t=f.name.value;break}if(H!==""&&H!==q||ie!==0&&me(oe,S)===!1)continue;const O={matchedLen:Ke.length,queryDiff:y-ie,hrefLen:Ue.length-H.length};if(O.matchedLen>l.matchedLen){t=f.name.value,l=O;continue}else if(O.matchedLen!==l.matchedLen)continue;if(O.queryDiff<l.queryDiff)t=f.name.value,l=O;else if(O.queryDiff!==l.queryDiff)continue;O.hrefLen>l.hrefLen&&(t=f.name.value,l=O)}t===null&&i.some(f=>f.routeData===void 0&&f.name.value===C.value)===!0||le({name:t,setCurrent:!0})}function pe(t){if(c(),g.value!==!0&&$.value!==null&&t.target&&typeof t.target.closest=="function"){const l=t.target.closest(".q-tab");l&&$.value.contains(l)===!0&&(g.value=!0,A.value===!0&&W(l))}}function We(){b(()=>{g.value=!1},30)}function Y(){we.avoidRouteWatcher===!1?R(De):k()}function ye(){if(B===void 0){const t=I(()=>n.$route.fullPath,Y);B=()=>{t(),B=void 0}}}function Ne(t){i.push(t),r.value++,J(),t.routeData===void 0||n.$route===void 0?R(()=>{if(A.value===!0){const l=C.value,s=l!=null&&l!==""?i.find(q=>q.name.value===l):null;s&&W(s.rootRef.value)}}):(ye(),t.routeData.hasRouterLink.value===!0&&Y())}function je(t){i.splice(i.indexOf(t),1),r.value--,J(),B!==void 0&&t.routeData!==void 0&&(i.every(l=>l.routeData===void 0)===!0&&B(),Y())}const we={currentModel:C,tabProps:E,hasFocus:g,hasActiveTab:Ae,registerTab:Ne,unregisterTab:je,verifyRouteModel:Y,updateModel:le,onKbdNavigate:Fe,avoidRouteWatcher:!1};de(Pe,we);function Te(){T!==null&&clearTimeout(T),V(),B!==void 0&&B()}let Ce;return K(Te),nt(()=>{Ce=B!==void 0,Te()}),at(()=>{Ce===!0&&ye(),J()}),()=>w("div",{ref:$,class:Ee.value,role:"tablist",onFocusin:pe,onFocusout:We},[w(ne,{onResize:ve}),w("div",{ref:d,class:Qe.value,onScroll:N},Be(_.default)),w(te,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:be,onTouchstartPassive:be,onMouseupPassive:V,onMouseleavePassive:V,onTouchendPassive:V}),w(te,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ge,onTouchstartPassive:ge,onMouseupPassive:V,onMouseleavePassive:V,onTouchendPassive:V})])}}),St=p({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:_,emit:o}){const{proxy:{$q:n}}=D(),a=ce(fe,F);if(a===F)return console.error("QHeader needs to be child of QLayout"),F;const h=L(parseInt(e.heightHint,10)),m=L(!0),x=v(()=>e.reveal===!0||a.view.value.indexOf("H")>-1||n.platform.is.ios&&a.isContainer.value===!0),b=v(()=>{if(e.modelValue!==!0)return 0;if(x.value===!0)return m.value===!0?h.value:0;const u=h.value-a.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||x.value===!0&&m.value!==!0),R=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),k=v(()=>"q-header q-layout__section--marginal "+(x.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),$=v(()=>{const u=a.rows.value.top,i={};return u[0]==="l"&&a.left.space===!0&&(i[n.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),u[2]==="r"&&a.right.space===!0&&(i[n.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),i});function d(u,i){a.update("header",u,i)}function C(u,i){u.value!==i&&(u.value=i)}function A({height:u}){C(h,u),d("size",u)}function Q(u){R.value===!0&&C(m,!0),o("focusin",u)}I(()=>e.modelValue,u=>{d("space",u),C(m,!0),a.animate()}),I(b,u=>{d("offset",u)}),I(()=>e.reveal,u=>{u===!1&&C(m,e.modelValue)}),I(m,u=>{a.animate(),o("reveal",u)}),I(a.scroll,u=>{e.reveal===!0&&C(m,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const M={};return a.instances.header=M,e.modelValue===!0&&d("size",h.value),d("space",e.modelValue),d("offset",b.value),K(()=>{a.instances.header===M&&(a.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const u=lt(_.default,[]);return e.elevated===!0&&u.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(w(ne,{debounce:0,onResize:A})),w("header",{class:k.value,style:$.value,onFocusin:Q},u)}}}),Lt=p({name:"QPageContainer",setup(e,{slots:_}){const{proxy:{$q:o}}=D(),n=ce(fe,F);if(n===F)return console.error("QPageContainer needs to be child of QLayout"),F;de(ot,!0);const a=v(()=>{const h={};return n.header.space===!0&&(h.paddingTop=`${n.header.size}px`),n.right.space===!0&&(h[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(h.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(h[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),h});return()=>w("div",{class:"q-page-container",style:a.value},Be(_.default))}});const{passive:xe}=se,Rt=["both","horizontal","vertical"];var _t=p({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Rt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:_}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,a,h;I(()=>e.scrollTarget,()=>{b(),x()});function m(){n!==null&&n();const k=Math.max(0,rt(a)),$=ut(a),d={top:k-o.position.top,left:$-o.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const C=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";o.position={top:k,left:$},o.directionChanged=o.direction!==C,o.delta=d,o.directionChanged===!0&&(o.direction=C,o.inflectionPoint=o.position),_("scroll",{...o})}function x(){a=it(h,e.scrollTarget),a.addEventListener("scroll",c,xe),c(!0)}function b(){a!==void 0&&(a.removeEventListener("scroll",c,xe),a=void 0)}function c(k){if(k===!0||e.debounce===0||e.debounce==="0")m();else if(n===null){const[$,d]=e.debounce?[setTimeout(m,e.debounce),clearTimeout]:[requestAnimationFrame(m),cancelAnimationFrame];n=()=>{d($),n=null}}}const{proxy:R}=D();return I(()=>R.$q.lang.rtl,m),U(()=>{h=R.$el.parentNode,x()}),K(()=>{n!==null&&n(),b()}),Object.assign(R,{trigger:c,getPosition:()=>o}),ze}}),xt=p({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:_,emit:o}){const{proxy:{$q:n}}=D(),a=L(null),h=L(n.screen.height),m=L(e.container===!0?0:n.screen.width),x=L({position:0,direction:"down",inflectionPoint:0}),b=L(0),c=L(ke.value===!0?0:re()),R=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=v(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),$=v(()=>c.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),d=v(()=>c.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function C(r){if(e.container===!0||document.qScrollPrevented!==!0){const g={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};x.value=g,e.onScroll!==void 0&&o("scroll",g)}}function A(r){const{height:g,width:T}=r;let P=!1;h.value!==g&&(P=!0,h.value=g,e.onScrollHeight!==void 0&&o("scrollHeight",g),M()),m.value!==T&&(P=!0,m.value=T),P===!0&&e.onResize!==void 0&&o("resize",r)}function Q({height:r}){b.value!==r&&(b.value=r,M())}function M(){if(e.container===!0){const r=h.value>b.value?re():0;c.value!==r&&(c.value=r)}}let u=null;const i={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:a,height:h,containerHeight:b,scrollbarWidth:c,totalWidth:v(()=>m.value+c.value),rows:v(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:x,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,g,T){i[r][g]=T}};if(de(fe,i),re()>0){let T=function(){r=null,g.classList.remove("hide-scrollbar")},P=function(){if(r===null){if(g.scrollHeight>n.screen.height)return;g.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(T,300)},B=function(E){r!==null&&E==="remove"&&(clearTimeout(r),T()),window[`${E}EventListener`]("resize",P)},r=null;const g=document.body;I(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),st(()=>{B("remove")})}return()=>{const r=$e(_.default,[w(_t,{onScroll:C}),w(ne,{onResize:A})]),g=w("div",{class:R.value,style:k.value,ref:e.container===!0?void 0:a,tabindex:-1},r);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:a},[w(ne,{onResize:Q}),w("div",{class:"absolute-full",style:$.value},[w("div",{class:"scroll",style:d.value},[g])])]):g}}});const kt={__name:"IndexLayout",setup(e){return(_,o)=>{const n=ct("router-view");return dt(),ft(xt,{view:"hHh Lpr fFf"},{default:ee(()=>[j(St,null,{default:ee(()=>[j(qt,null,{default:ee(()=>[j(Re,{icon:"list",to:"/",replace:"",label:"Listado"}),j(Re,{icon:"receipt_long",to:"/form",replace:"",label:"Formulario"})]),_:1})]),_:1}),j(Lt,null,{default:ee(()=>[j(n)]),_:1})]),_:1})}}};export{kt as default};