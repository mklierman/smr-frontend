import{S as y,i as x,s as ee,e as E,w as v,c as U,a as B,x as h,d as m,b as z,g,X as I,y as b,q as p,o as _,B as w,ax as te,k,l as M,a2 as ne,m as D,p as R,R as se,P as re,az as le,Q as F,T as oe,n as N,D as ae,aA as fe,ay as G,aB as $e,aC as ue,t as V,h as P,j as S,aD as H,aE as ce,aF as j,Y as T}from"../../chunks/vendor-749578bb.js";import{h as ie,A as me,D as pe}from"../../chunks/graphql-06a000cd.js";import{P as Q}from"../../chunks/PageControls-0ca48f39.js";import{b as X}from"../../chunks/api-82c76902.js";import"../../chunks/user-830f3312.js";import{b as Y}from"../../chunks/paths-396f020f.js";import{M as _e}from"../../chunks/MetaDescriptors-a0e66e0b.js";import"../../chunks/stores-2b8149f9.js";function J(o,e,n){const t=o.slice();return t[10]=e[n],t}function K(o){let e,n,t,s;return t=new Q({props:{totalPages:Math.ceil(o[1]/q),currentPage:o[3]}}),{c(){e=E("div"),n=E("div"),v(t.$$.fragment),this.h()},l(l){e=U(l,"DIV",{class:!0});var f=B(e);n=U(f,"DIV",{});var u=B(n);h(t.$$.fragment,u),u.forEach(m),f.forEach(m),this.h()},h(){z(e,"class","mb-5 ml-auto flex justify-end")},m(l,f){g(l,e,f),I(e,n),b(t,n,null),s=!0},p(l,f){const u={};f&2&&(u.totalPages=Math.ceil(l[1]/q)),t.$set(u)},i(l){s||(p(t.$$.fragment,l),s=!0)},o(l){_(t.$$.fragment,l),s=!1},d(l){l&&m(e),w(t)}}}function ge(o){let e,n;return e=new fe({props:{class:"max-w-full",$$slots:{default:[Ie]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,s){const l={};s&8193&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function de(o){let e,n;return e=new G({props:{$$slots:{default:[Re]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,s){const l={};s&8193&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function ve(o){let e,n;return e=new G({props:{$$slots:{default:[Ne]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,s){const l={};s&8192&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function he(o){let e;return{c(){e=V("Mod")},l(n){e=P(n,"Mod")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function be(o){let e;return{c(){e=V("Version")},l(n){e=P(n,"Version")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function we(o){let e;return{c(){e=V("Release Date")},l(n){e=P(n,"Release Date")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function ke(o){let e,n,t,s,l,f,u,a;return e=new j({props:{$$slots:{default:[he]},$$scope:{ctx:o}}}),t=new j({props:{$$slots:{default:[be]},$$scope:{ctx:o}}}),l=new j({props:{$$slots:{default:[we]},$$scope:{ctx:o}}}),u=new j({}),{c(){v(e.$$.fragment),n=k(),v(t.$$.fragment),s=k(),v(l.$$.fragment),f=k(),v(u.$$.fragment)},l($){h(e.$$.fragment,$),n=D($),h(t.$$.fragment,$),s=D($),h(l.$$.fragment,$),f=D($),h(u.$$.fragment,$)},m($,r){b(e,$,r),g($,n,r),b(t,$,r),g($,s,r),b(l,$,r),g($,f,r),b(u,$,r),a=!0},p($,r){const c={};r&8192&&(c.$$scope={dirty:r,ctx:$}),e.$set(c);const d={};r&8192&&(d.$$scope={dirty:r,ctx:$}),t.$set(d);const i={};r&8192&&(i.$$scope={dirty:r,ctx:$}),l.$set(i)},i($){a||(p(e.$$.fragment,$),p(t.$$.fragment,$),p(l.$$.fragment,$),p(u.$$.fragment,$),a=!0)},o($){_(e.$$.fragment,$),_(t.$$.fragment,$),_(l.$$.fragment,$),_(u.$$.fragment,$),a=!1},d($){w(e,$),$&&m(n),w(t,$),$&&m(s),w(l,$),$&&m(f),w(u,$)}}}function De(o){let e,n;return e=new H({props:{$$slots:{default:[ke]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,s){const l={};s&8192&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Ve(o){let e=o[10].mod.name+"",n;return{c(){n=V(e)},l(t){n=P(t,e)},m(t,s){g(t,n,s)},p(t,s){s&1&&e!==(e=t[10].mod.name+"")&&S(n,e)},d(t){t&&m(n)}}}function Pe(o){let e=o[10].version+"",n;return{c(){n=V(e)},l(t){n=P(t,e)},m(t,s){g(t,n,s)},p(t,s){s&1&&e!==(e=t[10].version+"")&&S(n,e)},d(t){t&&m(n)}}}function je(o){let e=o[10].created_at+"",n;return{c(){n=V(e)},l(t){n=P(t,e)},m(t,s){g(t,n,s)},p(t,s){s&1&&e!==(e=t[10].created_at+"")&&S(n,e)},d(t){t&&m(n)}}}function Me(o){let e;return{c(){e=V("Approve")},l(n){e=P(n,"Approve")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function qe(o){let e;return{c(){e=V("Deny")},l(n){e=P(n,"Deny")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function Ae(o){let e;return{c(){e=V("Download")},l(n){e=P(n,"Download")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function Ce(o){let e;return{c(){e=V("View")},l(n){e=P(n,"View")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function Ee(o){let e,n,t,s,l,f,u,a,$;function r(){return o[6](o[10])}n=new T({props:{variant:"outlined",$$slots:{default:[Me]},$$scope:{ctx:o}}}),n.$on("click",r);function c(){return o[7](o[10])}return s=new T({props:{variant:"outlined",$$slots:{default:[qe]},$$scope:{ctx:o}}}),s.$on("click",c),f=new T({props:{variant:"outlined",href:X+"/mod/"+o[10].mod_id+"/versions/"+o[10].id+"/download",$$slots:{default:[Ae]},$$scope:{ctx:o}}}),a=new T({props:{variant:"outlined",href:Y+"/mod/"+o[10].mod_id+"/version/"+o[10].id,$$slots:{default:[Ce]},$$scope:{ctx:o}}}),{c(){e=E("div"),v(n.$$.fragment),t=k(),v(s.$$.fragment),l=k(),v(f.$$.fragment),u=k(),v(a.$$.fragment),this.h()},l(d){e=U(d,"DIV",{class:!0});var i=B(e);h(n.$$.fragment,i),t=D(i),h(s.$$.fragment,i),l=D(i),h(f.$$.fragment,i),u=D(i),h(a.$$.fragment,i),i.forEach(m),this.h()},h(){z(e,"class","grid grid-flow-col gap-4")},m(d,i){g(d,e,i),b(n,e,null),I(e,t),b(s,e,null),I(e,l),b(f,e,null),I(e,u),b(a,e,null),$=!0},p(d,i){o=d;const A={};i&8192&&(A.$$scope={dirty:i,ctx:o}),n.$set(A);const C={};i&8192&&(C.$$scope={dirty:i,ctx:o}),s.$set(C);const L={};i&1&&(L.href=X+"/mod/"+o[10].mod_id+"/versions/"+o[10].id+"/download"),i&8192&&(L.$$scope={dirty:i,ctx:o}),f.$set(L);const O={};i&1&&(O.href=Y+"/mod/"+o[10].mod_id+"/version/"+o[10].id),i&8192&&(O.$$scope={dirty:i,ctx:o}),a.$set(O)},i(d){$||(p(n.$$.fragment,d),p(s.$$.fragment,d),p(f.$$.fragment,d),p(a.$$.fragment,d),$=!0)},o(d){_(n.$$.fragment,d),_(s.$$.fragment,d),_(f.$$.fragment,d),_(a.$$.fragment,d),$=!1},d(d){d&&m(e),w(n),w(s),w(f),w(a)}}}function Ue(o){let e,n,t,s,l,f,u,a,$;return e=new j({props:{$$slots:{default:[Ve]},$$scope:{ctx:o}}}),t=new j({props:{$$slots:{default:[Pe]},$$scope:{ctx:o}}}),l=new j({props:{$$slots:{default:[je]},$$scope:{ctx:o}}}),u=new j({props:{$$slots:{default:[Ee]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment),n=k(),v(t.$$.fragment),s=k(),v(l.$$.fragment),f=k(),v(u.$$.fragment),a=k()},l(r){h(e.$$.fragment,r),n=D(r),h(t.$$.fragment,r),s=D(r),h(l.$$.fragment,r),f=D(r),h(u.$$.fragment,r),a=D(r)},m(r,c){b(e,r,c),g(r,n,c),b(t,r,c),g(r,s,c),b(l,r,c),g(r,f,c),b(u,r,c),g(r,a,c),$=!0},p(r,c){const d={};c&8193&&(d.$$scope={dirty:c,ctx:r}),e.$set(d);const i={};c&8193&&(i.$$scope={dirty:c,ctx:r}),t.$set(i);const A={};c&8193&&(A.$$scope={dirty:c,ctx:r}),l.$set(A);const C={};c&8193&&(C.$$scope={dirty:c,ctx:r}),u.$set(C)},i(r){$||(p(e.$$.fragment,r),p(t.$$.fragment,r),p(l.$$.fragment,r),p(u.$$.fragment,r),$=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),_(l.$$.fragment,r),_(u.$$.fragment,r),$=!1},d(r){w(e,r),r&&m(n),w(t,r),r&&m(s),w(l,r),r&&m(f),w(u,r),r&&m(a)}}}function W(o){let e,n;return e=new H({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,s){const l={};s&8193&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Be(o){let e,n,t=o[0].data.getUnapprovedVersions.versions,s=[];for(let f=0;f<t.length;f+=1)s[f]=W(J(o,t,f));const l=f=>_(s[f],1,1,()=>{s[f]=null});return{c(){for(let f=0;f<s.length;f+=1)s[f].c();e=M()},l(f){for(let u=0;u<s.length;u+=1)s[u].l(f);e=M()},m(f,u){for(let a=0;a<s.length;a+=1)s[a].m(f,u);g(f,e,u),n=!0},p(f,u){if(u&49){t=f[0].data.getUnapprovedVersions.versions;let a;for(a=0;a<t.length;a+=1){const $=J(f,t,a);s[a]?(s[a].p($,u),p(s[a],1)):(s[a]=W($),s[a].c(),p(s[a],1),s[a].m(e.parentNode,e))}for(N(),a=t.length;a<s.length;a+=1)l(a);R()}},i(f){if(!n){for(let u=0;u<t.length;u+=1)p(s[u]);n=!0}},o(f){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)_(s[u]);n=!1},d(f){ce(s,f),f&&m(e)}}}function Ie(o){let e,n,t,s;return e=new $e({props:{$$slots:{default:[De]},$$scope:{ctx:o}}}),t=new ue({props:{$$slots:{default:[Be]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment),n=k(),v(t.$$.fragment)},l(l){h(e.$$.fragment,l),n=D(l),h(t.$$.fragment,l)},m(l,f){b(e,l,f),g(l,n,f),b(t,l,f),s=!0},p(l,f){const u={};f&8192&&(u.$$scope={dirty:f,ctx:l}),e.$set(u);const a={};f&8193&&(a.$$scope={dirty:f,ctx:l}),t.$set(a)},i(l){s||(p(e.$$.fragment,l),p(t.$$.fragment,l),s=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),s=!1},d(l){w(e,l),l&&m(n),w(t,l)}}}function Re(o){let e,n=o[0].error.message+"",t;return{c(){e=V("Oh no... "),t=V(n)},l(s){e=P(s,"Oh no... "),t=P(s,n)},m(s,l){g(s,e,l),g(s,t,l)},p(s,l){l&1&&n!==(n=s[0].error.message+"")&&S(t,n)},d(s){s&&m(e),s&&m(t)}}}function Ne(o){let e;return{c(){e=V("Loading...")},l(n){e=P(n,"Loading...")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function Se(o){let e,n,t,s;const l=[ve,de,ge],f=[];function u(a,$){return a[0].fetching?0:a[0].error?1:2}return e=u(o),n=f[e]=l[e](o),{c(){n.c(),t=M()},l(a){n.l(a),t=M()},m(a,$){f[e].m(a,$),g(a,t,$),s=!0},p(a,$){let r=e;e=u(a),e===r?f[e].p(a,$):(N(),_(f[r],1,1,()=>{f[r]=null}),R(),n=f[e],n?n.p(a,$):(n=f[e]=l[e](a),n.c()),p(n,1),n.m(t.parentNode,t))},i(a){s||(p(n),s=!0)},o(a){_(n),s=!1},d(a){f[e].d(a),a&&m(t)}}}function Z(o){let e,n,t;return n=new Q({props:{totalPages:Math.ceil(o[1]/q),currentPage:o[3]}}),{c(){e=E("div"),v(n.$$.fragment),this.h()},l(s){e=U(s,"DIV",{class:!0});var l=B(e);h(n.$$.fragment,l),l.forEach(m),this.h()},h(){z(e,"class","mt-5 ml-auto flex justify-end")},m(s,l){g(s,e,l),b(n,e,null),t=!0},p(s,l){const f={};l&2&&(f.totalPages=Math.ceil(s[1]/q)),n.$set(f)},i(s){t||(p(n.$$.fragment,s),t=!0)},o(s){_(n.$$.fragment,s),t=!1},d(s){s&&m(e),w(n)}}}function Te(o){let e,n,t,s,l,f,u;e=new _e({props:{description:"Unapproved mod versions",title:"Admin: Unapproved Versions"}});let a=o[1]&&K(o);s=new te({props:{$$slots:{default:[Se]},$$scope:{ctx:o}}});let $=o[1]&&Z(o);return{c(){v(e.$$.fragment),n=k(),a&&a.c(),t=k(),v(s.$$.fragment),l=k(),$&&$.c(),f=M()},l(r){const c=ne('[data-svelte="svelte-c87g9p"]',document.head);h(e.$$.fragment,c),c.forEach(m),n=D(r),a&&a.l(r),t=D(r),h(s.$$.fragment,r),l=D(r),$&&$.l(r),f=M()},m(r,c){b(e,document.head,null),g(r,n,c),a&&a.m(r,c),g(r,t,c),b(s,r,c),g(r,l,c),$&&$.m(r,c),g(r,f,c),u=!0},p(r,[c]){r[1]?a?(a.p(r,c),c&2&&p(a,1)):(a=K(r),a.c(),p(a,1),a.m(t.parentNode,t)):a&&(N(),_(a,1,1,()=>{a=null}),R());const d={};c&8193&&(d.$$scope={dirty:c,ctx:r}),s.$set(d),r[1]?$?($.p(r,c),c&2&&p($,1)):($=Z(r),$.c(),p($,1),$.m(f.parentNode,f)):$&&(N(),_($,1,1,()=>{$=null}),R())},i(r){u||(p(e.$$.fragment,r),p(a),p(s.$$.fragment,r),p($),u=!0)},o(r){_(e.$$.fragment,r),_(a),_(s.$$.fragment,r),_($),u=!1},d(r){w(e),r&&m(n),a&&a.d(r),r&&m(t),w(s,r),r&&m(l),$&&$.d(r),r&&m(f)}}}const q=20;function Le(o,e,n){let t;const s=se(ie,{filter:{offset:0,limit:q}});re(o,s,i=>n(0,t=i));const l=ae(1);let f;l.subscribe(i=>le(s,t.variables.filter.offset=(i-1)*q,t));const u=F({query:me}),a=i=>{u({versionId:i}).then(()=>{s.reexecute()})},$=F({query:pe}),r=i=>{$({versionId:i}).then(()=>{s.reexecute()})};oe(s);const c=i=>a(i.id),d=i=>r(i.id);return o.$$.update=()=>{o.$$.dirty&1&&n(1,f=t?.data?.getUnapprovedVersions?.count)},[t,f,s,l,a,r,c,d]}class Je extends y{constructor(e){super();x(this,e,Le,Te,ee,{})}}export{Je as default};
//# sourceMappingURL=unapproved-versions.svelte-17521969.js.map
