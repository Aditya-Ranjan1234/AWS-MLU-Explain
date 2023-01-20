import{SvelteComponent as e,init as t,safe_not_equal as n,element as a,space as i,text as s,attr as o,insert as r,append as l,action_destroyer as c,noop as m,detach as u,run_all as d,HtmlTag as h}from"../../node_modules/svelte/internal/index.mjs.js";import p from"../katexify.js";import{tooltip as f}from"../tooltip.js";function b(e){let t,n,b,g,w,x,y,v,_,k,T,q,C,L,j,I,M,B,H,S,A,F,W,z,O,R,D,E,G,J,K,N,P,Q,U,V,X,Y,Z,$,ee,te,ne,ae,ie,se,oe,re,le,ce,me,ue,de,he,pe,fe,be,ge,we,xe,ye,ve,_e,ke,Te,qe,Ce,Le,je,Ie,Me,Be,He,Se,Ae,Fe,We,ze,Oe,Re,De,Ee,Ge,Je,Ke,Ne,Pe,Qe,Ue,Ve=p("y",!1)+"",Xe=p("x_i",!1)+"",Ye=p("y",!1)+"",Ze=p("x_i",!1)+"",$e=p("y",!1)+"",et=p("x_1",!1)+"",tt=p("y",!1)+"",nt=p("x_1",!1)+"",at=p("x_2",!1)+"",it=p("y=\\beta_0 + \\beta_1x_1  + \\beta_2x_2 + ... + \\beta_px_p + \\epsilon",!0)+"",st=p("y",!1)+"",ot=p("x_i",!1)+"",rt=p("\\beta_i",!1)+"",lt=p("\\epsilon",!1)+"",ct=p("y",!1)+"",mt=p("\\hat{\\beta_i}",!1)+"",ut=p("\\hat{y}",!1)+"",dt=p("\\hat{y}=\\hat{\\beta_0} + \\hat{\\beta_1}x_1  + \\hat{\\beta_2}x_2 + ... + \\hat{\\beta_p}x_p  ",!0)+"",ht=p("x_i",!1)+"";return{c(){t=a("section"),n=a("p"),n.textContent="Linear Regression is a simple and powerful model for predicting a numeric\n    response from a set of one or more independent variables. This article will\n    focus mostly on how the method is used in machine learning, so we won't\n    cover common use cases like causal inference or experimental design. And\n    although it may seem like linear regression is overlooked in modern machine\n    learning's ever-increasing world of complex neural network architectures,\n    the algorithm is still widely used across a large number of domains because\n    it is effective, easy to interpret, and easy to extend. The key ideas in\n    linear regression are recycled everywhere, so understanding the algorithm is\n    a must-have for a strong foundation in machine learning.",b=i(),g=a("br"),w=i(),x=a("p"),y=a("span"),y.textContent="Let's Be More Specific",v=i(),_=a("br"),k=s("\n    Linear regression is a supervised algorithm"),T=a("sup"),q=a("span"),q.textContent="[ℹ]",C=s("\n    that learns to model a dependent variable, "),L=new h(!1),j=s(', as\n    a function of some independent variables (aka "features"), '),I=new h(!1),M=s(', by finding a line (or surface) that best "fits" the data. In general, we\n    assume '),B=new h(!1),H=s(" to be some number and each\n    "),S=new h(!1),A=s(" can be basically anything. For example: predicting\n    the price of a house using the number of rooms in that house ("),F=new h(!1),W=s(": price, "),z=new h(!1),O=s(": number of rooms) or predicting\n    weight from height and age ("),R=new h(!1),D=s(": weight, "),E=new h(!1),G=s(": height, "),J=new h(!1),K=s(": age).\n    "),N=a("br"),P=a("br"),Q=s("\n    In general, the equation for linear regression is"),U=i(),V=a("br"),X=i(),Y=a("p"),Z=i(),$=a("br"),ee=i(),te=a("p"),te.innerHTML="where: <br/>",ne=i(),ae=a("ul"),ie=a("li"),se=new h(!1),oe=s(": the dependent variable; the thing we are\n      trying to predict."),re=a("sup"),le=a("span"),le.textContent="[ℹ]",ce=i(),me=a("li"),ue=new h(!1),de=s(": the independent variables: the features\n      our model uses to model y."),he=a("sup"),pe=a("span"),pe.textContent="[ℹ]",fe=i(),be=a("li"),ge=new h(!1),we=s(': the coefficients (aka "weights") of\n      our regression model. These are the foundations of our model. They are\n      what our model "learns" during optimization.'),xe=a("sup"),ye=a("span"),ye.textContent="[ℹ]",ve=i(),_e=a("li"),ke=new h(!1),Te=s(": the irreducible error in our model.\n      A term that collects together all the unmodeled parts of our data."),qe=i(),Ce=a("br"),Le=i(),je=a("p"),Ie=s("Fitting a linear regression model is all about finding the set of\n    cofficients that best model "),Me=new h(!1),Be=s(" as a function of our\n    features. We may never know the true parameters for our model, but we can estimate\n    them (more on this later). Once we've estimated these coefficients, "),He=new h(!1),Se=s(", we predict future values, "),Ae=new h(!1),Fe=s(", as:"),We=i(),ze=a("br"),Oe=i(),Re=a("p"),De=i(),Ee=a("p"),Ge=s("So predicting future values (often called inference), is as simple as\n    plugging the values of our features "),Je=new h(!1),Ke=s(" into our equation!"),Ne=i(),Pe=a("br"),o(n,"class","body-text"),o(y,"class","bold"),o(q,"class","info-tooltip"),o(q,"title","Supervised algorithms learn to predict a specific value based on historical data."),L.a=j,I.a=M,B.a=H,S.a=A,F.a=W,z.a=O,R.a=D,E.a=G,J.a=K,o(x,"class","body-text"),o(Y,"class","body-text"),o(te,"class","body-text"),se.a=oe,o(le,"class","info-tooltip"),o(le,"title","If we are using the number of bathrooms to\n      predict housing price, housing price is the dependent variable."),o(ie,"class","svelte-1mpexqp"),ue.a=de,o(pe,"class","info-tooltip"),o(pe,"title"," If we are using the number of bathrooms to\n        predict housing price, the number of bathrooms is the independent variable."),o(me,"class","svelte-1mpexqp"),ge.a=we,o(ye,"class","info-tooltip"),o(ye,"title","The coefficient B<sub>0</sub> represents the\n      intercept of our model, and each other coefficient \n      B<sub>i</sub> (i > 0) is a slope defining how variable \n      x<sub>i</sub> contributes to the model. We discuss how to\n      interpret regression coefficients later in the article."),o(be,"class","svelte-1mpexqp"),ke.a=Te,o(_e,"class","svelte-1mpexqp"),o(ae,"class","body-text svelte-1mpexqp"),Me.a=Be,He.a=Se,Ae.a=Fe,o(je,"class","body-text"),o(Re,"class","body-text"),Je.a=Ke,o(Ee,"class","body-text")},m(e,a){r(e,t,a),l(t,n),l(t,b),l(t,g),l(t,w),l(t,x),l(x,y),l(x,v),l(x,_),l(x,k),l(x,T),l(T,q),l(x,C),L.m(Ve,x),l(x,j),I.m(Xe,x),l(x,M),B.m(Ye,x),l(x,H),S.m(Ze,x),l(x,A),F.m($e,x),l(x,W),z.m(et,x),l(x,O),R.m(tt,x),l(x,D),E.m(nt,x),l(x,G),J.m(at,x),l(x,K),l(x,N),l(x,P),l(x,Q),l(t,U),l(t,V),l(t,X),l(t,Y),Y.innerHTML=it,l(t,Z),l(t,$),l(t,ee),l(t,te),l(t,ne),l(t,ae),l(ae,ie),se.m(st,ie),l(ie,oe),l(ie,re),l(re,le),l(ae,ce),l(ae,me),ue.m(ot,me),l(me,de),l(me,he),l(he,pe),l(ae,fe),l(ae,be),ge.m(rt,be),l(be,we),l(be,xe),l(xe,ye),l(ae,ve),l(ae,_e),ke.m(lt,_e),l(_e,Te),l(t,qe),l(t,Ce),l(t,Le),l(t,je),l(je,Ie),Me.m(ct,je),l(je,Be),He.m(mt,je),l(je,Se),Ae.m(ut,je),l(je,Fe),l(t,We),l(t,ze),l(t,Oe),l(t,Re),Re.innerHTML=dt,l(t,De),l(t,Ee),l(Ee,Ge),Je.m(ht,Ee),l(Ee,Ke),l(t,Ne),l(t,Pe),Qe||(Ue=[c(f.call(null,q)),c(f.call(null,le)),c(f.call(null,pe)),c(f.call(null,ye))],Qe=!0)},p:m,i:m,o:m,d(e){e&&u(t),Qe=!1,d(Ue)}}}class g extends e{constructor(e){super(),t(this,e,null,b,n,{})}}export{g as default};
