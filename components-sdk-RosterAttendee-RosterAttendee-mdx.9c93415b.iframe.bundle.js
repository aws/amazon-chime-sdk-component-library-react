(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[4490],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/sdk/MicrophoneActivity/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>MicrophoneActivity,A:()=>sdk_MicrophoneActivity});var react=__webpack_require__("./node_modules/react/index.js"),useAttendeeAudioStatus=__webpack_require__("./src/hooks/sdk/useAttendeeAudioStatus.tsx"),AudioVideoProvider=__webpack_require__("./src/providers/AudioVideoProvider/index.tsx"),Microphone=__webpack_require__("./src/components/ui/icons/Microphone/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledMicVolumeIndicator=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
  position: relative;
  height: inherit;
  line-height: 0;

  .ch-mic-icon {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .ch-bg-volume-wrapper {
    position: absolute;
    bottom: 41%;
    left: 40%;
    height: 38%;
    width: 21%;
    border-radius: 20%;
    overflow: hidden;
  }

  .ch-bg-volume-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: bottom;
    will-change: transform;
    background-color: ${props=>props.signalStrength&&props.signalStrength<=.5?props.theme.colors.error.light:props.theme.colors.primary.light};
  }

  ${Base.d}
  ${Base.i}
`;try{StyledMicVolumeIndicator.displayName="StyledMicVolumeIndicator",StyledMicVolumeIndicator.__docgenInfo={description:"",displayName:"StyledMicVolumeIndicator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/MicVolumeIndicator/Styled.tsx#StyledMicVolumeIndicator"]={docgenInfo:StyledMicVolumeIndicator.__docgenInfo,name:"StyledMicVolumeIndicator",path:"src/components/ui/MicVolumeIndicator/Styled.tsx#StyledMicVolumeIndicator"})}catch(__react_docgen_typescript_loader_error){}try{Styled.displayName="Styled",Styled.__docgenInfo={description:"",displayName:"Styled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/MicVolumeIndicator/Styled.tsx#Styled"]={docgenInfo:Styled.__docgenInfo,name:"Styled",path:"src/components/ui/MicVolumeIndicator/Styled.tsx#Styled"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MicVolumeIndicator=(0,react.forwardRef)((({muted=!1,signalStrength,className:propClassName,...rest},bgRef)=>{const poorConnection=void 0!==signalStrength&&signalStrength<=.5,className=propClassName?`${propClassName} ch-mic-volume-indicator`:"ch-mic-volume-indicator";return(0,jsx_runtime.jsxs)(StyledMicVolumeIndicator,{className,signalStrength,muted,...rest,children:[(0,jsx_runtime.jsx)(Microphone.A,{muted,className:"ch-mic-icon",poorConnection}),(0,jsx_runtime.jsx)("div",{className:"ch-bg-volume-wrapper",children:(0,jsx_runtime.jsx)("div",{ref:bgRef,className:"ch-bg-volume-fill","data-testid":"volume-fill"})})]})})),ui_MicVolumeIndicator=MicVolumeIndicator;try{MicVolumeIndicator.displayName="MicVolumeIndicator",MicVolumeIndicator.__docgenInfo={description:"",displayName:"MicVolumeIndicator",props:{muted:{defaultValue:{value:"false"},description:"",name:"muted",required:!1,type:{name:"boolean | undefined"}},signalStrength:{defaultValue:null,description:"",name:"signalStrength",required:!0,type:{name:"number | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/MicVolumeIndicator/index.tsx#MicVolumeIndicator"]={docgenInfo:MicVolumeIndicator.__docgenInfo,name:"MicVolumeIndicator",path:"src/components/ui/MicVolumeIndicator/index.tsx#MicVolumeIndicator"})}catch(__react_docgen_typescript_loader_error){}const MicrophoneActivity=({attendeeId,...rest})=>{const audioVideo=(0,AudioVideoProvider.n3)(),bgEl=(0,react.useRef)(null),{signalStrength,muted}=(0,useAttendeeAudioStatus.A)(attendeeId);return(0,react.useEffect)((()=>{if(!audioVideo||!attendeeId||!bgEl.current)return;const callback=(_,volume,__,___)=>{bgEl.current&&(bgEl.current.style.transform=`scaleY(${volume})`)};return audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId,callback),()=>audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId,callback)}),[attendeeId]),(0,jsx_runtime.jsx)(ui_MicVolumeIndicator,{...rest,ref:bgEl,muted,signalStrength})};MicrophoneActivity.displayName="MicrophoneActivity";const sdk_MicrophoneActivity=MicrophoneActivity;try{MicrophoneActivity.displayName="MicrophoneActivity",MicrophoneActivity.__docgenInfo={description:"",displayName:"MicrophoneActivity",props:{attendeeId:{defaultValue:null,description:"The Chime attendee ID",name:"attendeeId",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/MicrophoneActivity/index.tsx#MicrophoneActivity"]={docgenInfo:MicrophoneActivity.__docgenInfo,name:"MicrophoneActivity",path:"src/components/sdk/MicrophoneActivity/index.tsx#MicrophoneActivity"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/RosterAttendee/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>RosterAttendee});__webpack_require__("./node_modules/react/index.js");var _hooks_sdk_useAttendeeStatus__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/sdk/useAttendeeStatus.tsx"),_providers_RosterProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/RosterProvider/index.tsx"),_ui_Roster_RosterCell__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Roster/RosterCell/index.tsx"),_MicrophoneActivity__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/sdk/MicrophoneActivity/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RosterAttendee=({attendeeId,...rest})=>{const{muted,videoEnabled,sharingContent}=(0,_hooks_sdk_useAttendeeStatus__WEBPACK_IMPORTED_MODULE_1__.A)(attendeeId),{roster}=(0,_providers_RosterProvider__WEBPACK_IMPORTED_MODULE_2__.A)(),attendeeName=roster[attendeeId]?.name||"";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_Roster_RosterCell__WEBPACK_IMPORTED_MODULE_3__.A,{name:attendeeName,muted,videoEnabled,sharingContent,microphone:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MicrophoneActivity__WEBPACK_IMPORTED_MODULE_4__.A,{attendeeId}),...rest})};RosterAttendee.displayName="RosterAttendee";try{RosterAttendee.displayName="RosterAttendee",RosterAttendee.__docgenInfo={description:"",displayName:"RosterAttendee",props:{attendeeId:{defaultValue:null,description:"The ID of a Chime meeting attendee.",name:"attendeeId",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},tabIndex:{defaultValue:null,description:"Optional tab index for keyboard accessibility",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onFocus:{defaultValue:null,description:"onFocus event handler",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}},onBlur:{defaultValue:null,description:"onBlur event handler",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},menu:{defaultValue:null,description:"The PopOver menu for more options.",name:"menu",required:!1,type:{name:"ReactNode"}},muted:{defaultValue:null,description:"Whether or not the attendee is muted. This is ignored if you pass a custom microphone via the microphone prop.",name:"muted",required:!1,type:{name:"boolean | undefined"}},poorConnection:{defaultValue:null,description:"Whether or not the attendee is having poor connection, it defaults to `false`. This is ignored if you pass a custom microphone via the microphone prop.",name:"poorConnection",required:!1,type:{name:"boolean | undefined"}},a11yMenuLabel:{defaultValue:null,description:"The label for availability, it defaults to an empty string.",name:"a11yMenuLabel",required:!1,type:{name:"string | undefined"}},"data-tooltip":{defaultValue:null,description:"",name:"data-tooltip",required:!1,type:{name:"boolean | undefined"}},"data-tooltip-position":{defaultValue:null,description:"",name:"data-tooltip-position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},tooltipContainerId:{defaultValue:null,description:"",name:"tooltipContainerId",required:!1,type:{name:"string | undefined"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"The subtitle for the primary name.",name:"subtitle",required:!1,type:{name:"string | undefined"}},buttonProps:{defaultValue:null,description:"extra properties to pass through to the menu button",name:"buttonProps",required:!1,type:{name:"Partial<IconButtonProps> | undefined"}},runningLate:{defaultValue:null,description:"The running late message.",name:"runningLate",required:!1,type:{name:"string | undefined"}},micPosition:{defaultValue:null,description:"The position to place microphone icon.",name:"micPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"grouped"'},{value:'"leading"'}]}},videoEnabled:{defaultValue:null,description:"Whether or not the attendee has enabled their local video.",name:"videoEnabled",required:!1,type:{name:"boolean | undefined"}},sharingContent:{defaultValue:null,description:"Whether or not the attendee is sharing content.",name:"sharingContent",required:!1,type:{name:"boolean | undefined"}},microphone:{defaultValue:null,description:"A replacement for the default volume icon, such as the `MicrophoneActivity` component.",name:"microphone",required:!1,type:{name:"ReactNode"}},extraIcon:{defaultValue:null,description:"The icon to depict moderator or presentor status .",name:"extraIcon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/RosterAttendee/index.tsx#RosterAttendee"]={docgenInfo:RosterAttendee.__docgenInfo,name:"RosterAttendee",path:"src/components/sdk/RosterAttendee/index.tsx#RosterAttendee"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Button/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,K:()=>IconButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_2__.qn,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{ref,variant:"icon",...props}),props.badge]}))),__WEBPACK_DEFAULT_EXPORT__=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{badge:{defaultValue:null,description:"Render a component to the top right area of the IconButton",name:"badge",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/ui/Button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{OV:()=>StyledButton,qn:()=>StyledIconButtonWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`;try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/ui/Button/Styled.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledIconButtonWrapper.displayName="StyledIconButtonWrapper",StyledIconButtonWrapper.__docgenInfo={description:"",displayName:"StyledIconButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"]={docgenInfo:StyledIconButtonWrapper.__docgenInfo,name:"StyledIconButtonWrapper",path:"src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.OV,{...props,className:props.className||"",as:props.tag,ref,"aria-label":props.label,"data-testid":"button",disabled:props.disabled,children:[props.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon","data-testid":"button-icon",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-label","data-testid":"button-label",children:props.label})]}))),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{GW:()=>StyledPopOverMenu,JD:()=>StyledSubMenu,WL:()=>StyledPopOverSeparator,kC:()=>StyledPopOverHeader,kL:()=>StyledPopOverItem,rS:()=>StyledPopOverToggle});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts");const StyledPopOverMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.ul.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`;try{StyledPopOverMenu.displayName="StyledPopOverMenu",StyledPopOverMenu.__docgenInfo={description:"",displayName:"StyledPopOverMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"]={docgenInfo:StyledPopOverMenu.__docgenInfo,name:"StyledPopOverMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverToggle.displayName="StyledPopOverToggle",StyledPopOverToggle.__docgenInfo={description:"",displayName:"StyledPopOverToggle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"]={docgenInfo:StyledPopOverToggle.__docgenInfo,name:"StyledPopOverToggle",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverItem.displayName="StyledPopOverItem",StyledPopOverItem.__docgenInfo={description:"",displayName:"StyledPopOverItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"]={docgenInfo:StyledPopOverItem.__docgenInfo,name:"StyledPopOverItem",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"})}catch(__react_docgen_typescript_loader_error){}try{StyledSubMenu.displayName="StyledSubMenu",StyledSubMenu.__docgenInfo={description:"",displayName:"StyledSubMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledSubMenu"]={docgenInfo:StyledSubMenu.__docgenInfo,name:"StyledSubMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledSubMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverHeader.displayName="StyledPopOverHeader",StyledPopOverHeader.__docgenInfo={description:"",displayName:"StyledPopOverHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"]={docgenInfo:StyledPopOverHeader.__docgenInfo,name:"StyledPopOverHeader",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverSeparator.displayName="StyledPopOverSeparator",StyledPopOverSeparator.__docgenInfo={description:"",displayName:"StyledPopOverSeparator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"]={docgenInfo:StyledPopOverSeparator.__docgenInfo,name:"StyledPopOverSeparator",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),react_popper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-popper/lib/esm/Popper.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts"),_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useClickOutside/index.tsx"),_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useTabOutside/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getFocusableElements=node=>node.querySelectorAll("button, [href]"),PopOver=({renderButton,renderButtonWrapper,onPopOverClick,children,isSubMenu=!1,placement="bottom-start",a11yLabel,className,closeOnClick=!0,...rest})=>{const menuRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(isOpen&&menuRef.current){const nodes=getFocusableElements(menuRef.current);nodes&&nodes[0].focus()}}),[isOpen]);const move=direction=>{const node=menuRef.current;if(!isSubMenu&&node){const nodes=getFocusableElements(node),currentElement=document.activeElement;for(let i=0;i<nodes.length;i++)if(nodes[i]===currentElement){if("down"===direction&&i!==nodes.length-1)return nodes[i+1].focus();if("up"===direction&&i>0)return nodes[i-1].focus();break}}},handlePopOverClick=()=>{setIsOpen(!isOpen),onPopOverClick&&onPopOverClick(isOpen)};return(0,_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__.A)(menuRef,(()=>setIsOpen(!1))),(0,_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__.A)(menuRef,(()=>setIsOpen(!1))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref:menuRef,onKeyDown:e=>{switch(e.keyCode){case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ESCAPE:return setIsOpen(!1);case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_UP:return move("up");case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_DOWN:return move("down")}},"data-testid":"popover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_7__.mS,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_8__.O,{children:({ref})=>{const props={ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"ch-popover-toggle"),onClick:handlePopOverClick,"data-menu":isSubMenu?"submenu":null,"aria-label":a11yLabel,"aria-haspopup":!0,"aria-expanded":isOpen,"data-testid":"popover-toggle"};if(renderButton)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.rS,{...props,children:renderButton(isOpen)});if(renderButtonWrapper){const{ref,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref,children:renderButtonWrapper(isOpen,rest)})}return null}}),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_9__.N,{placement,modifiers:[{name:"offset",options:{offset:[-8,0]}}],...rest,children:({ref,style,placement})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.GW,{"data-placement":placement,onClick:e=>(e=>{if(!closeOnClick)return;return!e.target.closest("[data-menu='submenu']")&&setIsOpen(!1)})(e),ref,style,"data-testid":"menu",className:"ch-popover-menu",children})})]})})};PopOver.displayName="PopOver";const __WEBPACK_DEFAULT_EXPORT__=PopOver;try{PopOver.displayName="PopOver",PopOver.__docgenInfo={description:"",displayName:"PopOver",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},isSubMenu:{defaultValue:{value:"false"},description:"Whether or not this is a sub menu.",name:"isSubMenu",required:!1,type:{name:"Boolean | undefined"}},placement:{defaultValue:{value:"bottom-start"},description:"Defines the placement of PopOver menu.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},renderButton:{defaultValue:null,description:"Defines the function to render the inner contents of the popover button element",name:"renderButton",required:!1,type:{name:"((isActive: boolean) => ReactNode) | undefined"}},renderButtonWrapper:{defaultValue:null,description:"Alternative to renderButton, defines the function to render the full popover button element (as opposed to just its contents). This is used if you want full control over the button rendering. The button must forwardRef",name:"renderButtonWrapper",required:!1,type:{name:"((isActive: boolean, props: any) => ReactNode) | undefined"}},onPopOverClick:{defaultValue:null,description:"The callback fired when the render button is clicked.",name:"onPopOverClick",required:!1,type:{name:"((isOpen: boolean) => void) | undefined"}},a11yLabel:{defaultValue:null,description:"The label used for availability.",name:"a11yLabel",required:!0,type:{name:"string"}},closeOnClick:{defaultValue:{value:"true"},description:"Allow the popover to stay open for multiple clicks.",name:"closeOnClick",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/index.tsx#PopOver"]={docgenInfo:PopOver.__docgenInfo,name:"PopOver",path:"src/components/ui/PopOver/index.tsx#PopOver"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Roster/PopOverMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>PopOverMenu});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Button_IconButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Button/IconButton.tsx"),_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/icons/index.tsx"),_PopOver__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/PopOver/index.tsx"),_WithTooltip__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/WithTooltip/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopOverMenu=({menu,buttonProps,tooltipContainerId,a11yMenuLabel="",...rest})=>{const IconButtonWithToolTip=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>(0,_WithTooltip__WEBPACK_IMPORTED_MODULE_5__.k)(_Button_IconButton__WEBPACK_IMPORTED_MODULE_2__.A,tooltipContainerId)),[tooltipContainerId]),ButtonComponent=rest["data-tooltip"]?IconButtonWithToolTip:_Button_IconButton__WEBPACK_IMPORTED_MODULE_2__.A,buttonComponentProps=rest["data-tooltip-position"]?{tooltipPosition:rest["data-tooltip-position"]}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PopOver__WEBPACK_IMPORTED_MODULE_4__.A,{className:"ch-menu",a11yLabel:a11yMenuLabel,renderButtonWrapper:(isActive,props)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ButtonComponent,{...buttonComponentProps,...buttonProps,...props,...rest,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("ch-menu",buttonProps?.className),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.nv,{}),label:a11yMenuLabel}),children:menu})};PopOverMenu.displayName="PopOverMenu";try{PopOverMenu.displayName="PopOverMenu",PopOverMenu.__docgenInfo={description:"",displayName:"PopOverMenu",props:{menu:{defaultValue:null,description:"",name:"menu",required:!0,type:{name:"ReactNode"}},a11yMenuLabel:{defaultValue:{value:""},description:"",name:"a11yMenuLabel",required:!1,type:{name:"string | undefined"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"Partial<IconButtonProps> | undefined"}},"data-tooltip":{defaultValue:null,description:"",name:"data-tooltip",required:!1,type:{name:"boolean | undefined"}},"data-tooltip-position":{defaultValue:null,description:"",name:"data-tooltip-position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},tooltipContainerId:{defaultValue:null,description:"",name:"tooltipContainerId",required:!1,type:{name:"string | undefined"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/PopOverMenu.tsx#PopOverMenu"]={docgenInfo:PopOverMenu.__docgenInfo,name:"PopOverMenu",path:"src/components/ui/Roster/PopOverMenu.tsx#PopOverMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Roster/RosterCell/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>RosterCell,A:()=>Roster_RosterCell});__webpack_require__("./node_modules/react/index.js");var icons=__webpack_require__("./src/components/ui/icons/index.tsx"),PopOverMenu=__webpack_require__("./src/components/ui/Roster/PopOverMenu.tsx"),Styled=__webpack_require__("./src/components/ui/Roster/Styled.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RosterName=({name,subtitle})=>(0,jsx_runtime.jsxs)(Styled.fh,{children:[(0,jsx_runtime.jsx)("div",{className:"ch-name",children:name}),subtitle&&(0,jsx_runtime.jsx)("div",{className:"ch-subtitle",children:subtitle})]});RosterName.displayName="RosterName";const Roster_RosterName=RosterName;try{RosterName.displayName="RosterName",RosterName.__docgenInfo={description:"",displayName:"RosterName",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/RosterName.tsx#RosterName"]={docgenInfo:RosterName.__docgenInfo,name:"RosterName",path:"src/components/ui/Roster/RosterName.tsx#RosterName"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledCell=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;

  .ch-mic {
    flex-shrink: 0;
    width: 1.5rem;
    line-height: 0;

    ${({micPosition})=>"leading"===micPosition?"\n        order: -1;\n        margin-right: .75rem;\n      ":""}
  }

  .ch-menu {
    color: ${props=>props.theme.buttons.icon.hover.bgd};

    &:hover,
    &:focus {
      color: ${props=>props.theme.buttons.icon.hover.text};
    }
  }

  svg {
    width: 1.5rem;
    flex-shrink: 0;
  }

  > * {
    margin-right: 0.5rem;
  }

  > :last-child {
    margin-right: 0;
  }

  ${Base.d}
  ${Base.i}
`,StyledLateMessage=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.65rem;
  color: ${({theme})=>theme.roster.secondaryText};

  > svg {
    margin-right: 0.25rem;
    color: ${({theme})=>theme.roster.secondaryText};
  }
`;try{StyledCell.displayName="StyledCell",StyledCell.__docgenInfo={description:"",displayName:"StyledCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/RosterCell/Styled.tsx#StyledCell"]={docgenInfo:StyledCell.__docgenInfo,name:"StyledCell",path:"src/components/ui/Roster/RosterCell/Styled.tsx#StyledCell"})}catch(__react_docgen_typescript_loader_error){}try{StyledLateMessage.displayName="StyledLateMessage",StyledLateMessage.__docgenInfo={description:"",displayName:"StyledLateMessage",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/RosterCell/Styled.tsx#StyledLateMessage"]={docgenInfo:StyledLateMessage.__docgenInfo,name:"StyledLateMessage",path:"src/components/ui/Roster/RosterCell/Styled.tsx#StyledLateMessage"})}catch(__react_docgen_typescript_loader_error){}const LateMessage=({children})=>(0,jsx_runtime.jsxs)(StyledLateMessage,{children:[(0,jsx_runtime.jsx)(icons.zD,{}),children]});LateMessage.displayName="LateMessage";const RosterCell_LateMessage=LateMessage;try{LateMessage.displayName="LateMessage",LateMessage.__docgenInfo={description:"",displayName:"LateMessage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/RosterCell/LateMessage.tsx#LateMessage"]={docgenInfo:LateMessage.__docgenInfo,name:"LateMessage",path:"src/components/ui/Roster/RosterCell/LateMessage.tsx#LateMessage"})}catch(__react_docgen_typescript_loader_error){}const RosterCell=props=>{const{tag,name,menu,subtitle,className,runningLate,muted,videoEnabled,sharingContent,poorConnection=!1,microphone,a11yMenuLabel="",extraIcon,buttonProps,...rest}=props,videoIcon=function getVideoIcon(isVideoEnabled,isSharingContent){return isSharingContent?(0,jsx_runtime.jsx)(icons.GI,{}):"boolean"==typeof isVideoEnabled?(0,jsx_runtime.jsx)(icons.i7,{disabled:!isVideoEnabled}):null}(videoEnabled,sharingContent),showMic="boolean"==typeof muted,mic=microphone||(0,jsx_runtime.jsx)(icons.tm,{muted,poorConnection}),popOverMenuComponentProps=rest["data-tooltip"]?{"data-tooltip-position":rest["data-tooltip-position"],"data-tooltip":rest["data-tooltip"]}:{};return(0,jsx_runtime.jsxs)(StyledCell,{className:className||"",as:tag,...props,"data-testid":"roster-cell",children:[(0,jsx_runtime.jsx)(Roster_RosterName,{name,subtitle}),runningLate?(0,jsx_runtime.jsx)(RosterCell_LateMessage,{children:runningLate}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showMic&&(0,jsx_runtime.jsx)("div",{className:"ch-mic",children:mic}),extraIcon,videoIcon]}),menu&&(0,jsx_runtime.jsx)(PopOverMenu.l,{...popOverMenuComponentProps,menu,a11yMenuLabel,buttonProps})]})};RosterCell.displayName="RosterCell";const Roster_RosterCell=RosterCell;try{RosterCell.displayName="RosterCell",RosterCell.__docgenInfo={description:"",displayName:"RosterCell",props:{name:{defaultValue:null,description:"The primary name in the roster cell.",name:"name",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"The subtitle for the primary name.",name:"subtitle",required:!1,type:{name:"string | undefined"}},runningLate:{defaultValue:null,description:"The running late message.",name:"runningLate",required:!1,type:{name:"string | undefined"}},micPosition:{defaultValue:null,description:"The position to place microphone icon.",name:"micPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"grouped"'},{value:'"leading"'}]}},muted:{defaultValue:null,description:"Whether or not the attendee is muted. This is ignored if you pass a custom microphone via the microphone prop.",name:"muted",required:!1,type:{name:"boolean | undefined"}},videoEnabled:{defaultValue:null,description:"Whether or not the attendee has enabled their local video.",name:"videoEnabled",required:!1,type:{name:"boolean | undefined"}},sharingContent:{defaultValue:null,description:"Whether or not the attendee is sharing content.",name:"sharingContent",required:!1,type:{name:"boolean | undefined"}},poorConnection:{defaultValue:null,description:"Whether or not the attendee is having poor connection, it defaults to `false`. This is ignored if you pass a custom microphone via the microphone prop.",name:"poorConnection",required:!1,type:{name:"boolean | undefined"}},microphone:{defaultValue:null,description:"A replacement for the default volume icon, such as the `MicrophoneActivity` component.",name:"microphone",required:!1,type:{name:"ReactNode"}},menu:{defaultValue:null,description:"The PopOver menu for more options.",name:"menu",required:!1,type:{name:"ReactNode"}},a11yMenuLabel:{defaultValue:null,description:"The label for availability, it defaults to an empty string.",name:"a11yMenuLabel",required:!1,type:{name:"string | undefined"}},extraIcon:{defaultValue:null,description:"The icon to depict moderator or presentor status .",name:"extraIcon",required:!1,type:{name:"ReactNode"}},buttonProps:{defaultValue:null,description:"extra properties to pass through to the menu button",name:"buttonProps",required:!1,type:{name:"Partial<IconButtonProps> | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}},tabIndex:{defaultValue:null,description:"Optional tab index for keyboard accessibility",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onFocus:{defaultValue:null,description:"onFocus event handler",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}},onBlur:{defaultValue:null,description:"onBlur event handler",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}},"data-tooltip":{defaultValue:null,description:"",name:"data-tooltip",required:!1,type:{name:"boolean | undefined"}},"data-tooltip-position":{defaultValue:null,description:"",name:"data-tooltip-position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},tooltipContainerId:{defaultValue:null,description:"",name:"tooltipContainerId",required:!1,type:{name:"string | undefined"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/RosterCell/index.tsx#RosterCell"]={docgenInfo:RosterCell.__docgenInfo,name:"RosterCell",path:"src/components/ui/Roster/RosterCell/index.tsx#RosterCell"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Roster/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ju:()=>StyledRoster,QP:()=>StyledTitle,VY:()=>StyledGroup,fh:()=>StyledName,h9:()=>StyledHeader,mU:()=>StyledGroupWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledRoster=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.aside.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  overflow-y: auto;
  background-color: ${props=>props.theme.roster.bgd};
  box-shadow: 1rem 1rem 3.75rem 0 rgba(0, 0, 0, 0.1);
  border-left: 0.0625rem solid ${props=>props.theme.roster.containerBorder};
  border-right: 0.0625rem solid ${props=>props.theme.roster.containerBorder};

  ${({theme})=>theme.mediaQueries.min.md} {
    width: ${props=>props.theme.roster.maxWidth};
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  display: inline-block;
  margin: 0 0.625rem 0 0;
  font-weight: 600;
  font-size: 0.675rem;
  color: ${props=>props.theme.roster.secondaryText};
`,StyledGroupWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  margin: 0 0.5rem;

  & + & {
    margin-top: 1rem;
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  background-color: ${props=>props.theme.roster.fgd};
  border-radius: ${props=>props.theme.radii.default};

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledHeader=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 0.0625rem solid ${props=>props.theme.roster.headerBorder};

  .ch-title {
    font-size: 0.875rem;
    color: ${props=>props.theme.roster.primaryText};
    ${props=>props.isSearching?"opacity: 0;":""}
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.gO};
  }

  .ch-badge {
    margin-left: 0.5rem;
    ${props=>props.isSearching?"opacity: 0;":""}
  }

  .ch-buttons {
    margin-left: auto;
    display: flex;

    > * {
      margin-left: 0.5rem;
    }

    ${props=>props.isSearching?"opacity: 0;":""}
  }

  .ch-search-wrapper {
    position: absolute !important;
    bottom: 0.75rem;
    left: 0.5rem;
    right: 0.5rem;

    .ch-search-input {
      flex: 1;

      input {
        width: 100%;
      }
    }

    .ch-search-close {
      margin-left: 0.5rem;
    }
  }

  .ch-navigation-icon {
    margin-right: 0.5rem;
    margin-left: -0.5rem;

    ${({theme})=>theme.mediaQueries.min.md} {
      display: none;
    }
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledName=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  flex-grow: 1;
  min-width: 0;
  line-height: 1.5;

  .ch-name {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.gO};
    font-size: 0.875rem;
    color: ${props=>props.theme.roster.primaryText};
  }

  .ch-subtitle {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.gO};
    font-size: 0.65rem;
    color: ${props=>props.theme.roster.secondaryText};
  }
