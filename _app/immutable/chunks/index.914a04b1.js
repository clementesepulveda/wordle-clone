var H=Object.defineProperty;var F=(t,e,n)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var S=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as v,h as j,k as C,i as U,l as k,m as V,p as W,q as G,v as J,w as z,x as K,y as Q,z as X}from"./scheduler.7ddb574c.js";const I=typeof window<"u";let Y=I?()=>window.performance.now():()=>Date.now(),B=I?t=>requestAnimationFrame(t):w;const g=new Set;function O(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&B(O)}function Z(t){let e;return g.size===0&&B(O),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let A=!1;function tt(){A=!0}function et(){A=!1}function nt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function it(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&s.push(u)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,u=(r>0&&e[n[r]].claim_order<=l?r+1:nt(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[u]+1;const f=u+1;n[f]=s,r=Math.max(f,r)}const o=[],a=[];let c=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);c>=s;c--)a.push(e[c]);c--}for(;c>=0;c--)a.push(e[c]);o.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<o.length&&a[s].claim_order>=o[l].claim_order;)l++;const u=l<o.length?o[l]:null;t.insertBefore(a[s],u)}}function rt(t,e){t.appendChild(e)}function q(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function st(t){const e=M("style");return e.textContent="/* empty */",lt(q(t),e),e.sheet}function lt(t,e){return rt(t.head||t,e),e.sheet}function at(t,e){if(A){for(it(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function St(t,e,n){A&&!n?at(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function M(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function jt(){return P(" ")}function Bt(){return P("")}function Pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Rt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return t.dataset.svelteH}function ot(t){return Array.from(t.childNodes)}function ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,e,n,i,r=!1){ct(t);const o=(()=>{for(let a=t.claim_info.last_index;a<t.length;a++){const c=t[a];if(e(c)){const s=n(c);return s===void 0?t.splice(a,1):t[a]=s,r||(t.claim_info.last_index=a),c}}for(let a=t.claim_info.last_index-1;a>=0;a--){const c=t[a];if(e(c)){const s=n(c);return s===void 0?t.splice(a,1):t[a]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=a,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ft(t,e,n,i){return T(t,r=>r.nodeName===e,r=>{const o=[];for(let a=0;a<r.attributes.length;a++){const c=r.attributes[a];n[c.name]||o.push(c.name)}o.forEach(a=>r.removeAttribute(a))},()=>i(e))}function zt(t,e,n){return ft(t,e,n,M)}function ut(t,e){return T(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>P(e),!0)}function Dt(t){return ut(t," ")}function It(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ot(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function qt(t,e){return new t(e)}const b=new Map;let E=0;function dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function mt(t,e){const n={stylesheet:st(e),rules:{}};return b.set(t,n),n}function ht(t,e,n,i,r,o,a,c=0){const s=16.666/i;let l=`{
`;for(let $=0;$<=1;$+=s){const y=e+(n-e)*o($);l+=$*100+`%{${a(y,1-y)}}
`}const u=l+`100% {${a(n,1-n)}}
}`,f=`__svelte_${dt(u)}_${c}`,_=q(t),{stylesheet:d,rules:m}=b.get(_)||mt(_,t);m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${r}ms 1 both`,E+=1,f}function pt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),E-=r,E||$t())}function $t(){B(()=>{E||(b.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),b.clear())})}let x;function yt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function D(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const N=new Set;let h;function Lt(){h={r:0,c:[],p:h}}function Mt(){h.r||v(h.c),h=h.p}function gt(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Tt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),h.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const xt={duration:0};function Ht(t,e,n){const i={direction:"out"};let r=e(t,n,i),o=!0,a;const c=h;c.r+=1;let s;function l(){const{delay:u=0,duration:f=300,easing:_=U,tick:d=w,css:m}=r||xt;m&&(a=ht(t,1,0,f,u,_,m));const p=Y()+u,$=p+f;C(()=>D(t,!1,"start")),"inert"in t&&(s=t.inert,t.inert=!0),Z(y=>{if(o){if(y>=$)return d(0,1),D(t,!1,"end"),--c.r||v(c.c),!1;if(y>=p){const R=_((y-p)/f);d(1-R,R)}}return o})}return j(r)?yt().then(()=>{r=r(i),l()}):l(),{end(u){u&&"inert"in t&&(t.inert=s),u&&r.tick&&r.tick(1,0),o&&(a&&pt(t,a),o=!1)}}}function Ft(t){t&&t.c()}function Ut(t,e){t&&t.l(e)}function wt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),C(()=>{const o=t.$$.on_mount.map(K).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),r.forEach(C)}function vt(t,e){const n=t.$$;n.fragment!==null&&(G(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(Q.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Vt(t,e,n,i,r,o,a=null,c=[-1]){const s=J;z(t);const l=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:k(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};a&&a(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(f,_,...d)=>{const m=d.length?d[0]:_;return l.ctx&&r(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&Nt(t,f)),_}):[],l.update(),u=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){tt();const f=ot(e.target);l.fragment&&l.fragment.l(f),f.forEach(L)}else l.fragment&&l.fragment.c();e.intro&&gt(t.$$.fragment),wt(t,e.target,e.anchor),et(),V()}z(s)}class Wt{constructor(){S(this,"$$");S(this,"$$set")}$destroy(){vt(this,1),this.$destroy=w}$on(e,n){if(!j(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bt);export{Pt as A,Ct as B,Wt as S,St as a,Mt as b,Dt as c,gt as d,Bt as e,L as f,M as g,zt as h,Vt as i,ot as j,Rt as k,Ot as l,P as m,ut as n,It as o,Lt as p,qt as q,Ft as r,jt as s,Tt as t,Ut as u,wt as v,vt as w,at as x,kt as y,Ht as z};
