"use strict";(self.webpackChunkpodqaz=self.webpackChunkpodqaz||[]).push([[751],{9861:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(7294),n=a(6010),r=a(5999);const c=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a(833),m=a(5281),o=a(7452),g=a(3008);const u={tag:"tag_Nnez"};function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:u.tag},l.createElement(g.Z,e))))),l.createElement("hr",null))}function p(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))}var E=a(197);function h(e){let{tags:t}=e;const a=c();return l.createElement(s.FG,{className:(0,n.Z)(m.k.wrapper.docsPages,m.k.page.docsTagsListPage)},l.createElement(s.d,{title:a}),l.createElement(E.Z,{tag:"doc_tags_list"}),l.createElement(o.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(p,{tags:t}))))))}},3008:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(6010),r=a(9960);const c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&l.createElement("span",null,s))}}}]);