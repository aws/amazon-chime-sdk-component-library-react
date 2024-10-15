"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[9231],{"./src/components/ui/Chat/ChatBubble/EditableChatBubble.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_EditableChatBubble:()=>_EditableChatBubble,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Flex/index.tsx"),_EditableChatBubble__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Chat/ChatBubble/EditableChatBubble.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI Components/Chat/EditableChatBubble",component:_EditableChatBubble__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React, { useState } from 'react';\n\nimport Flex from '../../Flex';\nimport EditableChatBubble from './EditableChatBubble';\n\nexport default {\n  title: 'UI Components/Chat/EditableChatBubble',\n  component: EditableChatBubble,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport const _EditableChatBubble = (args) => {\n  const containerStyles = `\n    display: flex; \n    flex-direction: column;\n    padding-top: 1rem;\n  `;\n\n  const bubbleStyles = `\n    margin: 1rem;\n  `;\n\n  const save = (e: any, newContent: string) => {\n    e.preventDefault();\n    console.log('Save clicked with new text:', newContent);\n  };\n\n  const cancel = (e: any) => {\n    e.preventDefault();\n    console.log('cancel clicked');\n  };\n\n  return (\n    <Flex layout=\"fill-space-centered\" css={containerStyles}>\n      <EditableChatBubble\n        variant={args.variant}\n        senderName={args.senderName}\n        content=\"This messsage has typos that ned to be fixxed.\"\n        showTail={args.showTail}\n        showName={args.boolean}\n        saveLabel={args.saveLabel}\n        cancelLabel={args.cancelLabel}\n        css={bubbleStyles}\n        save={save}\n        cancel={cancel}\n      />\n    </Flex>\n  );\n};\n\n_EditableChatBubble.argTypes = {\n  showTail: { control: 'boolean' },\n  showName: { control: 'boolean' },\n  variant: { control: 'select', options: ['incoming', 'outgoing'] },\n  senderName: { control: 'text' },\n  saveLabel: { control: 'text' },\n  cancelLabel: { control: 'text' },\n  content: { table: { disable: true } },\n  save: { table: { disable: true } },\n  cancel: { table: { disable: true } },\n};\n\n_EditableChatBubble.args = {\n  showTail: false,\n  showName: true,\n  variant: 'outgoing',\n  senderName: 'Michael Scott',\n  saveLabel: 'Save',\n  cancelLabel: 'Cancel',\n};\n\n_EditableChatBubble.story = {\n  name: 'EditableChatBubble',\n};\n",locationsMap:{"editable-chat-bubble":{startLoc:{col:35,line:17},endLoc:{col:1,line:54},startBody:{col:35,line:17},endBody:{col:1,line:54}}}},layout:"fullscreen"}},_EditableChatBubble=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{layout:"fill-space-centered",css:"\n    display: flex; \n    flex-direction: column;\n    padding-top: 1rem;\n  ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_EditableChatBubble__WEBPACK_IMPORTED_MODULE_2__.A,{variant:args.variant,senderName:args.senderName,content:"This messsage has typos that ned to be fixxed.",showTail:args.showTail,showName:args.boolean,saveLabel:args.saveLabel,cancelLabel:args.cancelLabel,css:"\n    margin: 1rem;\n  ",save:(e,newContent)=>{e.preventDefault(),console.log("Save clicked with new text:",newContent)},cancel:e=>{e.preventDefault(),console.log("cancel clicked")}})});_EditableChatBubble.displayName="_EditableChatBubble",_EditableChatBubble.argTypes={showTail:{control:"boolean"},showName:{control:"boolean"},variant:{control:"select",options:["incoming","outgoing"]},senderName:{control:"text"},saveLabel:{control:"text"},cancelLabel:{control:"text"},content:{table:{disable:!0}},save:{table:{disable:!0}},cancel:{table:{disable:!0}}},_EditableChatBubble.args={showTail:!1,showName:!0,variant:"outgoing",senderName:"Michael Scott",saveLabel:"Save",cancelLabel:"Cancel"},_EditableChatBubble.story={name:"EditableChatBubble"},_EditableChatBubble.parameters={..._EditableChatBubble.parameters,docs:{..._EditableChatBubble.parameters?.docs,source:{originalSource:"args => {\n  const containerStyles = `\n    display: flex; \n    flex-direction: column;\n    padding-top: 1rem;\n  `;\n  const bubbleStyles = `\n    margin: 1rem;\n  `;\n  const save = (e: any, newContent: string) => {\n    e.preventDefault();\n    console.log('Save clicked with new text:', newContent);\n  };\n  const cancel = (e: any) => {\n    e.preventDefault();\n    console.log('cancel clicked');\n  };\n  return <Flex layout=\"fill-space-centered\" css={containerStyles}>\n      <EditableChatBubble variant={args.variant} senderName={args.senderName} content=\"This messsage has typos that ned to be fixxed.\" showTail={args.showTail} showName={args.boolean} saveLabel={args.saveLabel} cancelLabel={args.cancelLabel} css={bubbleStyles} save={save} cancel={cancel} />\n    </Flex>;\n}",..._EditableChatBubble.parameters?.docs?.source}}};const __namedExportsOrder=["_EditableChatBubble"];try{_EditableChatBubble.displayName="_EditableChatBubble",_EditableChatBubble.__docgenInfo={description:"",displayName:"_EditableChatBubble",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/EditableChatBubble.stories.tsx#_EditableChatBubble"]={docgenInfo:_EditableChatBubble.__docgenInfo,name:"_EditableChatBubble",path:"src/components/ui/Chat/ChatBubble/EditableChatBubble.stories.tsx#_EditableChatBubble"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Button/PrimaryButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,j:()=>PrimaryButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PrimaryButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{variant:"primary",...props}))),__WEBPACK_DEFAULT_EXPORT__=PrimaryButton;try{PrimaryButton.displayName="PrimaryButton",PrimaryButton.__docgenInfo={description:"",displayName:"PrimaryButton",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/PrimaryButton.tsx#PrimaryButton"]={docgenInfo:PrimaryButton.__docgenInfo,name:"PrimaryButton",path:"src/components/ui/Button/PrimaryButton.tsx#PrimaryButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/SecondaryButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,t:()=>SecondaryButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SecondaryButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{variant:"secondary",...props}))),__WEBPACK_DEFAULT_EXPORT__=SecondaryButton;try{SecondaryButton.displayName="SecondaryButton",SecondaryButton.__docgenInfo={description:"",displayName:"SecondaryButton",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/SecondaryButton.tsx#SecondaryButton"]={docgenInfo:SecondaryButton.__docgenInfo,name:"SecondaryButton",path:"src/components/ui/Button/SecondaryButton.tsx#SecondaryButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OV:()=>StyledButton,qn:()=>StyledIconButtonWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button`
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
`,StyledIconButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span`
  display: inline-block;
  position: relative;
`;try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/ui/Button/Styled.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledIconButtonWrapper.displayName="StyledIconButtonWrapper",StyledIconButtonWrapper.__docgenInfo={description:"",displayName:"StyledIconButtonWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"]={docgenInfo:StyledIconButtonWrapper.__docgenInfo,name:"StyledIconButtonWrapper",path:"src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.OV,{...props,className:props.className||"",as:props.tag,ref,"aria-label":props.label,"data-testid":"button",disabled:props.disabled,children:[props.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon","data-testid":"button-icon",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-label","data-testid":"button-label",children:props.label})]}))),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Chat/ChatBubble/EditableChatBubble.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/PrimaryButton.tsx"),_Button_SecondaryButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Button/SecondaryButton.tsx"),_Input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Input/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/Chat/ChatBubble/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const EditableChatBubble=props=>{const{showName=!0,variant,senderName,content,showTail,cancel,cancelLabel="Cancel",save,saveLabel="Save",...rest}=props,[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(content),inputEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{inputEl&&inputEl.current&&inputEl.current.focus()}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_4__.si,{variant,editable:!0,...rest,"data-testid":"editable-chat-bubble",children:[showName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"ch-sender-name",children:senderName}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form",{"data-testid":"form",onSubmit:e=>save(e,text),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_3__.A,{onChange:e=>{e.preventDefault(),setText(e.target.value)},value:text,showClear:!1,ref:inputEl}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"ch-edit-buttons",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_1__.A,{label:saveLabel,"data-testid":"save-button",onClick:e=>save(e,text)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button_SecondaryButton__WEBPACK_IMPORTED_MODULE_2__.A,{label:cancelLabel,onClick:cancel,"data-testid":"cancel-button"})]})]}),showTail&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg",{viewBox:"0 0 4 9","data-testid":"tail",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("g",{transform:"translate(0, -53)",className:"ch-chat-bubble-tail",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path",{d:"M4,62 L3.92789928,61.999999 C2.89671177,62.0004988 1.33197354,61.8123902 0.200755581,60.8250184 C-0.0781312712,60.5814641 -0.0639788041,60.0290387 0.229060515,59.8181428 C1.47198013,58.9247413 3.99237825,57.6821586 4,52.9112516 L4,52.9112516 L4,62 Z"})})})})]})};EditableChatBubble.displayName="EditableChatBubble";const __WEBPACK_DEFAULT_EXPORT__=EditableChatBubble;try{EditableChatBubble.displayName="EditableChatBubble",EditableChatBubble.__docgenInfo={description:"",displayName:"EditableChatBubble",props:{variant:{defaultValue:null,description:"Determines styling for outgoing and incoming messages.",name:"variant",required:!0,type:{name:"enum",value:[{value:'"incoming"'},{value:'"outgoing"'}]}},senderName:{defaultValue:null,description:"The name of the user that sent the message.",name:"senderName",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"The text content of the message.",name:"content",required:!0,type:{name:"string"}},showName:{defaultValue:null,description:"Determines if the name should be shown or not.",name:"showName",required:!1,type:{name:"boolean | undefined"}},showTail:{defaultValue:null,description:"Adds the bubble tail style to a message.",name:"showTail",required:!1,type:{name:"boolean | undefined"}},save:{defaultValue:null,description:"A callback function to edit the message's content.",name:"save",required:!0,type:{name:"(e: any, newContent: string) => void"}},saveLabel:{defaultValue:null,description:"The button label for saving an edit.",name:"saveLabel",required:!1,type:{name:"string | undefined"}},cancel:{defaultValue:null,description:"A callback function that changes the UI to allow the user to edit the content of the message",name:"cancel",required:!0,type:{name:"(e: any) => void"}},cancelLabel:{defaultValue:null,description:"The button label for canceling an edit.",name:"cancelLabel",required:!1,type:{name:"string | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/EditableChatBubble.tsx#EditableChatBubble"]={docgenInfo:EditableChatBubble.__docgenInfo,name:"EditableChatBubble",path:"src/components/ui/Chat/ChatBubble/EditableChatBubble.tsx#EditableChatBubble"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Chat/ChatBubble/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HL:()=>StyledChatBubbleContainer,si:()=>StyledChatBubble,un:()=>StyledChatBubbleInfo});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledChatBubbleContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: row;
  font-size: 0.65rem;
  margin-left: 1rem;
  align-items: center;
  background-color: ${props=>props.theme.chatBubble.container.bgd};
  width: 100%;

  .ch-timestamp {
    padding-right: ${props=>props.actions?"1rem":"2.5rem"};
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_0__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_0__.i}
`,StyledChatBubble=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  background-color: ${props=>props.theme.chatBubble[props.variant].bgd};
  padding: 0.625rem 1rem;
  border-radius: 4px;
  width: fit-content;
  color: ${props=>props.theme.chatBubble[props.variant].fontColor};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  line-height: 20px;
  width: ${props=>props.editable?"100%":"fit-content"};
  max-width: 70.6%;
  font-size: 0.875rem;
  position: relative;
  margin-bottom: ${props=>props.editable?"4rem":"unset"};
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;

  & .ch-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
    align-items: baseline;
  }

  & .ch-sender-name {
    font-weight: bold;
    padding-right: 0.5rem;
  }

  & .ch-header-timestamp {
    font-size: 0.65rem;
  }

  & svg {
    position: absolute;
    height: 19px;
    width: 11px;
    margin-top: -14px;
    margin-left: -25px;

    & .ch-chat-bubble-tail {
      fill: ${props=>props.theme.chatBubble[props.variant].bgd};
    }
  }

  .ch-input {
    width: 100%;
  }

  .ch-edit-buttons {
    position: absolute;
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
    width: 10rem;
    justify-content: space-between;
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_0__.d};
  ${_Base__WEBPACK_IMPORTED_MODULE_0__.i};
`,StyledChatBubbleInfo=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  margin-right: 0.5rem;
  margin-left: auto;
  color: ${props=>props.theme.chatBubble.container.fontColor};
  align-items: center;

  & .ch-message-actions {
    border: 1px solid transparent;
    border-radius: 50%;
  }

  & button:hover .ch-message-actions {
    background-color: ${props=>props.theme.buttons.icon.hover.bgd};

    & g {
      fill: ${props=>props.theme.buttons.icon.hover.text};
    }
  }

  & button:focus .ch-message-actions {
    border: 1px solid ${props=>props.theme.colors.primary.dark};
    border-radius: 50%;
  }

  & .ch-message-actions g {
    fill: ${props=>props.theme.chatBubble.container.fontColor};
  }

  & .ch-message-actions.isOpen {
    background-color: ${props=>props.theme.buttons.icon.active.bgd};
    border-radius: 50%;

    & g {
      fill: ${props=>props.theme.buttons.icon.active.text};
    }
  }
`;try{StyledChatBubbleContainer.displayName="StyledChatBubbleContainer",StyledChatBubbleContainer.__docgenInfo={description:"",displayName:"StyledChatBubbleContainer",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"any"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubbleContainer"]={docgenInfo:StyledChatBubbleContainer.__docgenInfo,name:"StyledChatBubbleContainer",path:"src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubbleContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledChatBubble.displayName="StyledChatBubble",StyledChatBubble.__docgenInfo={description:"",displayName:"StyledChatBubble",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"incoming"'},{value:'"outgoing"'}]}},editable:{defaultValue:null,description:"",name:"editable",required:!1,type:{name:"boolean | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubble"]={docgenInfo:StyledChatBubble.__docgenInfo,name:"StyledChatBubble",path:"src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubble"})}catch(__react_docgen_typescript_loader_error){}try{StyledChatBubbleInfo.displayName="StyledChatBubbleInfo",StyledChatBubbleInfo.__docgenInfo={description:"",displayName:"StyledChatBubbleInfo",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubbleInfo"]={docgenInfo:StyledChatBubbleInfo.__docgenInfo,name:"StyledChatBubbleInfo",path:"src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubbleInfo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
`},StyledFlex=styled_components_browser_esm.Ay.div`
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
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},alignItems:{defaultValue:null,description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:null,description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:null,description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:null,description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:null,description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:null,description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:null,description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Input/InputWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Input/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputWrapper=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>{const{leadingIcon,children,sizing,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.to,{ref,sizing,leadingIcon,...rest,"data-testid":"input-wrapper",children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon",children:leadingIcon}),children]})})),__WEBPACK_DEFAULT_EXPORT__=InputWrapper;try{InputWrapper.displayName="InputWrapper",InputWrapper.__docgenInfo={description:"",displayName:"InputWrapper",props:{leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},sizing:{defaultValue:null,description:"",name:"sizing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"sm"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/InputWrapper.tsx#InputWrapper"]={docgenInfo:InputWrapper.__docgenInfo,name:"InputWrapper",path:"src/components/ui/Input/InputWrapper.tsx#InputWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Input/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sQ:()=>StyledInput,to:()=>StyledInputWrapper,vG:()=>StyledClear});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledInputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span`
  position: relative;

  > .ch-icon {
    position: absolute;
    width: 1rem;
    left: 0.1875rem;
    position: absolute;
    top: 54%;
    transform: translateY(-50%);
  }

  > input {
    padding: ${props=>(props=>{const{sizing,leadingIcon}=props;return"sm"===sizing?"0.125rem 1.75rem 0.125rem "+(leadingIcon?"1.3125rem":"0.5rem"):"0.34375rem 1.75rem 0.34375rem "+(leadingIcon?"1.3125rem":"0.5rem")})(props)};
  }
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input`
  align-items: center;
  display: flex;
  letter-spacing: -0.005625rem;
  transition: box-shadow 0.05s ease-in;
  background-color: ${props=>props.theme.inputs.bgd};
  border: ${props=>props.theme.inputs.border};
  border-radius: ${props=>props.theme.inputs.borderRadius};
  box-shadow: ${props=>props.theme.inputs.shadow};
  color: ${props=>props.theme.inputs.fontColor};
  font-size: ${props=>props.theme.fontSizes.text.fontSize};
  line-height: ${props=>props.theme.fontSizes.text.lineHeight};

  &::placeholder {
    color: ${props=>props.theme.inputs.placeholder};
  }

  &:focus,
  &[aria-invalid='true']:focus {
    border: ${props=>props.theme.inputs.focus.border};
    box-shadow: ${props=>props.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid='true'] {
    border: ${props=>props.theme.inputs.error.border};
    box-shadow: ${props=>props.theme.inputs.error.shadow};
  }

  // Hides native clear button
  &::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_0__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_0__.i}
`,StyledClear=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
  position: absolute;
  top: 50%;
  right: 0.125rem;
  transform: translateY(-44%);
  border: none;
  background: none;
  cursor: pointer;
  display: ${props=>props.active?"block":"none"};

  path {
    fill: ${props=>props.theme.inputs.clearBg};
  }

  &:active,
  &:focus {
    outline: none;
  }
`;try{StyledInputWrapper.displayName="StyledInputWrapper",StyledInputWrapper.__docgenInfo={description:"",displayName:"StyledInputWrapper",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},sizing:{defaultValue:null,description:"",name:"sizing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"sm"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/Styled.tsx#StyledInputWrapper"]={docgenInfo:StyledInputWrapper.__docgenInfo,name:"StyledInputWrapper",path:"src/components/ui/Input/Styled.tsx#StyledInputWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StyledInput.displayName="StyledInput",StyledInput.__docgenInfo={description:"",displayName:"StyledInput",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/Styled.tsx#StyledInput"]={docgenInfo:StyledInput.__docgenInfo,name:"StyledInput",path:"src/components/ui/Input/Styled.tsx#StyledInput"})}catch(__react_docgen_typescript_loader_error){}try{StyledClear.displayName="StyledClear",StyledClear.__docgenInfo={description:"",displayName:"StyledClear",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/Styled.tsx#StyledClear"]={docgenInfo:StyledClear.__docgenInfo,name:"StyledClear",path:"src/components/ui/Input/Styled.tsx#StyledClear"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/index.tsx"),_InputWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Input/InputWrapper.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Input/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,externalRef)=>{const{type,value,sizing,onClear,onChange,className,leadingIcon,showClear=!0,...rest}=props,[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),focusedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),internalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),inputRef=externalRef||internalRef,clearRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),label=props["aria-label"]?`clear ${props["aria-label"]}`:"clear";return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let blurring=!1;const onFocus=e=>{if(focusedRef.current)return e.target!==clearRef.current&&e.target!==inputRef.current?(focusedRef.current=!1,void setFocused(!1)):void(blurring&&(blurring=!1))},onFocusOut=()=>{focusedRef.current&&(blurring=!0,setTimeout((()=>{blurring&&(focusedRef.current=!1,setFocused(!1)),blurring=!1}),10))};return document.addEventListener("focusin",onFocus),document.addEventListener("focusout",onFocusOut),()=>{document.removeEventListener("focusin",onFocus),document.removeEventListener("focusout",onFocusOut)}}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__.A,{leadingIcon,sizing,className:`ch-input-wrapper ${className||""}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_3__.sQ,{...rest,value,type:type||"text",ref:inputRef,className:"ch-input",onChange,"data-testid":"input",onFocus:()=>{focusedRef.current=!0,setFocused(!0)}}),showClear&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_3__.vG,{type:"button",active:!!(onClear||focused&&value.length),tabIndex:-1,"aria-label":label,onClick:()=>{if(onClear)return void onClear();const input=inputRef.current,nativeSetter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;nativeSetter&&input&&(nativeSetter.call(input,""),input.dispatchEvent(new Event("input",{bubbles:!0}))),input.focus()},ref:clearRef,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.kc,{width:"1.25rem"})})]})}));Input.displayName="Input";const __WEBPACK_DEFAULT_EXPORT__=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},onClear:{defaultValue:null,description:"The callback fired when the input value is cleared.",name:"onClear",required:!1,type:{name:"(() => void) | undefined"}},leadingIcon:{defaultValue:null,description:"The icon in the input.",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},sizing:{defaultValue:null,description:"The size of the input.",name:"sizing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"sm"'}]}},value:{defaultValue:null,description:"The value of the input.",name:"value",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"The id of the input.",name:"id",required:!1,type:{name:"string | undefined"}},showClear:{defaultValue:null,description:"Whether or not the clear icon is shown, it defaults to `true`.",name:"showClear",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/index.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/ui/Input/index.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-ui-Chat-ChatBubble-EditableChatBubble-stories.1bfff66b.iframe.bundle.js.map