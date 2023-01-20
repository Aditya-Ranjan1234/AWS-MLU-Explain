import{SvelteComponent as e,init as t,safe_not_equal as s,element as n,space as o,text as r,create_component as a,attr as i,insert as l,append as h,set_input_value as d,mount_component as c,listen as u,set_data as p,transition_in as f,transition_out as v,detach as m,destroy_component as w,run_all as b,component_subscribe as g,onMount as y,HtmlTag as x,set_store_value as $,to_number as q,binding_callbacks as L}from"../../node_modules/svelte/internal/index.mjs.js";import j from"../katexify.js";import k from"./Scatterplot.svelte.js";import{lineType as T,intercept as _,coeff as A,showRegressionLine as M,showResiduals as F,showHighlight as W,sqft as S}from"../store.js";import{format as H}from"../../node_modules/d3-format/src/defaultLocale.js";import I from"../../node_modules/d3-selection/src/selectAll.js";function O(e){let t,s,g,y,$,q,L,T,_,A,M,F,W,S,H,I,O,z,B,C,E,D,N,R,U,V,G,J,K,P,Q,X,Y,Z,ee,te,se,ne,oe,re,ae,ie,le,he,de,ce,ue,pe,fe,ve,me,we,be,ge,ye,xe,$e,qe,Le,je,ke,Te,_e,Ae,Me,Fe,We,Se,He,Ie,Oe,ze,Be,Ce,Ee,De,Ne,Re,Ue,Ve,Ge,Je,Ke,Pe,Qe,Xe,Ye,Ze,et,tt,st,nt,ot,rt=j("\\text{house-price} = \\hat{\\beta_1} * sqft + \\hat{\\beta_0}",!1)+"",at=j("\\text{house-price} = 0 * sqft + 290000",!1)+"",it=j("\\hat{\\beta_0}",!1)+"",lt=j("\\hat{\\beta_1}",!1)+"",ht=j("x_i",!1)+"",dt=j("sqft",!1)+"",ct=j("sqft",!1)+"",ut=j(`\\hat{y} = ${e[2]} * ${e[3]} ${e[1]}`,!1)+"",pt=j(`\\hat{y} =  ${Math.round(e[3]*e[2]+e[1],3)}`,!1)+"",ft=e[4](Math.round(e[3]*e[2]+e[1],3))+"";return Qe=new k({props:{}}),e[6](Qe),{c(){t=n("h2"),t.textContent="How It Works, Briefly",s=o(),g=n("p"),g.textContent="To make linear regression easier to digest, let's go through a quick,\n  high-level introduction of how it works. We'll scroll through the core\n  concepts of the algorithm at a high-level, and then delve into the details\n  thereafter:",y=o(),$=n("br"),q=o(),L=n("section"),T=n("div"),_=n("div"),A=n("div"),M=n("div"),F=n("p"),W=r("Let's fit a model to predict housing price ($) in San Diego, USA \n            using the size of the house (in square-footage):\n            "),S=n("br"),H=n("br"),I=o(),O=new x(!1),z=o(),B=n("br"),C=n("br"),E=r("\n            We'll start with a very simple model, predicting the price of each house\n            to be just the average house price in our dataset, ~$290,000, ignoring\n            the different sizes of each house:\n            "),D=n("br"),N=n("br"),R=o(),U=new x(!1),V=o(),G=n("div"),G.innerHTML='<div class="step-content svelte-ls8whe"><p class="svelte-ls8whe">Of course we know this model is bad - the model doesn&#39;t fit the data\n            well at all. But how can do quantify exactly <i>how</i> bad?\n            <br/><br/>\n            To evaluate our model&#39;s performance quantitatively, we plot the error\n            of each observation directly. These errors, or\n            <span class="bold">residuals</span>, measure the distance between\n            each observation and the predicted value for that observation. We&#39;ll\n            make use of these residuals later when we talk about evaluating\n            regression models, but we can clearly see that our model has a lot\n            of error.</p></div>',J=o(),K=n("div"),P=n("div"),Q=n("p"),X=r("The goal of linear regression is reducing this error such that we\n            find a line/surface that 'best' fits our data. For our simple\n            regression problem, that involves estimating the y-intercept and slope\n            of our model, "),Y=new x(!1),Z=r(" and "),ee=new x(!1),te=r(".\n            "),se=n("br"),ne=n("br"),oe=r("\n            For our specific problem, the best fit line is shown. There's still error,\n            sure, but the general pattern is captured well. As a result, we can be\n            reasonably confident that if we plug in new values of square-footage,\n            our predicted values of price would be reasonably accurate."),re=o(),ae=n("div"),ie=n("div"),le=n("p"),he=r("Once we've fit our model, predicting future values is super easy! We\n            just plug in any "),de=new x(!1),ce=r(" values into our equation!\n            "),ue=n("br"),pe=n("br"),fe=r("For our simple model, that means plugging in a value for\n            "),ve=new x(!1),me=r(" into our model:"),we=o(),be=n("br"),ge=o(),ye=n("div"),xe=n("p"),$e=new x(!1),qe=r(" Value: "),Le=r(e[3]),je=o(),ke=n("input"),Te=o(),_e=n("p"),Ae=n("br"),Me=o(),Fe=new x(!1),We=o(),Se=n("br"),He=o(),Ie=new x(!1),Oe=o(),ze=n("br"),Be=o(),Ce=n("br"),Ee=r("\n            Thus, our model predicts a house that is "),De=r(e[3]),Ne=r(" square-feet will cost\n            "),Re=r(ft),Ue=r("."),Ve=o(),Ge=n("div"),Je=o(),Ke=n("div"),Pe=n("div"),a(Qe.$$.fragment),Xe=o(),Ye=n("br"),Ze=n("br"),et=o(),tt=n("p"),tt.innerHTML="Now that we have a high-level idea of how linear regression works, let&#39;s\n    dive a bit deeper. The remainder of this article will cover how to evaluate\n    regression models, how to find the &quot;best&quot; model, how to interpret different\n    forms of regression models, and the assumptions underpinning correct usage\n    of regression models in statistical settings.\n    <br/><br/> Let&#39;s dive in!",i(t,"class","body-header"),i(g,"class","body-text"),O.a=z,U.a=null,i(F,"class","svelte-ls8whe"),i(M,"class","step-content svelte-ls8whe"),i(A,"class","step svelte-ls8whe"),i(A,"data-index","0"),i(G,"class","step svelte-ls8whe"),i(G,"data-index","1"),Y.a=Z,ee.a=te,i(Q,"class","svelte-ls8whe"),i(P,"class","step-content svelte-ls8whe"),i(K,"class","step svelte-ls8whe"),i(K,"data-index","2"),de.a=ce,ve.a=me,i(le,"class","svelte-ls8whe"),$e.a=qe,i(xe,"class","svelte-ls8whe"),i(ke,"type","range"),i(ke,"min","36"),i(ke,"max","775"),i(ke,"step","1"),i(ke,"class","slider"),i(ke,"id","myRange"),i(ye,"id","input-container"),Fe.a=We,Ie.a=Oe,i(_e,"class","svelte-ls8whe"),i(ie,"class","step-content svelte-ls8whe"),i(ae,"class","step svelte-ls8whe"),i(ae,"data-index","3"),i(Ge,"class","spacer svelte-ls8whe"),i(_,"class","steps-container svelte-ls8whe"),i(Pe,"class","chart-one svelte-ls8whe"),i(Ke,"class","charts-container svelte-ls8whe"),i(T,"class","scrolly-container svelte-ls8whe"),i(tt,"class","body-text"),i(L,"id","scrolly"),i(L,"class","svelte-ls8whe")},m(n,o){l(n,t,o),l(n,s,o),l(n,g,o),l(n,y,o),l(n,$,o),l(n,q,o),l(n,L,o),h(L,T),h(T,_),h(_,A),h(A,M),h(M,F),h(F,W),h(F,S),h(F,H),h(F,I),O.m(rt,F),h(F,z),h(F,B),h(F,C),h(F,E),h(F,D),h(F,N),h(F,R),U.m(at,F),h(_,V),h(_,G),h(_,J),h(_,K),h(K,P),h(P,Q),h(Q,X),Y.m(it,Q),h(Q,Z),ee.m(lt,Q),h(Q,te),h(Q,se),h(Q,ne),h(Q,oe),h(_,re),h(_,ae),h(ae,ie),h(ie,le),h(le,he),de.m(ht,le),h(le,ce),h(le,ue),h(le,pe),h(le,fe),ve.m(dt,le),h(le,me),h(ie,we),h(ie,be),h(ie,ge),h(ie,ye),h(ye,xe),$e.m(ct,xe),h(xe,qe),h(xe,Le),h(ye,je),h(ye,ke),d(ke,e[3]),h(ie,Te),h(ie,_e),h(_e,Ae),h(_e,Me),Fe.m(ut,_e),h(_e,We),h(_e,Se),h(_e,He),Ie.m(pt,_e),h(_e,Oe),h(_e,ze),h(_e,Be),h(_e,Ce),h(_e,Ee),h(_e,De),h(_e,Ne),h(_e,Re),h(_e,Ue),h(_,Ve),h(_,Ge),h(T,Je),h(T,Ke),h(Ke,Pe),c(Qe,Pe,null),h(L,Xe),h(L,Ye),h(L,Ze),h(L,et),h(L,tt),st=!0,nt||(ot=[u(ke,"change",e[5]),u(ke,"input",e[5])],nt=!0)},p(e,[t]){(!st||8&t)&&p(Le,e[3]),8&t&&d(ke,e[3]),(!st||14&t)&&ut!==(ut=j(`\\hat{y} = ${e[2]} * ${e[3]} ${e[1]}`,!1)+"")&&Fe.p(ut),(!st||14&t)&&pt!==(pt=j(`\\hat{y} =  ${Math.round(e[3]*e[2]+e[1],3)}`,!1)+"")&&Ie.p(pt),(!st||8&t)&&p(De,e[3]),(!st||14&t)&&ft!==(ft=e[4](Math.round(e[3]*e[2]+e[1],3))+"")&&p(Re,ft);Qe.$set({})},i(e){st||(f(Qe.$$.fragment,e),st=!0)},o(e){v(Qe.$$.fragment,e),st=!1},d(n){n&&m(t),n&&m(s),n&&m(g),n&&m(y),n&&m($),n&&m(q),n&&m(L),e[6](null),w(Qe),nt=!1,b(ot)}}}function z(e,t,s){let n,o,r,a,i,l,h;g(e,T,(e=>s(7,n=e))),g(e,_,(e=>s(1,o=e))),g(e,A,(e=>s(2,r=e))),g(e,M,(e=>s(8,a=e))),g(e,F,(e=>s(9,i=e))),g(e,W,(e=>s(10,l=e))),g(e,S,(e=>s(3,h=e)));const d=H("$,");let c;const u={0:()=>{c.hideAnnotationLines(),$(T,n="regressionLineFlat",n),$(M,a=!0,a),$(F,i=!1,i),$(A,r=0,r),$(_,o=293683,o)},1:()=>{$(T,n="regressionLineFlat",n),$(M,a=!0,a),$(F,i=!0,i)},2:()=>{c.hideAnnotationLines(),$(T,n="regressionLine",n),$(A,r=756.9,r),$(_,o=-27153.8,o),$(F,i=!0,i),$(M,a=!0,a),$(W,l=!1,l)},3:()=>{$(W,l=!0,l),c.showAnnotationLines(),$(F,i=!1,i),$(M,a=!0,a),$(T,n="regressionLine",n),$(A,r=756.9,r),$(_,o=-27153.8,o)},4:()=>{$(F,i=!1,i),$(M,a=!0,a),$(A,r=.097,r),$(_,o=-27153.8,o),$(T,n="regressionLineSqrt",n)},5:()=>{}};y((()=>{I(".step").nodes().forEach((e=>{p.observe(e)}))}));let p=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target.getAttribute("data-index");t in u&&function(e){e in u&&u[e]()}(t)}}))}),{threshold:.7});return[c,o,r,h,d,function(){h=q(this.value),S.set(h)},function(e){L[e?"unshift":"push"]((()=>{c=e,s(0,c)}))}]}class B extends e{constructor(e){super(),t(this,e,z,O,s,{})}}export{B as default};
