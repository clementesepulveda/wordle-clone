import{i as qe,s as J,b as Ve,n as W,f as fe,h as je,j as Oe,o as Ge}from"../chunks/scheduler.7ddb574c.js";import{S as Q,i as X,e as ue,a as T,p as te,t as E,b as ne,d as p,f as k,g as N,h as S,y as ae,k as w,z as He,r as $,u as K,v as M,w as q,m as de,j as V,n as ge,x as D,A as he,o as me,B as oe,s as z,c as F}from"../chunks/index.914a04b1.js";function j(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function ze(l,{delay:e=0,duration:t=400,easing:n=qe}={}){const r=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:n,css:i=>`opacity: ${i*r}`}}function Fe(l){let e,t="Not enough letters",n,r;return{c(){e=N("div"),e.textContent=t,this.h()},l(i){e=S(i,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-zl4sfa"&&(e.textContent=t),this.h()},h(){w(e,"class","error svelte-uqeub3")},m(i,s){T(i,e,s),r=!0},p:W,i(i){r||(n&&n.end(1),r=!0)},o(i){i&&(n=He(e,ze,{})),r=!1},d(i){i&&k(e),i&&n&&n.end()}}}function Je(l){let e,t,n={getSelfRef:!1};return e=new Pe({props:n}),l[3](e),{c(){$(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,i){M(e,r,i),t=!0},p(r,i){const s={};e.$set(s)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){l[3](null),q(e,r)}}}function Qe(l){let e,t,n,r;const i=[Je,Fe],s=[];function o(f,u){return f[0]?0:1}return e=o(l),t=s[e]=i[e](l),{c(){t.c(),n=ue()},l(f){t.l(f),n=ue()},m(f,u){s[e].m(f,u),T(f,n,u),r=!0},p(f,[u]){let h=e;e=o(f),e===h?s[e].p(f,u):(te(),E(s[h],1,1,()=>{s[h]=null}),ne(),t=s[e],t?t.p(f,u):(t=s[e]=i[e](f),t.c()),p(t,1),t.m(n.parentNode,n))},i(f){r||(p(t),r=!0)},o(f){E(t),r=!1},d(f){f&&k(n),s[e].d(f)}}}function Xe(l,e,t){let{time:n=1500}=e,{getSelfRef:r=!0}=e,i;function s(o){Ve[o?"unshift":"push"](()=>{i=o,t(1,i)})}return l.$$set=o=>{"time"in o&&t(2,n=o.time),"getSelfRef"in o&&t(0,r=o.getSelfRef)},l.$$.update=()=>{l.$$.dirty&6&&i&&setTimeout(()=>{i.$destroy()},n)},[r,i,n,s]}class Pe extends Q{constructor(e){super(),X(this,e,Xe,Qe,J,{time:2,getSelfRef:0})}}function Ye(l){let e,t,n,r,i;return{c(){e=N("button"),t=de(l[0]),this.h()},l(s){e=S(s,"BUTTON",{id:!0,class:!0});var o=V(e);t=ge(o,l[0]),o.forEach(k),this.h()},h(){w(e,"id","container"),w(e,"class",n=fe(l[1])+" svelte-s2ivw")},m(s,o){T(s,e,o),D(e,t),r||(i=he(e,"click",function(){je(l[2])&&l[2].apply(this,arguments)}),r=!0)},p(s,[o]){l=s,o&1&&me(t,l[0]),o&2&&n!==(n=fe(l[1])+" svelte-s2ivw")&&w(e,"class",n)},i:W,o:W,d(s){s&&k(e),r=!1,i()}}}function Ze(l,e,t){let{letter:n}=e,{state:r="trans-back"}=e,{onclick:i}=e;return l.$$set=s=>{"letter"in s&&t(0,n=s.letter),"state"in s&&t(1,r=s.state),"onclick"in s&&t(2,i=s.onclick)},[n,r,i]}class ke extends Q{constructor(e){super(),X(this,e,Ze,Ye,J,{letter:0,state:1,onclick:2})}}function xe(l){let e,t;return{c(){e=N("div"),t=de(l[0]),this.h()},l(n){e=S(n,"DIV",{class:!0});var r=V(e);t=ge(r,l[0]),r.forEach(k),this.h()},h(){w(e,"class","error svelte-mzlahg")},m(n,r){T(n,e,r),D(e,t)},p(n,[r]){r&1&&me(t,n[0])},i:W,o:W,d(n){n&&k(e)}}}function et(l,e,t){let{answer:n}=e;return l.$$set=r=>{"answer"in r&&t(0,n=r.answer)},[n]}class tt extends Q{constructor(e){super(),X(this,e,et,xe,J,{answer:0})}}function nt(l){let e,t="Not in word list";return{c(){e=N("div"),e.textContent=t,this.h()},l(n){e=S(n,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-14y5hfg"&&(e.textContent=t),this.h()},h(){w(e,"class","error svelte-1cqv3sd")},m(n,r){T(n,e,r)},p:W,i:W,o:W,d(n){n&&k(e)}}}function rt(l){let e,t,n={getSelfRef:!1};return e=new Ue({props:n}),l[3](e),{c(){$(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,i){M(e,r,i),t=!0},p(r,i){const s={};e.$set(s)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){l[3](null),q(e,r)}}}function lt(l){let e,t,n,r;const i=[rt,nt],s=[];function o(f,u){return f[0]?0:1}return e=o(l),t=s[e]=i[e](l),{c(){t.c(),n=ue()},l(f){t.l(f),n=ue()},m(f,u){s[e].m(f,u),T(f,n,u),r=!0},p(f,[u]){let h=e;e=o(f),e===h?s[e].p(f,u):(te(),E(s[h],1,1,()=>{s[h]=null}),ne(),t=s[e],t?t.p(f,u):(t=s[e]=i[e](f),t.c()),p(t,1),t.m(n.parentNode,n))},i(f){r||(p(t),r=!0)},o(f){E(t),r=!1},d(f){f&&k(n),s[e].d(f)}}}function st(l,e,t){let{time:n=1500}=e,{getSelfRef:r=!0}=e,i;function s(o){Ve[o?"unshift":"push"](()=>{i=o,t(1,i)})}return l.$$set=o=>{"time"in o&&t(2,n=o.time),"getSelfRef"in o&&t(0,r=o.getSelfRef)},l.$$.update=()=>{l.$$.dirty&6&&i&&setTimeout(()=>{i.$destroy()},n)},[r,i,n,s]}class Ue extends Q{constructor(e){super(),X(this,e,st,lt,J,{time:2,getSelfRef:0})}}function it(l){let e,t,n,r,i;return{c(){e=N("button"),t=de(l[0]),this.h()},l(s){e=S(s,"BUTTON",{id:!0,class:!0});var o=V(e);t=ge(o,l[0]),o.forEach(k),this.h()},h(){w(e,"id","container"),w(e,"class",n=fe(l[1])+" svelte-1qt5onn")},m(s,o){T(s,e,o),D(e,t),r||(i=he(e,"click",function(){je(l[2])&&l[2].apply(this,arguments)}),r=!0)},p(s,[o]){l=s,o&1&&me(t,l[0]),o&2&&n!==(n=fe(l[1])+" svelte-1qt5onn")&&w(e,"class",n)},i:W,o:W,d(s){s&&k(e),r=!1,i()}}}function ot(l,e,t){let{letter:n}=e,{state:r="trans-back"}=e,{onclick:i}=e;return l.$$set=s=>{"letter"in s&&t(0,n=s.letter),"state"in s&&t(1,r=s.state),"onclick"in s&&t(2,i=s.onclick)},[n,r,i]}class ye extends Q{constructor(e){super(),X(this,e,ot,it,J,{letter:0,state:1,onclick:2})}}function at(l){let e,t,n,r,i;return{c(){e=N("div"),t=de(l[0]),this.h()},l(s){e=S(s,"DIV",{class:!0,id:!0});var o=V(e);t=ge(o,l[0]),o.forEach(k),this.h()},h(){w(e,"class","item svelte-1o05t5l"),w(e,"id",n="item-"+l[1])},m(s,o){T(s,e,o),D(e,t),r||(i=Oe(l[2].call(null,e)),r=!0)},p(s,[o]){o&1&&me(t,s[0]),o&2&&n!==(n="item-"+s[1])&&w(e,"id",n)},i:W,o:W,d(s){s&&k(e),r=!1,i()}}}function ct(l,e,t){let{letter:n}=e,{index:r}=e,{animationAction:i}=e;return l.$$set=s=>{"letter"in s&&t(0,n=s.letter),"index"in s&&t(1,r=s.index),"animationAction"in s&&t(2,i=s.animationAction)},[n,r,i]}class ft extends Q{constructor(e){super(),X(this,e,ct,at,J,{letter:0,index:1,animationAction:2})}}function Ae(l,e,t){const n=l.slice();return n[4]=e[t],n[6]=t,n}function Ee(l){let e,t;return e=new ft({props:{letter:l[1][l[6]],index:l[6],animationAction:l[3][l[6]].animationAction}}),{c(){$(e.$$.fragment)},l(n){K(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p(n,r){const i={};r&2&&(i.letter=n[1][n[6]]),r&8&&(i.animationAction=n[3][n[6]].animationAction),e.$set(i)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function ut(l){let e,t,n,r,i,s=j(Array(5)),o=[];for(let u=0;u<s.length;u+=1)o[u]=Ee(Ae(l,s,u));const f=u=>E(o[u],1,1,()=>{o[u]=null});return{c(){e=N("div");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=S(u,"DIV",{class:!0,id:!0});var h=V(e);for(let g=0;g<o.length;g+=1)o[g].l(h);h.forEach(k),this.h()},h(){w(e,"class","row svelte-1m7d31l"),w(e,"id",t="row-"+l[0])},m(u,h){T(u,e,h);for(let g=0;g<o.length;g+=1)o[g]&&o[g].m(e,null);n=!0,r||(i=Oe(l[2].call(null,e)),r=!0)},p(u,[h]){if(h&10){s=j(Array(5));let g;for(g=0;g<s.length;g+=1){const I=Ae(u,s,g);o[g]?(o[g].p(I,h),p(o[g],1)):(o[g]=Ee(I),o[g].c(),p(o[g],1),o[g].m(e,null))}for(te(),g=s.length;g<o.length;g+=1)f(g);ne()}(!n||h&1&&t!==(t="row-"+u[0]))&&w(e,"id",t)},i(u){if(!n){for(let h=0;h<s.length;h+=1)p(o[h]);n=!0}},o(u){o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)E(o[h]);n=!1},d(u){u&&k(e),oe(o,u),r=!1,i()}}}function _t(l,e,t){let{row:n}=e,{rowLetters:r}=e,{rowAnimator:i}=e,{cellAnimators:s}=e;return l.$$set=o=>{"row"in o&&t(0,n=o.row),"rowLetters"in o&&t(1,r=o.rowLetters),"rowAnimator"in o&&t(2,i=o.rowAnimator),"cellAnimators"in o&&t(3,s=o.cellAnimators)},[n,r,i,s]}class dt extends Q{constructor(e){super(),X(this,e,_t,ut,J,{row:0,rowLetters:1,rowAnimator:2,cellAnimators:3})}}const gt=()=>{let l=[];return{registerCallback(e){return l.push(e),()=>l=[]},trigger(e){return Promise.all(l.map(t=>Promise.resolve(t(e))))}}},ht=l=>{const{trigger:e,registerCallback:t}=gt();return{triggerAction:(n,r)=>{let i=r;const s=t(o=>l(n,i,o));return{update(o){},destroy(){s()}}},trigger:e}},m=l=>{const{trigger:e,triggerAction:t}=ht((n,r,i)=>new Promise(s=>{let o=i||r||l;o&&(n.addEventListener("animationend",()=>{n.classList.remove(o),s()}),n.classList.add(o))}));return{triggerAnimation:n=>e(n),animationAction:(n,r)=>t(n,r)}};function Ce(l,e,t){const n=l.slice();return n[21]=e[t],n[23]=t,n}function Le(l,e,t){const n=l.slice();return n[21]=e[t],n[23]=t,n}function Ie(l,e,t){const n=l.slice();return n[21]=e[t],n[23]=t,n}function Ne(l,e,t){const n=l.slice();return n[26]=e[t],n[28]=t,n}function Se(l){let e,t,n="↻",r,i;return{c(){e=N("span"),t=N("a"),t.textContent=n,this.h()},l(s){e=S(s,"SPAN",{class:!0});var o=V(e);t=S(o,"A",{href:!0,class:!0,"data-svelte-h":!0}),ae(t)!=="svelte-1tjfch7"&&(t.textContent=n),o.forEach(k),this.h()},h(){w(t,"href","#"),w(t,"class","svelte-cmgd72"),w(e,"class","reload svelte-cmgd72")},m(s,o){T(s,e,o),D(e,t),r||(i=he(t,"click",l[9]),r=!0)},p:W,d(s){s&&k(e),r=!1,i()}}}function Te(l){let e,t;return e=new dt({props:{row:l[28],rowLetters:l[0][l[28]],rowAnimator:l[4][l[28]].animationAction,cellAnimators:l[3][l[28]]}}),{c(){$(e.$$.fragment)},l(n){K(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p(n,r){const i={};r&1&&(i.rowLetters=n[0][n[28]]),e.$set(i)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function Re(l){let e,t;function n(){return l[10](l[21])}return e=new ke({props:{letter:l[21],state:l[1][l[21]],onclick:n}}),{c(){$(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,i){M(e,r,i),t=!0},p(r,i){l=r;const s={};i&2&&(s.state=l[1][l[21]]),e.$set(s)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function Be(l){let e,t;function n(){return l[11](l[21])}return e=new ke({props:{letter:l[21],state:l[1][l[21]],onclick:n}}),{c(){$(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,i){M(e,r,i),t=!0},p(r,i){l=r;const s={};i&2&&(s.state=l[1][l[21]]),e.$set(s)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function De(l){let e,t;function n(){return l[12](l[21])}return e=new ke({props:{letter:l[21],state:l[1][l[21]],onclick:n}}),{c(){$(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,i){M(e,r,i),t=!0},p(r,i){l=r;const s={};i&2&&(s.state=l[1][l[21]]),e.$set(s)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){q(e,r)}}}function mt(l){let e,t='<div id="errors-container" class="svelte-cmgd72"></div>',n,r,i,s="Wordle",o,f,u,h,g,I,se,O,re,B,P,U,Y,G,ie,ce,ve,d=l[2]&&Se(l),C=j(Array(_e)),v=[];for(let c=0;c<C.length;c+=1)v[c]=Te(Ne(l,C,c));const H=c=>E(v[c],1,1,()=>{v[c]=null});let Z=j("QWERTYUIOP"),b=[];for(let c=0;c<Z.length;c+=1)b[c]=Re(Ie(l,Z,c));const $e=c=>E(b[c],1,1,()=>{b[c]=null});let x=j("ASDFGHJKL"),y=[];for(let c=0;c<x.length;c+=1)y[c]=Be(Le(l,x,c));const Ke=c=>E(y[c],1,1,()=>{y[c]=null});P=new ye({props:{letter:"ENTER",onclick:l[7]}});let ee=j("ZXCVBNM"),A=[];for(let c=0;c<ee.length;c+=1)A[c]=De(Ce(l,ee,c));const Me=c=>E(A[c],1,1,()=>{A[c]=null});return G=new ye({props:{letter:"BACK",onclick:l[6]}}),{c(){e=N("section"),e.innerHTML=t,n=z(),r=N("section"),i=N("div"),i.textContent=s,o=z(),d&&d.c(),f=z(),u=N("section");for(let c=0;c<v.length;c+=1)v[c].c();h=z(),g=N("section"),I=N("div");for(let c=0;c<b.length;c+=1)b[c].c();se=z(),O=N("div");for(let c=0;c<y.length;c+=1)y[c].c();re=z(),B=N("div"),$(P.$$.fragment),U=z();for(let c=0;c<A.length;c+=1)A[c].c();Y=z(),$(G.$$.fragment),this.h()},l(c){e=S(c,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-wjeacj"&&(e.innerHTML=t),n=F(c),r=S(c,"SECTION",{id:!0,class:!0});var _=V(r);i=S(_,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ae(i)!=="svelte-11pp5i7"&&(i.textContent=s),o=F(_),d&&d.l(_),_.forEach(k),f=F(c),u=S(c,"SECTION",{id:!0,class:!0});var a=V(u);for(let R=0;R<v.length;R+=1)v[R].l(a);a.forEach(k),h=F(c),g=S(c,"SECTION",{id:!0});var L=V(g);I=S(L,"DIV",{class:!0});var pe=V(I);for(let R=0;R<b.length;R+=1)b[R].l(pe);pe.forEach(k),se=F(L),O=S(L,"DIV",{class:!0});var be=V(O);for(let R=0;R<y.length;R+=1)y[R].l(be);be.forEach(k),re=F(L),B=S(L,"DIV",{class:!0});var le=V(B);K(P.$$.fragment,le),U=F(le);for(let R=0;R<A.length;R+=1)A[R].l(le);Y=F(le),K(G.$$.fragment,le),le.forEach(k),L.forEach(k),this.h()},h(){w(e,"id","errors"),w(e,"class","svelte-cmgd72"),w(i,"id","title"),w(i,"class","svelte-cmgd72"),w(r,"id","navbar"),w(r,"class","svelte-cmgd72"),w(u,"id","playing-grid"),w(u,"class","svelte-cmgd72"),w(I,"class","guessed-letters-row svelte-cmgd72"),w(O,"class","guessed-letters-row svelte-cmgd72"),w(B,"class","guessed-letters-row svelte-cmgd72"),w(g,"id","guessed-letters")},m(c,_){T(c,e,_),T(c,n,_),T(c,r,_),D(r,i),D(r,o),d&&d.m(r,null),T(c,f,_),T(c,u,_);for(let a=0;a<v.length;a+=1)v[a]&&v[a].m(u,null);T(c,h,_),T(c,g,_),D(g,I);for(let a=0;a<b.length;a+=1)b[a]&&b[a].m(I,null);D(g,se),D(g,O);for(let a=0;a<y.length;a+=1)y[a]&&y[a].m(O,null);D(g,re),D(g,B),M(P,B,null),D(B,U);for(let a=0;a<A.length;a+=1)A[a]&&A[a].m(B,null);D(B,Y),M(G,B,null),ie=!0,ce||(ve=he(window,"keydown",l[5]),ce=!0)},p(c,[_]){if(c[2]?d?d.p(c,_):(d=Se(c),d.c(),d.m(r,null)):d&&(d.d(1),d=null),_&25){C=j(Array(_e));let a;for(a=0;a<C.length;a+=1){const L=Ne(c,C,a);v[a]?(v[a].p(L,_),p(v[a],1)):(v[a]=Te(L),v[a].c(),p(v[a],1),v[a].m(u,null))}for(te(),a=C.length;a<v.length;a+=1)H(a);ne()}if(_&258){Z=j("QWERTYUIOP");let a;for(a=0;a<Z.length;a+=1){const L=Ie(c,Z,a);b[a]?(b[a].p(L,_),p(b[a],1)):(b[a]=Re(L),b[a].c(),p(b[a],1),b[a].m(I,null))}for(te(),a=Z.length;a<b.length;a+=1)$e(a);ne()}if(_&258){x=j("ASDFGHJKL");let a;for(a=0;a<x.length;a+=1){const L=Le(c,x,a);y[a]?(y[a].p(L,_),p(y[a],1)):(y[a]=Be(L),y[a].c(),p(y[a],1),y[a].m(O,null))}for(te(),a=x.length;a<y.length;a+=1)Ke(a);ne()}if(_&258){ee=j("ZXCVBNM");let a;for(a=0;a<ee.length;a+=1){const L=Ce(c,ee,a);A[a]?(A[a].p(L,_),p(A[a],1)):(A[a]=De(L),A[a].c(),p(A[a],1),A[a].m(B,Y))}for(te(),a=ee.length;a<A.length;a+=1)Me(a);ne()}},i(c){if(!ie){for(let _=0;_<C.length;_+=1)p(v[_]);for(let _=0;_<Z.length;_+=1)p(b[_]);for(let _=0;_<x.length;_+=1)p(y[_]);p(P.$$.fragment,c);for(let _=0;_<ee.length;_+=1)p(A[_]);p(G.$$.fragment,c),ie=!0}},o(c){v=v.filter(Boolean);for(let _=0;_<v.length;_+=1)E(v[_]);b=b.filter(Boolean);for(let _=0;_<b.length;_+=1)E(b[_]);y=y.filter(Boolean);for(let _=0;_<y.length;_+=1)E(y[_]);E(P.$$.fragment,c),A=A.filter(Boolean);for(let _=0;_<A.length;_+=1)E(A[_]);E(G.$$.fragment,c),ie=!1},d(c){c&&(k(e),k(n),k(r),k(f),k(u),k(h),k(g)),d&&d.d(),oe(v,c),oe(b,c),oe(y,c),q(P),oe(A,c),q(G),ce=!1,ve()}}}const _e=6,vt=5;function wt(l){return l.toLowerCase()!=l.toUpperCase()&&l.length===1}function we(l,e){for(var t={},n=document.getElementById(l).getElementsByTagName("*"),r=0;r<n.length;r++)if(n[r].id===e){t=n[r];break}return t}async function We(l){return new Promise(e=>setTimeout(e,l))}function kt(l,e,t){const n=[[m(),m(),m(),m(),m()],[m(),m(),m(),m(),m()],[m(),m(),m(),m(),m()],[m(),m(),m(),m(),m()],[m(),m(),m(),m(),m()],[m(),m(),m(),m(),m()]],r=[m(),m(),m(),m(),m(),m()];let i=!1,s="",o=!0;Ge(async()=>{let d={};for(;!d.ok;)s=await(await fetch("https://random-word-api.herokuapp.com/word?length=5")).json(),s=s[0].toUpperCase(),d=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${s}`);o=!1});let f=0,u=0;const h=[];for(let d=0;d<_e;d++){const C=[];for(let v=0;v<vt;v++)C.push("");h.push(C)}const g={A:"trans-back",B:"trans-back",C:"trans-back",D:"trans-back",E:"trans-back",F:"trans-back",G:"trans-back",H:"trans-back",I:"trans-back",J:"trans-back",K:"trans-back",L:"trans-back",M:"trans-back",N:"trans-back",O:"trans-back",P:"trans-back",Q:"trans-back",R:"trans-back",S:"trans-back",T:"trans-back",U:"trans-back",V:"trans-back",W:"trans-back",X:"trans-back",Y:"trans-back",Z:"trans-back"};let I=!1;async function se(){return h[f].includes("")?(r[f].triggerAnimation("shake"),new Pe({target:document.getElementById("errors-container")}),!1):(await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${h[f].join("")}`)).ok?!0:(r[f].triggerAnimation("shake"),new Ue({target:document.getElementById("errors-container")}),!1)}function O(d){I||(d.code==="Enter"?o||B():d.code==="Backspace"?re():wt(d.key)&&U(d.code[d.code.length-1].toUpperCase()))}function re(){if(u<1)return;u-=1;const d=we(`row-${f}`,`item-${u}`);d.textContent="",t(0,h[f][u]="",h)}async function B(){if(!I&&!i){if(i=!0,await se()){for(let d=0;d<5;d++){n[f][d].triggerAnimation("rotate"),await We(200);const C=we(`row-${f}`,`item-${d}`),v=s[d],H=h[f][d];v===H?(C.classList.add("right-place"),t(1,g[H]="right-place",g)):s.includes(H)?(P(d)?C.classList.add("wrong-place"):C.classList.add("wrong-letter"),g[H]!="right-place"&&t(1,g[H]="wrong-place",g)):(C.classList.add("wrong-letter"),t(1,g[H]="wrong-letter",g)),n[f][d].triggerAnimation("rotateBack"),await We(200)}h[f].join("")==s&&Y(),f+=1,u=0}f==_e&&Y(),i=!1}}function P(d){let C=s.split(h[f][d]).length-1;for(let v=0;v<d;v++)if(h[f][v]==h[f][d]&&(C-=1),C<=0)return!1;return!0}function U(d){if(u>4||I)return;n[f][u].triggerAnimation("pop");const C=we(`row-${f}`,`item-${u}`);C.textContent=d,t(0,h[f][u]=d,h),u+=1}function Y(){I||(t(2,I=!0),new tt({target:document.getElementById("errors-container"),props:{answer:s}}))}return[h,g,I,n,r,O,re,B,U,()=>location.reload(),d=>U(d),d=>U(d),d=>U(d)]}class yt extends Q{constructor(e){super(),X(this,e,kt,mt,J,{})}}export{yt as component};