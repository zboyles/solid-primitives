(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const d={},G=(e,n)=>e===n,B={equals:G};let H=F;const b=1,m=2,U={owned:null,cleanups:null,context:null,owner:null};var h=null;let y=null,f=null,u=null,w=null,$=0;function K(e,n){const t=f,s=h,i=e.length===0,l=i?U:{owned:null,cleanups:null,context:null,owner:n||s},r=i?e:()=>e(()=>L(()=>C(l)));h=l,f=null;try{return S(r,!0)}finally{f=t,h=s}}function Q(e,n){n=n?Object.assign({},B,n):B;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),q(t,i));return[W.bind(t),s]}function T(e,n,t){const s=J(e,n,!1,b);_(s)}function L(e){const n=f;f=null;try{return e()}finally{f=n}}function W(){const e=y;if(this.sources&&(this.state||e))if(this.state===b||e)_(this);else{const n=u;u=null,S(()=>A(this),!1),u=n}if(f){const n=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(n)):(f.sources=[this],f.sourceSlots=[n]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function q(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=y&&y.running;r&&y.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?u.push(l):w.push(l),l.observers&&I(l)),r||(l.state=b)}if(u.length>1e6)throw u=[],new Error},!1)),n}function _(e){if(!e.fn)return;C(e);const n=h,t=f,s=$;f=h=e,X(e,e.value,s),f=t,h=n}function X(e,n,t){let s;try{s=e.fn(n)}catch(i){e.pure&&(e.state=b,e.owned&&e.owned.forEach(C),e.owned=null),M(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?q(e,s):e.value=s,e.updatedAt=t)}function J(e,n,t,s=b,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:h,context:null,pure:t};return h===null||h!==U&&(h.owned?h.owned.push(l):h.owned=[l]),l}function j(e){const n=y;if(e.state===0||n)return;if(e.state===m||n)return A(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===b||n)_(e);else if(e.state===m||n){const i=u;u=null,S(()=>A(e,t[0]),!1),u=i}}function S(e,n){if(u)return e();let t=!1;n||(u=[]),w?t=!0:w=[],$++;try{const s=e();return Y(t),s}catch(s){u||(w=null),M(s)}}function Y(e){if(u&&(F(u),u=null),e)return;const n=w;w=null,n.length&&S(()=>H(n),!1)}function F(e){for(let n=0;n<e.length;n++)j(e[n])}function A(e,n){const t=y;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===b||t?i!==n&&j(i):(i.state===m||t)&&A(i,n))}}function I(e){const n=y;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=m,s.pure?u.push(s):w.push(s),s.observers&&I(s))}}function C(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)C(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Z(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function M(e){throw e=Z(e),e}function k(e,n){return L(()=>e(n||{}))}function z(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,c=n[i-1].nextSibling,a=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const p=l<s?o?t[o-1].nextSibling:t[l-o]:c;for(;o<l;)e.insertBefore(t[o++],p)}else if(l===o)for(;r<i;)(!a||!a.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const p=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],p),n[i]=t[l]}else{if(!a){a=new Map;let g=o;for(;g<l;)a.set(t[g],g++)}const p=a.get(n[r]);if(p!=null)if(o<p&&p<l){let g=r,v=1,O;for(;++g<i&&g<l&&!((O=a.get(n[g]))==null||O!==p+v);)v++;if(v>p-o){const V=n[r];for(;o<p;)e.insertBefore(t[o++],V)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const P="_$DX_DELEGATE";function ee(e,n,t,s={}){let i;return K(l=>{i=l,n===document?e():R(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function te(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function ne(e,n=window.document){const t=n[P]||(n[P]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,se))}}function R(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return E(e,n,s,t);T(i=>E(e,n(),i,t),s)}function se(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),d.registry&&!d.done&&(d.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function E(e,n,t,s,i){for(d.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(d.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=x(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(d.context)return t;t=x(e,t,s)}else{if(l==="function")return T(()=>{let o=n();for(;typeof o=="function";)o=o();t=E(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],c=t&&Array.isArray(t);if(N(o,n,t,i))return T(()=>t=E(e,o,t,s,!0)),()=>t;if(d.context){if(!o.length)return t;for(let a=0;a<o.length;a++)if(o[a].parentNode)return t=o}if(o.length===0){if(t=x(e,t,s),r)return t}else c?t.length===0?D(e,o,s):z(e,t,o):(t&&x(e),D(e,o));t=o}else if(n instanceof Node){if(d.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=x(e,t,s,n);x(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function N(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],c=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=N(e,o,c)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=N(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return i}function D(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function x(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const c=o.parentNode===e;!l&&!r?c?e.replaceChild(i,o):e.insertBefore(i,t):c&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const ie=te(`<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-v"><h4>Counter component</h4><p class="caption">it's very important...</p><button class="btn"></button></div></div>`),le=()=>{const[e,n]=Q(0),t=()=>n(e()+1);return(()=>{const s=ie.cloneNode(!0),i=s.firstChild,l=i.firstChild,r=l.nextSibling,o=r.nextSibling;return o.$$click=t,R(o,e),s})()};ee(()=>k(le,{}),document.getElementById("root"));ne(["click"]);