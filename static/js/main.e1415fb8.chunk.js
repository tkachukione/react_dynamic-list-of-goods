(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),s=n(3),i=n(4),u=n(6),l=n(5),d=function(t){var e=t.goods;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:t.color}},a.a.createElement("h3",null,t.name))}))))},f=function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))},m=(n(12),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.getGoods=function(){f().then((function(e){t.setState({goods:e})}))},t.getFiveFirstGoods=function(){f().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})).then((function(e){t.setState({goods:e})}))},t.getRedGoods=function(){f().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(e){t.setState({goods:e})}))},t}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("button",{type:"button",onClick:this.getGoods},"Load All goods"),a.a.createElement("button",{type:"button",onClick:this.getFiveFirstGoods},"Load 5 first goods"),a.a.createElement("button",{type:"button",onClick:this.getRedGoods},"Load red goods"),a.a.createElement(d,{goods:this.state.goods}))}}]),n}(a.a.Component));c.a.render(a.a.createElement(m,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e1415fb8.chunk.js.map