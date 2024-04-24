import{c,p as Ve,r as z,a as ue,i as oe,n as P,o as ie,aq as Ae,j as H,V as _e,a5 as we,ae as Be,s as $e,v as W,z as Ee,A as Te,h as k,a0 as ee,Q as ge,U as ze,B as Y,T as Pe,f as Oe,a9 as Ie,l as ne,ag as me,e as X,D as De,E as je,ar as Qe}from"./index.8659ee58.js";import{u as Se}from"./uid.42677368.js";const ce={dark:{type:Boolean,default:null}};function ve(e,t){return c(()=>e.dark===null?t.dark.isActive:e.dark)}function Me(e,t){return e===void 0?t===!0?`f_${Se()}`:void 0:e}function Ke(e,t=!0){if(Ve.value===!0){const l=z(e);return t===!0&&e===void 0&&ue(()=>{l.value=`f_${Se()}`}),l}return z(Me(e,t))}function Le({validate:e,resetValidation:t,requiresQForm:l}){const i=oe(Ae,!1);if(i!==!1){const{props:s,proxy:f}=H();Object.assign(f,{validate:e,resetValidation:t}),P(()=>s.disable,v=>{v===!0?(typeof t=="function"&&t(),i.unbindComponent(f)):i.bindComponent(f)}),ue(()=>{s.disable!==!0&&i.bindComponent(f)}),ie(()=>{s.disable!==!0&&i.unbindComponent(f)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const he=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,pe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,be=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ae=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,le=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,se={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>he.test(e),hexaColor:e=>pe.test(e),hexOrHexaColor:e=>be.test(e),rgbColor:e=>ae.test(e),rgbaColor:e=>le.test(e),rgbOrRgbaColor:e=>ae.test(e)||le.test(e),hexOrRgbColor:e=>he.test(e)||ae.test(e),hexaOrRgbaColor:e=>pe.test(e)||le.test(e),anyColor:e=>be.test(e)||ae.test(e)||le.test(e)},Ne=[!0,!1,"ondemand"],He={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ne.includes(e)}};function Ze(e,t){const{props:l,proxy:i}=H(),s=z(!1),f=z(null),v=z(!1);Le({validate:I,resetValidation:O});let g=0,q;const w=c(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length!==0),x=c(()=>l.disable!==!0&&w.value===!0&&t.value===!1),y=c(()=>l.error===!0||s.value===!0),Z=c(()=>typeof l.errorMessage=="string"&&l.errorMessage.length!==0?l.errorMessage:f.value);P(()=>l.modelValue,()=>{v.value=!0,x.value===!0&&l.lazyRules===!1&&E()});function $(){l.lazyRules!=="ondemand"&&x.value===!0&&v.value===!0&&E()}P(()=>l.reactiveRules,j=>{j===!0?q===void 0&&(q=P(()=>l.rules,$,{immediate:!0,deep:!0})):q!==void 0&&(q(),q=void 0)},{immediate:!0}),P(()=>l.lazyRules,$),P(e,j=>{j===!0?v.value=!0:x.value===!0&&l.lazyRules!=="ondemand"&&E()});function O(){g++,t.value=!1,v.value=!1,s.value=!1,f.value=null,E.cancel()}function I(j=l.modelValue){if(l.disable===!0||w.value===!1)return!0;const V=++g,U=t.value!==!0?()=>{v.value=!0}:()=>{},Q=(F,S)=>{F===!0&&U(),s.value=F,f.value=S||null,t.value=!1},D=[];for(let F=0;F<l.rules.length;F++){const S=l.rules[F];let B;if(typeof S=="function"?B=S(j,se):typeof S=="string"&&se[S]!==void 0&&(B=se[S](j)),B===!1||typeof B=="string")return Q(!0,B),!1;B!==!0&&B!==void 0&&D.push(B)}return D.length===0?(Q(!1),!0):(t.value=!0,Promise.all(D).then(F=>{if(F===void 0||Array.isArray(F)===!1||F.length===0)return V===g&&Q(!1),!0;const S=F.find(B=>B===!1||typeof B=="string");return V===g&&Q(S!==void 0,S),S===void 0},F=>(V===g&&(console.error(F),Q(!0)),!1)))}const E=_e(I,0);return ie(()=>{q!==void 0&&q(),E.cancel()}),Object.assign(i,{resetValidation:O,validate:I}),we(i,"hasError",()=>y.value),{isDirtyModel:v,hasRules:w,hasError:y,errorMessage:Z,validate:I,resetValidation:O}}const ye=/^on[A-Z]/;function Ue(e,t){const l={listeners:z({}),attributes:z({})};function i(){const s={},f={};for(const v in e)v!=="class"&&v!=="style"&&ye.test(v)===!1&&(s[v]=e[v]);for(const v in t.props)ye.test(v)===!0&&(f[v]=t.props[v]);l.attributes.value=s,l.listeners.value=f}return Be(i),i(),l}let G=[],te=[];function qe(e){te=te.filter(t=>t!==e)}function gt(e){qe(e),te.push(e)}function mt(e){qe(e),te.length===0&&G.length!==0&&(G[G.length-1](),G=[])}function Fe(e){te.length===0?e():G.push(e)}function We(e){G=G.filter(t=>t!==e)}function fe(e){return e!=null&&(""+e).length!==0}const Ye={...ce,...He,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ge=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Je({requiredForAttr:e=!0,tagProp:t}={}){const{props:l,attrs:i,proxy:s,vnode:f}=H(),v=ve(l,s.$q),g=Ke(l.for,e);return{requiredForAttr:e,tag:t===!0?c(()=>l.tag):{value:"label"},isDark:v,editable:c(()=>l.disable!==!0&&l.readonly!==!0),innerLoading:z(!1),focused:z(!1),hasPopupOpen:!1,splitAttrs:Ue(i,f),targetUid:g,rootRef:z(null),targetRef:z(null),controlRef:z(null)}}function Xe(e){const{props:t,emit:l,slots:i,attrs:s,proxy:f}=H(),{$q:v}=f;let g=null;e.hasValue===void 0&&(e.hasValue=c(()=>fe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{l("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:o}),Object.assign(e,{clearValue:d,onControlFocusin:r,onControlFocusout:o,focus:S}),e.computedCounter===void 0&&(e.computedCounter=c(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:q,hasRules:w,hasError:x,errorMessage:y,resetValidation:Z}=Ze(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?c(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):c(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),O=c(()=>t.bottomSlots===!0||t.hint!==void 0||w.value===!0||t.counter===!0||t.error!==null),I=c(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),E=c(()=>`q-field row no-wrap items-start q-field--${I.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&O.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),j=c(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=c(()=>t.labelSlot===!0||t.label!==void 0),U=c(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),Q=c(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),D=c(()=>{const n={};return e.targetUid.value&&(n.for=e.targetUid.value),t.disable===!0&&(n["aria-disabled"]="true"),n});P(()=>t.for,n=>{e.targetUid.value=Me(n,e.requiredForAttr)});function F(){const n=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(n===null||n.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==n&&h.focus({preventScroll:!0}))}function S(){Fe(F)}function B(){We(F);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function r(n){g!==null&&(clearTimeout(g),g=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",n))}function o(n,h){g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",n)),h!==void 0&&h())})}function d(n){$e(n),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",t.modelValue),W(()=>{const h=q.value;Z(),q.value=h})}function u(){const n=[];return i.prepend!==void 0&&n.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:ee},i.prepend())),n.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},p())),x.value===!0&&t.noErrorIcon===!1&&n.push(M("error",[k(ge,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(M("inner-loading-append",i.loading!==void 0?i.loading():[k(ze,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(M("inner-clearable-append",[k(ge,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:d})])),i.append!==void 0&&n.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:ee},i.append())),e.getInnerAppend!==void 0&&n.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function p(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(Q.value))),V.value===!0&&n.push(k("div",{class:U.value},Y(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(Y(i.default))}function m(){let n,h;x.value===!0?y.value!==null?(n=[k("div",{role:"alert"},y.value)],h=`q--slot-error-${y.value}`):(n=Y(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[k("div",t.hint)],h=`q--slot-hint-${t.hint}`):(n=Y(i.hint),h="q--slot-hint"));const K=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&K===!1&&n===void 0)return;const C=k("div",{key:h,class:"q-field__messages col"},n);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:ee},[t.hideBottomSpace===!0?C:k(Pe,{name:"q-transition--field-message"},()=>C),K===!0?k("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(n,h){return h===null?null:k("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let b=!1;return Ee(()=>{b=!0}),Te(()=>{b===!0&&t.autofocus===!0&&f.focus()}),t.autofocus===!0&&ue(()=>{f.focus()}),ie(()=>{g!==null&&clearTimeout(g)}),Object.assign(f,{focus:S,blur:B}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...D.value}:D.value;return k(e.tag.value,{ref:e.rootRef,class:[E.value,s.class],style:s.style,...h},[i.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:ee},i.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:j.value,tabindex:-1,...e.controlEvents},u()),O.value===!0?m():null]),i.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:ee},i.after()):null])}}const ke={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},re={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Re=Object.keys(re);Re.forEach(e=>{re[e].regex=new RegExp(re[e].pattern)});const et=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Re.join("")+"])|(.)","g"),xe=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),tt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function nt(e,t,l,i){let s,f,v,g,q,w;const x=z(null),y=z($());function Z(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,I),P(()=>e.mask,r=>{if(r!==void 0)E(y.value,!0);else{const o=S(y.value);I(),e.modelValue!==o&&t("update:modelValue",o)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&E(y.value,!0)}),P(()=>e.unmaskedValue,()=>{x.value===!0&&E(y.value)});function $(){if(I(),x.value===!0){const r=D(S(e.modelValue));return e.fillMask!==!1?B(r):r}return e.modelValue}function O(r){if(r<s.length)return s.slice(-r);let o="",d=s;const u=d.indexOf(A);if(u>-1){for(let p=r-d.length;p>0;p--)o+=A;d=d.slice(0,u)+o+d.slice(u)}return d}function I(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&Z(),x.value===!1){g=void 0,s="",f="";return}const r=ke[e.mask]===void 0?e.mask:ke[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",d=o.replace(xe,"\\$&"),u=[],p=[],m=[];let M=e.reverseFillMask===!0,b="",n="";r.replace(et,(_,a,R,N,L)=>{if(N!==void 0){const T=re[N];m.push(T),n=T.negate,M===!0&&(p.push("(?:"+n+"+)?("+T.pattern+"+)?(?:"+n+"+)?("+T.pattern+"+)?"),M=!1),p.push("(?:"+n+"+)?("+T.pattern+")?")}else if(R!==void 0)b="\\"+(R==="\\"?"":R),m.push(R),u.push("([^"+b+"]+)?"+b+"?");else{const T=a!==void 0?a:L;b=T==="\\"?"\\\\\\\\":T.replace(xe,"\\\\$&"),m.push(T),u.push("([^"+b+"]+)?"+b+"?")}});const h=new RegExp("^"+u.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),K=p.length-1,C=p.map((_,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+d+"*"+_):a===K?new RegExp("^"+_+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":d+"*")):new RegExp("^"+_));v=m,g=_=>{const a=h.exec(e.reverseFillMask===!0?_:_.slice(0,m.length+1));a!==null&&(_=a.slice(1).join(""));const R=[],N=C.length;for(let L=0,T=_;L<N;L++){const J=C[L].exec(T);if(J===null)break;T=T.slice(J.shift().length),R.push(...J)}return R.length!==0?R.join(""):_},s=m.map(_=>typeof _=="string"?_:A).join(""),f=s.split(A).join(o)}function E(r,o,d){const u=i.value,p=u.selectionEnd,m=u.value.length-p,M=S(r);o===!0&&I();const b=D(M),n=e.fillMask!==!1?B(b):b,h=y.value!==n;u.value!==n&&(u.value=n),h===!0&&(y.value=n),document.activeElement===u&&W(()=>{if(n===f){const C=e.reverseFillMask===!0?f.length:0;u.setSelectionRange(C,C,"forward");return}if(d==="insertFromPaste"&&e.reverseFillMask!==!0){const C=u.selectionEnd;let _=p-1;for(let a=q;a<=_&&a<C;a++)s[a]!==A&&_++;V.right(u,_);return}if(["deleteContentBackward","deleteContentForward"].indexOf(d)>-1){const C=e.reverseFillMask===!0?p===0?n.length>b.length?1:0:Math.max(0,n.length-(n===f?0:Math.min(b.length,m)+1))+1:p;u.setSelectionRange(C,C,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const C=Math.max(0,n.length-(n===f?0:Math.min(b.length,m+1)));C===1&&p===1?u.setSelectionRange(C,C,"forward"):V.rightReverse(u,C)}else{const C=n.length-m;u.setSelectionRange(C,C,"backward")}else if(h===!0){const C=Math.max(0,s.indexOf(A),Math.min(b.length,p)-1);V.right(u,C)}else{const C=p-1;V.right(u,C)}});const K=e.unmaskedValue===!0?S(n):n;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&l(K,!0)}function j(r,o,d){const u=D(S(r.value));o=Math.max(0,s.indexOf(A),Math.min(u.length,o)),q=o,r.setSelectionRange(o,d,"forward")}const V={left(r,o){const d=s.slice(o-1).indexOf(A)===-1;let u=Math.max(0,o-1);for(;u>=0;u--)if(s[u]===A){o=u,d===!0&&o++;break}if(u<0&&s[o]!==void 0&&s[o]!==A)return V.right(r,0);o>=0&&r.setSelectionRange(o,o,"backward")},right(r,o){const d=r.value.length;let u=Math.min(d,o+1);for(;u<=d;u++)if(s[u]===A){o=u;break}else s[u-1]===A&&(o=u);if(u>d&&s[o-1]!==void 0&&s[o-1]!==A)return V.left(r,d);r.setSelectionRange(o,o,"forward")},leftReverse(r,o){const d=O(r.value.length);let u=Math.max(0,o-1);for(;u>=0;u--)if(d[u-1]===A){o=u;break}else if(d[u]===A&&(o=u,u===0))break;if(u<0&&d[o]!==void 0&&d[o]!==A)return V.rightReverse(r,0);o>=0&&r.setSelectionRange(o,o,"backward")},rightReverse(r,o){const d=r.value.length,u=O(d),p=u.slice(0,o+1).indexOf(A)===-1;let m=Math.min(d,o+1);for(;m<=d;m++)if(u[m-1]===A){o=m,o>0&&p===!0&&o--;break}if(m>d&&u[o-1]!==void 0&&u[o-1]!==A)return V.leftReverse(r,d);r.setSelectionRange(o,o,"forward")}};function U(r){t("click",r),w=void 0}function Q(r){if(t("keydown",r),Oe(r)===!0||r.altKey===!0)return;const o=i.value,d=o.selectionStart,u=o.selectionEnd;if(r.shiftKey||(w=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&w===void 0&&(w=o.selectionDirection==="forward"?d:u);const p=V[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),p(o,w===d?u:d),r.shiftKey){const m=o.selectionStart;o.setSelectionRange(Math.min(w,m),Math.max(w,m),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&d===u?(V.left(o,d),o.setSelectionRange(o.selectionStart,u,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&d===u&&(V.rightReverse(o,u),o.setSelectionRange(d,o.selectionEnd,"forward"))}function D(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return F(r);const o=v;let d=0,u="";for(let p=0;p<o.length;p++){const m=r[d],M=o[p];if(typeof M=="string")u+=M,m===M&&d++;else if(m!==void 0&&M.regex.test(m))u+=M.transform!==void 0?M.transform(m):m,d++;else return u}return u}function F(r){const o=v,d=s.indexOf(A);let u=r.length-1,p="";for(let m=o.length-1;m>=0&&u>-1;m--){const M=o[m];let b=r[u];if(typeof M=="string")p=M+p,b===M&&u--;else if(b!==void 0&&M.regex.test(b))do p=(M.transform!==void 0?M.transform(b):b)+p,u--,b=r[u];while(d===m&&b!==void 0&&M.regex.test(b));else return p}return p}function S(r){return typeof r!="string"||g===void 0?typeof r=="number"?g(""+r):r:g(r)}function B(r){return f.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?f.slice(0,-r.length)+r:r+f.slice(r.length)}return{innerValue:y,hasMask:x,moveCursorForPaste:j,updateMaskValue:E,onMaskedKeydown:Q,onMaskedClick:U}}const at={name:String};function ht(e={}){return(t,l,i)=>{t[l](k("input",{class:"hidden"+(i||""),...e.value}))}}function lt(e){return c(()=>e.name||e.for)}function ot(e,t){function l(){const i=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(f=>{s.items.add(f)}),{files:s.files}}catch{return{files:void 0}}}return t===!0?c(()=>{if(e.type==="file")return l()}):c(l)}const rt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ut=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,it=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,st=/[a-z0-9_ -]$/i;function dt(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(Ie.is.firefox===!0?st.test(l.data)===!1:rt.test(l.data)===!0||ut.test(l.data)===!0||it.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}var pt=ne({name:"QInput",inheritAttrs:!1,props:{...Ye,...tt,...at,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ge,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:l}){const{proxy:i}=H(),{$q:s}=i,f={};let v=NaN,g,q,w=null,x;const y=z(null),Z=lt(e),{innerValue:$,hasMask:O,moveCursorForPaste:I,updateMaskValue:E,onMaskedKeydown:j,onMaskedClick:V}=nt(e,t,b,y),U=ot(e,!0),Q=c(()=>fe($.value)),D=dt(m),F=Je(),S=c(()=>e.type==="textarea"||e.autogrow===!0),B=c(()=>S.value===!0||["text","search","url","tel","password"].includes(e.type)),r=c(()=>{const a={...F.splitAttrs.listeners.value,onInput:m,onPaste:p,onChange:h,onBlur:K,onFocus:me};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=D,O.value===!0&&(a.onKeydown=j,a.onClick=V),e.autogrow===!0&&(a.onAnimationend=M),a}),o=c(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Z.value,...F.splitAttrs.attributes.value,id:F.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return S.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});P(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),P(()=>e.modelValue,a=>{if(O.value===!0){if(q===!0&&(q=!1,String(a)===v))return;E(a)}else $.value!==a&&($.value=a,e.type==="number"&&f.hasOwnProperty("value")===!0&&(g===!0?g=!1:delete f.value));e.autogrow===!0&&W(n)}),P(()=>e.autogrow,a=>{a===!0?W(n):y.value!==null&&l.rows>0&&(y.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&W(n)});function d(){Fe(()=>{const a=document.activeElement;y.value!==null&&y.value!==a&&(a===null||a.id!==F.targetUid.value)&&y.value.focus({preventScroll:!0})})}function u(){y.value!==null&&y.value.select()}function p(a){if(O.value===!0&&e.reverseFillMask!==!0){const R=a.target;I(R,R.selectionStart,R.selectionEnd)}t("paste",a)}function m(a){if(!a||!a.target)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const R=a.target.value;if(a.target.qComposing===!0){f.value=R;return}if(O.value===!0)E(R,!1,a.inputType);else if(b(R),B.value===!0&&a.target===document.activeElement){const{selectionStart:N,selectionEnd:L}=a.target;N!==void 0&&L!==void 0&&W(()=>{a.target===document.activeElement&&R.indexOf(a.target.value)===0&&a.target.setSelectionRange(N,L)})}e.autogrow===!0&&n()}function M(a){t("animationend",a),n()}function b(a,R){x=()=>{w=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==a&&v!==a&&(v=a,R===!0&&(q=!0),t("update:modelValue",a),W(()=>{v===a&&(v=NaN)})),x=void 0},e.type==="number"&&(g=!0,f.value=a),e.debounce!==void 0?(w!==null&&clearTimeout(w),f.value=a,w=setTimeout(x,e.debounce)):x()}function n(){requestAnimationFrame(()=>{const a=y.value;if(a!==null){const R=a.parentNode.style,{scrollTop:N}=a,{overflowY:L,maxHeight:T}=s.platform.is.firefox===!0?{}:window.getComputedStyle(a),J=L!==void 0&&L!=="scroll";J===!0&&(a.style.overflowY="hidden"),R.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",J===!0&&(a.style.overflowY=parseInt(T,10)<a.scrollHeight?"auto":"hidden"),R.marginBottom="",a.scrollTop=N}})}function h(a){D(a),w!==null&&(clearTimeout(w),w=null),x!==void 0&&x(),t("change",a.target.value)}function K(a){a!==void 0&&me(a),w!==null&&(clearTimeout(w),w=null),x!==void 0&&x(),g=!1,q=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=$.value!==void 0?$.value:"")})}function C(){return f.hasOwnProperty("value")===!0?f.value:$.value!==void 0?$.value:""}ie(()=>{K()}),ue(()=>{e.autogrow===!0&&n()}),Object.assign(F,{innerValue:$,fieldClass:c(()=>`q-${S.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:c(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:y,emitValue:b,hasValue:Q,floatingLabel:c(()=>Q.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||fe(e.displayValue)),getControl:()=>k(S.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...r.value,...e.type!=="file"?{value:C()}:U.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(S.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},C()),k("span",e.shadowText)])});const _=Xe(F);return Object.assign(i,{focus:d,select:u,getNativeElement:()=>y.value}),we(i,"nativeEl",()=>y.value),_}});const ft={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},de={xs:2,sm:4,md:8,lg:16,xl:24};var bt=ne({name:"QSeparator",props:{...ce,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=H(),l=ve(e,t.proxy.$q),i=c(()=>e.vertical===!0?"vertical":"horizontal"),s=c(()=>` q-separator--${i.value}`),f=c(()=>e.inset!==!1?`${s.value}-${ft[e.inset]}`:""),v=c(()=>`q-separator${s.value}${f.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),g=c(()=>{const q={};if(e.size!==void 0&&(q[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const w=e.spaced===!0?`${de.md}px`:e.spaced in de?`${de[e.spaced]}px`:e.spaced,x=e.vertical===!0?["Left","Right"]:["Top","Bottom"];q[`margin${x[0]}`]=q[`margin${x[1]}`]=w}return q});return()=>k("hr",{class:v.value,style:g.value,"aria-orientation":i.value})}});const Ce=["B","KB","MB","GB","TB","PB"];function yt(e){let t=0;for(;parseInt(e,10)>=1024&&t<Ce.length-1;)e/=1024,++t;return`${e.toFixed(1)}${Ce[t]}`}function kt(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function xt(e,t,l){if(l<=t)return t;const i=l-t+1;let s=t+(e-t)%i;return s<t&&(s=i+s),s===0?0:s}var Ct=ne({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const l=c(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>k(e.tag,{class:l.value},Y(t.default))}}),wt=ne({name:"QCard",props:{...ce,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=H(),i=ve(e,l),s=c(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>k(e.tag,{class:s.value},Y(t.default))}}),St=ne({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:l}}=H(),i=oe(De,X);if(i===X)return console.error("QPage needs to be a deep child of QLayout"),X;if(oe(je,X)===X)return console.error("QPage needs to be child of QPageContainer"),X;const f=c(()=>{const g=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const q=i.isContainer.value===!0?i.containerHeight.value:l.screen.height;return e.styleFn(g,q)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-g+"px":l.screen.height===0?g!==0?`calc(100vh - ${g}px)`:"100vh":l.screen.height-g+"px"}}),v=c(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>k("main",{class:v.value,style:f.value},Y(t.default))}});function Mt(){return oe(Qe)}export{bt as Q,ve as a,Ye as b,Ge as c,Xe as d,Je as e,gt as f,Fe as g,at as h,lt as i,fe as j,dt as k,ht as l,Mt as m,xt as n,St as o,pt as p,wt as q,mt as r,Ct as s,kt as t,ce as u,yt as v};
