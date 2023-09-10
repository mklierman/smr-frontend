import{S as pt,i as gt,d as S,s as ht,y as vt,I as bt,v as yt,F as Q,G as U,$ as Et,a0 as kt,Z as X,H as Z,ak as W,_ as wt,f as Y,b as C,e as T,K as B,J as F,L as xt,j as p,k as q,g as _,h as j,N,M as H,O as tt,m as O,R as x,n as y,Q as z,r as b,t as w,q as et,U as St,T as A,p as ot,X as st,u as I}from"../chunks/vendor.3a29e177.js";import{p as nt,q as it}from"../chunks/graphql.fef59309.js";import{T as rt}from"../chunks/Toast.ec886a8a.js";import{M as ct}from"../chunks/ModForm.65a48994.js";import{M as ft}from"../chunks/MetaDescriptors.a5ab94e2.js";const Mt=async({params:o})=>({...o}),It=Object.freeze(Object.defineProperty({__proto__:null,load:Mt},Symbol.toStringTag,{value:"Module"})),{console:at}=wt,R="src/routes/mod/[modId]/edit/+page.svelte";function D(o){let t,n;t=new ft({props:{description:"Editing mod "+o[1].data.mod.name,title:"Edit mod "+o[1].data.mod.name,image:o[1].data.mod.logo},$$inline:!0});const r={c:function(){F(t.$$.fragment)},l:function(e){H(t.$$.fragment,e)},m:function(e,s){z(t,e,s),n=!0},p:function(e,s){const f={};s&2&&(f.description="Editing mod "+e[1].data.mod.name),s&2&&(f.title="Edit mod "+e[1].data.mod.name),s&2&&(f.image=e[1].data.mod.logo),t.$set(f)},i:function(e){n||(b(t.$$.fragment,e),n=!0)},o:function(e){w(t.$$.fragment,e),n=!1},d:function(e){A(t,e)}};return S("SvelteRegisterBlock",{block:r,id:D.name,type:"if",source:"(50:2) {#if !$mod.fetching && !$mod.error && $mod.data.mod}",ctx:o}),r}function lt(o){let t,n;t=new ct({props:{onSubmit:o[5],initialValues:o[3],editing:!0,submitText:"Save"},$$inline:!0});const r={c:function(){F(t.$$.fragment)},l:function(e){H(t.$$.fragment,e)},m:function(e,s){z(t,e,s),n=!0},p:function(e,s){const f={};s&8&&(f.initialValues=e[3]),t.$set(f)},i:function(e){n||(b(t.$$.fragment,e),n=!0)},o:function(e){w(t.$$.fragment,e),n=!1},d:function(e){A(t,e)}};return S("SvelteRegisterBlock",{block:r,id:lt.name,type:"else",source:"(66:4) {:else}",ctx:o}),r}function dt(o){let t,n,r=o[1].error.message+"",i;const e={c:function(){t=T("p"),n=B("Oh no... "),i=B(r),this.h()},l:function(f){t=_(f,"P",{});var l=j(t);n=N(l,"Oh no... "),i=N(l,r),l.forEach(p),this.h()},h:function(){O(t,R,64,6,1767)},m:function(f,l){y(f,t,l),x(t,n),x(t,i)},p:function(f,l){l&2&&r!==(r=f[1].error.message+"")&&st(i,r)},i:I,o:I,d:function(f){f&&p(t)}};return S("SvelteRegisterBlock",{block:e,id:dt.name,type:"if",source:"(64:25) ",ctx:o}),e}function ut(o){let t,n;const r={c:function(){t=T("p"),n=B("Loading..."),this.h()},l:function(e){t=_(e,"P",{});var s=j(t);n=N(s,"Loading..."),s.forEach(p),this.h()},h:function(){O(t,R,62,6,1717)},m:function(e,s){y(e,t,s),x(t,n)},p:I,i:I,o:I,d:function(e){e&&p(t)}};return S("SvelteRegisterBlock",{block:r,id:ut.name,type:"if",source:"(62:4) {#if $mod.fetching}",ctx:o}),r}function mt(o){let t,n;const r={c:function(){t=T("span"),n=B(o[2]),this.h()},l:function(e){t=_(e,"SPAN",{});var s=j(t);n=N(s,o[2]),s.forEach(p),this.h()},h:function(){O(t,R,72,2,1961)},m:function(e,s){y(e,t,s),x(t,n)},p:function(e,s){s&4&&st(n,e[2])},d:function(e){e&&p(t)}};return S("SvelteRegisterBlock",{block:r,id:mt.name,type:"slot",source:"(72:0) <Toast bind:running={errorToast}>",ctx:o}),r}function L(o){let t,n,r,i,e,s,f,l,$,h,u,v,E,d=!o[1].fetching&&!o[1].error&&o[1].data.mod&&D(o);const V=[ut,dt,lt],c=[];function k(g,a){return g[1].fetching?0:g[1].error?1:2}l=k(o),$=c[l]=V[l](o);function $t(g){o[7](g)}let G={$$slots:{default:[mt]},$$scope:{ctx:o}};o[0]!==void 0&&(G.running=o[0]),u=new rt({props:G,$$inline:!0}),vt.push(()=>bt(u,"running",$t));const J={c:function(){d&&d.c(),t=Y(),n=C(),r=T("h1"),i=B("Edit Mod"),e=C(),s=T("div"),f=T("section"),$.c(),h=C(),F(u.$$.fragment),this.h()},l:function(a){const m=xt("svelte-q8g25b",document.head);d&&d.l(m),t=Y(),m.forEach(p),n=q(a),r=_(a,"H1",{class:!0});var M=j(r);i=N(M,"Edit Mod"),M.forEach(p),e=q(a),s=_(a,"DIV",{class:!0});var P=j(s);f=_(P,"SECTION",{});var K=j(f);$.l(K),K.forEach(p),P.forEach(p),h=q(a),H(u.$$.fragment,a),this.h()},h:function(){tt(r,"class","text-4xl my-4 font-bold"),O(r,R,57,0,1601),O(f,R,60,2,1677),tt(s,"class","card p-4"),O(s,R,59,0,1652)},m:function(a,m){d&&d.m(document.head,null),x(document.head,t),y(a,n,m),y(a,r,m),x(r,i),y(a,e,m),y(a,s,m),x(s,f),c[l].m(f,null),y(a,h,m),z(u,a,m),E=!0},p:function(a,[m]){!a[1].fetching&&!a[1].error&&a[1].data.mod?d?(d.p(a,m),m&2&&b(d,1)):(d=D(a),d.c(),b(d,1),d.m(t.parentNode,t)):d&&(ot(),w(d,1,1,()=>{d=null}),et());let M=l;l=k(a),l===M?c[l].p(a,m):(ot(),w(c[M],1,1,()=>{c[M]=null}),et(),$=c[l],$?$.p(a,m):($=c[l]=V[l](a),$.c()),b($,1),$.m(f,null));const P={};m&1028&&(P.$$scope={dirty:m,ctx:a}),!v&&m&1&&(v=!0,P.running=a[0],St(()=>v=!1)),u.$set(P)},i:function(a){E||(b(d),b($),b(u.$$.fragment,a),E=!0)},o:function(a){w(d),w($),w(u.$$.fragment,a),E=!1},d:function(a){d&&d.d(a),p(t),a&&p(n),a&&p(r),a&&p(e),a&&p(s),c[l].d(),a&&p(h),A(u,a)}};return S("SvelteRegisterBlock",{block:J,id:L.name,type:"component",source:"",ctx:o}),J}function Pt(o,t,n){let r,i,{$$slots:e={},$$scope:s}=t;yt("Page",e,[]);let{data:f}=t;const{modId:l}=f,$=Q();let h="",u=!1;const v=U({query:nt,client:$,variables:{mod:l}});Et(v,"mod"),kt(o,v,c=>n(1,i=c));const E=c=>{$.mutation(it,{modId:W(v).data.mod.id,mod:c}).toPromise().then(k=>{k.error?(console.error(k.error.message),n(2,h="Error editing mod: "+k.error.message),n(0,u=!0)):X(Z+"/mod/"+k.data.updateMod.id)})};o.$$.on_mount.push(function(){f===void 0&&!("data"in t||o.$$.bound[o.$$.props.data])&&at.warn("<Page> was created without expected prop 'data'")});const d=["data"];Object.keys(t).forEach(c=>{!~d.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&at.warn(`<Page> was created with unknown prop '${c}'`)});function V(c){u=c,n(0,u)}return o.$$set=c=>{"data"in c&&n(6,f=c.data)},o.$capture_state=()=>({getContextClient:Q,queryStore:U,EditModDocument:it,GetModDocument:nt,Toast:rt,goto:X,ModForm:ct,base:Z,MetaDescriptors:ft,get:W,data:f,modId:l,client:$,errorMessage:h,errorToast:u,mod:v,onSubmit:E,initialValues:r,$mod:i}),o.$inject_state=c=>{"data"in c&&n(6,f=c.data),"errorMessage"in c&&n(2,h=c.errorMessage),"errorToast"in c&&n(0,u=c.errorToast),"initialValues"in c&&n(3,r=c.initialValues)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),o.$$.update=()=>{o.$$.dirty&1&&(u||n(2,h="")),o.$$.dirty&2&&n(3,r=i.data?{...i.data.mod,logo:void 0}:void 0)},[u,i,h,r,v,E,f,V]}class Bt extends pt{constructor(t){super(t),gt(this,t,Pt,L,ht,{data:6}),S("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:L.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Bt as component,It as universal};
//# sourceMappingURL=16.c053cb58.js.map
