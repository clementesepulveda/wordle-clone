var G=Object.defineProperty;var J=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P=(t,e,n)=>(J(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as v,h as I,j as D,i as K,k as q,l as Q,m as X,p as Y,q as Z,v as z,w as tt,x as et,y as nt}from"./scheduler.9498ad7e.js";const T=typeof window<"u";let it=T?()=>window.performance.now():()=>Date.now(),M=T?t=>requestAnimationFrame(t):w;const g=new Set;function k(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&M(k)}function rt(t){let e;return g.size===0&&M(k),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let S=!1;function st(){S=!0}function lt(){S=!1}function at(t,e,n,s){for(;t<e;){const o=t+(e-t>>1);n(o)<=s?t=o+1:e=o}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&i.push(_)}e=i}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let o=0;for(let i=0;i<e.length;i++){const a=e[i].claim_order,_=(o>0&&e[n[o]].claim_order<=a?o+1:at(1,o,m=>e[n[m]].claim_order,a))-1;s[i]=n[_]+1;const u=_+1;n[u]=i,o=Math.max(u,o)}const c=[],l=[];let r=e.length-1;for(let i=n[o]+1;i!=0;i=s[i-1]){for(c.push(e[i-1]);r>=i;r--)l.push(e[r]);r--}for(;r>=0;r--)l.push(e[r]);c.reverse(),l.sort((i,a)=>i.claim_order-a.claim_order);for(let i=0,a=0;i<l.length;i++){for(;a<c.length&&l[i].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(l[i],_)}}function ct(t,e){t.appendChild(e)}function H(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=U("style");return e.textContent="/* empty */",ft(H(t),e),e.sheet}function ft(t,e){return ct(t.head||t,e),e.sheet}function _t(t,e){if(S){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Pt(t,e,n){S&&!n?_t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function Rt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function Dt(){return O(" ")}function It(){return O("")}function Mt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t){return t.dataset.svelteH}function dt(t){return Array.from(t.childNodes)}function mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,s,o=!1){mt(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const r=t[l];if(e(r)){const i=n(r);return i===void 0?t.splice(l,1):t[l]=i,o||(t.claim_info.last_index=l),r}}for(let l=t.claim_info.last_index-1;l>=0;l--){const r=t[l];if(e(r)){const i=n(r);return i===void 0?t.splice(l,1):t[l]=i,o?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,r}}return s()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ht(t,e,n,s){return V(t,o=>o.nodeName===e,o=>{const c=[];for(let l=0;l<o.attributes.length;l++){const r=o.attributes[l];n[r.name]||c.push(r.name)}c.forEach(l=>o.removeAttribute(l))},()=>s(e))}function zt(t,e,n){return ht(t,e,n,U)}function pt(t,e){return V(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>O(e),!0)}function Lt(t){return pt(t," ")}function Tt(t,e){e=""+e,t.data!==e&&(t.data=e)}function kt(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function $t(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}function Ht(t,e){return new t(e)}const E=new Map;let A=0;function yt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function gt(t,e){const n={stylesheet:ut(e),rules:{}};return E.set(t,n),n}function L(t,e,n,s,o,c,l,r=0){const i=16.666/s;let a=`{
`;for(let d=0;d<=1;d+=i){const y=e+(n-e)*c(d);a+=d*100+`%{${l(y,1-y)}}
`}const _=a+`100% {${l(n,1-n)}}
}`,u=`__svelte_${yt(_)}_${r}`,m=H(t),{stylesheet:$,rules:f}=E.get(m)||gt(m,t);f[u]||(f[u]=!0,$.insertRule(`@keyframes ${u} ${_}`,$.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${u} ${s}ms linear ${o}ms 1 both`,A+=1,u}function xt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),o=n.length-s.length;o&&(t.style.animation=s.join(", "),A-=o,A||wt())}function wt(){M(()=>{A||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),E.clear())})}let x;function vt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function R(t,e,n){t.dispatchEvent($t(`${e?"intro":"outro"}${n}`))}const N=new Set;let p;function Ft(){p={r:0,c:[],p}}function Ut(){p.r||v(p.c),p=p.p}function bt(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Vt(t,e,n,s){if(t&&t.o){if(N.has(t))return;N.add(t),p.c.push(()=>{N.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Nt={duration:0};function Wt(t,e,n,s){let c=e(t,n,{direction:"both"}),l=s?0:1,r=null,i=null,a=null,_;function u(){a&&xt(t,a)}function m(f,h){const d=f.b-l;return h*=Math.abs(d),{a:l,b:f.b,d,duration:h,start:f.start,end:f.start+h,group:f.group}}function $(f){const{delay:h=0,duration:d=300,easing:y=K,tick:C=w,css:j}=c||Nt,B={start:it()+h,b:f};f||(B.group=p,p.r+=1),"inert"in t&&(f?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),r||i?i=B:(j&&(u(),a=L(t,l,f,d,h,y,j)),f&&C(0,1),r=m(B,d),D(()=>R(t,f,"start")),rt(b=>{if(i&&b>i.start&&(r=m(i,d),i=null,R(t,r.b,"start"),j&&(u(),a=L(t,l,r.b,r.duration,0,y,c.css))),r){if(b>=r.end)C(l=r.b,1-l),R(t,r.b,"end"),i||(r.b?u():--r.group.r||v(r.group.c)),r=null;else if(b>=r.start){const W=b-r.start;l=r.a+r.d*y(W/r.duration),C(l,1-l)}}return!!(r||i)}))}return{run(f){I(c)?vt().then(()=>{c=c({direction:f?"in":"out"}),$(f)}):$(f)},end(){u(),r=i=null}}}function Gt(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function Et(t,e,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),D(()=>{const c=t.$$.on_mount.map(tt).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),o.forEach(D)}function At(t,e){const n=t.$$;n.fragment!==null&&(Y(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function St(t,e){t.$$.dirty[0]===-1&&(et.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,s,o,c,l=null,r=[-1]){const i=Z;z(t);const a=t.$$={fragment:null,ctx:[],props:c,update:w,not_equal:o,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:q(),dirty:r,skip_bound:!1,root:e.target||i.$$.root};l&&l(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(u,m,...$)=>{const f=$.length?$[0]:m;return a.ctx&&o(a.ctx[u],a.ctx[u]=f)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](f),_&&St(t,u)),m}):[],a.update(),_=!0,v(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){st();const u=dt(e.target);a.fragment&&a.fragment.l(u),u.forEach(F)}else a.fragment&&a.fragment.c();e.intro&&bt(t.$$.fragment),Et(t,e.target,e.anchor),lt(),Q()}z(i)}class Qt{constructor(){P(this,"$$");P(this,"$$set")}$destroy(){At(this,1),this.$destroy=w}$on(e,n){if(!I(n))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ct);export{Rt as A,Wt as B,Qt as S,Pt as a,Ut as b,Lt as c,bt as d,It as e,F as f,U as g,zt as h,Kt as i,dt as j,Ot as k,kt as l,O as m,pt as n,Tt as o,Ft as p,Ht as q,Gt as r,Dt as s,Vt as t,Jt as u,Et as v,At as w,_t as x,qt as y,Mt as z};
