import{_,o as l,c as m,p as d,n as p,e as f,u as y,s as $,q as c,w as v,l as w,v as h,a as k,h as C}from"./index.49fb8d57.js";const x="pa-pn";var A={article:x};const M={};function b(n,e){return l(),m("article",{class:p(n.$style.article)},[d(n.$slots,"default")],2)}const g={$style:A};var q=_(M,[["render",b],["__cssModules",g]]);function B(n){switch(n){default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}const P=f({props:{year:null,month:null,day:null,name:null},setup(n){const e=n,{t,locale:s}=y({inheritLocale:!0}),o=function(){return new Promise(async(a,u)=>{`${e.year}${e.month}${e.day}${e.name}`,a(B(`../../../../../data/${s.value}/news/${e.year}/${e.month}/${e.day}/${e.name}.md`))})},r=$(c(o));return v(s,a=>{r.value=c(o)}),(a,u)=>{const i=q;return l(),w(i,null,{default:h(()=>[k(C(r))]),_:1})}}});export{P as default};
