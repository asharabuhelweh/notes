(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),r=n(10),a=n.n(r),i=(n(17),n(2)),l=n(3),o=n(6),u=n(5),h=n(4),d=(n(18),n(19),n(0)),j=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("h1",{children:"RESTy"})})},b=n(8),O=n.n(b),f=n(12),p=n(11),x=(n(22),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).handleUrl=function(t){var e=t.target.value;s.setState({url:e})},s.handleClick=function(t){var e=s.state.url;s.setState({url:e})},s.handleMethod=function(t){var e=t.target.value;s.setState({method:e})},s.handleSubmit=function(){var t=Object(p.a)(O.a.mark((function t(e){var n,c,r,a,i,l;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=s.state.url,t.next=4,fetch("".concat(n));case 4:return c=t.sent,t.next=7,c.json();case 7:return r=t.sent,a=r.results,i=r.count,t.next=12,fetch(n).then((function(t){var e,n=Object(f.a)(t.headers.entries());try{for(n.s();!(e=n.n()).done;){var s=e.value;return'"'.concat(s[0],'" : "').concat(s[1],'"')}}catch(c){n.e(c)}finally{n.f()}}));case 12:return l=t.sent,t.t0=console,t.next=16,l;case 16:t.t1=t.sent,t.t0.log.call(t.t0,t.t1),s.props.handler(a,i,l);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s.state={url:"",method:""},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(d.jsx)("label",{htmlFor:"",children:"URL:"}),Object(d.jsx)("input",{id:"input",onChange:this.handleUrl}),Object(d.jsx)("button",{type:"submit",onClick:this.handleClick,children:"GO!"})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:this.handleMethod,id:"get",value:"Get",children:"Get"}),Object(d.jsx)("button",{onClick:this.handleMethod,id:"post",value:"Post",children:"Post"}),Object(d.jsx)("button",{onClick:this.handleMethod,id:"put",value:"Put",children:"Put"}),Object(d.jsx)("button",{onClick:this.handleMethod,id:"get",value:"Delete",children:"Delete"})]}),Object(d.jsx)("div",{className:"text",children:Object(d.jsxs)("h3",{children:[this.state.method," ",this.state.url]})})]})}}]),n}(c.a.Component)),m=(n(23),function(){return Object(d.jsx)("footer",{className:"footer",children:"\xa9 2018 Code Fellows"})}),v=n(9),k=n.n(v),y=(n(27),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsxs)("div",{className:"result",children:[Object(d.jsxs)("p",{children:["Count:  ",this.props.count]}),Object(d.jsxs)("p",{children:["Headers : ",Object(d.jsx)(k.a,{data:this.props.headers})]}),Object(d.jsxs)("p",{children:["Results : ",Object(d.jsx)(k.a,{data:this.props.results})," "]})]})})}}]),n}(c.a.Component)),C=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).state={results:[],count:0,headers:""},s.handleForm=s.handleForm.bind(Object(o.a)(s)),s}return Object(l.a)(n,[{key:"handleForm",value:function(t,e,n){this.setState({results:t,count:e,headers:n})}},{key:"render",value:function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(x,{handler:this.handleForm}),Object(d.jsx)(y,{results:this.state.results,count:this.state.count,headers:this.state.headers}),Object(d.jsx)(m,{})]})}}]),n}(c.a.Component);a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.76e1f232.chunk.js.map