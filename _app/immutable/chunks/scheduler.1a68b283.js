function g(){}const v=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function A(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const o of n)o(void 0);return g}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(O(n,e))}function U(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function D(t,n,e,o,r,l){if(r){const f=y(n,e,o,l);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){return t??""}function I(t){return t&&E(t.destroy)?t.destroy:g}function J(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let a;function d(t){a=t}function m(){if(!a)throw new Error("Function called outside component initialization");return a}function K(t){m().$$.on_mount.push(t)}function L(t){m().$$.after_update.push(t)}const i=[],b=[];let c=[];const h=[],x=Promise.resolve();let p=!1;function q(){p||(p=!0,x.then(F))}function N(){return q(),x}function z(t){c.push(t)}function Q(t){h.push(t)}const _=new Set;let s=0;function F(){if(s!==0)return;const t=a;do{try{for(;s<i.length;){const n=i[s];s++,d(n),M(n.$$)}}catch(n){throw i.length=0,s=0,n}for(d(null),i.length=0,s=0;b.length;)b.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];_.has(e)||(_.add(e),e())}c.length=0}while(i.length);for(;h.length;)h.pop()();p=!1,_.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function R(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{i as A,q as B,L as a,b,U as c,C as d,S as e,J as f,G as g,H as h,v as i,E as j,I as k,z as l,Q as m,g as n,K as o,A as p,F as q,j as r,B as s,N as t,D as u,P as v,R as w,a as x,d as y,w as z};
