(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,s){t.exports=s(18)},16:function(t,e,s){},17:function(t,e,s){},18:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),i=s(3),c=s.n(i),u=(s(16),s(4)),r=s(5),o=s(8),l=s(6),h=s(1),m=s(9),b=s(7),d=s.n(b),k=(s(17),function(t){return a.a.createElement("div",null,a.a.createElement("div",{className:"break-buttons"},a.a.createElement("h1",null," Break Length "),a.a.createElement("button",{onClick:t.breakDec}," \u21d3 "),a.a.createElement("h2",null," ",t.break," "),a.a.createElement("button",{onClick:t.breakInc}," \u21d1 ")),a.a.createElement("div",{className:"session-buttons"},a.a.createElement("h1",null,"Session Length"),a.a.createElement("button",{onClick:t.decreaseFunc}," \u21d3 "),a.a.createElement("h2",null," ",t.buttonMinutes," "),a.a.createElement("button",{onClick:t.increaseFunc}," \u21d1 ")))}),p=function(t){return a.a.createElement("div",null,a.a.createElement("button",{onClick:t.startClick}," Start "),a.a.createElement("button",{onClick:t.pauseFunc}," Pause&Play "),a.a.createElement("button",{onClick:t.resetFunc}," Reset "))},v=function(t){function e(t){var s;return Object(u.a)(this,e),(s=Object(o.a)(this,Object(l.a)(e).call(this,t))).state={minutesZero:"",minutes:25,buttonMinutes:25,secondsZero:0,seconds:0,break:5,type:"SESSION",switch:!1,pause:!1},s.startClick=s.startClick.bind(Object(h.a)(s)),s.updateFunc=s.updateFunc.bind(Object(h.a)(s)),s.increaseFunc=s.increaseFunc.bind(Object(h.a)(s)),s.decreaseFunc=s.decreaseFunc.bind(Object(h.a)(s)),s.breakInc=s.breakInc.bind(Object(h.a)(s)),s.breakDec=s.breakDec.bind(Object(h.a)(s)),s.resetFunc=s.resetFunc.bind(Object(h.a)(s)),s.pauseFunc=s.pauseFunc.bind(Object(h.a)(s)),s}return Object(m.a)(e,t),Object(r.a)(e,[{key:"breakInc",value:function(){this.state.switch||this.state.break<60&&this.setState({break:this.state.break+1})}},{key:"breakDec",value:function(){this.state.switch||this.state.break>1&&this.setState({break:this.state.break-1})}},{key:"updateFunc",value:function(){this.setState({seconds:this.state.seconds-1}),this.state.seconds<0&&this.setState({secondsZero:"",seconds:59,minutes:this.state.minutes-1}),this.state.seconds<10&&this.setState({secondsZero:0}),this.state.minutes<10&&this.setState({minutesZero:0}),0==this.state.minutes&&0==this.state.seconds&&"SESSION"==this.state.type&&(this.setState({minutes:this.state.break,type:"BREAK"}),document.getElementById("audio").play()),0==this.state.minutes&&0==this.state.seconds&&"BREAK"==this.state.type&&this.setState({minutes:this.state.buttonMinutes,type:"SESSION"})}},{key:"startClick",value:function(){var t=this;this.state.switch||(this.setState({secondsZero:"",seconds:59,minutes:this.state.minutes-1,switch:!0}),this.interval=setInterval(function(){t.updateFunc()},1e3))}},{key:"increaseFunc",value:function(){this.state.switch||(this.state.buttonMinutes<60&&this.setState({minutes:this.state.minutes+1,buttonMinutes:this.state.buttonMinutes+1}),this.state.minutes<9?this.setState({minutesZero:0}):this.setState({minutesZero:""}))}},{key:"decreaseFunc",value:function(){this.state.switch||(this.state.buttonMinutes>1&&this.setState({minutes:this.state.minutes-1,buttonMinutes:this.state.buttonMinutes-1}),this.state.minutes<11&&(0==this.minutesZero?this.setState({minutesZero:""}):this.setState({minutesZero:0})))}},{key:"resetFunc",value:function(){clearInterval(this.interval),clearInterval(this.pauseInterval),this.setState({minutesZero:"",minutes:25,buttonMinutes:25,secondsZero:0,seconds:0,break:5,type:"SESSION",switch:!1})}},{key:"pauseFunc",value:function(){var t=this;this.state.switch&&(this.state.pause||(clearInterval(this.interval),clearInterval(this.pauseInterval),this.setState({pause:!0})),this.state.pause&&(this.pauseInterval=setInterval(function(){t.updateFunc()},1e3),this.setState({pause:!1})))}},{key:"render",value:function(){return a.a.createElement("div",{className:"home-container"},a.a.createElement("h1",null,a.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),"Pomodoro Clock"),a.a.createElement("audio",{id:"audio"}," ",a.a.createElement("source",{src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",type:"audio/mp3"})," "),a.a.createElement(k,{break:this.state.break,buttonMinutes:this.state.buttonMinutes,increaseFunc:this.increaseFunc,decreaseFunc:this.decreaseFunc,breakInc:this.breakInc,breakDec:this.breakDec}),a.a.createElement("div",{className:"timer-container"},a.a.createElement("h1",null,this.state.type),a.a.createElement("h1",null,this.state.minutesZero,this.state.minutes," : ",this.state.secondsZero,this.state.seconds)),a.a.createElement(p,{startClick:this.startClick,resetFunc:this.resetFunc,pauseFunc:this.pauseFunc}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,s){t.exports=s.p+"static/media/logo.ee7cd8ed.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.10dd60dd.chunk.js.map