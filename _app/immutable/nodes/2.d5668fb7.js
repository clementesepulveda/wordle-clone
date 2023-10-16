import{i as Lt,s as De,b as wt,n as q,f as Oe,h as yt,j as Ce,r as Rt,o as jt,k as Be}from"../chunks/scheduler.7ddb574c.js";import{S as Ve,i as Ne,e as We,a as R,p as Y,t as b,b as Z,d as g,f as _,g as w,h as y,y as Se,k as h,r as pe,u as ke,v as be,w as we,m as ne,j as T,n as le,x as k,z as Pe,o as re,s as U,c as K,A as te,B as F}from"../chunks/index.a18b30f2.js";function O(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function J(i,{delay:e=0,duration:l=400,easing:s=Lt}={}){const n=+getComputedStyle(i).opacity;return{delay:e,duration:l,easing:s,css:a=>`opacity: ${a*n}`}}function Ot(i){let e,l="Not enough letters";return{c(){e=w("div"),e.textContent=l,this.h()},l(s){e=y(s,"DIV",{class:!0,"data-svelte-h":!0}),Se(e)!=="svelte-1viatja"&&(e.textContent=l),this.h()},h(){h(e,"class","error svelte-hl7n1")},m(s,n){R(s,e,n)},p:q,i:q,o:q,d(s){s&&_(e)}}}function Wt(i){let e,l,s={getSelfRef:!1};return e=new Et({props:s}),i[3](e),{c(){pe(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,a){be(e,n,a),l=!0},p(n,a){const r={};e.$set(r)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){b(e.$$.fragment,n),l=!1},d(n){i[3](null),we(e,n)}}}function Pt(i){let e,l,s,n;const a=[Wt,Ot],r=[];function f(u,p){return u[0]?0:1}return e=f(i),l=r[e]=a[e](i),{c(){l.c(),s=We()},l(u){l.l(u),s=We()},m(u,p){r[e].m(u,p),R(u,s,p),n=!0},p(u,[p]){let W=e;e=f(u),e===W?r[e].p(u,p):(Y(),b(r[W],1,1,()=>{r[W]=null}),Z(),l=r[e],l?l.p(u,p):(l=r[e]=a[e](u),l.c()),g(l,1),l.m(s.parentNode,s))},i(u){n||(g(l),n=!0)},o(u){b(l),n=!1},d(u){u&&_(s),r[e].d(u)}}}function Ut(i,e,l){let{time:s=1500}=e,{getSelfRef:n=!0}=e,a;function r(f){wt[f?"unshift":"push"](()=>{a=f,l(1,a)})}return i.$$set=f=>{"time"in f&&l(2,s=f.time),"getSelfRef"in f&&l(0,n=f.getSelfRef)},i.$$.update=()=>{i.$$.dirty&6&&a&&setTimeout(()=>{a.$destroy()},s)},[n,a,s,r]}class Et extends Ve{constructor(e){super(),Ne(this,e,Ut,Pt,De,{time:2,getSelfRef:0})}}function Kt(i){let e,l,s,n,a;return{c(){e=w("button"),l=ne(i[0]),this.h()},l(r){e=y(r,"BUTTON",{id:!0,class:!0});var f=T(e);l=le(f,i[0]),f.forEach(_),this.h()},h(){h(e,"id","container"),h(e,"class",s=Oe(i[1])+" svelte-s2ivw")},m(r,f){R(r,e,f),k(e,l),n||(a=Pe(e,"click",function(){yt(i[2])&&i[2].apply(this,arguments)}),n=!0)},p(r,[f]){i=r,f&1&&re(l,i[0]),f&2&&s!==(s=Oe(i[1])+" svelte-s2ivw")&&h(e,"class",s)},i:q,o:q,d(r){r&&_(e),n=!1,a()}}}function Mt(i,e,l){let{letter:s}=e,{state:n="trans-back"}=e,{onclick:a}=e;return i.$$set=r=>{"letter"in r&&l(0,s=r.letter),"state"in r&&l(1,n=r.state),"onclick"in r&&l(2,a=r.onclick)},[s,n,a]}class qe extends Ve{constructor(e){super(),Ne(this,e,Mt,Kt,De,{letter:0,state:1,onclick:2})}}function Gt(i){let e,l;return{c(){e=w("div"),l=ne(i[0]),this.h()},l(s){e=y(s,"DIV",{class:!0});var n=T(e);l=le(n,i[0]),n.forEach(_),this.h()},h(){h(e,"class","error svelte-mzlahg")},m(s,n){R(s,e,n),k(e,l)},p(s,[n]){n&1&&re(l,s[0])},i:q,o:q,d(s){s&&_(e)}}}function Ht(i,e,l){let{answer:s}=e;return i.$$set=n=>{"answer"in n&&l(0,s=n.answer)},[s]}class qt extends Ve{constructor(e){super(),Ne(this,e,Ht,Gt,De,{answer:0})}}function Ft(i){let e,l="Not in word list";return{c(){e=w("div"),e.textContent=l,this.h()},l(s){e=y(s,"DIV",{class:!0,"data-svelte-h":!0}),Se(e)!=="svelte-14y5hfg"&&(e.textContent=l),this.h()},h(){h(e,"class","error svelte-1cqv3sd")},m(s,n){R(s,e,n)},p:q,i:q,o:q,d(s){s&&_(e)}}}function Jt(i){let e,l,s={getSelfRef:!1};return e=new At({props:s}),i[3](e),{c(){pe(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,a){be(e,n,a),l=!0},p(n,a){const r={};e.$set(r)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){b(e.$$.fragment,n),l=!1},d(n){i[3](null),we(e,n)}}}function Qt(i){let e,l,s,n;const a=[Jt,Ft],r=[];function f(u,p){return u[0]?0:1}return e=f(i),l=r[e]=a[e](i),{c(){l.c(),s=We()},l(u){l.l(u),s=We()},m(u,p){r[e].m(u,p),R(u,s,p),n=!0},p(u,[p]){let W=e;e=f(u),e===W?r[e].p(u,p):(Y(),b(r[W],1,1,()=>{r[W]=null}),Z(),l=r[e],l?l.p(u,p):(l=r[e]=a[e](u),l.c()),g(l,1),l.m(s.parentNode,s))},i(u){n||(g(l),n=!0)},o(u){b(l),n=!1},d(u){u&&_(s),r[e].d(u)}}}function Xt(i,e,l){let{time:s=1500}=e,{getSelfRef:n=!0}=e,a;function r(f){wt[f?"unshift":"push"](()=>{a=f,l(1,a)})}return i.$$set=f=>{"time"in f&&l(2,s=f.time),"getSelfRef"in f&&l(0,n=f.getSelfRef)},i.$$.update=()=>{i.$$.dirty&6&&a&&setTimeout(()=>{a.$destroy()},s)},[n,a,s,r]}class At extends Ve{constructor(e){super(),Ne(this,e,Xt,Qt,De,{time:2,getSelfRef:0})}}function Yt(i){let e,l,s,n,a;return{c(){e=w("button"),l=ne(i[0]),this.h()},l(r){e=y(r,"BUTTON",{id:!0,class:!0});var f=T(e);l=le(f,i[0]),f.forEach(_),this.h()},h(){h(e,"id","container"),h(e,"class",s=Oe(i[1])+" svelte-1qt5onn")},m(r,f){R(r,e,f),k(e,l),n||(a=Pe(e,"click",function(){yt(i[2])&&i[2].apply(this,arguments)}),n=!0)},p(r,[f]){i=r,f&1&&re(l,i[0]),f&2&&s!==(s=Oe(i[1])+" svelte-1qt5onn")&&h(e,"class",s)},i:q,o:q,d(r){r&&_(e),n=!1,a()}}}function Zt(i,e,l){let{letter:s}=e,{state:n="trans-back"}=e,{onclick:a}=e;return i.$$set=r=>{"letter"in r&&l(0,s=r.letter),"state"in r&&l(1,n=r.state),"onclick"in r&&l(2,a=r.onclick)},[s,n,a]}class tt extends Ve{constructor(e){super(),Ne(this,e,Zt,Yt,De,{letter:0,state:1,onclick:2})}}const zt=()=>{let i=[];return{registerCallback(e){return i.push(e),()=>i=[]},trigger(e){return Promise.all(i.map(l=>Promise.resolve(l(e))))}}},xt=i=>{const{trigger:e,registerCallback:l}=zt();return{triggerAction:(s,n)=>{let a=n;const r=l(f=>i(s,a,f));return{update(f){},destroy(){r()}}},trigger:e}},$e=i=>{const{trigger:e,triggerAction:l}=xt((s,n,a)=>new Promise(r=>{let f=a||n||i;f&&(s.addEventListener("animationend",()=>{s.classList.remove(f),r()}),s.classList.add(f))}));return{triggerAnimation:s=>e(s),animationAction:(s,n)=>l(s,n)}};function nt(i,e,l){const s=i.slice();return s[19]=e[l],s[21]=l,s}function lt(i,e,l){const s=i.slice();return s[19]=e[l],s[21]=l,s}function rt(i,e,l){const s=i.slice();return s[19]=e[l],s[21]=l,s}function it(i,e,l){const s=i.slice();return s[24]=e[l],s[21]=l,s}function st(i,e,l){const s=i.slice();return s[24]=e[l],s[21]=l,s}function ot(i,e,l){const s=i.slice();return s[24]=e[l],s[21]=l,s}function at(i,e,l){const s=i.slice();return s[24]=e[l],s[21]=l,s}function ct(i,e,l){const s=i.slice();return s[24]=e[l],s[21]=l,s}function ft(i,e,l){const s=i.slice();return s[24]=e[l],s[21]=l,s}function ut(i){let e,l=i[0][0][i[21]]+"",s,n,a;return{c(){e=w("div"),s=ne(l),this.h()},l(r){e=y(r,"DIV",{class:!0,id:!0});var f=T(e);s=le(f,l),f.forEach(_),this.h()},h(){h(e,"class","item svelte-1t5mae3"),h(e,"id","item-"+i[21])},m(r,f){R(r,e,f),k(e,s),a=!0},p(r,f){(!a||f&1)&&l!==(l=r[0][0][r[21]]+"")&&re(s,l)},i(r){a||(r&&Be(()=>{a&&(n||(n=F(e,J,{delay:250,duration:300},!0)),n.run(1))}),a=!0)},o(r){r&&(n||(n=F(e,J,{delay:250,duration:300},!1)),n.run(0)),a=!1},d(r){r&&_(e),r&&n&&n.end()}}}function ht(i){let e,l=i[0][1][i[21]]+"",s,n,a;return{c(){e=w("div"),s=ne(l),this.h()},l(r){e=y(r,"DIV",{class:!0,id:!0});var f=T(e);s=le(f,l),f.forEach(_),this.h()},h(){h(e,"class","item svelte-1t5mae3"),h(e,"id","item-"+i[21])},m(r,f){R(r,e,f),k(e,s),a=!0},p(r,f){(!a||f&1)&&l!==(l=r[0][1][r[21]]+"")&&re(s,l)},i(r){a||(r&&Be(()=>{a&&(n||(n=F(e,J,{delay:250,duration:300},!0)),n.run(1))}),a=!0)},o(r){r&&(n||(n=F(e,J,{delay:250,duration:300},!1)),n.run(0)),a=!1},d(r){r&&_(e),r&&n&&n.end()}}}function _t(i){let e,l=i[0][2][i[21]]+"",s,n,a;return{c(){e=w("div"),s=ne(l),this.h()},l(r){e=y(r,"DIV",{class:!0,id:!0});var f=T(e);s=le(f,l),f.forEach(_),this.h()},h(){h(e,"class","item svelte-1t5mae3"),h(e,"id","item-"+i[21])},m(r,f){R(r,e,f),k(e,s),a=!0},p(r,f){(!a||f&1)&&l!==(l=r[0][2][r[21]]+"")&&re(s,l)},i(r){a||(r&&Be(()=>{a&&(n||(n=F(e,J,{delay:250,duration:300},!0)),n.run(1))}),a=!0)},o(r){r&&(n||(n=F(e,J,{delay:250,duration:300},!1)),n.run(0)),a=!1},d(r){r&&_(e),r&&n&&n.end()}}}function dt(i){let e,l=i[0][3][i[21]]+"",s,n,a;return{c(){e=w("div"),s=ne(l),this.h()},l(r){e=y(r,"DIV",{class:!0,id:!0});var f=T(e);s=le(f,l),f.forEach(_),this.h()},h(){h(e,"class","item svelte-1t5mae3"),h(e,"id","item-"+i[21])},m(r,f){R(r,e,f),k(e,s),a=!0},p(r,f){(!a||f&1)&&l!==(l=r[0][3][r[21]]+"")&&re(s,l)},i(r){a||(r&&Be(()=>{a&&(n||(n=F(e,J,{delay:250,duration:300},!0)),n.run(1))}),a=!0)},o(r){r&&(n||(n=F(e,J,{delay:250,duration:300},!1)),n.run(0)),a=!1},d(r){r&&_(e),r&&n&&n.end()}}}function mt(i){let e,l=i[0][4][i[21]]+"",s,n,a;return{c(){e=w("div"),s=ne(l),this.h()},l(r){e=y(r,"DIV",{class:!0,id:!0});var f=T(e);s=le(f,l),f.forEach(_),this.h()},h(){h(e,"class","item svelte-1t5mae3"),h(e,"id","item-"+i[21])},m(r,f){R(r,e,f),k(e,s),a=!0},p(r,f){(!a||f&1)&&l!==(l=r[0][4][r[21]]+"")&&re(s,l)},i(r){a||(r&&Be(()=>{a&&(n||(n=F(e,J,{delay:250,duration:300},!0)),n.run(1))}),a=!0)},o(r){r&&(n||(n=F(e,J,{delay:250,duration:300},!1)),n.run(0)),a=!1},d(r){r&&_(e),r&&n&&n.end()}}}function gt(i){let e,l=i[0][5][i[21]]+"",s,n,a;return{c(){e=w("div"),s=ne(l),this.h()},l(r){e=y(r,"DIV",{class:!0,id:!0});var f=T(e);s=le(f,l),f.forEach(_),this.h()},h(){h(e,"class","item svelte-1t5mae3"),h(e,"id","item-"+i[21])},m(r,f){R(r,e,f),k(e,s),a=!0},p(r,f){(!a||f&1)&&l!==(l=r[0][5][r[21]]+"")&&re(s,l)},i(r){a||(r&&Be(()=>{a&&(n||(n=F(e,J,{delay:250,duration:300},!0)),n.run(1))}),a=!0)},o(r){r&&(n||(n=F(e,J,{delay:250,duration:300},!1)),n.run(0)),a=!1},d(r){r&&_(e),r&&n&&n.end()}}}function vt(i){let e,l;function s(){return i[8](i[19])}return e=new qe({props:{letter:i[19],state:i[1][i[19]],onclick:s}}),{c(){pe(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,a){be(e,n,a),l=!0},p(n,a){i=n;const r={};a&2&&(r.state=i[1][i[19]]),e.$set(r)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){b(e.$$.fragment,n),l=!1},d(n){we(e,n)}}}function pt(i){let e,l;function s(){return i[9](i[19])}return e=new qe({props:{letter:i[19],state:i[1][i[19]],onclick:s}}),{c(){pe(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,a){be(e,n,a),l=!0},p(n,a){i=n;const r={};a&2&&(r.state=i[1][i[19]]),e.$set(r)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){b(e.$$.fragment,n),l=!1},d(n){we(e,n)}}}function kt(i){let e,l;function s(){return i[10](i[19])}return e=new qe({props:{letter:i[19],state:i[1][i[19]],onclick:s}}),{c(){pe(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,a){be(e,n,a),l=!0},p(n,a){i=n;const r={};a&2&&(r.state=i[1][i[19]]),e.$set(r)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){b(e.$$.fragment,n),l=!1},d(n){we(e,n)}}}function en(i){let e,l,s="Wordle",n,a,r,f="↻",u,p,W='<div id="errors-container" class="svelte-1t5mae3"></div>',ye,L,G,Ee,Q,ee,H,Te,z,Le,x,m,S,P,j,ie,Ue,se,Ke,X,oe,Me,Re,ae,je,Ge,Fe,ce=O(Array(M)),E=[];for(let o=0;o<ce.length;o+=1)E[o]=ut(ft(i,ce,o));const It=o=>b(E[o],1,1,()=>{E[o]=null});let fe=O(Array(M)),A=[];for(let o=0;o<fe.length;o+=1)A[o]=ht(ct(i,fe,o));const Ct=o=>b(A[o],1,1,()=>{A[o]=null});let ue=O(Array(M)),I=[];for(let o=0;o<ue.length;o+=1)I[o]=_t(at(i,ue,o));const $t=o=>b(I[o],1,1,()=>{I[o]=null});let he=O(Array(M)),C=[];for(let o=0;o<he.length;o+=1)C[o]=dt(ot(i,he,o));const Dt=o=>b(C[o],1,1,()=>{C[o]=null});let _e=O(Array(M)),$=[];for(let o=0;o<_e.length;o+=1)$[o]=mt(st(i,_e,o));const Bt=o=>b($[o],1,1,()=>{$[o]=null});let de=O(Array(M)),D=[];for(let o=0;o<de.length;o+=1)D[o]=gt(it(i,de,o));const Vt=o=>b(D[o],1,1,()=>{D[o]=null});let me=O("QWERTYUIOP"),B=[];for(let o=0;o<me.length;o+=1)B[o]=vt(rt(i,me,o));const Nt=o=>b(B[o],1,1,()=>{B[o]=null});let ge=O("ASDFGHJKL"),V=[];for(let o=0;o<ge.length;o+=1)V[o]=pt(lt(i,ge,o));const St=o=>b(V[o],1,1,()=>{V[o]=null});oe=new tt({props:{letter:"ENTER",onclick:i[5]}});let ve=O("ZXCVBNM"),N=[];for(let o=0;o<ve.length;o+=1)N[o]=kt(nt(i,ve,o));const Tt=o=>b(N[o],1,1,()=>{N[o]=null});return ae=new tt({props:{letter:"BACK",onclick:i[4]}}),{c(){e=w("section"),l=w("div"),l.textContent=s,n=U(),a=w("span"),r=w("a"),r.textContent=f,u=U(),p=w("section"),p.innerHTML=W,ye=U(),L=w("section"),G=w("div");for(let o=0;o<E.length;o+=1)E[o].c();Ee=U(),Q=w("div");for(let o=0;o<A.length;o+=1)A[o].c();ee=U(),H=w("div");for(let o=0;o<I.length;o+=1)I[o].c();Te=U(),z=w("div");for(let o=0;o<C.length;o+=1)C[o].c();Le=U(),x=w("div");for(let o=0;o<$.length;o+=1)$[o].c();m=U(),S=w("div");for(let o=0;o<D.length;o+=1)D[o].c();P=U(),j=w("section"),ie=w("div");for(let o=0;o<B.length;o+=1)B[o].c();Ue=U(),se=w("div");for(let o=0;o<V.length;o+=1)V[o].c();Ke=U(),X=w("div"),pe(oe.$$.fragment),Me=U();for(let o=0;o<N.length;o+=1)N[o].c();Re=U(),pe(ae.$$.fragment),this.h()},l(o){e=y(o,"SECTION",{id:!0,class:!0});var c=T(e);l=y(c,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Se(l)!=="svelte-11pp5i7"&&(l.textContent=s),n=K(c),a=y(c,"SPAN",{class:!0});var t=T(a);r=y(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),Se(r)!=="svelte-1tjfch7"&&(r.textContent=f),t.forEach(_),c.forEach(_),u=K(o),p=y(o,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),Se(p)!=="svelte-wjeacj"&&(p.innerHTML=W),ye=K(o),L=y(o,"SECTION",{id:!0,class:!0});var d=T(L);G=y(d,"DIV",{class:!0,id:!0});var Je=T(G);for(let v=0;v<E.length;v+=1)E[v].l(Je);Je.forEach(_),Ee=K(d),Q=y(d,"DIV",{class:!0,id:!0});var Qe=T(Q);for(let v=0;v<A.length;v+=1)A[v].l(Qe);Qe.forEach(_),ee=K(d),H=y(d,"DIV",{class:!0,id:!0});var Xe=T(H);for(let v=0;v<I.length;v+=1)I[v].l(Xe);Xe.forEach(_),Te=K(d),z=y(d,"DIV",{class:!0,id:!0});var Ye=T(z);for(let v=0;v<C.length;v+=1)C[v].l(Ye);Ye.forEach(_),Le=K(d),x=y(d,"DIV",{class:!0,id:!0});var Ze=T(x);for(let v=0;v<$.length;v+=1)$[v].l(Ze);Ze.forEach(_),m=K(d),S=y(d,"DIV",{class:!0,id:!0});var ze=T(S);for(let v=0;v<D.length;v+=1)D[v].l(ze);ze.forEach(_),d.forEach(_),P=K(o),j=y(o,"SECTION",{id:!0});var Ae=T(j);ie=y(Ae,"DIV",{class:!0});var xe=T(ie);for(let v=0;v<B.length;v+=1)B[v].l(xe);xe.forEach(_),Ue=K(Ae),se=y(Ae,"DIV",{class:!0});var et=T(se);for(let v=0;v<V.length;v+=1)V[v].l(et);et.forEach(_),Ke=K(Ae),X=y(Ae,"DIV",{class:!0});var Ie=T(X);ke(oe.$$.fragment,Ie),Me=K(Ie);for(let v=0;v<N.length;v+=1)N[v].l(Ie);Re=K(Ie),ke(ae.$$.fragment,Ie),Ie.forEach(_),Ae.forEach(_),this.h()},h(){h(l,"id","title"),h(l,"class","svelte-1t5mae3"),h(r,"href","#"),h(r,"class","svelte-1t5mae3"),h(a,"class","reload svelte-1t5mae3"),h(e,"id","navbar"),h(e,"class","svelte-1t5mae3"),h(p,"id","errors"),h(p,"class","svelte-1t5mae3"),h(G,"class","row svelte-1t5mae3"),h(G,"id","row-0"),h(Q,"class","row svelte-1t5mae3"),h(Q,"id","row-1"),h(H,"class","row svelte-1t5mae3"),h(H,"id","row-2"),h(z,"class","row svelte-1t5mae3"),h(z,"id","row-3"),h(x,"class","row svelte-1t5mae3"),h(x,"id","row-4"),h(S,"class","row svelte-1t5mae3"),h(S,"id","row-5"),h(L,"id","playing-grid"),h(L,"class","svelte-1t5mae3"),h(ie,"class","guessed-letters-row svelte-1t5mae3"),h(se,"class","guessed-letters-row svelte-1t5mae3"),h(X,"class","guessed-letters-row svelte-1t5mae3"),h(j,"id","guessed-letters")},m(o,c){R(o,e,c),k(e,l),k(e,n),k(e,a),k(a,r),R(o,u,c),R(o,p,c),R(o,ye,c),R(o,L,c),k(L,G);for(let t=0;t<E.length;t+=1)E[t]&&E[t].m(G,null);k(L,Ee),k(L,Q);for(let t=0;t<A.length;t+=1)A[t]&&A[t].m(Q,null);k(L,ee),k(L,H);for(let t=0;t<I.length;t+=1)I[t]&&I[t].m(H,null);k(L,Te),k(L,z);for(let t=0;t<C.length;t+=1)C[t]&&C[t].m(z,null);k(L,Le),k(L,x);for(let t=0;t<$.length;t+=1)$[t]&&$[t].m(x,null);k(L,m),k(L,S);for(let t=0;t<D.length;t+=1)D[t]&&D[t].m(S,null);R(o,P,c),R(o,j,c),k(j,ie);for(let t=0;t<B.length;t+=1)B[t]&&B[t].m(ie,null);k(j,Ue),k(j,se);for(let t=0;t<V.length;t+=1)V[t]&&V[t].m(se,null);k(j,Ke),k(j,X),be(oe,X,null),k(X,Me);for(let t=0;t<N.length;t+=1)N[t]&&N[t].m(X,null);k(X,Re),be(ae,X,null),je=!0,Ge||(Fe=[Pe(window,"keydown",i[3]),Pe(r,"click",i[7]),Ce(i[2].anim1.animationAction(G)),Ce(i[2].anim2.animationAction(Q)),Ce(i[2].anim3.animationAction(H)),Ce(i[2].anim4.animationAction(z)),Ce(i[2].anim5.animationAction(x)),Ce(i[2].anim6.animationAction(S))],Ge=!0)},p(o,[c]){if(c&1){ce=O(Array(M));let t;for(t=0;t<ce.length;t+=1){const d=ft(o,ce,t);E[t]?(E[t].p(d,c),g(E[t],1)):(E[t]=ut(d),E[t].c(),g(E[t],1),E[t].m(G,null))}for(Y(),t=ce.length;t<E.length;t+=1)It(t);Z()}if(c&1){fe=O(Array(M));let t;for(t=0;t<fe.length;t+=1){const d=ct(o,fe,t);A[t]?(A[t].p(d,c),g(A[t],1)):(A[t]=ht(d),A[t].c(),g(A[t],1),A[t].m(Q,null))}for(Y(),t=fe.length;t<A.length;t+=1)Ct(t);Z()}if(c&1){ue=O(Array(M));let t;for(t=0;t<ue.length;t+=1){const d=at(o,ue,t);I[t]?(I[t].p(d,c),g(I[t],1)):(I[t]=_t(d),I[t].c(),g(I[t],1),I[t].m(H,null))}for(Y(),t=ue.length;t<I.length;t+=1)$t(t);Z()}if(c&1){he=O(Array(M));let t;for(t=0;t<he.length;t+=1){const d=ot(o,he,t);C[t]?(C[t].p(d,c),g(C[t],1)):(C[t]=dt(d),C[t].c(),g(C[t],1),C[t].m(z,null))}for(Y(),t=he.length;t<C.length;t+=1)Dt(t);Z()}if(c&1){_e=O(Array(M));let t;for(t=0;t<_e.length;t+=1){const d=st(o,_e,t);$[t]?($[t].p(d,c),g($[t],1)):($[t]=mt(d),$[t].c(),g($[t],1),$[t].m(x,null))}for(Y(),t=_e.length;t<$.length;t+=1)Bt(t);Z()}if(c&1){de=O(Array(M));let t;for(t=0;t<de.length;t+=1){const d=it(o,de,t);D[t]?(D[t].p(d,c),g(D[t],1)):(D[t]=gt(d),D[t].c(),g(D[t],1),D[t].m(S,null))}for(Y(),t=de.length;t<D.length;t+=1)Vt(t);Z()}if(c&66){me=O("QWERTYUIOP");let t;for(t=0;t<me.length;t+=1){const d=rt(o,me,t);B[t]?(B[t].p(d,c),g(B[t],1)):(B[t]=vt(d),B[t].c(),g(B[t],1),B[t].m(ie,null))}for(Y(),t=me.length;t<B.length;t+=1)Nt(t);Z()}if(c&66){ge=O("ASDFGHJKL");let t;for(t=0;t<ge.length;t+=1){const d=lt(o,ge,t);V[t]?(V[t].p(d,c),g(V[t],1)):(V[t]=pt(d),V[t].c(),g(V[t],1),V[t].m(se,null))}for(Y(),t=ge.length;t<V.length;t+=1)St(t);Z()}if(c&66){ve=O("ZXCVBNM");let t;for(t=0;t<ve.length;t+=1){const d=nt(o,ve,t);N[t]?(N[t].p(d,c),g(N[t],1)):(N[t]=kt(d),N[t].c(),g(N[t],1),N[t].m(X,Re))}for(Y(),t=ve.length;t<N.length;t+=1)Tt(t);Z()}},i(o){if(!je){for(let c=0;c<ce.length;c+=1)g(E[c]);for(let c=0;c<fe.length;c+=1)g(A[c]);for(let c=0;c<ue.length;c+=1)g(I[c]);for(let c=0;c<he.length;c+=1)g(C[c]);for(let c=0;c<_e.length;c+=1)g($[c]);for(let c=0;c<de.length;c+=1)g(D[c]);for(let c=0;c<me.length;c+=1)g(B[c]);for(let c=0;c<ge.length;c+=1)g(V[c]);g(oe.$$.fragment,o);for(let c=0;c<ve.length;c+=1)g(N[c]);g(ae.$$.fragment,o),je=!0}},o(o){E=E.filter(Boolean);for(let c=0;c<E.length;c+=1)b(E[c]);A=A.filter(Boolean);for(let c=0;c<A.length;c+=1)b(A[c]);I=I.filter(Boolean);for(let c=0;c<I.length;c+=1)b(I[c]);C=C.filter(Boolean);for(let c=0;c<C.length;c+=1)b(C[c]);$=$.filter(Boolean);for(let c=0;c<$.length;c+=1)b($[c]);D=D.filter(Boolean);for(let c=0;c<D.length;c+=1)b(D[c]);B=B.filter(Boolean);for(let c=0;c<B.length;c+=1)b(B[c]);V=V.filter(Boolean);for(let c=0;c<V.length;c+=1)b(V[c]);b(oe.$$.fragment,o),N=N.filter(Boolean);for(let c=0;c<N.length;c+=1)b(N[c]);b(ae.$$.fragment,o),je=!1},d(o){o&&(_(e),_(u),_(p),_(ye),_(L),_(P),_(j)),te(E,o),te(A,o),te(I,o),te(C,o),te($,o),te(D,o),te(B,o),te(V,o),we(oe),te(N,o),we(ae),Ge=!1,Rt(Fe)}}}const bt=6,M=5;function tn(i){return i.toLowerCase()!=i.toUpperCase()&&i.length===1}function He(i,e){for(var l={},s=document.getElementById(i).getElementsByTagName("*"),n=0;n<s.length;n++)if(s[n].id===e){l=s[n];break}return l}function nn(i,e,l){const s={anim1:$e(),anim2:$e(),anim3:$e(),anim4:$e(),anim5:$e(),anim6:$e()};let n="",a=!0;jt(async()=>{let m={};for(;!m.ok;)n=await(await fetch("https://random-word-api.herokuapp.com/word?length=5")).json(),n=n[0].toUpperCase(),m=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${n}`);a=!1});let r=0,f=0;const u=[];for(let m=0;m<bt;m++){const S=[];for(let P=0;P<M;P++)S.push("");u.push(S)}const p={A:"trans-back",B:"trans-back",C:"trans-back",D:"trans-back",E:"trans-back",F:"trans-back",G:"trans-back",H:"trans-back",I:"trans-back",J:"trans-back",K:"trans-back",L:"trans-back",M:"trans-back",N:"trans-back",O:"trans-back",P:"trans-back",Q:"trans-back",R:"trans-back",S:"trans-back",T:"trans-back",U:"trans-back",V:"trans-back",W:"trans-back",X:"trans-back",Y:"trans-back",Z:"trans-back"};let W=!1;async function ye(){return u[r].includes("")?(s[`anim${r+1}`].triggerAnimation("shake"),new Et({target:document.getElementById("errors-container")}),!1):(await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${u[r].join("")}`)).ok?!0:(new At({target:document.getElementById("errors-container")}),!1)}function L(m){W||(m.code==="Enter"?a||Ee():m.code==="Backspace"?G():tn(m.key)&&ee(m.code[m.code.length-1].toUpperCase()))}function G(){if(f<1)return;f-=1;const m=He(`row-${r}`,`item-${f}`);m.textContent="",l(0,u[r][f]="",u)}async function Ee(){if(!W){if(await ye()){for(let m=0;m<5;m++){const S=He(`row-${r}`,`item-${m}`),P=n[m],j=u[r][m];P===j?(S.classList.add("right-place"),l(1,p[j]="right-place",p)):n.includes(j)?(Q(m)?S.classList.add("wrong-place"):S.classList.add("wrong-letter"),p[j]!="right-place"&&l(1,p[j]="wrong-place",p)):(S.classList.add("wrong-letter"),l(1,p[j]="wrong-letter",p))}u[r].join("")==n&&H(),r+=1,f=0}r==bt&&H()}}function Q(m){let S=n.split(u[r][m]).length-1;for(let P=0;P<m;P++)if(u[r][P]==u[r][m]&&(S-=1),S<=0)return!1;return!0}function ee(m){if(f>4||W)return;const S=He(`row-${r}`,`item-${f}`);S.textContent=m,l(0,u[r][f]=m,u),f+=1}function H(){W||(W=!0,new qt({target:document.getElementById("errors-container"),props:{answer:n}}))}return[u,p,s,L,G,Ee,ee,()=>location.reload(),m=>ee(m),m=>ee(m),m=>ee(m)]}class sn extends Ve{constructor(e){super(),Ne(this,e,nn,en,De,{})}}export{sn as component};