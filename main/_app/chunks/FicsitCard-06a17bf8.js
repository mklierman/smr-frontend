import{S as Z,i as y,s as x,as as ee,j,m as N,o as S,x as E,u as C,v as A,at as te,aV as se,e as k,k as F,c as v,a as I,d as u,n as L,b as h,aW as D,f as b,V as w,aX as ae,a5 as M,l as q,t as P,g as X,h as W,a6 as Y,a7 as z,a8 as J,r as le,w as ne,aY as K,X as oe,ae as ie,ag as fe}from"./vendor-b958012e.js";import{a as O}from"./paths-6758d194.js";import{g as re}from"./navigation-51f4a605.js";const ce=l=>({}),Q=l=>({}),ue=l=>({}),R=l=>({});function _e(l){let e,s,t;return{c(){e=k("img"),this.h()},l(a){e=v(a,"IMG",{crossorigin:!0,src:!0,alt:!0,class:!0}),this.h()},h(){h(e,"crossorigin","anonymous"),K(e.src,s=l[4])||h(e,"src",s),h(e,"alt",t=""+(l[3]+" Logo")),h(e,"class","logo max-w-full max-h-full svelte-16fsik6")},m(a,o){b(a,e,o)},p(a,o){o&16&&!K(e.src,s=a[4])&&h(e,"src",s),o&8&&t!==(t=""+(a[3]+" Logo"))&&h(e,"alt",t)},d(a){a&&u(e)}}}function me(l){let e;return{c(){e=k("div"),this.h()},l(s){e=v(s,"DIV",{class:!0}),I(e).forEach(u),this.h()},h(){h(e,"class","bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full svelte-16fsik6")},m(s,t){b(s,e,t)},p:oe,d(s){s&&u(e)}}}function T(l){let e,s;return{c(){e=k("span"),s=P("Card stats"),this.h()},l(t){e=v(t,"SPAN",{class:!0});var a=I(e);s=X(a,"Card stats"),a.forEach(u),this.h()},h(){h(e,"class","font-flow")},m(t,a){b(t,e,a),w(e,s)},d(t){t&&u(e)}}}function de(l){let e,s=l[1]&&T();return{c(){s&&s.c(),e=q()},l(t){s&&s.l(t),e=q()},m(t,a){s&&s.m(t,a),b(t,e,a)},p(t,a){t[1]?s||(s=T(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&u(e)}}}function ge(l){let e,s,t,a,o,f,r,_,g,$,m;const p=l[8].stats,d=M(p,l,l[10],R),n=d||de(l);return{c(){e=k("div"),s=k("a"),t=k("span"),a=P(l[3]),f=F(),r=k("h5"),n&&n.c(),_=F(),g=k("div"),$=P(l[2]),this.h()},l(i){e=v(i,"DIV",{class:!0});var c=I(e);s=v(c,"A",{href:!0});var V=I(s);t=v(V,"SPAN",{class:!0});var B=I(t);a=X(B,l[3]),B.forEach(u),V.forEach(u),f=L(c),r=v(c,"H5",{class:!0});var G=I(r);n&&n.l(G),G.forEach(u),c.forEach(u),_=L(i),g=v(i,"DIV",{class:!0});var H=I(g);$=X(H,l[2]),H.forEach(u),this.h()},h(){h(t,"class","text-xl break-words"),h(s,"href",o=""+(l[0]+"/")),h(r,"class","text-sm m-0"),h(e,"class","mb-2"),h(g,"class","break-words"),D(g,"font-flow",l[1])},m(i,c){b(i,e,c),w(e,s),w(s,t),w(t,a),w(e,f),w(e,r),n&&n.m(r,null),b(i,_,c),b(i,g,c),w(g,$),m=!0},p(i,c){(!m||c&8)&&W(a,i[3]),(!m||c&1&&o!==(o=""+(i[0]+"/")))&&h(s,"href",o),d?d.p&&(!m||c&1024)&&Y(d,p,i,i[10],m?J(p,i[10],c,ue):z(i[10]),R):n&&n.p&&(!m||c&2)&&n.p(i,m?c:-1),(!m||c&4)&&W($,i[2]),c&2&&D(g,"font-flow",i[1])},i(i){m||(E(n,i),m=!0)},o(i){C(n,i),m=!1},d(i){i&&u(e),n&&n.d(i),i&&u(_),i&&u(g)}}}function U(l){let e,s,t;e=new ie({props:{href:l[0],"aria-label":"View "+l[3],title:"View "+l[3],$$slots:{default:[pe]},$$scope:{ctx:l}}});const a=l[8].actions,o=M(a,l,l[10],Q);return{c(){j(e.$$.fragment),s=F(),o&&o.c()},l(f){N(e.$$.fragment,f),s=L(f),o&&o.l(f)},m(f,r){S(e,f,r),b(f,s,r),o&&o.m(f,r),t=!0},p(f,r){const _={};r&1&&(_.href=f[0]),r&8&&(_["aria-label"]="View "+f[3]),r&8&&(_.title="View "+f[3]),r&1024&&(_.$$scope={dirty:r,ctx:f}),e.$set(_),o&&o.p&&(!t||r&1024)&&Y(o,a,f,f[10],t?J(a,f[10],r,ce):z(f[10]),Q)},i(f){t||(E(e.$$.fragment,f),E(o,f),t=!0)},o(f){C(e.$$.fragment,f),C(o,f),t=!1},d(f){A(e,f),f&&u(s),o&&o.d(f)}}}function he(l){let e;return{c(){e=P("info")},l(s){e=X(s,"info")},m(s,t){b(s,e,t)},d(s){s&&u(e)}}}function pe(l){let e,s;return e=new fe({props:{class:"material-icons",$$slots:{default:[he]},$$scope:{ctx:l}}}),{c(){j(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){S(e,t,a),s=!0},p(t,a){const o={};a&1024&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function $e(l){let e,s,t=!l[1]&&U(l);return{c(){t&&t.c(),e=q()},l(a){t&&t.l(a),e=q()},m(a,o){t&&t.m(a,o),b(a,e,o),s=!0},p(a,o){a[1]?t&&(le(),C(t,1,1,()=>{t=null}),ne()):t?(t.p(a,o),o&2&&E(t,1)):(t=U(a),t.c(),E(t,1),t.m(e.parentNode,e))},i(a){s||(E(t),s=!0)},o(a){C(t),s=!1},d(a){t&&t.d(a),a&&u(e)}}}function ke(l){let e,s,t,a,o,f,r,_,g,$;function m(n,i){return n[1]?me:_e}let p=m(l),d=p(l);return o=new te({props:{class:"flex flex-col pb-0",$$slots:{default:[ge]},$$scope:{ctx:l}}}),r=new se({props:{class:"self-end",$$slots:{default:[$e]},$$scope:{ctx:l}}}),{c(){e=k("div"),s=k("div"),d.c(),t=F(),a=k("div"),j(o.$$.fragment),f=F(),j(r.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0});var i=I(e);s=v(i,"DIV",{class:!0});var c=I(s);d.l(c),c.forEach(u),t=L(i),a=v(i,"DIV",{class:!0});var V=I(a);N(o.$$.fragment,V),f=L(V),N(r.$$.fragment,V),V.forEach(u),i.forEach(u),this.h()},h(){h(s,"class","cursor-pointer card-image-container"),h(a,"class","w-full flex flex-col justify-between"),h(e,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center svelte-16fsik6"),D(e,"text-gray-500",l[1]),D(e,"font-flow",l[1])},m(n,i){b(n,e,i),w(e,s),d.m(s,null),w(e,t),w(e,a),S(o,a,null),w(a,f),S(r,a,null),_=!0,g||($=ae(s,"click",l[9]),g=!0)},p(n,i){p===(p=m(n))&&d?d.p(n,i):(d.d(1),d=p(n),d&&(d.c(),d.m(s,null)));const c={};i&1039&&(c.$$scope={dirty:i,ctx:n}),o.$set(c);const V={};i&1035&&(V.$$scope={dirty:i,ctx:n}),r.$set(V),i&2&&D(e,"text-gray-500",n[1]),i&2&&D(e,"font-flow",n[1])},i(n){_||(E(o.$$.fragment,n),E(r.$$.fragment,n),_=!0)},o(n){C(o.$$.fragment,n),C(r.$$.fragment,n),_=!1},d(n){n&&u(e),d.d(),A(o),A(r),g=!1,$()}}}function ve(l){let e,s;return e=new ee({props:{class:"h-full",$$slots:{default:[ke]},$$scope:{ctx:l}}}),{c(){j(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){S(e,t,a),s=!0},p(t,[a]){const o={};a&1055&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function be(l,e,s){let t,a,o,{$$slots:f={},$$scope:r}=e,{name:_=""}=e,{logo:g=O+"/images/no_image.png"}=e,{description:$=""}=e,{link:m="/"}=e,{fake:p=!1}=e;const d=()=>re(m);return l.$$set=n=>{"name"in n&&s(5,_=n.name),"logo"in n&&s(6,g=n.logo),"description"in n&&s(7,$=n.description),"link"in n&&s(0,m=n.link),"fake"in n&&s(1,p=n.fake),"$$scope"in n&&s(10,r=n.$$scope)},l.$$.update=()=>{l.$$.dirty&64&&s(4,t=g||O+"/images/no_image.png"),l.$$.dirty&34&&s(3,a=_||p&&"Card Name"),l.$$.dirty&130&&s(2,o=$||p&&"Short card description")},[m,p,o,a,t,_,g,$,f,d,r]}class Ie extends Z{constructor(e){super();y(this,e,be,ve,x,{name:5,logo:6,description:7,link:0,fake:1})}}export{Ie as F};
//# sourceMappingURL=FicsitCard-06a17bf8.js.map
