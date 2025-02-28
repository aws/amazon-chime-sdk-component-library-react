"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[5573],{"./src/components/ui/Chat/ChannelList/ChannelList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_ChannelList:()=>_ChannelList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Flex/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Chat/ChannelList/index.tsx"),_ChannelItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Chat/ChannelList/ChannelItem.tsx"),_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/PopOver/PopOverItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React, { useState } from 'react';\n\nimport Flex from '../../Flex';\nimport ChannelList from './';\nimport ChannelItem from './ChannelItem';\nimport PopOverItem from '../../PopOver/PopOverItem';\n\nexport default {\n  title: 'UI Components/Chat',\n  component: ChannelList,\n};\n\nexport const _ChannelList = (args) => {\n  const [activeChannelId, setActiveChannelId] = useState<string>();\n\n  return (\n    <Flex layout=\"fill-space-centered\">\n      <ChannelList>\n        <ChannelItem\n          unread={args.unread}\n          unreadBadgeLabel=\"New\"\n          name=\"Channel 1\"\n          actions={\n            <PopOverItem\n              children={<span>Option 1</span>}\n              onClick={() => console.log('Option 1 clicked')}\n            />\n          }\n          onClick={() => setActiveChannelId('channel1')}\n          lastChannelMessage={\n            args.showLastChannelMessage\n              ? 'Alice: Hello, how are you doing recently?'\n              : ''\n          }\n          lastChannelMessageTimestamp={\n            args.showLastChannelMessageTimestamp ? '5:01 pm' : ''\n          }\n          isSelected={activeChannelId === 'channel1'}\n        />\n        <ChannelItem\n          name=\"Channel 2\"\n          actions={\n            <PopOverItem\n              children={<span>Option 1</span>}\n              onClick={() => console.log('Option 1 clicked')}\n            />\n          }\n          onClick={() => setActiveChannelId('channel2')}\n          lastChannelMessage={\n            args.showLastChannelMessage ? 'Bob: Good morning!' : ''\n          }\n          lastChannelMessageTimestamp={\n            args.showLastChannelMessageTimestamp ? 'Yesterday' : ''\n          }\n          isSelected={activeChannelId === 'channel2'}\n        />\n        <ChannelItem\n          name=\"Channel 3\"\n          actions={\n            <PopOverItem\n              children={<span>Option 1</span>}\n              onClick={() => console.log('Option 1 clicked')}\n            />\n          }\n          onClick={() => setActiveChannelId('channel3')}\n          lastChannelMessage={\n            args.showLastChannelMessage ? 'Alice: [Attachment]' : ''\n          }\n          lastChannelMessageTimestamp={\n            args.showLastChannelMessageTimestamp ? 'Jan 27' : ''\n          }\n          isSelected={activeChannelId === 'channel3'}\n        />\n        <ChannelItem\n          name=\"Channel 4\"\n          actions={\n            <PopOverItem\n              children={<span>Option 1</span>}\n              onClick={() => console.log('Option 1 clicked')}\n            />\n          }\n          onClick={() => setActiveChannelId('channel4')}\n          lastChannelMessage={\n            args.showLastChannelMessage ? 'Kevin: Hello!' : ''\n          }\n          lastChannelMessageTimestamp={\n            args.showLastChannelMessageTimestamp ? 'Jan 26' : ''\n          }\n          isSelected={activeChannelId === 'channel4'}\n        />\n      </ChannelList>\n    </Flex>\n  );\n};\n\n_ChannelList.argTypes = {\n  showLastChannelMessage: { control: 'boolean' },\n  showLastChannelMessageTimestamp: { control: 'boolean' },\n  unread: { control: 'boolean' },\n};\n\n_ChannelList.args = {\n  showLastChannelMessage: false,\n  showLastChannelMessageTimestamp: false,\n  unread: false,\n};\n\n_ChannelList.story = {\n  name: 'ChannelList',\n};\n",locationsMap:{"channel-list":{startLoc:{col:28,line:16},endLoc:{col:1,line:97},startBody:{col:28,line:16},endBody:{col:1,line:97}}}}},title:"UI Components/Chat",component:___WEBPACK_IMPORTED_MODULE_2__.A},_ChannelList=args=>{const[activeChannelId,setActiveChannelId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{layout:"fill-space-centered",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ChannelItem__WEBPACK_IMPORTED_MODULE_3__.A,{unread:args.unread,unreadBadgeLabel:"New",name:"Channel 1",actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"Option 1"}),onClick:()=>console.log("Option 1 clicked")}),onClick:()=>setActiveChannelId("channel1"),lastChannelMessage:args.showLastChannelMessage?"Alice: Hello, how are you doing recently?":"",lastChannelMessageTimestamp:args.showLastChannelMessageTimestamp?"5:01 pm":"",isSelected:"channel1"===activeChannelId}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ChannelItem__WEBPACK_IMPORTED_MODULE_3__.A,{name:"Channel 2",actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"Option 1"}),onClick:()=>console.log("Option 1 clicked")}),onClick:()=>setActiveChannelId("channel2"),lastChannelMessage:args.showLastChannelMessage?"Bob: Good morning!":"",lastChannelMessageTimestamp:args.showLastChannelMessageTimestamp?"Yesterday":"",isSelected:"channel2"===activeChannelId}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ChannelItem__WEBPACK_IMPORTED_MODULE_3__.A,{name:"Channel 3",actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"Option 1"}),onClick:()=>console.log("Option 1 clicked")}),onClick:()=>setActiveChannelId("channel3"),lastChannelMessage:args.showLastChannelMessage?"Alice: [Attachment]":"",lastChannelMessageTimestamp:args.showLastChannelMessageTimestamp?"Jan 27":"",isSelected:"channel3"===activeChannelId}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ChannelItem__WEBPACK_IMPORTED_MODULE_3__.A,{name:"Channel 4",actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"Option 1"}),onClick:()=>console.log("Option 1 clicked")}),onClick:()=>setActiveChannelId("channel4"),lastChannelMessage:args.showLastChannelMessage?"Kevin: Hello!":"",lastChannelMessageTimestamp:args.showLastChannelMessageTimestamp?"Jan 26":"",isSelected:"channel4"===activeChannelId})]})})};_ChannelList.displayName="_ChannelList",_ChannelList.argTypes={showLastChannelMessage:{control:"boolean"},showLastChannelMessageTimestamp:{control:"boolean"},unread:{control:"boolean"}},_ChannelList.args={showLastChannelMessage:!1,showLastChannelMessageTimestamp:!1,unread:!1},_ChannelList.story={name:"ChannelList"},_ChannelList.parameters={..._ChannelList.parameters,docs:{..._ChannelList.parameters?.docs,source:{originalSource:"args => {\n  const [activeChannelId, setActiveChannelId] = useState<string>();\n  return <Flex layout=\"fill-space-centered\">\n      <ChannelList>\n        <ChannelItem unread={args.unread} unreadBadgeLabel=\"New\" name=\"Channel 1\" actions={<PopOverItem children={<span>Option 1</span>} onClick={() => console.log('Option 1 clicked')} />} onClick={() => setActiveChannelId('channel1')} lastChannelMessage={args.showLastChannelMessage ? 'Alice: Hello, how are you doing recently?' : ''} lastChannelMessageTimestamp={args.showLastChannelMessageTimestamp ? '5:01 pm' : ''} isSelected={activeChannelId === 'channel1'} />\n        <ChannelItem name=\"Channel 2\" actions={<PopOverItem children={<span>Option 1</span>} onClick={() => console.log('Option 1 clicked')} />} onClick={() => setActiveChannelId('channel2')} lastChannelMessage={args.showLastChannelMessage ? 'Bob: Good morning!' : ''} lastChannelMessageTimestamp={args.showLastChannelMessageTimestamp ? 'Yesterday' : ''} isSelected={activeChannelId === 'channel2'} />\n        <ChannelItem name=\"Channel 3\" actions={<PopOverItem children={<span>Option 1</span>} onClick={() => console.log('Option 1 clicked')} />} onClick={() => setActiveChannelId('channel3')} lastChannelMessage={args.showLastChannelMessage ? 'Alice: [Attachment]' : ''} lastChannelMessageTimestamp={args.showLastChannelMessageTimestamp ? 'Jan 27' : ''} isSelected={activeChannelId === 'channel3'} />\n        <ChannelItem name=\"Channel 4\" actions={<PopOverItem children={<span>Option 1</span>} onClick={() => console.log('Option 1 clicked')} />} onClick={() => setActiveChannelId('channel4')} lastChannelMessage={args.showLastChannelMessage ? 'Kevin: Hello!' : ''} lastChannelMessageTimestamp={args.showLastChannelMessageTimestamp ? 'Jan 26' : ''} isSelected={activeChannelId === 'channel4'} />\n      </ChannelList>\n    </Flex>;\n}",..._ChannelList.parameters?.docs?.source}}};const __namedExportsOrder=["_ChannelList"];try{_ChannelList.displayName="_ChannelList",_ChannelList.__docgenInfo={description:"",displayName:"_ChannelList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChannelList/ChannelList.stories.tsx#_ChannelList"]={docgenInfo:_ChannelList.__docgenInfo,name:"_ChannelList",path:"src/components/ui/Chat/ChannelList/ChannelList.stories.tsx#_ChannelList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_Badge});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledBadge=styled_components_browser_esm.Ay.span.withConfig(style.P6)`
  ${props=>{if("object"==typeof props.value){const element=props.value;return`width: ${element.props&&element.props.width||"1rem"};`}return null}}
  display: inline-block;
  padding: ${props=>"object"==typeof props.value?"0":"0.1rem 0.4rem 0.125rem"};
  border-radius: 0.5rem;
  line-height: ${props=>"object"==typeof props.value?"1":"1.43"};
  color: ${props=>props.theme.colors.greys.white};
  font-size: 0.65rem;
  background-color: ${props=>"alert"===props.status?props.theme.colors.error.primary:props.theme.colors.greys.grey60};

  ${Base.d};
  ${Base.i}
`;try{StyledBadge.displayName="StyledBadge",StyledBadge.__docgenInfo={description:"",displayName:"StyledBadge",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Badge/Styled.tsx#StyledBadge"]={docgenInfo:StyledBadge.__docgenInfo,name:"StyledBadge",path:"src/components/ui/Badge/Styled.tsx#StyledBadge"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Badge=({value,status="default",className,tag,...rest})=>(0,jsx_runtime.jsx)(StyledBadge,{className:className||"",as:tag,status,value,"data-testid":"badge",...rest,children:value});Badge.displayName="Badge";const ui_Badge=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{value:{defaultValue:null,description:"The value shows in the badge",name:"value",required:!0,type:{name:"string | number | Element"}},status:{defaultValue:{value:"default"},description:"The status of the badge",name:"status",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"alert"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/ui/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Button/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OV:()=>StyledButton,qn:()=>StyledIconButtonWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`;try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/ui/Button/Styled.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledIconButtonWrapper.displayName="StyledIconButtonWrapper",StyledIconButtonWrapper.__docgenInfo={description:"",displayName:"StyledIconButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"]={docgenInfo:StyledIconButtonWrapper.__docgenInfo,name:"StyledIconButtonWrapper",path:"src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.OV,{...props,className:props.className||"",as:props.tag,ref,"aria-label":props.label,"data-testid":"button",disabled:props.disabled,children:[props.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon","data-testid":"button-icon",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-label","data-testid":"button-label",children:props.label})]}))),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Chat/ChannelList/ChannelItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Badge__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/ui/Badge/index.tsx")),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Button/index.tsx"),_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/icons/index.tsx"),_PopOver__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/PopOver/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/ui/Chat/ChannelList/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChannelItem=props=>{const{name,actions,isSelected,onClick,unread,unreadBadgeLabel,lastChannelMessage,lastChannelMessageTimestamp}=props,displayDetailedView=lastChannelMessage||lastChannelMessageTimestamp,displayUnreadBadge=unread&&unreadBadgeLabel,displayPopOver=actions&&isSelected;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_6__.oq,{...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()({"ch-selected":isSelected,"ch-unread":unread}),children:displayDetailedView?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"ch-detailed-channel",onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"ch-detailed-channel-name",children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"ch-detailed-channel-message",children:lastChannelMessage}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"ch-detailed-channel-message-time",children:lastChannelMessageTimestamp})]}),displayUnreadBadge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{value:unreadBadgeLabel,className:"ch-unread-badge-detailed"}),displayPopOver&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PopOver__WEBPACK_IMPORTED_MODULE_5__.A,{className:"ch-popover-toggle-detailed",a11yLabel:"Open channel options",placement:"bottom-end",renderButton:isOpen=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.nv,{width:"1.5rem",height:"1.5rem",className:(isOpen?"isOpen":"")+" ch-channel-actions","data-testid":"channel-actions"}),children:actions})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{className:"ch-channel-button",label:name,onClick}),displayUnreadBadge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{value:unreadBadgeLabel,className:"ch-unread-badge"}),displayPopOver&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PopOver__WEBPACK_IMPORTED_MODULE_5__.A,{a11yLabel:"Open channel options",placement:"bottom-end",renderButton:isOpen=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.nv,{width:"1.5rem",height:"1.5rem",className:(isOpen?"isOpen":"")+" ch-channel-actions","data-testid":"channel-actions"}),children:actions})]})})};ChannelItem.displayName="ChannelItem";const __WEBPACK_DEFAULT_EXPORT__=ChannelItem;try{ChannelItem.displayName="ChannelItem",ChannelItem.__docgenInfo={description:"",displayName:"ChannelItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode | ReactNode[]"}},isSelected:{defaultValue:null,description:"Determines if the channel is currently selected and can show actions.",name:"isSelected",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"Callback function when clicked",name:"onClick",required:!0,type:{name:"() => void"}},unread:{defaultValue:null,description:"Signifies if there are unread message in the channel.",name:"unread",required:!1,type:{name:"boolean | undefined"}},unreadBadgeLabel:{defaultValue:null,description:"Content of the badge signaling unread messages, such as a badge displaying the number.",name:"unreadBadgeLabel",required:!1,type:{name:"string | undefined"}},lastChannelMessage:{defaultValue:null,description:"",name:"lastChannelMessage",required:!1,type:{name:"string | undefined"}},lastChannelMessageTimestamp:{defaultValue:null,description:"",name:"lastChannelMessageTimestamp",required:!1,type:{name:"string | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChannelList/ChannelItem.tsx#ChannelItem"]={docgenInfo:ChannelItem.__docgenInfo,name:"ChannelItem",path:"src/components/ui/Chat/ChannelList/ChannelItem.tsx#ChannelItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Chat/ChannelList/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{oq:()=>StyledChannelItem,rz:()=>StyledChannelList});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledChannelList=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.ul.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  display: flex;
  flex-direction: column;
  width: 20rem;

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
`,StyledChannelItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.li.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  position: relative;

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i};
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d};

  & .ch-channel-button {
    width: 100%;
    height: 100%;
    padding: 11px 0;
    background-color: ${props=>props.theme.channelList.bgd};
    border: none;
    border-radius: unset;
    justify-content: left;
    padding-left: 1rem;
    color: ${props=>props.theme.channelList.fontColor};
    border: ${props=>props.theme.channelList.border};
    font-family: ${props=>props.theme.fonts.body};

    &:hover {
      background-color: ${props=>props.theme.channelList.hover.bgd};
    }

    &:active {
      background-color: ${props=>props.theme.channelList.active.bgd};
      color: ${props=>props.theme.channelList.active.fontColor};
    }

    &:focus {
      border: ${props=>props.theme.channelList.focus.border};
    }
  }

  & .ch-label {
    padding-left: 1.5rem;
  }

  & .ch-unread-badge {
    display: ${props=>props.unread?"inline":"none"};
    position: absolute;
    z-index: 2;
    top: 12px;
    left: 5px;
    background-color: ${props=>props.theme.colors.primary.light};
  }

  &.ch-unread .ch-channel-button {
    font-weight: bold;
  }

  &.ch-selected .ch-channel-button {
    background-color: ${props=>props.theme.colors.primary.light};
    color: ${props=>props.theme.channelList.selected.fontColor};

    &:focus {
      border: ${props=>props.theme.channelList.focus.selectedBorder};
    }
  }

  & .ch-popover-toggle {
    position: absolute;
    right: 1rem;
    margin: 0.5rem 0;
    height: 1.5rem;
    border-radius: 50%;

    .ch-channel-actions {
      border: 1px solid transparent;
    }

    & g {
      fill: ${props=>props.theme.channelList.active.fontColor};
    }

    & button:focus .ch-channel-actions {
      border: ${props=>props.theme.channelList.focus.selectedBorder};
      border-radius: 50%;
    }

    &:hover,
    &:active {
      background-color: ${props=>props.theme.channelList.iconButton.activeBgd};

      & g {
        fill: ${props=>props.theme.colors.primary.light};
      }
    }
  }

  & .ch-detailed-channel {
    display: grid;
    grid-template-rows: 17px 1fr max-content;
    grid-gap: 16px;
    padding: 10px 20px;
    background-color: ${props=>props.theme.channelList.bgd};
    color: ${props=>props.theme.channelList.fontColor};
    border-bottom: 0.5px solid #d3d3d3;
    font-family: ${props=>props.theme.fonts.body};

    &:hover {
      background-color: ${props=>props.theme.channelList.hover.bgd};
    }

    &:active {
      background-color: ${props=>props.theme.channelList.active.bgd};
      color: ${props=>props.theme.channelList.active.fontColor};
    }

    &:focus {
      border: ${props=>props.theme.channelList.focus.border};
    }
  }

  & .ch-detailed-channel-name {
    font-weight: bold;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 85%;
  }

  & .ch-detailed-channel-message {
    grid-row: span 2;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 90%;
  }

  & .ch-detailed-channel-message-time {
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    font-size: 8px;
    max-width: 15%;
    text-align: right;
  }

  & .ch-unread-badge-detailed {
    display: ${props=>props.unread?"inline":"none"};
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 5px;
    background-color: ${props=>props.theme.colors.primary.light};
  }

  &.ch-selected .ch-detailed-channel {
    background-color: ${props=>props.theme.colors.primary.light};
    color: ${props=>props.theme.channelList.selected.fontColor};

    &:focus {
      border: ${props=>props.theme.channelList.focus.selectedBorder};
    }
  }

  & .ch-popover-toggle-detailed {
    position: absolute;
    top: 1.75rem;
    right: 1rem;
    margin: 0.5rem 0;
    height: 1.5rem;
    border-radius: 50%;

    .ch-channel-actions {
      border: 1px solid transparent;
    }

    & g {
      fill: ${props=>props.theme.channelList.active.fontColor};
    }

    & button:focus .ch-channel-actions {
      border: ${props=>props.theme.channelList.focus.selectedBorder};
      border-radius: 50%;
    }

    &:hover,
    &:active {
      background-color: ${props=>props.theme.channelList.iconButton.activeBgd};

      & g {
        fill: ${props=>props.theme.colors.primary.light};
      }
    }
  }
`;try{StyledChannelList.displayName="StyledChannelList",StyledChannelList.__docgenInfo={description:"",displayName:"StyledChannelList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChannelList/Styled.tsx#StyledChannelList"]={docgenInfo:StyledChannelList.__docgenInfo,name:"StyledChannelList",path:"src/components/ui/Chat/ChannelList/Styled.tsx#StyledChannelList"})}catch(__react_docgen_typescript_loader_error){}try{StyledChannelItem.displayName="StyledChannelItem",StyledChannelItem.__docgenInfo={description:"",displayName:"StyledChannelItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChannelList/Styled.tsx#StyledChannelItem"]={docgenInfo:StyledChannelItem.__docgenInfo,name:"StyledChannelItem",path:"src/components/ui/Chat/ChannelList/Styled.tsx#StyledChannelItem"})}catch(__react_docgen_typescript_loader_error){}try{Styled.displayName="Styled",Styled.__docgenInfo={description:"",displayName:"Styled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChannelList/Styled.tsx#Styled"]={docgenInfo:Styled.__docgenInfo,name:"Styled",path:"src/components/ui/Chat/ChannelList/Styled.tsx#Styled"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Chat/ChannelList/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Chat/ChannelList/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChannelList=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_1__.rz,{...props,"data-testid":"channel-list",children:props.children});ChannelList.displayName="ChannelList";const __WEBPACK_DEFAULT_EXPORT__=ChannelList;try{ChannelList.displayName="ChannelList",ChannelList.__docgenInfo={description:"",displayName:"ChannelList",props:{tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChannelList/index.tsx#ChannelList"]={docgenInfo:ChannelList.__docgenInfo,name:"ChannelList",path:"src/components/ui/Chat/ChannelList/index.tsx#ChannelList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/PopOverItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,t:()=>PopOverItem});__webpack_require__("./node_modules/react/index.js");var _icons_Check__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Check/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopOverItem=({as="button",children,checked,testId="popover-item",...rest})=>{const Tag=as;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_2__.kL,{"data-testid":testId,children:[checked&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons_Check__WEBPACK_IMPORTED_MODULE_1__.A,{className:"ch-check","data-testid":"popover-check"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Tag,{className:"ch-content",...rest,children})]})};PopOverItem.displayName="PopOverItem";const __WEBPACK_DEFAULT_EXPORT__=PopOverItem;try{PopOverItem.displayName="PopOverItem",PopOverItem.__docgenInfo={description:"",displayName:"PopOverItem",props:{onClick:{defaultValue:null,description:"The callback fired when the item is clicked.",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},checked:{defaultValue:null,description:"Whether or not the item is checked.",name:"checked",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"The elements that populate the content of the item.",name:"children",required:!1,type:{name:"((ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]) & (string | ... 5 more ... | null)) | undefined"}},disabled:{defaultValue:null,description:"Whether or not the item is disabled.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"Defines the href attribute if the item is rendered as an `a` tag.",name:"href",required:!1,type:{name:"string | undefined"}},as:{defaultValue:{value:"button"},description:"Defines which tag will the item be rendered as, it defaults to `button`.",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"a"'},{value:'"button"'}]}},border:{defaultValue:null,description:"Whether or not the item has a border.",name:"border",required:!1,type:{name:"boolean | undefined"}},testId:{defaultValue:{value:"popover-item"},description:"",name:"testId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/PopOverItem.tsx#PopOverItem"]={docgenInfo:PopOverItem.__docgenInfo,name:"PopOverItem",path:"src/components/ui/PopOver/PopOverItem.tsx#PopOverItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GW:()=>StyledPopOverMenu,JD:()=>StyledSubMenu,WL:()=>StyledPopOverSeparator,kC:()=>StyledPopOverHeader,kL:()=>StyledPopOverItem,rS:()=>StyledPopOverToggle});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts");const StyledPopOverMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.ul.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  width: fit-content;
  max-width: 22rem;
  background-color: ${props=>props.theme.popOver.menuBgd};
  border: ${props=>props.theme.popOver.menuBorder};
  margin: 0;
  border-radius: 0.25rem;
  backdrop-filter: blur(1rem);
  list-style: none;
  padding: 0.5rem 0;
  box-shadow: ${props=>props.theme.popOver.shadow};
  z-index: ${props=>props.theme.zIndex.popOver};
  display: table;
  overflow: inherit;
`,StyledPopOverToggle=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`,StyledPopOverItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.li.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  height: 2rem;
  position: relative;

  button,
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: ${props=>props.theme.popOver.itemBgd};
    color: ${props=>props.theme.popOver.itemText};
    line-height: ${props=>props.theme.fontSizes.text.lineHeight};
    font-size: ${props=>props.theme.fontSizes.text.fontSize};
    padding: 0 2.5rem;
    text-decoration: none;
    outline: 0;

    &:hover,
    &:focus {
      background-color: ${props=>props.theme.popOver.active.itemBgd};
      color: ${props=>props.theme.popOver.active.itemText};
      outline: 0;
    }

    &:disabled {
      color: ${props=>props.theme.popOver.disabled};
    }
  }

  a {
    width: unset;
  }

  .ch-content > * {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.gO};
  }

  .ch-check {
    position: absolute;
    left: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    top: 0.33rem;
  }

  &:hover .ch-check g,
  &:focus .ch-check g {
    fill: ${props=>props.theme.popOver.active.itemText};
  }
`,StyledSubMenu=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(StyledPopOverItem)`
  > span {
    width: 100%;
    height: 100%;
    display: block;
    height: 2rem;
  }

  > button {
    position: relative;
  }

  .ch-caret {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    right: 0;
    color: inherit;
    fill: inherit;
  }
`,StyledPopOverHeader=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.header.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  border-bottom: 0.0625rem solid ${props=>props.theme.popOver.separator};
  margin-bottom: 0.75rem;
  max-width: 22rem;

  img {
    width: 100%;
    display: inline-block;
    margin-top: -0.5rem;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  img + .ch-title {
    margin-top: 0.75rem;
  }

  .ch-title {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.gO};
    padding: 0 2.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: ${props=>props.theme.popOver.titleText};
    font-size: 1.18125rem;
    line-height: ${props=>props.theme.fontSizes.text.lineHeight};
  }

  .ch-subtitle {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.gO};
    padding: 0 2.5rem;
    color: #616672;
    font-size: ${props=>props.theme.fontSizes.text.fontSize};
    line-height: ${props=>props.theme.fontSizes.text.lineHeight};
    line-height: 1.43;
    margin: 0 0 1rem;
  }
`,StyledPopOverSeparator=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.li.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  margin: 0;
  border-width: 0.0625rem 0 0 0;
  border-style: solid;
  border-color: ${props=>props.theme.popOver.separator};
  margin-bottom: 0.75rem;
  opacity: 0.8;
`;try{StyledPopOverMenu.displayName="StyledPopOverMenu",StyledPopOverMenu.__docgenInfo={description:"",displayName:"StyledPopOverMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"]={docgenInfo:StyledPopOverMenu.__docgenInfo,name:"StyledPopOverMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverToggle.displayName="StyledPopOverToggle",StyledPopOverToggle.__docgenInfo={description:"",displayName:"StyledPopOverToggle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"]={docgenInfo:StyledPopOverToggle.__docgenInfo,name:"StyledPopOverToggle",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverItem.displayName="StyledPopOverItem",StyledPopOverItem.__docgenInfo={description:"",displayName:"StyledPopOverItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"]={docgenInfo:StyledPopOverItem.__docgenInfo,name:"StyledPopOverItem",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"})}catch(__react_docgen_typescript_loader_error){}try{StyledSubMenu.displayName="StyledSubMenu",StyledSubMenu.__docgenInfo={description:"",displayName:"StyledSubMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledSubMenu"]={docgenInfo:StyledSubMenu.__docgenInfo,name:"StyledSubMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledSubMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverHeader.displayName="StyledPopOverHeader",StyledPopOverHeader.__docgenInfo={description:"",displayName:"StyledPopOverHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"]={docgenInfo:StyledPopOverHeader.__docgenInfo,name:"StyledPopOverHeader",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverSeparator.displayName="StyledPopOverSeparator",StyledPopOverSeparator.__docgenInfo={description:"",displayName:"StyledPopOverSeparator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"]={docgenInfo:StyledPopOverSeparator.__docgenInfo,name:"StyledPopOverSeparator",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),react_popper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-popper/lib/esm/Popper.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts"),_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useClickOutside/index.tsx"),_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useTabOutside/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getFocusableElements=node=>node.querySelectorAll("button, [href]"),PopOver=({renderButton,renderButtonWrapper,onPopOverClick,children,isSubMenu=!1,placement="bottom-start",a11yLabel,className,closeOnClick=!0,...rest})=>{const menuRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(isOpen&&menuRef.current){const nodes=getFocusableElements(menuRef.current);nodes&&nodes[0].focus()}}),[isOpen]);const move=direction=>{const node=menuRef.current;if(!isSubMenu&&node){const nodes=getFocusableElements(node),currentElement=document.activeElement;for(let i=0;i<nodes.length;i++)if(nodes[i]===currentElement){if("down"===direction&&i!==nodes.length-1)return nodes[i+1].focus();if("up"===direction&&i>0)return nodes[i-1].focus();break}}},handlePopOverClick=()=>{setIsOpen(!isOpen),onPopOverClick&&onPopOverClick(isOpen)};return(0,_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__.A)(menuRef,(()=>setIsOpen(!1))),(0,_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__.A)(menuRef,(()=>setIsOpen(!1))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref:menuRef,onKeyDown:e=>{switch(e.keyCode){case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ESCAPE:return setIsOpen(!1);case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_UP:return move("up");case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_DOWN:return move("down")}},"data-testid":"popover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_7__.mS,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_8__.O,{children:({ref})=>{const props={ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"ch-popover-toggle"),onClick:handlePopOverClick,"data-menu":isSubMenu?"submenu":null,"aria-label":a11yLabel,"aria-haspopup":!0,"aria-expanded":isOpen,"data-testid":"popover-toggle"};if(renderButton)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.rS,{...props,children:renderButton(isOpen)});if(renderButtonWrapper){const{ref,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref,children:renderButtonWrapper(isOpen,rest)})}return null}}),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_9__.N,{placement,modifiers:[{name:"offset",options:{offset:[-8,0]}}],...rest,children:({ref,style,placement})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.GW,{"data-placement":placement,onClick:e=>(e=>{if(!closeOnClick)return;return!e.target.closest("[data-menu='submenu']")&&setIsOpen(!1)})(e),ref,style,"data-testid":"menu",className:"ch-popover-menu",children})})]})})};PopOver.displayName="PopOver";const __WEBPACK_DEFAULT_EXPORT__=PopOver;try{PopOver.displayName="PopOver",PopOver.__docgenInfo={description:"",displayName:"PopOver",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},isSubMenu:{defaultValue:{value:"false"},description:"Whether or not this is a sub menu.",name:"isSubMenu",required:!1,type:{name:"Boolean | undefined"}},placement:{defaultValue:{value:"bottom-start"},description:"Defines the placement of PopOver menu.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},renderButton:{defaultValue:null,description:"Defines the function to render the inner contents of the popover button element",name:"renderButton",required:!1,type:{name:"((isActive: boolean) => ReactNode) | undefined"}},renderButtonWrapper:{defaultValue:null,description:"Alternative to renderButton, defines the function to render the full popover button element (as opposed to just its contents). This is used if you want full control over the button rendering. The button must forwardRef",name:"renderButtonWrapper",required:!1,type:{name:"((isActive: boolean, props: any) => ReactNode) | undefined"}},onPopOverClick:{defaultValue:null,description:"The callback fired when the render button is clicked.",name:"onPopOverClick",required:!1,type:{name:"((isOpen: boolean) => void) | undefined"}},a11yLabel:{defaultValue:null,description:"The label used for availability.",name:"a11yLabel",required:!0,type:{name:"string"}},closeOnClick:{defaultValue:{value:"true"},description:"Allow the popover to stay open for multiple clicks.",name:"closeOnClick",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/index.tsx#PopOver"]={docgenInfo:PopOver.__docgenInfo,name:"PopOver",path:"src/components/ui/PopOver/index.tsx#PopOver"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>KEY_CODES,d:()=>VIDEO_INPUT_QUALITY});const KEY_CODES={TAB:9,ENTER:13,ESCAPE:27,ARROW_UP:38,ARROW_DOWN:40},VIDEO_INPUT_QUALITY={"360p":"360p (nHD) @ 15 fps (600 Kbps max)","540p":"540p (qHD) @ 15 fps (1.4 Mbps max)","720p":"720p (HD) @ 15 fps (1.4 Mbps max)"}},"./src/hooks/useClickOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useClickOutside(ref,onClickOutside){const onMouseDown=e=>{(e=>!!ref.current&&!ref.current.contains(e.target))(e)&&onClickOutside&&onClickOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("mousedown",onMouseDown),document.addEventListener("touchstart",onMouseDown),()=>{document.removeEventListener("mousedown",onMouseDown),document.removeEventListener("touchstart",onMouseDown)})))}},"./src/hooks/useTabOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useTabOutside(ref,onTabOutside){const keyUp=e=>{if(9===e.keyCode&&ref.current&&!ref.current.contains(document.activeElement))return onTabOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("keyup",keyUp),()=>{document.removeEventListener("keyup",keyUp)})))}}}]);
//# sourceMappingURL=components-ui-Chat-ChannelList-ChannelList-stories.bc637a74.iframe.bundle.js.map