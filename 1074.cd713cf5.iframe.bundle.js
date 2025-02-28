"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[1074],{"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Button/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,K:()=>IconButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_2__.qn,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{ref,variant:"icon",...props}),props.badge]}))),__WEBPACK_DEFAULT_EXPORT__=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{badge:{defaultValue:null,description:"Render a component to the top right area of the IconButton",name:"badge",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/ui/Button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OV:()=>StyledButton,qn:()=>StyledIconButtonWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`;try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/ui/Button/Styled.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledIconButtonWrapper.displayName="StyledIconButtonWrapper",StyledIconButtonWrapper.__docgenInfo={description:"",displayName:"StyledIconButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"]={docgenInfo:StyledIconButtonWrapper.__docgenInfo,name:"StyledIconButtonWrapper",path:"src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.OV,{...props,className:props.className||"",as:props.tag,ref,"aria-label":props.label,"data-testid":"button",disabled:props.disabled,children:[props.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon","data-testid":"button-icon",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-label","data-testid":"button-label",children:props.label})]}))),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/ControlBar/ControlBarButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,T:()=>ControlBarButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/IconButton.tsx"),_icons_Caret__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/icons/Caret/index.tsx"),_PopOver__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/PopOver/index.tsx"),_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/PopOver/PopOverItem.tsx"),_WithTooltip__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/WithTooltip/index.tsx"),_ControlBarContext__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/ui/ControlBar/ControlBarContext.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/ui/ControlBar/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ControlBarButton=({icon,onClick,label,isSelected=!1,popOver=null,popOverPlacement,popOverLabel,tooltipContainerId,tooltipContent,children,...rest})=>{const context=(0,_ControlBarContext__WEBPACK_IMPORTED_MODULE_6__.Lv)(),IconButtonWithToolTip=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_WithTooltip__WEBPACK_IMPORTED_MODULE_5__.k)(_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,tooltipContainerId)),[tooltipContainerId]),ButtonComponent=rest["data-tooltip"]?IconButtonWithToolTip:_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,buttonComponentProps=rest["data-tooltip-position"]?{tooltipPosition:rest["data-tooltip-position"],tooltipContent}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_7__.P0,{isSelected,"data-testid":"control-bar-item",...rest,...context,popOver,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ButtonComponent,{...buttonComponentProps,onClick,label,icon,className:"ch-control-bar-item-iconButton",selected:isSelected}),(popOver||children)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_PopOver__WEBPACK_IMPORTED_MODULE_3__.A,{renderButtonWrapper:(isActive,props)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{...props,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_icons_Caret__WEBPACK_IMPORTED_MODULE_2__.A,{direction:(0,_Styled__WEBPACK_IMPORTED_MODULE_7__.fk)(context.layout)?"right":"up","data-testid":"control-bar-item-caret"}),label:popOverLabel||label,selected:isActive,className:"ch-control-bar-item-caret "+(isActive?"isOpen":"")}),a11yLabel:label,className:"ch-control-bar-popover",placement:popOverPlacement,children:[popOver?.map(((option,index)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_4__.A,{...option,key:index}))),children]}),context.showLabels&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"ch-control-bar-item-label",children:label})]})};ControlBarButton.displayName="ControlBarButton";const __WEBPACK_DEFAULT_EXPORT__=ControlBarButton;try{ControlBarButton.displayName="ControlBarButton",ControlBarButton.__docgenInfo={description:"",displayName:"ControlBarButton",props:{icon:{defaultValue:null,description:"The icon of the control bar item.",name:"icon",required:!0,type:{name:"Element"}},onClick:{defaultValue:null,description:"The callback fired when the item is clicked.",name:"onClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"The label of an control bar item.",name:"label",required:!0,type:{name:"string"}},popOver:{defaultValue:{value:"null"},description:"The items to render in a popover menu. When passed, the button will render an arrow to open or close a popover menu. Refer to [PopOverItem](/docs/ui-components-popover--page)",name:"popOver",required:!1,type:{name:"PopOverItemProps[] | null | undefined"}},popOverPlacement:{defaultValue:null,description:"Defines the placement of PopOver menu.",name:"popOverPlacement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popOverLabel:{defaultValue:null,description:"The label for the optional popOver button.",name:"popOverLabel",required:!1,type:{name:"string | undefined"}},isSelected:{defaultValue:{value:"false"},description:"Apply this prop to receive visual feedback that the button is 'active'",name:"isSelected",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"Use children to define an alternative to popOver prop with a custom set of elements to be rendered into the popover",name:"children",required:!1,type:{name:"((string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | ReactNode[]) & (string | ... 4 more ... | ReactPortal)) | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},"data-tooltip":{defaultValue:null,description:"",name:"data-tooltip",required:!1,type:{name:"boolean | undefined"}},"data-tooltip-position":{defaultValue:null,description:"",name:"data-tooltip-position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},tooltipContainerId:{defaultValue:null,description:"",name:"tooltipContainerId",required:!1,type:{name:"string | undefined"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ControlBar/ControlBarButton.tsx#ControlBarButton"]={docgenInfo:ControlBarButton.__docgenInfo,name:"ControlBarButton",path:"src/components/ui/ControlBar/ControlBarButton.tsx#ControlBarButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/ControlBar/ControlBarContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,Lv:()=>useControlBarContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ControlBarContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({showLabels:!1,layout:"top"}),useControlBarContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ControlBarContext),__WEBPACK_DEFAULT_EXPORT__=ControlBarContext;try{Context.displayName="Context",Context.__docgenInfo={description:"Context lets components pass information deep down without explicitly\npassing props.\n\nCreated from {@link createContext}",displayName:"Context",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ControlBar/ControlBarContext.tsx#Context"]={docgenInfo:Context.__docgenInfo,name:"Context",path:"src/components/ui/ControlBar/ControlBarContext.tsx#Context"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/ControlBar/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P0:()=>StyledControlBarItem,WQ:()=>StyledControlBar,fk:()=>isVertical});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const layoutMap={"undocked-vertical":"flex-direction: column;","undocked-horizontal":"flex-direction: row;",top:"flex-direction: row; width: 100%; top: 0; position: fixed;",bottom:"flex-direction: row; width: 100%; bottom: 0; position: fixed;",right:"flex-direction: column; height: 100%; right: 0; position: fixed;",left:"flex-direction: column; height: 100%; left: 0; position: fixed;"},gridTemplateColumnMap_popOver="grid-template-columns: 2.5rem minmax(0.5rem, auto);",gridTemplateColumnMap_popOver_vertical="grid-template-columns: 1.5rem 1.5rem 1.5rem",isVertical=layout=>"right"===layout||"left"===layout||"undocked-vertical"===layout,isUndocked=layout=>"undocked-vertical"===layout||"undocked-horizontal"===layout,unsetPosition={top:"unset;",bottom:"unset;",right:"unset;",left:"unset;"},responsiveStyles=props=>styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
    ${({theme})=>theme.mediaQueries.max.sm} {
      ${unsetPosition}
      ${isVertical(props.layout)?layoutMap.left:layoutMap.bottom};
      box-shadow: ${props.theme.controlBar.shadow};
      border: none;
      height: ${isVertical(props.layout)&&"100%"};
      width: ${!isVertical(props.layout)&&"100%"};
    }

    ${({theme})=>theme.mediaQueries.max.xs} {
      justify-content: ${isVertical(props.layout)?"center":"space-around"};
      ${unsetPosition}
      ${isVertical(props.layout)?layoutMap.left:layoutMap.bottom};
      box-shadow: ${({theme})=>theme.controlBar.shadow};
      border: none;
    }
  `,StyledControlBar=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme,layout})=>isUndocked(layout)?theme.radii.default:"0"};
  background-color: ${props=>props.theme.controlBar.bgd};
  opacity: ${props=>props.theme.controlBar.opacity};
  border: ${({theme,layout})=>isUndocked(layout)?"none":theme.controlBar.border};
  box-shadow: ${({theme,layout})=>isUndocked(layout)?theme.controlBar.shadow:"none"};
  ${({layout})=>layoutMap[`${layout}`]};

  ${props=>props.responsive&&responsiveStyles(props)}

  width: ${({layout})=>isVertical(layout)&&"5rem"};
  height: ${({layout})=>!isVertical(layout)&&"5rem"};

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledControlBarItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  margin: ${({layout})=>isVertical(layout)?"0.625rem 0":"0 0.625rem"};
  display: grid;
  grid-template-rows: ${({showLabels})=>showLabels?"1.5rem 1rem":"1.5rem"};
  justify-items: center;
  align-items: center;
  ${({popOver,layout,children})=>`\n    ${!isVertical(layout)&&(popOver||children)&&gridTemplateColumnMap_popOver||""}\n    ${isVertical(layout)&&(popOver||children)&&gridTemplateColumnMap_popOver_vertical||""}\n  `};

  > :first-child {
    grid-column-start: ${({layout,popOver,children})=>isVertical(layout)&&(popOver||children)?"2":"1"};
  }

  .ch-control-bar-item-iconButton {
    .ch-icon {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
    }
  }

  .ch-control-bar-item-caret {
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;

    .ch-icon {
      width: 100%;
      height: 100%;
    }

    // setting this transform on the shape so we
    // don't overwrite the rotate transform on the Caret
    .Svg g {
      transform: scale(1.333);
      transform-origin: 50% 50%;
    }
  }

  .ch-control-bar-popover {
    background-color: inherit;
    grid-column-start: ${({layout,popOver,children})=>isVertical(layout)&&(popOver||children)?"2":"1"};
    color: ${({theme})=>theme.controlBar.text};

    .isOpen.ch-control-bar-item-caret {
      color: ${props=>props.theme.colors.primary.main};
    }
  }

  .ch-control-bar-item-label {
    color: ${({theme})=>theme.controlBar.text};
    grid-row-start: 2;
    font-size: ${props=>props.theme.fontSizes.footnote.fontSize}; /* TODO: get updated font size from design */
    padding-top: 0.25rem;
    justify-self: center;
    grid-column: ${({layout,popOver,children})=>isVertical(layout)&&(popOver||children)?"2":"1"};
  }

  ${({theme})=>theme.mediaQueries.max.sm} {
    justify-content: space-around;
    button ~ span {
      display: none;
    }
  }

  ${({theme})=>theme.mediaQueries.max.xs} {
    margin: ${({layout})=>isVertical(layout)?"0.75rem 0":"0"};
    button ~ span {
      display: none;
    }
  }
