(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),o=n.n(s),r=n(4),c=n(5),a=n(7),u=n(6),i=n(0),d=n(1),p=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={pressedKey:"Nothing was pressed yet"},e.outputPresedKey=function(t){e.setState({pressedKey:"The last pressed key is ".concat(t.key)}),window.console.log(e.state.pressedKey)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){window.console.log(this.state.pressedKey),document.addEventListener("keyup",this.outputPresedKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.outputPresedKey)}},{key:"render",value:function(){return Object(d.jsx)("p",{children:this.state.pressedKey})}}]),n}(i.Component);n(13);o.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cb63087e.chunk.js.map