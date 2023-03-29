(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const x={};function ge(e){x.context=e}const ye=(e,t)=>e===t,be=Symbol("solid-track"),j={equals:ye};let ne=ce;const C=1,D=2,se={owned:null,cleanups:null,context:null,owner:null};var h=null;let L=null,d=null,g=null,S=null,F=0;function U(e,t){const n=d,i=h,s=e.length===0,l=s?se:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},r=s?e:()=>e(()=>k(()=>G(l)));h=l,d=null;try{return B(r,!0)}finally{d=n,h=i}}function A(e,t){t=t?Object.assign({},j,t):j;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),re(n,s));return[oe.bind(n),i]}function H(e,t,n){const i=Q(e,t,!1,C);O(i)}function ie(e,t,n){ne=me;const i=Q(e,t,!1,C);i.user=!0,S?S.push(i):O(i)}function V(e,t,n){n=n?Object.assign({},j,n):j;const i=Q(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,O(i),oe.bind(i)}function k(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function le(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function oe(){const e=L;if(this.sources&&(this.state||e))if(this.state===C||e)O(this);else{const t=g;g=null,B(()=>W(this),!1),g=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function re(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],r=L&&L.running;r&&L.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?g.push(l):S.push(l),l.observers&&fe(l)),r||(l.state=C)}if(g.length>1e6)throw g=[],new Error},!1)),t}function O(e){if(!e.fn)return;G(e);const t=h,n=d,i=F;d=h=e,we(e,e.value,i),d=n,h=t}function we(e,t,n){let i;try{i=e.fn(t)}catch(s){return e.pure&&(e.state=C,e.owned&&e.owned.forEach(G),e.owned=null),e.updatedAt=n+1,ue(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?re(e,i):e.value=i,e.updatedAt=n)}function Q(e,t,n,i=C,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==se&&(h.owned?h.owned.push(l):h.owned=[l]),l}function R(e){const t=L;if(e.state===0||t)return;if(e.state===D||t)return W(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<F);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===C||t)O(e);else if(e.state===D||t){const s=g;g=null,B(()=>W(e,n[0]),!1),g=s}}function B(e,t){if(g)return e();let n=!1;t||(g=[]),S?n=!0:S=[],F++;try{const i=e();return ve(n),i}catch(i){n||(S=null),g=null,ue(i)}}function ve(e){if(g&&(ce(g),g=null),e)return;const t=S;S=null,t.length&&B(()=>ne(t),!1)}function ce(e){for(let t=0;t<e.length;t++)R(e[t])}function me(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:R(i)}for(x.context&&ge(),t=0;t<n;t++)R(e[t])}function W(e,t){const n=L;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===C||n?s!==t&&(!s.updatedAt||s.updatedAt<F)&&R(s):(s.state===D||n)&&W(s,t))}}function fe(e){const t=L;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=D,i.pure?g.push(i):S.push(i),i.observers&&fe(i))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),r=n.observerSlots.pop();i<s.length&&(l.sourceSlots[r]=i,s[i]=l,n.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function xe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ue(e){throw e=xe(e),e}const Ee=Symbol("fallback");function Z(e){for(let t=0;t<e.length;t++)e[t]()}function $e(e,t,n={}){let i=[],s=[],l=[],r=0,o=t.length>1?[]:null;return le(()=>Z(l)),()=>{let f=e()||[],u,c;return f[be],k(()=>{let a=f.length,b,E,M,I,P,v,m,$,T;if(a===0)r!==0&&(Z(l),l=[],i=[],s=[],r=0,o&&(o=[])),n.fallback&&(i=[Ee],s[0]=U(pe=>(l[0]=pe,n.fallback())),r=1);else if(r===0){for(s=new Array(a),c=0;c<a;c++)i[c]=f[c],s[c]=U(y);r=a}else{for(M=new Array(a),I=new Array(a),o&&(P=new Array(a)),v=0,m=Math.min(r,a);v<m&&i[v]===f[v];v++);for(m=r-1,$=a-1;m>=v&&$>=v&&i[m]===f[$];m--,$--)M[$]=s[m],I[$]=l[m],o&&(P[$]=o[m]);for(b=new Map,E=new Array($+1),c=$;c>=v;c--)T=f[c],u=b.get(T),E[c]=u===void 0?-1:u,b.set(T,c);for(u=v;u<=m;u++)T=i[u],c=b.get(T),c!==void 0&&c!==-1?(M[c]=s[u],I[c]=l[u],o&&(P[c]=o[u]),c=E[c],b.set(T,c)):l[u]();for(c=v;c<a;c++)c in M?(s[c]=M[c],l[c]=I[c],o&&(o[c]=P[c],o[c](c))):s[c]=U(y);s=s.slice(0,r=a),i=f.slice(0)}return s});function y(a){if(l[c]=a,o){const[b,E]=A(c);return o[c]=E,t(f[c],b)}return t(f[c])}}}function w(e,t){return k(()=>e(t||{}))}function ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return V($e(()=>e.each,e.children,t||void 0))}function Se(e){let t=!1;const n=e.keyed,i=V(()=>e.when,void 0,{equals:(s,l)=>t?s===l:!s==!l});return V(()=>{const s=i();if(s){const l=e.children,r=typeof l=="function"&&l.length>0;return t=n||r,r?k(()=>l(s)):l}return e.fallback},void 0,void 0)}function Ae(e,t,n){let i=n.length,s=t.length,l=i,r=0,o=0,f=t[s-1].nextSibling,u=null;for(;r<s||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===r){const c=l<i?o?n[o-1].nextSibling:n[l-o]:f;for(;o<l;)e.insertBefore(n[o++],c)}else if(l===o)for(;r<s;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],c),t[s]=n[l]}else{if(!u){u=new Map;let y=o;for(;y<l;)u.set(n[y],y++)}const c=u.get(t[r]);if(c!=null)if(o<c&&c<l){let y=r,a=1,b;for(;++y<s&&y<l&&!((b=u.get(t[y]))==null||b!==c+a);)a++;if(a>c-o){const E=t[r];for(;o<c;)e.insertBefore(n[o++],E)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const z="_$DX_DELEGATE";function Ce(e,t,n,i={}){let s;return U(l=>{s=l,t===document?e():p(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function _(e,t,n){const i=document.createElement("template");if(i.innerHTML=e,t&&i.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${i.innerHTML}

${e}. Is your HTML properly formed?`;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function _e(e,t=window.document){const n=t[z]||(t[z]=new Set);for(let i=0,s=e.length;i<s;i++){const l=e[i];n.has(l)||(n.add(l),t.addEventListener(l,Le))}}function K(e,t,n){return k(()=>e(t,n))}function p(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return q(e,t,i,n);H(s=>q(e,t(),s,n),i)}function Le(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=_$HY.done=!0);n;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i.call(n,s,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function q(e,t,n,i,s){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(x.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=N(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(x.context)return n;n=N(e,n,i)}else{if(l==="function")return H(()=>{let o=t();for(;typeof o=="function";)o=o();n=q(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(X(o,t,n,s))return H(()=>n=q(e,o,n,i,!0)),()=>n;if(x.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=N(e,n,i),r)return n}else f?n.length===0?ee(e,o,i):Ae(e,n,o):(n&&N(e),ee(e,o));n=o}else if(t instanceof Node){if(x.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=N(e,n,i,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function X(e,t,n,i){let s=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],f=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=X(e,o,f)||s;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();s=X(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||s}else e.push(o),s=!0;else{const u=String(o);u==="<!>"?f&&f.nodeType===8&&e.push(f):f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return s}function ee(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function N(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(s!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(s,o):e.insertBefore(s,n):f&&o.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}var J=e=>typeof e=="function"&&!e.length?e():e,te=e=>Array.isArray(e)?e:[e],Te=Object.keys,Ne=le;function Y(e,t,n,i){return e.addEventListener(t,n,i),Ne(e.removeEventListener.bind(e,t,n,i))}function de(e,t,n,i){const s=()=>{te(J(e)).forEach(l=>{l&&te(J(t)).forEach(r=>Y(l,r,n,i))})};typeof e=="function"?ie(s):H(s)}function he(e,t,n){const[i,s]=A();return de(e,t,s,n),i}const ke=(e,t)=>{ie(()=>{const[n,i,s]=t();Y(e,n,i,s)})},Me=(e,t)=>{Te(t).forEach(n=>{n.startsWith("on")&&typeof t[n]=="function"&&Y(e,n.substring(2).toLowerCase(),t[n])})},Oe=e=>{Me(window,e)},Be=_("<p>: </p>",2),Ie=e=>w(ae,{get each(){return Object.keys(e.record)},children:t=>(()=>{const n=Be.cloneNode(!0),i=n.firstChild;return p(n,t,i),p(n,()=>{const s=J(e.record[t]);return typeof s=="number"?parseInt(s):String(s)},null),n})()});const Pe=_('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-16 overflow-hidden bg-indigo-800 p-24 text-white"></div>',2),Ue=_('<div class="fixed top-4 left-4"><h4>WindowEventListener</h4><button class="cursor-pointer">Toggle mousemove event</button></div>',6),je=_('<div class="flex flex-col items-center space-y-6"><h4>Multiple Reactive Targets</h4><p>Clicked: </p><div class="flex flex-wrap justify-center gap-4"></div><button>Add one more</button></div>',10),De=_('<div class="cursor-pointer select-none bg-yellow-500 p-6 text-gray-900"></div>',2),He=_('<div class="flex flex-col items-center space-y-4"><h4>Custom Events</h4><p>Event: </p><div class="bg-blue-700 p-4">TARGET</div><div class="flex space-x-2"><button>Emit A</button><button>Emit B</button><button>Emit C</button></div></div>',16),Re=_('<div class="flex flex-col items-center space-y-2"><h4>Directive Usage</h4><button class="p-4">Count: </button></div>',6),We=_('<div class="flex flex-col items-center space-y-2"><h4>Event Map</h4><p>Last event: </p><div class="w-46 center-child h-32 select-none rounded-lg bg-green-500 bg-opacity-70"><p>TARGET</p></div></div>',10),qe=()=>(()=>{const e=Pe.cloneNode(!0);return p(e,w(Fe,{}),null),p(e,w(Ge,{}),null),p(e,w(Ke,{}),null),p(e,w(Ve,{}),null),p(e,w(Xe,{}),null),e})(),Fe=()=>{const[e,t]=A(!0),[n,i]=A({x:0,y:0});return(()=>{const s=Ue.cloneNode(!0),l=s.firstChild,r=l.nextSibling;return p(s,w(Se,{get when(){return e()},get children(){return w(Oe,{onmousemove:({x:o,y:f})=>i({x:o,y:f})})}}),l),p(s,w(Ie,{get record(){return n()}}),r),r.$$click=()=>t(o=>!o),s})()},Ge=()=>{const[e,t]=A(),[n,i]=A(5),[s,l]=A([]);return de(s,"click",t),(()=>{const r=je.cloneNode(!0),o=r.firstChild,f=o.nextSibling;f.firstChild;const u=f.nextSibling,c=u.nextSibling;return p(f,()=>e()?.target?.textContent,null),p(u,w(ae,{get each(){return Array.from({length:n()},(y,a)=>a)},children:y=>(()=>{const a=De.cloneNode(!0);return K(b=>l(E=>[...E,b]),a),p(a,y),a})()})),c.$$click=()=>i(y=>y+1),r})()},Ke=()=>{let e;const t=he(()=>e,["a","b","c"]);return(()=>{const n=He.cloneNode(!0),i=n.firstChild,s=i.nextSibling;s.firstChild;const l=s.nextSibling,r=l.nextSibling,o=r.firstChild,f=o.nextSibling,u=f.nextSibling;p(s,()=>t()?.type,null);const c=e;return typeof c=="function"?K(c,l):e=l,o.$$click=()=>e.dispatchEvent(new Event("a")),f.$$click=()=>e.dispatchEvent(new Event("b")),u.$$click=()=>e.dispatchEvent(new Event("c")),n})()},Ve=()=>{const[e,t]=A(0);return(()=>{const n=Re.cloneNode(!0),i=n.firstChild,s=i.nextSibling;return s.firstChild,K(ke,s,()=>["click",()=>t(l=>l+1)]),p(s,e,null),n})()},Xe=()=>{let e;const t=he(()=>e,["mouseenter","mouseleave","click","wheel"],{passive:!0});return(()=>{const n=We.cloneNode(!0),i=n.firstChild,s=i.nextSibling;s.firstChild;const l=s.nextSibling;p(s,()=>t()?.type,null);const r=e;return typeof r=="function"?K(r,l):e=l,n})()};Ce(()=>w(qe,{}),document.getElementById("root"));_e(["click"]);