`;try{isVertical.displayName="isVertical",isVertical.__docgenInfo={description:"",displayName:"isVertical",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ControlBar/Styled.tsx#isVertical"]={docgenInfo:isVertical.__docgenInfo,name:"isVertical",path:"src/components/ui/ControlBar/Styled.tsx#isVertical"})}catch(__react_docgen_typescript_loader_error){}try{isUndocked.displayName="isUndocked",isUndocked.__docgenInfo={description:"",displayName:"isUndocked",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ControlBar/Styled.tsx#isUndocked"]={docgenInfo:isUndocked.__docgenInfo,name:"isUndocked",path:"src/components/ui/ControlBar/Styled.tsx#isUndocked"})}catch(__react_docgen_typescript_loader_error){}try{responsiveStyles.displayName="responsiveStyles",responsiveStyles.__docgenInfo={description:"",displayName:"responsiveStyles",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"{ breakpoints: Breakpoints; mediaQueries: { min: { xs: string; sm: string; md: string; lg: string; xl: string; }; max: { xs: string; sm: string; md: string; lg: string; xl: string; }; }; fonts: { ...; }; ... 22 more ...; messageAttachment: { ...; }; } | { ...; }"}},showLabels:{defaultValue:null,description:"Whether or not the labels of the control bar items should show.",name:"showLabels",required:!0,type:{name:"boolean"}},layout:{defaultValue:null,description:"The layout of the control bar, available options are: `top`, `bottom`, `right`, `left`, `undocked-horizontal`, and `undocked-vertical`.",name:"layout",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'},{value:'"undocked-horizontal"'},{value:'"undocked-vertical"'}]}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ControlBar/Styled.tsx#responsiveStyles"]={docgenInfo:responsiveStyles.__docgenInfo,name:"responsiveStyles",path:"src/components/ui/ControlBar/Styled.tsx#responsiveStyles"})}catch(__react_docgen_typescript_loader_error){}try{StyledControlBar.displayName="StyledControlBar",StyledControlBar.__docgenInfo={description:"",displayName:"StyledControlBar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ControlBar/Styled.tsx#StyledControlBar"]={docgenInfo:StyledControlBar.__docgenInfo,name:"StyledControlBar",path:"src/components/ui/ControlBar/Styled.tsx#StyledControlBar"})}catch(__react_docgen_typescript_loader_error){}try{StyledControlBarItem.displayName="StyledControlBarItem",StyledControlBarItem.__docgenInfo={description:"",displayName:"StyledControlBarItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ControlBar/Styled.tsx#StyledControlBarItem"]={docgenInfo:StyledControlBarItem.__docgenInfo,name:"StyledControlBarItem",path:"src/components/ui/ControlBar/Styled.tsx#StyledControlBarItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/PopOverItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,t:()=>PopOverItem});__webpack_require__("./node_modules/react/index.js");var _icons_Check__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Check/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopOverItem=({as="button",children,checked,testId="popover-item",...rest})=>{const Tag=as;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_2__.kL,{"data-testid":testId,children:[checked&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons_Check__WEBPACK_IMPORTED_MODULE_1__.A,{className:"ch-check","data-testid":"popover-check"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Tag,{className:"ch-content",...rest,children})]})};PopOverItem.displayName="PopOverItem";const __WEBPACK_DEFAULT_EXPORT__=PopOverItem;try{PopOverItem.displayName="PopOverItem",PopOverItem.__docgenInfo={description:"",displayName:"PopOverItem",props:{onClick:{defaultValue:null,description:"The callback fired when the item is clicked.",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},checked:{defaultValue:null,description:"Whether or not the item is checked.",name:"checked",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"The elements that populate the content of the item.",name:"children",required:!1,type:{name:"((ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]) & (string | ... 5 more ... | null)) | undefined"}},disabled:{defaultValue:null,description:"Whether or not the item is disabled.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"Defines the href attribute if the item is rendered as an `a` tag.",name:"href",required:!1,type:{name:"string | undefined"}},as:{defaultValue:{value:"button"},description:"Defines which tag will the item be rendered as, it defaults to `button`.",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"a"'},{value:'"button"'}]}},border:{defaultValue:null,description:"Whether or not the item has a border.",name:"border",required:!1,type:{name:"boolean | undefined"}},testId:{defaultValue:{value:"popover-item"},description:"",name:"testId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/PopOverItem.tsx#PopOverItem"]={docgenInfo:PopOverItem.__docgenInfo,name:"PopOverItem",path:"src/components/ui/PopOver/PopOverItem.tsx#PopOverItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GW:()=>StyledPopOverMenu,JD:()=>StyledSubMenu,WL:()=>StyledPopOverSeparator,kC:()=>StyledPopOverHeader,kL:()=>StyledPopOverItem,rS:()=>StyledPopOverToggle});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts");const StyledPopOverMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.ul.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`;try{StyledPopOverMenu.displayName="StyledPopOverMenu",StyledPopOverMenu.__docgenInfo={description:"",displayName:"StyledPopOverMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"]={docgenInfo:StyledPopOverMenu.__docgenInfo,name:"StyledPopOverMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverToggle.displayName="StyledPopOverToggle",StyledPopOverToggle.__docgenInfo={description:"",displayName:"StyledPopOverToggle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"]={docgenInfo:StyledPopOverToggle.__docgenInfo,name:"StyledPopOverToggle",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverItem.displayName="StyledPopOverItem",StyledPopOverItem.__docgenInfo={description:"",displayName:"StyledPopOverItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"]={docgenInfo:StyledPopOverItem.__docgenInfo,name:"StyledPopOverItem",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"})}catch(__react_docgen_typescript_loader_error){}try{StyledSubMenu.displayName="StyledSubMenu",StyledSubMenu.__docgenInfo={description:"",displayName:"StyledSubMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledSubMenu"]={docgenInfo:StyledSubMenu.__docgenInfo,name:"StyledSubMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledSubMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverHeader.displayName="StyledPopOverHeader",StyledPopOverHeader.__docgenInfo={description:"",displayName:"StyledPopOverHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"]={docgenInfo:StyledPopOverHeader.__docgenInfo,name:"StyledPopOverHeader",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverSeparator.displayName="StyledPopOverSeparator",StyledPopOverSeparator.__docgenInfo={description:"",displayName:"StyledPopOverSeparator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"]={docgenInfo:StyledPopOverSeparator.__docgenInfo,name:"StyledPopOverSeparator",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),react_popper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-popper/lib/esm/Popper.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts"),_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useClickOutside/index.tsx"),_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useTabOutside/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getFocusableElements=node=>node.querySelectorAll("button, [href]"),PopOver=({renderButton,renderButtonWrapper,onPopOverClick,children,isSubMenu=!1,placement="bottom-start",a11yLabel,className,closeOnClick=!0,...rest})=>{const menuRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(isOpen&&menuRef.current){const nodes=getFocusableElements(menuRef.current);nodes&&nodes[0].focus()}}),[isOpen]);const move=direction=>{const node=menuRef.current;if(!isSubMenu&&node){const nodes=getFocusableElements(node),currentElement=document.activeElement;for(let i=0;i<nodes.length;i++)if(nodes[i]===currentElement){if("down"===direction&&i!==nodes.length-1)return nodes[i+1].focus();if("up"===direction&&i>0)return nodes[i-1].focus();break}}},handlePopOverClick=()=>{setIsOpen(!isOpen),onPopOverClick&&onPopOverClick(isOpen)};return(0,_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__.A)(menuRef,(()=>setIsOpen(!1))),(0,_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__.A)(menuRef,(()=>setIsOpen(!1))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref:menuRef,onKeyDown:e=>{switch(e.keyCode){case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ESCAPE:return setIsOpen(!1);case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_UP:return move("up");case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_DOWN:return move("down")}},"data-testid":"popover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_7__.mS,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_8__.O,{children:({ref})=>{const props={ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"ch-popover-toggle"),onClick:handlePopOverClick,"data-menu":isSubMenu?"submenu":null,"aria-label":a11yLabel,"aria-haspopup":!0,"aria-expanded":isOpen,"data-testid":"popover-toggle"};if(renderButton)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.rS,{...props,children:renderButton(isOpen)});if(renderButtonWrapper){const{ref,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref,children:renderButtonWrapper(isOpen,rest)})}return null}}),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_9__.N,{placement,modifiers:[{name:"offset",options:{offset:[-8,0]}}],...rest,children:({ref,style,placement})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.GW,{"data-placement":placement,onClick:e=>(e=>{if(!closeOnClick)return;return!e.target.closest("[data-menu='submenu']")&&setIsOpen(!1)})(e),ref,style,"data-testid":"menu",className:"ch-popover-menu",children})})]})})};PopOver.displayName="PopOver";const __WEBPACK_DEFAULT_EXPORT__=PopOver;try{PopOver.displayName="PopOver",PopOver.__docgenInfo={description:"",displayName:"PopOver",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},isSubMenu:{defaultValue:{value:"false"},description:"Whether or not this is a sub menu.",name:"isSubMenu",required:!1,type:{name:"Boolean | undefined"}},placement:{defaultValue:{value:"bottom-start"},description:"Defines the placement of PopOver menu.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},renderButton:{defaultValue:null,description:"Defines the function to render the inner contents of the popover button element",name:"renderButton",required:!1,type:{name:"((isActive: boolean) => ReactNode) | undefined"}},renderButtonWrapper:{defaultValue:null,description:"Alternative to renderButton, defines the function to render the full popover button element (as opposed to just its contents). This is used if you want full control over the button rendering. The button must forwardRef",name:"renderButtonWrapper",required:!1,type:{name:"((isActive: boolean, props: any) => ReactNode) | undefined"}},onPopOverClick:{defaultValue:null,description:"The callback fired when the render button is clicked.",name:"onPopOverClick",required:!1,type:{name:"((isOpen: boolean) => void) | undefined"}},a11yLabel:{defaultValue:null,description:"The label used for availability.",name:"a11yLabel",required:!0,type:{name:"string"}},closeOnClick:{defaultValue:{value:"true"},description:"Allow the popover to stay open for multiple clicks.",name:"closeOnClick",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/index.tsx#PopOver"]={docgenInfo:PopOver.__docgenInfo,name:"PopOver",path:"src/components/ui/PopOver/index.tsx#PopOver"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/WithTooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>WithTooltip});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),LoggerProvider=__webpack_require__("./src/providers/LoggerProvider/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const TopProps=styled_components_browser_esm.AH`
  top: calc(
    ${props=>props.bounds?.top??0}px -
      ${1.75}rem
  );
  left: ${props=>((props.bounds?.left??0)+(props.bounds?.right??0))/2}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(180deg);
    top: 100%;
    left: calc(50% - ${.5}rem);
  }
