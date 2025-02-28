"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[4250],{"./src/components/ui/NotificationGroup/NotificationGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotificationGroupStory:()=>NotificationGroupStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/NotificationGroup/index.tsx"),_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/NotificationProvider/index.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI Components/NotificationGroup",component:___WEBPACK_IMPORTED_MODULE_1__.A,parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport styled from 'styled-components';\n\nimport NotificationGroup from '.';\nimport {\n  useNotificationDispatch,\n  NotificationProvider,\n  ActionType,\n  Severity,\n} from '../../../providers/NotificationProvider';\nimport Button from '../Button';\n\nexport default {\n  title: 'UI Components/NotificationGroup',\n  component: NotificationGroup,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nconst StyledWrapper = styled.div`\n  position: absolute;\n  bottom: 2rem;\n  margin: 0 auto;\n  width: 100%;\n  text-align: center;\n  z-index: 50;\n`;\n\nconst StorybookTestButton = ({ label, payload, variant }: any) => {\n  const dispatch = useNotificationDispatch();\n\n  const addNotification = (e: any) => {\n    dispatch({\n      type: ActionType.ADD,\n      payload: payload,\n    });\n  };\n\n  return <Button onClick={addNotification} variant={variant} label={label} />;\n};\n\nconst AddNotificationButtonGroup = () => {\n  const payloadForSimpleNotification: any = {\n    severity: Severity.INFO,\n    message:\n      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',\n  };\n  const payloadForAutoclosingNotification = {\n    severity: Severity.ERROR,\n    message:\n      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',\n    autoClose: true,\n    autoCloseDelay: 2000,\n  };\n  return (\n    <StyledWrapper>\n      <StorybookTestButton\n        label=\"Add simple notification\"\n        payload={payloadForSimpleNotification}\n        variant=\"primary\"\n      />\n      <StorybookTestButton\n        label=\"Add autoclosing notification\"\n        payload={payloadForAutoclosingNotification}\n        variant=\"secondary\"\n      />\n    </StyledWrapper>\n  );\n};\n\nexport const NotificationGroupStory = () => {\n  return (\n    <NotificationProvider>\n      <NotificationGroup />\n      <AddNotificationButtonGroup />\n    </NotificationProvider>\n  );\n};\n\nNotificationGroupStory.story = {\n  name: 'Notification group',\n};\n",locationsMap:{"notification-group-story":{startLoc:{col:38,line:75},endLoc:{col:1,line:82},startBody:{col:38,line:75},endBody:{col:1,line:82}}}},layout:"fullscreen"}},StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  position: absolute;
  bottom: 2rem;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  z-index: 50;
