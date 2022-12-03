"use strict";(self.webpackChunkmd3_ui=self.webpackChunkmd3_ui||[]).push([[752],{"./packages/hooks/src/use-animate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>useAnimate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_native__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-native-web/dist/exports/Animated/index.js"),react_native__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js"),_use_event_callback__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/hooks/src/use-event-callback.ts"),_excluded=["inputRange","outputRange"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function useAnimate(_ref){var _ref$animate=_ref.animate,animate=void 0===_ref$animate||_ref$animate,_ref$bounce=_ref.bounce,bounce=void 0!==_ref$bounce&&_ref$bounce,callback=_ref.callback,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?800:_ref$duration,easing=_ref.easing,_ref$fromValue=_ref.fromValue,fromValue=void 0===_ref$fromValue?0:_ref$fromValue,_ref$isInteraction=_ref.isInteraction,isInteraction=void 0===_ref$isInteraction||_ref$isInteraction,_ref$iterations=_ref.iterations,iterations=void 0===_ref$iterations?1:_ref$iterations,referenceValue=_ref.referenceValue,_ref$shouldReset=_ref.shouldReset,shouldReset=void 0===_ref$shouldReset||_ref$shouldReset,_ref$toValue=_ref.toValue,toValue=void 0===_ref$toValue?1:_ref$toValue,_ref$useNativeDriver=_ref.useNativeDriver,useNativeDriver=void 0!==_ref$useNativeDriver&&_ref$useNativeDriver,animatedValue=null!=referenceValue?referenceValue:react__WEBPACK_IMPORTED_MODULE_0__.useRef(new react_native__WEBPACK_IMPORTED_MODULE_1__.Z.Value(fromValue)).current,baseConfig={easing,isInteraction,duration:bounce?duration/2:duration,useNativeDriver:"web"!==react_native__WEBPACK_IMPORTED_MODULE_2__.Z.OS&&useNativeDriver},sequence=[react_native__WEBPACK_IMPORTED_MODULE_1__.Z.timing(animatedValue,_extends({delay,toValue},baseConfig))];bounce&&sequence.push(react_native__WEBPACK_IMPORTED_MODULE_1__.Z.timing(animatedValue,_extends({toValue:fromValue},baseConfig)));var sequenceAnimation=react_native__WEBPACK_IMPORTED_MODULE_1__.Z.sequence(sequence),interpolate=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(_ref2){var inputRange=_ref2.inputRange,outputRange=_ref2.outputRange,config=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,_excluded);return animatedValue.interpolate(_extends({inputRange:null!=inputRange?inputRange:[Math.min(fromValue,toValue),Math.max(fromValue,toValue)],outputRange},config))}),[animatedValue,fromValue,toValue]),animation=1===iterations||0===iterations||null!=callback?sequenceAnimation:react_native__WEBPACK_IMPORTED_MODULE_1__.Z.loop(sequenceAnimation,{iterations}),start=(0,_use_event_callback__WEBPACK_IMPORTED_MODULE_3__.$)((function(next){shouldReset&&animation.reset();var callbackAnimation=function callbackAnimation(_ref3){var finished=_ref3.finished;null==callback||callback({animatedValue,animation}),null==next||next(finished)};delay?react_native__WEBPACK_IMPORTED_MODULE_1__.Z.sequence([react_native__WEBPACK_IMPORTED_MODULE_1__.Z.delay(delay),animation]).start(callbackAnimation):animation.start(callbackAnimation)}));return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){animate&&animatedValue._value!==toValue&&start()}),[animate,animatedValue,start,toValue]),[animatedValue,{interpolate,reset:function reset(){animation.reset()},start}]}},"./packages/modal/src/modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var use_fork_ref=__webpack_require__("./packages/hooks/src/use-fork-ref.ts"),use_animate=__webpack_require__("./packages/hooks/src/use-animate.ts"),use_event_callback=__webpack_require__("./packages/hooks/src/use-event-callback.ts"),react=__webpack_require__("./node_modules/react/index.js"),BackHandler=__webpack_require__("./node_modules/react-native-web/dist/exports/BackHandler/index.js");var portal=__webpack_require__("./packages/portal/src/portal.tsx"),create_styled=__webpack_require__("./packages/system/src/create-styled.tsx"),use_theme_props=__webpack_require__("./packages/system/src/use-theme-props.ts"),dom=__webpack_require__("./packages/utils/src/dom.ts"),assertion=__webpack_require__("./packages/utils/src/assertion.ts"),View=__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"),Platform=__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js"),Animated=__webpack_require__("./node_modules/react-native-web/dist/exports/Animated/index.js"),Easing=__webpack_require__("./node_modules/react-native-web/dist/exports/Easing/index.js"),TouchableWithoutFeedback=__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),src_function=__webpack_require__("./packages/utils/src/function.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),candidatesSelector=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function defaultGetTabbable(root){var regularTabNodes=[],orderedTabNodes=[];return root.querySelectorAll(candidatesSelector).forEach((function(node,i){var nodeTabIndex=function getTabIndex(node){var _node$getAttribute,tabindexAttr=Number.parseInt(null!=(_node$getAttribute=node.getAttribute("tabindex"))?_node$getAttribute:"0",10);return Number.isNaN(tabindexAttr)?"true"===node.contentEditable||("AUDIO"===node.nodeName||"VIDEO"===node.nodeName||"DETAILS"===node.nodeName)&&null==node.getAttribute("tabindex")?0:node.tabIndex:tabindexAttr}(node);-1!==nodeTabIndex&&function isNodeMatchingSelectorFocusable(node){return!(node.disabled||"INPUT"===node.tagName&&"hidden"===node.type||function isNonTabbableRadio(node){if("INPUT"!==node.tagName||"radio"!==node.type)return!1;if(!node.name)return!1;var getRadio=function getRadio(selector){return node.ownerDocument.querySelector('input[type="radio"]'+selector)},roving=getRadio('[name="'+node.name+'"]:checked');return roving||(roving=getRadio('[name="'+node.name+'"]')),roving!==node}(node))}(node)&&(0===nodeTabIndex?regularTabNodes.push(node):orderedTabNodes.push({documentOrder:i,node,tabIndex:nodeTabIndex}))})),[].concat(orderedTabNodes.sort((function(a,b){return a.tabIndex===b.tabIndex?a.documentOrder-b.documentOrder:a.tabIndex-b.tabIndex})).map((function(a){return a.node})),regularTabNodes)}var FocusTrap=function FocusTrap(_ref){var children=_ref.children,_ref$disableAutoFocus=_ref.disableAutoFocus,disableAutoFocus=void 0!==_ref$disableAutoFocus&&_ref$disableAutoFocus,_ref$disableEnforceFo=_ref.disableEnforceFocus,disableEnforceFocus=void 0!==_ref$disableEnforceFo&&_ref$disableEnforceFo,_ref$disableRestoreFo=_ref.disableRestoreFocus,disableRestoreFocus=void 0!==_ref$disableRestoreFo&&_ref$disableRestoreFo,_ref$enabled=_ref.enabled,enabled=void 0===_ref$enabled||_ref$enabled,_ref$getTabbable=_ref.getTabbable,getTabbable=void 0===_ref$getTabbable?defaultGetTabbable:_ref$getTabbable,open=_ref.open,ignoreNextEnforceFocus=react.useRef(),sentinelStartRef=react.useRef(null),sentinelEndRef=react.useRef(null),restoreTarget=react.useRef(null),focusEventTarget=react.useRef(null),activated=react.useRef(!1),rootRef=react.useRef(null),handleRef=(0,use_fork_ref.c)(children.ref,rootRef),lastKeydown=react.useRef();react.useEffect((function(){open&&null!=rootRef.current&&(activated.current=!disableAutoFocus)}),[disableAutoFocus,open]),react.useEffect((function(){if(!open||null==rootRef.current)return function(){};var doc=(0,dom.r)(rootRef.current);return rootRef.current.contains(doc.activeElement)||(rootRef.current.hasAttribute("tabIndex")||(assertion.Ts&&console.error(["MD3-UI: The modal content node does not accept focus.",'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n")),rootRef.current.setAttribute("tabIndex","-1")),activated.current&&rootRef.current.focus()),function(){disableRestoreFocus||(null!=restoreTarget.current&&(ignoreNextEnforceFocus.current=!0,restoreTarget.current.focus()),restoreTarget.current=null)}}),[open]),react.useEffect((function(){if(!open||null==rootRef.current)return function(){};var doc=(0,dom.r)(rootRef.current),contain=function contain(nativeEvent){var rootElement=rootRef.current;if(null!=rootElement)if(doc.hasFocus()&&!disableEnforceFocus&&(0,src_function.Pu)(enabled)&&!ignoreNextEnforceFocus.current){if(!rootElement.contains(doc.activeElement)){if(nativeEvent&&focusEventTarget.current!==nativeEvent.target||doc.activeElement!==focusEventTarget.current)focusEventTarget.current=null;else if(null!==focusEventTarget.current)return;if(!activated.current)return;var tabbable=[];if(doc.activeElement!==sentinelStartRef.current&&doc.activeElement!==sentinelEndRef.current||(tabbable=getTabbable(rootElement)),tabbable.length>0){var _lastKeydown$current,_lastKeydown$current2,isShiftTab=Boolean((null==(_lastKeydown$current=lastKeydown.current)?void 0:_lastKeydown$current.shiftKey)&&"Tab"===(null==(_lastKeydown$current2=lastKeydown.current)?void 0:_lastKeydown$current2.key)),focusNext=tabbable[0],focusPrevious=tabbable[tabbable.length-1];isShiftTab?focusPrevious.focus():focusNext.focus()}else rootElement.focus()}}else ignoreNextEnforceFocus.current=!1},loopFocus=function loopFocus(nativeEvent){var _sentinelEndRef$curre;(lastKeydown.current=nativeEvent,!disableEnforceFocus&&(0,src_function.Pu)(enabled)&&"Tab"===nativeEvent.key)&&(doc.activeElement===rootRef.current&&nativeEvent.shiftKey&&(ignoreNextEnforceFocus.current=!0,null==(_sentinelEndRef$curre=sentinelEndRef.current)||_sentinelEndRef$curre.focus()))};doc.addEventListener("focusin",contain),doc.addEventListener("keydown",loopFocus,!0);var interval=setInterval((function(){var _doc$activeElement;"BODY"===(null==(_doc$activeElement=doc.activeElement)?void 0:_doc$activeElement.tagName)&&contain()}),50);return function(){clearInterval(interval),doc.removeEventListener("focusin",contain),doc.removeEventListener("keydown",loopFocus,!0)}}),[disableAutoFocus,disableEnforceFocus,disableRestoreFocus,enabled,getTabbable,open]);var handleFocusSentinel=function handleFocusSentinel(event){null==restoreTarget.current&&(restoreTarget.current=event.relatedTarget),activated.current=!0};return"web"===Platform.Z.OS?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{ref:sentinelStartRef,"data-testid":"sentinel-start",tabIndex:0,onFocus:handleFocusSentinel}),react.cloneElement(children,{ref:handleRef,onFocus:function handleFocus(event){null==restoreTarget.current&&(restoreTarget.current=event.relatedTarget),activated.current=!0,focusEventTarget.current=event.target;var childrenPropsHandler=children.props.onFocus;childrenPropsHandler&&childrenPropsHandler(event)}}),(0,jsx_runtime.jsx)("div",{ref:sentinelEndRef,"data-testid":"sentinel-end",tabIndex:0,onFocus:handleFocusSentinel})]}):children};assertion.Ts&&(FocusTrap.displayName="FocusTrap");try{FocusTrap.displayName="FocusTrap",FocusTrap.__docgenInfo={description:"Utility component that locks focus inside the component.",displayName:"FocusTrap",props:{children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},disableAutoFocus:{defaultValue:{value:"false"},description:"If `true`, the focus trap will not automatically shift focus to itself when\nit opens, and replace it to the last focused element when it closes.\nThis also works correctly with any focus trap children that have the\n`disableAutoFocus` prop.\n\nGenerally this should never be set to `true` as it makes the focus trap\nless accessible to assistive technologies, like screen readers.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disableEnforceFocus:{defaultValue:{value:"false"},description:"If `true`, the focus trap will not prevent focus from leaving the focus\ntrap while open.\n\nGenerally this should never be set to `true` as it makes the focus trap\nless accessible to assistive technologies, like screen readers.",name:"disableEnforceFocus",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the focus trap will not restore focus to previously focused\nelement once focus trap is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},enabled:{defaultValue:{value:"true"},description:"This prop extends the `open` prop. It allows to toggle the open state\nwithout having to wait for a rerender when changing the `open` prop. This\nprop should be memoized. It can be used to support multiple focus trap\nmounted at the same time.",name:"enabled",required:!1,type:{name:"boolean | (() => boolean)"}},getTabbable:{defaultValue:null,description:'Returns an array of ordered tabbable nodes (i.e. in tab order) within the\nroot. For instance, you can provide the "tabbable" npm dependency.',name:"getTabbable",required:!1,type:{name:"((root: HTMLElement) => HTMLElement[])"}},open:{defaultValue:null,description:"If `true`, focus is locked.",name:"open",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/modal/src/focus-trap.tsx#FocusTrap"]={docgenInfo:FocusTrap.__docgenInfo,name:"FocusTrap",path:"packages/modal/src/focus-trap.tsx#FocusTrap"})}catch(__react_docgen_typescript_loader_error){}function ariaHidden(element,show){show?element.setAttribute("aria-hidden","true"):element.removeAttribute("aria-hidden")}function getPaddingRight(element){var _getOwnerWindow$getCo;return Number.parseInt(null!=(_getOwnerWindow$getCo=(0,dom.k)(element).getComputedStyle(element).paddingRight)?_getOwnerWindow$getCo:"0",10)}function ariaHiddenSiblings(container,mountElement,currentElement,elementsToExclude,show){void 0===elementsToExclude&&(elementsToExclude=[]),void 0===show&&(show=!1);var blacklist=new Set([mountElement,currentElement].concat(elementsToExclude)),blacklistTagNames=new Set(["TEMPLATE","SCRIPT","STYLE"]);Array.from(container.children).forEach((function(element){blacklist.has(element)||blacklistTagNames.has(element.tagName)||ariaHidden(element,show)}))}function handleContainer(containerInfo,props){var restoreStyle=[],container=containerInfo.container;if(!props.disableScrollLock){if(function isOverflowing(container){var doc=(0,dom.r)(container);return doc.body===container?(0,dom.k)(container).innerWidth>doc.documentElement.clientWidth:container.scrollHeight>container.clientHeight}(container)){var scrollbarSize=function getScrollbarSize(doc){return Math.abs(window.innerWidth-doc.documentElement.clientWidth)}((0,dom.r)(container));restoreStyle.push({el:container,property:"padding-right",value:container.style.paddingRight}),container.style.paddingRight=getPaddingRight(container)+scrollbarSize+"px",(0,dom.r)(container).querySelectorAll(".md3-fixed").forEach((function(element){restoreStyle.push({el:element,property:"padding-right",value:element.style.paddingRight}),element.style.paddingRight=getPaddingRight(element)+scrollbarSize+"px"}))}var parent=container.parentElement,containerWindow=(0,dom.k)(container),scrollContainer="HTML"===(null==parent?void 0:parent.nodeName)&&"scroll"===containerWindow.getComputedStyle(parent).overflowY?parent:container;restoreStyle.push({el:scrollContainer,property:"overflow",value:scrollContainer.style.overflow},{el:scrollContainer,property:"overflow-x",value:scrollContainer.style.overflowX},{el:scrollContainer,property:"overflow-y",value:scrollContainer.style.overflowY}),scrollContainer.style.overflow="hidden"}return function restore(){restoreStyle.forEach((function(_ref){var value=_ref.value,el=_ref.el,property=_ref.property;value?el.style.setProperty(property,value):el.style.removeProperty(property)}))}}var ModalManager=new(function(){function ModalManager(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}var _proto=ModalManager.prototype;return _proto.add=function add(modal,container){var modalIndex=this.modals.indexOf(modal);if(-1!==modalIndex)return modalIndex;modalIndex=this.modals.length,this.modals.push(modal),modal.modalRef&&ariaHidden(modal.modalRef,!1);var hiddenSiblings=function getHiddenSiblings(container){return Array.from(container.children).filter((function(element){return"true"===element.getAttribute("aria-hidden")}))}(container);ariaHiddenSiblings(container,modal.mountNode,modal.modalRef,hiddenSiblings,!0);var containerIndex=this.containers.findIndex((function(item){return item.container===container}));return-1!==containerIndex?(this.containers[containerIndex].modals.push(modal),modalIndex):(this.containers.push({modals:[modal],container,restore:null,hiddenSiblings}),modalIndex)},_proto.mount=function mount(modal,props){var containerInfo=this.containers.find((function(item){return item.modals.includes(modal)}));null!=containerInfo&&null==containerInfo.restore&&(containerInfo.restore=handleContainer(containerInfo,props))},_proto.remove=function remove(modal){var modalIndex=this.modals.indexOf(modal);if(-1===modalIndex)return modalIndex;var containerIndex=this.containers.findIndex((function(item){return item.modals.includes(modal)})),containerInfo=this.containers[containerIndex];if(containerInfo.modals.splice(containerInfo.modals.indexOf(modal),1),this.modals.splice(modalIndex,1),0===containerInfo.modals.length)null==containerInfo.restore||containerInfo.restore(),modal.modalRef&&ariaHidden(modal.modalRef,!0),ariaHiddenSiblings(containerInfo.container,modal.mountNode,modal.modalRef,containerInfo.hiddenSiblings,!1),this.containers.splice(containerIndex,1);else{var nextTop=containerInfo.modals[containerInfo.modals.length-1];nextTop.modalRef&&ariaHidden(nextTop.modalRef,!1)}return modalIndex},_proto.isTopModal=function isTopModal(modal){return this.modals.length>0&&this.modals[this.modals.length-1]===modal},ModalManager}()),_excluded=["children","containerRef","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideScrim","keepMounted","onClose","onKeyDown","open","style","styles"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ModalRoot=(0,create_styled.z)(View.Z,{name:"Modal",slot:"Root"})((function(_ref){var theme=_ref.theme,ownerState=_ref.ownerState;return _extends({bottom:0,left:0,position:"web"===Platform.Z.OS?"fixed":"absolute",right:0,top:0,zIndex:theme.zIndex.modal},!ownerState.open&&ownerState.exited&&Platform.Z.select({web:{visibility:"hidden"},default:{display:"none"}}))})),ModalScrim=(0,create_styled.z)(Animated.Z.View,{name:"Modal",slot:"Scrim",skipSx:!0})((function(_ref2){return{backgroundColor:_ref2.theme.utils.rgba("#322f37",.4),height:"100%",position:"absolute",width:"100%",zIndex:-1}})),Modal=react.forwardRef((function(inProps,ref){var _children$props$focus,_children$props$tabIn,_useThemeProps=(0,use_theme_props.e)({name:"Modal",props:inProps}),children=_useThemeProps.children,containerRef=_useThemeProps.containerRef,disableAutoFocus=_useThemeProps.disableAutoFocus,disableEnforceFocus=_useThemeProps.disableEnforceFocus,_useThemeProps$disabl=_useThemeProps.disableEscapeKeyDown,disableEscapeKeyDown=void 0!==_useThemeProps$disabl&&_useThemeProps$disabl,_useThemeProps$disabl2=_useThemeProps.disablePortal,disablePortal=void 0!==_useThemeProps$disabl2&&_useThemeProps$disabl2,disableRestoreFocus=_useThemeProps.disableRestoreFocus,_useThemeProps$disabl3=_useThemeProps.disableScrollLock,disableScrollLock=void 0!==_useThemeProps$disabl3&&_useThemeProps$disabl3,_useThemeProps$hideSc=_useThemeProps.hideScrim,hideScrim=void 0!==_useThemeProps$hideSc&&_useThemeProps$hideSc,_useThemeProps$keepMo=_useThemeProps.keepMounted,keepMounted=void 0!==_useThemeProps$keepMo&&_useThemeProps$keepMo,onClose=_useThemeProps.onClose,onKeyDown=_useThemeProps.onKeyDown,open=_useThemeProps.open,style=_useThemeProps.style,styles=_useThemeProps.styles,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_useThemeProps,_excluded),mountNodeRef=react.useRef(null),rootRef=react.useRef(null),handleRef=(0,use_fork_ref.c)(rootRef,ref),modalRef=react.useRef({modalRef:rootRef.current,mountNode:mountNodeRef.current}),_React$useState=react.useState(!0),exited=_React$useState[0],setExited=_React$useState[1],_React$useState2=react.useState(!1),hidden=_React$useState2[0],setHidden=_React$useState2[1],_useAnimate=(0,use_animate.H)({duration:225,easing:Easing.Z.bezier(.4,0,.2,1),fromValue:open?0:1,shouldReset:!1,toValue:open?1:0,useNativeDriver:!0}),opacity=_useAnimate[0],animate=_useAnimate[1].start,getModal=function getModal(){return modalRef.current.modalRef=rootRef.current,modalRef.current.mountNode=mountNodeRef.current,modalRef.current},isTopModal=function isTopModal(){return ModalManager.isTopModal(getModal())},handleMounted=function handleMounted(){ModalManager.mount(getModal(),{disableScrollLock}),setHidden(!1),rootRef.current.scrollTop=0},handleOpen=(0,use_event_callback.$)((function(){var _ref3,container=null!=(_ref3=null==containerRef?void 0:containerRef.current)?_ref3:function getDocument(){return(0,dom.r)(mountNodeRef.current)}().body;animate((function(finished){finished&&setExited(!1)})),ModalManager.add(getModal(),container),setHidden(!1),null!=rootRef.current&&handleMounted()})),handleClose=(0,use_event_callback.$)((function(){animate((function(finished){finished&&setExited(!0)})),ModalManager.remove(getModal()),setHidden(!0)}));if(react.useEffect((function(){open?(setExited(!1),handleOpen()):handleClose()}),[handleClose,handleOpen,open]),react.useEffect((function(){return handleClose}),[handleClose]),function useBackHandler(fn){react.useEffect((function(){return BackHandler.Z.addEventListener("hardwareBackPress",fn),function(){BackHandler.Z.removeEventListener("hardwareBackPress",fn)}}),[fn])}((function(){return null==onClose||onClose(),!0})),!keepMounted&&!open&&exited)return null;var ownerState={exited,open};return(0,jsx_runtime.jsx)(portal.h,{ref:function handlePortalRef(node){mountNodeRef.current=node,null!=node&&(open&&isTopModal()?handleMounted():setHidden(!0))},containerRef,disablePortal,children:(0,jsx_runtime.jsxs)(ModalRoot,_extends({ref:handleRef,accessibilityViewIsModal:!0,accessibilityRole:"none",ownerState},hidden&&{accessibilityElementsHidden:!0,accessibilityHidden:!0,importantForAccessibility:"no-hide-descendants",pointerEvents:"none"},{style:[style,null==styles?void 0:styles.root],onAccessibilityEscape:onClose,onKeyDown:function handleKeyDown(event){null==onKeyDown||onKeyDown(event),"Escape"===event.key&&isTopModal()&&(disableEscapeKeyDown||(event.stopPropagation(),null==onClose||onClose()))}},props,{children:[!hideScrim&&(0,jsx_runtime.jsx)(TouchableWithoutFeedback.Z,{accessibilityElementsHidden:!0,importantForAccessibility:"no-hide-descendants",onPress:onClose,children:(0,jsx_runtime.jsx)(ModalScrim,{accessibilityHidden:!0,focusable:!1,style:{opacity}})}),(0,jsx_runtime.jsx)(FocusTrap,{disableAutoFocus,disableEnforceFocus,disableRestoreFocus,enabled:isTopModal,open,children:react.cloneElement(children,{focusable:null!=(_children$props$focus=children.props.focusable)&&_children$props$focus,tabIndex:null!=(_children$props$tabIn=children.props.tabIndex)?_children$props$tabIn:-1})})]}))})}));assertion.Ts&&(Modal.displayName="Modal");try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{as:{defaultValue:null,description:"The component used for the root node.\nEither a string to use a HTML element or a component.",name:"as",required:!0,type:{name:"ElementType<any>"}},disableAutoFocus:{defaultValue:{value:"false"},description:"If `true`, the focus trap will not automatically shift focus to itself when\nit opens, and replace it to the last focused element when it closes.\nThis also works correctly with any focus trap children that have the\n`disableAutoFocus` prop.\n\nGenerally this should never be set to `true` as it makes the focus trap\nless accessible to assistive technologies, like screen readers.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disableEnforceFocus:{defaultValue:{value:"false"},description:"If `true`, the focus trap will not prevent focus from leaving the focus\ntrap while open.\n\nGenerally this should never be set to `true` as it makes the focus trap\nless accessible to assistive technologies, like screen readers.",name:"disableEnforceFocus",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the focus trap will not restore focus to previously focused\nelement once focus trap is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},containerRef:{defaultValue:null,description:"The ref to the component that will have the portal children appended to\nit. By default, it uses the body of the top-level document object.",name:"containerRef",required:!1,type:{name:"RefObject<any>"}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"If `true`, hitting escape will not fire the `onClose` callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},disablePortal:{defaultValue:{value:"false"},description:"If `true`, the `children` will be under the DOM hierarchy of the parent\ncomponent.",name:"disablePortal",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideScrim:{defaultValue:{value:"false"},description:"If `true`, the scrim is not rendered.",name:"hideScrim",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:"Always keep the children in the DOM. This prop can be useful in SEO\nsituation or when you want to maximize the responsiveness of the Modal.",name:"keepMounted",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.",name:"onClose",required:!1,type:{name:"(() => void)"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},styles:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"styles",required:!1,type:{name:"{ root?: ViewStyle; }"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/modal/src/modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"packages/modal/src/modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./packages/portal/src/portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var use_fork_ref=__webpack_require__("./packages/hooks/src/use-fork-ref.ts"),react=__webpack_require__("./node_modules/react/index.js");function useForceUpdate(){var unloadingRef=react.useRef(!1),_React$useState=react.useState(0),count=_React$useState[0],setCount=_React$useState[1];return function useUnmountEffect(fn,deps){return void 0===deps&&(deps=[]),react.useEffect((function(){return function(){return fn()}}),deps)}((function(){unloadingRef.current=!0})),react.useCallback((function(){unloadingRef.current||setCount(count+1)}),[count])}var use_enhanced_effect=__webpack_require__("./packages/hooks/src/use-enhanced-effect.ts"),assertion=__webpack_require__("./packages/utils/src/assertion.ts"),findNodeHandle=__webpack_require__("./node_modules/react-native-web/dist/exports/findNodeHandle/index.js"),src_context=__webpack_require__("./packages/portal/src/context.tsx"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Platform=__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js"),createNativePortal=function createNativePortal(){return null};try{"web"!==Platform.Z.OS&&(createNativePortal=Object(function webpackMissingModule(){var e=new Error("Cannot find module 'react-native/Libraries/Renderer/shims/ReactNative'");throw e.code="MODULE_NOT_FOUND",e}()))}catch(_unused){}var Portal=react.forwardRef((function(_ref,ref){var children=_ref.children,containerRef=_ref.containerRef,_ref$disablePortal=_ref.disablePortal,disablePortal=void 0!==_ref$disablePortal&&_ref$disablePortal,context=react.useContext(src_context.w),_React$useState=react.useState(),mountNode=_React$useState[0],setMountNode=_React$useState[1],handleRef=(0,use_fork_ref.c)(react.isValidElement(children)?children.ref:null,ref),forceUpdate=useForceUpdate();return(0,use_enhanced_effect.P)((function(){forceUpdate()}),[]),(0,use_enhanced_effect.P)((function(){var _containerRef$current;disablePortal||setMountNode((0,findNodeHandle.Z)(null!=(_containerRef$current=null==containerRef?void 0:containerRef.current)?_containerRef$current:context.rootRef.current))}),[null==containerRef?void 0:containerRef.current,disablePortal]),(0,use_enhanced_effect.P)((function(){return mountNode&&!disablePortal?((0,use_fork_ref.k)(ref,mountNode),function(){(0,use_fork_ref.k)(ref,null)}):function(){}}),[ref,mountNode,disablePortal]),disablePortal?react.isValidElement(children)?react.cloneElement(children,{ref:handleRef}):children:mountNode?function createPortal(children,container){return"web"===Platform.Z.OS?react_dom.createPortal(children,container):createNativePortal(children,container)}(children,mountNode):null}));assertion.Ts&&(Portal.displayName="Portal");try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{containerRef:{defaultValue:null,description:"",name:"containerRef",required:!1,type:{name:"RefObject<any>"}},disablePortal:{defaultValue:{value:"false"},description:"",name:"disablePortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/portal/src/portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"packages/portal/src/portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}}}]);