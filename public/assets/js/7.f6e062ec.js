(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{426:function(e,t,n){"use strict";var o=n(23),i=n(6),r=n(427),a=n(9),s=TypeError,l=Object.defineProperty,c=i.self!==i;try{if(a){var u=Object.getOwnPropertyDescriptor(i,"self");!c&&u&&u.get&&u.enumerable||r(i,"self",{get:function(){return i},set:function(e){if(this!==i)throw s("Illegal invocation");l(i,"self",{value:e,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else o({global:!0,simple:!0,forced:c},{self:i})}catch(e){}},427:function(e,t,n){"use strict";var o=n(134),i=n(19);e.exports=function(e,t,n){return n.get&&o(n.get,t,{getter:!0}),n.set&&o(n.set,t,{setter:!0}),i.f(e,t,n)}},428:function(e,t){e.exports=function(){window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(e){return window.clearTimeout(e)},window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}}},429:function(e,t){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=e,o=void 0,i=!0;return function(){var e=this,r=arguments;if(i&&(n.apply(this,r),i=!1),o)return!1;o=setTimeout((function(){clearTimeout(o),o=null,n.apply(e,r)}),t)}}},430:function(e,t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function e(){Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});var t=void 0,o=void 0,i=void 0,r=void 0,a=void 0,s=void 0,l=1,c=arguments[0]||{},u=!1,d=arguments.length;if("boolean"==typeof c&&(u=c,c=arguments[1]||{},l++),"object"!==(void 0===c?"undefined":n(c))&&"function"!=typeof c&&(c={}),l===d)return c;for(;l<d;l++)if(null!=(o=arguments[l]))for(t in o)i=c[t],r=o[t],a=Array.isArray(r),u&&r&&("object"===(void 0===r?"undefined":n(r))||a)?(a?(a=!1,s=i&&Array.isArray(i)?i:[]):s=i&&"object"===(void 0===i?"undefined":n(i))?i:{},c[t]=e(u,s,r)):void 0!==r&&(c[t]=r);return c}},432:function(e,t,n){"use strict";n.r(t);n(15),n(426);const o=n(429);var i=(e,t)=>{window.addEventListener("resize",o(e,t))};n(428)();const r=n(430);var a={name:"bubblesEffect",data:()=>({circles:[],requestAniId:null}),props:{options:{type:Object,default:()=>({})}},computed:{opts(){return r({},{color:"rgba(225,225,225,0.5)",radius:15,densety:.3,clearOffset:.2},this.options)}},methods:{randomColor:()=>`rgba(${Math.floor(255*Math.random())}, ${Math.floor(255*Math.random())}, ${Math.floor(255*Math.random())}, ${Math.random().toPrecision(2)})`},mounted(){let e,t,n,o,r=[],a=this.opts,s=this;function l(){cancelAnimationFrame(self.requestAniId),o.clearRect(0,0,e,t);for(let e in r)r[e].draw();self.requestAniId=requestAnimationFrame(l)}function c(){var n=this;function i(){n.pos.x=Math.random()*e,n.pos.y=t+100*Math.random(),n.alpha=.1+Math.random()*a.clearOffset,n.scale=.1+.3*Math.random(),n.speed=Math.random(),n.color="random"===a.color?s.randomColor():a.color}this.pos={},i(),this.draw=function(){n.alpha<=0&&i(),n.pos.y-=n.speed,n.alpha-=5e-4,o.beginPath(),o.arc(n.pos.x,n.pos.y,n.scale*a.radius,0,2*Math.PI,!1),o.fillStyle=n.color,o.fill(),o.closePath()}}!function(){e=window.innerWidth,t=window.innerHeight,n=s.$refs.canvas,n.width=e,n.height=t,o=n.getContext("2d");for(let t=0;t<e*a.densety;t++){let e=new c;r.push(e)}l()}(),i(()=>{e=window.innerWidth,t=window.innerHeight,n.width=e,n.height=t})},beforeDestroy(){cancelAnimationFrame(this.requestAniId)}},s=n(3),l=Object(s.a)(a,(function(){return(0,this._self._c)("canvas",{ref:"canvas",staticStyle:{position:"absolute",top:"0",left:"0"}})}),[],!1,null,null,null).exports;"undefined"!=typeof window&&window.Vue&&Vue.component(l.name,l);t.default=l}}]);