import{h as k,o as t,c as a,u as l,F as u,j as v,f as h,n as m,a as o,t as _,_ as f}from"./app-bebbc25d.js";const y={class:"vp-project-panel"},g=["href"],j=["src"],x={class:"vp-project-name"},C={class:"vp-project-desc"},M=k({__name:"Mylink",props:{type:String,links:Object},setup(i){const n=i;let s;console.log(n.links),s=n.links;const p=r=>`project${r%9}`;return(r,d)=>(t(),a("div",y,[l(s).length>0?(t(!0),a(u,{key:0},v(l(s),(e,c)=>(t(),a("a",{key:c,class:m(["item vp-project-card",p(c)]),href:e.link,target:"_blank"},[o("img",{class:"vp-project-image",src:e.ico,alt:"",onerror:'this.onerror=null,this.src=this.srcset="/assets/avatar.webp"'},null,8,j),o("div",x,_(e.name),1),o("div",C,_(e.desc),1)],10,g))),128)):h("v-if",!0)]))}});const B=f(M,[["__scopeId","data-v-a38e63da"],["__file","Mylink.vue"]]);export{B as M};
