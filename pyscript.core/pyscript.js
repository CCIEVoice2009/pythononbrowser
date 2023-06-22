Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const e=(e,t=document)=>t.querySelector(e),t=(e,t=document)=>[...t.querySelectorAll(e)],r=(e,t=document)=>{const r=(new XPathEvaluator).createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),n=[];for(let e=0,{snapshotLength:t}=r;e<t;e++)n.push(r.snapshotItem(e));return n},n="object"==typeof self?self:globalThis,s=e=>((e,t)=>{const r=(t,r)=>(e.set(r,t),t),s=o=>{if(e.has(o))return e.get(o);const[a,i]=t[o];switch(a){case 0:case-1:return r(i,o);case 1:{const e=r([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=r({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return r(new Date(i),o);case 4:{const{source:e,flags:t}=i;return r(new RegExp(e,t),o)}case 5:{const e=r(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=r(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:e,message:t}=i;return r(new n[e](t),o)}case 8:return r(BigInt(i),o);case"BigInt":return r(Object(BigInt(i)),o)}return r(new n[a](i),o)};return s})(new Map,e)(0),o="",{toString:a}={},{keys:i}=Object,c=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const r=a.call(e).slice(8,-1);switch(r){case"Array":return[1,o];case"Object":return[2,o];case"Date":return[3,o];case"RegExp":return[4,o];case"Map":return[5,o];case"Set":return[6,o]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},l=([e,t])=>0===e&&("function"===t||"symbol"===t),u=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const s=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},o=n=>{if(r.has(n))return r.get(n);let[a,u]=c(n);switch(a){case 0:{let t=n;switch(u){case"bigint":a=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return s([-1],n)}return s([a,t],n)}case 1:{if(u)return s([u,[...n]],n);const e=[],t=s([a,e],n);for(const t of n)e.push(o(t));return t}case 2:{if(u)switch(u){case"BigInt":return s([u,n.toString()],n);case"Boolean":case"Number":case"String":return s([u,n.valueOf()],n)}if(t&&"toJSON"in n)return o(n.toJSON());const r=[],f=s([a,r],n);for(const t of i(n))!e&&l(c(n[t]))||r.push([o(t),o(n[t])]);return f}case 3:return s([a,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return s([a,{source:e,flags:t}],n)}case 5:{const t=[],r=s([a,t],n);for(const[r,s]of n)(e||!l(c(r))&&!l(c(s)))&&t.push([o(r),o(s)]);return r}case 6:{const t=[],r=s([a,t],n);for(const r of n)!e&&l(c(r))||t.push(o(r));return r}}const{message:f}=n;return s([a,{name:u,message:f}],n)};return o})(!(t||r),!!t,new Map,n)(e),n},{parse:f,stringify:p}=JSON,d={json:!0,lossy:!0};var h=Object.freeze({__proto__:null,parse:e=>s(f(e)),stringify:e=>p(u(e,d))}),y="dba0d233-ff77-488c-8f92-ef0e9cb3e008",w=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,"+encodeURIComponent("onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))"));r.onmessage=t,r.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:g,Map:m,SharedArrayBuffer:b,Uint16Array:v}=globalThis,{BYTES_PER_ELEMENT:A}=g,{BYTES_PER_ELEMENT:E}=v,{isArray:k}=Array,{notify:P,wait:R,waitAsync:S}=Atomics,{fromCharCode:$}=String,x=(e,t)=>e?(S||w)(t,0):(R(t,0),{value:{then:e=>e()}}),j=new WeakSet,M=new WeakMap;let W=0;const _=(e,{parse:t,stringify:r}=JSON)=>{if(!M.has(e)){const n=(t,...r)=>e.postMessage({[y]:r},{transfer:t});M.set(e,new Proxy(new m,{get:(r,s)=>"then"===s?null:(...r)=>{const o=W++;let a=new g(new b(A)),i=[];j.has(r.at(-1)||i)&&j.delete(i=r.pop()),n(i,o,a,s,r);const c=e instanceof Worker;return x(c,a).value.then((()=>{const e=a[0];if(!e)return;const r=E*e;return a=new g(new b(r+r%A)),n([],o,a),x(c,a).value.then((()=>t($(...new v(a.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new m;e.addEventListener("message",(async e=>{const s=e.data?.[y];if(k(s)){e.stopImmediatePropagation();const[o,a,...i]=s;if(i.length){const[e,s]=i;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const i=r(await t.get(e)(...s));i&&(n.set(o,i),a[0]=i.length)}}else{const e=n.get(o);n.delete(o);for(let t=new v(a.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}P(a,0)}}))}return!!t.set(n,s)}}))}return M.get(e)};_.transfer=(...e)=>(j.add(e),e);const O="object",T="function",B="number",C="string",F="undefined",I="symbol",{defineProperty:L,getOwnPropertyDescriptor:U,getPrototypeOf:G,isExtensible:N,ownKeys:D,preventExtensions:J,set:z,setPrototypeOf:q}=Reflect,Y=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},X=(e,t)=>[e,t],V=e=>t=>{const r=typeof t;switch(r){case O:if(null==t)return X("null",t);case T:return e(r,t);case"boolean":case B:case C:case F:case"bigint":return X(r,t);case I:if(H.has(t))return X(r,H.get(t))}throw new Error(`Unable to handle this ${r} type`)},H=new Map(D(Symbol).filter((e=>typeof Symbol[e]===I)).map((e=>[Symbol[e],e]))),K=e=>{for(const[t,r]of H)if(r===e)return t},Q="apply",Z="construct",ee="defineProperty",te="deleteProperty",re="get",ne="getOwnPropertyDescriptor",se="getPrototypeOf",oe="has",ae="isExtensible",ie="ownKeys",ce="preventExtensions",le="set",ue="setPrototypeOf",fe="delete";let pe=0;const de=new Map,he=new Map,ye=new WeakMap;if(globalThis.window===globalThis){const{addEventListener:e}=EventTarget.prototype;L(EventTarget.prototype,"addEventListener",{value(t,r,...n){return n.at(0)?.invoke&&(ye.has(this)||ye.set(this,new Map),ye.get(this).set(t,[].concat(n[0].invoke)),delete n[0].invoke),e.call(this,t,r,...n)}})}const we=V(((e,t)=>{if(!de.has(t)){let e;for(;he.has(e=pe++););de.set(t,e),he.set(e,t)}return X(e,de.get(t))}));var ge=(e,t,r)=>{const{[r]:n}=e,s=new FinalizationRegistry((e=>{n(fe,X(C,e))})),o=([e,t])=>{switch(e){case O:return null==t?globalThis:typeof t===B?he.get(t):t;case T:if(typeof t===C){if(!he.has(t)){const e=function(...e){return e.at(0)instanceof Event&&(e=>{const{currentTarget:t,target:r,type:n}=e;for(const s of ye.get(t||r)?.get(n)||[])e[s]()})(...e),n(Q,X(T,t),we(this),e.map(we))},r=new WeakRef(e);he.set(t,r),s.register(e,t,r)}return he.get(t).deref()}return he.get(t);case I:return K(t)}return t},a={[Q]:(e,t,r)=>we(e.apply(t,r)),[Z]:(e,t)=>we(new e(...t)),[ee]:(e,t,r)=>we(L(e,t,r)),[te]:(e,t)=>we(delete e[t]),[se]:e=>we(G(e)),[re]:(e,t)=>we(e[t]),[ne]:(e,t)=>{const r=U(e,t);return r?X(O,Y(r,we)):X(F,r)},[oe]:(e,t)=>we(t in e),[ae]:e=>we(N(e)),[ie]:e=>X(O,D(e).map(we)),[ce]:e=>we(J(e)),[le]:(e,t,r)=>we(z(e,t,r)),[ue]:(e,t)=>we(q(e,t)),[fe](e){de.delete(he.get(e)),he.delete(e)}};return e[t]=(e,t,...r)=>{switch(e){case Q:r[0]=o(r[0]),r[1]=r[1].map(o);break;case Z:r[0]=r[0].map(o);break;case ee:{const[e,t]=r;r[0]=o(e);const{get:n,set:s,value:a}=t;n&&(t.get=o(n)),s&&(t.set=o(s)),a&&(t.value=o(a));break}default:r=r.map(o)}return a[e](o(t),...r)},{proxy:e,window:globalThis,isWindowProxy:()=>!1}};const me=e=>typeof e===T?e():e,be=V(((e,t)=>{if(ve in t)return me(t[ve]);if(e===T){if(!ke.has(t)){let e;for(;ke.has(e=String(Ae++)););Ee.set(t,e),ke.set(e,t)}return X(e,Ee.get(t))}return X(e,t)})),ve=Symbol();let Ae=0;const Ee=new Map,ke=new Map;var Pe=(e,t,r)=>{const{[t]:n}=e,s=new Map,o=new FinalizationRegistry((e=>{s.delete(e),n(fe,be(e))})),a=e=>{const[t,r]=e;if(!s.has(r)){const n=t===T?Re.bind(e):e,a=new Proxy(n,l),i=new WeakRef(a);s.set(r,i),o.register(a,r,i)}return s.get(r).deref()},i=e=>{const[t,r]=e;switch(t){case O:return typeof r===B?a(e):r;case T:return typeof r===C?ke.get(r):a(e);case I:return K(r)}return r},c=(e,t,...r)=>i(n(e,me(t),...r)),l={[Q]:(e,t,r)=>c(Q,e,be(t),r.map(be)),[Z]:(e,t)=>c(Z,e,t.map(be)),[ee]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===T&&(r.get=be(n)),typeof s===T&&(r.set=be(s)),typeof o===T&&(r.value=be(o)),c(ee,e,be(t),r)},[te]:(e,t)=>c(te,e,be(t)),[se]:e=>c(se,e),[re]:(e,t)=>t===ve?e:c(re,e,be(t)),[ne]:(e,t)=>{const r=c(ne,e,be(t));return r&&Y(r,i)},[oe]:(e,t)=>t===ve||c(oe,e,be(t)),[ae]:e=>c(ae,e),[ie]:e=>c(ie,e).map(i),[ce]:e=>c(ce,e),[le]:(e,t,r)=>c(le,e,be(t),be(r)),[ue]:(e,t)=>c(ue,e,be(t))};return e[r]=(e,t,r,n)=>{switch(e){case Q:return i(t).apply(i(r),n.map(i));case fe:{const e=i(t);Ee.delete(ke.get(e)),ke.delete(e)}}},{proxy:e,window:new Proxy([O,null],l),isWindowProxy:e=>typeof e===O&&!!e&&ve in e,get global(){return console.warn("Deprecated: please access `window` field instead"),this.window},get isGlobal(){return function(e){return console.warn("Deprecated: please access `isWindowProxy` field instead"),this.isWindowProxy(e)}.bind(this)}}};function Re(){return this}const Se=y+"M",$e=y+"T",xe=new WeakMap,je=(e,...t)=>{const r=_(e,...t);if(!xe.has(r)){const t=e instanceof Worker?ge:Pe;xe.set(r,t(r,Se,$e))}return xe.get(r)};je.transfer=_.transfer;const{isArray:Me}=Array,{assign:We,create:_e,defineProperties:Oe,defineProperty:Te}=Object,{all:Be,resolve:Ce}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Fe=(e,t=location.href)=>new URL(e,t).href,Ie=e=>e.arrayBuffer(),Le=e=>e.json(),Ue=e=>e.text(),Ge=[["beforeRun","codeBeforeRunWorker"],["beforeRunAsync","codeBeforeRunWorkerAsync"],["afterRun","codeAfterRunWorker"],["afterRunAsync","codeAfterRunWorkerAsync"]];class Ne{constructor(e){for(const[t,r]of Ge)this[t]=e[r]?.()}}var De=(...e)=>function(t,r){const n=new Worker(URL.createObjectURL(new Blob(['const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[l,u]=o(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return i([-1],n)}return i([l,t],n)}case 1:{if(u)return i([u,[...n]],n);const e=[],t=i([l,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(u)switch(u){case"BigInt":return i([u,n.toString()],n);case"Boolean":case"Number":case"String":return i([u,n.valueOf()],n)}if(t&&"toJSON"in n)return c(n.toJSON());const r=[],f=i([l,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([l,{source:e,flags:t}],n)}case 5:{const t=[],r=i([l,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([l,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([l,{name:u,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:l}=JSON,u={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>l(i(e,u))}),p="dba0d233-ff77-488c-8f92-ef0e9cb3e008",d=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,"+encodeURIComponent("onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))"));r.onmessage=t,r.postMessage(e)}))})\n/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:w,Map:h,SharedArrayBuffer:y,Uint16Array:g}=globalThis,{BYTES_PER_ELEMENT:m}=w,{BYTES_PER_ELEMENT:b}=g,{isArray:v}=Array,{notify:P,wait:E,waitAsync:S}=Atomics,{fromCharCode:j}=String,M=(e,t)=>e?(S||d)(t,0):(E(t,0),{value:{then:e=>e()}}),k=new WeakSet,x=new WeakMap;let A=0;const $=(e,{parse:t,stringify:r}=JSON)=>{if(!x.has(e)){const n=(t,...r)=>e.postMessage({[p]:r},{transfer:t});x.set(e,new Proxy(new h,{get:(r,s)=>"then"===s?null:(...r)=>{const o=A++;let a=new w(new y(m)),i=[];k.has(r.at(-1)||i)&&k.delete(i=r.pop()),n(i,o,a,s,r);const c=e instanceof Worker;return M(c,a).value.then((()=>{const e=a[0];if(!e)return;const r=b*e;return a=new w(new y(r+r%m)),n([],o,a),M(c,a).value.then((()=>t(j(...new g(a.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new h;e.addEventListener("message",(async e=>{const s=e.data?.[p];if(v(s)){e.stopImmediatePropagation();const[o,a,...i]=s;if(i.length){const[e,s]=i;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const i=r(await t.get(e)(...s));i&&(n.set(o,i),a[0]=i.length)}}else{const e=n.get(o);n.delete(o);for(let t=new g(a.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}P(a,0)}}))}return!!t.set(n,s)}}))}return x.get(e)};$.transfer=(...e)=>(k.add(e),e);const _="object",O="function",W="number",R="string",T="undefined",F="symbol",{defineProperty:B,getOwnPropertyDescriptor:G,getPrototypeOf:I,isExtensible:L,ownKeys:U,preventExtensions:N,set:z,setPrototypeOf:D}=Reflect,J=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},C=(e,t)=>[e,t],q=e=>t=>{const r=typeof t;switch(r){case _:if(null==t)return C("null",t);case O:return e(r,t);case"boolean":case W:case R:case T:case"bigint":return C(r,t);case F:if(K.has(t))return C(r,K.get(t))}throw new Error(`Unable to handle this ${r} type`)},K=new Map(U(Symbol).filter((e=>typeof Symbol[e]===F)).map((e=>[Symbol[e],e]))),Y=e=>{for(const[t,r]of K)if(r===e)return t},V="apply",H="construct",Q="defineProperty",X="deleteProperty",Z="get",ee="getOwnPropertyDescriptor",te="getPrototypeOf",re="has",ne="isExtensible",se="ownKeys",oe="preventExtensions",ae="set",ie="setPrototypeOf",ce="delete";let le=0;const ue=new Map,fe=new Map,pe=new WeakMap;if(globalThis.window===globalThis){const{addEventListener:e}=EventTarget.prototype;B(EventTarget.prototype,"addEventListener",{value(t,r,...n){return n.at(0)?.invoke&&(pe.has(this)||pe.set(this,new Map),pe.get(this).set(t,[].concat(n[0].invoke)),delete n[0].invoke),e.call(this,t,r,...n)}})}const de=q(((e,t)=>{if(!ue.has(t)){let e;for(;fe.has(e=le++););ue.set(t,e),fe.set(e,t)}return C(e,ue.get(t))}));var we=(e,t,r)=>{const{[r]:n}=e,s=new FinalizationRegistry((e=>{n(ce,C(R,e))})),o=([e,t])=>{switch(e){case _:return null==t?globalThis:typeof t===W?fe.get(t):t;case O:if(typeof t===R){if(!fe.has(t)){const e=function(...e){return e.at(0)instanceof Event&&(e=>{const{currentTarget:t,target:r,type:n}=e;for(const s of pe.get(t||r)?.get(n)||[])e[s]()})(...e),n(V,C(O,t),de(this),e.map(de))},r=new WeakRef(e);fe.set(t,r),s.register(e,t,r)}return fe.get(t).deref()}return fe.get(t);case F:return Y(t)}return t},a={[V]:(e,t,r)=>de(e.apply(t,r)),[H]:(e,t)=>de(new e(...t)),[Q]:(e,t,r)=>de(B(e,t,r)),[X]:(e,t)=>de(delete e[t]),[te]:e=>de(I(e)),[Z]:(e,t)=>de(e[t]),[ee]:(e,t)=>{const r=G(e,t);return r?C(_,J(r,de)):C(T,r)},[re]:(e,t)=>de(t in e),[ne]:e=>de(L(e)),[se]:e=>C(_,U(e).map(de)),[oe]:e=>de(N(e)),[ae]:(e,t,r)=>de(z(e,t,r)),[ie]:(e,t)=>de(D(e,t)),[ce](e){ue.delete(fe.get(e)),fe.delete(e)}};return e[t]=(e,t,...r)=>{switch(e){case V:r[0]=o(r[0]),r[1]=r[1].map(o);break;case H:r[0]=r[0].map(o);break;case Q:{const[e,t]=r;r[0]=o(e);const{get:n,set:s,value:a}=t;n&&(t.get=o(n)),s&&(t.set=o(s)),a&&(t.value=o(a));break}default:r=r.map(o)}return a[e](o(t),...r)},{proxy:e,window:globalThis,isWindowProxy:()=>!1}};const he=e=>typeof e===O?e():e,ye=q(((e,t)=>{if(ge in t)return he(t[ge]);if(e===O){if(!ve.has(t)){let e;for(;ve.has(e=String(me++)););be.set(t,e),ve.set(e,t)}return C(e,be.get(t))}return C(e,t)})),ge=Symbol();let me=0;const be=new Map,ve=new Map;var Pe=(e,t,r)=>{const{[t]:n}=e,s=new Map,o=new FinalizationRegistry((e=>{s.delete(e),n(ce,ye(e))})),a=e=>{const[t,r]=e;if(!s.has(r)){const n=t===O?Ee.bind(e):e,a=new Proxy(n,l),i=new WeakRef(a);s.set(r,i),o.register(a,r,i)}return s.get(r).deref()},i=e=>{const[t,r]=e;switch(t){case _:return typeof r===W?a(e):r;case O:return typeof r===R?ve.get(r):a(e);case F:return Y(r)}return r},c=(e,t,...r)=>i(n(e,he(t),...r)),l={[V]:(e,t,r)=>c(V,e,ye(t),r.map(ye)),[H]:(e,t)=>c(H,e,t.map(ye)),[Q]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===O&&(r.get=ye(n)),typeof s===O&&(r.set=ye(s)),typeof o===O&&(r.value=ye(o)),c(Q,e,ye(t),r)},[X]:(e,t)=>c(X,e,ye(t)),[te]:e=>c(te,e),[Z]:(e,t)=>t===ge?e:c(Z,e,ye(t)),[ee]:(e,t)=>{const r=c(ee,e,ye(t));return r&&J(r,i)},[re]:(e,t)=>t===ge||c(re,e,ye(t)),[ne]:e=>c(ne,e),[se]:e=>c(se,e).map(i),[oe]:e=>c(oe,e),[ae]:(e,t,r)=>c(ae,e,ye(t),ye(r)),[ie]:(e,t)=>c(ie,e,ye(t))};return e[r]=(e,t,r,n)=>{switch(e){case V:return i(t).apply(i(r),n.map(i));case ce:{const e=i(t);be.delete(ve.get(e)),ve.delete(e)}}},{proxy:e,window:new Proxy([_,null],l),isWindowProxy:e=>typeof e===_&&!!e&&ge in e,get global(){return console.warn("Deprecated: please access `window` field instead"),this.window},get isGlobal(){return function(e){return console.warn("Deprecated: please access `isWindowProxy` field instead"),this.isWindowProxy(e)}.bind(this)}}};function Ee(){return this}const Se=p+"M",je=p+"T",Me=new WeakMap,ke=(e,...t)=>{const r=$(e,...t);if(!Me.has(r)){const t=e instanceof Worker?we:Pe;Me.set(r,t(r,Se,je))}return Me.get(r)};ke.transfer=$.transfer;const{isArray:xe}=Array,{assign:Ae,create:$e,defineProperties:_e,defineProperty:Oe}=Object,{all:We,resolve:Re}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Te=(e,t=location.href)=>new URL(e,t).href;Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Fe=e=>e.arrayBuffer(),Be=e=>e.json(),Ge=e=>e.text(),Ie=e=>e.replace(/^[^\\r\\n]+$/,(e=>e.trim())),Le=new WeakMap,Ue=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Le.set(t,r),t}}},Ne=e=>{const t=e.split("/");return t.pop(),t.join("/")},ze=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},De=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\\/+/,"/")},Je=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Ce=new WeakMap,qe=(e,t,r)=>We((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${n}, please supply \'to_file\' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(xe(n))return n.map((r=>({url:Je([e,r]),path:Je([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:Je([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(Te(t,Ce.get(e))))(r,n).then(Fe).then((r=>e.writeFile(t,s,r)))))),Ke=(e,t)=>e.runPython(Ie(t)),Ye=(e,t)=>e.runPythonAsync(Ie(t)),Ve=(e,t,r)=>e.globals.set(t,r),He=(e,t)=>e.globals.delete(t),Qe=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var Xe={type:"micropython",module:(e="1.20.0-253")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Ue();r=r.replace(/\\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await qe(this,a,t.fetch),a},setGlobal:Ve,deleteGlobal:He,run:Ke,runAsync:Ye,writeFile:Qe};var Ze={type:"pyodide",module:(e="0.23.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Ue(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await qe(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},setGlobal:Ve,deleteGlobal:He,run:Ke,runAsync:Ye,writeFile:Qe};const et="ruby-wasm-wasi";var tt={type:et,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await qe(this,o,t.fetch),o},setGlobal(e,t,r){const n=`__pyscript_ruby_wasm_wasi_${t}`;globalThis[n]=r,this.run(e,`require "js";$${t}=JS::eval("return ${n}")`)},deleteGlobal(e,t){const r=`__pyscript_ruby_wasm_wasi_${t}`;this.run(e,`$${t}=nil`),delete globalThis[r]},run:(e,t)=>e.eval(Ie(t)),runAsync:(e,t)=>e.evalAsync(Ie(t)),writeFile:()=>{throw new Error(`writeFile is not supported in ${et}`)}};var rt={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Ue(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await qe(this,a,r.fetch),a},setGlobal(e,t,r){e.global.set(t,r)},deleteGlobal(e,t){e.global.set(t,void 0)},run:(e,t)=>e.doStringSync(Ie(t)),runAsync:(e,t)=>e.doString(Ie(t)),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=De(e,t),ze(e,Ne(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const nt=new Map,st=new Map,ot=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=nt.get(r),o=/^https?:\\/\\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{st.set(t,e);const a=e?.fetch;return a&&Ce.set(a,o),s(n,e,r)}))}}),at=e=>{for(const t of[].concat(e.type))nt.set(t,e)};for(const e of[Xe,Ze,tt,rt])at(e);const it=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e);try{new SharedArrayBuffer(4)}catch(e){throw new Error(["Unable to use SharedArrayBuffer due insecure environment.","Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements"].join("\\n"))}let ct,lt,ut;const ft=(e,t)=>{addEventListener(e,t||(async t=>{await ct,ut=t,lt(`xworker.on${e}(xworker.event);`,ht)}),!!t&&{once:!0})},{proxy:pt,window:dt,isWindowProxy:wt}=ke(self,f),ht={sync:pt,window:dt,isWindowProxy:wt,onerror(){},onmessage(){},onmessageerror(){},postMessage:postMessage.bind(self),get event(){const e=ut;if(!e)throw new Error("Unauthorized event access");return ut=void 0,e}};ft("message",(({data:{options:e,code:t,hooks:r}})=>{ct=(async()=>{const{type:n,version:s,config:o,async:a}=e,i=await((e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(Be);else if(t.endsWith(".toml"))r=fetch(t).then(Ge).then(it);else{try{r=JSON.parse(t)}catch(e){r=it(t)}t=Te("./config.txt")}return Re(r).then((r=>ot[e](r,t)))})(((e,t="")=>`${e}@${t}`.replace(/@$/,""))(n,s),o),c=$e(nt.get(n)),l="run"+(a?"Async":"");if(r){const{beforeRun:e,beforeRunAsync:t,afterRun:n,afterRunAsync:s}=r,o=n||s,a=e||t;if(o){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${r}\\n${o}`)}if(a){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${a}\\n${r}`)}}return c.setGlobal(i,"xworker",ht),lt=c[l].bind(c,i),lt(t),i})(),ft("error"),ft("message"),ft("messageerror")}));\n'],{type:"application/javascript"})),{type:"module"}),{postMessage:s}=n;if(e.length){const[t,n]=e;(r=We({},r||{type:t,version:n})).type||(r.type=t)}r?.config&&(r.config=Fe(r.config));const o=fetch(t).then(Ue).then((e=>{const t=this instanceof Ne?this:void 0;s.call(n,{options:r,code:e,hooks:t})}));return Oe(n,{postMessage:{value:(e,...t)=>o.then((()=>s.call(n,e,...t)))},sync:{value:je(n,h).proxy}})};const Je=e=>e.replace(/^[^\r\n]+$/,(e=>e.trim())),ze=new WeakMap,qe=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return ze.set(t,r),t}}},Ye=e=>{const t=e.split("/");return t.pop(),t.join("/")},Xe=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},Ve=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\/+/,"/")},He=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Ke=new WeakMap,Qe=(e,t,r)=>Be((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(Me(n))return n.map((r=>({url:He([e,r]),path:He([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:He([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(Fe(t,Ke.get(e))))(r,n).then(Ie).then((r=>e.writeFile(t,s,r)))))),Ze=(e,t)=>e.runPython(Je(t)),et=(e,t)=>e.runPythonAsync(Je(t)),tt=(e,t,r)=>e.globals.set(t,r),rt=(e,t)=>e.globals.delete(t),nt=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var st={type:"micropython",module:(e="1.20.0-253")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=qe();r=r.replace(/\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await Qe(this,a,t.fetch),a},setGlobal:tt,deleteGlobal:rt,run:Ze,runAsync:et,writeFile:nt};var ot={type:"pyodide",module:(e="0.23.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=qe(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await Qe(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},setGlobal:tt,deleteGlobal:rt,run:Ze,runAsync:et,writeFile:nt};const at="ruby-wasm-wasi";var it={type:at,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await Qe(this,o,t.fetch),o},setGlobal(e,t,r){const n=`__pyscript_ruby_wasm_wasi_${t}`;globalThis[n]=r,this.run(e,`require "js";$${t}=JS::eval("return ${n}")`)},deleteGlobal(e,t){const r=`__pyscript_ruby_wasm_wasi_${t}`;this.run(e,`$${t}=nil`),delete globalThis[r]},run:(e,t)=>e.eval(Je(t)),runAsync:(e,t)=>e.evalAsync(Je(t)),writeFile:()=>{throw new Error(`writeFile is not supported in ${at}`)}};var ct={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=qe(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await Qe(this,a,r.fetch),a},setGlobal(e,t,r){e.global.set(t,r)},deleteGlobal(e,t){e.global.set(t,void 0)},run:(e,t)=>e.doStringSync(Je(t)),runAsync:(e,t)=>e.doString(Je(t)),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=Ve(e,t),Xe(e,Ye(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const lt=new Map,ut=new Map,ft=[],pt=[],dt=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=lt.get(r),o=/^https?:\/\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{ut.set(t,e);const a=e?.fetch;return a&&Ke.set(a,o),s(n,e,r)}))}}),ht=e=>{for(const t of[].concat(e.type))lt.set(t,e),ft.push(`script[type="${t}"]`),pt.push(`${t}-`)};for(const e of[st,ot,it,ct])ht(e);const yt=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),wt=(e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(Le);else if(t.endsWith(".toml"))r=fetch(t).then(Ue).then(yt);else{try{r=JSON.parse(t)}catch(e){r=yt(t)}t=Fe("./config.txt")}return Ce(r).then((r=>dt[e](r,t)))},gt=(e,t="")=>`${e}@${t}`.replace(/@$/,""),mt=(t,r)=>{const n=(e=>{let t=e;for(;t.parentNode;)t=t.parentNode;return t})(t);return n.getElementById(r)||e(r,n)},bt=new WeakMap,vt={get(){let e=bt.get(this);return e||(e=document.createElement(`${this.type}-script`),bt.set(this,e),Rt(this)),e},set(e){"string"==typeof e?bt.set(this,mt(this,e)):(bt.set(this,e),Rt(this))}},At=new WeakMap,Et=new Map,kt=(e,t)=>{const r=e?.value;return r?t+r:""},Pt=(e,t,r,n,s)=>{if(!Et.has(t)){const o={interpreter:wt(r,s),queue:Ce(),XWorker:De(e,n)};Et.set(t,o),Et.has(e)||Et.set(e,o)}return Et.get(t)},Rt=async e=>{if(At.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{async:t,config:r,env:n,target:s,version:o},src:a,type:i}=e,c=o?.value,l=gt(i,c),u=kt(s,"");let f=kt(r,"|");const p=kt(n,"")||`${l}${f}`;f=f.slice(1),f&&(f=Fe(f));const d=Pt(i,p,l,c,f);At.set(Te(e,"target",vt),d),u&&bt.set(e,mt(e,u));const h=a?fetch(a).then(Ue):e.textContent;d.queue=d.queue.then((()=>(async(e,t,r,n)=>{const s=lt.get(e.type);s.experimental&&console.warn(`The ${e.type} interpreter is experimental`);const[o,a]=await Be([At.get(e).interpreter,t]);try{return Te(document,"currentScript",{configurable:!0,get:()=>e}),s.setGlobal(o,"XWorker",r),s[n?"runAsync":"run"](o,a)}finally{delete document.currentScript,s.deleteGlobal(o,"XWorker")}})(e,h,d.XWorker,!!t)))}};Te(globalThis,"pyscript",{value:{env:new Proxy(_e(null),{get:(e,t)=>St(t)})}});const St=async e=>{if(Et.has(e)){const{interpreter:t,queue:r}=Et.get(e);return(await Be([t,r]))[0]}const t=Et.size?`Available interpreters are: ${[...Et.keys()].map((e=>`"${e}"`)).join(", ")}.`:"There are no interpreters in this page.";throw new Error(`The interpreter "${e}" was not found. ${t}`)},$t=async e=>{const{type:t,currentTarget:n}=e;for(let{name:s,value:o,ownerElement:a}of r(`./@*[${pt.map((e=>`name()="${e}${t}"`)).join(" or ")}]`,n)){s=s.slice(0,-(t.length+1));const r=await St(a.getAttribute(`${s}-env`)||s),n=lt.get(s);try{n.setGlobal(r,"event",e),n.run(r,o)}finally{n.deleteGlobal(r,"event")}}},xt=e=>{for(let{name:t,ownerElement:n}of r(`.//@*[${pt.map((e=>`starts-with(name(),"${e}")`)).join(" or ")}]`,e))t=t.slice(t.lastIndexOf("-")+1),"env"!==t&&n.addEventListener(t,$t)},jt=[],Mt=new Map,Wt=new Map,_t=e=>{for(const t of jt)if(e.matches(t)){const r=Mt.get(t),{resolve:n}=Wt.get(r),{options:s,known:o}=Ot.get(r);if(!o.has(e)){o.add(e);const{interpreter:t,version:a,config:i,env:c,onRuntimeReady:l}=s,u=gt(t,a),f=c||`${u}${i?`|${i}`:""}`,{interpreter:p,XWorker:d}=Pt(t,f,u,a,i);p.then((o=>{const a=_e(lt.get(t)),{onBeforeRun:i,onBeforeRunAsync:c,onAfterRun:f,onAfterRunAsync:p}=s,h=new Ne(s),y=function(...e){return d.apply(h,e)};for(const[t,[r,n]]of[["run",[i,f]]]){const s=a[t];a[t]=function(t,o){r&&r.call(this,w,e);const a=s.call(this,t,o);return n&&n.call(this,w,e),a}}for(const[t,[r,n]]of[["runAsync",[c,p]]]){const s=a[t];a[t]=async function(t,o){r&&await r.call(this,w,e);const a=await s.call(this,t,o);return n&&await n.call(this,w,e),a}}a.setGlobal(o,"XWorker",y);const w={type:r,interpreter:o,XWorker:y,io:ze.get(o),config:structuredClone(ut.get(u)),run:a.run.bind(a,o),runAsync:a.runAsync.bind(a,o)};n(w),l?.(w,e)}))}}},Ot=new Map,Tt=e=>(Wt.has(e)||Wt.set(e,Promise.withResolvers()),Wt.get(e).promise),Bt=ft.join(","),Ct=new MutationObserver((e=>{for(const{type:r,target:n,attributeName:s,addedNodes:o}of e)if("attributes"!==r){for(const e of o)if(1===e.nodeType)if(xt(e),e.matches(Bt))Rt(e);else{if(t(Bt,e).forEach(Rt),!jt.length)continue;_t(e),t(jt.join(","),e).forEach(_t)}}else{const e=s.lastIndexOf("-")+1;if(e){const t=s.slice(0,e);for(const r of pt)if(t===r){const t=s.slice(e);if("env"!==t){const e=n.hasAttribute(s)?"add":"remove";n[`${e}EventListener`](t,$t)}break}}}})),Ft=e=>(Ct.observe(e,{childList:!0,subtree:!0,attributes:!0}),e),{attachShadow:It}=Element.prototype;We(Element.prototype,{attachShadow(e){return Ft(It.call(this,e))}}),xt(Ft(document)),t(Bt,document).forEach(Rt);const Lt="PY0001",Ut="PY0401",Gt="PY0403",Nt="PY0404",Dt="PY0500",Jt="PY0503";class zt extends Error{constructor(e,t="",r="text"){super(`(${e}): ${t}`),this.errorCode=e,this.messageType=r,this.name="UserError"}}class qt extends zt{constructor(e,t){super(e,t),this.name="FetchError"}}async function Yt(e,t){let r;try{r=await fetch(e,t)}catch(t){const r=t;let n;throw n=e.startsWith("http")?`Fetching from URL ${e} failed with error '${r.message}'. Are your filename and path correct?`:'PyScript: Access to local files\n        (using [[fetch]] configurations in &lt;py-config&gt;)\n        is not available when directly opening a HTML file;\n        you must use a webserver to serve the additional files.\n        See <a style="text-decoration: underline;" href="https://github.com/pyscript/pyscript/issues/257#issuecomment-1119595062">this reference</a>\n        on starting a simple webserver with Python.\n            ',new qt(Lt,n)}if(!r.ok){const t=`Fetching from URL ${e} failed with error ${r.status} (${r.statusText}). Are your filename and path correct?`;switch(r.status){case 404:throw new qt(Nt,t);case 401:throw new qt(Ut,t);case 403:throw new qt(Gt,t);case 500:throw new qt(Dt,t);case 503:throw new qt(Jt,t);default:throw new qt(Lt,t)}}return r}document.head.appendChild(document.createElement("style")).textContent="\n  py-script, py-config {\n    display: none;\n  }\n",(async()=>{let r=0;const n=(e="py")=>`${e}-${r++}`;let s,o=e("py-config");o?s=o.getAttribute("src")||o.textContent:(o=e('script[type="py"]'),s=o?.getAttribute("config")),/^https?:\/\//.test(s)&&(s=await Yt(s).then(Ue));const a=e=>"SCRIPT"===e.tagName,i=e=>{Te(document,"currentScript",{configurable:!0,get:()=>e})},c=()=>{delete document.currentScript},l=async e=>{if(e.hasAttribute("src"))try{return(await Yt(e.getAttribute("src"))).then(Ue)}catch(e){throw alert(e.message),e}return e.textContent},u=(e,t,r,n)=>{a(t)&&r(t);for(const r of Xt[n])r(e,t)},f=e=>`\n            # this code is just for demo purpose but the basics work\n            def _display(what, target="${a(e)?e.target.id:e.id}", append=True):\n                from js import document\n                element = document.getElementById(target)\n                element.textContent = what\n            display = _display\n        `;((e,r)=>{if(lt.has(e)||Ot.has(e))throw new Error(`<script type="${e}"> already registered`);if(!lt.has(r?.interpreter))throw new Error("Unspecified interpreter");lt.set(e,lt.get(r?.interpreter)),Tt(e);const n=[`script[type="${e}"]`,`${e}-script`];for(const t of n)Mt.set(t,e);jt.push(...n),pt.push(`${e}-`),Ot.set(e,{options:We({env:e},r),known:new WeakSet}),xt(document),t(n.join(",")).forEach(_t)})("py",{config:s,env:"py-script",interpreter:"pyodide",codeBeforeRunWorker:()=>[...Xt.codeBeforeRunWorker].join("\n"),codeAfterRunWorker:()=>[...Xt.codeAfterRunWorker].join("\n"),onBeforeRun(e,t){u(e,t,i,"onBeforeRun"),e.interpreter.runPython(f(t))},onBeforeRunAync(e,t){e.interpreter.runPython(f(t)),u(e,t,i,"onBeforeRunAync")},onAfterRun(e,t){u(e,t,c,"onAfterRun")},onAfterRunAsync(e,t){u(e,t,c,"onAfterRunAsync")},async onRuntimeReady(e,t){for(const r of Xt.onRuntimeReady)r(e,t);if(a(t)){const{attributes:{async:r,target:s}}=t,o=!!s?.value,a=o?mt(s.value):document.createElement("script-py");o||t.after(a),a.id||(a.id=n()),Te(t,"target",{value:a}),e["run"+(r?"Async":"")](await l(t))}else t._pyodide.resolve(e)}});class p extends HTMLElement{constructor(){super().id||(this.id=n()),this._pyodide=Promise.withResolvers(),this.srcCode="",this.executed=!1}async connectedCallback(){if(!this.executed){this.executed=!0;const{run:e}=await this._pyodide.promise;this.srcCode=await l(this),this.textContent="";const t=e(this.srcCode);!this.textContent&&t&&(this.textContent=t),this.style.display="block"}}}customElements.define("py-script",p)})();const Xt={onBeforeRun:new Set,onBeforeRunAync:new Set,onAfterRun:new Set,onAfterRunAsync:new Set,onRuntimeReady:new Set,codeBeforeRunWorker:new Set,codeBeforeRunWorkerAsync:new Set,codeAfterRunWorker:new Set,codeAfterRunWorkerAsync:new Set};export{Xt as hooks};