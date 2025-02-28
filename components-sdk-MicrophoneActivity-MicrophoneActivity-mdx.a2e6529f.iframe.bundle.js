(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[1866],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/sdk/MicrophoneActivity/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>MicrophoneActivity,A:()=>sdk_MicrophoneActivity});var react=__webpack_require__("./node_modules/react/index.js"),useAttendeeAudioStatus=__webpack_require__("./src/hooks/sdk/useAttendeeAudioStatus.tsx"),AudioVideoProvider=__webpack_require__("./src/providers/AudioVideoProvider/index.tsx"),Microphone=__webpack_require__("./src/components/ui/icons/Microphone/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledMicVolumeIndicator=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
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
`;try{StyledMicVolumeIndicator.displayName="StyledMicVolumeIndicator",StyledMicVolumeIndicator.__docgenInfo={description:"",displayName:"StyledMicVolumeIndicator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/MicVolumeIndicator/Styled.tsx#StyledMicVolumeIndicator"]={docgenInfo:StyledMicVolumeIndicator.__docgenInfo,name:"StyledMicVolumeIndicator",path:"src/components/ui/MicVolumeIndicator/Styled.tsx#StyledMicVolumeIndicator"})}catch(__react_docgen_typescript_loader_error){}try{Styled.displayName="Styled",Styled.__docgenInfo={description:"",displayName:"Styled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/MicVolumeIndicator/Styled.tsx#Styled"]={docgenInfo:Styled.__docgenInfo,name:"Styled",path:"src/components/ui/MicVolumeIndicator/Styled.tsx#Styled"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MicVolumeIndicator=(0,react.forwardRef)((({muted=!1,signalStrength,className:propClassName,...rest},bgRef)=>{const poorConnection=void 0!==signalStrength&&signalStrength<=.5,className=propClassName?`${propClassName} ch-mic-volume-indicator`:"ch-mic-volume-indicator";return(0,jsx_runtime.jsxs)(StyledMicVolumeIndicator,{className,signalStrength,muted,...rest,children:[(0,jsx_runtime.jsx)(Microphone.A,{muted,className:"ch-mic-icon",poorConnection}),(0,jsx_runtime.jsx)("div",{className:"ch-bg-volume-wrapper",children:(0,jsx_runtime.jsx)("div",{ref:bgRef,className:"ch-bg-volume-fill","data-testid":"volume-fill"})})]})})),ui_MicVolumeIndicator=MicVolumeIndicator;try{MicVolumeIndicator.displayName="MicVolumeIndicator",MicVolumeIndicator.__docgenInfo={description:"",displayName:"MicVolumeIndicator",props:{muted:{defaultValue:{value:"false"},description:"",name:"muted",required:!1,type:{name:"boolean | undefined"}},signalStrength:{defaultValue:null,description:"",name:"signalStrength",required:!0,type:{name:"number | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/MicVolumeIndicator/index.tsx#MicVolumeIndicator"]={docgenInfo:MicVolumeIndicator.__docgenInfo,name:"MicVolumeIndicator",path:"src/components/ui/MicVolumeIndicator/index.tsx#MicVolumeIndicator"})}catch(__react_docgen_typescript_loader_error){}const MicrophoneActivity=({attendeeId,...rest})=>{const audioVideo=(0,AudioVideoProvider.n3)(),bgEl=(0,react.useRef)(null),{signalStrength,muted}=(0,useAttendeeAudioStatus.A)(attendeeId);return(0,react.useEffect)((()=>{if(!audioVideo||!attendeeId||!bgEl.current)return;const callback=(_,volume,__,___)=>{bgEl.current&&(bgEl.current.style.transform=`scaleY(${volume})`)};return audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId,callback),()=>audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId,callback)}),[attendeeId]),(0,jsx_runtime.jsx)(ui_MicVolumeIndicator,{...rest,ref:bgEl,muted,signalStrength})};MicrophoneActivity.displayName="MicrophoneActivity";const sdk_MicrophoneActivity=MicrophoneActivity;try{MicrophoneActivity.displayName="MicrophoneActivity",MicrophoneActivity.__docgenInfo={description:"",displayName:"MicrophoneActivity",props:{attendeeId:{defaultValue:null,description:"The Chime attendee ID",name:"attendeeId",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/MicrophoneActivity/index.tsx#MicrophoneActivity"]={docgenInfo:MicrophoneActivity.__docgenInfo,name:"MicrophoneActivity",path:"src/components/sdk/MicrophoneActivity/index.tsx#MicrophoneActivity"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/icons/Microphone/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>icons_Microphone});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Svg=__webpack_require__("./src/components/ui/icons/Svg.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgWithoutMicrophoneProps=({poorConnection,muted,...rest})=>(0,jsx_runtime.jsx)(Svg.A,{...rest});SvgWithoutMicrophoneProps.displayName="SvgWithoutMicrophoneProps";const StyledSvg=(0,styled_components_browser_esm.Ay)(SvgWithoutMicrophoneProps).withConfig(style.P6)`
  ${props=>props.poorConnection?`color: ${props.theme.colors.error.light}`:""}
`;try{StyledSvg.displayName="StyledSvg",StyledSvg.__docgenInfo={description:"",displayName:"StyledSvg",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Microphone/Styled.tsx#StyledSvg"]={docgenInfo:StyledSvg.__docgenInfo,name:"StyledSvg",path:"src/components/ui/icons/Microphone/Styled.tsx#StyledSvg"})}catch(__react_docgen_typescript_loader_error){}const Microphone=({muted=!1,poorConnection=!1,mutedTitle="Muted microphone",unmutedTitle="Microphone",...rest})=>{const iconPath=function getPath(muted,poorConnection){return muted?poorConnection?"M4.146 4.146c.196-.195.513-.195.708 0L9.168 8.46h.018l.813.815v.018l5.854 5.854c.002-.005.005-.008.008-.01l.724.724-.008.01 3.276 3.275c.195.195.195.512 0 .707-.098.098-.226.147-.354.147-.127 0-.255-.049-.352-.146l-3.281-3.281C14.82 17.459 13.475 18 11.998 18c-3.308 0-6-2.691-6-6 0-.277.224-.5.5-.5.278 0 .5.223.5.5 0 2.757 2.244 5 5 5 1.2 0 2.29-.436 3.147-1.146l-1.439-1.438c-.14.105-.287.207-.445.285l-.447-.895c.062-.03.116-.073.174-.11l-2.99-2.989v.941H9v-1.063h.88L4.147 4.853c-.196-.194-.196-.511 0-.707zM14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm3-7.5c.276 0 .5.224.5.5 0 1.106-.307 2.14-.83 3.031l-.748-.748c.357-.687.578-1.456.578-2.283 0-.276.224-.5.5-.5zm-6.293 2.317c.25.121.517.183.793.183l.016 1.001-.098-.008c-.359-.012-.76-.089-1.147-.275zm-1.085-1.278c.093.282.234.536.42.757l-.766.644c-.267-.319-.47-.685-.603-1.089zM15 11.618v.155c0 .325-.051.643-.139.95l-.867-.868c.001-.027.006-.055.006-.082v-.155h1zm0-2.126v1.062h-1V9.492h1zm0-2.125v1.062h-1V7.367h1zM9.155 6.201l.955.297c-.073.235-.11.48-.11.73v.17h-.463l-.512-.512c.024-.232.061-.463.13-.685zm5.079-1.128c.268.321.469.689.599 1.093l-.951.307c-.091-.283-.231-.537-.415-.759zm-3.514-.765l.453.891c-.246.126-.474.312-.656.535l-.776-.63c.274-.338.603-.604.979-.796zM12 4c.434 0 .853.098 1.245.29l-.44.897C12.553 5.064 12.282 5 12 5l-.031-1z":"M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zM4.146 4.146c.196-.195.512-.195.708 0l15 15c.195.196.195.512 0 .708-.098.097-.226.146-.354.146-.128 0-.256-.049-.354-.146l-3.282-3.283C14.819 17.458 13.475 18 12 18c-3.309 0-6-2.691-6-6 0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5 1.199 0 2.288-.437 3.146-1.146l-1.452-1.453c-.483.366-1.058.599-1.694.599-1.654 0-3-1.448-3-3.228V9.707L4.146 4.854c-.195-.196-.195-.512 0-.708zM17.5 11.5c.276 0 .5.224.5.5 0 1.112-.31 2.152-.84 3.046l-.747-.746c.362-.693.587-1.467.587-2.3 0-.276.224-.5.5-.5zm-7.5-.793v1.065c0 1.229.897 2.228 2 2.228.362 0 .7-.111.992-.301L10 10.707zm2-6.708c1.654 0 3 1.45 3 3.228v4.546c0 .337-.062.655-.151.962l-.859-.858.01-.104V7.228C14 5.998 13.103 5 12 5s-2 .998-2 2.228v.658l-.971-.97C9.178 5.284 10.445 3.998 12 3.998z":poorConnection?"M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5zm3-7.5c.276 0 .5.224.5.5 0 3.309-2.691 6-6 6s-6-2.691-6-6c0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.276.224-.5.5-.5zm-6.293 2.318c.25.12.517.183.793.183l.013.958v-.46l.085.492H12.014c-.486-.002-.876-.096-1.242-.274l.435-.9zm2.268-.543l.77.637c-.275.335-.606.6-.983.79l-.447-.896c.25-.125.473-.303.66-.53zm-3.353-.736c.093.283.235.537.42.757l-.765.645c-.268-.32-.472-.687-.604-1.09l.949-.312zM15 11.619v.155c0 .359-.053.71-.16 1.043l-.953-.305c.075-.233.113-.482.113-.738v-.155h1zm-5-1.033v1.063H9v-1.063h1zm5-1.093v1.063h-1V9.492h1zm-5-1.03v1.062H9V8.46h1zm5-1.095V8.43h-1V7.367h1zM9.156 6.2l.955.3c-.074.232-.111.478-.111.728v.17H9v-.17c0-.351.053-.696.156-1.027zm5.08-1.127c.267.32.468.688.598 1.093l-.951.306c-.091-.282-.23-.537-.415-.759l.768-.64zm-3.516-.766l.453.891c-.246.126-.473.311-.656.535l-.775-.63c.273-.337.602-.603.978-.795zM12 4c.433 0 .852.098 1.245.29l-.44.899C12.55 5.064 12.28 5 12 5l-.031-1h.03z":"M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm3-7.5c.276 0 .5.224.5.5 0 3.309-2.691 6-6 6s-6-2.691-6-6c0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.276.224-.5.5-.5zM12 4c1.654 0 3 1.448 3 3.227v4.546C15 13.552 13.654 15 12 15s-3-1.448-3-3.227V7.227C9 5.447 10.346 4 12 4zm0 1c-1.103 0-2 .999-2 2.227v4.546C10 13 10.897 14 12 14s2-1 2-2.227V7.227C14 5.999 13.103 5 12 5z"}(muted,poorConnection);return(0,jsx_runtime.jsx)(StyledSvg,{...rest,muted,poorConnection,title:muted?mutedTitle:unmutedTitle,"data-testid":poorConnection?"poor-connection-mic":"good-connection-mic",children:(0,jsx_runtime.jsx)("path",{d:iconPath})})};Microphone.displayName="Microphone",Microphone.displayName="Microphone";const icons_Microphone=Microphone;try{Microphone.displayName="Microphone",Microphone.__docgenInfo={description:"",displayName:"Microphone",props:{muted:{defaultValue:{value:"false"},description:"Whether or not should show muted status.",name:"muted",required:!1,type:{name:"boolean | undefined"}},poorConnection:{defaultValue:{value:"false"},description:"Whether or not should show poor connected status.",name:"poorConnection",required:!1,type:{name:"boolean | undefined"}},mutedTitle:{defaultValue:{value:"Muted microphone"},description:"Title attribute for the icon when muted, it defaults to `Muted microphone`",name:"mutedTitle",required:!1,type:{name:"string | undefined"}},unmutedTitle:{defaultValue:{value:"Microphone"},description:"Title attribute for the icon when unmuted, it defaults to `Microphone`",name:"unmutedTitle",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:null,description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Microphone/index.tsx#Microphone"]={docgenInfo:Microphone.__docgenInfo,name:"Microphone",path:"src/components/ui/icons/Microphone/index.tsx#Microphone"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Svg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Svg=({className,children,viewBox="0 0 24 24",xmlns="http://www.w3.org/2000/svg",width,height,title,...otherProps})=>{const styles={width,height};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns,className:`Svg ${className||""}`,height,style:styles,viewBox,width,...otherProps,children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title",{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{fillRule:"evenodd",fill:"currentColor",children})]})};Svg.displayName="Svg";const __WEBPACK_DEFAULT_EXPORT__=Svg;try{Svg.displayName="Svg",Svg.__docgenInfo={description:"",displayName:"Svg",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:{value:"0 0 24 24"},description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Svg.tsx#Svg"]={docgenInfo:Svg.__docgenInfo,name:"Svg",path:"src/components/ui/icons/Svg.tsx#Svg"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/sdk/useAttendeeAudioStatus.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/AudioVideoProvider/index.tsx");function useAttendeeAudioStatus(attendeeId){const audioVideo=(0,_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_1__.n3)(),[muted,setMuted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[signalStrength,setSignalStrength]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!audioVideo)return;const callback=(_,__,muted,signalStrength)=>{null!==muted&&setMuted(muted),null!==signalStrength&&setSignalStrength(signalStrength)};return audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId,callback),()=>audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId,callback)}),[audioVideo,attendeeId]),{muted,signalStrength}}const __WEBPACK_DEFAULT_EXPORT__=useAttendeeAudioStatus;try{useAttendeeAudioStatus.displayName="useAttendeeAudioStatus",useAttendeeAudioStatus.__docgenInfo={description:"",displayName:"useAttendeeAudioStatus",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/sdk/useAttendeeAudioStatus.tsx#useAttendeeAudioStatus"]={docgenInfo:useAttendeeAudioStatus.__docgenInfo,name:"useAttendeeAudioStatus",path:"src/hooks/sdk/useAttendeeAudioStatus.tsx#useAttendeeAudioStatus"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/MicrophoneActivity/MicrophoneActivity.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/sdk/MicrophoneActivity/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"SDK Components/MicrophoneActivity"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"microphoneactivity",children:"MicrophoneActivity"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MicrophoneActivity"})," component renders a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Microphone"})," icon that displays the audio activity for a given attendee.\nIt will update to match the attendee's mute and signal strength status."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { MicrophoneActivity } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport {\n  MeetingProvider,\n  MicrophoneActivity\n} from 'amazon-chime-sdk-component-library-react';\n\nconst App = () => {\n  return (\n    <MeetingProvider>\n      <MicrophoneActivity attendeeId=\"some-chime-attendee-id\" />\n    </MeetingProvider>\n  );\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ov,{of:___WEBPACK_IMPORTED_MODULE_2__.g})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
//# sourceMappingURL=components-sdk-MicrophoneActivity-MicrophoneActivity-mdx.a2e6529f.iframe.bundle.js.map