`;try{StyledRoster.displayName="StyledRoster",StyledRoster.__docgenInfo={description:"",displayName:"StyledRoster",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Styled.tsx#StyledRoster"]={docgenInfo:StyledRoster.__docgenInfo,name:"StyledRoster",path:"src/components/ui/Roster/Styled.tsx#StyledRoster"})}catch(__react_docgen_typescript_loader_error){}try{StyledTitle.displayName="StyledTitle",StyledTitle.__docgenInfo={description:"",displayName:"StyledTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Styled.tsx#StyledTitle"]={docgenInfo:StyledTitle.__docgenInfo,name:"StyledTitle",path:"src/components/ui/Roster/Styled.tsx#StyledTitle"})}catch(__react_docgen_typescript_loader_error){}try{StyledGroupWrapper.displayName="StyledGroupWrapper",StyledGroupWrapper.__docgenInfo={description:"",displayName:"StyledGroupWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Styled.tsx#StyledGroupWrapper"]={docgenInfo:StyledGroupWrapper.__docgenInfo,name:"StyledGroupWrapper",path:"src/components/ui/Roster/Styled.tsx#StyledGroupWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StyledGroup.displayName="StyledGroup",StyledGroup.__docgenInfo={description:"",displayName:"StyledGroup",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Styled.tsx#StyledGroup"]={docgenInfo:StyledGroup.__docgenInfo,name:"StyledGroup",path:"src/components/ui/Roster/Styled.tsx#StyledGroup"})}catch(__react_docgen_typescript_loader_error){}try{StyledHeader.displayName="StyledHeader",StyledHeader.__docgenInfo={description:"",displayName:"StyledHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Styled.tsx#StyledHeader"]={docgenInfo:StyledHeader.__docgenInfo,name:"StyledHeader",path:"src/components/ui/Roster/Styled.tsx#StyledHeader"})}catch(__react_docgen_typescript_loader_error){}try{StyledName.displayName="StyledName",StyledName.__docgenInfo={description:"",displayName:"StyledName",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Styled.tsx#StyledName"]={docgenInfo:StyledName.__docgenInfo,name:"StyledName",path:"src/components/ui/Roster/Styled.tsx#StyledName"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/WithTooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>WithTooltip});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),LoggerProvider=__webpack_require__("./src/providers/LoggerProvider/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const TopProps=styled_components_browser_esm.AH`
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
`;try{StyledTooltip.displayName="StyledTooltip",StyledTooltip.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"]={docgenInfo:StyledTooltip.__docgenInfo,name:"StyledTooltip",path:"src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const initialState={show:!1,bounds:null},WithTooltip=(Component,container_id)=>props=>{const logger=(0,LoggerProvider.Ul)(),[{show,bounds},setShow]=(0,react.useState)(initialState),[container,setContainer]=(0,react.useState)(null),position=props.tooltipPosition??"top",showToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation();let component=e.target;for(;!component.getAttribute("data-tooltip");)component=component.parentElement;const bounds=component.getBoundingClientRect();setShow({show:!0,bounds})}),[]),hideToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),setShow(initialState)}),[]);return(0,react.useEffect)((()=>(document.addEventListener("scroll",hideToolTip,!0),()=>document.removeEventListener("scroll",hideToolTip,!0))),[]),(0,react.useEffect)((()=>{const container=document.getElementById(container_id||"Tooltip__container");container?setContainer(container):logger.warn("Attempted to use 'WithTooltip' but could not find container element.Pass a valid element ID or add 'Tooltip__container' ID to existing element")}),[container_id]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[show&&bounds&&container&&react_dom.createPortal((0,jsx_runtime.jsx)(StyledTooltip,{position,bounds,children:props.tooltipContent||props.label}),container),(0,jsx_runtime.jsx)(Component,{...props,"data-tooltip":!0,"data-tooltip-position":position,onClick:e=>{show&&hideToolTip(e),props?.onClick?.(e)},onFocus:e=>{show||showToolTip(e),props?.onFocus?.(e)},onBlur:e=>{show&&hideToolTip(e),props?.onBlur?.(e)},onMouseEnter:e=>{show||showToolTip(e),props?.onMouseEnter?.(e)},onMouseLeave:e=>{show&&hideToolTip(e),props?.onMouseLeave?.(e)}})]})}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>KEY_CODES,d:()=>VIDEO_INPUT_QUALITY});const KEY_CODES={TAB:9,ENTER:13,ESCAPE:27,ARROW_UP:38,ARROW_DOWN:40},VIDEO_INPUT_QUALITY={"360p":"360p (nHD) @ 15 fps (600 Kbps max)","540p":"540p (qHD) @ 15 fps (1.4 Mbps max)","720p":"720p (HD) @ 15 fps (1.4 Mbps max)"}},"./src/hooks/sdk/useAttendeeAudioStatus.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/AudioVideoProvider/index.tsx");function useAttendeeAudioStatus(attendeeId){const audioVideo=(0,_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_1__.n3)(),[muted,setMuted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[signalStrength,setSignalStrength]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!audioVideo)return;const callback=(_,__,muted,signalStrength)=>{null!==muted&&setMuted(muted),null!==signalStrength&&setSignalStrength(signalStrength)};return audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId,callback),()=>audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId,callback)}),[audioVideo,attendeeId]),{muted,signalStrength}}const __WEBPACK_DEFAULT_EXPORT__=useAttendeeAudioStatus;try{useAttendeeAudioStatus.displayName="useAttendeeAudioStatus",useAttendeeAudioStatus.__docgenInfo={description:"",displayName:"useAttendeeAudioStatus",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/sdk/useAttendeeAudioStatus.tsx#useAttendeeAudioStatus"]={docgenInfo:useAttendeeAudioStatus.__docgenInfo,name:"useAttendeeAudioStatus",path:"src/hooks/sdk/useAttendeeAudioStatus.tsx#useAttendeeAudioStatus"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/sdk/useAttendeeStatus.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amazon-chime-sdk-js/build/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/AudioVideoProvider/index.tsx"),_useAttendeeAudioStatus__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/sdk/useAttendeeAudioStatus.tsx");function useAttendeeStatus(attendeeId){const audioVideo=(0,_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_2__.n3)(),audioState=(0,_useAttendeeAudioStatus__WEBPACK_IMPORTED_MODULE_3__.A)(attendeeId),[videoTileId,setVideoTileId]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>{if(!audioVideo)return null;const localAttendeeId=audioVideo.audioVideoController?.realtimeController?.state?.localAttendeeId,isLocalUser=attendeeId===localAttendeeId,videoTile=audioVideo.getAllVideoTiles().find((tile=>{const state=tile.state();return!(state.isContent||isLocalUser&&!state.active)&&state.boundAttendeeId===attendeeId}));return videoTile?videoTile.state().tileId:null})),[contentTileId,setContentTileId]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>{if(!audioVideo)return null;const videoTile=audioVideo.getAllVideoTiles().find((tile=>{const state=tile.state();if(!state.boundAttendeeId||!state.isContent)return!1;return new amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DefaultModality(state.boundAttendeeId).base()===attendeeId}));return videoTile?videoTile.state().tileId:null}));(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(!audioVideo)return;const observer={videoTileDidUpdate:state=>{state.boundAttendeeId===attendeeId&&(state.localTile&&videoTileId&&!state.boundVideoStream?setVideoTileId(null):videoTileId||!state.tileId||state.isContent||setVideoTileId(state.tileId))},videoTileWasRemoved:tileId=>{tileId===videoTileId&&setVideoTileId(null)}};return audioVideo.addObserver(observer),()=>audioVideo.removeObserver(observer)}),[audioVideo,videoTileId,attendeeId]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(!audioVideo)return;const observer={videoTileDidUpdate:state=>{if(!state.isContent||!state.boundAttendeeId||contentTileId)return;new amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DefaultModality(state.boundAttendeeId).base()===attendeeId&&setContentTileId(state.tileId)},videoTileWasRemoved:tileId=>{tileId===contentTileId&&setContentTileId(null)}};return audioVideo.addObserver(observer),()=>audioVideo.removeObserver(observer)}),[audioVideo,contentTileId,attendeeId]);return{...audioState,videoEnabled:"number"==typeof videoTileId&&videoTileId>-1,sharingContent:"number"==typeof contentTileId&&contentTileId>-1}}const __WEBPACK_DEFAULT_EXPORT__=useAttendeeStatus;try{useAttendeeStatus.displayName="useAttendeeStatus",useAttendeeStatus.__docgenInfo={description:"",displayName:"useAttendeeStatus",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/sdk/useAttendeeStatus.tsx#useAttendeeStatus"]={docgenInfo:useAttendeeStatus.__docgenInfo,name:"useAttendeeStatus",path:"src/hooks/sdk/useAttendeeStatus.tsx#useAttendeeStatus"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useClickOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useClickOutside(ref,onClickOutside){const onMouseDown=e=>{(e=>!!ref.current&&!ref.current.contains(e.target))(e)&&onClickOutside&&onClickOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("mousedown",onMouseDown),document.addEventListener("touchstart",onMouseDown),()=>{document.removeEventListener("mousedown",onMouseDown),document.removeEventListener("touchstart",onMouseDown)})))}},"./src/hooks/useTabOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useTabOutside(ref,onTabOutside){const keyUp=e=>{if(9===e.keyCode&&ref.current&&!ref.current.contains(document.activeElement))return onTabOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("keyup",keyUp),()=>{document.removeEventListener("keyup",keyUp)})))}},"./src/components/sdk/RosterAttendee/RosterAttendee.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/sdk/RosterAttendee/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"SDK Components/RosterAttendee"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"rosterattendee",children:"RosterAttendee"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"RosterAttendee"})," component renders a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/ui-components-roster--page",children:"RosterCell"})," for a given attendee. It will display the attendee's name along with their mute, video, and content share status."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You have to provide the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MeetingManager"})," with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"getAttendee"})," function in order to get names. See the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/sdk-providers-meetingmanager--page",children:"MeetingManager"})," for more information."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { RosterAttendee } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport {\n  MeetingProvider,\n  RosterAttendee\n} from 'amazon-chime-sdk-component-library-react';\n\nconst App = () => {\n  return (\n    <MeetingProvider>\n      <RosterAttendee attendeeId=\"some-chime-attendee-id\" />\n    </MeetingProvider>\n  );\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ov,{of:___WEBPACK_IMPORTED_MODULE_2__.K})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
//# sourceMappingURL=components-sdk-RosterAttendee-RosterAttendee-mdx.9c93415b.iframe.bundle.js.map