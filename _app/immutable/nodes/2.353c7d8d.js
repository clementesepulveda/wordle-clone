import{i as ze,s as le,b as Oe,n as V,f as fe,h as We,r as Fe,o as Je,j as Qe}from"../chunks/scheduler.9498ad7e.js";import{S as se,i as oe,e as ue,a as $,p as Q,t as w,b as X,d as g,f as d,g as E,h as C,y as ae,k as m,r as Y,u as Z,v as q,w as x,m as me,j as D,n as de,x as I,z as _e,o as ge,s as U,c as K,A as ie,B as Ce}from"../chunks/index.513b8a3e.js";function W(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function je(r,{delay:e=0,duration:t=400,easing:l=ze}={}){const n=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:l,css:s=>`opacity: ${s*n}`}}function Xe(r){let e,t="Not enough letters";return{c(){e=E("div"),e.textContent=t,this.h()},l(l){e=C(l,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1viatja"&&(e.textContent=t),this.h()},h(){m(e,"class","error svelte-mzlahg")},m(l,n){$(l,e,n)},p:V,i:V,o:V,d(l){l&&d(e)}}}function Ye(r){let e,t,l={getSelfRef:!1};return e=new Ue({props:l}),r[3](e),{c(){Y(e.$$.fragment)},l(n){Z(e.$$.fragment,n)},m(n,s){q(e,n,s),t=!0},p(n,s){const o={};e.$set(o)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){r[3](null),x(e,n)}}}function Ze(r){let e,t,l,n;const s=[Ye,Xe],o=[];function a(f,u){return f[0]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),l=ue()},l(f){t.l(f),l=ue()},m(f,u){o[e].m(f,u),$(f,l,u),n=!0},p(f,[u]){let S=e;e=a(f),e===S?o[e].p(f,u):(Q(),w(o[S],1,1,()=>{o[S]=null}),X(),t=o[e],t?t.p(f,u):(t=o[e]=s[e](f),t.c()),g(t,1),t.m(l.parentNode,l))},i(f){n||(g(t),n=!0)},o(f){w(t),n=!1},d(f){f&&d(l),o[e].d(f)}}}function qe(r,e,t){let{time:l=1500}=e,{getSelfRef:n=!0}=e,s;function o(a){Oe[a?"unshift":"push"](()=>{s=a,t(1,s)})}return r.$$set=a=>{"time"in a&&t(2,l=a.time),"getSelfRef"in a&&t(0,n=a.getSelfRef)},r.$$.update=()=>{r.$$.dirty&6&&s&&setTimeout(()=>{s.$destroy()},l)},[n,s,l,o]}class Ue extends se{constructor(e){super(),oe(this,e,qe,Ze,le,{time:2,getSelfRef:0})}}function xe(r){let e,t,l,n,s;return{c(){e=E("button"),t=me(r[0]),this.h()},l(o){e=C(o,"BUTTON",{id:!0,class:!0});var a=D(e);t=de(a,r[0]),a.forEach(d),this.h()},h(){m(e,"id","container"),m(e,"class",l=fe(r[1])+" svelte-197jx9t")},m(o,a){$(o,e,a),I(e,t),n||(s=_e(e,"click",function(){We(r[2])&&r[2].apply(this,arguments)}),n=!0)},p(o,[a]){r=o,a&1&&ge(t,r[0]),a&2&&l!==(l=fe(r[1])+" svelte-197jx9t")&&m(e,"class",l)},i:V,o:V,d(o){o&&d(e),n=!1,s()}}}function et(r,e,t){let{letter:l}=e,{state:n="trans-back"}=e,{onclick:s}=e;return r.$$set=o=>{"letter"in o&&t(0,l=o.letter),"state"in o&&t(1,n=o.state),"onclick"in o&&t(2,s=o.onclick)},[l,n,s]}class be extends se{constructor(e){super(),oe(this,e,et,xe,le,{letter:0,state:1,onclick:2})}}function tt(r){let e,t;return{c(){e=E("div"),t=me(r[0]),this.h()},l(l){e=C(l,"DIV",{class:!0});var n=D(e);t=de(n,r[0]),n.forEach(d),this.h()},h(){m(e,"class","error svelte-mzlahg")},m(l,n){$(l,e,n),I(e,t)},p(l,[n]){n&1&&ge(t,l[0])},i:V,o:V,d(l){l&&d(e)}}}function nt(r,e,t){let{answer:l}=e;return r.$$set=n=>{"answer"in n&&t(0,l=n.answer)},[l]}class rt extends se{constructor(e){super(),oe(this,e,nt,tt,le,{answer:0})}}function lt(r){let e,t="Not in word list";return{c(){e=E("div"),e.textContent=t,this.h()},l(l){e=C(l,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-14y5hfg"&&(e.textContent=t),this.h()},h(){m(e,"class","error svelte-mzlahg")},m(l,n){$(l,e,n)},p:V,i:V,o:V,d(l){l&&d(e)}}}function st(r){let e,t,l={getSelfRef:!1};return e=new Ke({props:l}),r[3](e),{c(){Y(e.$$.fragment)},l(n){Z(e.$$.fragment,n)},m(n,s){q(e,n,s),t=!0},p(n,s){const o={};e.$set(o)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){r[3](null),x(e,n)}}}function ot(r){let e,t,l,n;const s=[st,lt],o=[];function a(f,u){return f[0]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),l=ue()},l(f){t.l(f),l=ue()},m(f,u){o[e].m(f,u),$(f,l,u),n=!0},p(f,[u]){let S=e;e=a(f),e===S?o[e].p(f,u):(Q(),w(o[S],1,1,()=>{o[S]=null}),X(),t=o[e],t?t.p(f,u):(t=o[e]=s[e](f),t.c()),g(t,1),t.m(l.parentNode,l))},i(f){n||(g(t),n=!0)},o(f){w(t),n=!1},d(f){f&&d(l),o[e].d(f)}}}function it(r,e,t){let{time:l=1500}=e,{getSelfRef:n=!0}=e,s;function o(a){Oe[a?"unshift":"push"](()=>{s=a,t(1,s)})}return r.$$set=a=>{"time"in a&&t(2,l=a.time),"getSelfRef"in a&&t(0,n=a.getSelfRef)},r.$$.update=()=>{r.$$.dirty&6&&s&&setTimeout(()=>{s.$destroy()},l)},[n,s,l,o]}class Ke extends se{constructor(e){super(),oe(this,e,it,ot,le,{time:2,getSelfRef:0})}}function at(r){let e,t,l,n,s;return{c(){e=E("button"),t=me(r[0]),this.h()},l(o){e=C(o,"BUTTON",{id:!0,class:!0});var a=D(e);t=de(a,r[0]),a.forEach(d),this.h()},h(){m(e,"id","container"),m(e,"class",l=fe(r[1])+" svelte-mwmmbi")},m(o,a){$(o,e,a),I(e,t),n||(s=_e(e,"click",function(){We(r[2])&&r[2].apply(this,arguments)}),n=!0)},p(o,[a]){r=o,a&1&&ge(t,r[0]),a&2&&l!==(l=fe(r[1])+" svelte-mwmmbi")&&m(e,"class",l)},i:V,o:V,d(o){o&&d(e),n=!1,s()}}}function ct(r,e,t){let{letter:l}=e,{state:n="trans-back"}=e,{onclick:s}=e;return r.$$set=o=>{"letter"in o&&t(0,l=o.letter),"state"in o&&t(1,n=o.state),"onclick"in o&&t(2,s=o.onclick)},[l,n,s]}class Ie extends se{constructor(e){super(),oe(this,e,ct,at,le,{letter:0,state:1,onclick:2})}}function $e(r,e,t){const l=r.slice();return l[18]=e[t],l[20]=t,l}function Se(r,e,t){const l=r.slice();return l[18]=e[t],l[20]=t,l}function Ne(r,e,t){const l=r.slice();return l[18]=e[t],l[20]=t,l}function Be(r,e,t){const l=r.slice();return l[23]=e[t],l[25]=t,l}function Re(r,e,t){const l=r.slice();return l[23]=e[t],l[20]=t,l}function Te(r){let e,t=r[0][r[25]][r[20]]+"",l,n,s;return{c(){e=E("div"),l=me(t),this.h()},l(o){e=C(o,"DIV",{class:!0,id:!0});var a=D(e);l=de(a,t),a.forEach(d),this.h()},h(){m(e,"class","item svelte-jm3mym"),m(e,"id","item-"+r[20])},m(o,a){$(o,e,a),I(e,l),s=!0},p(o,a){(!s||a&1)&&t!==(t=o[0][o[25]][o[20]]+"")&&ge(l,t)},i(o){s||(o&&Qe(()=>{s&&(n||(n=Ce(e,je,{delay:250,duration:300},!0)),n.run(1))}),s=!0)},o(o){o&&(n||(n=Ce(e,je,{delay:250,duration:300},!1)),n.run(0)),s=!1},d(o){o&&d(e),o&&n&&n.end()}}}function Le(r){let e,t,l,n=W(Array(ke)),s=[];for(let a=0;a<n.length;a+=1)s[a]=Te(Re(r,n,a));const o=a=>w(s[a],1,1,()=>{s[a]=null});return{c(){e=E("div");for(let a=0;a<s.length;a+=1)s[a].c();t=U(),this.h()},l(a){e=C(a,"DIV",{class:!0,id:!0});var f=D(e);for(let u=0;u<s.length;u+=1)s[u].l(f);t=K(f),f.forEach(d),this.h()},h(){m(e,"class","row svelte-jm3mym"),m(e,"id","row-"+r[25])},m(a,f){$(a,e,f);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);I(e,t),l=!0},p(a,f){if(f&1){n=W(Array(ke));let u;for(u=0;u<n.length;u+=1){const S=Re(a,n,u);s[u]?(s[u].p(S,f),g(s[u],1)):(s[u]=Te(S),s[u].c(),g(s[u],1),s[u].m(e,t))}for(Q(),u=n.length;u<s.length;u+=1)o(u);X()}},i(a){if(!l){for(let f=0;f<n.length;f+=1)g(s[f]);l=!0}},o(a){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)w(s[f]);l=!1},d(a){a&&d(e),ie(s,a)}}}function Ae(r){let e,t;function l(){return r[7](r[18])}return e=new be({props:{letter:r[18],state:r[1][r[18]],onclick:l}}),{c(){Y(e.$$.fragment)},l(n){Z(e.$$.fragment,n)},m(n,s){q(e,n,s),t=!0},p(n,s){r=n;const o={};s&2&&(o.state=r[1][r[18]]),e.$set(o)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){x(e,n)}}}function De(r){let e,t;function l(){return r[8](r[18])}return e=new be({props:{letter:r[18],state:r[1][r[18]],onclick:l}}),{c(){Y(e.$$.fragment)},l(n){Z(e.$$.fragment,n)},m(n,s){q(e,n,s),t=!0},p(n,s){r=n;const o={};s&2&&(o.state=r[1][r[18]]),e.$set(o)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){x(e,n)}}}function Ve(r){let e,t;function l(){return r[9](r[18])}return e=new be({props:{letter:r[18],state:r[1][r[18]],onclick:l}}),{c(){Y(e.$$.fragment)},l(n){Z(e.$$.fragment,n)},m(n,s){q(e,n,s),t=!0},p(n,s){r=n;const o={};s&2&&(o.state=r[1][r[18]]),e.$set(o)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){x(e,n)}}}function ft(r){let e,t,l="Wordle",n,s,o,a="↻",f,u,S='<div id="errors-container" class="svelte-jm3mym"></div>',ee,L,H,R,T,te,M,ce,A,G,h,y,j,O,pe,we,P=W(Array(he)),p=[];for(let c=0;c<P.length;c+=1)p[c]=Le(Be(r,P,c));const Me=c=>w(p[c],1,1,()=>{p[c]=null});let z=W("QWERTYUIOP"),v=[];for(let c=0;c<z.length;c+=1)v[c]=Ae(Ne(r,z,c));const Ge=c=>w(v[c],1,1,()=>{v[c]=null});let F=W("ASDFGHJKL"),k=[];for(let c=0;c<F.length;c+=1)k[c]=De(Se(r,F,c));const He=c=>w(k[c],1,1,()=>{k[c]=null});G=new Ie({props:{letter:"ENTER",onclick:r[4]}});let J=W("ZXCVBNM"),b=[];for(let c=0;c<J.length;c+=1)b[c]=Ve($e(r,J,c));const Pe=c=>w(b[c],1,1,()=>{b[c]=null});return j=new Ie({props:{letter:"BACK",onclick:r[3]}}),{c(){e=E("section"),t=E("div"),t.textContent=l,n=U(),s=E("span"),o=E("a"),o.textContent=a,f=U(),u=E("section"),u.innerHTML=S,ee=U(),L=E("section");for(let c=0;c<p.length;c+=1)p[c].c();H=U(),R=E("section"),T=E("div");for(let c=0;c<v.length;c+=1)v[c].c();te=U(),M=E("div");for(let c=0;c<k.length;c+=1)k[c].c();ce=U(),A=E("div"),Y(G.$$.fragment),h=U();for(let c=0;c<b.length;c+=1)b[c].c();y=U(),Y(j.$$.fragment),this.h()},l(c){e=C(c,"SECTION",{id:!0,class:!0});var _=D(e);t=C(_,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ae(t)!=="svelte-11pp5i7"&&(t.textContent=l),n=K(_),s=C(_,"SPAN",{class:!0});var i=D(s);o=C(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),ae(o)!=="svelte-1tjfch7"&&(o.textContent=a),i.forEach(d),_.forEach(d),f=K(c),u=C(c,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),ae(u)!=="svelte-wjeacj"&&(u.innerHTML=S),ee=K(c),L=C(c,"SECTION",{id:!0,class:!0});var B=D(L);for(let N=0;N<p.length;N+=1)p[N].l(B);B.forEach(d),H=K(c),R=C(c,"SECTION",{id:!0});var ne=D(R);T=C(ne,"DIV",{class:!0});var ye=D(T);for(let N=0;N<v.length;N+=1)v[N].l(ye);ye.forEach(d),te=K(ne),M=C(ne,"DIV",{class:!0});var Ee=D(M);for(let N=0;N<k.length;N+=1)k[N].l(Ee);Ee.forEach(d),ce=K(ne),A=C(ne,"DIV",{class:!0});var re=D(A);Z(G.$$.fragment,re),h=K(re);for(let N=0;N<b.length;N+=1)b[N].l(re);y=K(re),Z(j.$$.fragment,re),re.forEach(d),ne.forEach(d),this.h()},h(){m(t,"id","title"),m(t,"class","svelte-jm3mym"),m(o,"href","#"),m(o,"class","svelte-jm3mym"),m(s,"class","reload svelte-jm3mym"),m(e,"id","navbar"),m(e,"class","svelte-jm3mym"),m(u,"id","errors"),m(u,"class","svelte-jm3mym"),m(L,"id","playing-grid"),m(L,"class","svelte-jm3mym"),m(T,"class","guessed-letters-row svelte-jm3mym"),m(M,"class","guessed-letters-row svelte-jm3mym"),m(A,"class","guessed-letters-row svelte-jm3mym"),m(R,"id","guessed-letters")},m(c,_){$(c,e,_),I(e,t),I(e,n),I(e,s),I(s,o),$(c,f,_),$(c,u,_),$(c,ee,_),$(c,L,_);for(let i=0;i<p.length;i+=1)p[i]&&p[i].m(L,null);$(c,H,_),$(c,R,_),I(R,T);for(let i=0;i<v.length;i+=1)v[i]&&v[i].m(T,null);I(R,te),I(R,M);for(let i=0;i<k.length;i+=1)k[i]&&k[i].m(M,null);I(R,ce),I(R,A),q(G,A,null),I(A,h);for(let i=0;i<b.length;i+=1)b[i]&&b[i].m(A,null);I(A,y),q(j,A,null),O=!0,pe||(we=[_e(window,"keydown",r[2]),_e(o,"click",r[6])],pe=!0)},p(c,[_]){if(_&1){P=W(Array(he));let i;for(i=0;i<P.length;i+=1){const B=Be(c,P,i);p[i]?(p[i].p(B,_),g(p[i],1)):(p[i]=Le(B),p[i].c(),g(p[i],1),p[i].m(L,null))}for(Q(),i=P.length;i<p.length;i+=1)Me(i);X()}if(_&34){z=W("QWERTYUIOP");let i;for(i=0;i<z.length;i+=1){const B=Ne(c,z,i);v[i]?(v[i].p(B,_),g(v[i],1)):(v[i]=Ae(B),v[i].c(),g(v[i],1),v[i].m(T,null))}for(Q(),i=z.length;i<v.length;i+=1)Ge(i);X()}if(_&34){F=W("ASDFGHJKL");let i;for(i=0;i<F.length;i+=1){const B=Se(c,F,i);k[i]?(k[i].p(B,_),g(k[i],1)):(k[i]=De(B),k[i].c(),g(k[i],1),k[i].m(M,null))}for(Q(),i=F.length;i<k.length;i+=1)He(i);X()}if(_&34){J=W("ZXCVBNM");let i;for(i=0;i<J.length;i+=1){const B=$e(c,J,i);b[i]?(b[i].p(B,_),g(b[i],1)):(b[i]=Ve(B),b[i].c(),g(b[i],1),b[i].m(A,y))}for(Q(),i=J.length;i<b.length;i+=1)Pe(i);X()}},i(c){if(!O){for(let _=0;_<P.length;_+=1)g(p[_]);for(let _=0;_<z.length;_+=1)g(v[_]);for(let _=0;_<F.length;_+=1)g(k[_]);g(G.$$.fragment,c);for(let _=0;_<J.length;_+=1)g(b[_]);g(j.$$.fragment,c),O=!0}},o(c){p=p.filter(Boolean);for(let _=0;_<p.length;_+=1)w(p[_]);v=v.filter(Boolean);for(let _=0;_<v.length;_+=1)w(v[_]);k=k.filter(Boolean);for(let _=0;_<k.length;_+=1)w(k[_]);w(G.$$.fragment,c),b=b.filter(Boolean);for(let _=0;_<b.length;_+=1)w(b[_]);w(j.$$.fragment,c),O=!1},d(c){c&&(d(e),d(f),d(u),d(ee),d(L),d(H),d(R)),ie(p,c),ie(v,c),ie(k,c),x(G),ie(b,c),x(j),pe=!1,Fe(we)}}}const he=6,ke=5;function ut(r){return r.toLowerCase()!=r.toUpperCase()&&r.length===1}function ve(r,e){for(var t={},l=document.getElementById(r).getElementsByTagName("*"),n=0;n<l.length;n++)if(l[n].id===e){t=l[n];break}return t}function _t(r,e,t){let l="",n=!0;Je(async()=>{let h={};for(;!h.ok;)l=await(await fetch("https://random-word-api.herokuapp.com/word?length=5")).json(),l=l[0].toUpperCase(),h=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${l}`);n=!1});let s=0,o=0;const a=[];for(let h=0;h<he;h++){const y=[];for(let j=0;j<ke;j++)y.push("");a.push(y)}const f={A:"trans-back",B:"trans-back",C:"trans-back",D:"trans-back",E:"trans-back",F:"trans-back",G:"trans-back",H:"trans-back",I:"trans-back",J:"trans-back",K:"trans-back",L:"trans-back",M:"trans-back",N:"trans-back",O:"trans-back",P:"trans-back",Q:"trans-back",R:"trans-back",S:"trans-back",T:"trans-back",U:"trans-back",V:"trans-back",W:"trans-back",X:"trans-back",Y:"trans-back",Z:"trans-back"};let u=!1;async function S(){return a[s].includes("")?(new Ue({target:document.getElementById("errors-container")}),!1):(await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${a[s].join("")}`)).ok?!0:(new Ke({target:document.getElementById("errors-container")}),!1)}function ee(h){u||(h.code==="Enter"?n||H():h.code==="Backspace"?L():ut(h.key)&&T(h.code[h.code.length-1].toUpperCase()))}function L(){if(o<1)return;o-=1;const h=ve(`row-${s}`,`item-${o}`);h.textContent="",t(0,a[s][o]="",a)}async function H(){if(!u){if(await S()){for(let h=0;h<5;h++){const y=ve(`row-${s}`,`item-${h}`),j=l[h],O=a[s][h];j===O?(y.classList.add("right-place"),t(1,f[O]="right-place",f)):l.includes(O)?(R(h)?y.classList.add("wrong-place"):y.classList.add("wrong-letter"),f[O]!="right-place"&&t(1,f[O]="wrong-place",f)):(y.classList.add("wrong-letter"),t(1,f[O]="wrong-letter",f))}a[s].join("")==l&&te(),s+=1,o=0}s==he&&te()}}function R(h){let y=l.split(a[s][h]).length-1;for(let j=0;j<h;j++)if(a[s][j]==a[s][h]&&(y-=1),y<=0)return!1;return!0}function T(h){if(o>4||u)return;const y=ve(`row-${s}`,`item-${o}`);y.textContent=h,t(0,a[s][o]=h,a),o+=1}function te(){u||(u=!0,new rt({target:document.getElementById("errors-container"),props:{answer:l}}))}return[a,f,ee,L,H,T,()=>location.reload(),h=>T(h),h=>T(h),h=>T(h)]}class dt extends se{constructor(e){super(),oe(this,e,_t,ft,le,{})}}export{dt as component};