`,BottomProps=styled_components_browser_esm.AH`
  top: calc(
    ${props=>props.bounds?.bottom??0}px +
      ${1.75}rem
  );
  left: ${props=>((props.bounds?.left??0)+(props.bounds?.right??0))/2}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(0deg);
    top: -${.5}rem;
    left: calc(50% - ${.5}rem);
  }
`,LeftProps=styled_components_browser_esm.AH`
  top: ${props=>((props.bounds?.top??0)+(props.bounds?.bottom??0))/2}px;
  left: calc(
    ${props=>props.bounds?.left??0}px - ${.75}rem
  );
  transform: translateY(-50%) translateX(-100%);

  &::before {
    transform: rotateZ(90deg);
    top: calc(50% - ${.25}rem);
    left: calc(100% - ${.25}rem);
  }
`,RightProps=styled_components_browser_esm.AH`
  top: ${props=>((props.bounds?.top??0)+(props.bounds?.bottom??0))/2}px;
  left: calc(
    ${props=>props.bounds?.right??0}px + ${.75}rem
  );
  transform: translateY(-50%);

  &::before {
    transform: rotateZ(270deg);
    top: calc(50% - ${.25}rem);
    left: -${.75}rem;
  }
`,StyledTooltip=styled_components_browser_esm.Ay.span.withConfig(style.P6)`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  position: fixed;
  z-index: 9999;
  color: white;
  white-space: nowrap;
  pointer-events: none;
  line-height: normal;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: ${.5}rem;
  font-size: ${1}rem;
  font-weight: 300;
  padding: ${.5}rem ${.75}rem;
  white-space: nowrap;
  animation: fadeIn 0.3s;

  &::before {
    border-bottom: ${.5}rem solid rgba(0, 0, 0, 0.8);
    border-left: ${.5}rem solid transparent;
    border-right: ${.5}rem solid transparent;
    content: '';
    height: 0;
    transform: translateX(-100%) translateY(-50%);
    width: 0;
    z-index: 1;
    position: absolute;
  }

  ${props=>"top"===props.position&&TopProps}
  ${props=>"bottom"===props.position&&BottomProps}
  ${props=>"left"===props.position&&LeftProps}
  ${props=>"right"===props.position&&RightProps}
