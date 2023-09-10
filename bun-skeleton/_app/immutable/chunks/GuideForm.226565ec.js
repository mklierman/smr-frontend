import{S as se,i as ne,s as ie,d as C,a6 as Xt,v as oe,an as qt,$ as Ct,a0 as re,e as m,K as M,b as P,J as kt,g as f,h as g,N as j,j as u,k as _,M as Vt,m as p,O as $,n as it,R as i,a4 as W,Q as Tt,Y as Ft,aa as ae,X as q,a7 as ce,r as Pt,t as _t,T as Nt,a5 as le,u as N,x as ue}from"./vendor.3a29e177.js";import{o as me,s as At,V as ht,c as Ht,v as Jt,r as Kt}from"./forms.dd75ac7f.js";import{t as Qt}from"./forms.7054c8cd.js";import{m as Rt}from"./markdown.c113ec0d.js";const Gt=me({name:At().min(3).max(32),short_description:At().min(16).max(128),guide:At()});const d="src/lib/components/guides/GuideForm.svelte";function Yt(e){let t,s=(e[13]||"")+"",a;const r={c:function(){t=m("span"),a=M(s),this.h()},l:function(n){t=f(n,"SPAN",{class:!0});var l=g(t);a=j(l,s),l.forEach(u),this.h()},h:function(){$(t,"class","validation-message"),p(t,d,31,8,1144)},m:function(n,l){it(n,t,l),i(t,a)},p:function(n,l){l&8192&&s!==(s=(n[13]||"")+"")&&q(a,s)},d:function(n){n&&u(t)}};return C("SvelteRegisterBlock",{block:r,id:Yt.name,type:"slot",source:'(31:6) <ValidationMessage for=\\"name\\" let:messages={message}>',ctx:e}),r}function Zt(e){let t,s=(e[13]||"")+"",a;const r={c:function(){t=m("span"),a=M(s),this.h()},l:function(n){t=f(n,"SPAN",{class:!0});var l=g(t);a=j(l,s),l.forEach(u),this.h()},h:function(){$(t,"class","validation-message"),p(t,d,41,8,1553)},m:function(n,l){it(n,t,l),i(t,a)},p:function(n,l){l&8192&&s!==(s=(n[13]||"")+"")&&q(a,s)},d:function(n){n&&u(t)}};return C("SvelteRegisterBlock",{block:r,id:Zt.name,type:"slot",source:'(41:6) <ValidationMessage for=\\"short_description\\" let:messages={message}>',ctx:e}),r}function zt(e){let t,s=(e[13]||"")+"",a;const r={c:function(){t=m("span"),a=M(s),this.h()},l:function(n){t=f(n,"SPAN",{class:!0});var l=g(t);a=j(l,s),l.forEach(u),this.h()},h:function(){$(t,"class","validation-message"),p(t,d,52,10,2005)},m:function(n,l){it(n,t,l),i(t,a)},p:function(n,l){l&8192&&s!==(s=(n[13]||"")+"")&&q(a,s)},d:function(n){n&&u(t)}};return C("SvelteRegisterBlock",{block:r,id:zt.name,type:"slot",source:'(52:8) <ValidationMessage for=\\"guide\\" let:messages={message}>',ctx:e}),r}function Wt(e){const t={c:N,l:N,m:N,p:N,d:N};return C("SvelteRegisterBlock",{block:t,id:Wt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function te(e){let t,s=e[12]+"";const a={c:function(){t=m("div"),this.h()},l:function(o){t=f(o,"DIV",{class:!0});var n=g(t);n.forEach(u),this.h()},h:function(){$(t,"class","markdown-content right s-pSUceh_9Xnkb"),p(t,d,58,10,2266)},m:function(o,n){it(o,t,n),t.innerHTML=s},p:function(o,n){n&8&&s!==(s=o[12]+"")&&(t.innerHTML=s)},d:function(o){o&&u(t)}};return C("SvelteRegisterBlock",{block:a,id:te.name,type:"then",source:'(58:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:e}),a}function ee(e){const t={c:N,l:N,m:N,p:N,d:N};return C("SvelteRegisterBlock",{block:t,id:ee.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function Bt(e){let t,s,a,r,o,n=e[4]("entry.name")+"",l,tt,k,G,b,R,x,V,E,H=e[4]("entry.short-description")+"",Y,et,S,c,O,gt,B,I,D,Z,st=e[4]("guide")+"",ot,$t,T,vt,U,bt,A,J,nt=e[4]("preview")+"",rt,wt,xt,at,Et,z,X,ct,L,St,It;b=new ht({props:{for:"name",$$slots:{default:[Yt,({messages:v})=>({13:v}),({messages:v})=>v?8192:0]},$$scope:{ctx:e}},$$inline:!0}),O=new ht({props:{for:"short_description",$$slots:{default:[Zt,({messages:v})=>({13:v}),({messages:v})=>v?8192:0]},$$scope:{ctx:e}},$$inline:!0}),U=new ht({props:{for:"guide",$$slots:{default:[zt,({messages:v})=>({13:v}),({messages:v})=>v?8192:0]},$$scope:{ctx:e}},$$inline:!0});let y={ctx:e,current:null,token:null,hasCatch:!1,pending:ee,then:te,catch:Wt,value:12};Xt(at=Rt(e[3]),y);const Dt={c:function(){t=m("form"),s=m("div"),a=m("div"),r=m("label"),o=m("span"),l=M(n),tt=P(),k=m("input"),G=P(),kt(b.$$.fragment),R=P(),x=m("div"),V=m("label"),E=m("span"),Y=M(H),et=P(),S=m("input"),c=P(),kt(O.$$.fragment),gt=P(),B=m("div"),I=m("div"),D=m("label"),Z=m("span"),ot=M(st),$t=P(),T=m("textarea"),vt=P(),kt(U.$$.fragment),bt=P(),A=m("div"),J=m("span"),rt=M(nt),wt=M(":"),xt=P(),y.block.c(),Et=P(),z=m("div"),X=m("button"),ct=M(e[1]),this.h()},l:function(w){t=f(w,"FORM",{});var h=g(t);s=f(h,"DIV",{class:!0});var F=g(s);a=f(F,"DIV",{class:!0});var K=g(a);r=f(K,"LABEL",{class:!0});var Q=g(r);o=f(Q,"SPAN",{});var Lt=g(o);l=j(Lt,n),Lt.forEach(u),tt=_(Q),k=f(Q,"INPUT",{type:!0,class:!0}),Q.forEach(u),G=_(K),Vt(b.$$.fragment,K),K.forEach(u),R=_(F),x=f(F,"DIV",{class:!0});var lt=g(x);V=f(lt,"LABEL",{class:!0});var ut=g(V);E=f(ut,"SPAN",{});var Mt=g(E);Y=j(Mt,H),Mt.forEach(u),et=_(ut),S=f(ut,"INPUT",{type:!0,class:!0}),ut.forEach(u),c=_(lt),Vt(O.$$.fragment,lt),lt.forEach(u),gt=_(F),B=f(F,"DIV",{class:!0});var mt=g(B);I=f(mt,"DIV",{class:!0});var ft=g(I);D=f(ft,"LABEL",{class:!0});var pt=g(D);Z=f(pt,"SPAN",{});var jt=g(Z);ot=j(jt,st),jt.forEach(u),$t=_(pt),T=f(pt,"TEXTAREA",{class:!0,rows:!0}),g(T).forEach(u),pt.forEach(u),vt=_(ft),Vt(U.$$.fragment,ft),ft.forEach(u),bt=_(mt),A=f(mt,"DIV",{class:!0});var dt=g(A);J=f(dt,"SPAN",{});var yt=g(J);rt=j(yt,nt),wt=j(yt,":"),yt.forEach(u),xt=_(dt),y.block.l(dt),dt.forEach(u),mt.forEach(u),Et=_(F),z=f(F,"DIV",{});var Ot=g(z);X=f(Ot,"BUTTON",{class:!0,type:!0});var Ut=g(X);ct=j(Ut,e[1]),Ut.forEach(u),Ot.forEach(u),F.forEach(u),h.forEach(u),this.h()},h:function(){p(o,d,27,8,948),$(k,"type","text"),k.required=!0,$(k,"class","input p-2"),p(k,d,28,8,988),$(r,"class","label"),p(r,d,26,6,918),$(a,"class","grid grid-flow-row gap-2"),p(a,d,25,4,873),p(E,d,37,8,1318),$(S,"type","text"),S.required=!0,$(S,"class","input p-2"),p(S,d,38,8,1371),$(V,"class","label"),p(V,d,36,6,1288),$(x,"class","grid grid-flow-row gap-2"),p(x,d,35,4,1243),p(Z,d,48,10,1782),$(T,"class","vertical-textarea textarea p-2"),T.required=!0,$(T,"rows",10),p(T,d,49,10,1819),$(D,"class","label"),p(D,d,47,8,1750),$(I,"class","grid grid-flow-row gap-2 auto-rows-max"),p(I,d,46,6,1689),p(J,d,56,8,2170),$(A,"class","grid grid-flow-row gap-2 auto-rows-max"),p(A,d,55,6,2109),$(B,"class","grid gap-6 split s-pSUceh_9Xnkb"),p(B,d,45,4,1652),$(X,"class","btn variant-ghost-primary"),$(X,"type","submit"),p(X,d,64,6,2390),p(z,d,63,4,2378),$(s,"class","grid grid-flow-row gap-6"),p(s,d,24,2,830),p(t,d,23,0,812)},m:function(w,h){it(w,t,h),i(t,s),i(s,a),i(a,r),i(r,o),i(o,l),i(r,tt),i(r,k),W(k,e[2].name),i(a,G),Tt(b,a,null),i(s,R),i(s,x),i(x,V),i(V,E),i(E,Y),i(V,et),i(V,S),W(S,e[2].short_description),i(x,c),Tt(O,x,null),i(s,gt),i(s,B),i(B,I),i(I,D),i(D,Z),i(Z,ot),i(D,$t),i(D,T),W(T,e[2].guide),i(I,vt),Tt(U,I,null),i(B,bt),i(B,A),i(A,J),i(J,rt),i(J,wt),i(A,xt),y.block.m(A,y.anchor=null),y.mount=()=>A,y.anchor=null,i(s,Et),i(s,z),i(z,X),i(X,ct),L=!0,St||(It=[Ft(k,"input",e[9]),Ft(S,"input",e[10]),Ft(T,"input",e[11]),ae(e[5].call(null,t))],St=!0)},p:function(w,[h]){e=w,(!L||h&16)&&n!==(n=e[4]("entry.name")+"")&&q(l,n),h&4&&k.value!==e[2].name&&W(k,e[2].name);const F={};h&24576&&(F.$$scope={dirty:h,ctx:e}),b.$set(F),(!L||h&16)&&H!==(H=e[4]("entry.short-description")+"")&&q(Y,H),h&4&&S.value!==e[2].short_description&&W(S,e[2].short_description);const K={};h&24576&&(K.$$scope={dirty:h,ctx:e}),O.$set(K),(!L||h&16)&&st!==(st=e[4]("guide")+"")&&q(ot,st),h&4&&W(T,e[2].guide);const Q={};h&24576&&(Q.$$scope={dirty:h,ctx:e}),U.$set(Q),(!L||h&16)&&nt!==(nt=e[4]("preview")+"")&&q(rt,nt),y.ctx=e,h&8&&at!==(at=Rt(e[3]))&&Xt(at,y)||ce(y,e,h),(!L||h&2)&&q(ct,e[1])},i:function(w){L||(Pt(b.$$.fragment,w),Pt(O.$$.fragment,w),Pt(U.$$.fragment,w),L=!0)},o:function(w){_t(b.$$.fragment,w),_t(O.$$.fragment,w),_t(U.$$.fragment,w),L=!1},d:function(w){w&&u(t),Nt(b),Nt(O),Nt(U),y.block.d(),y.token=null,y=null,St=!1,le(It)}};return C("SvelteRegisterBlock",{block:Dt,id:Bt.name,type:"component",source:"",ctx:e}),Dt}function fe(e,t,s){let a,r,o,n=N,l=()=>(n(),n=ue(G,c=>s(4,o=c)),G);e.$$.on_destroy.push(()=>n());let{$$slots:tt={},$$scope:k}=t;oe("GuideForm",tt,[]);const{t:G}=qt();Ct(G,"t"),l();let{onSubmit:b}=t,{initialValues:R={name:"",guide:"",short_description:""}}=t,{submitText:x=o("entry.create")}=t;const{form:V,data:E}=Ht({initialValues:R,extend:[Jt({schema:Gt}),Kt],onSubmit:c=>b(Qt(c,Gt))});Ct(E,"data"),re(e,E,c=>s(2,r=c)),e.$$.on_mount.push(function(){b===void 0&&!("onSubmit"in t||e.$$.bound[e.$$.props.onSubmit])&&console.warn("<GuideForm> was created without expected prop 'onSubmit'")});const H=["onSubmit","initialValues","submitText"];Object.keys(t).forEach(c=>{!~H.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<GuideForm> was created with unknown prop '${c}'`)});function Y(){r.name=this.value,E.set(r)}function et(){r.short_description=this.value,E.set(r)}function S(){r.guide=this.value,E.set(r)}return e.$$set=c=>{"onSubmit"in c&&s(7,b=c.onSubmit),"initialValues"in c&&s(8,R=c.initialValues),"submitText"in c&&s(1,x=c.submitText)},e.$capture_state=()=>({createForm:Ht,validator:Jt,reporter:Kt,ValidationMessage:ht,guideSchema:Gt,trimNonSchema:Qt,markdown:Rt,getTranslate:qt,t:G,onSubmit:b,initialValues:R,submitText:x,form:V,data:E,preview:a,$data:r,$t:o}),e.$inject_state=c=>{"onSubmit"in c&&s(7,b=c.onSubmit),"initialValues"in c&&s(8,R=c.initialValues),"submitText"in c&&s(1,x=c.submitText),"preview"in c&&s(3,a=c.preview)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&4&&s(3,a=r.guide||"")},[G,x,r,a,o,V,E,b,R,Y,et,S]}class $e extends se{constructor(t){super(t),ne(this,t,fe,Bt,ie,{t:0,onSubmit:7,initialValues:8,submitText:1}),C("SvelteRegisterComponent",{component:this,tagName:"GuideForm",options:t,id:Bt.name})}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(t){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{$e as G};
//# sourceMappingURL=GuideForm.226565ec.js.map
