import{S as D,i as y,s as A,as as F,K as H,L as K,j as $,k as j,e as L,t as N,a0 as O,m as _,d as c,n as M,c as v,a as q,g as E,b as P,o as d,f as g,V as T,M as X,x as h,u as b,v as k,O as x,at as z,X as B,h as G}from"../../../chunks/vendor-b958012e.js";import{n as I}from"../../../chunks/graphql-06a000cd.js";import{T as J}from"../../../chunks/Toast-89c8aaff.js";import{g as Q}from"../../../chunks/navigation-51f4a605.js";import{S as R}from"../../../chunks/SMLVersionForm-34fbacf7.js";import{b as U}from"../../../chunks/paths-6758d194.js";import{M as W}from"../../../chunks/MetaDescriptors-e50bf57a.js";import"../../../chunks/singletons-12a22614.js";import"../../../chunks/forms-8d025218.js";import"../../../chunks/markdown-1211b0b2.js";import"../../../chunks/stores-21c16f73.js";function Y(a){let s,n;return s=new R({props:{onSubmit:a[2]}}),{c(){$(s.$$.fragment)},l(e){_(s.$$.fragment,e)},m(e,r){d(s,e,r),n=!0},p:B,i(e){n||(h(s.$$.fragment,e),n=!0)},o(e){b(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function Z(a){let s,n;return s=new z({props:{$$slots:{default:[Y]},$$scope:{ctx:a}}}),{c(){$(s.$$.fragment)},l(e){_(s.$$.fragment,e)},m(e,r){d(s,e,r),n=!0},p(e,r){const m={};r&32&&(m.$$scope={dirty:r,ctx:e}),s.$set(m)},i(e){n||(h(s.$$.fragment,e),n=!0)},o(e){b(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function ee(a){let s,n;return{c(){s=L("span"),n=N(a[1])},l(e){s=v(e,"SPAN",{});var r=q(s);n=E(r,a[1]),r.forEach(c)},m(e,r){g(e,s,r),T(s,n)},p(e,r){r&2&&G(n,e[1])},d(e){e&&c(s)}}}function se(a){let s,n,e,r,m,f,l,i,u,w;s=new W({props:{description:"New SML Version",title:"Admin: New SML Version"}}),f=new F({props:{$$slots:{default:[Z]},$$scope:{ctx:a}}});function C(t){a[3](t)}let V={$$slots:{default:[ee]},$$scope:{ctx:a}};return a[0]!==void 0&&(V.running=a[0]),i=new J({props:V}),H.push(()=>K(i,"running",C)),{c(){$(s.$$.fragment),n=j(),e=L("h1"),r=N("New SML Version"),m=j(),$(f.$$.fragment),l=j(),$(i.$$.fragment),this.h()},l(t){const o=O('[data-svelte="svelte-1wdno4b"]',document.head);_(s.$$.fragment,o),o.forEach(c),n=M(t),e=v(t,"H1",{class:!0});var p=q(e);r=E(p,"New SML Version"),p.forEach(c),m=M(t),_(f.$$.fragment,t),l=M(t),_(i.$$.fragment,t),this.h()},h(){P(e,"class","text-4xl my-4 font-bold")},m(t,o){d(s,document.head,null),g(t,n,o),g(t,e,o),T(e,r),g(t,m,o),d(f,t,o),g(t,l,o),d(i,t,o),w=!0},p(t,[o]){const p={};o&32&&(p.$$scope={dirty:o,ctx:t}),f.$set(p);const S={};o&34&&(S.$$scope={dirty:o,ctx:t}),!u&&o&1&&(u=!0,S.running=t[0],X(()=>u=!1)),i.$set(S)},i(t){w||(h(s.$$.fragment,t),h(f.$$.fragment,t),h(i.$$.fragment,t),w=!0)},o(t){b(s.$$.fragment,t),b(f.$$.fragment,t),b(i.$$.fragment,t),w=!1},d(t){k(s),t&&c(n),t&&c(e),t&&c(m),k(f,t),t&&c(l),k(i,t)}}}function te(a,s,n){let e="",r=!1;const m=x({query:I}),f=i=>{m({smlVersion:i}).then(u=>{u.error?(console.error(u.error.message),n(1,e="Error creating mod: "+u.error.message),n(0,r=!0)):Q(U+"/admin/sml-versions")})};function l(i){r=i,n(0,r)}return a.$$.update=()=>{a.$$.dirty&1&&(r||n(1,e=""))},[r,e,f,l]}class $e extends D{constructor(s){super();y(this,s,te,se,A,{})}}export{$e as default};
//# sourceMappingURL=new.svelte-6d71599b.js.map
