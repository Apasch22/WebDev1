(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3732,128,4135],{"5nFh":function(e,t,n){"use strict"
n.d(t,"a",(function(){return m}))
var a=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var i=n("Ji7U")
var o=n("LK+K")
var c=n("q1tI")
var l=n("17x9")
var d=n.n(l)
var u=n("cClk")
var p=n("BTe1")
var g=n("9yTY")
var _=function(e){var t=e.expanded
return{expanded:!t}}
var m=function(e){Object(i["a"])(n,e)
var t=Object(o["a"])(n)
function n(e){var a
Object(r["a"])(this,n)
a=t.call(this)
a.handleToggle=function(e){a.isControlled()||a.setState(_)
a.props.onToggle(e,!a.expanded)}
a.state={expanded:a.isControlled(e)?e.expanded:!!e.defaultExpanded}
a._contentId=Object(p["a"])("Expandable__content")
return a}Object(s["a"])(n,[{key:"isControlled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props
return"boolean"===typeof e.expanded}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,r=t.render,s=void 0===r?n:r
return"function"===typeof s?s({expanded:this.expanded,getToggleProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object(a["a"])({"aria-controls":e._contentId,"aria-expanded":e.expanded,onClick:Object(g["a"])(e.handleToggle,t.onClick)},t)},getDetailsProps:function(t){return{id:e._contentId}}}):null}},{key:"expanded",get:function(){return this.isControlled()?this.props.expanded:this.state.expanded}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"boolean"===typeof e.expanded&&e.expanded!==t.expanded?{expanded:e.expanded}:null}}])
n.displayName="Expandable"
return n}(c["Component"])
m.propTypes={expanded:Object(u["a"])(d.a.bool,"onToggle","defaultExpanded"),defaultExpanded:d.a.bool,onToggle:d.a.func,children:d.a.func,render:d.a.func}
m.defaultProps={defaultExpanded:false,onToggle:function(e,t){},expanded:void 0,children:null,render:void 0}},"6dnZ":function(e,t,n){"use strict"
n.r(t)
var a=n("ANjH")
var r=n("RtDj")
var s=n("q1tI")
var i=n.n(s)
var o=n("i8i4")
var c=n.n(o)
var l=n("/MKj")
var d=n("17x9")
var u=n.n(d)
var p=n("uSnb")
var g=n("HGxv")
var _=n("Z6JD")
var m
const v=Object(g["useScope"])("cyoe_assignment_sidebar_breakdown_graph_bar")
const{string:b,number:h,func:f}=u.a
class S extends i.a.Component{constructor(...e){super(...e)
this.selectRange=e=>{this.props.openSidebar(e.target)
this.props.selectRange(this.props.rangeIndex)}}renderInnerBar(){const e=Math.min(this.props.rangeStudents/this.props.totalStudents*100,100)
const t={width:e+"%"}
return e>0?Object(r["a"])("div",{style:t,className:"crs-bar__horizontal-inside-fill"}):null}render(){const{rangeStudents:e,totalStudents:t}=this.props
return Object(r["a"])("div",{className:"crs-bar__container"},void 0,Object(r["a"])("div",{className:"crs-bar__horizontal-outside"},void 0,m||(m=Object(r["a"])("div",{className:"crs-bar__horizontal-inside"})),this.renderInnerBar()),Object(r["a"])("div",{className:"crs-bar__bottom"},void 0,Object(r["a"])("span",{className:"crs-bar__info"},void 0,v.t("%{lowerBound}+ to %{upperBound}",{upperBound:this.props.upperBound,lowerBound:this.props.lowerBound})),Object(r["a"])("button",{className:"crs-link-button",onClick:this.selectRange,title:v.t("View range student details")},void 0,v.t("%{rangeStudents} out of %{totalStudents} students",{rangeStudents:e,totalStudents:t}))))}}var y=S
const O=Object(g["useScope"])("cyoe_assignment_sidebar_breakdown_graphs")
const{object:E,array:j,func:N,number:T,bool:I}=u.a
class w extends i.a.Component{renderContent(){return this.props.isLoading?Object(r["a"])("div",{className:"crs-breakdown-graph__loading"},void 0,Object(r["a"])(p["a"],{renderTitle:O.t("Loading"),size:"small"}),Object(r["a"])("p",{},void 0,O.t("Loading Data.."))):this.renderBars()}renderBars(){const{ranges:e,assignment:t,enrolled:n,openSidebar:a,selectRange:s}=this.props
return e.map(({size:e,scoring_range:i},o)=>Object(r["a"])(y,{rangeIndex:o,rangeStudents:e,totalStudents:n,upperBound:Object(_["b"])(i.upper_bound,t,true),lowerBound:Object(_["b"])(i.lower_bound,t,false),openSidebar:a,selectRange:s},o))}render(){return Object(r["a"])("div",{className:"crs-breakdown-graph"},void 0,Object(r["a"])("h2",{},void 0,O.t("Mastery Paths Breakdown")),this.renderContent())}}var k=w
var D=n("Xx/m")
var M=n("Ci/e")
var x=n("IRk9")
var C=n("KIj7")
var A=n("n12J")
var J=n("CyXg")
var B=n("HsON")
var L=n("TSYQ")
var R=n.n(L)
const{shape:z,string:P}=u.a
z({course_id:P.isRequired,trigger_assignment:P.isRequired})
const{shape:U,arrayOf:G,string:F,number:V}=u.a
U({course_id:V,name:F,title:F,grading_scheme:F,grading_type:F.isRequired,points_possible:V.isRequired,submission_types:G(F)})
const{shape:W,number:q}=u.a
W({range:q,student:q})
const{shape:H,string:$,number:K}=u.a
H({id:K.isRequired,name:$.isRequired,avatar_url:$})
const Z=Object(g["useScope"])("cyoe_assignment_sidebar_student_range_itme")
class Q extends i.a.Component{constructor(...e){super(...e)
this.selectStudent=()=>{this.props.selectStudent(this.props.studentIndex)}}render(){const e=this.props.student.user.avatar_image_url||"/images/messages/avatar-50.png"
const{trend:t}=this.props.student
const n=R()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===t,"crs-student__trend-icon__neutral":0===t,"crs-student__trend-icon__negative":-1===t})
const a=null!==t&&void 0!==t
return Object(r["a"])("div",{className:"crs-student-range__item"},void 0,Object(r["a"])("img",{src:e,className:"crs-student__avatar",onClick:this.selectStudent}),Object(r["a"])("button",{className:"crs-student__name crs-link-button",onClick:this.selectStudent,"aria-label":Z.t("Select student %{name}",{name:this.props.student.user.name})},void 0,this.props.student.user.name),a&&Object(r["a"])("span",{className:n}))}}const{object:X,func:Y}=u.a
class ee extends i.a.Component{render(){this.props.range.students
return Object(r["a"])("div",{className:"crs-student-range"},void 0,this.props.range.students.map((e,t)=>Object(r["a"])(Q,{student:e,studentIndex:t,selectStudent:this.props.onStudentSelect},e.user.id)))}}const te=Object(g["useScope"])("cyoe_assignment_sidebar_student_ranges_view")
const{array:ne,func:ae,object:re}=u.a
class se extends i.a.Component{constructor(e){super()
this.handleToggle=e=>{this.setState({selectedRange:e})}
this.state={selectedRange:e.selectedPath.range}}renderTabs(){return this.props.ranges.map((e,t)=>{const n=this.state.selectedRange===t
const a=Object(_["b"])(e.scoring_range.lower_bound,this.props.assignment,false)
const s=Object(_["b"])(e.scoring_range.upper_bound,this.props.assignment,true)
const i=`> ${a} - ${s}`
return Object(r["a"])(A["a"],{as:"div",padding:"xxx-small"},void 0,Object(r["a"])(C["a"],{variant:"filled",expanded:n,summary:i,onToggle:()=>this.handleToggle(t),size:"large",iconExpanded:J["a"],icon:B["a"]},t,Object(r["a"])(ee,{range:e,onStudentSelect:this.props.selectStudent})))})}render(){const e=!!this.props.student
const t=R()({"crs-ranges-view":true,"crs-ranges-view__hidden":e})
return Object(r["a"])("div",{className:t},void 0,Object(r["a"])("header",{className:"crs-ranges-view__header"},void 0,Object(r["a"])("h4",{},void 0,te.t("Mastery Paths Breakdown"))),this.renderTabs())}}var ie=n("vnQz")
const{object:oe,number:ce}=u.a
class le extends i.a.Component{render(){const{trend:e}=this.props
const t=R()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===e,"crs-student__trend-icon__neutral":0===e,"crs-student__trend-icon__negative":-1===e})
const n=null!==e&&void 0!==e
const a=ie["a"].getCategory(this.props.assignment).id
return Object(r["a"])("div",{className:"crs-student-details__assignment"},void 0,Object(r["a"])("i",{className:`icon-${a} crs-student-details__assignment-icon crs-icon-${a}`}),Object(r["a"])("div",{className:"crs-student-details__assignment-name"},void 0,this.props.assignment.name),Object(r["a"])("div",{className:"crs-student-details__assignment-score"},void 0,Object(r["a"])("div",{},void 0,Object(_["b"])(this.props.assignment.score,this.props.assignment,true)),n&&Object(r["a"])("span",{className:t})))}}var de,ue,pe,ge
const _e=Object(g["useScope"])("cyoe_assignment_sidebar_student_details_view")
const{shape:me,string:ve,number:be,arrayOf:he,func:fe,bool:Se}=u.a
class ye extends i.a.Component{componentDidUpdate(e){this.props.student&&!e.student&&setTimeout(()=>this.backButton.focus(),100)}renderHeader(){if(!this.props.student)return null
return Object(r["a"])("header",{className:"crs-student-details__header"},void 0,i.a.createElement("button",{className:"crs-breakdown__link crs-back-button",ref:e=>{this.backButton=e},onClick:this.props.unselectStudent},de||(de=Object(r["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"})),_e.t("Back")))}renderStudentProfile(){const{student:e,triggerAssignment:t}=this.props
const{assignment:n}=t
const a=e.avatar_image_url||"/images/messages/avatar-50.png"
const s=`/conversations?context_id=course_${n.course_id}&user_id=${e.id}&user_name=${e.name}`
return Object(r["a"])("section",{className:"crs-student-details__profile-content"},void 0,Object(r["a"])("button",{className:"Button Button--icon-action student-details__prev-student","aria-label":_e.t("view previous student"),onClick:this.props.selectPrevStudent,type:"button"},void 0,ue||(ue=Object(r["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"}))),Object(r["a"])("div",{className:"crs-student-details__profile-inner-content"},void 0,Object(r["a"])("img",{src:a,"aria-hidden":true,className:"crs-student-details__profile-image"}),Object(r["a"])("h3",{className:"crs-student-details__name"},void 0,e.name),Object(r["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:s,className:"crs-breakdown__link"},void 0,pe||(pe=Object(r["a"])("i",{"aria-hidden":true,className:"icon-email crs-icon-email"})),_e.t("Send Message"))),Object(r["a"])("button",{className:"Button Button--icon-action student-details__next-student","aria-label":_e.t("view next student"),onClick:this.props.selectNextStudent,type:"button"},void 0,ge||(ge=Object(r["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-right"}))))}renderTriggerAssignment(){const{student:e,triggerAssignment:t}=this.props
const{assignment:n,submission:a}=t||{}
const s=`/courses/${n.course_id}/assignments/${n.id}/submissions/${e.id}`
let i=null
i=a?a.submitted_at?_e.l("date.formats.long",new Date(a.submitted_at)):null:_e.t("Not Submitted")
return Object(r["a"])("section",{className:"crs-student-details__score-content"},void 0,Object(r["a"])("h3",{className:"crs-student-details__score-number"},void 0,Object(_["a"])(a.grade,n)),Object(r["a"])("div",{className:"crs-student-details__score-title"},void 0,n.name),i?Object(r["a"])("div",{className:"crs-student-details__score-date"},void 0,_e.t("Submitted: %{submitDate}",{submitDate:i})):null,Object(r["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:s,className:"crs-breakdown__link"},void 0,_e.t("View Submission")))}renderFollowOnAssignments(){const e=this.props.followOnAssignments||[]
return Object(r["a"])("section",{},void 0,e.map((e,t)=>Object(r["a"])(le,{assignment:e.assignment,score:e.score,trend:e.trend},t)))}renderContent(){if(this.props.isLoading)return Object(r["a"])("div",{className:"crs-student-details__loading"},void 0,Object(r["a"])(p["a"],{renderTitle:_e.t("Loading"),size:"small"}),Object(r["a"])("p",{},void 0,_e.t("Loading Data..")))
if(this.props.student)return Object(r["a"])("div",{},void 0,this.renderStudentProfile(),this.renderTriggerAssignment(),this.renderFollowOnAssignments())
return null}render(){const e=!this.props.student
const t=R()({"crs-student-details":true,"crs-student-details__hidden":e})
return Object(r["a"])("div",{className:t},void 0,this.renderHeader(),this.renderContent())}}const Oe=Object(g["useScope"])("cyoe_assignment_sidebar_breakdown_details")
const{array:Ee,object:je,func:Ne,bool:Te}=u.a
class Ie extends i.a.Component{constructor(...e){super(...e)
this.unselectStudent=()=>{this.props.selectStudent(null)}
this.selectPrevStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e>0?e-=1:e=t.size-1
this.props.selectStudent(e)}
this.selectNextStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e<t.size-1?e+=1:e=0
this.props.selectStudent(e)}}render(){const{selectedPath:e,ranges:t,students:n}=this.props
const a=null!==e.student?t[e.range].students[e.student].user:null
const s=null!==e.student&&a?n[a.id]:null
return Object(r["a"])(M["a"],{open:this.props.showDetails,placement:"end",shouldContainFocus:true,defaultFocusElement:()=>this.closeButton},void 0,Object(r["a"])("div",{className:"crs-breakdown-details"},void 0,Object(r["a"])("div",{className:"crs-breakdown-details__content"},void 0,Object(r["a"])("span",{className:"crs-breakdown-details__closeButton"},void 0,i.a.createElement(D["a"],{variant:"icon",ref:e=>{this.closeButton=e},onClick:this.props.closeSidebar},Object(r["a"])("span",{className:"crs-breakdown-details__closeButtonIcon"},void 0,Object(r["a"])(x["a"],{title:Oe.t("Close details sidebar")})))),Object(r["a"])(se,{assignment:this.props.assignment,ranges:t,selectedPath:e,selectStudent:this.props.selectStudent,student:a}),Object(r["a"])(ye,{isLoading:this.props.isStudentDetailsLoading,student:a,triggerAssignment:s&&s.triggerAssignment,followOnAssignments:s&&s.followOnAssignments,selectPrevStudent:this.selectPrevStudent,selectNextStudent:this.selectNextStudent,unselectStudent:this.unselectStudent}))))}}const we=Object(l["b"])(e=>({assignment:e.assignment,ranges:e.ranges,enrolled:e.enrolled,isLoading:e.isInitialDataLoading}))(k)
const ke=Object(l["b"])(e=>({isStudentDetailsLoading:e.isStudentDetailsLoading,selectedPath:e.selectedPath,assignment:e.assignment,ranges:e.ranges,students:e.studentCache,showDetails:e.showDetails}))(Ie)
class De{constructor(e,t){this.store=e
this.actions=t}renderGraphs(e){const t={openSidebar:this.actions.openSidebar,selectRange:this.actions.selectRange}
c.a.render(Object(r["a"])(l["a"],{store:this.store},void 0,i.a.createElement(we,t)),e)}renderDetails(e){const t={selectRange:this.actions.selectRange,selectStudent:this.actions.selectStudent,closeSidebar:this.actions.closeSidebar}
c.a.render(Object(r["a"])(l["a"],{store:this.store},void 0,i.a.createElement(ke,t)),e)}}var Me=n("sINF")
var xe=n("Y/W1")
var Ce=n.n(xe)
const Ae=(e,t)=>(n,a)=>{n=void 0===n?t:n
if(e[a.type]){let t=n
Ce.a.isObject(n)?t={...n}:Array.isArray(n)&&(t=n.slice())
return e[a.type](t,a)}return n}
const Je=(e,t)=>t.payload
const Be=(e="")=>(t,n)=>void 0===t?e:t
var Le=n("BrAc")
const Re={call:({apiUrl:e,jwt:t},n)=>Object(Le["a"])({url:e+n,dataType:"json",headers:{Authorization:"Bearer "+t}}).then(e=>e.data),loadInitialData(e){const t="/students_per_range?trigger_assignment="+e.assignment.id
return Re.call(e,t)},loadStudent(e,t){const n=`/student_details?trigger_assignment=${e.assignment.id}&student_id=${t}`
return Re.call(e,n)}}
var ze=Re
function Pe(e){const t=e.split("_")
return t.map((e,t)=>0!==t&&e.length?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():e.toLowerCase()).join("")}function Ue(e){const t=t=>({type:e,payload:t})
t.type=e
t.toString=()=>e
return t}function Ge(e){const t={}
const n={}
e.forEach(e=>{const a=Ue(e)
const r=Pe(a.type)
n[r]=a
t[a.type]=a.type})
return{actionTypes:t,actions:n}}const Fe=["SET_INITIAL_DATA","SET_SCORING_RANGES","SET_RULE","SET_ENROLLED","SET_ASSIGNMENT","SET_ERRORS","SET_STUDENT_DETAILS","SELECT_RANGE","ADD_STUDENT_TO_CACHE","SELECT_STUDENT","OPEN_SIDEBAR","CLOSE_SIDEBAR","LOAD_INITIAL_DATA_START","LOAD_INITIAL_DATA_END","LOAD_STUDENT_DETAILS_START","LOAD_STUDENT_DETAILS_END"]
const{actions:Ve,actionTypes:We}=Ge(Fe)
Ve.closeSidebarFrd=Ve.closeSidebar
Ve.closeSidebar=()=>(e,t)=>{const n=t().sidebarTrigger
e(Ve.closeSidebarFrd())
n.focus()}
Ve.loadInitialData=e=>(e,t)=>{e(Ve.loadInitialDataStart())
ze.loadInitialData(t()).then(t=>{e(Ve.setInitialData(t))
e(Ve.loadInitialDataEnd())}).catch(t=>{e(Ve.setErrors(t))
e(Ve.loadInitialDataEnd())})}
Ve.loadStudent=e=>(t,n)=>{t(Ve.loadStudentDetailsStart())
ze.loadStudent(n(),e).then(n=>{t(Ve.addStudentToCache({studentId:e,data:n}))
t(Ve.loadStudentDetailsEnd())}).catch(e=>{t(Ve.loadStudentDetailsEnd())
t(Ve.setErrors(e))})}
Ve.selectStudent=e=>(t,n)=>{t({type:We.SELECT_STUDENT,payload:e})
const{studentCache:a,ranges:r,selectedPath:s}=n()
const i=r[s.range].students[e]
i&&!a[i.user.id.toString()]&&t(Ve.loadStudent(i.user.id.toString()))}
const qe=Ae({[We.ADD_STUDENT_TO_CACHE]:(e,t)=>{const{studentId:n,data:a}=t.payload
e[n]={followOnAssignments:a.follow_on_assignments,triggerAssignment:a.trigger_assignment}
return e}},{})
const He=Ae({[We.LOAD_INITIAL_DATA_START]:()=>true,[We.LOAD_INITIAL_DATA_END]:()=>false},false)
const $e=Ae({[We.LOAD_STUDENT_DETAILS_START]:()=>true,[We.LOAD_STUDENT_DETAILS_END]:()=>false},false)
const Ke=Ae({[We.SET_ERRORS]:(e,t)=>[...Array.from(t.payload),...Array.from(e)]},[])
const Ze=Ae({[We.SET_INITIAL_DATA]:(e,t)=>t.payload.ranges,[We.SET_SCORING_RANGES]:Je},[])
const Qe=Ae({[We.SET_ASSIGNMENT]:Je},{})
const Xe=Ae({[We.SET_INITIAL_DATA]:(e,t)=>t.payload.rule,[We.SET_RULE]:Je},{course_id:"",trigger_assignment:""})
const Ye=Ae({[We.SET_INITIAL_DATA]:(e,t)=>t.payload.enrolled,[We.SET_ENROLLED]:Je},0)
const et=Ae({[We.OPEN_SIDEBAR]:(e,t)=>t.payload,[We.CLOSE_SIDEBAR]:()=>null},null)
const tt=Ae({[We.OPEN_SIDEBAR]:()=>true,[We.CLOSE_SIDEBAR]:()=>false,[We.SELECT_RANGE]:(e,t)=>null!==t.payload},false)
const nt=Ae({[We.SELECT_RANGE]:(e,t)=>{e.range=t.payload
return e},[We.SELECT_STUDENT]:(e,t)=>{e.student=t.payload
return e},[We.CLOSE_SIDEBAR]:e=>{e.student=null
return e}},{range:0,student:null})
var at=Object(a["combineReducers"])({apiUrl:Be(),jwt:Be(),studentCache:qe,isInitialDataLoading:He,isStudentDetailsLoading:$e,errors:Ke,ranges:Ze,assignment:Qe,rule:Xe,enrolled:Ye,sidebarTrigger:et,showDetails:tt,selectedPath:nt})
const rt=Object(a["applyMiddleware"])(Me["a"])(a["createStore"])
function st(e){return rt(at,e)}var it=st
const ot={init:(e,t)=>{const n=window.ENV
if(null!=e&&n.CONDITIONAL_RELEASE_SERVICE_ENABLED&&null!=n.CONDITIONAL_RELEASE_ENV.rule){const{assignment:r,stats_url:s}=n.CONDITIONAL_RELEASE_ENV
const i=document.createElement("div")
i.setAttribute("id","crs-details")
t.appendChild(i)
r.submission_types=Array.isArray(r.submission_types)?r.submission_types:[r.submission_types]
const o={assignment:r,apiUrl:s}
const c=it(o)
const l=Object(a["bindActionCreators"])(Ve,c.dispatch)
const d=new De(c,l)
d.renderGraphs(e)
d.renderDetails(i)
l.loadInitialData()
return d}}}
t["default"]=ot},CyXg:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var i=n("Ji7U")
var o=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("hPGw")
var u=l.a.createElement("path",{d:"M925.966182,1226.25955 C944.762449,1253.5558 975.234883,1253.55919 994.033486,1226.25955 L1345.1073,716.424242 C1363.90357,689.127987 1352.28747,667 1319.14817,667 L600.851498,667 C567.718398,667 556.093763,689.124596 574.892365,716.424242 L925.966182,1226.25955 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(-1 0 0 1 1920 0)"})
var p=function(e){Object(i["a"])(n,e)
var t=Object(o["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(s["a"])(n,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconMiniArrowDown",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconMiniArrowDownSolid"
return n}(c["Component"])
p.glyphName="mini-arrow-down"
p.variant="Solid"
p.propTypes=Object(a["a"])({},d["a"].propTypes)},FZ6K:function(e,t,n){"use strict"
var a=n("RtDj")
var r=n("q1tI")
var s=n.n(r)
n("17x9")
var i=n("bZJi")
var o=n("HGxv")
const c=Object(o["useScope"])("assignment")
function l(e){return s.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),c.t("SpeedGrader™"))}function d(e){const t=e.className?"icon-speed-grader "+e.className:"icon-speed-grader"
let n={className:t,href:e.href}
e.disabled&&(n={...n,"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}})
return e.disabled?Object(a["a"])(i["a"],{placement:"bottom",renderTip:e.disabledTip,color:"primary"},void 0,l(n)):l(n)}t["a"]=d},HsON:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var i=n("Ji7U")
var o=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("hPGw")
var u=l.a.createElement("path",{d:"M925.966182,1226.25955 C944.762449,1253.5558 975.234883,1253.55919 994.033486,1226.25955 L1345.1073,716.424242 C1363.90357,689.127987 1352.28747,667 1319.14817,667 L600.851498,667 C567.718398,667 556.093763,689.124596 574.892365,716.424242 L925.966182,1226.25955 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(0 1 1 0 -.278 .278)"})
var p=function(e){Object(i["a"])(n,e)
var t=Object(o["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(s["a"])(n,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconMiniArrowEnd",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
n.displayName="IconMiniArrowEndSolid"
return n}(c["Component"])
p.glyphName="mini-arrow-end"
p.variant="Solid"
p.propTypes=Object(a["a"])({},d["a"].propTypes)},KIj7:function(e,t,n){"use strict"
n.d(t,"a",(function(){return M}))
var a=n("rePB")
var r=n("VTBJ")
var s=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var c=n("LK+K")
var l=n("q1tI")
var d=n.n(l)
var u=n("17x9")
var p=n.n(u)
var g=n("TSYQ")
var _=n.n(g)
var m=n("Xx/m")
var v=n("rf+m")
var b=n("y2yB")
var h=n("5nFh")
var f=n("J2CL")
var S=n("cClk")
var y=n("jtGx")
var O=n("/UXv")
var E=n("oXx0")
function j(e){var t=e.colors,n=e.spacing,a=e.borders,r=e.typography
return{fontFamily:r.fontFamily,fontWeight:r.fontWeightNormal,lineHeight:r.lineHeight,textColor:t.textDarkest,fontSizeSmall:r.fontSizeSmall,fontSizeMedium:r.fontSizeMedium,fontSizeLarge:r.fontSizeLarge,smallIconSize:"0.5rem",mediumIconSize:"0.75rem",largeIconSize:"1rem",iconMargin:n.xxSmall,iconColor:t.textDarkest,togglePadding:n.xxSmall,toggleBorderRadius:a.radiusMedium,toggleBorderWidth:a.widthMedium,toggleBorderStyle:a.style,toggleFocusBorderColor:t.borderBrand,filledBackgroundColor:t.backgroundLight,filledBorderWidth:a.widthSmall,filledBorderStyle:a.style,filledBorderColor:t.borderMedium,filledBorderRadius:a.radiusMedium,filledPadding:n.small}}j["canvas"]=function(e){return{toggleFocusBorderColor:e["ic-brand-primary"],iconColor:e["ic-brand-font-color-dark"],textColor:e["ic-brand-font-color-dark"]}}
var N,T,I,w,k
var D={componentId:"MlJlv",template:function(e){return"\n\n.MlJlv_bGBk{font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit","}\n\n.MlJlv_doqw .MlJlv_ebWM,.MlJlv_doqw .MlJlv_cjSw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.MlJlv_doqw .MlJlv_dnnz{font-size:").concat(e.smallIconSize||"inherit","}\n\n.MlJlv_doqw .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_doqw .MlJlv_dUEG{padding-left:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_doqw .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_ycrn .MlJlv_ebWM,.MlJlv_ycrn .MlJlv_cjSw{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dnnz{font-size:").concat(e.mediumIconSize||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_ycrn .MlJlv_dUEG{padding-left:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_ycrn .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cMDj .MlJlv_ebWM,.MlJlv_cMDj .MlJlv_cjSw{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dnnz{font-size:").concat(e.largeIconSize||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_cMDj .MlJlv_dUEG{padding-left:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_cMDj .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cjSw{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:transparent;border:none;box-sizing:border-box;color:").concat(e.textColor||"inherit",";cursor:pointer;font-family:").concat(e.fontFamily||"inherit",";margin:0;outline:none;overflow:visible;padding:0;position:relative;text-decoration:none;touch-action:manipulation;user-select:none}\n\n.MlJlv_cjSw::-moz-focus-inner{margin:0;padding:0}\n\n.MlJlv_cjSw:before{border:").concat(e.toggleBorderWidth||"inherit"," ").concat(e.toggleBorderStyle||"inherit"," ").concat(e.toggleFocusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",'*1.5);bottom:-0.375rem;content:"";left:-0.375rem;opacity:0;pointer-events:none;position:absolute;right:-0.375rem;top:-0.375rem}\n\n.MlJlv_cjSw:focus:before{opacity:1}\n\n.MlJlv_cjSw:active,.MlJlv_cjSw:focus,.MlJlv_cjSw:hover{color:').concat(e.textColor||"inherit",";text-decoration:none}\n\n.MlJlv_cvfe{display:block;width:100%}\n\n.MlJlv_doNn{align-items:center;box-sizing:border-box;display:flex;position:relative;text-align:start}\n\n[dir=ltr] .MlJlv_doNn{text-align:left}\n\n[dir=rtl] .MlJlv_doNn{text-align:right}\n\n.MlJlv_dnnz{color:").concat(e.iconColor||"inherit","}\n\n.MlJlv_dnnz>svg{display:block}\n\n.MlJlv_fuNk{-webkit-margin-end:").concat(e.iconMargin||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.iconMargin||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .MlJlv_fuNk{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n[dir=rtl] .MlJlv_fuNk{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n.MlJlv_fhZl{-webkit-margin-end:0;-webkit-margin-start:").concat(e.iconMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(e.iconMargin||"inherit","}\n\n[dir=ltr] .MlJlv_fhZl{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .MlJlv_fhZl{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n.MlJlv_btWg{flex-grow:1;min-width:0.0625rem}\n\n.MlJlv_fFWz .MlJlv_btWg{flex:1}\n\n.MlJlv_ebWM{box-sizing:border-box;color:").concat(e.textColor||"inherit",";padding-top:").concat(e.togglePadding||"inherit","}\n\n.MlJlv_eFWP{display:none}\n\n.MlJlv_cMGi{display:block}\n\n@keyframes MlJlv_dFUU{to{opacity:1}}\n\n.MlJlv_caGd{animation-duration:0.3s;animation-fill-mode:forwards;animation-name:MlJlv_dFUU;opacity:0.01}")},root:"MlJlv_bGBk",small:"MlJlv_doqw",details:"MlJlv_ebWM",toggle:"MlJlv_cjSw",icon:"MlJlv_dnnz",indentDetails:"MlJlv_dUEG",medium:"MlJlv_ycrn",large:"MlJlv_cMDj",fluidWidth:"MlJlv_cvfe",summary:"MlJlv_doNn",iconStart:"MlJlv_fuNk",iconEnd:"MlJlv_fhZl",summaryText:"MlJlv_btWg",positionIconAtEnd:"MlJlv_fFWz",hiddenDetails:"MlJlv_eFWP",expandedDetails:"MlJlv_cMGi",content:"MlJlv_caGd",contentAnimation:"MlJlv_dFUU"}
var M=(N=Object(E["a"])(),T=Object(f["j"])(j,D),N(I=T(I=(k=w=function(e){Object(o["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(s["a"])(this,n)
for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i]
e=t.call.apply(t,[this].concat(r))
e.shouldAnimateContent=false
e.getButtonRef=function(t){return e._button=t}
return e}Object(i["a"])(n,[{key:"focus",value:function(){this._button.focus()}},{key:"componentDidMount",value:function(){this.shouldAnimateContent=true}},{key:"renderSummary",value:function(e){var t=this.props,n=t.summary,a=t.iconPosition
return d.a.createElement("span",{className:D.summary},"start"===a&&this.renderIcon(e),d.a.createElement("span",{className:D.summaryText},n),"end"===a&&this.renderIcon(e))}},{key:"renderToggle",value:function(e,t){var s=this.props,i=s.variant,o=s.fluidWidth
var c=Object(r["a"])({},Object(y["a"])(this.props,n.propTypes),{},e,{children:this.renderSummary()})
var l=this.renderSummary(t)
return"filled"===i?d.a.createElement(m["a"],Object.assign({},c,{display:"block",textAlign:"start",elementRef:this.getButtonRef}),l):c.href?d.a.createElement("a",Object.assign({},c,{className:_()(D.toggle,D[i],Object(a["a"])({},D.fluidWidth,o)),ref:this.getButtonRef}),l):d.a.createElement("button",Object.assign({},c,{type:"button",className:_()(D.toggle,D[i],Object(a["a"])({},D.fluidWidth,o)),ref:this.getButtonRef}),l)}},{key:"renderIcon",value:function(e){var t
var n=this.props.iconPosition
var r=e?this.props.iconExpanded:this.props.icon
return this.props.children?d.a.createElement("span",{className:_()(D.icon,(t={},Object(a["a"])(t,D.iconStart,"start"===n),Object(a["a"])(t,D.iconEnd,"end"===n),t))},d.a.createElement(r,null)):null}},{key:"renderDetails",value:function(e,t){var n
var r=this.props,s=r.children,i=r.size,o=r.iconPosition,c=r.fluidWidth
return d.a.createElement("div",Object.assign({},t,{className:_()(D.details,(n={},Object(a["a"])(n,D[i],i),Object(a["a"])(n,D.hiddenDetails,!e),Object(a["a"])(n,D.expandedDetails,e),Object(a["a"])(n,D.indentDetails,"start"===o&&!c),n))}),s&&e&&this.renderContent())}},{key:"renderContent",value:function(){return d.a.createElement("div",{className:_()(Object(a["a"])({},D.content,this.shouldAnimateContent))},this.props.children)}},{key:"render",value:function(){var e,t=this
var n=this.props,r=n.variant,s=n.iconPosition,i=n.fluidWidth
var o="end"===s&&("filled"===r||i)
var c=(e={},Object(a["a"])(e,D.root,true),Object(a["a"])(e,D[this.props.size],true),Object(a["a"])(e,D.positionIconAtEnd,o),e)
return d.a.createElement(h["a"],Object(y["c"])(this.props,h["a"].propTypes),(function(e){var n=e.expanded,a=e.getToggleProps,r=e.getDetailsProps
return d.a.createElement("div",{className:_()(c)},t.renderToggle(a(),n),t.renderDetails(n,r()))}))}},{key:"focused",get:function(){return Object(O["a"])(this._button)}}])
n.displayName="ToggleDetails"
return n}(l["Component"]),w.propTypes={variant:p.a.oneOf(["default","filled"]),summary:p.a.node.isRequired,expanded:Object(S["a"])(p.a.bool,"onToggle","defaultExpanded"),defaultExpanded:p.a.bool,onToggle:p.a.func,icon:p.a.func,iconExpanded:p.a.func,iconPosition:p.a.oneOf(["start","end"]),fluidWidth:p.a.bool,children:p.a.node,size:p.a.oneOf(["small","medium","large"])},w.defaultProps={variant:"default",size:"medium",fluidWidth:false,icon:v["a"],iconExpanded:b["a"],iconPosition:"start",defaultExpanded:false,onToggle:function(e,t){},children:null,expanded:void 0},k))||I)||I)},QJn8:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var a=n("ouhR")
var r=n.n(a)
n("XbwQ")
function s(){return r()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=r()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return r()(t).html()}catch(e){}}})}},QLaP:function(e,t,n){"use strict"
var a=function(e,t,n,a,r,s,i,o){false
if(!e){var c
if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var l=[n,a,r,s,i,o]
var d=0
c=new Error(t.replace(/%s/g,(function(){return l[d++]})))
c.name="Invariant Violation"}c.framesToPop=1
throw c}}
e.exports=a},UWEG:function(e,t,n){"use strict"
var a=n("ouhR")
var r=n.n(a)
n("dhbk")
t["a"]={toggle(e){const t=r()(e).data.bind(r()(e))
return r.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
r()(e).toggleClass("btn-success")
r()("i",e).toggleClass("icon-empty icon-complete")
r()(".mark-done-labels span",e).toggleClass("visible")})}}},Z6JD:function(e,t,n){"use strict"
n.d(t,"b",(function(){return g}))
n.d(t,"a",(function(){return h}))
var a=n("HGxv")
const r=Object(a["useScope"])("cyoe_assignment_sidebar_grading_types")
const s={points:{get label(){return r.t("points")},key:"points"},percent:{get label(){return r.t("percent")},key:"percent"},letter_grade:{get label(){return r.t("letter grade")},key:"letter_grade"},gpa_scale:{get label(){return r.t("GPA scale")},key:"gpa_scale"},other:{get label(){return r.t("other")},key:"other"}}
var i=s
var o=n("FdVj")
const c=Object(a["useScope"])("cyoe_assignment_sidebar_score")
const l=e=>{const t=o["a"].parse(e)
return!isNaN(t)&&isFinite(t)}
const d=e=>!!e&&!!e.grading_scheme
const u=e=>{const t=e?e.grading_type:i.percent.key
if((t===i.letter_grade.key||t===i.gpa_scale.key)&&!d(e))return i.percent.key
return t}
const p=(e,t)=>{const n=u(t)
return n===i.points.key?m(e,t):n===i.letter_grade.key||n===i.gpa_scale.key?v(e,t):b(e)}
const g=(e,t,n)=>{e||(e=n?"1":"0")
return _(p(e,t),t)}
const _=(e,t)=>{const n=u(t)
return n===i.points.key?c.t("%{score} pts",{score:c.n(e,{precision:2,strip_insignificant_zeros:true})}):n===i.letter_grade.key||n===i.gpa_scale.key?e:c.n(e,{precision:2,percentage:true,strip_insignificant_zeros:true})}
const m=(e,t)=>{if(!l(e))return e
if(0===e)return"0"
const n=o["a"].parse(e)
const a=Number(t.points_possible)||100
return parseFloat((n*a).toFixed(2))}
const v=(e,t)=>{if(""===e)return""
const n=o["a"].parse(e)
const a={letter:null,score:-Infinity}
for(const e in t.grading_scheme){const r=o["a"].parse(t.grading_scheme[e])
if(r<=n&&r>a.score||0===r&&r>n){a.score=r
a.letter=e}}return a.letter?a.letter:n}
const b=e=>{if(!l(e))return e
return Math.floor(100*e)}
const h=(e,t)=>{if("string"===typeof e&&t.grading_type!==i.letter_grade.key&&t.grading_type!==i.gpa_scale.key){const n=o["a"].parse(e.replace(/%$/,""))
if(!isNaN(n))return _(n,t)}return e}},dI71:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var a=n("s4An")
function r(e,t){e.prototype=Object.create(t.prototype)
e.prototype.constructor=e
Object(a["a"])(e,t)}},"dwl/":function(e,t,n){"use strict"
var a=n("RtDj")
n("17x9")
var r=n("sTNg")
var s=n("HGxv")
n("q1tI")
const i=Object(s["useScope"])("assignment")
function o(e){return Object(a["a"])("option",{value:e.id},e.id,e.name)}function c(e){return Object(a["a"])("optgroup",{label:e.name},"group_category_"+e.id,e.groups.map(e=>o(e)))}function l(e){return Object(a["a"])(r["a"],{id:"student-group-filter",label:e.label},void 0,Object(a["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(a["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",i.t("Select One")),e.categories.map(e=>c(e))))}t["a"]=l},jbBh:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("ouhR")
var r=n.n(a)
var s=n("HGxv")
n("Dhso")
const i=Object(s["useScope"])("assignment!reupload_submissions_helper")
const o="re_upload_submissions_form"
function c({submissions_zip:e}){if(!e)return false
if(!e.match(/\.zip$/)){r()(this).formErrors({submissions_zip:i.t("Please upload files as a .zip")})
return false}const t=this.find('button[type="submit"]')
t.attr("disabled",true)
t.text(i.t("Uploading..."))
return true}function l(e){const t=r()("#"+o)
t.find('input[name="submissions_zip"]').remove()
t.removeAttr("enctype")
t.append(`<input type="hidden" name="attachment_id" value="${e.id}">`)
document.getElementById(o).submit()}function d(e){const t=this.find('button[type="submit"]')
t.attr("disabled",false)
t.text(i.t("Upload Files"))
return this}function u(e){return{errorMessage:i.t("Upload error. Please try again.")}}function p(e){const t={fileUpload:true,fileUploadOptions:{context_code:e,formDataTarget:"uploadDataUrl",intent:"submissions_zip_upload",preparedFileUpload:true,singleFile:true,upload_only:true,preferFileValueForInputName:false},object_name:"attachment",beforeSubmit:c,error:d,errorFormatter:u,success:l}
r()("#"+o).formSubmit(t)
return t}},"rf+m":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var i=n("Ji7U")
var o=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("hPGw")
var u=l.a.createElement("path",{d:"M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(i["a"])(n,e)
var t=Object(o["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(s["a"])(n,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
n.displayName="IconArrowOpenEndSolid"
return n}(c["Component"])
p.glyphName="arrow-open-end"
p.variant="Solid"
p.propTypes=Object(a["a"])({},d["a"].propTypes)},vnQz:function(e,t,n){"use strict"
var a=n("Y/W1")
var r=n.n(a)
var s=n("HGxv")
const i=Object(s["useScope"])("assignment_categories")
const o={label:i.t("Other"),id:"other",submissionTypes:[""]}
const c={list:[{label:i.t("Assignments"),id:"assignment",contentTypeClass:"assignment",submissionTypes:["online_upload","online_text_entry","online_url","on_paper","external_tool","not_graded","media_recording","none"]},{label:i.t("Quizzes"),id:"quiz",contentTypeClass:"quiz",submissionTypes:["online_quiz"]},{label:i.t("Discussions"),id:"discussion",contentTypeClass:"discussion_topic",submissionTypes:["discussion_topic"]},{label:i.t("Wiki"),id:"document",contentTypeClass:"wiki_page",submissionTypes:["wiki_page"]},o]}
c.getCategory=e=>{const t=r.a.find(c.list,t=>e.submission_types.length&&r.a.find(e.submission_types,e=>-1!==t.submissionTypes.indexOf(e)))
return t||o}
t["a"]=c},wx14:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(){a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}
return a.apply(this,arguments)}},xHU4:function(e,t,n){"use strict"
n.r(t)
var a=n("RtDj")
var r=n("ik22")
var s=n("HGxv")
var i=n("ouhR")
var o=n.n(i)
n("q1tI")
var c=n("i8i4")
var l=n.n(c)
var d=n("BrAc")
var u=n("Qyje")
var p=n.n(u)
var g=n("ygkh")
var _=n("Vovh")
var m=n("mX+G")
var v=n.n(m)
var b=function(e,t){return function(){return e.apply(t,arguments)}},h=function(e,t){for(var n in t)f.call(t,n)&&(e[n]=t[n])
function a(){this.constructor=e}a.prototype=t.prototype
e.prototype=new a
e.__super__=t.prototype
return e},f={}.hasOwnProperty
var S=function(e){h(t,e)
function t(){this.toggleSpeedgraderLink=b(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(v.a.View)
var y=n("QJn8")
var O=n("UWEG")
var E=n("6dnZ")
n("Dhso")
var j=n("40dz")
var N=n("VrCy")
var T=n("dwl/")
var I=n("FZ6K")
var w=n("QbG7")
var k=n("Nuch")
var D=n("jbBh")
var M=n("3lLS")
var x=n.n(M)
const C=Object(s["useScope"])("assignment")
x()(()=>{const e=new j["default"]
e.init({itemType:"assignment",page:"show"})
R()})
let A=[]
function J(e){if("0"!==e){const t={selectedStudentGroupId:e}
A.push(t)
ENV.selected_student_group_id=e
L()
B()
d["a"].put(`/api/v1/courses/${ENV.COURSE_ID}/gradebook_settings`,p.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}})).finally(()=>{A=A.filter(e=>e!==t)
B()})}}function B(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&(!ENV.selected_student_group_id||A.length>0)
const t=document.getElementById("speed_grader_link_mount_point")
t&&l.a.render(Object(a["a"])(I["a"],{disabled:e,href:ENV.speed_grader_url,disabledTip:C.t("Must select a student group first")}),t)}function L(){const e=document.getElementById("student_group_filter_mount_point")
e&&l.a.render(Object(a["a"])(T["a"],{categories:ENV.group_categories,label:C.t("Select Group to Grade"),onChange:J,value:ENV.selected_student_group_id}),e)}function R(){const e=document.getElementById("course_paces_due_date_notice")
e&&n.e(4199).then(n.bind(null,"5OOk")).then(t=>{const n=t.renderCoursePacingNotice
n(e,ENV.COURSE_ID)}).catch(e=>{console.error("Falied loading CoursePacingNotice",e)})}x()(()=>{const e=document.getElementById("immersive_reader_mount_point")
const t=document.getElementById("immersive_reader_mobile_mount_point");(e||t)&&n.e(133).then(n.bind(null,"AZYJ")).then(n=>{var a
const r=()=>{var e
return null===(e=document.querySelector(".description"))||void 0===e?void 0:e.innerHTML}
const s=null===(a=document.querySelector(".title"))||void 0===a?void 0:a.textContent
e&&n.initializeReaderButton(e,{content:r,title:s})
t&&n.initializeReaderButton(t,{content:r,title:s})}).catch(e=>{console.log("Error loading immersive readers.",e)})})
const z=Promise.all([n.e(14),n.e(189)]).then(n.bind(null,"fY8A"))
o()(()=>{const e=o()("#assignment_publish_button")
if(e.length>0){const t=new g["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new S({model:t,el:"#assignment-speedgrader-link"}).render()
const n=new _["a"]({model:t,el:e})
n.render()
n.on("publish",()=>o()("#moderated_grading_button").show())
n.on("unpublish",()=>o()("#moderated_grading_button").hide())}z.then(()=>{o()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:window.location})})
return Object(y["a"])()})
o()(()=>o()("#content").on("click","#mark-as-done-checkbox",(function(){return O["a"].toggle(this)})))
function P(e,t=true){e&&e.preventDefault()
l.a.render(Object(a["a"])(w["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentShare:{content_type:"assignment",content_id:ENV.ASSIGNMENT_ID},onDismiss:()=>{P(null,false)
o()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}function U(e,t=true){e&&e.preventDefault()
l.a.render(Object(a["a"])(k["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentSelection:{assignments:[ENV.ASSIGNMENT_ID]},onDismiss:()=>{U(null,false)
o()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}o()(()=>{o()(".direct-share-send-to-menu-item").click(P)
o()(".direct-share-copy-to-menu-item").click(U)})
o()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&L()
B()}})
o()(()=>{o()(".upload_submissions_link").click(e=>{e.preventDefault()
o()("#re_upload_submissions_form").slideToggle()})
o()(".download_submissions_link").click((function(e){e.preventDefault()
r["a"].downloadSubmissions(o()(this).attr("href"))
o()(".upload_submissions_link").slideDown()}))
Object(D["a"])(ENV.USER_ASSET_STRING)
o()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?o()(".assignment_peer_reviews_link").slideDown():o()(".assignment_peer_reviews_link").slideUp()})})
o()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
E["default"].init(e,t)
document.getElementById("assignment_external_tools")&&N["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})
x()(()=>{o()("#accessibility_warning").on("focus",(function(){o()("#accessibility_warning").removeClass("screenreader-only")}))
o()("#accessibility_warning").on("blur",(function(){o()("#accessibility_warning").addClass("screenreader-only")}))})},y2yB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var i=n("Ji7U")
var o=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("hPGw")
var u=l.a.createElement("path",{d:"M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(0 1 1 0 .067 -.067)"})
var p=function(e){Object(i["a"])(n,e)
var t=Object(o["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(s["a"])(n,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconArrowOpenDownSolid"
return n}(c["Component"])
p.glyphName="arrow-open-down"
p.variant="Solid"
p.propTypes=Object(a["a"])({},d["a"].propTypes)}}])

//# sourceMappingURL=assignment_show-c-9d54773ed7.js.map