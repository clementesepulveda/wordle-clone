import{i as He,s as ie,b as Ve,n as U,f as $e,h as Pe,r as ze,o as qe,j as Fe}from"../chunks/scheduler.9498ad7e.js";import{S as ae,i as ce,e as ue,a as N,p as J,t as w,b as Q,d,f as m,g as E,h as C,y as se,k as g,r as X,u as Y,v as Z,w as x,m as pe,j as V,n as ve,x as S,z as me,o as ke,s as W,c as K,A as le,B as Ee}from"../chunks/index.513b8a3e.js";function O(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Ce(l,{delay:e=0,duration:t=400,easing:r=He}={}){const n=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*n}`}}function Je(l){let e,t="Not enough letters";return{c(){e=E("div"),e.textContent=t,this.h()},l(r){e=C(r,"DIV",{class:!0,"data-svelte-h":!0}),se(e)!=="svelte-1viatja"&&(e.textContent=t),this.h()},h(){g(e,"class","error svelte-mzlahg")},m(r,n){N(r,e,n)},p:U,i:U,o:U,d(r){r&&m(e)}}}function Qe(l){let e,t,r={getSelfRef:!1};return e=new Oe({props:r}),l[3](e),{c(){X(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,s){Z(e,n,s),t=!0},p(n,s){const o={};e.$set(o)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){l[3](null),x(e,n)}}}function Xe(l){let e,t,r,n;const s=[Qe,Je],o=[];function c(f,u){return f[0]?0:1}return e=c(l),t=o[e]=s[e](l),{c(){t.c(),r=ue()},l(f){t.l(f),r=ue()},m(f,u){o[e].m(f,u),N(f,r,u),n=!0},p(f,[u]){let j=e;e=c(f),e===j?o[e].p(f,u):(J(),w(o[j],1,1,()=>{o[j]=null}),Q(),t=o[e],t?t.p(f,u):(t=o[e]=s[e](f),t.c()),d(t,1),t.m(r.parentNode,r))},i(f){n||(d(t),n=!0)},o(f){w(t),n=!1},d(f){f&&m(r),o[e].d(f)}}}function Ye(l,e,t){let{time:r=1500}=e,{getSelfRef:n=!0}=e,s;function o(c){Ve[c?"unshift":"push"](()=>{s=c,t(1,s)})}return l.$$set=c=>{"time"in c&&t(2,r=c.time),"getSelfRef"in c&&t(0,n=c.getSelfRef)},l.$$.update=()=>{l.$$.dirty&6&&s&&setTimeout(()=>{s.$destroy()},r)},[n,s,r,o]}class Oe extends ae{constructor(e){super(),ce(this,e,Ye,Xe,ie,{time:2,getSelfRef:0})}}function Ze(l){let e,t,r,n,s;return{c(){e=E("button"),t=pe(l[0]),this.h()},l(o){e=C(o,"BUTTON",{id:!0,class:!0});var c=V(e);t=ve(c,l[0]),c.forEach(m),this.h()},h(){g(e,"id","container"),g(e,"class",r=$e(l[1])+" svelte-1up36qu")},m(o,c){N(o,e,c),S(e,t),n||(s=me(e,"click",function(){Pe(l[2])&&l[2].apply(this,arguments)}),n=!0)},p(o,[c]){l=o,c&1&&ke(t,l[0]),c&2&&r!==(r=$e(l[1])+" svelte-1up36qu")&&g(e,"class",r)},i:U,o:U,d(o){o&&m(e),n=!1,s()}}}function xe(l,e,t){let{letter:r}=e,{state:n="trans-back"}=e,{onclick:s}=e;return l.$$set=o=>{"letter"in o&&t(0,r=o.letter),"state"in o&&t(1,n=o.state),"onclick"in o&&t(2,s=o.onclick)},[r,n,s]}class oe extends ae{constructor(e){super(),ce(this,e,xe,Ze,ie,{letter:0,state:1,onclick:2})}}function et(l){let e,t;return{c(){e=E("div"),t=pe(l[0]),this.h()},l(r){e=C(r,"DIV",{class:!0});var n=V(e);t=ve(n,l[0]),n.forEach(m),this.h()},h(){g(e,"class","error svelte-mzlahg")},m(r,n){N(r,e,n),S(e,t)},p(r,[n]){n&1&&ke(t,r[0])},i:U,o:U,d(r){r&&m(e)}}}function tt(l,e,t){let{answer:r}=e;return l.$$set=n=>{"answer"in n&&t(0,r=n.answer)},[r]}class nt extends ae{constructor(e){super(),ce(this,e,tt,et,ie,{answer:0})}}function rt(l){let e,t="Not in word list";return{c(){e=E("div"),e.textContent=t,this.h()},l(r){e=C(r,"DIV",{class:!0,"data-svelte-h":!0}),se(e)!=="svelte-14y5hfg"&&(e.textContent=t),this.h()},h(){g(e,"class","error svelte-mzlahg")},m(r,n){N(r,e,n)},p:U,i:U,o:U,d(r){r&&m(e)}}}function lt(l){let e,t,r={getSelfRef:!1};return e=new Ue({props:r}),l[3](e),{c(){X(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,s){Z(e,n,s),t=!0},p(n,s){const o={};e.$set(o)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){l[3](null),x(e,n)}}}function st(l){let e,t,r,n;const s=[lt,rt],o=[];function c(f,u){return f[0]?0:1}return e=c(l),t=o[e]=s[e](l),{c(){t.c(),r=ue()},l(f){t.l(f),r=ue()},m(f,u){o[e].m(f,u),N(f,r,u),n=!0},p(f,[u]){let j=e;e=c(f),e===j?o[e].p(f,u):(J(),w(o[j],1,1,()=>{o[j]=null}),Q(),t=o[e],t?t.p(f,u):(t=o[e]=s[e](f),t.c()),d(t,1),t.m(r.parentNode,r))},i(f){n||(d(t),n=!0)},o(f){w(t),n=!1},d(f){f&&m(r),o[e].d(f)}}}function ot(l,e,t){let{time:r=1500}=e,{getSelfRef:n=!0}=e,s;function o(c){Ve[c?"unshift":"push"](()=>{s=c,t(1,s)})}return l.$$set=c=>{"time"in c&&t(2,r=c.time),"getSelfRef"in c&&t(0,n=c.getSelfRef)},l.$$.update=()=>{l.$$.dirty&6&&s&&setTimeout(()=>{s.$destroy()},r)},[n,s,r,o]}class Ue extends ae{constructor(e){super(),ce(this,e,ot,st,ie,{time:2,getSelfRef:0})}}function je(l,e,t){const r=l.slice();return r[18]=e[t],r[20]=t,r}function Ie(l,e,t){const r=l.slice();return r[18]=e[t],r[20]=t,r}function Se(l,e,t){const r=l.slice();return r[18]=e[t],r[20]=t,r}function Ne(l,e,t){const r=l.slice();return r[23]=e[t],r[25]=t,r}function Be(l,e,t){const r=l.slice();return r[23]=e[t],r[20]=t,r}function Re(l){let e,t=l[0][l[25]][l[20]]+"",r,n,s;return{c(){e=E("div"),r=pe(t),this.h()},l(o){e=C(o,"DIV",{class:!0,id:!0});var c=V(e);r=ve(c,t),c.forEach(m),this.h()},h(){g(e,"class","item svelte-jm3mym"),g(e,"id","item-"+l[20])},m(o,c){N(o,e,c),S(e,r),s=!0},p(o,c){(!s||c&1)&&t!==(t=o[0][o[25]][o[20]]+"")&&ke(r,t)},i(o){s||(o&&Fe(()=>{s&&(n||(n=Ee(e,Ce,{delay:250,duration:300},!0)),n.run(1))}),s=!0)},o(o){o&&(n||(n=Ee(e,Ce,{delay:250,duration:300},!1)),n.run(0)),s=!1},d(o){o&&m(e),o&&n&&n.end()}}}function Le(l){let e,t,r,n=O(Array(ge)),s=[];for(let c=0;c<n.length;c+=1)s[c]=Re(Be(l,n,c));const o=c=>w(s[c],1,1,()=>{s[c]=null});return{c(){e=E("div");for(let c=0;c<s.length;c+=1)s[c].c();t=W(),this.h()},l(c){e=C(c,"DIV",{class:!0,id:!0});var f=V(e);for(let u=0;u<s.length;u+=1)s[u].l(f);t=K(f),f.forEach(m),this.h()},h(){g(e,"class","row svelte-jm3mym"),g(e,"id","row-"+l[25])},m(c,f){N(c,e,f);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);S(e,t),r=!0},p(c,f){if(f&1){n=O(Array(ge));let u;for(u=0;u<n.length;u+=1){const j=Be(c,n,u);s[u]?(s[u].p(j,f),d(s[u],1)):(s[u]=Re(j),s[u].c(),d(s[u],1),s[u].m(e,t))}for(J(),u=n.length;u<s.length;u+=1)o(u);Q()}},i(c){if(!r){for(let f=0;f<n.length;f+=1)d(s[f]);r=!0}},o(c){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)w(s[f]);r=!1},d(c){c&&m(e),le(s,c)}}}function Te(l){let e,t;function r(){return l[7](l[18])}return e=new oe({props:{letter:l[18],state:l[1][l[18]],onclick:r}}),{c(){X(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,s){Z(e,n,s),t=!0},p(n,s){l=n;const o={};s&2&&(o.state=l[1][l[18]]),e.$set(o)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){x(e,n)}}}function Ae(l){let e,t;function r(){return l[8](l[18])}return e=new oe({props:{letter:l[18],state:l[1][l[18]],onclick:r}}),{c(){X(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,s){Z(e,n,s),t=!0},p(n,s){l=n;const o={};s&2&&(o.state=l[1][l[18]]),e.$set(o)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){x(e,n)}}}function De(l){let e,t;function r(){return l[9](l[18])}return e=new oe({props:{letter:l[18],state:l[1][l[18]],onclick:r}}),{c(){X(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,s){Z(e,n,s),t=!0},p(n,s){l=n;const o={};s&2&&(o.state=l[1][l[18]]),e.$set(o)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){x(e,n)}}}function it(l){let e,t,r="Wordle",n,s,o,c="↻",f,u,j='<div id="errors-container" class="svelte-jm3mym"></div>',ee,T,H,R,L,te,M,fe,A,G,h,y,$,D,he,be,P=O(Array(_e)),p=[];for(let a=0;a<P.length;a+=1)p[a]=Le(Ne(l,P,a));const We=a=>w(p[a],1,1,()=>{p[a]=null});let z=O("QWERTYUIOP"),v=[];for(let a=0;a<z.length;a+=1)v[a]=Te(Se(l,z,a));const Ke=a=>w(v[a],1,1,()=>{v[a]=null});let q=O("ASDFGHJKL"),k=[];for(let a=0;a<q.length;a+=1)k[a]=Ae(Ie(l,q,a));const Me=a=>w(k[a],1,1,()=>{k[a]=null});G=new oe({props:{letter:"ENTER",onclick:l[4]}});let F=O("ZXCVBNM"),b=[];for(let a=0;a<F.length;a+=1)b[a]=De(je(l,F,a));const Ge=a=>w(b[a],1,1,()=>{b[a]=null});return $=new oe({props:{letter:"BACK",onclick:l[3]}}),{c(){e=E("section"),t=E("div"),t.textContent=r,n=W(),s=E("span"),o=E("a"),o.textContent=c,f=W(),u=E("section"),u.innerHTML=j,ee=W(),T=E("section");for(let a=0;a<p.length;a+=1)p[a].c();H=W(),R=E("section"),L=E("div");for(let a=0;a<v.length;a+=1)v[a].c();te=W(),M=E("div");for(let a=0;a<k.length;a+=1)k[a].c();fe=W(),A=E("div"),X(G.$$.fragment),h=W();for(let a=0;a<b.length;a+=1)b[a].c();y=W(),X($.$$.fragment),this.h()},l(a){e=C(a,"SECTION",{id:!0,class:!0});var _=V(e);t=C(_,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),se(t)!=="svelte-11pp5i7"&&(t.textContent=r),n=K(_),s=C(_,"SPAN",{class:!0});var i=V(s);o=C(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),se(o)!=="svelte-1tjfch7"&&(o.textContent=c),i.forEach(m),_.forEach(m),f=K(a),u=C(a,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),se(u)!=="svelte-wjeacj"&&(u.innerHTML=j),ee=K(a),T=C(a,"SECTION",{id:!0,class:!0});var B=V(T);for(let I=0;I<p.length;I+=1)p[I].l(B);B.forEach(m),H=K(a),R=C(a,"SECTION",{id:!0});var ne=V(R);L=C(ne,"DIV",{class:!0});var we=V(L);for(let I=0;I<v.length;I+=1)v[I].l(we);we.forEach(m),te=K(ne),M=C(ne,"DIV",{class:!0});var ye=V(M);for(let I=0;I<k.length;I+=1)k[I].l(ye);ye.forEach(m),fe=K(ne),A=C(ne,"DIV",{class:!0});var re=V(A);Y(G.$$.fragment,re),h=K(re);for(let I=0;I<b.length;I+=1)b[I].l(re);y=K(re),Y($.$$.fragment,re),re.forEach(m),ne.forEach(m),this.h()},h(){g(t,"id","title"),g(t,"class","svelte-jm3mym"),g(o,"href","#"),g(o,"class","svelte-jm3mym"),g(s,"class","reload svelte-jm3mym"),g(e,"id","navbar"),g(e,"class","svelte-jm3mym"),g(u,"id","errors"),g(u,"class","svelte-jm3mym"),g(T,"id","playing-grid"),g(T,"class","svelte-jm3mym"),g(L,"class","guessed-letters-row svelte-jm3mym"),g(M,"class","guessed-letters-row svelte-jm3mym"),g(A,"class","guessed-letters-row svelte-jm3mym"),g(R,"id","guessed-letters")},m(a,_){N(a,e,_),S(e,t),S(e,n),S(e,s),S(s,o),N(a,f,_),N(a,u,_),N(a,ee,_),N(a,T,_);for(let i=0;i<p.length;i+=1)p[i]&&p[i].m(T,null);N(a,H,_),N(a,R,_),S(R,L);for(let i=0;i<v.length;i+=1)v[i]&&v[i].m(L,null);S(R,te),S(R,M);for(let i=0;i<k.length;i+=1)k[i]&&k[i].m(M,null);S(R,fe),S(R,A),Z(G,A,null),S(A,h);for(let i=0;i<b.length;i+=1)b[i]&&b[i].m(A,null);S(A,y),Z($,A,null),D=!0,he||(be=[me(window,"keydown",l[2]),me(o,"click",l[6])],he=!0)},p(a,[_]){if(_&1){P=O(Array(_e));let i;for(i=0;i<P.length;i+=1){const B=Ne(a,P,i);p[i]?(p[i].p(B,_),d(p[i],1)):(p[i]=Le(B),p[i].c(),d(p[i],1),p[i].m(T,null))}for(J(),i=P.length;i<p.length;i+=1)We(i);Q()}if(_&34){z=O("QWERTYUIOP");let i;for(i=0;i<z.length;i+=1){const B=Se(a,z,i);v[i]?(v[i].p(B,_),d(v[i],1)):(v[i]=Te(B),v[i].c(),d(v[i],1),v[i].m(L,null))}for(J(),i=z.length;i<v.length;i+=1)Ke(i);Q()}if(_&34){q=O("ASDFGHJKL");let i;for(i=0;i<q.length;i+=1){const B=Ie(a,q,i);k[i]?(k[i].p(B,_),d(k[i],1)):(k[i]=Ae(B),k[i].c(),d(k[i],1),k[i].m(M,null))}for(J(),i=q.length;i<k.length;i+=1)Me(i);Q()}if(_&34){F=O("ZXCVBNM");let i;for(i=0;i<F.length;i+=1){const B=je(a,F,i);b[i]?(b[i].p(B,_),d(b[i],1)):(b[i]=De(B),b[i].c(),d(b[i],1),b[i].m(A,y))}for(J(),i=F.length;i<b.length;i+=1)Ge(i);Q()}},i(a){if(!D){for(let _=0;_<P.length;_+=1)d(p[_]);for(let _=0;_<z.length;_+=1)d(v[_]);for(let _=0;_<q.length;_+=1)d(k[_]);d(G.$$.fragment,a);for(let _=0;_<F.length;_+=1)d(b[_]);d($.$$.fragment,a),D=!0}},o(a){p=p.filter(Boolean);for(let _=0;_<p.length;_+=1)w(p[_]);v=v.filter(Boolean);for(let _=0;_<v.length;_+=1)w(v[_]);k=k.filter(Boolean);for(let _=0;_<k.length;_+=1)w(k[_]);w(G.$$.fragment,a),b=b.filter(Boolean);for(let _=0;_<b.length;_+=1)w(b[_]);w($.$$.fragment,a),D=!1},d(a){a&&(m(e),m(f),m(u),m(ee),m(T),m(H),m(R)),le(p,a),le(v,a),le(k,a),x(G),le(b,a),x($),he=!1,ze(be)}}}const _e=6,ge=5;function at(l){return l.toLowerCase()!=l.toUpperCase()&&l.length===1}function de(l,e){for(var t={},r=document.getElementById(l).getElementsByTagName("*"),n=0;n<r.length;n++)if(r[n].id===e){t=r[n];break}return t}function ct(l,e,t){let r="",n=!0;qe(async()=>{let h={};for(;!h.ok;)r=await(await fetch("https://random-word-api.herokuapp.com/word?length=5")).json(),r=r[0].toUpperCase(),h=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${r}`);console.log(r),n=!1});let s=0,o=0;const c=[];for(let h=0;h<_e;h++){const y=[];for(let $=0;$<ge;$++)y.push("");c.push(y)}const f={A:"trans-back",B:"trans-back",C:"trans-back",D:"trans-back",E:"trans-back",F:"trans-back",G:"trans-back",H:"trans-back",I:"trans-back",J:"trans-back",K:"trans-back",L:"trans-back",M:"trans-back",N:"trans-back",O:"trans-back",P:"trans-back",Q:"trans-back",R:"trans-back",S:"trans-back",T:"trans-back",U:"trans-back",V:"trans-back",W:"trans-back",X:"trans-back",Y:"trans-back",Z:"trans-back"};let u=!1;async function j(){return c[s].includes("")?(new Oe({target:document.getElementById("errors-container")}),!1):(await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${c[s].join("")}`)).ok?!0:(new Ue({target:document.getElementById("errors-container")}),!1)}function ee(h){u||(h.code==="Enter"?n||H():h.code==="Backspace"?T():at(h.key)&&L(h.code[h.code.length-1].toUpperCase()))}function T(){if(o<1)return;o-=1;const h=de(`row-${s}`,`item-${o}`);h.textContent="",t(0,c[s][o]="",c)}async function H(){if(!u){if(await j()){for(let h=0;h<5;h++){const y=de(`row-${s}`,`item-${h}`),$=r[h],D=c[s][h];$===D?(y.classList.add("right-place"),t(1,f[D]="right-place",f)):r.includes(D)&&R(h)?(y.classList.add("wrong-place"),t(1,f[D]="wrong-place",f)):(y.classList.add("wrong-letter"),t(1,f[D]="wrong-letter",f))}c[s].join("")==r&&te(),s+=1,o=0}s==_e&&te()}}function R(h){let y=r.split(c[s][h]).length-1;for(let $=0;$<h;$++)if(c[s][$]==c[s][h]&&(y-=1),y<=0)return!1;return!0}function L(h){if(o>4||u)return;const y=de(`row-${s}`,`item-${o}`);y.textContent=h,t(0,c[s][o]=h,c),o+=1}function te(){u||(u=!0,new nt({target:document.getElementById("errors-container"),props:{answer:r}}))}return[c,f,ee,T,H,L,()=>location.reload(),h=>L(h),h=>L(h),h=>L(h)]}class _t extends ae{constructor(e){super(),ce(this,e,ct,it,ie,{})}}export{_t as component};
