"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[7802],{"./src/components/ui/Notification/Notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicNotification:()=>BasicNotification,NotificationWithButton:()=>NotificationWithButton,NotificationWithCustomContent:()=>NotificationWithCustomContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Notification/index.tsx"),_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/NotificationProvider/index.tsx"),_Flex__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Flex/index.tsx"),_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/icons/index.tsx"),_Heading__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/Heading/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\n\nimport { Notification } from '.';\nimport { Severity } from '../../../providers/NotificationProvider';\nimport Flex from '../Flex';\nimport { Cog } from '../icons';\nimport Heading from '../Heading';\n\nexport default {\n  title: 'UI Components/Notification',\n  component: Notification,\n};\n\nexport const BasicNotification = (args) => {\n  return (\n    <Flex layout=\"fill-space-centered\">\n      <Notification\n        onClose={() => {\n          console.log('Close notification');\n        }}\n        severity={args.severity}\n        message={args.message}\n      />\n    </Flex>\n  );\n};\n\nconst commonHiddenArgTypes = {\n  onClose: { table: { disable: true } },\n  autoClose: { table: { disable: true } },\n  autoCloseDelay: { table: { disable: true } },\n  buttonProps: { table: { disable: true } },\n  icon: { table: { disable: true } },\n};\n\nBasicNotification.argTypes = {\n  severity: {\n    control: 'select',\n    options: {\n      success: Severity.SUCCESS,\n      warning: Severity.WARNING,\n      info: Severity.INFO,\n      error: Severity.ERROR,\n    },\n  },\n  message: { control: 'text' },\n  ...commonHiddenArgTypes,\n};\n\nBasicNotification.args = {\n  severity: Severity.ERROR,\n  message: 'This is the notification message',\n};\n\nBasicNotification.story = {\n  name: 'Basic Notification',\n};\n\nexport const NotificationWithButton = (args) => {\n  return (\n    <Flex layout=\"fill-space-centered\">\n      <Notification\n        onClose={() => {\n          console.log('Close notification');\n        }}\n        severity={args.severity}\n        icon={<Cog />}\n        message={args.message}\n        buttonProps={{ label: 'Click me', onClick: () => alert('clicked') }}\n      />\n    </Flex>\n  );\n};\n\nNotificationWithButton.argTypes = {\n  severity: {\n    control: 'select',\n    options: {\n      success: Severity.SUCCESS,\n      warning: Severity.WARNING,\n      info: Severity.INFO,\n      error: Severity.ERROR,\n    },\n  },\n  message: { control: 'text' },\n  ...commonHiddenArgTypes,\n};\n\nNotificationWithButton.args = {\n  severity: Severity.ERROR,\n  message: 'This is the notification message',\n};\n\nNotificationWithButton.story = {\n  name: 'Notification with button and custom icon',\n};\n\nexport const NotificationWithCustomContent = (args) => {\n  return (\n    <Flex layout=\"fill-space-centered\">\n      <Notification\n        onClose={() => {\n          console.log('Close notification');\n        }}\n        severity={args.severity}\n        icon={<Cog />}\n      >\n        <Heading\n          css={`\n            padding: 0 2rem;\n            font-weight: bold;\n          `}\n          level={6}\n        >\n          This is a Heading component with custom styling\n        </Heading>\n      </Notification>\n    </Flex>\n  );\n};\n\nNotificationWithCustomContent.argTypes = {\n  severity: {\n    control: 'select',\n    options: {\n      success: Severity.SUCCESS,\n      warning: Severity.WARNING,\n      info: Severity.INFO,\n      error: Severity.ERROR,\n    },\n  },\n  message: { table: { disable: true } },\n  ...commonHiddenArgTypes,\n};\n\nNotificationWithCustomContent.args = {\n  severity: Severity.ERROR,\n};\n\nNotificationWithCustomContent.story = {\n  name: 'Notification with custom content',\n};\n",locationsMap:{"basic-notification":{startLoc:{col:33,line:17},endLoc:{col:1,line:29},startBody:{col:33,line:17},endBody:{col:1,line:29}},"notification-with-button":{startLoc:{col:38,line:62},endLoc:{col:1,line:76},startBody:{col:38,line:62},endBody:{col:1,line:76}},"notification-with-custom-content":{startLoc:{col:45,line:101},endLoc:{col:1,line:123},startBody:{col:45,line:101},endBody:{col:1,line:123}}}}},title:"UI Components/Notification",component:___WEBPACK_IMPORTED_MODULE_1__.Eg},BasicNotification=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_3__.A,{layout:"fill-space-centered",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Eg,{onClose:()=>{console.log("Close notification")},severity:args.severity,message:args.message})});BasicNotification.displayName="BasicNotification";const commonHiddenArgTypes={onClose:{table:{disable:!0}},autoClose:{table:{disable:!0}},autoCloseDelay:{table:{disable:!0}},buttonProps:{table:{disable:!0}},icon:{table:{disable:!0}}};BasicNotification.argTypes={severity:{control:"select",options:{success:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.SUCCESS,warning:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.WARNING,info:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.INFO,error:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.ERROR}},message:{control:"text"},...commonHiddenArgTypes},BasicNotification.args={severity:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.ERROR,message:"This is the notification message"},BasicNotification.story={name:"Basic Notification"};const NotificationWithButton=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_3__.A,{layout:"fill-space-centered",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Eg,{onClose:()=>{console.log("Close notification")},severity:args.severity,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.mg,{}),message:args.message,buttonProps:{label:"Click me",onClick:()=>alert("clicked")}})});NotificationWithButton.displayName="NotificationWithButton",NotificationWithButton.argTypes={severity:{control:"select",options:{success:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.SUCCESS,warning:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.WARNING,info:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.INFO,error:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.ERROR}},message:{control:"text"},...commonHiddenArgTypes},NotificationWithButton.args={severity:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.ERROR,message:"This is the notification message"},NotificationWithButton.story={name:"Notification with button and custom icon"};const NotificationWithCustomContent=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_3__.A,{layout:"fill-space-centered",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Eg,{onClose:()=>{console.log("Close notification")},severity:args.severity,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.mg,{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_5__.A,{css:"\n            padding: 0 2rem;\n            font-weight: bold;\n          ",level:6,children:"This is a Heading component with custom styling"})})});NotificationWithCustomContent.displayName="NotificationWithCustomContent",NotificationWithCustomContent.argTypes={severity:{control:"select",options:{success:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.SUCCESS,warning:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.WARNING,info:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.INFO,error:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.ERROR}},message:{table:{disable:!0}},...commonHiddenArgTypes},NotificationWithCustomContent.args={severity:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.ERROR},NotificationWithCustomContent.story={name:"Notification with custom content"},BasicNotification.parameters={...BasicNotification.parameters,docs:{...BasicNotification.parameters?.docs,source:{originalSource:"args => {\n  return <Flex layout=\"fill-space-centered\">\n      <Notification onClose={() => {\n      console.log('Close notification');\n    }} severity={args.severity} message={args.message} />\n    </Flex>;\n}",...BasicNotification.parameters?.docs?.source}}},NotificationWithButton.parameters={...NotificationWithButton.parameters,docs:{...NotificationWithButton.parameters?.docs,source:{originalSource:"args => {\n  return <Flex layout=\"fill-space-centered\">\n      <Notification onClose={() => {\n      console.log('Close notification');\n    }} severity={args.severity} icon={<Cog />} message={args.message} buttonProps={{\n      label: 'Click me',\n      onClick: () => alert('clicked')\n    }} />\n    </Flex>;\n}",...NotificationWithButton.parameters?.docs?.source}}},NotificationWithCustomContent.parameters={...NotificationWithCustomContent.parameters,docs:{...NotificationWithCustomContent.parameters?.docs,source:{originalSource:"args => {\n  return <Flex layout=\"fill-space-centered\">\n      <Notification onClose={() => {\n      console.log('Close notification');\n    }} severity={args.severity} icon={<Cog />}>\n        <Heading css={`\n            padding: 0 2rem;\n            font-weight: bold;\n          `} level={6}>\n          This is a Heading component with custom styling\n        </Heading>\n      </Notification>\n    </Flex>;\n}",...NotificationWithCustomContent.parameters?.docs?.source}}};const __namedExportsOrder=["BasicNotification","NotificationWithButton","NotificationWithCustomContent"];try{BasicNotification.displayName="BasicNotification",BasicNotification.__docgenInfo={description:"",displayName:"BasicNotification",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/Notification.stories.tsx#BasicNotification"]={docgenInfo:BasicNotification.__docgenInfo,name:"BasicNotification",path:"src/components/ui/Notification/Notification.stories.tsx#BasicNotification"})}catch(__react_docgen_typescript_loader_error){}try{NotificationWithButton.displayName="NotificationWithButton",NotificationWithButton.__docgenInfo={description:"",displayName:"NotificationWithButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/Notification.stories.tsx#NotificationWithButton"]={docgenInfo:NotificationWithButton.__docgenInfo,name:"NotificationWithButton",path:"src/components/ui/Notification/Notification.stories.tsx#NotificationWithButton"})}catch(__react_docgen_typescript_loader_error){}try{NotificationWithCustomContent.displayName="NotificationWithCustomContent",NotificationWithCustomContent.__docgenInfo={description:"",displayName:"NotificationWithCustomContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/Notification.stories.tsx#NotificationWithCustomContent"]={docgenInfo:NotificationWithCustomContent.__docgenInfo,name:"NotificationWithCustomContent",path:"src/components/ui/Notification/Notification.stories.tsx#NotificationWithCustomContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Button/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,K:()=>IconButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_2__.qn,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{ref,variant:"icon",...props}),props.badge]}))),__WEBPACK_DEFAULT_EXPORT__=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{badge:{defaultValue:null,description:"Render a component to the top right area of the IconButton",name:"badge",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/ui/Button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/SecondaryButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,t:()=>SecondaryButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SecondaryButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{variant:"secondary",...props}))),__WEBPACK_DEFAULT_EXPORT__=SecondaryButton;try{SecondaryButton.displayName="SecondaryButton",SecondaryButton.__docgenInfo={description:"",displayName:"SecondaryButton",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/SecondaryButton.tsx#SecondaryButton"]={docgenInfo:SecondaryButton.__docgenInfo,name:"SecondaryButton",path:"src/components/ui/Button/SecondaryButton.tsx#SecondaryButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OV:()=>StyledButton,qn:()=>StyledIconButtonWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  border-radius: ${props=>props.theme.radii.default};
  font-size: ${props=>props.theme.fontSizes.text.fontSize};
  padding: 0.5rem 1rem;
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  .ch-icon {
    width: ${props=>props.theme.iconButtonSizes[props.iconSize||"sm"]};
    height: ${props=>props.theme.iconButtonSizes[props.iconSize||"sm"]};
    margin-right: 0.25rem;
  }

  /* variant styles */
  ${props=>"primary"===props.variant&&StyledPrimaryButton}
  ${props=>"secondary"===props.variant&&StyledSecondaryButton}
  ${props=>"icon"===props.variant&&StyledIconButton}

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledPrimaryButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
  background-color: ${props=>props.selected?props.theme.buttons.primary.selected.bgd:props.theme.buttons.primary.static.bgd};
  color: ${props=>props.selected?props.theme.buttons.primary.selected.text:props.theme.buttons.primary.static.text};
  border: ${props=>props.selected?props.theme.buttons.primary.selected.border:props.theme.buttons.primary.static.border};
  box-shadow: ${props=>props.theme.buttons.primary.static.shadow};

  &:focus {
    background-color: ${props=>props.theme.buttons.primary.focus.bgd};
    border: ${props=>props.theme.buttons.primary.focus.border};
    color: ${props=>props.theme.buttons.primary.focus.text};
    box-shadow: ${props=>props.theme.buttons.primary.focus.shadow};
  }

  &:hover {
    background-color: ${props=>props.theme.buttons.primary.hover.bgd};
    border: ${props=>props.theme.buttons.primary.hover.border};
    color: ${props=>props.theme.buttons.primary.hover.text};
    box-shadow: ${props=>props.theme.buttons.primary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${props=>props.theme.buttons.primary.focus.shadow};
  }

  &:active {
    background-color: ${props=>props.theme.buttons.primary.active.bgd};
    border: ${props=>props.theme.buttons.primary.active.border};
    color: ${props=>props.theme.buttons.primary.active.text};
    box-shadow: ${props=>props.theme.buttons.primary.active.shadow};
  }

  &:disabled {
    background-color: ${props=>props.theme.buttons.primary.disabled.bgd};
    border: ${props=>props.theme.buttons.primary.disabled.border};
    color: ${props=>props.theme.buttons.primary.disabled.text};
    cursor: not-allowed;
  }
`,StyledSecondaryButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
  background-color: ${props=>props.selected?props.theme.buttons.secondary.selected.bgd:props.theme.buttons.secondary.static.bgd};
  color: ${props=>props.selected?props.theme.buttons.secondary.selected.text:props.theme.buttons.secondary.static.text};
  border: ${props=>props.selected?props.theme.buttons.secondary.selected.border:props.theme.buttons.secondary.static.border};
  box-shadow: ${props=>props.theme.buttons.secondary.shadow};

  &:focus {
    background-color: ${props=>props.theme.buttons.secondary.focus.bgd};
    border: ${props=>props.theme.buttons.secondary.focus.border};
    color: ${props=>props.theme.buttons.secondary.focus.text};
    box-shadow: ${props=>props.theme.buttons.secondary.focus.shadow};
  }

  &:hover {
    background-color: ${props=>props.theme.buttons.secondary.hover.bgd};
    border: ${props=>props.theme.buttons.secondary.hover.border};
    color: ${props=>props.theme.buttons.secondary.hover.text};
    box-shadow: ${props=>props.theme.buttons.secondary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${props=>props.theme.buttons.secondary.focus.shadow};
  }

  &:active {
    background-color: ${props=>props.theme.buttons.secondary.active.bgd};
    border: ${props=>props.theme.buttons.secondary.active.border};
    color: ${props=>props.theme.buttons.secondary.active.text};
    box-shadow: ${props=>props.theme.buttons.secondary.focus.shadow};
  }

  &:disabled {
    background-color: ${props=>props.theme.buttons.secondary.disabled.bgd};
    border: ${props=>props.theme.buttons.secondary.disabled.border};
    color: ${props=>props.theme.buttons.secondary.disabled.text};
    cursor: not-allowed;
  }
`,badgeLayout={sm:styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
    top: -15%;
    left: 76%;
  `,md:styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
    top: 4%;
    left: 76%;
  `,lg:styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
    top: 10%;
    left: 76%;
  `},StyledIconButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
  background-color: ${props=>props.selected?props.theme.buttons.icon.selected.bgd:props.theme.buttons.icon.static.bgd};
  color: ${props=>props.selected?props.theme.buttons.icon.selected.text:props.theme.buttons.icon.static.text};
  border: ${props=>props.selected?props.theme.buttons.icon.selected.border:props.theme.buttons.icon.static.border};
  border-radius: ${props=>props.theme.radii.circle};
  padding: 0.1875rem;
  position: relative;

  > .ch-label {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.Qg};
  }

  > .ch-icon {
    width: ${props=>props.theme.iconButtonSizes[props.iconSize||"sm"]};
    height: ${props=>props.theme.iconButtonSizes[props.iconSize||"sm"]};
    margin: 0;
  }

  &:focus {
    background-color: ${({theme,selected})=>selected?theme.buttons.icon.selected.bgd:theme.buttons.icon.static.bgd};
    border: ${props=>props.theme.buttons.icon.focus.border};
    color: ${props=>props.theme.buttons.icon.focus.text};
    color: ${({theme,selected})=>selected?theme.buttons.icon.selected.text:theme.buttons.icon.static.text};
    box-shadow: ${props=>props.theme.buttons.icon.focus.shadow};
  }

  &:hover {
    background-color: ${props=>props.theme.buttons.icon.hover.bgd};
    border: ${props=>props.theme.buttons.icon.hover.border};
    color: ${props=>props.theme.buttons.icon.hover.text};
  }

  &:active {
    background-color: ${props=>props.theme.buttons.icon.active.bgd};
    border: ${props=>props.theme.buttons.icon.active.border};
    color: ${props=>props.theme.buttons.icon.active.text};
  }

  &:disabled {
    background-color: ${props=>props.theme.buttons.icon.disabled.bgd};
    border: ${props=>props.theme.buttons.icon.disabled.border};
    color: ${props=>props.theme.buttons.icon.disabled.text};
    cursor: not-allowed;
  }

  + * {
    position: absolute;
    font-size: 0.55rem;
    z-index: 1;
    ${({iconSize})=>iconSize?badgeLayout[iconSize]:badgeLayout.sm}
  }
`,StyledIconButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  display: inline-block;
  position: relative;
`;try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/ui/Button/Styled.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledIconButtonWrapper.displayName="StyledIconButtonWrapper",StyledIconButtonWrapper.__docgenInfo={description:"",displayName:"StyledIconButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"]={docgenInfo:StyledIconButtonWrapper.__docgenInfo,name:"StyledIconButtonWrapper",path:"src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.OV,{...props,className:props.className||"",as:props.tag,ref,"aria-label":props.label,"data-testid":"button",disabled:props.disabled,children:[props.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon","data-testid":"button-icon",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-label","data-testid":"button-label",children:props.label})]}))),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
  display: flex;
  width: 100%;
  height: 100%;
`,layoutMap={"fill-space":fillSpace,"fill-space-centered":styled_components_browser_esm.AH`
  ${fillSpace};
  align-items: center;
  justify-content: center;
`,"equal-columns":styled_components_browser_esm.AH`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: stretch;

  > * {
    flex-grow: 1;
    flex-basis: 50%;
  }
`,stack:styled_components_browser_esm.AH`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 100%;
  }
`},StyledFlex=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
  align-items: ${props=>props.alignItems};
  display: ${props=>props.container?"flex":"block"};
  flex: ${props=>props.flex||""};
  flex-basis: ${props=>props.flexBasis};
  flex-direction: ${props=>props.flexDirection};
  flex-grow: ${props=>props.flexGrow||""};
  flex-shrink: ${props=>props.flexShrink};
  flex-wrap: ${props=>props.flexWrap};
  justify-content: ${props=>props.justifyContent};

  // layout variants
  ${props=>!!props.layout&&layoutMap[props.layout]}

  ${Base.d}
  ${Base.i}
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_Heading});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledHeading=styled_components_browser_esm.Ay.h1.withConfig(style.P6)`
  display: block;
  margin: 0;

  font-size: ${props=>props.theme.fontSizes[`h${props.level}`].mobile.fontSize};
  font-weight: ${props=>props.theme.fontSizes[`h${props.level}`].mobile.fontWeight};
  line-height: ${props=>props.theme.fontSizes[`h${props.level}`].mobile.lineHeight};

  ${({theme})=>theme.mediaQueries.min.md} {
    font-size: ${props=>props.theme.fontSizes[`h${props.level}`].fontSize};
    font-weight: ${props=>props.theme.fontSizes[`h${props.level}`].fontWeight};
    line-height: ${props=>props.theme.fontSizes[`h${props.level}`].lineHeight};
  }

  ${Base.d}
  ${Base.i}
`;try{StyledHeading.displayName="StyledHeading",StyledHeading.__docgenInfo={description:"",displayName:"StyledHeading",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Heading/Styled.tsx#StyledHeading"]={docgenInfo:StyledHeading.__docgenInfo,name:"StyledHeading",path:"src/components/ui/Heading/Styled.tsx#StyledHeading"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading=(0,react.forwardRef)(((props,ref)=>{const{tag,children,className,level,...rest}=props;return(0,jsx_runtime.jsx)(StyledHeading,{as:tag||`h${level}`,className:className||"",level,ref,"data-testid":"heading",...rest,children})})),ui_Heading=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{children:{defaultValue:null,description:"The children element(s) within a heading.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},level:{defaultValue:null,description:"The level of heading from 1 to 6. 1 defines the most important heading, 6 defines the least important heading.",name:"level",required:!0,type:{name:"enum",value:[{value:"4"},{value:"2"},{value:"1"},{value:"3"},{value:"5"},{value:"6"}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Heading/index.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/ui/Heading/index.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Notification/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Eg:()=>Notification,Ay:()=>ui_Notification});var react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./src/components/ui/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts"),IconButton=__webpack_require__("./src/components/ui/Button/IconButton.tsx"),SecondaryButton=__webpack_require__("./src/components/ui/Button/SecondaryButton.tsx");const StyledCloseIconButton=(0,styled_components_browser_esm.Ay)(IconButton.A)``,StyledNotificationButton=(0,styled_components_browser_esm.Ay)(SecondaryButton.A)``,StyledNotification=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
  align-items: center;
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${({theme,severity})=>theme.notification[severity].text};
  background-color: ${({theme,severity})=>theme.colors[severity].primary};
  padding: 0.75rem;
  box-shadow: ${({theme})=>theme.notification.shadow};
  border-radius: 0.25rem;
  margin: 0.75rem;
  max-width: 45rem;
  pointer-events: auto;

  .ch-severity-icon {
    width: 1.5rem;
    flex-shrink: 0;
  }

  .ch-message {
    display: flex;
    flex-flow: column wrap;
    font-size: ${props=>props.theme.fontSizes.text.fontSize};
    line-height: ${props=>props.theme.fontSizes.text.lineHeight};
    letter-spacing: -0.005625rem;
    margin: 0.5rem 0.75rem;

    &:empty {
      margin: 0;
    }
  }

  ${StyledNotificationButton} {
    margin-right: 1.6rem;
    border-color: ${({theme,severity})=>theme.notification[severity].text};
  }

  ${StyledCloseIconButton},
  ${StyledNotificationButton} {
    background-color: ${({theme,severity})=>theme.colors[severity].primary};
    color: ${({theme,severity})=>theme.notification[severity].closeButton.text};
  }

  ${StyledCloseIconButton}:hover, ${StyledCloseIconButton}:focus, ${StyledNotificationButton}:hover, ${StyledNotificationButton}:focus {
    background-color: ${({theme,severity})=>theme.notification[severity].closeButton.hover.bgd};
    color: ${({theme,severity})=>theme.notification[severity].closeButton.hover.text};
  }

  ${StyledCloseIconButton}:active, ${StyledNotificationButton}:active {
    background-color: ${({theme,severity})=>theme.notification[severity].closeButton.active.bgd};
    color: ${({theme,severity})=>theme.notification[severity].closeButton.active.text};
  }

  ${Base.d}
  ${Base.i}
`;try{StyledCloseIconButton.displayName="StyledCloseIconButton",StyledCloseIconButton.__docgenInfo={description:"",displayName:"StyledCloseIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/Styled.tsx#StyledCloseIconButton"]={docgenInfo:StyledCloseIconButton.__docgenInfo,name:"StyledCloseIconButton",path:"src/components/ui/Notification/Styled.tsx#StyledCloseIconButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledNotificationButton.displayName="StyledNotificationButton",StyledNotificationButton.__docgenInfo={description:"",displayName:"StyledNotificationButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/Styled.tsx#StyledNotificationButton"]={docgenInfo:StyledNotificationButton.__docgenInfo,name:"StyledNotificationButton",path:"src/components/ui/Notification/Styled.tsx#StyledNotificationButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledNotification.displayName="StyledNotification",StyledNotification.__docgenInfo={description:"",displayName:"StyledNotification",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/Styled.tsx#StyledNotification"]={docgenInfo:StyledNotification.__docgenInfo,name:"StyledNotification",path:"src/components/ui/Notification/Styled.tsx#StyledNotification"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_DELAY=6e3;var Severity=function(Severity){return Severity.ERROR="error",Severity.SUCCESS="success",Severity.INFO="info",Severity.WARNING="warning",Severity}(Severity||{});const iconMapping={success:(0,jsx_runtime.jsx)(icons.fN,{}),warning:(0,jsx_runtime.jsx)(icons.zD,{}),error:(0,jsx_runtime.jsx)(icons.eT,{}),info:(0,jsx_runtime.jsx)(icons.$$,{})},Notification=props=>{const{tag,message,onClose,autoClose=!1,autoCloseDelay=DEFAULT_DELAY,severity=Severity.ERROR,className,buttonProps,icon,children}=props,ariaLive=severity===Severity.ERROR?"assertive":"polite",ariaRole=severity===Severity.ERROR?"alert":"status";return(0,react.useEffect)((()=>{if(!autoClose)return;const timer=setTimeout(onClose,autoCloseDelay);return()=>clearTimeout(timer)}),[]),(0,jsx_runtime.jsxs)(StyledNotification,{"aria-live":ariaLive,role:ariaRole,severity,as:tag,...props,className:className||"","data-testid":"notification",children:[(0,jsx_runtime.jsx)("div",{className:"ch-severity-icon","data-testid":"severity-icon",children:icon||iconMapping[severity]}),(0,jsx_runtime.jsx)("output",{className:"ch-message","data-testid":"message",role:ariaRole,children:message}),buttonProps&&(0,jsx_runtime.jsx)(StyledNotificationButton,{"aria-hidden":!0,...buttonProps}),children,onClose&&(0,jsx_runtime.jsx)(StyledCloseIconButton,{label:"close",icon:(0,jsx_runtime.jsx)(icons.n$,{}),onClick:onClose})]})};Notification.displayName="Notification";const ui_Notification=Notification;try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{severity:{defaultValue:null,description:"The severity of the notification.",name:"severity",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'}]}},message:{defaultValue:null,description:"The message to display in the notification.",name:"message",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"The callback fired when a notification is closed.",name:"onClose",required:!0,type:{name:"() => void"}},autoClose:{defaultValue:null,description:"Whether or not the notification should get closed automatically.",name:"autoClose",required:!1,type:{name:"boolean | undefined"}},autoCloseDelay:{defaultValue:null,description:"The auto close delay in milliseconds, it defaults to `6000` (6s).",name:"autoCloseDelay",required:!1,type:{name:"number | undefined"}},className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},buttonProps:{defaultValue:null,description:"For rendering a button element adjacent to the message",name:"buttonProps",required:!1,type:{name:"ButtonProps | undefined"}},icon:{defaultValue:null,description:"optional icon to override the default",name:"icon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"optional content to render in the body of the notification",name:"children",required:!1,type:{name:"((string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | ReactNode[]) & (string | ... 4 more ... | ReactPortal)) | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/index.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"src/components/ui/Notification/index.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}},"./src/providers/NotificationProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X2:()=>ActionType,ph:()=>NotificationProvider,AI:()=>Severity,dq:()=>useNotificationDispatch,IB:()=>useNotificationState});var react=__webpack_require__("./node_modules/react/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");let Severity=function(Severity){return Severity.ERROR="error",Severity.SUCCESS="success",Severity.INFO="info",Severity.WARNING="warning",Severity}({}),ActionType=function(ActionType){return ActionType[ActionType.ADD=0]="ADD",ActionType[ActionType.REMOVE=1]="REMOVE",ActionType[ActionType.REMOVE_ALL=2]="REMOVE_ALL",ActionType}({});const initialState={notifications:[]},reducer=(state,action)=>{const{type,payload}=action;switch(type){case ActionType.ADD:{const notification={id:(0,v4.A)(),...payload},notifications=notification?.replaceAll?[notification]:[...state.notifications,notification];return{...state,notifications}}case ActionType.REMOVE:{const notifications=state.notifications.filter((notification=>notification?.id!==payload));return{...state,notifications}}case ActionType.REMOVE_ALL:return{...state,notifications:[]};default:throw new Error("Incorrect type in NotificationProvider")}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StateContext=react.createContext(initialState),DispatchContext=react.createContext((()=>{})),NotificationProvider=({children})=>{const[state,dispatch]=(0,react.useReducer)(reducer,initialState);return(0,jsx_runtime.jsx)(StateContext.Provider,{value:state,children:(0,jsx_runtime.jsx)(DispatchContext.Provider,{value:dispatch,children})})};NotificationProvider.displayName="NotificationProvider";const useNotificationState=()=>(0,react.useContext)(StateContext),useNotificationDispatch=()=>(0,react.useContext)(DispatchContext);try{NotificationProvider.displayName="NotificationProvider",NotificationProvider.__docgenInfo={description:"",displayName:"NotificationProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/NotificationProvider/index.tsx#NotificationProvider"]={docgenInfo:NotificationProvider.__docgenInfo,name:"NotificationProvider",path:"src/providers/NotificationProvider/index.tsx#NotificationProvider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}}}]);
//# sourceMappingURL=components-ui-Notification-Notification-stories.cabcfb7d.iframe.bundle.js.map