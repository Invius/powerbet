(this["webpackJsonppower-bet-fe"]=this["webpackJsonppower-bet-fe"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);a(56).lookup(a(57).hostname(),(function(e,t,a){console.log("IP Address: "+t),t}));var n={forceDEV:!1,forcePath:!1,isDevNetwork:!1};n.APIServiceURL=!0===n.forceDEV?"http://localhost:9010":"https://powerbetdb.herokuapp.com",n.APIServiceURL=!0===n.isDevNetwork?"http://192.168.1.100/powerbetop":n.APIServiceURL,n.unityRoute=!0===n.forceDEV&&"/powerbet"!==document.location.pathname&&!0!==n.forcePath?"":"powerbet/",console.log(!0===n.forceDEV&&"/powerbet"!==document.location.pathname&&!0!==n.forcePath),console.log(n.isDevNetwork),t.default=n},25:function(e,t,a){e.exports=a.p+"static/media/fire.7ed32125.png"},26:function(e,t,a){e.exports=a.p+"static/media/me.92d20dd0.png"},27:function(e,t,a){e.exports=a(62)},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(24),r=a.n(o),i=(a(32),a(33),a(2)),l=a(3),c=a(1),u=a(4),m=a(5),h=a(12),d=a.n(h),p=(a(38),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={timeLeft:0,remainingPathColor:"green",pathStrokePercent:0},n.totalTime=0,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.parent.timerCallerComponent=this}},{key:"useTimer",value:function(e,t,a){var n=this;this.setTimeText(e,t),e>-1?setTimeout((function(){n.useTimer(e-1,!1,a)}),1e3):a()}},{key:"setTimeText",value:function(e,t){this.totalTime=t?e:this.totalTime,this.setState({timeLeft:e<0?0:e,pathStrokePercent:this.getTimeCirclePercent(e)})}},{key:"getTimeCirclePercent",value:function(e){var t=283*e;return t/=this.totalTime}},{key:"render",value:function(){return s.a.createElement("div",{className:"timer-position"},s.a.createElement("div",{className:"base-timer"},s.a.createElement("svg",{className:"base-timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("g",{className:"base-timer__circle"},s.a.createElement("circle",{className:"base-timer__path-elapsed",cx:"50",cy:"50",r:"45"}),s.a.createElement("path",{id:"base-timer-path-remaining",strokeDasharray:this.state.pathStrokePercent+" 283",className:"base-timer__path-remaining "+this.state.remainingPathColor,d:"M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"}))),s.a.createElement("span",{className:"timeleftLocation"},this.state.timeLeft)))}}]),a}(n.PureComponent)),v=a(6),g=a.n(v),b=a(7),f=a.n(b),E=a(8),y=a(10),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={userMoney:0},n.cookies=new E.a,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.renderAcountBalance();void 0!==this.props.parent.account&&(this.props.parent.account=this)}},{key:"renderAcountBalance",value:function(){var e=new FormData,t={IDSession:this.cookies.get("session"),user:this.cookies.get("user")};for(var a in t)e.append(a,t[a]);var n=this;f.a.post(y.default.APIServiceURL+"/user/money",e).then((function(e){console.log(e),n.setState({userMoney:e.data.money})})).catch((function(e){console.log("Error : "+e)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.textClass},s.a.createElement("div",null,this.props.name," ",s.a.createElement("br",null),this.state.userMoney))}}]),a}(n.Component),w=a(10),T="",N=!1,O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).unityContext=new h.UnityContext({loaderUrl:w.default.unityRoute+"PowerBetG/Build/PowerBetG.loader.js",dataUrl:w.default.unityRoute+"PowerBetG/Build/PowerBetG.data",frameworkUrl:w.default.unityRoute+"PowerBetG/Build/PowerBetG.framework.js",codeUrl:w.default.unityRoute+"PowerBetG/Build/PowerBetG.wasm"}),n.state={betMoney:0,betTeam:""},n.timerCallerComponent=null,n.isGameOver=!1,n.cookies=new E.a,n.teams=[n.props.teamName1,n.props.teamName2],T=n.unityContext,n.selectedTeam="",n.stage=1,n.account=null,n.callTimer=n.callTimer.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"callTimer",value:function(e){this.enableBet(),this.timerCallerComponent.useTimer(e,!0,this.disableBet)}},{key:"enableBet",value:function(){g()("#betForm").removeClass("betState"),g()("#betForm select").removeClass("betState")}},{key:"disableBet",value:function(){g()("#betForm").addClass("betState")}},{key:"componentDidMount",value:function(){var e=this;this.unityContext.on("callTest",(function(){console.log("React reacted..."),setTimeout((function(){console.log("Try communication Unity..."),console.log("this : "+T),T.send("Connector","FinishTestCall")}),2e3)})),this.unityContext.on("loaded",(function(){setTimeout((function(){console.log("Start game..."),!1===N&&(N=!0,T.send("Connector","SetupGame",e.props.team1+"/"+e.props.team2+"/"+e.teams[0]+"/"+e.teams[1]),e.callTimer(20))}),2e3);var t=document.querySelector('meta[name="viewport"]');t&&(t.content="initial-scale=0.4"),e.props.parent.unityDoneLoading()})),this.unityContext.on("feedbackWinning",(function(t){var a=t.split("_");if(console.log("Round: "+a[1]+"\n Team winning: "+a[0]+"\n Team Name: "+e.teams[a[0]-1]),console.log("Player won that round : "),console.log(e.selectedTeam===e.teams[a[0]-1]),null!==e.cookies.get("session")&&void 0!==e.cookies.get("session")&&""!==e.selectedTeam){e.setState({betTeam:"",betMoney:0});var n={IDSession:e.cookies.get("session"),money:e.selectedTeam===e.teams[a[0]-1]?.2:-1,stage:e.stage},s=new FormData;for(var o in n)s.append(o,n[o]);f.a.post(w.default.APIServiceURL+"/calculatebetstage",s).then((function(t){console.log(t),e.account.renderAcountBalance()})).catch((function(e){console.log("Error : "+e)}))}e.selectedTeam="",e.stage++,setTimeout((function(){!0!==e.isGameOver&&e.callTimer(15)}),10)})),this.unityContext.on("gameover",(function(){console.log("Game is over..."),e.isGameOver=!0,setTimeout((function(){e.props.parent.setState({contentPage:"games"})}),3e3)}))}},{key:"verifyNumeric",value:function(e){!0!==this.isFloat(parseFloat(e.target.value[e.target.value.length-1]))&&!0!==this.isInt(parseInt(e.target.value[e.target.value.length-1]))&&("."!==e.target.value[e.target.value.length-1]||e.target.value.split(".").length>2)?e.target.value=e.target.value.substr(0,e.target.value.length-1):"."===e.target.value[e.target.value.length-1]&&(e.target.value=e.target.value+"50")}},{key:"bet",value:function(){if(null!==this.cookies.get("session")&&void 0!==this.cookies.get("session")&&""!==g()("#betForm input").val().replace(" ","")){var e=g()("#betForm input").val(),t=g()("#betForm select").val();this.selectedTeam=t,g()("#betForm input").val(""),g()("#betForm select").addClass("betState"),console.log(t+" - "+e);this.setState({betTeam:t,betMoney:this.state.betMoney+parseFloat(e)});var a={IDSession:this.cookies.get("session"),money:e,stage:this.stage},n=new FormData;for(var s in a)n.append(s,a[s]);f.a.post(w.default.APIServiceURL+"/newbetgame",n).then((function(e){console.log(e)})).catch((function(e){console.log("Error : "+e)}))}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{id:"unityLocation"},s.a.createElement(d.a,{unityContext:this.unityContext})),s.a.createElement("div",{className:"accountMoneyBetPosition"},s.a.createElement(k,{name:"Your Funds",textClass:"account-balance-ingame",parent:this})),s.a.createElement("div",{className:""===this.state.betTeam?"betInfoVisibility betInfoPosition":"betInfoPosition"},this.state.betTeam,s.a.createElement("br",null),this.state.betMoney),s.a.createElement("div",{id:"betForm",className:"playSessionPosition betState"},s.a.createElement("div",{className:"betMenu-item inputLog"},s.a.createElement("input",{className:"password",type:"text",name:"",onChange:function(t){return e.verifyNumeric(t)}}),s.a.createElement("label",null,"Money To Bet")),s.a.createElement("div",{className:"betMenu-item"},s.a.createElement("label",{className:"betMenu-item-label"},"Team"),s.a.createElement("select",{className:"betMenu-item-select"},s.a.createElement("option",{value:this.teams[0]},this.teams[0]),s.a.createElement("option",{value:this.teams[1]},this.teams[1]))),s.a.createElement("div",{className:"betMenu-item"},s.a.createElement("div",{onClick:function(){return e.bet()},className:"buttonPlay "},s.a.createElement("span",null,"Bet")))),s.a.createElement(p,{parent:this}))}},{key:"isInt",value:function(e){return Number(e)===e&&e%1===0}},{key:"isFloat",value:function(e){return Number(e)===e&&e%1!==0}}]),a}(n.Component),S=a(10),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){function e(e){var t=window.innerWidth>window.innerHeight?.1*window.innerWidth+260:.4*window.innerWidth+260,a=.38*window.innerHeight;return e?t:a}console.log("Runs client side"),function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s="#unityLocation canvas";setTimeout((function(){null===g()(s)||void 0===g()(s)||null===g()(s).width()||void 0===g()(s).width()?e(t,a,n>12?0:n+1):g()(s).addClass("unityViewport")}),300)}(e(!0),e(!1));var t=new FormData,a={IDSession:n.cookies.get("session"),user:n.cookies.get("user"),game:n.props.gameName};for(var s in a)t.append(s,a[s]);f.a.post(S.default.APIServiceURL+"/signup/game",t).then((function(e){console.log(e),"string"==typeof e.data&&!1!==e.data.includes("User signed to game")||(n.canMakeTransations=!1)})).catch((function(e){console.log("Error : "+e),n.canMakeTransations=!1}))},n.state={},n.canMakeTransations=!0,n.cookies=new E.a,n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{value:"This component is to controll unity gameplay..."})}}]),a}(n.Component),j=a(10),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={showButtons:!0,showUserButtons:!1,userName:""},n.openMenu=n.openMenu.bind(Object(c.a)(n)),n.toDefaultMenu=n.toDefaultMenu.bind(Object(c.a)(n)),n.cookies=new E.a,n.logout=n.logout.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(this.props.pointerToAssign("header",this),null!==this.cookies.get("session")&&void 0!==this.cookies.get("session")){var t=new FormData,a={IDSession:this.cookies.get("session"),user:this.cookies.get("user")};for(var n in a)t.append(n,a[n]);var s=this;f.a.post(j.default.APIServiceURL+"/checklogin",t).then((function(t){console.log(t),"string"!=typeof t.data&&t.data.IDSession===e.cookies.get("session")?(s.setState({showButtons:!1,showUserButtons:!0,userName:s.cookies.get("user")}),s.props.parent.setState({contentPage:"games"})):(e.cookies.remove("session"),e.cookies.remove("user"))})).catch((function(e){console.log("Error : "+e)}))}else this.cookies.remove("session"),this.cookies.remove("user")}},{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("h1",{id:"mainHeaderTitle"},"Power Bet"),this.renderButtons(this.state.showButtons),this.renderUserButtons(this.state.showUserButtons))}},{key:"renderButtons",value:function(e){var t=this;return e?s.a.createElement("div",{id:"userIntialInput"},s.a.createElement("button",{onClick:function(){return t.openMenu("login")},id:"userLogin",className:"mainButton"},"Login"),s.a.createElement("button",{onClick:function(){return t.openMenu("sign")},id:"userSignIn",className:"mainButton"},"Sign In")):s.a.createElement("div",null)}},{key:"renderUserButtons",value:function(e){var t=this;return e?s.a.createElement("div",{id:"userIntialInput"},s.a.createElement("div",{id:"userTag"},this.state.userName),s.a.createElement("button",{onClick:function(){return t.openMenu("account")},id:"userLogin",className:"mainButton"},"Account"),s.a.createElement("button",{onClick:function(){return t.logout()},id:"userSignIn",className:"mainButton"},"Logout")):s.a.createElement("div",null)}},{key:"openMenu",value:function(e){this.setState({showButtons:!1,showUserButtons:!1}),this.props.changeMenu(e)}},{key:"logout",value:function(){var e=new FormData,t={IDSession:this.cookies.get("session"),user:this.cookies.get("user")};for(var a in t)e.append(a,t[a]);var n=this;f.a.post(j.default.APIServiceURL+"/logout",e).then((function(e){console.log(e),"string"==typeof e.data&&e.data.includes("Session removed")?n.props.parent.callAlert("normal","Logout Success!"):n.props.parent.callAlert("warning","Logout Problem!")})).catch((function(e){console.log("Error : "+e)})),this.cookies.remove("session"),this.cookies.remove("user"),this.setState({showButtons:!0,showUserButtons:!1}),this.props.parent.setState({contentPage:"logo"})}},{key:"toDefaultMenu",value:function(){this.props.changeMenu("")}}]),a}(n.Component),A=a(13),B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"title"},this.props.title)}}]),a}(n.Component),G=a(10),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n.assignForClose=n.assignForClose.bind(Object(c.a)(n)),n.closeThisMenu=n.closeThisMenu.bind(Object(c.a)(n)),n.showHeaderButtons=n.showHeaderButtons.bind(Object(c.a)(n)),n.tryToLogin=n.tryToLogin.bind(Object(c.a)(n)),n.headerThis=null,n.cookies=new E.a,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.pointerToAssign("aboveMenu",this)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"aboveWindow",className:"logIntoService combMoveFadeDown"},s.a.createElement(B,{title:"Login"}),s.a.createElement("form",{autoComplete:"new-password"},s.a.createElement("div",{className:"inputLog"},s.a.createElement("input",{className:"userMail",type:"text",name:"",required:""}),s.a.createElement("label",null,"Username Or Email")),s.a.createElement("div",{className:"inputLog"},s.a.createElement("input",{className:"password",type:"password",name:"",required:""}),s.a.createElement("label",null,"Password")),s.a.createElement("button",{type:"button",onClick:function(){return e.tryToLogin()},id:"loginProcess",className:"mainButton"},"Login"),s.a.createElement("div",{onClick:function(){return e.closeThisMenu(!0)},className:"close"})))}},{key:"tryToLogin",value:function(){var e=this,t=g()("#aboveWindow input.userMail").val(),a=g()("#aboveWindow input.password").val();if(""!==t.replaceAll(" ","")&&""!==a.replaceAll(" ","")){var n,s=t.includes("@")&&t.includes(".")?"email":"user",o=(n={},Object(A.a)(n,s,t),Object(A.a)(n,"password",a),n),r=new FormData;for(var i in o)r.append(i,o[i]);var l=this;f.a.post(G.default.APIServiceURL+"/login",r).then((function(a){console.log(a),"string"==typeof a.data&&a.data.includes("Login is not valid")?l.props.parent.callAlert("warning","Login Failed!"):"string"==typeof a.data.IDSession?(l.props.parent.callAlert("normal","Login Success!"),e.cookies.set("session",a.data.IDSession),e.cookies.set("user",t),console.log(e.cookies.get("session")),l.closeThisMenu(!1),l.props.parent.setState({contentPage:"games"})):l.props.parent.callAlert("warning","Login Went Wrong!")})).catch((function(e){console.log("Error : "+e),l.props.parent.callAlert("warning","Login or Network Failed!")}))}else this.props.parent.callAlert("warning","Not All Fields Are Filled!")}},{key:"assignForClose",value:function(e){this.headerThis=e}},{key:"showHeaderButtons",value:function(e){e?this.headerThis.setState({showButtons:!0}):this.headerThis.setState({showUserButtons:!0,userName:this.cookies.get("user")}),this.headerThis.toDefaultMenu()}},{key:"closeThisMenu",value:function(e){var t=this;g()("#aboveWindow").removeClass("combMoveFadeDown"),g()("#aboveWindow").addClass("combMoveFadeUp"),setTimeout((function(){t.showHeaderButtons(e)}),550)}}]),a}(n.Component),D=a(10),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n.assignForClose=n.assignForClose.bind(Object(c.a)(n)),n.closeThisMenu=n.closeThisMenu.bind(Object(c.a)(n)),n.showHeaderButtons=n.showHeaderButtons.bind(Object(c.a)(n)),n.headerThis=null,n.trySignUp=n.trySignUp.bind(Object(c.a)(n)),n.cookies=new E.a,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.pointerToAssign("aboveMenu",this)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"aboveWindow",className:"logIntoService combMoveFadeDown"},s.a.createElement(B,{title:"Sign"}),s.a.createElement("form",null,s.a.createElement("div",{className:"inputLog"},s.a.createElement("input",{className:"user",type:"text",name:"",required:"",autoComplete:"off"}),s.a.createElement("label",null,"Username")),s.a.createElement("div",{className:"inputLog"},s.a.createElement("input",{className:"mail",type:"text",name:"",required:"",autoComplete:"new-password"}),s.a.createElement("label",null,"Email")),s.a.createElement("div",{className:"inputLog"},s.a.createElement("input",{className:"password",type:"password",name:"",required:"",autoComplete:"new-password"}),s.a.createElement("label",null,"Password")),s.a.createElement("button",{onClick:this.trySignUp,type:"button",id:"signInProcess",className:"mainButton"},"Sign In"),s.a.createElement("div",{onClick:function(){return e.closeThisMenu(!0)},className:"close"})))}},{key:"trySignUp",value:function(){var e=g()("#aboveWindow input.mail").val(),t=g()("#aboveWindow input.user").val(),a=g()("#aboveWindow input.password").val(),n={user:t,email:e,password:a},s=new FormData;for(var o in n)s.append(o,n[o]);!1===t.includes("@")&&!1===t.includes(".")&&!1===t.includes('"')&&!1===t.includes("'")?!1===e.includes('"')&&!1===e.includes("'")?!0===e.includes("@")&&!0===e.includes(".")?!1===a.includes('"')&&!1===a.includes("'")?this.tryAPISignUp(s,this,t):this.props.parent.callAlert("warning","Password has unsuported symbols:\n \" '"):this.props.parent.callAlert("warning","Email is invalid"):this.props.parent.callAlert("warning","Email has one of:\n \" '"):this.props.parent.callAlert("warning","User name has one of:\n. @ \" '")}},{key:"tryAPISignUp",value:function(e,t,a){f.a.post(D.default.APIServiceURL+"/signup",e).then((function(e){if(console.log(e),"string"==typeof e.data&&e.data.includes("User already exists"))t.props.parent.callAlert("warning","User Already Exists!");else if("string"==typeof e.data.IDSession){t.props.parent.callAlert("normal","Sign Success!");var n=new E.a;n.set("session",e.data.IDSession),n.set("user",a),console.log(n.get("session")),t.closeThisMenu(!1),t.props.parent.setState({contentPage:"games"})}else t.props.parent.callAlert("warning","Someting went wrong on sign!")})).catch((function(e){console.log("Error : "+e),t.props.parent.callAlert("warning","Sign or Network Failed!")}))}},{key:"assignForClose",value:function(e){this.headerThis=e}},{key:"showHeaderButtons",value:function(e){e?this.headerThis.setState({showButtons:!0}):this.headerThis.setState({showUserButtons:!0,userName:this.cookies.get("user")}),this.headerThis.toDefaultMenu()}},{key:"closeThisMenu",value:function(e){var t=this;g()("#aboveWindow").removeClass("combMoveFadeDown"),g()("#aboveWindow").addClass("combMoveFadeUp"),setTimeout((function(){t.showHeaderButtons(e)}),550)}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={styleClasses:"alert fadeinShake "+n.props.alertColor},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:this.state.styleClasses},this.props.alertMessage)}}]),a}(n.Component),L=a(25),x=a.n(L),U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"openGame",value:function(e,t,a,n,s){console.log("click works"),this.props.parent.setupGame(e,t,a,n,s)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"gridGames-item"},this.props.team1," ",s.a.createElement("br",null)," vs ",s.a.createElement("br",null),this.props.team2,s.a.createElement("div",{onClick:function(){return e.openGame(e.props.team1value,e.props.team2value,e.props.team1,e.props.team2,e.props.gameName)},className:"buttonPlay betPosition"},s.a.createElement("span",null,"Bet")))}}]),a}(n.Component),R=a(10),W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={games:[],userMoney:0},n.teams={Exortia:1,Memorum:2,Bilan:3,Karkatsu:4,Melogan:5,Xartam:6,Calug:7,Pirur:8,Healyb:9,Varvaro:10},n.games=[],n.gamesName=[],n.renderGridItems=n.renderGridItems.bind(Object(c.a)(n)),n.cookies=new E.a,n}return Object(l.a)(a,[{key:"renderGridItems",value:function(){var e=this;f.a.get(R.default.APIServiceURL+"/games").then((function(t){console.log(t),Object.entries(t.data.games).map((function(t){e.games.push(t[1]),e.gamesName.push(t[0])})),console.log(e.games),e.setState({games:e.games})})).catch((function(e){console.log("Error : "+e)}))}},{key:"componentDidMount",value:function(){this.renderGridItems();var e=document.querySelector('meta[name="viewport"]');e&&(e.content="initial-scale=0.5")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(k,{name:"Account Balance",textClass:"account-balance",parent:this}),s.a.createElement("div",{className:"gridGames"},this.state.games.map((function(t,a){return s.a.createElement(U,{gameName:e.gamesName[a],parent:e.props.parent,key:a,team1:t.team1,team2:t.team2,team1value:e.teams[t.team1],team2value:e.teams[t.team2]})}))))}}]),a}(n.Component),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n.gameClicked=n.gameClicked.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.team1),s.a.createElement("td",null,this.props.team2),s.a.createElement("td",null,this.props.money),s.a.createElement("td",null,s.a.createElement("input",{type:"button",onClick:this.gameClicked})))}},{key:"gameClicked",value:function(){this.props.parent.changeDisplay(!1,this.props.gameName)}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"accountInfoWinGames"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Team 1"),s.a.createElement("th",null,"Team 2"),s.a.createElement("th",null,"Money"))),s.a.createElement("tbody",null,Object.keys(this.props.games).map((function(t,a){return s.a.createElement(H,{parent:e.props.parent,key:a,team1:e.props.games[t].team1,team2:e.props.games[t].team2,money:e.props.games[t].moneyEarned,gameName:t})})))))}}]),a}(n.Component),_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n.returnToGamesInfo=n.returnToGamesInfo.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.money),s.a.createElement("td",null,this.props.stage),s.a.createElement("td",null,s.a.createElement("input",{type:"button",onClick:this.returnToGamesInfo})))}},{key:"returnToGamesInfo",value:function(){this.props.parent.changeDisplay(!0,this.props.gameName)}}]),a}(n.Component),V=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"accountInfoWinGames"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Money"),s.a.createElement("th",null,"Round"))),s.a.createElement("tbody",null,Object.keys(this.props.bets).map((function(t){return s.a.createElement(_,{parent:e.props.parent,key:t,stage:e.props.bets[t].stage,money:e.props.bets[t].money})})))))}}]),a}(n.Component),J=a(10),K=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={games:{},betsForGame:[],userSettings:{},displayGames:!0},n.assignForClose=n.assignForClose.bind(Object(c.a)(n)),n.closeThisMenu=n.closeThisMenu.bind(Object(c.a)(n)),n.cookies=new E.a,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.pointerToAssign("aboveMenu",this);var e={IDSession:this.cookies.get("session")},t=new FormData;for(var a in e)t.append(a,e[a]);var n=this;f.a.post(J.default.APIServiceURL+"/user/info",t).then((function(e){console.log(e),n.setState({games:e.data.games,userSettings:e.data.userSettings})})).catch((function(e){console.log("Error : "+e),n.props.parent.callAlert("warning","Data or Network Failed!")}))}},{key:"assignForClose",value:function(e){this.headerThis=e}},{key:"showHeaderButtons",value:function(e){e?this.headerThis.setState({showButtons:!0}):this.headerThis.setState({showUserButtons:!0,userName:this.cookies.get("user")}),this.headerThis.toDefaultMenu()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"aboveWindow",className:"logIntoService combMoveFadeDown"},s.a.createElement(B,{title:"Account Info"}),s.a.createElement("div",{className:"accountInfoWinInfo"},void 0!==this.state.userSettings.user?this.state.userSettings.user:"",s.a.createElement("br",null),void 0!==this.state.userSettings.email?this.state.userSettings.email:"",s.a.createElement("br",null),void 0!==this.state.userSettings.money?this.state.userSettings.money:""),this.renderGamesOrBets(this.state.displayGames),s.a.createElement("div",{onClick:function(){return e.closeThisMenu(!1)},className:"close"}))}},{key:"renderGamesOrBets",value:function(e){return e?s.a.createElement(q,{games:this.state.games,parent:this}):s.a.createElement(V,{bets:this.state.betsForGame,parent:this})}},{key:"changeDisplay",value:function(e,t){if(!1===e){var a={IDSession:this.cookies.get("session"),game:t},n=new FormData;for(var s in a)n.append(s,a[s]);var o=this;f.a.post(J.default.APIServiceURL+"/user/game/info",n).then((function(t){console.log(t),o.setState({betsForGame:t.data.bets,displayGames:e})})).catch((function(e){console.log("Error : "+e),o.props.parent.callAlert("warning","Data or Network Failed!")}))}else this.setState({displayGames:e})}},{key:"closeThisMenu",value:function(e){var t=this;g()("#aboveWindow").removeClass("combMoveFadeDown"),g()("#aboveWindow").addClass("combMoveFadeUp"),setTimeout((function(){t.showHeaderButtons(e)}),550)}}]),a}(n.Component),Q=a(26),X=a.n(Q),Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n.closeThisMenu=n.closeThisMenu.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"serviceBox"},s.a.createElement("h3",{className:"title"},"Credits"),s.a.createElement("img",{src:X.a,alt:""}),s.a.createElement("span",{className:"description"},s.a.createElement("h5",null,"Author:")," Marco Ant\xf3nio Sim\xf5es Fernandes",s.a.createElement("br",null),s.a.createElement("h5",null,"Version 1:")," 22-09-2020",s.a.createElement("br",null),s.a.createElement("h5",null,"Last Updated Date:")," 8-11-2020",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h1",null,"Tecnologies:"),s.a.createElement("h3",null,"\u2003Game Simulation : "),s.a.createElement("h5",null,"\u2003\u2003Unity"),s.a.createElement("h3",null,"\u2003Backend:"),s.a.createElement("h5",null,"\u2003\u2003-Node"),s.a.createElement("h6",null,"\u2003\u2003\u2003-Libs"),"\u2003\u2003\u2003\u2003http",s.a.createElement("br",null),"\u2003\u2003\u2003\u2003url",s.a.createElement("br",null),"\u2003\u2003\u2003\u2003string_decoder",s.a.createElement("br",null),"\u2003\u2003\u2003\u2003util",s.a.createElement("br",null),"\u2003\u2003\u2003\u2003formidable",s.a.createElement("br",null),"\u2003\u2003\u2003\u2003mysql",s.a.createElement("br",null),s.a.createElement("h3",null,"\u2003Frontend:"),s.a.createElement("h5",null,"\u2003\u2003-React"),s.a.createElement("h6",null,"\u2003\u2003\u2003-Libs"),"\u2003\u2003\u2003\u2003jquery",s.a.createElement("br",null),"\u2003\u2003\u2003\u2003axios",s.a.createElement("br",null),"\u2003\u2003\u2003\u2003cors",s.a.createElement("br",null),"\u2003\u2003\u2003\u2003react-unity-webgl",s.a.createElement("br",null),"\u2003\u2003\u2003\u2003universal-cookie",s.a.createElement("br",null),s.a.createElement("h3",null,"\u2003Database Server:"),s.a.createElement("h5",null,"\u2003\u2003-MySQL")),s.a.createElement("div",{className:"service-icon"},s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-globe"}))),s.a.createElement("div",{onClick:function(){return e.closeThisMenu(!1)},className:"close "})))}},{key:"closeThisMenu",value:function(){this.props.parent.changeWebAppOrCredits(!0)}}]),a}(n.Component),$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={aboveMenu:"",messageForAlert:"test alert",canRenderAlert:!1,colorForAlert:"alert-message-color",contentPage:"logo",team1NextGame:1,team2NextGame:2,nameTeam1NextGame:"",nameTeam2NextGame:"",nextGameName:"null",isWebApp:!0,unityLoading:!1},n.callAboveMenu=n.callAboveMenu.bind(Object(c.a)(n)),n.pointerAssign=n.pointerAssign.bind(Object(c.a)(n)),n.verifyStatePointer=n.verifyStatePointer.bind(Object(c.a)(n)),n.callAlert=n.callAlert.bind(Object(c.a)(n)),n.mainContentRender=n.mainContentRender.bind(Object(c.a)(n)),n.hearderThis=null,n.aboveMenuThis=null,n.alertTimeout=null,n.setupGame=n.setupGame.bind(Object(c.a)(n)),n.creditsClicked=n.creditsClicked.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.mainContentRender();var e=document.querySelector('meta[name="viewport"]');e&&(e.content="initial-scale=0.5")}},{key:"render",value:function(){return s.a.createElement("div",null,this.webappOrCredits(this.state.isWebApp))}},{key:"webappOrCredits",value:function(e){return e?s.a.createElement("div",null,s.a.createElement(M,{changeMenu:this.callAboveMenu,pointerToAssign:this.pointerAssign,parent:this}),this.renderAboveWindow(this.state.aboveMenu),this.mainContentRender(this.state.contentPage),s.a.createElement("img",{className:"logo",src:x.a,alt:"Logo"}),this.renderAlert(this.state.canRenderAlert,this.state.colorForAlert,this.state.messageForAlert),s.a.createElement("footer",{className:"fixed-footer"},s.a.createElement("a",{href:"#0",onClick:this.creditsClicked},"Credits"))):s.a.createElement(Y,{parent:this})}},{key:"creditsClicked",value:function(){this.changeWebAppOrCredits(!1)}},{key:"changeWebAppOrCredits",value:function(e){this.setState({isWebApp:e})}},{key:"mainContentRender",value:function(e){switch(e){case"logo":return s.a.createElement("div",null);case"games":return s.a.createElement("div",null,s.a.createElement(W,{parent:this}));case"newGame":return s.a.createElement("div",null,s.a.createElement("p",{className:"unity-loading",hidden:!1===this.state.unityLoading},"Loading...",s.a.createElement("div",{class:"loader"})),s.a.createElement(C,{parent:this,team1:this.state.team1NextGame,team2:this.state.team2NextGame,teamName1:this.state.nameTeam1NextGame,teamName2:this.state.nameTeam2NextGame,gameName:this.state.nextGameName}),s.a.createElement(O,{parent:this,team1:this.state.team1NextGame,team2:this.state.team2NextGame,teamName1:this.state.nameTeam1NextGame,teamName2:this.state.nameTeam2NextGame,gameName:this.state.nextGameName}));default:return s.a.createElement("div",null)}}},{key:"renderAboveWindow",value:function(e){switch(e){case"":return s.a.createElement("div",null);case"login":return s.a.createElement(P,{pointerToAssign:this.pointerAssign,parent:this});case"sign":return s.a.createElement(F,{pointerToAssign:this.pointerAssign,parent:this});case"account":return s.a.createElement(K,{pointerToAssign:this.pointerAssign,parent:this});default:return s.a.createElement("div",null)}}},{key:"callAlert",value:function(e,t){this.setState({messageForAlert:t,canRenderAlert:!0,colorForAlert:"warning"===e?"alert-warning-color":"alert-message-color"},this.dismissAlert(5e3,this))}},{key:"dismissAlert",value:function(e,t){null!=t.alertTimeout&&clearTimeout(t.alertTimeout),t.alertTimeout=setTimeout((function(){t.finishAlert(t)}),e)}},{key:"finishAlert",value:function(e){e.setState({canRenderAlert:!1})}},{key:"renderAlert",value:function(e,t,a){return e?s.a.createElement(I,{alertMessage:a,alertColor:t,parent:this}):s.a.createElement("div",null)}},{key:"callAboveMenu",value:function(e){this.setState({aboveMenu:e})}},{key:"pointerAssign",value:function(e,t){switch(e){case"aboveMenu":this.aboveMenuThis=t;break;case"header":this.hearderThis=t;break;default:return s.a.createElement("div",null)}this.verifyStatePointer()}},{key:"verifyStatePointer",value:function(){null!=this.aboveMenuThis&&null!=this.hearderThis&&this.aboveMenuThis.assignForClose(this.hearderThis)}},{key:"setupGame",value:function(e,t,a,n,s){var o=this;this.setState({team1NextGame:e,team2NextGame:t,nameTeam1NextGame:a,nameTeam2NextGame:n,nextGameName:s},(function(){return o.openGame(o)}))}},{key:"openGame",value:function(e){this.setState({contentPage:"newGame",unityLoading:!0})}},{key:"unityDoneLoading",value:function(){this.setState({unityLoading:!1})}}]),a}(n.Component);a(58),a(59),a(60),a(61);var z=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App-header"},s.a.createElement($,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.28227548.chunk.js.map