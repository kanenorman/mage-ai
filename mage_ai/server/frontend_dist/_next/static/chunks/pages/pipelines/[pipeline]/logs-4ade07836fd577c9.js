(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4794],{59739:function(e,n,t){"use strict";var r=t(56669);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,c){if(c!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2850:function(e,n,t){"use strict";t.d(n,{M:function(){return c},W:function(){return o}});var r=t(38626),i=t(3055),o=34*t(49125).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},18025:function(e,n,t){"use strict";t.d(n,{J:function(){return u},U:function(){return l}});var r=t(38626),i=t(23831),o=t(73942),c=t(49125),l=r.default.div.withConfig({displayName:"indexstyle__CardStyle",componentId:"sc-m7tlau-0"})(["border-radius:","px;border-style:solid;border-width:2px;height:","px;margin-right:","px;padding:","px;width:","px;"," ",""],o.TR,14*c.iI,c.cd*c.iI,c.cd*c.iI,40*c.iI,(function(e){return!e.selected&&"\n    border-color: ".concat((e.theme.borders||i.Z.borders).light,";\n  ")}),(function(e){return e.selected&&"\n    border-color: ".concat((e.theme.interactive||i.Z.interactive).linkPrimary,";\n  ")})),u=r.default.div.withConfig({displayName:"indexstyle__DateSelectionContainer",componentId:"sc-m7tlau-1"})(["border-radius:","px;padding:","px;"," "," ",""],o.n_,c.tr,(function(e){return"\n    background-color: ".concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.absolute&&"\n    position: absolute;\n    z-index: 2;\n    right: 0;\n    top: ".concat(2.5*c.iI,"px;\n  ")}),(function(e){return e.topPosition&&"\n    top: -".concat(42*c.iI,"px;\n  ")}))},2713:function(e,n,t){"use strict";var r=t(82394),i=t(44495),o=t(67971),c=t(55378),l=t(86673),u=t(19711),a=t(18025),s=t(49125),d=t(24224),p=t(28598);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.selectedDate,t=e.selectedTime,r=e.setSelectedDate,f=e.setSelectedTime,m=e.topPosition;return(0,p.jsxs)(a.J,{absolute:!0,topPosition:m,children:[(0,p.jsx)(i.ZP,{onChange:r,value:n}),(0,p.jsx)(l.Z,{mb:2}),(0,p.jsxs)(o.Z,{alignItems:"center",children:[(0,p.jsx)(u.ZP,{default:!0,large:!0,children:"Time (UTC):"}),(0,p.jsx)(l.Z,{pr:2}),(0,p.jsx)(c.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),f((function(n){return h(h({},n),{},{hour:e.target.value})}))},paddingRight:5*s.iI,placeholder:"HH",value:null===t||void 0===t?void 0:t.hour,children:(0,d.m5)(24,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,p.jsx)("option",{value:e,children:e},"hour_".concat(e))}))}),(0,p.jsx)(l.Z,{px:1,children:(0,p.jsx)(u.ZP,{bold:!0,large:!0,children:":"})}),(0,p.jsx)(c.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),f((function(n){return h(h({},n),{},{minute:e.target.value})}))},paddingRight:5*s.iI,placeholder:"MM",value:null===t||void 0===t?void 0:t.minute,children:(0,d.m5)(60,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,p.jsx)("option",{value:e,children:e},"minute_".concat(e))}))})]})]})}},19464:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return nn}});var r,i=t(77837),o=t(82394),c=t(38860),l=t.n(c),u=t(38626),a=t(4804),s=t(82684),d=t(86422),p=t(34744),f=t(60328),h=t(38341),m=t(16634),v=t(67971),g=t(86673),j=t(19711),b=t(2850),x=t(49125),y=u.default.div.withConfig({displayName:"indexstyle__FilterRowStyle",componentId:"sc-kvapsi-0"})(["padding-bottom:","px;padding-top:","px;"],x.iI/2,x.iI/2);!function(e){e.CRITICAL="CRITICAL",e.DEBUG="DEBUG",e.ERROR="ERROR",e.EXCEPTION="EXCEPTION",e.INFO="INFO",e.LOG="LOG",e.WARNING="WARNING"}(r||(r={}));var O,Z=[r.CRITICAL,r.DEBUG,r.ERROR,r.EXCEPTION,r.INFO,r.LOG,r.WARNING];!function(e){e.LAST_HOUR="Last hour",e.LAST_DAY="Last day",e.LAST_WEEK="Last week",e.LAST_30_DAYS="Last 30 days",e.CUSTOM_RANGE="Custom range"}(O||(O={}));var _=t(73942),P=t(73899);var w=(0,u.css)(["",""],(function(e){return"\n    background-color: ".concat(function(e){var n=e.critical,t=e.debug,r=e.error,i=e.exception,o=e.info,c=e.log,l=e.warning;return n?P.Zl:t?P.EG:r?P.hl:i?P.hM:o?P.gN:c?P.Wd:l?P.$R:"transparent"}(e),";\n  ")})),S=u.default.div.withConfig({displayName:"indexstyle__LogLevelIndicatorStyle",componentId:"sc-1e2zh7m-0"})([""," border-radius:","px;height:12px;width:5px;"],w,_.n_),k=t(90211),I=t(44162),C=t(33766),D=t(28598);function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=function(e){var n=e.blocks,t=e.query,r=(0,s.useContext)(u.ThemeContext),i=(0,s.useMemo)((function(){return t["level[]"]}),[t]),c=(0,s.useMemo)((function(){return t["block_type[]"]}),[t]),l=(0,s.useMemo)((function(){return t["block_uuid[]"]}),[t]),a=(0,s.useMemo)((function(){return t["pipeline_schedule_id[]"]}),[t]),p=(0,s.useMemo)((function(){return t["pipeline_run_id[]"]}),[t]),O=(0,s.useMemo)((function(){return t["block_run_id[]"]}),[t]);return(0,D.jsx)(b.M,{children:(0,D.jsxs)(g.Z,{p:x.cd,children:[(0,D.jsxs)(g.Z,{mb:3,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(j.ZP,{bold:!0,default:!0,large:!0,children:"Log level"})}),Z.map((function(e){return(0,D.jsx)(f.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return(0,C.g_)(t,{level:e},{isList:!0})},children:(0,D.jsx)(y,{children:(0,D.jsxs)(v.Z,{alignItems:"center",children:[(0,D.jsx)(h.Z,{checked:Array.isArray(i)&&(null===i||void 0===i?void 0:i.includes(String(e)))}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(S,E({},(0,o.Z)({},e.toLowerCase(),!0))),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(j.ZP,{disableWordBreak:!0,children:(0,k.kC)(e.toLowerCase())})]})})},e)}))]}),(0,D.jsxs)(g.Z,{mb:3,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(j.ZP,{bold:!0,default:!0,large:!0,children:"Block type"})}),[d.tf.DATA_LOADER,d.tf.TRANSFORMER,d.tf.DATA_EXPORTER].map((function(e){return(0,D.jsx)(f.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return(0,C.g_)(t,{block_type:e},{isList:!0})},children:(0,D.jsx)(y,{children:(0,D.jsxs)(v.Z,{alignItems:"center",children:[(0,D.jsx)(h.Z,{checked:Array.isArray(c)&&(null===c||void 0===c?void 0:c.includes(String(e)))}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(m.Z,{color:(0,I.qn)(e,{theme:r}).accent,size:1.5*x.iI,square:!0}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(j.ZP,{disableWordBreak:!0,muted:!0,monospace:!0,children:e})]})})},e)}))]}),(0,D.jsxs)(g.Z,{mb:3,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(j.ZP,{bold:!0,default:!0,large:!0,children:"Block"})}),n.filter((function(e){var n=e.type;return d.tf.SCRATCHPAD!==n})).map((function(e){return(0,D.jsx)(f.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return(0,C.g_)(t,{block_uuid:e.uuid},{isList:!0,resetLimitParams:!0})},children:(0,D.jsx)(y,{children:(0,D.jsxs)(v.Z,{alignItems:"center",children:[(0,D.jsx)(h.Z,{checked:Array.isArray(l)&&(null===l||void 0===l?void 0:l.includes(String(e.uuid)))}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(m.Z,{color:(0,I.qn)(e.type,{blockColor:e.color,theme:r}).accent,size:1.5*x.iI,square:!0}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(j.ZP,{disableWordBreak:!0,monospace:!0,muted:!0,children:e.uuid})]})})},e.uuid)}))]}),(null===a||void 0===a?void 0:a.length)&&(0,D.jsxs)(g.Z,{mb:3,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(j.ZP,{bold:!0,default:!0,large:!0,children:"Trigger"})}),a.map((function(e){return(0,D.jsx)(f.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return(0,C.g_)(t,{pipeline_schedule_id:e},{isList:!0})},children:(0,D.jsx)(y,{children:(0,D.jsxs)(v.Z,{alignItems:"center",children:[(0,D.jsx)(h.Z,{checked:Array.isArray(a)&&(null===a||void 0===a?void 0:a.includes(e))}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(j.ZP,{disableWordBreak:!0,monospace:!0,children:e})]})})},"pipeline-schedule-".concat(e))}))]}),(null===p||void 0===p?void 0:p.length)&&(0,D.jsxs)(g.Z,{mb:3,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(j.ZP,{bold:!0,default:!0,large:!0,children:"Pipeline run"})}),p.map((function(e){return(0,D.jsx)(f.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return(0,C.g_)(t,{pipeline_run_id:e},{isList:!0})},children:(0,D.jsx)(y,{children:(0,D.jsxs)(v.Z,{alignItems:"center",children:[(0,D.jsx)(h.Z,{checked:Array.isArray(p)&&(null===p||void 0===p?void 0:p.includes(e))}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(j.ZP,{disableWordBreak:!0,monospace:!0,children:e})]})})},"pipeline-run-".concat(e))}))]}),(null===O||void 0===O?void 0:O.length)&&(0,D.jsxs)(g.Z,{mb:3,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(j.ZP,{bold:!0,default:!0,large:!0,children:"Block run"})}),O.map((function(e){return(0,D.jsx)(f.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return(0,C.g_)(t,{block_run_id:e},{isList:!0})},children:(0,D.jsx)(y,{children:(0,D.jsxs)(v.Z,{alignItems:"center",children:[(0,D.jsx)(h.Z,{checked:Array.isArray(O)&&(null===O||void 0===O?void 0:O.includes(e))}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(j.ZP,{disableWordBreak:!0,monospace:!0,children:e})]})})},"block-run-".concat(e))}))]})]})})},L=t(11135),R=t(75582),M=t(32316),N=t(93461),B=t(10919),Y=t(87815),W=u.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-1r43sbu-0"})([""," height:","px;width:100%;"],w,.5*x.iI),H=u.default.div.withConfig({displayName:"indexstyle__BadgeStyle",componentId:"sc-1r43sbu-1"})([""," border-radius:","px;display:inline-block;padding:","px ","px;"],w,_.BG,.25*x.iI,.5*x.iI),U=t(10503),J=t(92083),G=t.n(J);function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$/,K=/([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}) (.+)/;function X(e){var n=e.content.trim().split(K),t=[],r=[];return n.forEach((function(e){var n=e.trim();z.test(e)?(r.length>=1&&t.push(r.join(" ").trim()),r=[e]):r.filter((function(e){return e})).length<=1&&n&&r.push(n)})),t.push(r.join(" ").trim()),t.map((function(n){return function(e){var n=e.content.trim().match(K),t=null===n||void 0===n?void 0:n[1],r=null===n||void 0===n?void 0:n[2],i={};return r&&(0,k.Pb)(r)&&(i=JSON.parse(r)),F(F({},e),{},{createdAt:t,data:i})}(F(F({},e),{},{content:n}))}))}function V(e){return e&&G().unix(e).utc().format("YYYY-MM-DD HH:mm:ss.SSS")}var $=t(24224);function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ne=["error","error_stack","error_stacktrace"],te={uuid:"Details"},re={uuid:"Errors"};var ie=function(e){var n=e.log,t=e.onClose,r=e.selectedTab,i=e.setSelectedTab,c=(0,s.useState)(!1),l=c[0],u=c[1],a=n.data,d=n.name,h=n.path,m=a||{},b=m.error,y=m.error_stack,O=m.error_stacktrace,Z=m.level,_=m.timestamp,P=(0,o.Z)({},Z.toLowerCase(),!0),w=(0,s.useMemo)((function(){var e=[["file name",d],["file path",h]];return Object.entries(a).forEach((function(n){var t=(0,R.Z)(n,2),r=t[0],i=t[1];ne.includes(r)||e.push([r,i])})),O&&e.push(["error",O]),(0,$.YC)(e,(function(e){var n=(0,R.Z)(e,2),t=n[0];n[1];return t}))}),[a,O,d,h]),S=(0,s.useMemo)((function(){var e=[te];return b&&e.push(re),(0,D.jsx)(M.Z,{onClickTab:i,selectedTabUUID:null===r||void 0===r?void 0:r.uuid,tabs:e})}),[b,r,i]);return(0,D.jsxs)("div",{children:[(0,D.jsx)(W,ee({},P)),(0,D.jsx)(g.Z,{p:x.cd,children:(0,D.jsxs)(v.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,D.jsxs)(N.Z,{alignItems:"center",children:[(0,D.jsx)(H,ee(ee({},P),{},{children:(0,D.jsx)(j.ZP,{bold:!0,inverted:!0,monospace:!0,small:!0,children:Z})})),(0,D.jsx)(g.Z,{mr:x.cd}),(0,D.jsx)(j.ZP,{monospace:!0,children:V(_)})]}),(0,D.jsx)(f.Z,{iconOnly:!0,noBackground:!0,onClick:function(){return t()},children:(0,D.jsx)(U.x8,{size:1.5*x.iI})})]})}),(0,D.jsx)(p.Z,{medium:!0}),(0,D.jsx)(g.Z,{py:x.cd,children:S}),te.uuid===(null===r||void 0===r?void 0:r.uuid)&&(0,D.jsx)(Y.Z,{columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:null===w||void 0===w?void 0:w.map((function(e,n){var t=(0,R.Z)(e,2),r=t[0],i=t[1],o="message"===r,c="tags"===r,a=i,s=i;return c?s=a=(0,k.Pb)(i)?JSON.parse(JSON.stringify(i,null,2)):JSON.stringify(i,null,2):o&&l&&(0,k.Pb)(i)&&(s=JSON.stringify(JSON.parse(i),null,2),a=(0,D.jsx)("pre",{children:s})),[(0,D.jsx)(j.ZP,{monospace:!0,muted:!0,children:r},"".concat(r,"_").concat(n,"_key")),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(j.ZP,{monospace:!0,textOverflow:!0,title:s,whiteSpaceNormal:o&&l||c,wordBreak:o&&l||c,children:[!c&&a,c&&(0,D.jsx)("pre",{children:a})]},"".concat(r,"_").concat(n,"_val")),o&&(0,D.jsx)(B.Z,{muted:!0,onClick:function(){return u((function(e){return!e}))},children:l?"Click to hide log":"Click to show full log message"})]})]})),uuid:"LogDetail"}),re.uuid===(null===r||void 0===r?void 0:r.uuid)&&(0,D.jsxs)(g.Z,{mb:5,px:x.cd,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(j.ZP,{bold:!0,children:"Error"})}),null===b||void 0===b?void 0:b.map((function(e){return e.split("\n").map((function(e){return e.split("\\n").map((function(e){return(0,D.jsx)(j.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:e},e)}))}))})),y&&(0,D.jsxs)(g.Z,{mt:3,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(j.ZP,{bold:!0,children:"Stack trace"})}),null===y||void 0===y?void 0:y.map((function(e){return null===e||void 0===e?void 0:e.map((function(e){return(0,D.jsx)(j.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:e},e)}))}))]})]})]})},oe=t(60547),ce=t(98781),le=t(41788),ue=t(54283),ae=t(21831),se=t(89565),de=t.n(se),pe=t(12691),fe=t.n(pe),he=t(72487),me=t(3055),ve=t(23831),ge=t(37391),je=u.default.div.withConfig({displayName:"indexstyle__TableContainer",componentId:"sc-16j4vp6-0"})([".table_row > div{margin:","px ","px;}div{","}"],.5*x.iI,x.iI,ge.w5),be=u.default.div.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-16j4vp6-1"})(["display:flex;align-items:center;overflow:hidden;",""],(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme||ve.Z).borders.medium2,";\n  ")})),xe=u.default.div.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-16j4vp6-2"})(["display:flex;align-items:center;"," "," ",""],(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme||ve.Z).borders.light,";\n\n    &:hover {\n      cursor: pointer;\n    }\n  ")}),(function(e){return!e.selected&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||ve.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||ve.Z.interactive).activeBorder,";\n  ")})),ye=t(62976),Oe=t(24141);function Ze(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _e(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ze(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ze(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Pe="log_uuid";var we,Se,ke,Ie=function(e){var n=e.blocksByUUID,t=e.logs,r=e.onRowClick,i=e.pipeline,c=e.query,l=e.setSelectedLog,u=e.themeContext,a=(0,Oe.i)().height,d=(0,s.useMemo)((function(){return ce.qL.INTEGRATION===(null===i||void 0===i?void 0:i.type)}),[i.type]),p=Object.keys(n||{});if(d){var f,h,b=((null===i||void 0===i||null===(f=i.data_integration)||void 0===f||null===(h=f.catalog)||void 0===h?void 0:h.streams)||[]).map((function(e){return e.tap_stream_id})),y=new Set;p.forEach((function(e){b.forEach((function(n){return y.add("".concat(e,":").concat(n,":0"))}))})),p=Array.from(y)}var O=Math.max.apply(Math,(0,ae.Z)(p.map((function(e){return e.length})))),Z=Math.min(O*ye.r+12+8,50*x.iI),_=[{uuid:"_",width:28},{uuid:"Date",width:214},{uuid:"Block",width:Z+16},{uuid:"Message"},{uuid:"_"}],P=(0,s.useCallback)((function(e){var n,t,i,u=e.data,a=e.index,s=e.style,p=u.blocksByUUID,f=u.logs,h=u.themeContext,b=f[a],y=b.content,O=b.data,_=b.name,P=O||{},w=P.block_uuid,k=P.level,T=P.message,E=P.pipeline_uuid,A=P.timestamp,L=P.uuid,R=w||_.split(".log")[0],M=R.split(":");d&&(R=M[0],t=M[1],i=M[2]);var Y=p[R];if(Y||(Y=p[M[0]]),Y){var W=(0,I.qn)(Y.type,{blockColor:Y.color,theme:h}).accent;n=(0,D.jsx)(v.Z,{alignItems:"center",children:(0,D.jsx)(fe(),{as:"/pipelines/".concat(E,"/edit?block_uuid=").concat(R),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,D.jsxs)(B.Z,{block:!0,fullWidth:!0,sameColorAsText:!0,verticalAlignContent:!0,children:[(0,D.jsx)(m.Z,{color:W,size:1.5*x.iI,square:!0}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsxs)(j.ZP,{disableWordBreak:!0,monospace:!0,noWrapping:!0,title:w,width:Z-16,children:[R,t&&":",t&&(0,D.jsx)(j.ZP,{default:!0,inline:!0,monospace:!0,children:t}),i>=0&&":",i>=0&&(0,D.jsx)(j.ZP,{default:!0,inline:!0,monospace:!0,children:i})]})]})})})}return(0,D.jsxs)(xe,{className:"table_row",onClick:function(){var e,n,t=f[a],i=null===(e=t.data)||void 0===e?void 0:e.uuid;c.log_uuid===i&&(i=null),null!==(n=t.data)&&void 0!==n&&n.error?null===r||void 0===r||r(re):null===r||void 0===r||r(te),(0,C.u7)((0,o.Z)({},Pe,i)),l(i?t:null)},selected:(null===c||void 0===c?void 0:c.log_uuid)&&(null===c||void 0===c?void 0:c.log_uuid)===L,style:_e({},s),children:[(0,D.jsx)(N.Z,{alignItems:"center",justifyContent:"center",children:(0,D.jsx)(S,_e({},(0,o.Z)({},null===k||void 0===k?void 0:k.toLowerCase(),!0)))},"log_type"),(0,D.jsx)(N.Z,{children:(0,D.jsx)(j.ZP,{default:!0,monospace:!0,noWrapping:!0,children:V(A)},"log_timestamp")}),(0,D.jsx)(N.Z,{style:{minWidth:Z,width:Z},children:n}),(0,D.jsx)(N.Z,{style:{overflow:"auto"},children:(0,D.jsx)(j.ZP,{monospace:!0,textOverflow:!0,title:T||y,children:(0,D.jsx)(de(),{children:T||y})},"log_message")}),(0,D.jsx)(N.Z,{flex:"1",justifyContent:"flex-end",children:(0,D.jsx)(U._Q,{default:!0,size:2*x.iI})},"chevron_right_icon")]})}),[Z,d,r,c,l]);return(0,D.jsxs)(je,{children:[(0,D.jsx)(be,{children:_.map((function(e,n){return(0,D.jsx)(N.Z,{alignItems:"center",style:{height:4*x.iI,minWidth:e.width||null,width:e.width||null},children:"_"!==e.uuid&&(0,D.jsx)(j.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.uuid})},"".concat(e,"_").concat(n))}))}),(0,D.jsx)(he.t7,{height:a-me.Mz-86-34-58,itemCount:t.length,itemData:{blocksByUUID:n,logs:t,pipeline:i,themeContext:u},itemSize:3.75*x.iI,width:"100%",children:P})]})},Ce=t(2713),De=t(47999),Te=t(55378),Ee=t(82944),Ae=t(66166),Le="_limit",Re="_offset",Me=20,Ne=[O.LAST_HOUR,O.LAST_DAY,O.LAST_WEEK,O.LAST_30_DAYS],Be=(we={},(0,o.Z)(we,O.LAST_HOUR,3600),(0,o.Z)(we,O.LAST_DAY,86400),(0,o.Z)(we,O.LAST_WEEK,604800),(0,o.Z)(we,O.LAST_30_DAYS,2592e3),we),Ye=t(84779),We=t(42305),He=t(7715),Ue=t(59e3);function Je(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ge(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Je(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.START="start_timestamp",e.END="end_timestamp"}(ke||(ke={}));var qe=(Se={},(0,o.Z)(Se,Le,Me),(0,o.Z)(Se,Re,0),Se);var Fe=function(e){var n=e.allPastLogsLoaded,t=e.loadNewerLogInterval,r=e.loadPastLogInterval,i=e.selectedRange,c=e.setSelectedRange,l=(0,s.useState)(null),u=l[0],a=l[1],d=(0,s.useState)(null),p=d[0],h=d[1],m=(0,s.useState)({hour:"00",minute:"00"}),b=m[0],y=m[1],Z=(0,s.useState)(new Date),_=Z[0],P=Z[1],w=(0,s.useState)({hour:(0,We.lJ)(String((new Date).getUTCHours())),minute:(0,We.lJ)(String((new Date).getUTCMinutes()))}),S=w[0],k=w[1],I=(0,Ue.iV)(),T=(0,Ae.Z)(I);return(0,s.useEffect)((function(){if(!(0,He.Xy)(I,T)){var e=I.start_timestamp,n=I.end_timestamp;if(e){var t=(0,We.Pc)(e),r=t.date,i=t.hour,o=t.minute;h(r),y({hour:(0,We.lJ)(i),minute:(0,We.lJ)(o)});var l=Math.ceil(Date.now()/1e3)-e;Math.abs(l-Be[O.LAST_DAY])<=60&&c(O.LAST_DAY)}if(n){var u=(0,We.Pc)(n),a=u.date,s=u.hour,d=u.minute;P(a),k({hour:(0,We.lJ)(s),minute:(0,We.lJ)(d)})}}}),[I,T]),(0,D.jsx)(g.Z,{py:1,children:(0,D.jsxs)(v.Z,{alignItems:"center",children:[(0,D.jsx)(L.ZP,{blackBorder:!0,disabled:n,inline:!0,onClick:r,paddingBottom:.75*x.iI,paddingTop:.75*x.iI,uuid:"logs/load_older_logs",children:n?"All past logs within range loaded":"Load older logs"}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(L.ZP,{blackBorder:!0,disabled:(null===I||void 0===I?void 0:I._offset)<=0,inline:!0,onClick:t,paddingBottom:.75*x.iI,paddingTop:.75*x.iI,uuid:"logs/load_newer_logs",children:"Load newer logs"}),(0,D.jsx)(g.Z,{mr:2}),(0,D.jsx)(Te.Z,{compact:!0,defaultColor:!0,onChange:function(e){e.preventDefault();var n=e.target.value;if(c(n),Ne.includes(n)){var t,r=(0,Ye.JI)(Be[n]);(0,C.u7)(Ge((t={},(0,o.Z)(t,ke.START,r),(0,o.Z)(t,ke.END,null),t),qe))}},paddingRight:4*x.iI,placeholder:"Select time range",value:i,children:Object.values(O).map((function(e){return(0,D.jsx)("option",{value:e,children:e},e)}))}),(0,D.jsx)(g.Z,{mr:1}),i===O.CUSTOM_RANGE&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Ee.Z,{compact:!0,defaultColor:!0,onClick:function(){return a(0)},paddingRight:0,placeholder:"Start",value:p?(0,We.AY)(p,null===b||void 0===b?void 0:b.hour,null===b||void 0===b?void 0:b.minute):""}),(0,D.jsx)(De.Z,{onClickOutside:function(){return a(null)},open:0===u,style:{position:"relative"},children:(0,D.jsx)(Ce.Z,{selectedDate:p,selectedTime:b,setSelectedDate:h,setSelectedTime:y})}),(0,D.jsx)(g.Z,{px:1,children:(0,D.jsx)(j.ZP,{children:"to"})}),(0,D.jsx)(Ee.Z,{compact:!0,defaultColor:!0,onClick:function(){return a(1)},paddingRight:0,placeholder:"End",value:_?(0,We.AY)(_,null===S||void 0===S?void 0:S.hour,null===S||void 0===S?void 0:S.minute):""}),(0,D.jsx)(De.Z,{onClickOutside:function(){return a(null)},open:1===u,style:{position:"relative"},children:(0,D.jsx)(Ce.Z,{selectedDate:_,selectedTime:S,setSelectedDate:P,setSelectedTime:k})}),(0,D.jsx)(g.Z,{mr:1}),(0,D.jsx)(f.Z,{borderRadius:x.iI/2,onClick:function(){var e,n=(0,We.BP)(p,b.hour,b.minute),t=(0,We.BP)(_,S.hour,S.minute);(0,C.u7)(Ge((e={},(0,o.Z)(e,ke.START,(0,We.A5)(n)),(0,o.Z)(e,ke.END,(0,We.A5)(t)),e),qe))},padding:"".concat(x.iI/2,"px"),primary:!0,children:"Search"})]})]})})},ze=t(82531),Ke=t(59920);function Xe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ve(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Xe(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Xe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $e="pipeline_run_id[]",Qe="block_run_id[]";function en(e){var n=e.pipeline,t=(0,s.useContext)(u.ThemeContext),r=(0,s.useRef)(null),i=n.uuid,c=(0,s.useState)(null),l=c[0],f=c[1],h=(0,s.useState)(null),m=h[0],v=h[1],b=(0,s.useState)(null),y=b[0],Z=b[1],_=(0,s.useState)(!1),P=_[0],w=_[1],S=(0,s.useState)(null),I=S[0],T=S[1],E=(0,s.useState)(te),R=E[0],M=E[1],N=ze.ZP.pipelines.detail(i,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,B=(0,s.useMemo)((function(){return Ve(Ve({},null===N||void 0===N?void 0:N.pipeline),{},{uuid:i})}),[N,i]),Y=(null===B||void 0===B?void 0:B.type)===ce.qL.INTEGRATION,W=(0,s.useMemo)((function(){return B.blocks||[]}),[B]),H=(0,s.useMemo)((function(){var e=(0,$.HK)(W,(function(e){return e.uuid}));if(Y){var n,t=(0,$.sE)(W,(function(e){var n=e.type;return d.tf.DATA_LOADER===n})),r=t?(0,a.Qc)(t.content):{},i=((null===r||void 0===r||null===(n=r.catalog)||void 0===n?void 0:n.streams)||[]).reduce((function(e,n){var t=n.tap_stream_id,r={};return W.forEach((function(e){var n=e.uuid,i=e.type,o="".concat(n,":").concat(t);r[o]={type:i}})),Ve(Ve({},e),r)}),{});e=Ve(Ve({},i),e)}return e}),[W,Y]),U=(0,Ue.iV)(),J=!(null!==U&&void 0!==U&&U.start_timestamp)&&!(null!==U&&void 0!==U&&U.hasOwnProperty($e)||null!==U&&void 0!==U&&U.hasOwnProperty(Qe)),G=(0,Ye.JI)(Be[O.LAST_DAY]),q=ze.ZP.logs.pipelines.list(l?i:null,(0,He.gR)(J?Ve(Ve({},l),{},{start_timestamp:G}):l,[Pe]),{refreshInterval:5e3}),F=q.data,z=q.mutate,K=!F,V=(0,s.useMemo)((function(){var e;if(null!==F&&void 0!==F&&null!==(e=F.logs)&&void 0!==e&&e[0]){var n,t=(null===(n=F.logs)||void 0===n?void 0:n[0])||{};return{blockRunLogs:t.block_run_logs,pipelineRunLogs:t.pipeline_run_logs,totalBlockRunLogCount:t.total_block_run_log_count,totalPipelineRunLogCount:t.total_pipeline_run_log_count}}return{blockRunLogs:[],pipelineRunLogs:[],totalBlockRunLogCount:0,totalPipelineRunLogCount:0}}),[F]),Q=V.blockRunLogs,ee=V.pipelineRunLogs,ne=V.totalBlockRunLogCount,re=V.totalPipelineRunLogCount,le=+(null===U||void 0===U?void 0:U._limit)>=ne&&+(null===U||void 0===U?void 0:U._limit)>=re,ae=(0,s.useMemo)((function(){return(0,$.YC)(Q.concat(ee).reduce((function(e,n){return e.concat(X(n))}),[]),(function(e){var n=e.data;return(null===n||void 0===n?void 0:n.timestamp)||0}))}),[Q,ee]),se=(0,s.useMemo)((function(){return ae.filter((function(e){var n=e.data,t=[];if(!l)return!0;if(l["level[]"]&&t.push(l["level[]"].includes(null===n||void 0===n?void 0:n.level)),l["block_type[]"]){var r,i,o=null===n||void 0===n?void 0:n.block_uuid;if(Y)o=null===n||void 0===n||null===(i=n.block_uuid)||void 0===i?void 0:i.split(":").slice(0,2).join(":");t.push(l["block_type[]"].includes(null===(r=H[o])||void 0===r?void 0:r.type))}if(l["pipeline_run_id[]"]){var c=null===n||void 0===n?void 0:n.pipeline_run_id;t.push(l["pipeline_run_id[]"].includes(String(c)))}if(l["block_run_id[]"]){var u=null===n||void 0===n?void 0:n.block_run_id;t.push(l["block_run_id[]"].includes(String(u)))}return t.every((function(e){return e}))}))}),[H,Y,ae,l]),de=se.length,pe=(0,Ae.Z)(U);(0,s.useEffect)((function(){var e;J&&(0,C.u7)((e={},(0,o.Z)(e,Le,Me),(0,o.Z)(e,Re,0),(0,o.Z)(e,"start_timestamp",G),e))}),[J]),(0,s.useEffect)((function(){(0,He.Xy)(U,pe)||f(U)}),[U,pe]);var fe=(0,Ae.Z)(m);(0,s.useEffect)((function(){var e=U.log_uuid;!e||m||fe||v(ae.find((function(n){var t=n.data;return(null===t||void 0===t?void 0:t.uuid)===e})))}),[ae,U,m,fe]),(0,s.useEffect)((function(){var e;P&&!K&&(null===r||void 0===r||null===(e=r.current)||void 0===e||e.scrollIntoView(),w(!1))}),[P,K]);var he=U._limit,me=U._offset,ve=+(he||0),ge=+(me||0),je=Math.max(ne,re),be=(0,s.useCallback)((function(){var e,n=ve,t=ge;(ne>ve||re>ve)&&(n=Math.min(je,ve+Me),t=Math.min(ge+Me,je-je%Me),(0,C.u7)(Ve(Ve({},U),{},(e={},(0,o.Z)(e,Le,n),(0,o.Z)(e,Re,t),e))))}),[je,ve,ge,U,ne,re]),xe=(0,s.useCallback)((function(){var e,n=ve,t=ge;ve>=Me&&(n=Math.max(Me,ve-Me),ve>=je&&je%Me!==0&&(n=je-je%Me),t=Math.max(0,ge-Me),(0,C.u7)(Ve(Ve({},U),{},(e={},(0,o.Z)(e,Le,n),(0,o.Z)(e,Re,t),e))))}),[je,ve,ge,U]),ye=(0,s.useMemo)((function(){return(0,D.jsx)(Ie,{blocksByUUID:H,logs:se,onRowClick:M,pipeline:B,query:l,setSelectedLog:v,themeContext:t})}),[H,se,B,l,t]);return(0,D.jsxs)(oe.Z,{after:m&&(0,D.jsx)(ie,{log:m,onClose:function(){(0,C.u7)((0,o.Z)({},Pe,null)),v(null)},selectedTab:R,setSelectedTab:M}),afterHidden:!m,afterWidth:80*x.iI,before:(0,D.jsx)(A,{blocks:W,query:l}),beforeWidth:20*x.iI,breadcrumbs:[{label:function(){return"Logs"}}],errors:I,pageName:Ke.M.PIPELINE_LOGS,pipeline:B,setErrors:T,subheader:null,title:function(e){var n=e.name;return"".concat(n," logs")},uuid:"pipeline/logs",children:[(0,D.jsx)(g.Z,{px:x.cd,py:1,children:(0,D.jsxs)(j.ZP,{children:[!K&&(0,D.jsxs)(D.Fragment,{children:[(0,k.x6)(de)," logs found",(0,D.jsx)(Fe,{allPastLogsLoaded:le,loadNewerLogInterval:xe,loadPastLogInterval:be,selectedRange:y,setSelectedRange:Z})]}),K&&"Searching..."]})}),(0,D.jsx)(p.Z,{light:!0}),K&&(0,D.jsx)(g.Z,{p:x.cd,children:(0,D.jsx)(ue.Z,{})}),!K&&se.length>=1&&ye,(0,D.jsx)(g.Z,{p:"".concat(1.5*x.iI,"px"),ref:r,children:(0,D.jsx)(L.ZP,{blackBorder:!0,inline:!0,onClick:function(){w(!0),"0"===(null===U||void 0===U?void 0:U._offset)&&(null===U||void 0===U?void 0:U._limit)===String(Me)?z(null):(0,C.u7)({_limit:Me,_offset:0})},paddingBottom:.75*x.iI,paddingTop:.75*x.iI,uuid:"logs/toolbar/load_newest",children:"Load latest logs"})})]})}en.getInitialProps=function(){var e=(0,i.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var nn=(0,le.Z)(en)},42305:function(e,n,t){"use strict";t.d(n,{A5:function(){return b},AY:function(){return x},BP:function(){return j},JX:function(){return g},OC:function(){return d},Pc:function(){return y},Ro:function(){return O},Tz:function(){return v},Y_:function(){return _},d$:function(){return m},jV:function(){return Z},lJ:function(){return P},n1:function(){return f},s8:function(){return a},vk:function(){return o},yD:function(){return s}});var r,i,o,c=t(82394),l=t(92083),u=t.n(l);!function(e){e.TODAY="today",e.WEEK="week",e.MONTH="month"}(o||(o={}));var a=(r={},(0,c.Z)(r,o.TODAY,"today"),(0,c.Z)(r,o.WEEK,"last 7 days"),(0,c.Z)(r,o.MONTH,"last 30 days"),r),s=(i={},(0,c.Z)(i,o.TODAY,0),(0,c.Z)(i,o.WEEK,6),(0,c.Z)(i,o.MONTH,29),i),d="YYYY-MM-DD HH:mm:ss",p="YYYY-MM-DD HH:mm",f="YYYY-MM-DD",h="MMMM D, YYYY";function m(e,n){var t=n.dayAgo,r=n.includeSeconds,i=n.utcFormat,o=u()(e),c=p;return i&&(o=o.utc()),t&&(o=o.subtract(1,"days")),r&&(c=d),o.format(c)}function v(e){var n=m((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0});return null!==e&&void 0!==e&&e.dateObj?new Date(n):n}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u().unix(e).format(null!==n&&void 0!==n&&n.withSeconds?d:p)}function j(e,n,t){return u()(e).utc().hours(+n).minutes(+t).format()}function b(e){return u()(e).unix()}function x(e,n,t,r){var i="".concat(e.toISOString().split("T")[0]," ").concat(n,":").concat(t);return r?"".concat(i,":").concat(r):i}function y(e){var n=u().unix(+e).utc();return{date:n.toDate(),hour:String(n.hour()),minute:String(n.minute())}}function O(e,n){var t=u().utc(),r=u().utc();null!==n&&void 0!==n&&n.localTime&&(t=u()().local(),r=u()().local());var i=(t=t.subtract(e,"days")).format(h),o=r.format(h);return null!==n&&void 0!==n&&n.endDateOnly?o:"".concat(i," - ").concat(o)}function Z(e,n){var t=null!==n&&void 0!==n&&n.localTime?u()().local():u().utc();if(e===o.WEEK){var r=s[o.WEEK];t=t.subtract(r,"days")}else if(e===o.MONTH){var i=s[o.MONTH];t=t.subtract(i,"days")}return null!==n&&void 0!==n&&n.isoString?t.startOf("day").toISOString():t.startOf("day").format(d)}function _(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90,n=new Date,t=[],r=0;r<e;r++)t.unshift(n.toISOString().split("T")[0]),n.setDate(n.getDate()-1);return t}function P(e){return e.padStart(2,"0")}},84779:function(e,n,t){"use strict";t.d(n,{JI:function(){return o},uf:function(){return i}});var r=t(75582),i=function(e){var n=String(e).split("."),t=(0,r.Z)(n,2),i=t[0],o=t[1];return"".concat(i.replace(/\B(?=(\d{3})+(?!\d))/g,",")).concat(o?".".concat(o):"")};function o(e){var n=Math.floor(Date.now()/1e3);return e>0?n-e:n}},33766:function(e,n,t){"use strict";t.d(n,{O2:function(){return d},g_:function(){return f},u7:function(){return p}});var r=t(75582),i=t(82394),o=t(34376),c=t.n(o),l=t(59e3),u=t(24224);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d="_offset";function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.preserveParams,i=n.pushHistory,o=n.replaceParams,u=(0,l.iV)(),a={};t&&t.forEach((function(e){u[e]&&(a[e]=u[e])}));var d,p=o?a:u;d=window.location.pathname;var f=i?c().push:c().replace,h=s(s({},p),e);Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];"undefined"!==typeof i&&null!==i||delete h[t]}));var m=(0,l.uM)(h);m.length>=1&&(m="?".concat(m));var v="".concat(d.split("?")[0]).concat(m);return f(c().router.pathname,v,{shallow:!0})}function f(e,n,t){var i=t.addingMultipleValues,o=t.isList,c=t.itemsPerPage,l=t.pushHistory,a=void 0!==l&&l,f=t.resetLimitParams,h=s({},e);i?Object.entries(n).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];if(Array.isArray(i)){var o="".concat(t,"[]");h[o]=i.map(String)}})):o?Object.entries(n).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],o=String(i),c="".concat(t,"[]"),l=h[c];l&&Array.isArray(l)?(l=l.map(String)).includes(o)?h[c]=(0,u.Od)(l,(function(e){return e===o})):h[c]=l.concat(o):h[c]=[o]})):h=s(s({},h),n),f&&(h._limit=c||20,h[d]=0),p(h,{pushHistory:a})}},62453:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/logs",function(){return t(19464)}])}},function(e){e.O(0,[844,9902,426,4259,4495,1424,1005,7815,3654,547,4822,9774,2888,179],(function(){return n=62453,e(e.s=n);var n}));var n=e.O();_N_E=n}]);