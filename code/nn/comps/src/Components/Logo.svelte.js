import{SvelteComponent as o,init as l,safe_not_equal as i,element as t,svg_element as e,space as r,attr as V,set_style as a,insert as s,append as c,noop as d,detach as p}from"../../node_modules/svelte/internal/index.mjs.js";function h(o){let l,i,h,H,n,g,f,C,u,L,M,b,v,m,Z,_;return{c(){l=t("div"),i=t("a"),h=e("svg"),H=e("g"),n=e("g"),g=e("path"),f=e("path"),C=e("path"),u=e("path"),L=e("g"),M=e("path"),b=e("defs"),v=e("clipPath"),m=e("rect"),Z=r(),_=t("h2"),_.innerHTML='MLU-EXPL<span id="ai" class="svelte-e42pgh">AI</span>N',V(g,"id","Vector"),V(g,"d","M90.6641 83.1836C96.8828 83.1836 101.941 78.1289 101.941 71.8906V71.8242C101.941 65.5898 96.8945 60.5312 90.6641 60.5312C84.4453 60.5312 79.3828 65.5898 79.3828 71.8242V71.8906C79.3828 78.1289 84.4336 83.1836 90.6641 83.1836Z"),V(g,"fill",o[1]),V(f,"id","Vector_2"),V(f,"d","M143.305 83.1836C149.523 83.1836 154.586 78.1289 154.586 71.8906V71.8242C154.586 65.5898 149.535 60.5312 143.305 60.5312C137.09 60.5312 132.027 65.5898 132.027 71.8242V71.8906C132.027 78.1289 137.078 83.1836 143.305 83.1836Z"),V(f,"fill",o[1]),V(C,"id","Vector_3"),V(C,"d","M163.586 159.402H173.609V122.641H163.586V159.402Z"),V(C,"fill",o[1]),V(u,"id","Vector_4"),V(u,"d","M60.3594 159.402H70.3867V122.641H60.3594V159.402Z"),V(u,"fill",o[1]),V(M,"id","Vector_5"),V(M,"d","M182.16 30.0781H51.8047V10.0234H182.16V30.0781ZM182.16 103.609H51.8047V40.1055H182.16V103.609ZM144.559 168.789H89.4062V113.641H144.559V168.789ZM0 0V10.0234H15.8789V46.7891H25.9023V10.0234H41.7812V113.641H79.3867V178.816H96.9297V215.578H106.957V178.816H127.016V215.578H137.039V178.816H154.586V113.641H192.188V10.0234H233.969V0"),V(M,"fill",o[1]),V(L,"id","Group"),V(H,"id","mlu_robot 1"),V(H,"clip-path","url(#clip0)"),V(m,"width","233.97"),V(m,"height","215.58"),V(m,"fill","black"),V(v,"id","clip0"),V(h,"width","30"),V(h,"height","30"),V(h,"viewBox","0 0 234 216"),V(_,"class","logo svelte-e42pgh"),V(i,"href","https://mlu-explain.github.io"),V(i,"class","svelte-e42pgh"),V(l,"id","intro-icon"),a(l,"--ai-color",o[0]),V(l,"class","svelte-e42pgh")},m(o,t){s(o,l,t),c(l,i),c(i,h),c(h,H),c(H,n),c(n,g),c(n,f),c(n,C),c(n,u),c(n,L),c(L,M),c(h,b),c(b,v),c(v,m),c(i,Z),c(i,_)},p(o,[i]){2&i&&V(g,"fill",o[1]),2&i&&V(f,"fill",o[1]),2&i&&V(C,"fill",o[1]),2&i&&V(u,"fill",o[1]),2&i&&V(M,"fill",o[1]),1&i&&a(l,"--ai-color",o[0])},i:d,o:d,d(o){o&&p(l)}}}function H(o,l,i){let{aiLogoColor:t="black"}=l,{robotLogoColor:e="black"}=l;return o.$$set=o=>{"aiLogoColor"in o&&i(0,t=o.aiLogoColor),"robotLogoColor"in o&&i(1,e=o.robotLogoColor)},[t,e]}class n extends o{constructor(o){super(),l(this,o,H,h,i,{aiLogoColor:0,robotLogoColor:1})}}export{n as default};
