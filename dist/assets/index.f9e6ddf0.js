import{r as h,c as v,o as p,a as f,b as o,t as a,u as s,F as w,d as C,n as q,w as z,v as k,e as L}from"./vendor.eb3b172d.js";const P=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}};P();const S={class:"app"},U=o("h1",null,"Techival CapEscape Quiz",-1),N={key:0,class:"quiz"},Q={class:"quiz-info"},x={class:"question"},A={class:"score"},F={class:"options"},O=["for"],B=["id","name","value","disabled"],E={class:"bbox"},W=["disabled"],Y={key:1},D=o("h2",null,"You have finished the quiz!",-1),M={setup(_){const n=h([{question:"What does CPU stand for?",answer:0,options:["Central Processing Unit","Community Programming Utility","Common Popular Universe"],selected:null},{question:"Where was the world wide web invented?",answer:2,options:["United States","Germany","Switzerland"],selected:null},{question:"Who is the organizer of Techival?",answer:1,options:["Yahoo","Capgemini","Capricon"],selected:null}]),c=h(!1),i=h(0),t=v(()=>{let l=0;return n.value.map(r=>{r.selected!=null&&r.answer==r.selected&&l++}),l}),e=v(()=>{let l=n.value[i.value];return l.index=i.value,l}),d=l=>{n.value[i.value].selected=l.target.value,l.target.value=null},m=()=>{if(i.value<n.value.length-1){i.value++;return}c.value=!0},g=()=>{c.value=!1,i.value=0,n.value.map(l=>{l.selected=null})};return(l,r)=>(p(),f("main",S,[U,c.value?(p(),f("section",Y,[D,o("p",null,"Your score is "+a(s(t))+"/"+a(n.value.length),1),o("div",{class:"bbox"},[o("button",{onClick:g},"Restart")])])):(p(),f("section",N,[o("div",Q,[o("span",x,a(s(e).question),1),o("span",A,"Score "+a(s(t))+"/"+a(n.value.length),1)]),o("div",F,[(p(!0),f(w,null,C(s(e).options,(y,u)=>(p(),f("label",{for:"option"+u,class:q(`option ${s(e).selected==u?u==s(e).answer?"correct":"wrong":""} ${s(e).selected!=null&&u!=s(e).selected?"disabled":""}`)},[z(o("input",{type:"radio",id:"option"+u,name:s(e).index,value:u,"onUpdate:modelValue":r[0]||(r[0]=b=>s(e).selected=b),disabled:s(e).selected,onChange:d},null,40,B),[[k,s(e).selected]]),o("span",null,a(y),1)],10,O))),256)),o("div",E,[o("button",{onClick:m,disabled:!s(e).selected},a(s(e).index==n.value.length-1?"Finish":s(e).selected==null?"Select an option":"Next question"),9,W)])])]))]))}};L(M).mount("#app");
