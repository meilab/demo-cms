(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{mR2s:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("dI71"),l=a("q1tI"),r=a.n(l),s=a("7oih"),c=a("Wbzz"),m=a("I22s");function i(e){var t=e.data,a=t.allMarkdownRemark.edges,n=Object(l.useState)([]),s=n[0],i=n[1],o=Object(l.useState)(""),u=(o[0],o[1]);Object(l.useEffect)((function(){i(a)}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},r.a.createElement("div",{className:"level-item"},r.a.createElement("p",{className:"subtitle is-5"},r.a.createElement("strong",null,s.length)," 运动员")),r.a.createElement("div",{className:"level-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"text","aria-label":"Search",placeholder:"输入姓名或编号",onChange:function(e){var a=e.target.value,n=t.allMarkdownRemark.edges||[],l=""===a?n:n.filter((function(e){var t=e.node.frontmatter,n=t.description,l=t.name,r=t.number,s=t.tags;return n.toLowerCase().includes(a.toLowerCase())||l.toLowerCase().includes(a.toLowerCase())||r.toString().toLowerCase().includes(a.toLowerCase())||s&&s.join("").toLowerCase().includes(a.toLowerCase())}));i(l),u(a)}})),r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button"},"搜索")))))),r.a.createElement("div",{className:"columns is-multiline"},s&&s.map((function(e){var t=e.node;return r.a.createElement("div",{className:"is-parent column is-6",key:t.id},r.a.createElement("article",{className:"training-list-item tile is-child box notification "+(t.frontmatter.featuredpost?"is-featured":"")},r.a.createElement("header",null,t.frontmatter.featuredimage?r.a.createElement("div",{className:"featured-thumbnail"},r.a.createElement(m.a,{imageInfo:{image:t.frontmatter.featuredimage,alt:"featured image thumbnail for athlete "+t.frontmatter.name}})):null,r.a.createElement("p",{className:"post-meta"},r.a.createElement(c.a,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.name),r.a.createElement("span",null," • "),r.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date))),r.a.createElement("p",null,t.excerpt,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.a,{className:"button",to:t.fields.slug},"阅读更多 →"))))}))))}var o=function(){return r.a.createElement(c.b,{query:"1719503809",render:function(e,t){return r.a.createElement(i,{data:e,count:t})}})},u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url('http://xhimg.sports.cn/Image/200910/7-20091016250V35.jpg')"}},r.a.createElement("h1",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #f40, -0.5rem 0 0 #f40",backgroundColor:"#f40",color:"white",padding:"1rem"}},"瑜伽成就更好的自己")),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement(o,null)))))},t}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-athlete-index-js-783f831739ad90e819e2.js.map