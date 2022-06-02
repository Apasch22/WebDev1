(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[57],{"08kA":function(t,e,n){"use strict"
var i=n("s4NR"),r=n("CxY0"),s=n("U6jy")
function o(t){return t&&t.rel}function a(t,e){function n(n){t[n]=s(e,{rel:n})}e.rel.split(/\s+/).forEach(n)
return t}function l(t,e){var n=e.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
n&&(t[n[1]]=n[2])
return t}function u(t){try{var e=t.match(/<?([^>]*)>(.*)/),n=e[1],o=e[2].split(";"),a=r.parse(n),u=i.parse(a.query)
o.shift()
var c=o.reduce(l,{})
c=s(u,c)
c.url=n
return c}catch(t){return null}}t.exports=function(t){if(!t)return null
return t.split(/,\s*</).map(u).filter(o).reduce(a,{})}},"2mql":function(t,e,n){"use strict"
var i=n("TOwV")
var r={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true}
var s={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true}
var o={$$typeof:true,render:true,defaultProps:true,displayName:true,propTypes:true}
var a={$$typeof:true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true}
var l={}
l[i.ForwardRef]=o
l[i.Memo]=a
function u(t){if(i.isMemo(t))return a
return l[t["$$typeof"]]||r}var c=Object.defineProperty
var h=Object.getOwnPropertyNames
var d=Object.getOwnPropertySymbols
var p=Object.getOwnPropertyDescriptor
var f=Object.getPrototypeOf
var b=Object.prototype
function m(t,e,n){if("string"!==typeof e){if(b){var i=f(e)
i&&i!==b&&m(t,i,n)}var r=h(e)
d&&(r=r.concat(d(e)))
var o=u(t)
var a=u(e)
for(var l=0;l<r.length;++l){var g=r[l]
if(!s[g]&&!(n&&n[g])&&!(a&&a[g])&&!(o&&o[g])){var y=p(e,g)
try{c(t,g,y)}catch(t){}}}}return t}t.exports=m},"65NJ":function(t,e,n){"use strict"
var i=n("ouhR")
var r=n.n(i)
n("w2hD")
r.a.fn.scrollToVisible=function(t){const e={}
const n=r()(t)
if(0===n.length)return
let i=n.offset(),s=n.outerWidth(),o=n.outerHeight(),a=i.top,l=a+o,u=i.left,c=u+s,h="html,body"==this.selector?r.a.windowScrollTop():this.scrollTop(),d=this.scrollLeft(),p=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let t=r()("body").offset()
this.each((function(){try{t=r()(this).offset()
return false}catch(t){}}))
a-=t.top
l-=t.top
u-=t.left
c-=t.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){p=r()(window).height()
r()("#wizard_box:visible").length>0&&(p-=r()("#wizard_box:visible").height())
f=r()(window).width()
a-=h
u-=d
l-=h
c-=d}a<0||p<o&&l>p?e.scrollTop=a+h:l>p&&(e.scrollTop=l+h-p+20)
u<0?e.scrollLeft=u+d:c>f&&(e.scrollLeft=c+d-f+20)
1==e.scrollTop&&(e.scrollTop=0)
1==e.scrollLeft&&(e.scrollLeft=0)
this.scrollTop(e.scrollTop)
this.scrollLeft(e.scrollLeft)
return this}},Ipg6:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c}))
var i=n("ouhR")
var r=n.n(i)
var s=n("FOCd")
var o=n("08kA")
var a=n.n(o)
var l=n("etQE")
function u({path:t,params:e}){const n=r.a.param(e)
if(!n.length)return t
return`${t}?${n}`}async function c({path:t,method:e="GET",headers:n={},params:i={},body:r,fetchOpts:o={}}){const c={...l["e"]}
c.headers["X-CSRF-Token"]=Object(s["a"])("_csrf_token")
if(r&&"string"!==typeof r){r=JSON.stringify(r)
c.headers["Content-Type"]="application/json"}Object.assign(c.headers,n)
Object.assign(c,o)
const h=u({path:t,params:i})
const d=await fetch(h,{body:r,method:e,...c})
if(!d.ok){const t=new Error(`doFetchApi received a bad response: ${d.status} ${d.statusText}`)
Object.assign(t,{response:d})
throw t}const p=d.headers.get("Link")
const f=p&&a()(p)||void 0
const b=await d.text()
const m=b.length>0?JSON.parse(b):void 0
return{json:m,response:d,link:f}}},Nuch:function(t,e,n){"use strict"
n.d(e,"a",(function(){return c}))
var i=n("RtDj")
var r=n("HGxv")
var s=n("q1tI")
var o=n.n(s)
var a=n("l0h0")
const l=Object(r["useScope"])("direct_share_course_tray")
const u=Object(s["lazy"])(()=>Promise.all([n.e(10),n.e(12),n.e(15),n.e(114),n.e(4193)]).then(n.bind(null,"dpkT")))
function c({sourceCourseId:t,contentSelection:e,onDismiss:n,...r}){return o.a.createElement(a["a"],Object.assign({label:l.t("Copy To..."),placement:"end",onDismiss:n,padding:"medium"},r),Object(i["a"])(u,{sourceCourseId:t,contentSelection:e,onCancel:n}))}},QbG7:function(t,e,n){"use strict"
n.d(e,"a",(function(){return m}))
var i=n("RtDj")
var r=n("HGxv")
var s=n("q1tI")
var o=n.n(s)
n("17x9")
var a=n("L+/K")
var l=n("Xx/m")
var u=n("uSnb")
var c=n("n12J")
var h=n("HeaX")
n("XFtX")
var d=n("uloQ")
var p=n("Ipg6")
const f=Object(r["useScope"])("direct_share_user_modal")
const b=Object(s["lazy"])(()=>Promise.all([n.e(10),n.e(12),n.e(15),n.e(4151)]).then(n.bind(null,"pdP4")))
function m({contentShare:t,courseId:e,...n}){const[r,m]=Object(s["useState"])([])
const[g,y]=Object(s["useState"])(null)
const v=Object(s["useRef"])(n.open)
function _(){m([])
y(null)}function x(t){r.find(e=>e.id===t.id)||m(r.concat([t]))}function w(t){m(r.filter(e=>e.id!==t.id))}function O(){return Object(p["a"])({method:"POST",path:"/api/v1/users/self/content_shares",body:{...t,receiver_ids:r.map(t=>t.id)}})}function C(){y("info")
O().then(j).catch(t=>{console.error(t)
t.response&&console.error(t.response)
y("error")})}function j(){Object(d["d"])(f.t("Content share started successfully"))()
n.onDismiss()}function S(){return o.a.createElement(o.a.Fragment,null,Object(i["a"])(l["a"],{onClick:n.onDismiss},void 0,f.t("Cancel")),Object(i["a"])(l["a"],{disabled:0===r.length||"info"===g,color:"primary",margin:"0 0 0 x-small",onClick:C},void 0,f.t("Send")))}const $=Object(i["a"])(c["a"],{as:"div",textAlign:"center"},void 0,Object(i["a"])(u["a"],{renderTitle:f.t("Loading")}))
if(n.open!==v.current){v.current=n.open
_()}let k=""
"info"===g?k=f.t("Starting content share"):"error"===g&&(k=f.t("Error starting content share"))
const T=k?Object(i["a"])(a["a"],{variant:g},void 0,Object(i["a"])("div",{role:"alert","aria-live":"assertive","aria-atomic":true},void 0,k),"info"===g?Object(i["a"])(u["a"],{renderTitle:k,size:"x-small"}):null):null
return o.a.createElement(h["a"],Object.assign({label:f.t("Send To..."),size:"medium"},n,{footer:Object(i["a"])(S,{})}),Object(i["a"])(s["Suspense"],{fallback:$},void 0,T,Object(i["a"])(b,{courseId:e,selectedUsers:r,onUserSelected:x,onUserRemoved:w})))}},TOwV:function(t,e,n){"use strict"
t.exports=n("qT12")},U6jy:function(t,e){t.exports=i
var n=Object.prototype.hasOwnProperty
function i(){var t={}
for(var e=0;e<arguments.length;e++){var i=arguments[e]
for(var r in i)n.call(i,r)&&(t[r]=i[r])}return t}},Vovh:function(t,e,n){"use strict"
var i=n("HGxv")
var r=n("ouhR")
var s=n.n(r)
var o=n("mX+G")
var a=n.n(o)
var l=n("gI0r")
n("Dhso")
var u,c=function(t,e){for(var n in e)h.call(e,n)&&(t[n]=e[n])
function i(){this.constructor=t}i.prototype=e.prototype
t.prototype=new i
t.__super__=e.prototype
return t},h={}.hasOwnProperty
u=Object(i["useScope"])("publish_btn_module")
e["a"]=function(t){c(e,t)
function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.disabledClass="disabled"
e.prototype.publishClass="btn-publish"
e.prototype.publishedClass="btn-published"
e.prototype.unpublishClass="btn-unpublish"
e.optionProperty("title")
e.optionProperty("publishText")
e.optionProperty("unpublishText")
e.optionProperty("disabledForModeration")
e.prototype.tagName="button"
e.prototype.className="btn"
e.prototype.events={click:"click",hover:"hover"}
e.prototype.els={i:"$icon",".publish-text":"$text"}
e.prototype.initialize=function(){var t
e.__super__.initialize.apply(this,arguments)
return null!=(t=this.model)?t.on("change:unpublishable",(n=this,function(){if(!n.model.get("unpublishable")&&n.model.get("published"))return n.disable()})):void 0
var n}
e.prototype.setElement=function(){e.__super__.setElement.apply(this,arguments)
this.$el.attr("data-tooltip","")
if(!this.model.get("unpublishable")&&this.model.get("published"))return this.disable()}
e.prototype.hover=function(t){var e
e=t.type
if("mouseenter"===e){if(this.keepState||this.isPublish()||this.isDisabled())return
this.renderUnpublish()
return this.keepState=true}this.keepState=false
if(!(this.isPublish()||this.isDisabled()))return this.renderPublished()}
e.prototype.click=function(t){t.preventDefault()
t.stopPropagation()
if(this.isDisabled())return
this.keepState=true
if(this.isPublish())return this.publish()
if(this.isUnpublish()||this.isPublished())return this.unpublish()}
e.prototype.addAriaLabel=function(t){var e
e=this.$el.find("span.screenreader-only.accessible_label")
e.length||(e=s()('<span class="screenreader-only accessible_label"></span>').appendTo(this.$el))
e.text(t)
return this.$el.attr("aria-label",t)}
e.prototype.setFocusToElement=function(){return this.$el.focus()}
e.prototype.publish=function(t){this.renderPublishing()
return this.model.publish().always((e=this,function(){e.trigger("publish")
e.enable()
e.render()
return e.setFocusToElement()}))
var e}
e.prototype.unpublish=function(t){this.renderUnpublishing()
return this.model.unpublish().done((e=this,function(){e.trigger("unpublish")
e.disable()
e.render()
return e.setFocusToElement()})).fail(function(t){return function(e){403===e.status&&s.a.flashError(t.model.disabledMessage())
t.disable()
t.renderPublished()
return t.setFocusToElement()}}(this))
var e}
e.prototype.isPublish=function(){return this.$el.hasClass(this.publishClass)}
e.prototype.isPublished=function(){return this.$el.hasClass(this.publishedClass)}
e.prototype.isUnpublish=function(){return this.$el.hasClass(this.unpublishClass)}
e.prototype.isDisabled=function(){return this.$el.hasClass(this.disabledClass)}
e.prototype.disable=function(){return this.$el.addClass(this.disabledClass)}
e.prototype.enable=function(){return this.$el.removeClass(this.disabledClass)}
e.prototype.reset=function(){this.$el.removeClass(this.publishClass+" "+this.publishedClass+" "+this.unpublishClass)
this.$icon.removeClass("icon-publish icon-unpublish icon-unpublished")
return this.$el.removeAttr("aria-label")}
e.prototype.publishLabel=function(){if(this.publishText)return this.publishText
if(this.title)return u.t("Unpublished.  Click to publish %{title}.",{title:this.title})
return u.t("Unpublished.  Click to publish.")}
e.prototype.unpublishLabel=function(){if(this.unpublishText)return this.unpublishText
if(this.title)return u.t("Published.  Click to unpublish %{title}.",{title:this.title})
return u.t("Published.  Click to unpublish.")}
e.prototype.render=function(){this.$el.is("button")||this.$el.attr("role","button")
this.$el.attr("tabindex","0")
this.$el.html('<i></i><span class="publish-text"></span>')
this.cacheEls()
this.$text.attr("tabindex","-1")
this.model.get("published")?this.renderPublished():this.renderPublish()
return this}
e.prototype.renderPublish=function(){return this.renderState({text:u.t("buttons.publish","Publish"),label:this.publishLabel(),buttonClass:this.publishClass,iconClass:"icon-unpublish"})}
e.prototype.renderPublished=function(){return this.renderState({text:u.t("buttons.published","Published"),label:this.unpublishLabel(),buttonClass:this.publishedClass,iconClass:"icon-publish icon-Solid"})}
e.prototype.renderUnpublish=function(){var t
t=u.t("buttons.unpublish","Unpublish")
return this.renderState({text:t,buttonClass:this.unpublishClass,iconClass:"icon-unpublish"})}
e.prototype.renderPublishing=function(){var t
this.disable()
t=u.t("buttons.publishing","Publishing...")
return this.renderState({text:t,buttonClass:this.publishClass,iconClass:"icon-publish icon-Solid"})}
e.prototype.renderUnpublishing=function(){var t
this.disable()
t=u.t("buttons.unpublishing","Unpublishing...")
return this.renderState({text:t,buttonClass:this.unpublishClass,iconClass:"icon-unpublished"})}
e.prototype.renderState=function(t){this.reset()
this.$el.addClass(t.buttonClass)
this.$el.attr("aria-pressed",t.buttonClass===this.publishedClass)
this.$icon.addClass(t.iconClass)
this.$text.html("&nbsp;"+Object(l["a"])(t.text))
if(this.model.get("disabledForModeration"))return this.disableWithMessage("You do not have permissions to edit this moderated assignment")
if(null==this.model.get("unpublishable")||this.model.get("unpublishable")){this.enable()
this.$el.data("tooltip","left")
this.$el.attr("title",t.text)
if(t.label)return this.addAriaLabel(t.label)}else if(this.model.get("published"))return this.disableWithMessage(this.model.disabledMessage())}
e.prototype.disableWithMessage=function(t){this.disable()
this.$el.attr("aria-disabled",true)
this.$el.attr("title",t)
this.$el.data("tooltip","left")
return this.addAriaLabel(t)}
return e}(a.a.View)},XFtX:function(t,e,n){"use strict"
var i=n("17x9")
var r=n("lNsk")
const s=Object(i["shape"])({id:i["string"],display_name:i["string"],url:i["string"]})
var o=s
const a=Object(i["shape"])({id:i["string"].isRequired,progress_url:i["string"],user_id:i["string"],workflow_state:Object(i["oneOf"])(["created","exporting","exported","failed"]),attachment:o})
var l=a
const u=["assignment","attachment","discussion_topic","page","quiz","module","module_item"]
Object(i["shape"])({id:i["string"].isRequired,name:i["string"].isRequired,content_type:Object(i["oneOf"])(u).isRequired,created_at:i["string"].isRequired,updated_at:i["string"].isRequired,read_state:i["string"].isRequired,sender:r["b"].isRequired,content_export:l})},aq8L:function(t,e,n){"use strict"
var i=n("HGxv")
var r=n("ouhR")
var s=n.n(r)
var o=n("gI0r")
var a=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
const l=Object(i["useScope"])("instructure_misc_plugins")
s.a.fn.setOptions=function(t,e){let n=t?"<option value=''>"+Object(o["a"])(t)+"</option>":""
null==e&&(e=[])
e.forEach(t=>{const e=Object(o["a"])(t)
n+='<option value="'+e+'">'+e+"</option>"})
return this.html(s.a.raw(n))}
s.a.fn.ifExists=function(t){this.length&&t.call(this,this)
return this}
s.a.fn.scrollbarWidth=function(){const t=s()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),e=t.find("div")
const n=e.innerWidth()
t.css("overflow-y","scroll")
const i=e.innerWidth()
t.remove()
return n-i}
s.a.fn.dim=function(t){return this.animate({opacity:.4},t)}
s.a.fn.undim=function(t){return this.animate({opacity:1},t)}
s.a.fn.confirmDelete=function(t){t=s.a.extend({},s.a.fn.confirmDelete.defaults,t)
const e=this
let n=null
let i=true
t.noMessage=t.noMessage||t.no_message
const r=function(){if(!i){t.cancelled&&s.a.isFunction(t.cancelled)&&t.cancelled.call(e)
return}t.confirmed||(t.confirmed=function(){e.dim()})
t.confirmed.call(e)
if(t.url){t.success||(t.success=function(t){e.fadeOut("slow",()=>{e.remove()})})
const i=t.prepareData?t.prepareData.call(e,n):{}
i.authenticity_token=Object(a["a"])()
s.a.ajaxJSON(t.url,"DELETE",i,n=>{t.success.call(e,n)},(n,i,r,o)=>{t.error&&s.a.isFunction(t.error)?t.error.call(e,n,i,r,o):s.a.ajaxJSON.unhandledXHRs.push(i)})}else{t.success||(t.success=function(){e.fadeOut("slow",()=>{e.remove()})})
t.success.call(e)}}
if(t.message&&!t.noMessage&&!s.a.skipConfirmations){if(t.dialog){i=false
const e="object"===typeof t.dialog?t.dialog:{}
const o=t.url.includes("assignments")?"btn-danger":"btn-primary"
n=s()(t.message).dialog(s.a.extend({},{modal:true,close:r,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){s()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:o,click(){i=true
s()(this).dialog("close")}}]},e))
return}i=confirm(t.message)}r()}
s.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
s.a.fn.fragmentChange=function(t){if(t&&true!==t){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var e=0;e<n.length;e++){const t=n[e]
t&&0===t.indexOf("hash=")&&(i="#"+t.substring(5))}this.bind("document_fragment_change",t)
const r=this
let o=false
for(e=0;e<s.a._checkFragments.fragmentList.length;e++){const t=s.a._checkFragments.fragmentList[e]
t.doc[0]==r[0]&&(o=true)}o||s.a._checkFragments.fragmentList.push({doc:r,fragment:""})
s()(window).bind("hashchange",s.a._checkFragments)
setTimeout(()=>{i&&i.length>0?r.triggerHandler("document_fragment_change",i):r&&r[0]&&r[0].location&&r[0].location.hash.length>0&&r.triggerHandler("document_fragment_change",r[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
s.a._checkFragments=function(){const t=s.a._checkFragments.fragmentList
for(let e=0;e<t.length;e++){const n=t[e]
const i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
s.a._checkFragments.fragmentList[e]=n}}}
s.a._checkFragments.fragmentList=[]
s.a.fn.clickLink=function(){const t=this.eq(0)
t.hasClass("disabled_link")||t.click()}
s.a.fn.showIf=function(t){if(s.a.isFunction(t))return this.each((function(e){s()(this).showIf(t.call(this))}))
t?this.show():this.hide()
return this}
s.a.fn.disableIf=function(t){s.a.isFunction(t)&&(t=t.call(this))
this.prop("disabled",!!t)
return this}
s.a.fn.indicate=function(t){t=t||{}
let e
if("remove"==t){e=this.data("indicator")
e&&e.remove()
return}s()(".indicator_box").remove()
let n=this.offset()
t&&t.offset&&(n=t.offset)
const i=this.width()
const r=this.height()
const o=(t.container||this).zIndex()
e=s()(document.createElement("div"))
e.css({width:i+6,height:r+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
e.addClass("indicator_box")
e.mouseover((function(){s()(this).stop().fadeOut("fast",(function(){s()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",e)
s()("body").append(e)
t&&t.singleFlash?e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){s()(this).remove()})):e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){s()(this).remove()}))
t&&t.scroll&&s()("html,body").scrollToVisible(e)}
s.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
s.a.fn.log=function(t){console.log("%s: %o",t,this)
return this}
s.a.fn.fillWindowWithMe=function(t){const e=s.a.extend({minHeight:400},t),n=s()(this),i=s()("#wrapper"),r=s()("#main"),o=s()("#not_right_side"),a=s()(window),l=s()(this).add(e.alsoResize)
function u(){l.height(0)
const t=a.height()-(i.offset().top+i.outerHeight())+(r.height()-o.height()),u=Math.max(400,t)
l.height(u)
s.a.isFunction(e.onResize)&&e.onResize.call(n,u)}u()
a.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",u)
return this}
s.a.fn.autoGrowInput=function(t){t=s.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},t)
this.filter("input:text").each((function(){let e=t.minWidth||s()(this).width(),n="",i=s()(this),r=s()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(n===(n=i.val()))return
r.text(n)
const s=r.width(),o=s+t.comfortZone>=e?s+t.comfortZone:e,a=i.width(),l=o<a&&o>=e||o>e&&o<t.maxWidth
l&&i.width(o)})}
r.insertAfter(i)
s()(this).bind("keyup keydown blur update change",o)}))
return this}
s.a},etQE:function(t,e,n){"use strict"
n.d(e,"f",(function(){return r}))
n.d(e,"d",(function(){return s}))
n.d(e,"a",(function(){return o}))
n.d(e,"b",(function(){return a}))
n.d(e,"c",(function(){return l}))
n.d(e,"e",(function(){return u}))
var i=n("FOCd")
function r(t){return window.prefetched_xhrs&&window.prefetched_xhrs[t]}function s(t){if(window.prefetched_xhrs){const e=window.prefetched_xhrs[t]
delete window.prefetched_xhrs[t]
return e}return}function o(t,e="json"){if(!t)return
return t.then(l).then(t=>t.clone()[e]().then(e=>({data:e,headers:{link:t.headers.get("Link")}})))}function a(t){if(!t)return
return t.then(l).then(t=>t.clone().json())}function l(t){if(t.status<400)return t
{const e=new Error(t.statusText)
e.response=t
throw e}}const u={credentials:"same-origin",headers:{Accept:"application/json+canvas-string-ids, application/json","X-Requested-With":"XMLHttpRequest","X-CSRF-Token":Object(i["a"])("_csrf_token")}}},k72m:function(t,e,n){"use strict"
n.d(e,"b",(function(){return s}))
n.d(e,"a",(function(){return o}))
var i=n("ODXe")
var r={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function s(t,e){return a(t,(function(t,e){return[r[t],e]}),e)}function o(t,e){return a(t,(function(t,e){return[t,e].map((function(t){return"start"===t||"end"===t?r[t]:t}))}),e)}function a(t,e,n){var r=Array.isArray(t)?t:t.split(" "),s=Object(i["a"])(r,2),o=s[0],a=s[1]
var l=e(o,a).filter((function(t){return t}))
return n?l.join(n):l}},l0h0:function(t,e,n){"use strict"
n.d(e,"a",(function(){return h}))
var i=n("RtDj")
var r=n("HGxv")
var s=n("q1tI")
var o=n.n(s)
var a=n("bJGz")
var l=n("uSnb")
var u=n("n12J")
const c=Object(r["useScope"])("canvas_lazy_tray")
function h({children:t,...e}){const n=Object(i["a"])(u["a"],{as:"div",textAlign:"center"},void 0,Object(i["a"])(l["a"],{renderTitle:c.t("Loading...")}))
return o.a.createElement(a["a"],e,Object(i["a"])(s["Suspense"],{fallback:n},void 0,t))}},lNsk:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s}))
var i=n("17x9")
const r=Object(i["shape"])({id:i["string"].isRequired,display_name:i["string"].isRequired,avatar_image_url:i["string"]})
e["b"]=r
Object(i["shape"])({id:i["string"].isRequired,name:i["string"].isRequired,avatar_url:i["string"],email:i["string"]})
const s=Object(i["shape"])({id:i["string"].isRequired,name:i["string"].isRequired,avatar_image_url:i["string"],html_url:i["string"].isRequired})},qT12:function(t,e,n){"use strict"
var i="function"===typeof Symbol&&Symbol.for,r=i?Symbol.for("react.element"):60103,s=i?Symbol.for("react.portal"):60106,o=i?Symbol.for("react.fragment"):60107,a=i?Symbol.for("react.strict_mode"):60108,l=i?Symbol.for("react.profiler"):60114,u=i?Symbol.for("react.provider"):60109,c=i?Symbol.for("react.context"):60110,h=i?Symbol.for("react.async_mode"):60111,d=i?Symbol.for("react.concurrent_mode"):60111,p=i?Symbol.for("react.forward_ref"):60112,f=i?Symbol.for("react.suspense"):60113,b=i?Symbol.for("react.suspense_list"):60120,m=i?Symbol.for("react.memo"):60115,g=i?Symbol.for("react.lazy"):60116,y=i?Symbol.for("react.block"):60121,v=i?Symbol.for("react.fundamental"):60117,_=i?Symbol.for("react.responder"):60118,x=i?Symbol.for("react.scope"):60119
function w(t){if("object"===typeof t&&null!==t){var e=t.$$typeof
switch(e){case r:switch(t=t.type,t){case h:case d:case o:case l:case a:case f:return t
default:switch(t=t&&t.$$typeof,t){case c:case p:case g:case m:case u:return t
default:return e}}case s:return e}}}function O(t){return w(t)===d}e.AsyncMode=h
e.ConcurrentMode=d
e.ContextConsumer=c
e.ContextProvider=u
e.Element=r
e.ForwardRef=p
e.Fragment=o
e.Lazy=g
e.Memo=m
e.Portal=s
e.Profiler=l
e.StrictMode=a
e.Suspense=f
e.isAsyncMode=function(t){return O(t)||w(t)===h}
e.isConcurrentMode=O
e.isContextConsumer=function(t){return w(t)===c}
e.isContextProvider=function(t){return w(t)===u}
e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===r}
e.isForwardRef=function(t){return w(t)===p}
e.isFragment=function(t){return w(t)===o}
e.isLazy=function(t){return w(t)===g}
e.isMemo=function(t){return w(t)===m}
e.isPortal=function(t){return w(t)===s}
e.isProfiler=function(t){return w(t)===l}
e.isStrictMode=function(t){return w(t)===a}
e.isSuspense=function(t){return w(t)===f}
e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===o||t===d||t===l||t===a||t===f||t===b||"object"===typeof t&&null!==t&&(t.$$typeof===g||t.$$typeof===m||t.$$typeof===u||t.$$typeof===c||t.$$typeof===p||t.$$typeof===v||t.$$typeof===_||t.$$typeof===x||t.$$typeof===y)}
e.typeOf=w}}])

//# sourceMappingURL=57-c-916c2a6d75.js.map