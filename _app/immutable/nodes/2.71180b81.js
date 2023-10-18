import{s as X,n as j,f as pe,i as Ke,b as ue,h as de,j as ze,k as Ue,o as Me,l as He,m as be}from"../chunks/scheduler.1a68b283.js";import{S as Y,i as Z,g as L,s as P,h as I,j as D,y as te,c as G,f as b,k as v,a as W,x as k,z as fe,e as ge,p as ne,t as $,b as re,d as C,A as Je,r as M,u as H,v as J,w as Q,m as se,n as le,o as oe,B as ce,C as we,D as ke}from"../chunks/index.eb24b34d.js";import{w as je}from"../chunks/index.5185b88e.js";function ee(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function ye(r){let e,t="↻",n,s;return{c(){e=L("a"),e.textContent=t,this.h()},l(i){e=I(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),te(e)!=="svelte-1tjfch7"&&(e.textContent=t),this.h()},h(){v(e,"href","#"),v(e,"class","svelte-1g8q8td")},m(i,l){W(i,e,l),n||(s=fe(e,"click",r[2]),n=!0)},p:j,d(i){i&&b(e),n=!1,s()}}}function Qe(r){let e,t,n="Wordle",s,i,l=r[0]&&ye(r);return{c(){e=L("section"),t=L("div"),t.textContent=n,s=P(),i=L("span"),l&&l.c(),this.h()},l(o){e=I(o,"SECTION",{id:!0,class:!0});var c=D(e);t=I(c,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),te(t)!=="svelte-11pp5i7"&&(t.textContent=n),s=G(c),i=I(c,"SPAN",{class:!0});var u=D(i);l&&l.l(u),u.forEach(b),c.forEach(b),this.h()},h(){v(t,"id","title"),v(t,"class","svelte-1g8q8td"),v(i,"class","reload svelte-1g8q8td"),v(e,"id","navbar"),v(e,"class","svelte-1g8q8td")},m(o,c){W(o,e,c),k(e,t),k(e,s),k(e,i),l&&l.m(i,null)},p(o,[c]){o[0]?l?l.p(o,c):(l=ye(o),l.c(),l.m(i,null)):l&&(l.d(1),l=null)},i:j,o:j,d(o){o&&b(e),l&&l.d()}}}function Xe(r,e,t){let{toggleSettings:n}=e,{isFinished:s}=e;const i=()=>location.reload();return r.$$set=l=>{"toggleSettings"in l&&t(1,n=l.toggleSettings),"isFinished"in l&&t(0,s=l.isFinished)},[s,n,i]}class Ye extends Y{constructor(e){super(),Z(this,e,Xe,Qe,X,{toggleSettings:1,isFinished:0})}}function Ze(r){const e=r-1;return e*e*e+1}function Ce(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}function xe(r,{delay:e=0,duration:t=400,easing:n=Ke}={}){const s=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:i=>`opacity: ${i*s}`}}function Ae(r,{delay:e=0,duration:t=400,easing:n=Ze,x:s=0,y:i=0,opacity:l=0}={}){const o=getComputedStyle(r),c=+o.opacity,u=o.transform==="none"?"":o.transform,h=c*(1-l),[g,S]=pe(s),[m,V]=pe(i);return{delay:e,duration:t,easing:n,css:(R,y)=>`
			transform: ${u} translate(${(1-R)*g}${S}, ${(1-R)*m}${V});
			opacity: ${c-h*y}`}}function et(r){let e,t="Not enough letters",n,s;return{c(){e=L("div"),e.textContent=t,this.h()},l(i){e=I(i,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-zl4sfa"&&(e.textContent=t),this.h()},h(){v(e,"class","error svelte-uqeub3")},m(i,l){W(i,e,l),s=!0},p:j,i(i){s||(n&&n.end(1),s=!0)},o(i){i&&(n=Je(e,xe,{})),s=!1},d(i){i&&b(e),i&&n&&n.end()}}}function tt(r){let e,t,n={getSelfRef:!1};return e=new qe({props:n}),r[3](e),{c(){M(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,i){J(e,s,i),t=!0},p(s,i){const l={};e.$set(l)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){r[3](null),Q(e,s)}}}function nt(r){let e,t,n,s;const i=[tt,et],l=[];function o(c,u){return c[0]?0:1}return e=o(r),t=l[e]=i[e](r),{c(){t.c(),n=ge()},l(c){t.l(c),n=ge()},m(c,u){l[e].m(c,u),W(c,n,u),s=!0},p(c,[u]){let h=e;e=o(c),e===h?l[e].p(c,u):(ne(),$(l[h],1,1,()=>{l[h]=null}),re(),t=l[e],t?t.p(c,u):(t=l[e]=i[e](c),t.c()),C(t,1),t.m(n.parentNode,n))},i(c){s||(C(t),s=!0)},o(c){$(t),s=!1},d(c){c&&b(n),l[e].d(c)}}}function rt(r,e,t){let{time:n=1500}=e,{getSelfRef:s=!0}=e,i;function l(o){ue[o?"unshift":"push"](()=>{i=o,t(1,i)})}return r.$$set=o=>{"time"in o&&t(2,n=o.time),"getSelfRef"in o&&t(0,s=o.getSelfRef)},r.$$.update=()=>{r.$$.dirty&6&&i&&setTimeout(()=>{i.$destroy()},n)},[s,i,n,l]}class qe extends Y{constructor(e){super(),Z(this,e,rt,nt,X,{time:2,getSelfRef:0})}}function st(r){let e,t,n,s,i;return{c(){e=L("button"),t=se(r[0]),this.h()},l(l){e=I(l,"BUTTON",{id:!0,class:!0});var o=D(e);t=le(o,r[0]),o.forEach(b),this.h()},h(){v(e,"id","container"),v(e,"class",n=de(r[1])+" svelte-s2ivw")},m(l,o){W(l,e,o),k(e,t),s||(i=fe(e,"click",function(){ze(r[2])&&r[2].apply(this,arguments)}),s=!0)},p(l,[o]){r=l,o&1&&oe(t,r[0]),o&2&&n!==(n=de(r[1])+" svelte-s2ivw")&&v(e,"class",n)},i:j,o:j,d(l){l&&b(e),s=!1,i()}}}function lt(r,e,t){let{letter:n}=e,{state:s="trans-back"}=e,{onclick:i}=e;return r.$$set=l=>{"letter"in l&&t(0,n=l.letter),"state"in l&&t(1,s=l.state),"onclick"in l&&t(2,i=l.onclick)},[n,s,i]}class me extends Y{constructor(e){super(),Z(this,e,lt,st,X,{letter:0,state:1,onclick:2})}}function it(r){let e,t;return{c(){e=L("div"),t=se(r[0]),this.h()},l(n){e=I(n,"DIV",{class:!0});var s=D(e);t=le(s,r[0]),s.forEach(b),this.h()},h(){v(e,"class","error svelte-mzlahg")},m(n,s){W(n,e,s),k(e,t)},p(n,[s]){s&1&&oe(t,n[0])},i:j,o:j,d(n){n&&b(e)}}}function ot(r,e,t){let{answer:n}=e;return r.$$set=s=>{"answer"in s&&t(0,n=s.answer)},[n]}class at extends Y{constructor(e){super(),Z(this,e,ot,it,X,{answer:0})}}function ct(r){let e,t="Not in word list";return{c(){e=L("div"),e.textContent=t,this.h()},l(n){e=I(n,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-14y5hfg"&&(e.textContent=t),this.h()},h(){v(e,"class","error svelte-1cqv3sd")},m(n,s){W(n,e,s)},p:j,i:j,o:j,d(n){n&&b(e)}}}function ft(r){let e,t,n={getSelfRef:!1};return e=new Pe({props:n}),r[3](e),{c(){M(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,i){J(e,s,i),t=!0},p(s,i){const l={};e.$set(l)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){r[3](null),Q(e,s)}}}function ut(r){let e,t,n,s;const i=[ft,ct],l=[];function o(c,u){return c[0]?0:1}return e=o(r),t=l[e]=i[e](r),{c(){t.c(),n=ge()},l(c){t.l(c),n=ge()},m(c,u){l[e].m(c,u),W(c,n,u),s=!0},p(c,[u]){let h=e;e=o(c),e===h?l[e].p(c,u):(ne(),$(l[h],1,1,()=>{l[h]=null}),re(),t=l[e],t?t.p(c,u):(t=l[e]=i[e](c),t.c()),C(t,1),t.m(n.parentNode,n))},i(c){s||(C(t),s=!0)},o(c){$(t),s=!1},d(c){c&&b(n),l[e].d(c)}}}function dt(r,e,t){let{time:n=1500}=e,{getSelfRef:s=!0}=e,i;function l(o){ue[o?"unshift":"push"](()=>{i=o,t(1,i)})}return r.$$set=o=>{"time"in o&&t(2,n=o.time),"getSelfRef"in o&&t(0,s=o.getSelfRef)},r.$$.update=()=>{r.$$.dirty&6&&i&&setTimeout(()=>{i.$destroy()},n)},[s,i,n,l]}class Pe extends Y{constructor(e){super(),Z(this,e,dt,ut,X,{time:2,getSelfRef:0})}}function gt(r){let e,t,n,s,i;return{c(){e=L("button"),t=se(r[0]),this.h()},l(l){e=I(l,"BUTTON",{id:!0,class:!0});var o=D(e);t=le(o,r[0]),o.forEach(b),this.h()},h(){v(e,"id","container"),v(e,"class",n=de(r[1])+" svelte-1qt5onn")},m(l,o){W(l,e,o),k(e,t),s||(i=fe(e,"click",function(){ze(r[2])&&r[2].apply(this,arguments)}),s=!0)},p(l,[o]){r=l,o&1&&oe(t,r[0]),o&2&&n!==(n=de(r[1])+" svelte-1qt5onn")&&v(e,"class",n)},i:j,o:j,d(l){l&&b(e),s=!1,i()}}}function ht(r,e,t){let{letter:n}=e,{state:s="trans-back"}=e,{onclick:i}=e;return r.$$set=l=>{"letter"in l&&t(0,n=l.letter),"state"in l&&t(1,s=l.state),"onclick"in l&&t(2,i=l.onclick)},[n,s,i]}class Ee extends Y{constructor(e){super(),Z(this,e,ht,gt,X,{letter:0,state:1,onclick:2})}}function _t(r){let e,t,n,s,i;return{c(){e=L("div"),t=se(r[0]),this.h()},l(l){e=I(l,"DIV",{class:!0,id:!0});var o=D(e);t=le(o,r[0]),o.forEach(b),this.h()},h(){v(e,"class","item svelte-1o05t5l"),v(e,"id",n="item-"+r[1])},m(l,o){W(l,e,o),k(e,t),s||(i=Ue(r[2].call(null,e)),s=!0)},p(l,[o]){o&1&&oe(t,l[0]),o&2&&n!==(n="item-"+l[1])&&v(e,"id",n)},i:j,o:j,d(l){l&&b(e),s=!1,i()}}}function mt(r,e,t){let{letter:n}=e,{index:s}=e,{animationAction:i}=e;return r.$$set=l=>{"letter"in l&&t(0,n=l.letter),"index"in l&&t(1,s=l.index),"animationAction"in l&&t(2,i=l.animationAction)},[n,s,i]}class vt extends Y{constructor(e){super(),Z(this,e,mt,_t,X,{letter:0,index:1,animationAction:2})}}let he=je(5),Ge=je(6);function Le(r,e,t){const n=r.slice();return n[5]=e[t],n[7]=t,n}function Ie(r){let e,t;return e=new vt({props:{letter:r[1][r[7]],index:r[7],animationAction:r[3][r[7]].animationAction}}),{c(){M(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,s){J(e,n,s),t=!0},p(n,s){const i={};s&2&&(i.letter=n[1][n[7]]),s&8&&(i.animationAction=n[3][n[7]].animationAction),e.$set(i)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Q(e,n)}}}function pt(r){let e,t,n,s,i,l=ee(Array(r[4])),o=[];for(let u=0;u<l.length;u+=1)o[u]=Ie(Le(r,l,u));const c=u=>$(o[u],1,1,()=>{o[u]=null});return{c(){e=L("div");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=I(u,"DIV",{class:!0,id:!0});var h=D(e);for(let g=0;g<o.length;g+=1)o[g].l(h);h.forEach(b),this.h()},h(){v(e,"class","row svelte-1m7d31l"),v(e,"id",t="row-"+r[0])},m(u,h){W(u,e,h);for(let g=0;g<o.length;g+=1)o[g]&&o[g].m(e,null);n=!0,s||(i=Ue(r[2].call(null,e)),s=!0)},p(u,[h]){if(h&26){l=ee(Array(u[4]));let g;for(g=0;g<l.length;g+=1){const S=Le(u,l,g);o[g]?(o[g].p(S,h),C(o[g],1)):(o[g]=Ie(S),o[g].c(),C(o[g],1),o[g].m(e,null))}for(ne(),g=l.length;g<o.length;g+=1)c(g);re()}(!n||h&1&&t!==(t="row-"+u[0]))&&v(e,"id",t)},i(u){if(!n){for(let h=0;h<l.length;h+=1)C(o[h]);n=!0}},o(u){o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)$(o[h]);n=!1},d(u){u&&b(e),ce(o,u),s=!1,i()}}}function bt(r,e,t){let n=5;he.subscribe(c=>{t(4,n=c)});let{row:s}=e,{rowLetters:i}=e,{rowAnimator:l}=e,{cellAnimators:o}=e;return r.$$set=c=>{"row"in c&&t(0,s=c.row),"rowLetters"in c&&t(1,i=c.rowLetters),"rowAnimator"in c&&t(2,l=c.rowAnimator),"cellAnimators"in c&&t(3,o=c.cellAnimators)},[s,i,l,o,n]}class wt extends Y{constructor(e){super(),Z(this,e,bt,pt,X,{row:0,rowLetters:1,rowAnimator:2,cellAnimators:3})}}const kt=()=>{let r=[];return{registerCallback(e){return r.push(e),()=>r=[]},trigger(e){return Promise.all(r.map(t=>Promise.resolve(t(e))))}}},yt=r=>{const{trigger:e,registerCallback:t}=kt();return{triggerAction:(n,s)=>{let i=s;const l=t(o=>r(n,i,o));return{update(o){},destroy(){l()}}},trigger:e}},Se=r=>{const{trigger:e,triggerAction:t}=yt((n,s,i)=>new Promise(l=>{let o=i||s||r;o&&(n.addEventListener("animationend",()=>{n.classList.remove(o),l()}),n.classList.add(o))}));return{triggerAnimation:n=>e(n),animationAction:(n,s)=>t(n,s)}};function Te(r,e,t){const n=r.slice();return n[21]=e[t],n[23]=t,n}function $e(r,e,t){const n=r.slice();return n[21]=e[t],n[23]=t,n}function Ne(r,e,t){const n=r.slice();return n[21]=e[t],n[23]=t,n}function Be(r,e,t){const n=r.slice();return n[26]=e[t],n[28]=t,n}function Fe(r){let e,t;return e=new wt({props:{row:r[28],rowLetters:r[1][r[28]],rowAnimator:r[4][r[28]].animationAction,cellAnimators:r[3][r[28]]}}),{c(){M(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,s){J(e,n,s),t=!0},p(n,s){const i={};s&2&&(i.rowLetters=n[1][n[28]]),e.$set(i)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Q(e,n)}}}function De(r){let e,t;function n(){return r[10](r[21])}return e=new me({props:{letter:r[21],state:r[2][r[21]],onclick:n}}),{c(){M(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,i){J(e,s,i),t=!0},p(s,i){r=s;const l={};i&4&&(l.state=r[2][r[21]]),e.$set(l)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){Q(e,s)}}}function Re(r){let e,t;function n(){return r[11](r[21])}return e=new me({props:{letter:r[21],state:r[2][r[21]],onclick:n}}),{c(){M(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,i){J(e,s,i),t=!0},p(s,i){r=s;const l={};i&4&&(l.state=r[2][r[21]]),e.$set(l)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){Q(e,s)}}}function Ve(r){let e,t;function n(){return r[12](r[21])}return e=new me({props:{letter:r[21],state:r[2][r[21]],onclick:n}}),{c(){M(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,i){J(e,s,i),t=!0},p(s,i){r=s;const l={};i&4&&(l.state=r[2][r[21]]),e.$set(l)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){Q(e,s)}}}function Ct(r){let e,t='<div id="errors-container" class="svelte-zslsky"></div>',n,s,i,l,o,c,u,h,g,S,m,V,R,y,F,O,N=ee(Array(r[0])),A=[];for(let f=0;f<N.length;f+=1)A[f]=Fe(Be(r,N,f));const x=f=>$(A[f],1,1,()=>{A[f]=null});let K=ee("QWERTYUIOP"),w=[];for(let f=0;f<K.length;f+=1)w[f]=De(Ne(r,K,f));const d=f=>$(w[f],1,1,()=>{w[f]=null});let T=ee("ASDFGHJKL"),p=[];for(let f=0;f<T.length;f+=1)p[f]=Re($e(r,T,f));const B=f=>$(p[f],1,1,()=>{p[f]=null});S=new Ee({props:{letter:"ENTER",onclick:r[7]}});let z=ee("ZXCVBNM"),E=[];for(let f=0;f<z.length;f+=1)E[f]=Ve(Te(r,z,f));const ae=f=>$(E[f],1,1,()=>{E[f]=null});return R=new Ee({props:{letter:"BACK",onclick:r[6]}}),{c(){e=L("section"),e.innerHTML=t,n=P(),s=L("section");for(let f=0;f<A.length;f+=1)A[f].c();i=P(),l=L("section"),o=L("div");for(let f=0;f<w.length;f+=1)w[f].c();c=P(),u=L("div");for(let f=0;f<p.length;f+=1)p[f].c();h=P(),g=L("div"),M(S.$$.fragment),m=P();for(let f=0;f<E.length;f+=1)E[f].c();V=P(),M(R.$$.fragment),this.h()},l(f){e=I(f,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),te(e)!=="svelte-wjeacj"&&(e.innerHTML=t),n=G(f),s=I(f,"SECTION",{id:!0,class:!0});var _=D(s);for(let U=0;U<A.length;U+=1)A[U].l(_);_.forEach(b),i=G(f),l=I(f,"SECTION",{id:!0});var a=D(l);o=I(a,"DIV",{class:!0});var q=D(o);for(let U=0;U<w.length;U+=1)w[U].l(q);q.forEach(b),c=G(a),u=I(a,"DIV",{class:!0});var ve=D(u);for(let U=0;U<p.length;U+=1)p[U].l(ve);ve.forEach(b),h=G(a),g=I(a,"DIV",{class:!0});var ie=D(g);H(S.$$.fragment,ie),m=G(ie);for(let U=0;U<E.length;U+=1)E[U].l(ie);V=G(ie),H(R.$$.fragment,ie),ie.forEach(b),a.forEach(b),this.h()},h(){v(e,"id","errors"),v(e,"class","svelte-zslsky"),v(s,"id","playing-grid"),v(s,"class","svelte-zslsky"),v(o,"class","guessed-letters-row svelte-zslsky"),v(u,"class","guessed-letters-row svelte-zslsky"),v(g,"class","guessed-letters-row svelte-zslsky"),v(l,"id","guessed-letters")},m(f,_){W(f,e,_),W(f,n,_),W(f,s,_);for(let a=0;a<A.length;a+=1)A[a]&&A[a].m(s,null);W(f,i,_),W(f,l,_),k(l,o);for(let a=0;a<w.length;a+=1)w[a]&&w[a].m(o,null);k(l,c),k(l,u);for(let a=0;a<p.length;a+=1)p[a]&&p[a].m(u,null);k(l,h),k(l,g),J(S,g,null),k(g,m);for(let a=0;a<E.length;a+=1)E[a]&&E[a].m(g,null);k(g,V),J(R,g,null),y=!0,F||(O=fe(window,"keydown",r[5]),F=!0)},p(f,[_]){if(_&27){N=ee(Array(f[0]));let a;for(a=0;a<N.length;a+=1){const q=Be(f,N,a);A[a]?(A[a].p(q,_),C(A[a],1)):(A[a]=Fe(q),A[a].c(),C(A[a],1),A[a].m(s,null))}for(ne(),a=N.length;a<A.length;a+=1)x(a);re()}if(_&260){K=ee("QWERTYUIOP");let a;for(a=0;a<K.length;a+=1){const q=Ne(f,K,a);w[a]?(w[a].p(q,_),C(w[a],1)):(w[a]=De(q),w[a].c(),C(w[a],1),w[a].m(o,null))}for(ne(),a=K.length;a<w.length;a+=1)d(a);re()}if(_&260){T=ee("ASDFGHJKL");let a;for(a=0;a<T.length;a+=1){const q=$e(f,T,a);p[a]?(p[a].p(q,_),C(p[a],1)):(p[a]=Re(q),p[a].c(),C(p[a],1),p[a].m(u,null))}for(ne(),a=T.length;a<p.length;a+=1)B(a);re()}if(_&260){z=ee("ZXCVBNM");let a;for(a=0;a<z.length;a+=1){const q=Te(f,z,a);E[a]?(E[a].p(q,_),C(E[a],1)):(E[a]=Ve(q),E[a].c(),C(E[a],1),E[a].m(g,V))}for(ne(),a=z.length;a<E.length;a+=1)ae(a);re()}},i(f){if(!y){for(let _=0;_<N.length;_+=1)C(A[_]);for(let _=0;_<K.length;_+=1)C(w[_]);for(let _=0;_<T.length;_+=1)C(p[_]);C(S.$$.fragment,f);for(let _=0;_<z.length;_+=1)C(E[_]);C(R.$$.fragment,f),y=!0}},o(f){A=A.filter(Boolean);for(let _=0;_<A.length;_+=1)$(A[_]);w=w.filter(Boolean);for(let _=0;_<w.length;_+=1)$(w[_]);p=p.filter(Boolean);for(let _=0;_<p.length;_+=1)$(p[_]);$(S.$$.fragment,f),E=E.filter(Boolean);for(let _=0;_<E.length;_+=1)$(E[_]);$(R.$$.fragment,f),y=!1},d(f){f&&(b(e),b(n),b(s),b(i),b(l)),ce(A,f),ce(w,f),ce(p,f),Q(S),ce(E,f),Q(R),F=!1,O()}}}function At(r){return r.toLowerCase()!=r.toUpperCase()&&r.length===1}function _e(r,e){for(var t={},n=document.getElementById(r).getElementsByTagName("*"),s=0;s<n.length;s++)if(n[s].id===e){t=n[s];break}return t}async function We(r){return new Promise(e=>setTimeout(e,r))}function Et(r,e,t){let n=5;he.subscribe(d=>{n=d});let s=6;Ge.subscribe(d=>{t(0,s=d)});const i=[];for(let d=0;d<s;d++){const T=[];for(let p=0;p<n;p++)T.push(Se());i.push(T)}const l=[];for(let d=0;d<s;d++)l.push(Se());let o=!0,c="";Me(async()=>{let d={};for(;!d.ok;)c=await(await fetch(`https://random-word-api.herokuapp.com/word?length=${n}`)).json(),c=c[0].toUpperCase(),d=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${c}`);o=!1});let u=0,h=0;const g=[];for(let d=0;d<s;d++){const T=[];for(let p=0;p<n;p++)T.push("");g.push(T)}const S={A:"trans-back",B:"trans-back",C:"trans-back",D:"trans-back",E:"trans-back",F:"trans-back",G:"trans-back",H:"trans-back",I:"trans-back",J:"trans-back",K:"trans-back",L:"trans-back",M:"trans-back",N:"trans-back",O:"trans-back",P:"trans-back",Q:"trans-back",R:"trans-back",S:"trans-back",T:"trans-back",U:"trans-back",V:"trans-back",W:"trans-back",X:"trans-back",Y:"trans-back",Z:"trans-back"};let{isFinished:m}=e;async function V(){return g[u].includes("")?(l[u].triggerAnimation("shake"),new qe({target:document.getElementById("errors-container")}),!1):(await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${g[u].join("")}`)).ok?!0:(l[u].triggerAnimation("shake"),new Pe({target:document.getElementById("errors-container")}),!1)}function R(d){m||o||(d.code==="Enter"?o||F():d.code==="Backspace"?y():At(d.key)&&N(d.code[d.code.length-1].toUpperCase()))}function y(){if(h<1)return;h-=1;const d=_e(`row-${u}`,`item-${h}`);d.textContent="",t(1,g[u][h]="",g)}async function F(){if(!m&&!o){if(o=!0,await V()){for(let d=0;d<n;d++){i[u][d].triggerAnimation("rotate"),await We(200);const T=_e(`row-${u}`,`item-${d}`),p=c[d],B=g[u][d];p===B?(T.classList.add("right-place"),t(2,S[B]="right-place",S)):c.includes(B)?(O(d)?T.classList.add("wrong-place"):T.classList.add("wrong-letter"),S[B]!="right-place"&&t(2,S[B]="wrong-place",S)):(T.classList.add("wrong-letter"),t(2,S[B]="wrong-letter",S)),i[u][d].triggerAnimation("rotateBack"),await We(200)}g[u].join("")==c&&A(),u++,h=0}u==s&&A(),o=!1}}function O(d){let T=c.split(g[u][d]).length-1;for(let p=0;p<d;p++)if(g[u][p]==g[u][d]&&(T-=1),T<=0)return!1;return!0}function N(d){if(h>n-1||m)return;i[u][h].triggerAnimation("pop");const T=_e(`row-${u}`,`item-${h}`);T.textContent=d,t(1,g[u][h]=d,g),h+=1}function A(){m||(t(9,m=!0),new at({target:document.getElementById("errors-container"),props:{answer:c}}))}const x=d=>N(d),K=d=>N(d),w=d=>N(d);return r.$$set=d=>{"isFinished"in d&&t(9,m=d.isFinished)},[s,g,S,i,l,R,y,F,N,m,x,K,w]}class Lt extends Y{constructor(e){super(),Z(this,e,Et,Ct,X,{isFinished:9})}}function It(r){let e,t,n,s,i,l,o,c="less",u,h,g="more",S,m,V,R,y,F,O,N="more",A,x,K="less",w,d,T,p;return{c(){e=L("div"),t=L("div"),n=L("p"),s=se("Word Length: "),i=se(r[0]),l=P(),o=L("button"),o.textContent=c,u=P(),h=L("button"),h.textContent=g,S=P(),m=L("div"),V=L("p"),R=se("Tries: "),y=se(r[1]),F=P(),O=L("button"),O.textContent=N,A=P(),x=L("button"),x.textContent=K,this.h()},l(B){e=I(B,"DIV",{class:!0});var z=D(e);t=I(z,"DIV",{class:!0});var E=D(t);n=I(E,"P",{class:!0});var ae=D(n);s=le(ae,"Word Length: "),i=le(ae,r[0]),ae.forEach(b),l=G(E),o=I(E,"BUTTON",{"data-svelte-h":!0}),te(o)!=="svelte-1ooke7b"&&(o.textContent=c),u=G(E),h=I(E,"BUTTON",{"data-svelte-h":!0}),te(h)!=="svelte-1xkzde4"&&(h.textContent=g),E.forEach(b),S=G(z),m=I(z,"DIV",{class:!0});var f=D(m);V=I(f,"P",{class:!0});var _=D(V);R=le(_,"Tries: "),y=le(_,r[1]),_.forEach(b),F=G(f),O=I(f,"BUTTON",{"data-svelte-h":!0}),te(O)!=="svelte-g0eq9z"&&(O.textContent=N),A=G(f),x=I(f,"BUTTON",{"data-svelte-h":!0}),te(x)!=="svelte-1ooke7b"&&(x.textContent=K),f.forEach(b),z.forEach(b),this.h()},h(){v(n,"class","svelte-1cmg8u8"),v(t,"class","setting-container svelte-1cmg8u8"),v(V,"class","svelte-1cmg8u8"),v(m,"class","setting-container svelte-1cmg8u8"),v(e,"class","settings-container svelte-1cmg8u8")},m(B,z){W(B,e,z),k(e,t),k(t,n),k(n,s),k(n,i),k(t,l),k(t,o),k(t,u),k(t,h),k(e,S),k(e,m),k(m,V),k(V,R),k(V,y),k(m,F),k(m,O),k(m,A),k(m,x),d=!0,T||(p=fe(h,"click",r[2]),T=!0)},p(B,[z]){(!d||z&1)&&oe(i,B[0]),(!d||z&2)&&oe(y,B[1])},i(B){d||(B&&He(()=>{d&&(w||(w=we(e,Ae,{delay:0,duration:700,x:0,y:"100vh",opacity:1,easing:Ce},!0)),w.run(1))}),d=!0)},o(B){B&&(w||(w=we(e,Ae,{delay:0,duration:700,x:0,y:"100vh",opacity:1,easing:Ce},!1)),w.run(0)),d=!1},d(B){B&&b(e),B&&w&&w.end(),T=!1,p()}}}function St(r,e,t){let n=5;he.subscribe(l=>{t(0,n=l)});let s=6;Ge.subscribe(l=>{t(1,s=l)});function i(){he.update(l=>l+1)}return[n,s,i]}class Tt extends Y{constructor(e){super(),Z(this,e,St,It,X,{})}}function Oe(r){let e,t;return e=new Tt({}),{c(){M(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,s){J(e,n,s),t=!0},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Q(e,n)}}}function $t(r){let e,t,n,s,i,l,o,c,u,h;function g(y){r[3](y)}let S={toggleSettings:r[2]};r[1]!==void 0&&(S.isFinished=r[1]),t=new Ye({props:S}),ue.push(()=>ke(t,"isFinished",g));let m=r[0]&&Oe();function V(y){r[4](y)}let R={};return r[1]!==void 0&&(R.isFinished=r[1]),c=new Lt({props:R}),ue.push(()=>ke(c,"isFinished",V)),{c(){e=L("div"),M(t.$$.fragment),s=P(),i=L("div"),l=L("div"),m&&m.c(),o=P(),M(c.$$.fragment),this.h()},l(y){e=I(y,"DIV",{id:!0,class:!0});var F=D(e);H(t.$$.fragment,F),s=G(F),i=I(F,"DIV",{id:!0,class:!0});var O=D(i);l=I(O,"DIV",{class:!0});var N=D(l);m&&m.l(N),o=G(N),H(c.$$.fragment,N),N.forEach(b),O.forEach(b),F.forEach(b),this.h()},h(){v(l,"class","content svelte-1slizt7"),v(i,"id","screen"),v(i,"class","svelte-1slizt7"),v(e,"id","app"),v(e,"class","svelte-1slizt7")},m(y,F){W(y,e,F),J(t,e,null),k(e,s),k(e,i),k(i,l),m&&m.m(l,null),k(l,o),J(c,l,null),h=!0},p(y,[F]){const O={};!n&&F&2&&(n=!0,O.isFinished=y[1],be(()=>n=!1)),t.$set(O),y[0]?m?F&1&&C(m,1):(m=Oe(),m.c(),C(m,1),m.m(l,o)):m&&(ne(),$(m,1,1,()=>{m=null}),re());const N={};!u&&F&2&&(u=!0,N.isFinished=y[1],be(()=>u=!1)),c.$set(N)},i(y){h||(C(t.$$.fragment,y),C(m),C(c.$$.fragment,y),h=!0)},o(y){$(t.$$.fragment,y),$(m),$(c.$$.fragment,y),h=!1},d(y){y&&b(e),Q(t),m&&m.d(),Q(c)}}}function Nt(r,e,t){let n=!1;const s=()=>{t(0,n=!n)};let i=!1;function l(c){i=c,t(1,i)}function o(c){i=c,t(1,i)}return[n,i,s,l,o]}class Rt extends Y{constructor(e){super(),Z(this,e,Nt,$t,X,{})}}export{Rt as component};
