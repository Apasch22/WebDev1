(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[44],{"4uX5":function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var o=n("RtDj")
var r=n("q1tI")
var a=n.n(r)
var i=n("mrSG")
var c=n("gtzJ")
var s=n("3CEA")
var l=n("9/Zf")
var u=n("8LbN")
n("2mql")
var d=Object(l["f"])(r["version"])
var f={componentStack:null,error:null,eventId:null}
var p=function(e){Object(i["__extends"])(t,e)
function t(){var t=null!==e&&e.apply(this,arguments)||this
t.state=f
t.resetErrorBoundary=function(){var e=t.props.onReset
var n=t.state,o=n.error,r=n.componentStack,a=n.eventId
e&&e(o,r,a)
t.setState(f)}
return t}t.prototype.componentDidCatch=function(e,t){var n=this
var o=t.componentStack
var r=this.props,a=r.beforeCapture,l=r.onError,u=r.showDialog,f=r.dialogOptions
Object(c["c"])((function(t){if(d.major&&d.major>=17){var r=new Error(e.message)
r.name="React ErrorBoundary "+r.name
r.stack=o
e.cause=r}a&&a(t,e,o)
var p=Object(c["a"])(e,{contexts:{react:{componentStack:o}}})
l&&l(e,o,p)
u&&Object(s["b"])(Object(i["__assign"])(Object(i["__assign"])({},f),{eventId:p}))
n.setState({error:e,componentStack:o,eventId:p})}))}
t.prototype.componentDidMount=function(){var e=this.props.onMount
e&&e()}
t.prototype.componentWillUnmount=function(){var e=this.state,t=e.error,n=e.componentStack,o=e.eventId
var r=this.props.onUnmount
r&&r(t,n,o)}
t.prototype.render=function(){var e=this.props,t=e.fallback,n=e.children
var o=this.state,a=o.error,i=o.componentStack,c=o.eventId
if(a){var s=void 0
s="function"===typeof t?t({error:a,componentStack:i,resetError:this.resetErrorBoundary,eventId:c}):t
if(r["isValidElement"](s))return s
t&&u["b"].warn("fallback did not produce a valid ReactElement")
return null}if("function"===typeof n)return n()
return n}
return t}(r["Component"])
class h extends a.a.Component{constructor(...e){super(...e)
this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error(e,t)}render(){if(this.state.error)return"function"===typeof this.props.errorComponent?this.props.errorComponent({error:this.state.error,componentStack:null,eventId:null,resetError:()=>this.setState({error:null})}):this.props.errorComponent
return Object(o["a"])(p,{fallback:this.props.errorComponent},void 0,this.props.children)}}},"Ci/e":function(e,t,n){"use strict"
n.d(t,"a",(function(){return W}))
var o=n("rePB")
var r=n("Ff2n")
var a=n("1OyB")
var i=n("vuIU")
var c=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var u=n.n(l)
var d=n("17x9")
var f=n.n(d)
var p=n("TSYQ")
var h=n.n(p)
var b=n("VTBJ")
n("DEX3")
var m=n("KgFQ")
var v=n("jtGx")
var g=n("ISHz")
var O=n("QF4Q")
var _=n("TjLr")
var z=function(e){Object(c["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(a["a"])(this,n)
for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i]
e=t.call.apply(t,[this].concat(r))
e._raf=[]
e._focusRegion=null
e.getRef=function(t){e._root=t}
return e}Object(i["a"])(n,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(e){var t=this.props.open
t&&!e.open?this.open():!t&&e.open&&this.close()
this._focusRegion&&this._focusRegion.updateElement(this.contentElement)}},{key:"componentWillUnmount",value:function(){this.props.open&&this.close()
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]}},{key:"open",value:function(){var e=this
var t=this.props,n=(t.open,t.contentElement,Object(r["a"])(t,["open","contentElement"]))
this._raf.push(Object(g["a"])((function(){setTimeout((function(){e._focusRegion=_["a"].activateRegion(e.contentElement,Object(b["a"])({},n))}),0)})))}},{key:"close",value:function(){this._focusRegion&&_["a"].blurRegion(this.contentElement,this._focusRegion.id)}},{key:"focus",value:function(){if(!this.props.open||!this.contentElement)return
this._focusRegion&&_["a"].focusRegion(this.contentElement,this._focusRegion.id)}},{key:"blur",value:function(){if(!this.props.open||!this.contentElement)return
this.close()}},{key:"render",value:function(){var e=Object(m["a"])(n,this.props)
var t=this.props.role||(this.props.label?"dialog":void 0)
return this.props.open?u.a.createElement(e,Object.assign({},Object(v["a"])(this.props,n.propTypes),{ref:this.getRef,role:t,"aria-label":this.props.label,className:this.props.className}),this.props.children):null}},{key:"contentElement",get:function(){var e=Object(O["a"])(this.props.contentElement)
e||(e=Object(O["a"])(this._root))
return e}},{key:"focused",get:function(){return this.contentElement&&this._focusRegion&&_["a"].isFocused(this.contentElement,this._focusRegion.id)}}])
n.displayName="Dialog"
return n}(l["Component"])
z.propTypes={children:f.a.node,as:f.a.elementType,display:f.a.oneOf(["auto","block","inline-block"]),label:f.a.string,open:f.a.bool,onBlur:f.a.func,onDismiss:f.a.func,defaultFocusElement:f.a.oneOfType([f.a.element,f.a.func]),contentElement:f.a.oneOfType([f.a.element,f.a.func]),liveRegion:f.a.oneOfType([f.a.arrayOf(f.a.element),f.a.element,f.a.func]),shouldContainFocus:f.a.oneOfType([f.a.bool,f.a.oneOf(["keyboard","screenreader"])]),shouldReturnFocus:f.a.bool,shouldCloseOnDocumentClick:f.a.bool,shouldCloseOnEscape:f.a.bool,shouldFocusOnOpen:f.a.bool}
z.defaultProps={children:null,display:void 0,label:void 0,open:false,shouldFocusOnOpen:true,shouldContainFocus:false,shouldReturnFocus:false,shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,defaultFocusElement:null,contentElement:null,liveRegion:null,onBlur:function(e){},onDismiss:function(e){}}
var L=n("AdN2")
var E=n("9yTY")
var j=n("FOOe")
var Z=n("J2CL")
var y=n("oXx0")
var x=n("3Zzb")
var C=n("k72m")
var k=n("XQb/")
var w=function(e){var t=e.colors,n=e.breakpoints,o=e.shadows,r=e.stacking,a=e.borders
return{background:t.backgroundLightest,borderColor:t.borderMedium,borderWidth:a.widthSmall,borderStyle:a.style,boxShadow:o.depth3,xSmallWidth:n.xSmall,smallWidth:"20em",regularWidth:n.small,mediumWidth:n.medium,largeWidth:n.large,zIndex:r.topmost}}
var R,D,S,F,T,I
var q={componentId:"fLzZc",template:function(e){return"\n\n.fLzZc_bGBk{background-color:".concat(e.background||"inherit",";box-sizing:border-box;max-height:100vh;max-width:100vw;overflow-x:hidden;overflow-y:auto;position:fixed;z-index:").concat(e.zIndex||"inherit","}\n\n.fLzZc_dHtp{border-color:").concat(e.borderColor||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:0}\n\n.fLzZc_fSpQ{box-shadow:").concat(e.boxShadow||"inherit","}\n\n.fLzZc_ehJX .fLzZc_caGd,.fLzZc_bQpq .fLzZc_caGd,.fLzZc_bxia .fLzZc_caGd{min-height:100vh}\n\n.fLzZc_bgun,.fLzZc_dLYh{inset-inline-end:0;inset-inline-start:0}\n\n[dir=ltr] .fLzZc_bgun,[dir=ltr] .fLzZc_dLYh{left:0;right:0}\n\n[dir=rtl] .fLzZc_bgun,[dir=rtl] .fLzZc_dLYh{left:0;right:0}\n\n.fLzZc_bQpq,.fLzZc_bxia{bottom:0;top:0}\n\n.fLzZc_bQpq.fLzZc_dfBC,.fLzZc_bxia.fLzZc_dfBC{width:").concat(e.xSmallWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_doqw,.fLzZc_bxia.fLzZc_doqw{width:").concat(e.smallWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_cXTs,.fLzZc_bxia.fLzZc_cXTs{width:").concat(e.regularWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_ycrn,.fLzZc_bxia.fLzZc_ycrn{width:").concat(e.mediumWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_cMDj,.fLzZc_bxia.fLzZc_cMDj{width:").concat(e.largeWidth||"inherit","}\n\n.fLzZc_ehJX{bottom:0;left:0;right:0;top:0}\n\n.fLzZc_bxia{inset-inline-end:auto;inset-inline-start:0}\n\n[dir=ltr] .fLzZc_bxia{left:0;right:auto}\n\n[dir=rtl] .fLzZc_bxia{left:auto;right:0}\n\n.fLzZc_bxia.fLzZc_dHtp{border-inline-end-width:").concat(e.borderWidth||"inherit","}\n\n[dir=ltr] .fLzZc_bxia.fLzZc_dHtp{border-right-width:").concat(e.borderWidth||"inherit","}\n\n[dir=rtl] .fLzZc_bxia.fLzZc_dHtp{border-left-width:").concat(e.borderWidth||"inherit","}\n\n.fLzZc_bQpq{inset-inline-end:0;inset-inline-start:auto}\n\n[dir=ltr] .fLzZc_bQpq{left:auto;right:0}\n\n[dir=rtl] .fLzZc_bQpq{left:0;right:auto}\n\n.fLzZc_bQpq.fLzZc_dHtp{border-inline-start-width:").concat(e.borderWidth||"inherit","}\n\n[dir=ltr] .fLzZc_bQpq.fLzZc_dHtp{border-left-width:").concat(e.borderWidth||"inherit","}\n\n[dir=rtl] .fLzZc_bQpq.fLzZc_dHtp{border-right-width:").concat(e.borderWidth||"inherit","}\n\n.fLzZc_dLYh{top:0}\n\n.fLzZc_dLYh.fLzZc_dHtp{border-bottom-width:").concat(e.borderWidth||"inherit","}\n\n.fLzZc_bgun{bottom:0}\n\n.fLzZc_bgun.fLzZc_dHtp{border-top-width:").concat(e.borderWidth||"inherit","}")},root:"fLzZc_bGBk",border:"fLzZc_dHtp",shadow:"fLzZc_fSpQ","placement--center":"fLzZc_ehJX",content:"fLzZc_caGd","placement--end":"fLzZc_bQpq","placement--start":"fLzZc_bxia","placement--bottom":"fLzZc_bgun","placement--top":"fLzZc_dLYh","x-small":"fLzZc_dfBC",small:"fLzZc_doqw",regular:"fLzZc_cXTs",medium:"fLzZc_ycrn",large:"fLzZc_cMDj"}
var W=(R=Object(y["a"])(),D=Object(j["a"])(),S=Object(Z["j"])(w,q),R(F=D(F=S(F=(I=T=function(e){Object(c["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(a["a"])(this,n)
for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i]
e=t.call.apply(t,[this].concat(r))
e.state={transitioning:false}
e.handleTransitionComplete=function(){e.setState({transitioning:false})}
e.handlePortalOpen=function(t){e.DOMNode=t
t&&e.applyTheme(t)}
return e}Object(i["a"])(n,[{key:"componentDidUpdate",value:function(e){this.props.open!==e.open&&this.setState({transitioning:true})}},{key:"render",value:function(){var e
var t=this.props,a=t.label,i=t.children,c=t.size,s=(t.placement,t.open),l=(t.defaultFocusElement,t.contentRef),d=t.shouldContainFocus,f=t.shouldReturnFocus,p=t.shouldCloseOnDocumentClick,b=t.onOpen,m=t.onClose,g=t.onDismiss,O=t.mountNode,_=t.insertAt,L=t.liveRegion,j=t.onEnter,Z=t.onEntering,y=t.onEntered,C=t.onExit,w=t.onExiting,R=t.onExited,D=t.onTransition,S=t.border,F=t.shadow,T=Object(r["a"])(t,["label","children","size","placement","open","defaultFocusElement","contentRef","shouldContainFocus","shouldReturnFocus","shouldCloseOnDocumentClick","onOpen","onClose","onDismiss","mountNode","insertAt","liveRegion","onEnter","onEntering","onEntered","onExit","onExiting","onExited","onTransition","border","shadow"])
var I=s||this.state.transitioning
return u.a.createElement(x["a"],{open:I,onOpen:this.handlePortalOpen,insertAt:_,mountNode:O},I&&u.a.createElement(k["a"],{in:s,type:this.transition,onTransition:D,onEnter:j,onEntering:Z,onEntered:Object(E["a"])(this.handleTransitionComplete,y,b),onExit:C,onExiting:w,onExited:Object(E["a"])(this.handleTransitionComplete,R,m),transitionOnMount:true,transitionEnter:true,transitionExit:true},u.a.createElement("span",Object.assign({},Object(v["a"])(T,n.propTypes),{className:h()((e={},Object(o["a"])(e,q.root,true),Object(o["a"])(e,q.border,S),Object(o["a"])(e,q.shadow,F),Object(o["a"])(e,q[c],true),Object(o["a"])(e,q["placement--".concat(this.props.placement)],true),e)),ref:l}),this.state.transitioning?i:u.a.createElement(z,{as:"div",label:a,defaultFocusElement:this.defaultFocusElement,open:true,shouldContainFocus:d,shouldReturnFocus:f,shouldCloseOnDocumentClick:p,shouldCloseOnEscape:true,liveRegion:L,onDismiss:g},u.a.createElement("div",{className:q.content},i)))))}},{key:"placement",get:function(){var e=this.props.placement
return this.rtl?Object(C["a"])(e," "):e}},{key:"direction",get:function(){switch(this.placement){case"top":return"up"
case"bottom":return"down"
case"end":return"right"
default:return"left"}}},{key:"transition",get:function(){return"slide-".concat(this.direction)}},{key:"defaultFocusElement",get:function(){var e=this
return this.props.defaultFocusElement||function(){return e._closeButton}}},{key:"DOMNode",get:function(){return this._DOMNode},set:function(e){this._DOMNode=e}}])
n.displayName="Tray"
return n}(l["Component"]),T.propTypes={label:f.a.string.isRequired,children:f.a.node,size:f.a.oneOf(["x-small","small","regular","medium","large"]),placement:f.a.oneOf(["top","bottom","start","end"]),open:f.a.bool,defaultFocusElement:f.a.oneOfType([f.a.element,f.a.func]),contentRef:f.a.func,shouldContainFocus:f.a.bool,shouldReturnFocus:f.a.bool,shouldCloseOnDocumentClick:f.a.bool,onOpen:f.a.func,onClose:f.a.func,onDismiss:f.a.func,mountNode:f.a.oneOfType([L["a"],f.a.func]),insertAt:f.a.oneOf(["bottom","top"]),liveRegion:f.a.oneOfType([f.a.arrayOf(f.a.element),f.a.element,f.a.func]),onTransition:f.a.func,onEnter:f.a.func,onEntering:f.a.func,onEntered:f.a.func,onExit:f.a.func,onExiting:f.a.func,onExited:f.a.func,border:f.a.bool,shadow:f.a.bool},T.defaultProps={open:false,onOpen:function(e){},onClose:function(e){},onDismiss:function(e){},onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},mountNode:null,insertAt:"bottom",liveRegion:null,contentRef:function(e){},shouldCloseOnDocumentClick:false,shouldContainFocus:true,shouldReturnFocus:true,defaultFocusElement:null,size:"small",placement:"start",shadow:true,border:false,children:null,onTransition:void 0},I))||F)||F)||F)},HeaX:function(e,t,n){"use strict"
n.d(t,"a",(function(){return v}))
var o=n("RtDj")
var r=n("HGxv")
var a=n("q1tI")
var i=n.n(a)
n("17x9")
var c=n("Mmr1")
var s=n("n12J")
var l=n("TstA")
var u=n("msMH")
var d=n("Dibh")
var f=n("4uX5")
var p=n("qwzJ")
var h=n("1sWr")
var b=n.n(h)
const m=Object(r["useScope"])("canvas_modal")
v.defaultProps={padding:"small",errorImageUrl:b.a,footer:null,title:null,closeButtonSize:"small"}
function v({padding:e,errorSubject:t,errorCategory:n,errorImageUrl:r,label:a,title:h,onDismiss:b,children:v,footer:g,closeButtonSize:O,..._}){null==h&&(h=a)
return i.a.createElement(d["a"],Object.assign({label:a,onDismiss:b},_),Object(o["a"])(d["a"].Header,{},void 0,Object(o["a"])(l["a"],{},void 0,Object(o["a"])(l["a"].Item,{grow:true},void 0,Object(o["a"])(u["a"],{},void 0,h)),Object(o["a"])(l["a"].Item,{},void 0,Object(o["a"])(c["a"],{onClick:b,size:O,screenReaderLabel:m.t("Close")})))),Object(o["a"])(d["a"].Body,{padding:e},void 0,Object(o["a"])(s["a"],{as:"div",height:"100%"},void 0,Object(o["a"])(f["a"],{errorComponent:Object(o["a"])(p["a"],{imageUrl:r,errorSubject:t,errorCategory:n})},void 0,v))),g&&Object(o["a"])(d["a"].Footer,{},void 0,"function"===typeof g?g():g))}},bJGz:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var o=n("RtDj")
var r=n("HGxv")
var a=n("q1tI")
var i=n.n(a)
n("17x9")
var c=n("Mmr1")
var s=n("n12J")
var l=n("TstA")
var u=n("msMH")
var d=n("Ci/e")
var f=n("4uX5")
var p=n("qwzJ")
var h=n("1sWr")
var b=n.n(h)
var m=n("/656")
const v=Object(r["useScope"])("tray")
g.defaultProps={padding:"small",contentPadding:"0",errorImageUrl:b.a}
function g({padding:e,headerPadding:t,contentPadding:n,errorSubject:r,errorCategory:a,errorImageUrl:h,label:b,title:g,onDismiss:O,children:_,...z}){var L,E
null==t&&(t=`0 0 ${e} 0`)
null==g&&(g=b)
function j(){return Object(o["a"])(l["a"],{as:"div",padding:t},void 0,Object(o["a"])(l["a"].Item,{grow:true},void 0,Object(o["a"])(u["a"],{},void 0,Object(o["a"])(m["a"],{},void 0,g))),Object(o["a"])(l["a"].Item,{},void 0,Object(o["a"])(c["a"],{onClick:O,size:"small",screenReaderLabel:v.t("Close")})))}function Z(){return Object(o["a"])(f["a"],{errorComponent:L||(L=Object(o["a"])(p["a"],{imageUrl:h,errorSubject:r,errorCategory:a}))},void 0,E||(E=Object(o["a"])(s["a"],{as:"div",padding:n,width:"100%",height:"100%"},void 0,_)))}return i.a.createElement(d["a"],Object.assign({label:b,onDismiss:O},z),Object(o["a"])(s["a"],{as:"div",padding:e,position:"absolute",insetBlockStart:"0",insetBlockEnd:"0",insetInlineStart:"0",insetInlineEnd:"0"},void 0,Object(o["a"])("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"}},void 0,j(),Object(o["a"])("div",{style:{position:"relative",flex:1}},void 0,Z()))))}},dKDz:function(e,t,n){"use strict"
var o=/["'&<>]/
e.exports=r
function r(e){var t=""+e
var n=o.exec(t)
if(!n)return t
var r
var a=""
var i=0
var c=0
for(i=n.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:r="&quot;"
break
case 38:r="&amp;"
break
case 39:r="&#39;"
break
case 60:r="&lt;"
break
case 62:r="&gt;"
break
default:continue}c!==i&&(a+=t.substring(c,i))
c=i+1
a+=r}return c!==i?a+t.substring(c,i):a}}}])

//# sourceMappingURL=44-c-a60bb85b75.js.map