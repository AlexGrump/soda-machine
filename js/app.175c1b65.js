(function(e){function n(n){for(var i,c,o=n[0],s=n[1],u=n[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);l&&l(n);while(f.length)f.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,o=1;o<t.length;o++){var s=t[o];0!==a[s]&&(i=!1)}i&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var i={},a={app:0},r=[];function c(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=i,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)c.d(t,i,function(n){return e[n]}.bind(null,i));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/soda-machine/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"03b8":function(e,n,t){},"0c79":function(e,n,t){},1145:function(e,n,t){},"143f":function(e,n,t){e.exports=t.p+"media/signal_error.b97480ca.wav"},"234f":function(e,n,t){},"269b":function(e,n,t){e.exports=t.p+"media/ice.d9e6c4e8.wav"},"2e69":function(e,n,t){},"308f":function(e,n,t){e.exports=t.p+"media/process.9cd54a24.wav"},"3bbc":function(e,n,t){"use strict";var i=t("2e69"),a=t.n(i);a.a},"43fe":function(e,n,t){e.exports=t.p+"media/machine_noise.2140e801.wav"},"4c55":function(e,n,t){"use strict";var i=t("81e3"),a=t.n(i);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"canvas",style:e.canvasStyle},[t("router-view")],1)])},r=[],c=1280,o=1024,s=20,u=1.5,l={data:function(){return{viewport:{width:window.innerWidth,height:window.innerHeight}}},created:function(){window.addEventListener("resize",this.windowResizeListener)},beforeDestroy:function(){window.removeEventListener("resize",this.windowResizeListener)},methods:{windowResizeListener:function(){this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight}},computed:{canvasStyle:function(){return{transform:"scale(".concat(this.canvasScale,")"),width:this.canvasWidth+"px",height:this.canvasHeight+"px"}},canvasWidth:function(){return c},canvasHeight:function(){return o},canvasScale:function(){var e=this.viewport.width/(c+2*s),n=this.viewport.height/(o+2*s),t=Math.min(e,n);return t>u?u:t}}},d=l,f=(t("5a46"),t("2877")),p=Object(f["a"])(d,a,r,!1,null,"ee26f6ba",null),h=p.exports,v=t("8c4f"),b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hall-room"},[t("div",{staticClass:"ender"}),t("div",{staticClass:"floor"}),t("div",{staticClass:"window"}),t("soda-machine",{staticClass:"machine"}),t("balance")],1)},m=[],k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"balance"},[t("div",{staticClass:"label"},[e._v("Balance")]),t("div",{staticClass:"value"},[e._v(e._s(e._f("currency")(e.balance)))])])},w=[],y=t("5530"),O=t("2f62"),g={computed:Object(y["a"])({},Object(O["d"])("sodaMachine",["balance"]))},C=g,x=(t("600c"),Object(f["a"])(C,k,w,!1,null,"05b46ded",null)),_=x.exports,j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"soda-machine-container",on:{click:e.play}},[t("SodaMachinePanel"),t("SodaMachineCup")],1)},S=[],I=function(e){var n=new Audio(e);return n.addEventListener("canplaythrough",(function(){n.play()})),n},M={play:I},z=t("43fe"),D=t.n(z),P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"soda-machine-panel"},[t("SodaMachineScreen"),t("SodaMachineDrinksPanel")],1)},E=[],B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"soda-machine-screen"},[t("div",{staticClass:"message"},[e.error?[t("div",{staticClass:"title"},[e._v("Error")]),e._v(e._s(e.error))]:e.isDone?[t("div",{staticClass:"title"},[e._v("Done!")]),e._v("Take your drink")]:e.isBusy?[t("div",{staticClass:"title"},[e._v("W-w-h-h...")]),e._v("The drink is pouring")]:[t("div",{staticClass:"title"},[e._v("Hello!")]),e._v("Select drink")]],2),t("div",{staticClass:"highlight",class:e.state})])},F=[],$={computed:Object(y["a"])(Object(y["a"])(Object(y["a"])({},Object(O["c"])("sodaMachine",["isDone","isBusy"])),Object(O["d"])("sodaMachine",["error"])),{},{state:function(){switch(!0){case!!this.error:return"error";case this.isDone:return"success";default:return"default"}}})},L=$,T=(t("3bbc"),Object(f["a"])(L,B,F,!1,null,"562b4c8a",null)),H=T.exports,W=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"soda-machine-drinks-panel"},e._l(e.drinks,(function(e,n){return t("SodaMachineDrinkButton",{key:e.id,attrs:{drink:e}})})),1)},R=[],A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SodaMachineButton",{staticClass:"button",class:{active:e.drink.active},style:{"--brand":e.drink.brandColor},on:{click:function(n){return e.selectDrink(e.drink.id)}}},[t("div",{staticClass:"label"},[e._v(e._s(e.drink.name))]),t("div",{staticClass:"price"},[e._v(e._s(e._f("currency")(e.drink.cost)))])])},J=[],q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",e._g({on:{mousedown:e.click,mouseup:e.clack}},e.$listeners),[e._t("default")],2)},N=[],Z=t("a61a"),G=t.n(Z),K=t("e1dd"),Q=t.n(K),U={methods:{click:function(){M.play(G.a)},clack:function(){M.play(Q.a)}}},V=U,X=Object(f["a"])(V,q,N,!1,null,null,null),Y=X.exports,ee={components:{SodaMachineButton:Y},props:{drink:{type:Object,required:!0}},methods:Object(y["a"])({},Object(O["b"])("sodaMachine",["selectDrink"]))},ne=ee,te=(t("7100"),Object(f["a"])(ne,A,J,!1,null,"145b0358",null)),ie=te.exports,ae={components:{SodaMachineDrinkButton:ie},computed:Object(y["a"])({},Object(O["c"])("sodaMachine",["drink","size","drinks","sizes"])),methods:Object(y["a"])({},Object(O["b"])("sodaMachine",["selectDrink","selectSize"]))},re=ae,ce=(t("8547"),Object(f["a"])(re,W,R,!1,null,"68e414eb",null)),oe=ce.exports,se={components:{SodaMachineScreen:H,SodaMachineDrinksPanel:oe}},ue=se,le=(t("4c55"),Object(f["a"])(ue,P,E,!1,null,"40995b0f",null)),de=le.exports,fe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"soda-machine-cup",class:{full:e.cupIsFull},style:{"--drink-color":e.drinkColor,"--drink-opacity":e.drinkOpacity},on:{click:e.drinking}},[t("div",{staticClass:"stripe"}),t("svg",{staticClass:"content",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[t("clipPath",{attrs:{id:"water"}},[t("path",{attrs:{d:"M6 25 L65 25 L 55 110 L 40 112 L 26 112 L 14 110 Z"}})]),t("g",{attrs:{"clip-path":"url(#water)"}},[t("rect",{attrs:{x:"0",y:"0",width:"400",height:"115",fill:"#f00"}})])]),t("div",{staticClass:"stream"}),t("div",{staticClass:"glass"})])},pe=[],he={computed:Object(y["a"])(Object(y["a"])(Object(y["a"])({},Object(O["c"])("sodaMachine",["drink"])),Object(O["d"])("sodaMachine",["cupIsFull","inProgress"])),{},{drinkColor:function(){return this.drink?this.drink.drinkColor:null},drinkOpacity:function(){return this.drink?this.drink.drinkOpacity:null}}),methods:Object(y["a"])({},Object(O["b"])("sodaMachine",["drinking"]))},ve=he,be=(t("edca"),Object(f["a"])(ve,fe,pe,!1,null,"16947015",null)),me=be.exports,ke={components:{SodaMachinePanel:de,SodaMachineCup:me},data:function(){return{noise:null}},methods:{play:function(){this.noise||(this.noise=M.play(D.a),this.noise.loop=!0)},stop:function(){this.noise&&this.noise.pause()}},beforeDestroy:function(){this.stop()}},we=ke,ye=(t("632d"),Object(f["a"])(we,j,S,!1,null,"d50d1df8",null)),Oe=ye.exports,ge={name:"Hall",components:{Balance:_,SodaMachine:Oe}},Ce=ge,xe=(t("abc9"),Object(f["a"])(Ce,b,m,!1,null,"002f5a6a",null)),_e=xe.exports;i["a"].use(v["a"]);var je=[{path:"/",name:"Hall",component:_e}],Se=new v["a"]({mode:"history",base:"/soda-machine/",routes:je}),Ie=Se,Me=(t("c740"),t("d81d"),t("d3b7"),t("96cf"),t("1da1")),ze=t("7afd"),De=t.n(ze),Pe=t("143f"),Ee=t.n(Pe),Be=t("b223"),Fe=t.n(Be),$e=t("269b"),Le=t.n($e),Te=t("a45d"),He=t.n(Te),We=t("308f"),Re=t.n(We),Ae=t("6889"),Je=t.n(Ae),qe="Not enough money",Ne=function(e){return new Promise((function(n){return setTimeout(n,e)}))},Ze={ok:function(){M.play(De.a)},error:function(){M.play(Ee.a)},done:function(){M.play(Fe.a)}},Ge={ice:function(){M.play(Le.a)},pour:function(){M.play(He.a)},pump:function(){M.play(Re.a)},coin:function(){M.play(Je.a)}},Ke={namespaced:!0,state:{drinks:[{id:6,name:"Water",brandColor:"#03a9f4",drinkColor:"#eee",drinkOpacity:.1,stock:7e3,cost:1},{id:0,name:"CocaCola",brandColor:"#F40009",drinkColor:"#381806",drinkOpacity:.95,stock:260,cost:5.99},{id:1,name:"Fanta",brandColor:"#FF8300",drinkColor:"#FF8300",drinkOpacity:.75,stock:260,cost:5.99},{id:2,name:"Sprite",brandColor:"#008B47",drinkColor:"#eeeeee",drinkOpacity:.25,stock:20,cost:6.99},{id:3,name:"Pepsi",brandColor:"#005CB4",drinkColor:"#381806",drinkOpacity:.95,stock:7e3,cost:5.99},{id:4,name:"Tarhun",brandColor:"#4aa418",drinkColor:"#255908",drinkOpacity:.9,stock:7e3,cost:3.99},{id:5,name:"Tomato",brandColor:"tomato",drinkColor:"tomato",drinkOpacity:1,stock:7e3,cost:3.99},{id:7,name:"Acid",brandColor:"#42c73d",drinkColor:"#00ff00",drinkOpacity:1,stock:7e3,cost:.01}],sizes:[{id:1,name:"sm",size:250},{id:2,name:"md",size:350},{id:3,name:"lg",size:450}],activeSizeIndex:null,activeDrinkIndex:null,cupInPlace:!1,withIce:!0,balance:20.65,error:null,inProgress:!1,cupIsFull:!1},actions:{pourDrink:function(e){return Object(Me["a"])(regeneratorRuntime.mark((function n(){var t,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.state,i=e.commit,i("setProgress",!0),n.next=4,Ne(1600);case 4:if(!t.withIce){n.next=8;break}return Ge.ice(),n.next=8,Ne(3200);case 8:return Ge.pump(),n.next=11,Ne(600);case 11:return i("fillCup",!0),Ge.pour(),n.next=15,Ne(5700);case 15:i("setProgress",!1),Ze.done();case 17:case"end":return n.stop()}}),n)})))()},selectDrink:function(e,n){var t=e.commit,i=e.state,a=e.dispatch,r=e.getters;if(!r.isBusy){var c=i.drinks.findIndex((function(e){return e.id===n}));if(t("setDrinkIndex",c),t("setError",null),r.drink.cost>i.balance)return t("setError",qe),void Ze.error();Ge.coin(),t("reduceBalance",r.drink.cost),Ze.ok(),a("pourDrink")}},selectSize:function(e,n){var t=e.commit,i=e.state,a=i.sizes.findIndex((function(e){return e.id===n}));t("setSizeIndex",a),Ze.ok()},toggleIce:function(e){var n=e.commit,t=e.state;n("setIce",!t.withIce)},drinking:function(e){var n=e.commit,t=e.state;t.inProgress||(n("fillCup",!1),n("setDrinkIndex",null))}},mutations:{setDrinkIndex:function(e,n){e.activeDrinkIndex=n},setSizeIndex:function(e,n){e.activeSizeIndex=n},setIce:function(e,n){e.withIce=n},reduceBalance:function(e,n){e.balance-=n},setError:function(e,n){e.error=n},setProgress:function(e,n){e.inProgress=n},fillCup:function(e,n){e.cupIsFull=n}},getters:{drinks:function(e){var n=e.activeDrinkIndex,t=e.drinks;return t.map((function(e,t){return Object(y["a"])(Object(y["a"])({},e),{},{active:t===n})}))},sizes:function(e){var n=e.activeSizeIndex,t=e.sizes;return t.map((function(e,t){return Object(y["a"])(Object(y["a"])({},e),{},{active:t===n})}))},drink:function(e){var n=e.activeDrinkIndex,t=e.drinks;return null!==n?t[n]:null},size:function(e){var n=e.activeSizeIndex,t=e.sizes;return null!==n?t[n]:null},isBusy:function(e){return e.inProgress||e.cupIsFull},isDone:function(e){return!e.inProgress&&e.cupIsFull}}};i["a"].use(O["a"]);var Qe=new O["a"].Store({state:{},mutations:{},actions:{},modules:{sodaMachine:Ke}}),Ue=(t("4de4"),t("99af"),t("b680"),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return"".concat(n).concat(e.toFixed(t))}),Ve=Ue;i["a"].filter("currency",Ve);t("6db9");i["a"].config.productionTip=!1,new i["a"]({router:Ie,store:Qe,render:function(e){return e(h)}}).$mount("#app")},"5a46":function(e,n,t){"use strict";var i=t("03b8"),a=t.n(i);a.a},"600c":function(e,n,t){"use strict";var i=t("73e7"),a=t.n(i);a.a},"632d":function(e,n,t){"use strict";var i=t("1145"),a=t.n(i);a.a},6889:function(e,n,t){e.exports=t.p+"media/coin.da4cf676.wav"},"6db9":function(e,n,t){},7100:function(e,n,t){"use strict";var i=t("ead5"),a=t.n(i);a.a},"73e7":function(e,n,t){},"7afd":function(e,n,t){e.exports=t.p+"media/signal_ok.5d07969f.wav"},"81e3":function(e,n,t){},8547:function(e,n,t){"use strict";var i=t("234f"),a=t.n(i);a.a},"942a":function(e,n,t){},a45d:function(e,n,t){e.exports=t.p+"media/pour_water.6ba0ed89.wav"},a61a:function(e,n,t){e.exports=t.p+"media/click.7d4cc9b8.wav"},abc9:function(e,n,t){"use strict";var i=t("942a"),a=t.n(i);a.a},b223:function(e,n,t){e.exports=t.p+"media/signal_done.e438f65f.wav"},e1dd:function(e,n,t){e.exports=t.p+"media/clack.197159dc.wav"},ead5:function(e,n,t){},edca:function(e,n,t){"use strict";var i=t("0c79"),a=t.n(i);a.a}});
//# sourceMappingURL=app.175c1b65.js.map