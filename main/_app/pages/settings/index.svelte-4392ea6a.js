import{S as te,i as se,s as ae,as as re,K as X,L as x,j as A,k as D,e as k,t as F,a0 as ne,m as U,d as c,n as V,c as S,a as w,g as O,b as v,o as q,f as E,V as _,M as G,x as y,u as T,v as C,N as oe,O as ie,aI as le,aQ as ue,aR as fe,aJ as ce,at as me,X as K,aN as pe,aO as de,aP as $e,aF as _e,l as Y,r as ge,w as he,h as H,aL as Z,aK as ve,W as be,aM as ke}from"../../chunks/vendor-603dc5ef.js";import{U as Se}from"../../chunks/graphql-5f517cf7.js";import{T as we}from"../../chunks/Toast-820abdcd.js";import{g as Ee}from"../../chunks/navigation-51f4a605.js";import{t as je}from"../../chunks/forms-8d025218.js";import{a as ye}from"../../chunks/user-cc05517b.js";import{b as Te}from"../../chunks/paths-6758d194.js";import{M as Ie}from"../../chunks/MetaDescriptors-88b3f235.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/stores-1119589c.js";function Me(o){let e,t,s,a,i,f,m,n,p,g,h,$,r,d,l,I,j,P,B,z,J;p=new Z({props:{for:"avatar",$$slots:{default:[Pe,({messages:u})=>({10:u}),({messages:u})=>u?1024:0]},$$scope:{ctx:o}}});function ee(u){o[7](u)}let Q={label:"Username",required:!0};return o[5].username!==void 0&&(Q.value=o[5].username),$=new ve({props:Q}),X.push(()=>x($,"value",ee)),l=new Z({props:{for:"username",$$slots:{default:[Ae,({messages:u})=>({10:u}),({messages:u})=>u?1024:0]},$$scope:{ctx:o}}}),P=new be({props:{type:"submit",variant:"outlined",$$slots:{default:[De]},$$scope:{ctx:o}}}),{c(){e=k("form"),t=k("div"),s=k("div"),a=k("label"),i=F("Avatar:"),f=D(),m=k("input"),n=D(),A(p.$$.fragment),g=D(),h=k("div"),A($.$$.fragment),d=D(),A(l.$$.fragment),I=D(),j=k("div"),A(P.$$.fragment),this.h()},l(u){e=S(u,"FORM",{});var b=w(e);t=S(b,"DIV",{class:!0});var M=w(t);s=S(M,"DIV",{class:!0});var N=w(s);a=S(N,"LABEL",{for:!0});var R=w(a);i=O(R,"Avatar:"),R.forEach(c),f=V(N),m=S(N,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),n=V(N),U(p.$$.fragment,N),N.forEach(c),g=V(M),h=S(M,"DIV",{class:!0});var L=w(h);U($.$$.fragment,L),d=V(L),U(l.$$.fragment,L),L.forEach(c),I=V(M),j=S(M,"DIV",{});var W=w(j);U(P.$$.fragment,W),W.forEach(c),M.forEach(c),b.forEach(c),this.h()},h(){v(a,"for","avatar"),v(m,"id","avatar"),v(m,"class","base-input"),v(m,"name","avatar"),v(m,"type","file"),v(m,"accept","image/png,image/jpeg,image/gif"),v(m,"placeholder","Avatar"),v(s,"class","grid grid-flow-row gap-2"),v(h,"class","grid grid-flow-row gap-2"),v(t,"class","grid grid-flow-row gap-6")},m(u,b){E(u,e,b),_(e,t),_(t,s),_(s,a),_(a,i),_(s,f),_(s,m),_(s,n),q(p,s,null),_(t,g),_(t,h),q($,h,null),_(h,d),q(l,h,null),_(t,I),_(t,j),q(P,j,null),B=!0,z||(J=ke(o[4].call(null,e)),z=!0)},p(u,b){const M={};b&3072&&(M.$$scope={dirty:b,ctx:u}),p.$set(M);const N={};!r&&b&32&&(r=!0,N.value=u[5].username,G(()=>r=!1)),$.$set(N);const R={};b&3072&&(R.$$scope={dirty:b,ctx:u}),l.$set(R);const L={};b&2048&&(L.$$scope={dirty:b,ctx:u}),P.$set(L)},i(u){B||(y(p.$$.fragment,u),y($.$$.fragment,u),y(l.$$.fragment,u),y(P.$$.fragment,u),B=!0)},o(u){T(p.$$.fragment,u),T($.$$.fragment,u),T(l.$$.fragment,u),T(P.$$.fragment,u),B=!1},d(u){u&&c(e),C(p),C($),C(l),C(P),z=!1,J()}}}function Ne(o){let e,t;return{c(){e=k("p"),t=F("Please log in")},l(s){e=S(s,"P",{});var a=w(e);t=O(a,"Please log in"),a.forEach(c)},m(s,a){E(s,e,a),_(e,t)},p:K,i:K,o:K,d(s){s&&c(e)}}}function Pe(o){let e,t=(o[10]||"")+"",s;return{c(){e=k("span"),s=F(t),this.h()},l(a){e=S(a,"SPAN",{class:!0});var i=w(e);s=O(i,t),i.forEach(c),this.h()},h(){v(e,"class","validation-message")},m(a,i){E(a,e,i),_(e,s)},p(a,i){i&1024&&t!==(t=(a[10]||"")+"")&&H(s,t)},d(a){a&&c(e)}}}function Ae(o){let e,t=(o[10]||"")+"",s;return{c(){e=k("span"),s=F(t),this.h()},l(a){e=S(a,"SPAN",{class:!0});var i=w(e);s=O(i,t),i.forEach(c),this.h()},h(){v(e,"class","validation-message")},m(a,i){E(a,e,i),_(e,s)},p(a,i){i&1024&&t!==(t=(a[10]||"")+"")&&H(s,t)},d(a){a&&c(e)}}}function De(o){let e;return{c(){e=F("Save")},l(t){e=O(t,"Save")},m(t,s){E(t,e,s)},d(t){t&&c(e)}}}function Ue(o){let e,t,s,a;const i=[Ne,Me],f=[];function m(n,p){return n[2]===null?0:1}return e=m(o),t=f[e]=i[e](o),{c(){t.c(),s=Y()},l(n){t.l(n),s=Y()},m(n,p){f[e].m(n,p),E(n,s,p),a=!0},p(n,p){let g=e;e=m(n),e===g?f[e].p(n,p):(ge(),T(f[g],1,1,()=>{f[g]=null}),he(),t=f[e],t?t.p(n,p):(t=f[e]=i[e](n),t.c()),y(t,1),t.m(s.parentNode,s))},i(n){a||(y(t),a=!0)},o(n){T(t),a=!1},d(n){f[e].d(n),n&&c(s)}}}function Ve(o){let e,t;return e=new me({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,a){q(e,s,a),t=!0},p(s,a){const i={};a&2084&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){C(e,s)}}}function qe(o){let e,t;return{c(){e=k("span"),t=F(o[3])},l(s){e=S(s,"SPAN",{});var a=w(e);t=O(a,o[3]),a.forEach(c)},m(s,a){E(s,e,a),_(e,t)},p(s,a){a&8&&H(t,s[3])},d(s){s&&c(e)}}}function Ce(o){let e,t,s,a,i,f,m,n,p,g;e=new Ie({props:{description:"Change your user settings",title:"Settings"}}),f=new re({props:{$$slots:{default:[Ve]},$$scope:{ctx:o}}});function h(r){o[8](r)}let $={$$slots:{default:[qe]},$$scope:{ctx:o}};return o[0]!==void 0&&($.running=o[0]),n=new we({props:$}),X.push(()=>x(n,"running",h)),{c(){A(e.$$.fragment),t=D(),s=k("h1"),a=F("Settings"),i=D(),A(f.$$.fragment),m=D(),A(n.$$.fragment),this.h()},l(r){const d=ne('[data-svelte="svelte-1ae5i2c"]',document.head);U(e.$$.fragment,d),d.forEach(c),t=V(r),s=S(r,"H1",{class:!0});var l=w(s);a=O(l,"Settings"),l.forEach(c),i=V(r),U(f.$$.fragment,r),m=V(r),U(n.$$.fragment,r),this.h()},h(){v(s,"class","text-4xl my-4 font-bold")},m(r,d){q(e,document.head,null),E(r,t,d),E(r,s,d),_(s,a),E(r,i,d),q(f,r,d),E(r,m,d),q(n,r,d),g=!0},p(r,[d]){const l={};d&2084&&(l.$$scope={dirty:d,ctx:r}),f.$set(l);const I={};d&2056&&(I.$$scope={dirty:d,ctx:r}),!p&&d&1&&(p=!0,I.running=r[0],G(()=>p=!1)),n.$set(I)},i(r){g||(y(e.$$.fragment,r),y(f.$$.fragment,r),y(n.$$.fragment,r),g=!0)},o(r){T(e.$$.fragment,r),T(f.$$.fragment,r),T(n.$$.fragment,r),g=!1},d(r){C(e),r&&c(t),r&&c(s),r&&c(i),C(f,r),r&&c(m),C(n,r)}}}function Le(o,e,t){let s,a,i=K,f=()=>(i(),i=_e($,l=>t(5,a=l)),$);oe(o,ye,l=>t(2,s=l)),o.$$.on_destroy.push(()=>i());let m="",n=!1;const p=ie({query:Se}),g=le({avatar:ue(fe().refine(l=>"name"in l&&"size"in l&&"type"in l)),username:ce().min(3).max(32)});let h,$;function r(l){o.$$.not_equal(a.username,l)&&(a.username=l,$.set(a))}function d(l){n=l,t(0,n),t(2,s)}return o.$$.update=()=>{if(o.$$.dirty&4&&s){const l=pe({initialValues:{username:s.username},extend:[de,$e],validateSchema:g,onSubmit:I=>{p({user:je(I,g),userId:s.id}).then(j=>{j.error?(console.error(j.error.message),t(3,m="Error editing guide: "+j.error.message),t(0,n=!0)):Ee(Te+"/user/"+j.data.updateUser.id)})}});t(4,h=l.form),f(t(1,$=l.data))}o.$$.dirty&1&&(n||t(3,m=""))},[n,$,s,m,h,a,g,r,d]}class Xe extends te{constructor(e){super();se(this,e,Le,Ce,ae,{userSchema:6})}get userSchema(){return this.$$.ctx[6]}}export{Xe as default};
//# sourceMappingURL=index.svelte-4392ea6a.js.map
