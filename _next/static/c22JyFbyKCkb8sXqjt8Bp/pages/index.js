(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(t,e,n){"use strict";function r(t){if(null==t)throw new TypeError("Cannot destructure undefined")}n.r(e);var o=n("q1tI"),i=n.n(o),a=n("8Kt/"),c=n.n(a),s=i.a.createElement,l=function(t){var e=t.children;return s("footer",null,e&&e||s("div",null,"Default Footer"))},u=i.a.createElement,f=function(t){t.route;var e=t.style,n=t.children;return u("header",{style:e},n&&n||u("div",null,"Default Header"))};function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=i.a.createElement;function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={particlesAmount:6,target:void 0,collision:!0,collider:!1},m=function(t,e){switch(e.type){case"SET_PARTICLES_AMOUNT":return y({},t,{particlesAmount:e.value});case"SET_TARGET":return y({},t,{target:e.value});case"SET_COLLISION":return y({},t,{collision:e.value});case"SET_COLLIDER":return y({},t,{collider:e.value});default:return t}},b=i.a.createContext({state:v,dispatch:function(t){}}),g=function(t){var e=t.children,n=Object(o.useReducer)(m,v),r=n[0],i=n[1];return h(b.Provider,{value:{state:r,dispatch:i}},e)},w=function(){var t=Object(o.useContext)(b);return y({},t.state,{dispatch:t.dispatch})},O=i.a.createElement,S=function(t){var e=t.title,n=t.background,r=t.header,o=t.disableHeader,i=t.children;return O(g,null,O(c.a,null,O("title",null,e),O("link",{rel:"icon",href:"".concat("/my-page","/icons/codeNinja.ico")})),!o&&r?O(f,{route:"home",style:{backgroundColor:"transparent"}},r):O(f,{route:"home"}),O("main",null,n,O("div",{className:"container"},i)),O(l,null))};n("oaNO");function _(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var k=n("2mql"),E=n.n(k);function j(t,e){if(!t){var n=new Error("loadable: "+e);throw n.framesToPop=1,n.name="Invariant Violation",n}}var A=i.a.createContext();var P=function(t){return function(e){return i.a.createElement(A.Consumer,null,(function(n){return i.a.createElement(t,Object.assign({__chunkExtractor:n},e))}))}},M=function(t){return t};function T(t){var e=t.resolve,n=void 0===e?M:e,r=t.render,o=t.onLoad;function a(t,e){void 0===e&&(e={});var a=function(t){return"function"===typeof t?{requireAsync:t}:t}(t),c={};function s(t){return e.cacheKey?e.cacheKey(t):a.resolve?a.resolve(t):null}var l=function(t){var i,l;function u(n){var r;return(r=t.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:s(n)},r.promise=null,j(!n.__chunkExtractor||a.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?!1===e.ssr?x(r):(a.requireAsync(n).catch((function(){})),r.loadSync(),n.__chunkExtractor.addChunk(a.chunkName(n)),x(r)):(!1!==e.ssr&&a.isReady&&a.isReady(n)&&r.loadSync(),r)}l=t,(i=u).prototype=Object.create(l.prototype),i.prototype.constructor=i,i.__proto__=l,u.getDerivedStateFromProps=function(t,e){var n=s(t);return C({},e,{cacheKey:n,loading:e.loading||e.cacheKey!==n})};var d=u.prototype;return d.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},d.componentDidUpdate=function(t,e){e.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},d.componentWillUnmount=function(){this.mounted=!1},d.safeSetState=function(t,e){this.mounted&&this.setState(t,e)},d.triggerOnLoad=function(){var t=this;o&&setTimeout((function(){o(t.state.result,t.props)}))},d.loadSync=function(){if(this.state.loading)try{var t=a.requireSync(this.props),e=n(t,{Loadable:f});this.state.result=e,this.state.loading=!1}catch(r){this.state.error=r}},d.getCacheKey=function(){return s(this.props)||JSON.stringify(this.props)},d.getCache=function(){return c[this.getCacheKey()]},d.setCache=function(t){c[this.getCacheKey()]=t},d.loadAsync=function(){var t=this;if(!this.promise){var r=this.props,o=(r.__chunkExtractor,r.forwardedRef,_(r,["__chunkExtractor","forwardedRef"]));this.promise=a.requireAsync(o).then((function(r){var o=n(r,{Loadable:f});e.suspense&&t.setCache(o),t.safeSetState({result:n(r,{Loadable:f}),loading:!1},(function(){return t.triggerOnLoad()}))})).catch((function(e){t.safeSetState({error:e,loading:!1})}))}return this.promise},d.render=function(){var t=this.props,n=t.forwardedRef,o=t.fallback,i=(t.__chunkExtractor,_(t,["forwardedRef","fallback","__chunkExtractor"])),a=this.state,c=a.error,s=a.loading,l=a.result;if(e.suspense){var u=this.getCache();if(!u)throw this.loadAsync();return r({loading:!1,fallback:null,result:u,options:e,props:C({},i,{ref:n})})}if(c)throw c;var f=o||e.fallback||null;return s?f:r({loading:s,fallback:f,result:l,options:e,props:C({},i,{ref:n})})},u}(i.a.Component),u=P(l),f=i.a.forwardRef((function(t,e){return i.a.createElement(u,Object.assign({forwardedRef:e},t))}));return f.preload=function(t){a.requireAsync(t)},f.load=function(t){return a.requireAsync(t)},f}return{loadable:a,lazy:function(t,e){return a(t,C({},e,{suspense:!0}))}}}var R=T({resolve:function(t,e){var n=e.Loadable,r=t.__esModule?t.default:t.default||t;return E()(n,r,{preload:!0}),r},render:function(t){var e=t.result,n=t.props;return i.a.createElement(e,n)}}),L=R.loadable,I=R.lazy,D=T({onLoad:function(t,e){t&&e.forwardedRef&&("function"===typeof e.forwardedRef?e.forwardedRef(t):e.forwardedRef.current=t)},render:function(t){var e=t.result,n=t.loading,r=t.props;return!n&&r.children?r.children(e):null}}),N=D.loadable,$=D.lazy;var q=L;q.lib=N,I.lib=$;var W=q;function H(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function K(t,e,n){return e&&F(t.prototype,e),n&&F(t,n),t}var U=function(){return String.fromCharCode(12448+Math.round(90*Math.random()))},z=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*t)+e},V=function(){function t(e,n,r){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(H(this,t),d(this,"position",void 0),d(this,"symbol",void 0),d(this,"tail",void 0),d(this,"shouldGlow",void 0),d(this,"shadeOffset",void 0),d(this,"rainSpeed",void 0),d(this,"changeOffset",void 0),this.symbol=U(),this.initSymbol(e,r,n),this.shadeOffset=0,o){this.tail=new Array(Math.floor(e.height/22)),this.shadeOffset=z(255,120);for(var i=0;i<this.tail.length;i++)this.tail[i]=new t(e,n,r,!1),this.tail[i].changeOffset=4*Math.random()}}return K(t,[{key:"initSymbol",value:function(t,e,n){this.position=t.createVector(e,t.height-21-20),this.shadeOffset=z(255,100),this.rainSpeed=n?z(80,50):z(50,20)}},{key:"update",value:function(t){for(var e=this,n=Math.random()>.99,r=function(r){var o=e.position.y-21*r-20;t.frameCount%2==0&&(e.tail[r].shadeOffset-=z(10,4)),n&&setTimeout((function(){e.tail[r].shouldGlow=!0,e.tail[r].symbol=U(),e.tail[r].shadeOffset=z(350,100),e.tail[r].changeOffset=8*Math.random()}),6e3-r*e.rainSpeed),e.tail[r].shouldGlow?(t.strokeWeight(3),t.stroke(255,100),t.fill(255,100),e.tail[r].changeOffset=6*Math.random(),e.tail[r].shouldGlow=!1):(t.strokeWeight(.2),t.stroke(80,255,80,e.tail[r].shadeOffset),t.fill(80,255,80,e.tail[r].shadeOffset)),Math.random()>e.tail[r].changeOffset&&(e.tail[r].symbol=U()),t.text(e.tail[r].symbol,e.position.x,o)},o=this.tail.length-1;o>=0;o--)r(o)}}]),t}(),X=i.a.createElement,J=function(t){r(t);var e=[];var o=W((function(){return n.e(3).then(n.t.bind(null,"ixhd",7))}));return X("div",{className:"sketch__container"},X(o,{setup:function(t,n){t.createCanvas(window.innerWidth,window.innerHeight+50).parent(n),t.textSize(20);for(var r=window.innerWidth<500?0:20,o=0;o<window.innerWidth/31;o++)e[o]=new V(t,0===r,r+30*o)},draw:function(t){t.clear(),t.background(0,0,0),e.forEach((function(e){e.update(t)}))}}),";")};function Y(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var G=function(t,e,n){t.velocity=n.createVector(t.velocity.x*-Math.random()*30-e.velocity.x,t.velocity.y*-Math.random()*30-e.velocity.y)},B=function(t,e,n){return t<=e?n+.1:t>=e?n-.1:0},Z=function(t,e,n,r){for(var o=new Array(t),i=0;i<t;i++)o[i]=new tt({width:e,height:e},n,r,Q[i%Q.length]);return o},Q=["red","green","blue","purple","orange","goldenrod","limegreen","teal","pink","brown","indigo","cyan","crismon","darkred","darkorange","gold","darkgreen","paleturquoise","darkcyan","mediumblue","mediumorchid","lightslategray","sienna"],tt=function(){function t(e,n,r,o,i){H(this,t),d(this,"dimension",void 0),d(this,"acceleration",void 0),d(this,"velocity",void 0),d(this,"p5",void 0),d(this,"position",void 0),d(this,"tail",void 0),d(this,"color",void 0),d(this,"accLimit",void 0),d(this,"velLimit",void 0),d(this,"offset",void 0),d(this,"collided",void 0),d(this,"collidedCount",void 0),d(this,"smallCollision",void 0),this.dimension=e,this.p5=n,this.acceleration=this.p5.createVector(),this.velocity=i||this.p5.createVector(),this.position=this.p5.createVector(Math.random()*window.innerWidth-window.innerWidth/2,Math.random()*window.innerHeight-window.innerHeight/2),this.accLimit=2*Math.random(),this.velLimit=3.5,this.tail=[],this.color=o,this.offset=r,this.collided=!1,this.smallCollision=!1,this.collidedCount=0}return K(t,[{key:"update",value:function(t,e){var n=this.position,r=n.x,o=n.y;this.acceleration=this.p5.createVector(B(r,t-this.offset.x,this.acceleration.x),B(o,e-this.offset.y,this.acceleration.y)),this.acceleration.limit(this.accLimit),this.acceleration.setMag(this.collided?-2:this.smallCollision?-.01:.2),this.velocity.add(this.acceleration),this.velocity.limit(this.collided?10:this.smallCollision?5:this.velLimit),this.position.add(this.velocity),this.tail.length>4?this.tail=this.tail.slice(0,-1):this.tail=[this.position.copy()].concat(Y(this.tail)),(this.collided||this.smallCollision)&&this.collidedCount++,this.collidedCount>=(this.smallCollision?15:80)&&(this.collided=!1,this.smallCollision=!1,this.collidedCount=0)}},{key:"drawCollider",value:function(t,e,n){var r=this.p5.millis();this.p5.pointLight(255,255,255,0,0,1e4),this.p5.texture(n),this.p5.push(),this.p5.translate(t-this.offset.x,e-this.offset.y,0),this.p5.rotateY(r/1e3),this.p5.sphere(40,24,24),this.p5.pop()}},{key:"draw",value:function(){var t=this.dimension,e=t.width,n=t.height;this.p5.fill(this.color),this.p5.ellipse(this.position.x,this.position.y,e,n);for(var r=0;r<this.tail.length;r++)this.p5.ellipse(this.tail[r].x,this.tail[r].y,e-r,n-r)}}]),t}(),et=function(){function t(e,n){H(this,t),d(this,"particles",void 0),d(this,"collision",void 0),d(this,"p5",void 0),d(this,"collider",void 0),d(this,"image",void 0),d(this,"offset",void 0),this.particles=Z(6,7,e,n),this.p5=e,this.collision=!0,this.image=e.loadImage("".concat("/my-page","/pictures/meFace.png")),this.offset=n}return K(t,[{key:"setParticles",value:function(t){var e=t-this.particles.length;e>0?this.particles=[].concat(Y(this.particles),Y(Z(e,7,this.p5,this.offset))):e<0&&(this.particles=this.particles.slice(0,e))}},{key:"checkColision",value:function(t,e,n){var r;if(n){var o=n.x,i=n.y,a=this.p5.createVector(t.position.x+this.offset.x,t.position.y+this.offset.y),c=this.p5.createVector(o,i);r=a.dist(c)/6}else r=t.position.dist(e.position);!t.collided&&r<=t.dimension.width&&(G(t,e,this.p5),!this.collider&&G(e,t,this.p5),t.collided=!!this.collider,t.smallCollision=!this.collider,e.smallCollision=!this.collider)}},{key:"update",value:function(){var t=this,e=this.p5,n=e.mouseX,r=e.mouseY;this.particles.map((function(e,o){e.update(n,r);var i=[].concat(Y(t.particles.slice(0,o)),Y(t.particles.slice(o+1,t.particles.length)));t.collider?t.checkColision(e,t.collider,{x:n,y:r}):t.collision&&i.map((function(n){return t.checkColision(e,n)})),e.draw()})),this.collider&&this.collider.drawCollider(n,r,this.image)}}]),t}(),nt=function(t){Object(o.useEffect)(t,[])},rt=function(t){var e=Object(o.useRef)(t);e.current=t,nt((function(){return function(){return e.current()}}))},ot=function(t){var e=Object(o.useRef)(0),n=Object(o.useState)(t),r=n[0],i=n[1],a=Object(o.useCallback)((function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame((function(){i(t)}))}),[]);return rt((function(){cancelAnimationFrame(e.current)})),[r,a]},it="object"===typeof window,at=(n("nkPT"),function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var n=ot({width:it?window.innerWidth:t,height:it?window.innerHeight:e}),r=n[0],i=n[1];return Object(o.useEffect)((function(){if(it){var t=function(){i({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}}),[]),r}),ct=function(){var t=at().width;return{xs:t<600,xsOnly:t<600,sm:t>=600,smOnly:t>=600&&t<768,smAndDown:t<768,smAndUp:t>=600,md:t>=768,mdOnly:t>=768&&t<992,mdAndDown:t<992,mdAndUp:t>=768,lg:t>=992,lgOnly:t>=992&&t<1200,lgAndDown:t<1200,lgAndUp:t>=992,xl:t>=1200,xlOnly:t>=1200&&t<1600,xlAndDown:t<1600,xlAndUp:t>=1200,xxl:t>=1600}},st=i.a.createElement,lt=function(t){var e;r(t);var o=w(),i=o.particlesAmount,a=o.collision,c=o.collider,s=ct().mdAndDown;var l=W((function(){return n.e(3).then(n.t.bind(null,"ixhd",7))}));return st("div",{className:"sketch__container"},st(l,{setup:function(t,n){t.createCanvas(window.innerWidth,window.innerHeight,t.WEBGL).parent(n),t.strokeWeight(.5),(e=new et(t,{x:window.innerWidth/2,y:window.innerHeight/2})).setParticles(i),e.collision=a,t.pointLight(255,255,255,t.width/2,t.height/2,1e3),c&&(e.collider=new tt({width:40,height:40},t,{x:window.innerWidth/2,y:window.innerHeight/2},"black"))},draw:function(t){t.background(255,100,255,0),t.clear(),t.noStroke(),e.update(),s&&(t.fill(50,50,50,100),t.ellipse(t.mouseX-t.width/2,t.mouseY-t.height/2,20,20))}}),";")},ut=i.a.createElement,ft=["MATRIX","PARTICLES"],dt=function(t){var e=t.onChange;return ut("div",{className:"sketch__picker--container"},ut("select",{onChange:function(t){return e(t.target.value)},className:"sketch__picker"},ft.map((function(t){return ut("option",{key:t,value:t},(e=t)?"".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1).toLowerCase()):"");var e}))))},ht=i.a.createElement,pt=function(t){r(t);var e=w(),n=e.dispatch,o=e.collision,i=e.collider,a=e.particlesAmount,c=ct().mdAndDown,s=c?20:80;return ht("div",{className:"controlPanel"},ht("button",{onClick:function(){return n({type:"SET_COLLIDER",value:!i})}},"".concat(i?"Remove ":"Use"," collider")),ht("button",{onClick:function(){return n({type:"SET_COLLISION",value:!o})}},"".concat(o?"Disable ":"Enable"," collision")),ht("button",{onClick:function(){return n({type:"SET_PARTICLES_AMOUNT",value:0})}},"Remove particles"),ht("button",{onClick:function(){return n({type:"SET_PARTICLES_AMOUNT",value:6})}},"Reset"),ht("input",{type:"number",max:100,placeholder:"N. particles (".concat(s,")"),value:a,onChange:function(t){var e=parseInt(t.target.value);isNaN(e)||n({type:"SET_PARTICLES_AMOUNT",value:e>s?s:e})}}))};function yt(){return(yt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var vt=i.a.createElement,mt=function(t){return vt("svg",yt({height:"2em",viewBox:"0 0 512 512",width:"2em"},t,{style:{zIndex:100,position:"absolute",top:0,left:0}}),vt("path",{d:"M464.883 64.267H47.117C21.137 64.267 0 85.403 0 111.416c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149zM464.883 208.867H47.117C21.137 208.867 0 230.003 0 256.016c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149zM464.883 353.467H47.117C21.137 353.467 0 374.604 0 400.616c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"}))},bt=i.a.createElement,gt=function(t){var e=t.menu,n=(t.style,ct().mdAndDown),r=Object(o.useState)(!n),i=r[0],a=r[1];return n?bt("div",{style:{position:"relative",width:"80vw",marginLeft:"4rem"}},n&&bt(mt,{onClick:function(){return a(!i)},className:"".concat(i?"rotate":"rotate--reverse")}),bt("div",{className:"menu__wrapper fade".concat(i?"In":"Out","__left")},e)):bt("div",null,e)},wt=i.a.createElement,Ot=function(t){switch(t){case"MATRIX":return wt(J,null);case"PARTICLES":return wt(lt,null);default:return wt(J,null)}};e.default=function(t){r(t);var e=Object(o.useState)(!0),n=e[0],i=e[1],a=Object(o.useState)("MATRIX"),c=a[0],s=a[1];return Object(o.useEffect)((function(){i(!1)}),[]),n?null:wt("div",null,wt(S,{title:"home",background:Ot(c),header:wt("div",{className:"header__container"},"PARTICLES"===c&&wt(gt,{menu:wt(pt,null)}),wt(dt,{onChange:function(t){return s(t)}}))}))}},"2mql":function(t,e,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(p){var o=h(n);o&&o!==p&&t(e,o,r)}var a=u(n);f&&(a=a.concat(f(n)));for(var c=s(e),y=s(n),v=0;v<a.length;++v){var m=a[v];if(!i[m]&&(!r||!r[m])&&(!y||!y[m])&&(!c||!c[m])){var b=d(n,m);try{l(e,m,b)}catch(g){}}}}return e}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),c=n("FYa8"),s=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function u(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(u,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var l=f[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var u=o.props[l],d=r[l]||new Set;d.has(u)?i=!1:(d.add(u),r[l]=d)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var h=i.default();function p(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:s.isInAmpMode(t)},e)}))}))}p.rewind=h.rewind,e.default=p},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.HeadManagerContext=o.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||i()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},TOwV:function(t,e,n){"use strict";t.exports=n("qT12")},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),c=n("a1gu"),s=n("Nsbk"),l=n("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),d=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(l){a(p,l);var f,h=(f=p,function(){var t,e=s(f);if(u()){var n=s(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return c(this,t)});function p(t){var i;return r(this,p),i=h.call(this,t),d&&(e.add(o(i)),n(o(i))),i}return i(p,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(p,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),p}(f.Component)}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},nkPT:function(t,e,n){"use strict";t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(o=r;0!==o--;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(i=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!==o--;){var a=i[o];if(("_owner"!==a||!e.$$typeof)&&!t(e[a],n[a]))return!1}return!0}return e!==e&&n!==n}},qT12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116;function m(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case f:case d:case a:case s:case c:case p:return t;default:switch(t=t&&t.$$typeof){case u:case h:case l:return t;default:return e}}case v:case y:case i:return e}}}function b(t){return m(t)===d}e.typeOf=m,e.AsyncMode=f,e.ConcurrentMode=d,e.ContextConsumer=u,e.ContextProvider=l,e.Element=o,e.ForwardRef=h,e.Fragment=a,e.Lazy=v,e.Memo=y,e.Portal=i,e.Profiler=s,e.StrictMode=c,e.Suspense=p,e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===a||t===d||t===s||t===c||t===p||"object"===typeof t&&null!==t&&(t.$$typeof===v||t.$$typeof===y||t.$$typeof===l||t.$$typeof===u||t.$$typeof===h)},e.isAsyncMode=function(t){return b(t)||m(t)===f},e.isConcurrentMode=b,e.isContextConsumer=function(t){return m(t)===u},e.isContextProvider=function(t){return m(t)===l},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return m(t)===h},e.isFragment=function(t){return m(t)===a},e.isLazy=function(t){return m(t)===v},e.isMemo=function(t){return m(t)===y},e.isPortal=function(t){return m(t)===i},e.isProfiler=function(t){return m(t)===s},e.isStrictMode=function(t){return m(t)===c},e.isSuspense=function(t){return m(t)===p}}},[["/EDR",0,1,10]]]);