`,StorybookTestButton=({label,payload,variant})=>{const dispatch=(0,_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.dq)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.A,{onClick:e=>{dispatch({type:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.X2.ADD,payload})},variant,label})};StorybookTestButton.displayName="StorybookTestButton";const AddNotificationButtonGroup=()=>{const payloadForSimpleNotification={severity:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.INFO,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."},payloadForAutoclosingNotification={severity:_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.AI.ERROR,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",autoClose:!0,autoCloseDelay:2e3};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StorybookTestButton,{label:"Add simple notification",payload:payloadForSimpleNotification,variant:"primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StorybookTestButton,{label:"Add autoclosing notification",payload:payloadForAutoclosingNotification,variant:"secondary"})]})};AddNotificationButtonGroup.displayName="AddNotificationButtonGroup";const NotificationGroupStory=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_providers_NotificationProvider__WEBPACK_IMPORTED_MODULE_2__.ph,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AddNotificationButtonGroup,{})]});NotificationGroupStory.displayName="NotificationGroupStory",NotificationGroupStory.story={name:"Notification group"},NotificationGroupStory.parameters={...NotificationGroupStory.parameters,docs:{...NotificationGroupStory.parameters?.docs,source:{originalSource:"() => {\n  return <NotificationProvider>\n      <NotificationGroup />\n      <AddNotificationButtonGroup />\n    </NotificationProvider>;\n}",...NotificationGroupStory.parameters?.docs?.source}}};const __namedExportsOrder=["NotificationGroupStory"]},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Button/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,K:()=>IconButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_2__.qn,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{ref,variant:"icon",...props}),props.badge]}))),__WEBPACK_DEFAULT_EXPORT__=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{badge:{defaultValue:null,description:"Render a component to the top right area of the IconButton",name:"badge",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/ui/Button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/SecondaryButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,t:()=>SecondaryButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SecondaryButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{variant:"secondary",...props}))),__WEBPACK_DEFAULT_EXPORT__=SecondaryButton;try{SecondaryButton.displayName="SecondaryButton",SecondaryButton.__docgenInfo={description:"",displayName:"SecondaryButton",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/SecondaryButton.tsx#SecondaryButton"]={docgenInfo:SecondaryButton.__docgenInfo,name:"SecondaryButton",path:"src/components/ui/Button/SecondaryButton.tsx#SecondaryButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OV:()=>StyledButton,qn:()=>StyledIconButtonWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`;try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/ui/Button/Styled.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledIconButtonWrapper.displayName="StyledIconButtonWrapper",StyledIconButtonWrapper.__docgenInfo={description:"",displayName:"StyledIconButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"]={docgenInfo:StyledIconButtonWrapper.__docgenInfo,name:"StyledIconButtonWrapper",path:"src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.OV,{...props,className:props.className||"",as:props.tag,ref,"aria-label":props.label,"data-testid":"button",disabled:props.disabled,children:[props.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon","data-testid":"button-icon",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-label","data-testid":"button-label",children:props.label})]}))),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Notification/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Eg:()=>Notification,Ay:()=>ui_Notification});var react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./src/components/ui/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts"),IconButton=__webpack_require__("./src/components/ui/Button/IconButton.tsx"),SecondaryButton=__webpack_require__("./src/components/ui/Button/SecondaryButton.tsx");const StyledCloseIconButton=(0,styled_components_browser_esm.Ay)(IconButton.A)``,StyledNotificationButton=(0,styled_components_browser_esm.Ay)(SecondaryButton.A)``,StyledNotification=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
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
`;try{StyledCloseIconButton.displayName="StyledCloseIconButton",StyledCloseIconButton.__docgenInfo={description:"",displayName:"StyledCloseIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/Styled.tsx#StyledCloseIconButton"]={docgenInfo:StyledCloseIconButton.__docgenInfo,name:"StyledCloseIconButton",path:"src/components/ui/Notification/Styled.tsx#StyledCloseIconButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledNotificationButton.displayName="StyledNotificationButton",StyledNotificationButton.__docgenInfo={description:"",displayName:"StyledNotificationButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/Styled.tsx#StyledNotificationButton"]={docgenInfo:StyledNotificationButton.__docgenInfo,name:"StyledNotificationButton",path:"src/components/ui/Notification/Styled.tsx#StyledNotificationButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledNotification.displayName="StyledNotification",StyledNotification.__docgenInfo={description:"",displayName:"StyledNotification",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/Styled.tsx#StyledNotification"]={docgenInfo:StyledNotification.__docgenInfo,name:"StyledNotification",path:"src/components/ui/Notification/Styled.tsx#StyledNotification"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_DELAY=6e3;var Severity=function(Severity){return Severity.ERROR="error",Severity.SUCCESS="success",Severity.INFO="info",Severity.WARNING="warning",Severity}(Severity||{});const iconMapping={success:(0,jsx_runtime.jsx)(icons.fN,{}),warning:(0,jsx_runtime.jsx)(icons.zD,{}),error:(0,jsx_runtime.jsx)(icons.eT,{}),info:(0,jsx_runtime.jsx)(icons.$$,{})},Notification=props=>{const{tag,message,onClose,autoClose=!1,autoCloseDelay=DEFAULT_DELAY,severity=Severity.ERROR,className,buttonProps,icon,children}=props,ariaLive=severity===Severity.ERROR?"assertive":"polite",ariaRole=severity===Severity.ERROR?"alert":"status";return(0,react.useEffect)((()=>{if(!autoClose)return;const timer=setTimeout(onClose,autoCloseDelay);return()=>clearTimeout(timer)}),[]),(0,jsx_runtime.jsxs)(StyledNotification,{"aria-live":ariaLive,role:ariaRole,severity,as:tag,...props,className:className||"","data-testid":"notification",children:[(0,jsx_runtime.jsx)("div",{className:"ch-severity-icon","data-testid":"severity-icon",children:icon||iconMapping[severity]}),(0,jsx_runtime.jsx)("output",{className:"ch-message","data-testid":"message",role:ariaRole,children:message}),buttonProps&&(0,jsx_runtime.jsx)(StyledNotificationButton,{"aria-hidden":!0,...buttonProps}),children,onClose&&(0,jsx_runtime.jsx)(StyledCloseIconButton,{label:"close",icon:(0,jsx_runtime.jsx)(icons.n$,{}),onClick:onClose})]})};Notification.displayName="Notification";const ui_Notification=Notification;try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{severity:{defaultValue:null,description:"The severity of the notification.",name:"severity",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'}]}},message:{defaultValue:null,description:"The message to display in the notification.",name:"message",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"The callback fired when a notification is closed.",name:"onClose",required:!0,type:{name:"() => void"}},autoClose:{defaultValue:null,description:"Whether or not the notification should get closed automatically.",name:"autoClose",required:!1,type:{name:"boolean | undefined"}},autoCloseDelay:{defaultValue:null,description:"The auto close delay in milliseconds, it defaults to `6000` (6s).",name:"autoCloseDelay",required:!1,type:{name:"number | undefined"}},className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},buttonProps:{defaultValue:null,description:"For rendering a button element adjacent to the message",name:"buttonProps",required:!1,type:{name:"ButtonProps | undefined"}},icon:{defaultValue:null,description:"optional icon to override the default",name:"icon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"optional content to render in the body of the notification",name:"children",required:!1,type:{name:"((string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | ReactNode[]) & (string | ... 4 more ... | ReactPortal)) | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Notification/index.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"src/components/ui/Notification/index.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/NotificationGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_NotificationGroup});__webpack_require__("./node_modules/react/index.js");var NotificationProvider=__webpack_require__("./src/providers/NotificationProvider/index.tsx"),Notification=__webpack_require__("./src/components/ui/Notification/index.tsx"),Portal=__webpack_require__("./src/components/ui/Portal/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const StyledNotificationGroup=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${props=>props.theme.zIndex.notificationGroup};
  pointer-events: none;
`;try{StyledNotificationGroup.displayName="StyledNotificationGroup",StyledNotificationGroup.__docgenInfo={description:"",displayName:"StyledNotificationGroup",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/NotificationGroup/Styled.tsx#StyledNotificationGroup"]={docgenInfo:StyledNotificationGroup.__docgenInfo,name:"StyledNotificationGroup",path:"src/components/ui/NotificationGroup/Styled.tsx#StyledNotificationGroup"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NotificationGroup=()=>{const{notifications}=(0,NotificationProvider.IB)(),dispatch=(0,NotificationProvider.dq)();return(0,jsx_runtime.jsx)(Portal.A,{rootId:"notification-group-root",children:(0,jsx_runtime.jsx)(StyledNotificationGroup,{"data-testid":"notification-group",children:notifications.map((({id,...rest})=>(0,jsx_runtime.jsx)(Notification.Ay,{...rest,onClose:()=>dispatch({type:NotificationProvider.X2.REMOVE,payload:id})},id)))})})};NotificationGroup.displayName="NotificationGroup";const ui_NotificationGroup=NotificationGroup;try{NotificationGroup.displayName="NotificationGroup",NotificationGroup.__docgenInfo={description:"",displayName:"NotificationGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/NotificationGroup/index.tsx#NotificationGroup"]={docgenInfo:NotificationGroup.__docgenInfo,name:"NotificationGroup",path:"src/components/ui/NotificationGroup/index.tsx#NotificationGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const Portal=({children,rootId})=>{let el,newRoot;const[mount,setMount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(rootId&&(el=document.getElementById(rootId)),el?setMount(el):(newRoot=document.createElement("div"),document.body.appendChild(newRoot),setMount(newRoot)),()=>{newRoot&&newRoot.remove()})),[rootId]),mount?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,mount):null},__WEBPACK_DEFAULT_EXPORT__=Portal;try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{rootId:{defaultValue:null,description:"Specifies the DOM node that the children of the portal will be render into.",name:"rootId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Portal/index.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/ui/Portal/index.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/providers/NotificationProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X2:()=>ActionType,ph:()=>NotificationProvider,AI:()=>Severity,dq:()=>useNotificationDispatch,IB:()=>useNotificationState});var react=__webpack_require__("./node_modules/react/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");let Severity=function(Severity){return Severity.ERROR="error",Severity.SUCCESS="success",Severity.INFO="info",Severity.WARNING="warning",Severity}({}),ActionType=function(ActionType){return ActionType[ActionType.ADD=0]="ADD",ActionType[ActionType.REMOVE=1]="REMOVE",ActionType[ActionType.REMOVE_ALL=2]="REMOVE_ALL",ActionType}({});const initialState={notifications:[]},reducer=(state,action)=>{const{type,payload}=action;switch(type){case ActionType.ADD:{const notification={id:(0,v4.A)(),...payload},notifications=notification?.replaceAll?[notification]:[...state.notifications,notification];return{...state,notifications}}case ActionType.REMOVE:{const notifications=state.notifications.filter((notification=>notification?.id!==payload));return{...state,notifications}}case ActionType.REMOVE_ALL:return{...state,notifications:[]};default:throw new Error("Incorrect type in NotificationProvider")}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StateContext=react.createContext(initialState),DispatchContext=react.createContext((()=>{})),NotificationProvider=({children})=>{const[state,dispatch]=(0,react.useReducer)(reducer,initialState);return(0,jsx_runtime.jsx)(StateContext.Provider,{value:state,children:(0,jsx_runtime.jsx)(DispatchContext.Provider,{value:dispatch,children})})};NotificationProvider.displayName="NotificationProvider";const useNotificationState=()=>(0,react.useContext)(StateContext),useNotificationDispatch=()=>(0,react.useContext)(DispatchContext);try{NotificationProvider.displayName="NotificationProvider",NotificationProvider.__docgenInfo={description:"",displayName:"NotificationProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/NotificationProvider/index.tsx#NotificationProvider"]={docgenInfo:NotificationProvider.__docgenInfo,name:"NotificationProvider",path:"src/providers/NotificationProvider/index.tsx#NotificationProvider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}}}]);
//# sourceMappingURL=components-ui-NotificationGroup-NotificationGroup-stories.e90a0a95.iframe.bundle.js.map