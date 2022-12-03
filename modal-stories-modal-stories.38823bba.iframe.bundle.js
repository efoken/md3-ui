"use strict";(self.webpackChunkmd3_ui=self.webpackChunkmd3_ui||[]).push([[88],{"./packages/modal/stories/modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,NestedModal:()=>NestedModal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Basic$parameters,_NestedModal$paramete,_md3_ui_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/button/src/button.tsx"),_md3_ui_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/layout/src/box.tsx"),_md3_ui_layout__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/layout/src/text.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/modal/src/modal.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["open"],_excluded2=["open"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Utils/Modal",component:_src__WEBPACK_IMPORTED_MODULE_2__.u};var style={bgColor:"background",borderColor:"#000",borderWidth:2,elevation:"level5",left:"50%",pb:4,pt:2,px:4,position:"absolute",top:"50%",width:400},Basic=function Basic(_ref){_ref.open;var args=_objectWithoutPropertiesLoose(_ref,_excluded),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),open=_React$useState[0],setOpen=_React$useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_3__.x,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_button__WEBPACK_IMPORTED_MODULE_4__.z,{onPress:function handleOpen(){return setOpen(!0)},children:"Open modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.u,_extends({open,accessibilityLabelledBy:"modal-modal-title",accessibilityDescribedBy:"modal-modal-description",onClose:function handleClose(){return setOpen(!1)}},args,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_3__.x,{style:{transform:[{translateX:"-50%"},{translateY:"-50%"}]},sx:style,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_5__.x,{as:"h2",id:"modal-modal-title",variant:"headline-small",children:"Text in a modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_5__.x,{nativeID:"modal-modal-description",variant:"body-medium",children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})}))]})};Basic.displayName="Basic";var NestedModal=function NestedModal(_ref2){_ref2.open;var args=_objectWithoutPropertiesLoose(_ref2,_excluded2),_React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState([!1,!1]),open=_React$useState2[0],setOpen=_React$useState2[1],handleCloseChild=function handleCloseChild(){return setOpen((function(prevOpen){return[prevOpen[0],!1]}))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_3__.x,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_button__WEBPACK_IMPORTED_MODULE_4__.z,{onPress:function handleOpenParent(){return setOpen((function(prevOpen){return[!0,prevOpen[1]]}))},children:"Open modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.u,_extends({open:open[0],accessibilityLabelledBy:"parent-modal-title",accessibilityDescribedBy:"parent-modal-description",onClose:function handleCloseParent(){return setOpen((function(prevOpen){return[!1,prevOpen[1]]}))}},args,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_3__.x,{style:{transform:[{translateX:"-50%"},{translateY:"-50%"}]},sx:_extends({},style,{width:400}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_5__.x,{as:"h2",id:"parent-modal-title",variant:"headline-small",children:"Text in a modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_5__.x,{nativeID:"parent-modal-description",variant:"body-medium",sx:{mb:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_button__WEBPACK_IMPORTED_MODULE_4__.z,{onPress:function handleOpenChild(){return setOpen((function(prevOpen){return[prevOpen[0],!0]}))},children:"Open child modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.u,{hideScrim:!0,open:open[1],accessibilityLabelledBy:"child-modal-title",accessibilityDescribedBy:"child-modal-description",onClose:handleCloseChild,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_3__.x,{style:{transform:[{translateX:"-50%"},{translateY:"-50%"}]},sx:_extends({},style,{width:240}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_5__.x,{as:"h2",id:"child-modal-title",variant:"headline-small",children:"Text in a child modal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_layout__WEBPACK_IMPORTED_MODULE_5__.x,{nativeID:"child-modal-description",variant:"body-medium",sx:{mb:2},children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_md3_ui_button__WEBPACK_IMPORTED_MODULE_4__.z,{onPress:handleCloseChild,children:"Close child modal"})]})})]})}))]})};NestedModal.displayName="NestedModal",Basic.parameters=_extends({},Basic.parameters,{storySource:_extends({source:'({\n  open: openArg,\n  ...args\n}) => {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n  return <Box>\n      <Button onPress={handleOpen}>Open modal</Button>\n      <Modal open={open} accessibilityLabelledBy="modal-modal-title" accessibilityDescribedBy="modal-modal-description" onClose={handleClose} {...args}>\n        <Box style={{\n        transform: [{\n          translateX: ("-50%" as any)\n        }, {\n          translateY: ("-50%" as any)\n        }]\n      }} sx={style}>\n          <Text as="h2" id="modal-modal-title" variant="headline-small">\n            Text in a modal\n          </Text>\n          <Text nativeID="modal-modal-description" variant="body-medium">\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n          </Text>\n        </Box>\n      </Modal>\n    </Box>;\n}'},null==(_Basic$parameters=Basic.parameters)?void 0:_Basic$parameters.storySource)}),NestedModal.parameters=_extends({},NestedModal.parameters,{storySource:_extends({source:'({\n  open: openArg,\n  ...args\n}) => {\n  const [open, setOpen] = React.useState<[boolean, boolean]>([false, false]);\n  const handleOpenParent = () => setOpen(prevOpen => [true, prevOpen[1]]);\n  const handleCloseParent = () => setOpen(prevOpen => [false, prevOpen[1]]);\n  const handleOpenChild = () => setOpen(prevOpen => [prevOpen[0], true]);\n  const handleCloseChild = () => setOpen(prevOpen => [prevOpen[0], false]);\n  return <Box>\n      <Button onPress={handleOpenParent}>Open modal</Button>\n      <Modal open={open[0]} accessibilityLabelledBy="parent-modal-title" accessibilityDescribedBy="parent-modal-description" onClose={handleCloseParent} {...args}>\n        <Box style={{\n        transform: [{\n          translateX: ("-50%" as any)\n        }, {\n          translateY: ("-50%" as any)\n        }]\n      }} sx={{\n        ...style,\n        width: 400\n      }}>\n          <Text as="h2" id="parent-modal-title" variant="headline-small">\n            Text in a modal\n          </Text>\n          <Text nativeID="parent-modal-description" variant="body-medium" sx={{\n          mb: 2\n        }}>\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n          </Text>\n          <Button onPress={handleOpenChild}>Open child modal</Button>\n          <Modal hideScrim open={open[1]} accessibilityLabelledBy="child-modal-title" accessibilityDescribedBy="child-modal-description" onClose={handleCloseChild}>\n            <Box style={{\n            transform: [{\n              translateX: ("-50%" as any)\n            }, {\n              translateY: ("-50%" as any)\n            }]\n          }} sx={{\n            ...style,\n            width: 240\n          }}>\n              <Text as="h2" id="child-modal-title" variant="headline-small">\n                Text in a child modal\n              </Text>\n              <Text nativeID="child-modal-description" variant="body-medium" sx={{\n              mb: 2\n            }}>\n                Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n              </Text>\n              <Button onPress={handleCloseChild}>Close child modal</Button>\n            </Box>\n          </Modal>\n        </Box>\n      </Modal>\n    </Box>;\n}'},null==(_NestedModal$paramete=NestedModal.parameters)?void 0:_NestedModal$paramete.storySource)});var __namedExportsOrder=["Basic","NestedModal"]}}]);