`;try{StyledTooltip.displayName="StyledTooltip",StyledTooltip.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"]={docgenInfo:StyledTooltip.__docgenInfo,name:"StyledTooltip",path:"src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const initialState={show:!1,bounds:null},WithTooltip=(Component,container_id)=>props=>{const logger=(0,LoggerProvider.Ul)(),[{show,bounds},setShow]=(0,react.useState)(initialState),[container,setContainer]=(0,react.useState)(null),position=props.tooltipPosition??"top",showToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation();let component=e.target;for(;!component.getAttribute("data-tooltip");)component=component.parentElement;const bounds=component.getBoundingClientRect();setShow({show:!0,bounds})}),[]),hideToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),setShow(initialState)}),[]);return(0,react.useEffect)((()=>(document.addEventListener("scroll",hideToolTip,!0),()=>document.removeEventListener("scroll",hideToolTip,!0))),[]),(0,react.useEffect)((()=>{const container=document.getElementById(container_id||"Tooltip__container");container?setContainer(container):logger.warn("Attempted to use 'WithTooltip' but could not find container element.Pass a valid element ID or add 'Tooltip__container' ID to existing element")}),[container_id]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[show&&bounds&&container&&react_dom.createPortal((0,jsx_runtime.jsx)(StyledTooltip,{position,bounds,children:props.tooltipContent||props.label}),container),(0,jsx_runtime.jsx)(Component,{...props,"data-tooltip":!0,"data-tooltip-position":position,onClick:e=>{show&&hideToolTip(e),props?.onClick?.(e)},onFocus:e=>{show||showToolTip(e),props?.onFocus?.(e)},onBlur:e=>{show&&hideToolTip(e),props?.onBlur?.(e)},onMouseEnter:e=>{show||showToolTip(e),props?.onMouseEnter?.(e)},onMouseLeave:e=>{show&&hideToolTip(e),props?.onMouseLeave?.(e)}})]})}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>KEY_CODES,d:()=>VIDEO_INPUT_QUALITY});const KEY_CODES={TAB:9,ENTER:13,ESCAPE:27,ARROW_UP:38,ARROW_DOWN:40},VIDEO_INPUT_QUALITY={"360p":"360p (nHD) @ 15 fps (600 Kbps max)","540p":"540p (qHD) @ 15 fps (1.4 Mbps max)","720p":"720p (HD) @ 15 fps (1.4 Mbps max)"}},"./src/hooks/useClickOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useClickOutside(ref,onClickOutside){const onMouseDown=e=>{(e=>!!ref.current&&!ref.current.contains(e.target))(e)&&onClickOutside&&onClickOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("mousedown",onMouseDown),document.addEventListener("touchstart",onMouseDown),()=>{document.removeEventListener("mousedown",onMouseDown),document.removeEventListener("touchstart",onMouseDown)})))}},"./src/hooks/useTabOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useTabOutside(ref,onTabOutside){const keyUp=e=>{if(9===e.keyCode&&ref.current&&!ref.current.contains(document.activeElement))return onTabOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("keyup",keyUp),()=>{document.removeEventListener("keyup",keyUp)})))}}}]);
//# sourceMappingURL=1074.cd713cf5.iframe.bundle.js.map