(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[526],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/sdk/RemoteVideo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>RemoteVideo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_useApplyVideoObjectFit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useApplyVideoObjectFit/index.tsx"),_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/AudioVideoProvider/index.tsx"),_ui_VideoTile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/VideoTile/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RemoteVideo=({name,className,tileId,...rest})=>{const audioVideo=(0,_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_2__.n3)(),videoEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,_hooks_useApplyVideoObjectFit__WEBPACK_IMPORTED_MODULE_1__.F)(videoEl),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(audioVideo&&videoEl.current)return audioVideo.bindVideoElement(tileId,videoEl.current),()=>{audioVideo.getVideoTile(tileId)&&audioVideo.unbindVideoElement(tileId)}}),[audioVideo,tileId]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_VideoTile__WEBPACK_IMPORTED_MODULE_3__._,{...rest,ref:videoEl,nameplate:name,className:`ch-remote-video--${tileId} ${className||""}`})};RemoteVideo.displayName="RemoteVideo";try{RemoteVideo.displayName="RemoteVideo",RemoteVideo.__docgenInfo={description:"",displayName:"RemoteVideo",props:{tileId:{defaultValue:null,description:"The tile ID to bind the video element to",name:"tileId",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"The name to show on the video's nameplate",name:"name",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/RemoteVideo/index.tsx#RemoteVideo"]={docgenInfo:RemoteVideo.__docgenInfo,name:"RemoteVideo",path:"src/components/sdk/RemoteVideo/index.tsx#RemoteVideo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/VideoTile/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>VideoTile,A:()=>ui_VideoTile});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledVideoTile=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
  height: 100%;
  width: 100%;
  position: relative;
  background: ${props=>props.theme.colors.greys.grey100};

  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: ${props=>props.objectFit||"cover"};
  }

  .ch-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    background-color: papayawhip; /* TODO: figure out what this is supposed to be */
    margin-right: 0.5rem;
    flex: 0 0 1.5rem;
  }

  .ch-nameplate {
    backdrop-filter: blur(20px);
    background-color: rgba(46, 47, 52, 0.85);
    border-radius: 0.25rem;
    bottom: 0.5rem;
    color: ${props=>props.theme.colors.greys.white};
    left: 0.5rem;
    max-width: calc(100% - 2rem);
    padding: 0.5rem;
    position: absolute;

    div {
      ${style.gO};
      display: flex;
      align-items: center;
    }

    .ch-text {
      font-size: ${props=>props.theme.fontSizes.text.fontSize};
      ${style.gO};
      margin: 0;
    }
  }

  ${Base.d}
  ${Base.i}
`;try{StyledVideoTile.displayName="StyledVideoTile",StyledVideoTile.__docgenInfo={description:"",displayName:"StyledVideoTile",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/VideoTile/Styled.tsx#StyledVideoTile"]={docgenInfo:StyledVideoTile.__docgenInfo,name:"StyledVideoTile",path:"src/components/ui/VideoTile/Styled.tsx#StyledVideoTile"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VideoTile=(0,react.forwardRef)(((props,ref)=>{const{tag,className,nameplate,...rest}=props;return(0,jsx_runtime.jsxs)(StyledVideoTile,{as:tag,className:className||"","data-testid":"video-tile",...rest,children:[(0,jsx_runtime.jsx)("video",{ref,className:"ch-video"}),nameplate&&(0,jsx_runtime.jsx)("header",{className:"ch-nameplate",children:(0,jsx_runtime.jsx)("p",{className:"ch-text",children:nameplate})})]})})),ui_VideoTile=VideoTile;try{VideoTile.displayName="VideoTile",VideoTile.__docgenInfo={description:"",displayName:"VideoTile",props:{nameplate:{defaultValue:null,description:"The name to show on the video tile",name:"nameplate",required:!1,type:{name:"string | undefined"}},objectFit:{defaultValue:null,description:"Specifies which CSS object-fit value to apply to the VideoTile so that it resizes to fit its container",name:"objectFit",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"fill"'},{value:'"none"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/VideoTile/index.tsx#VideoTile"]={docgenInfo:VideoTile.__docgenInfo,name:"VideoTile",path:"src/components/ui/VideoTile/index.tsx#VideoTile"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useApplyVideoObjectFit/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>useApplyVideoObjectFit});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useApplyVideoObjectFit(videoEl){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{function onLoaded(){if(!videoEl.current)return;const height=videoEl.current.videoHeight,width=videoEl.current.videoWidth;videoEl.current.style.objectFit=height>width?"contain":"cover"}return videoEl.current?.addEventListener("loadedmetadata",onLoaded),()=>videoEl.current?.removeEventListener("loadedmetadata",onLoaded)}),[videoEl])}try{useApplyVideoObjectFit.displayName="useApplyVideoObjectFit",useApplyVideoObjectFit.__docgenInfo={description:"",displayName:"useApplyVideoObjectFit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useApplyVideoObjectFit/index.tsx#useApplyVideoObjectFit"]={docgenInfo:useApplyVideoObjectFit.__docgenInfo,name:"useApplyVideoObjectFit",path:"src/hooks/useApplyVideoObjectFit/index.tsx#useApplyVideoObjectFit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/RemoteVideo/RemoteVideo.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/sdk/RemoteVideo/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",a:"a",h2:"h2",pre:"pre"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"SDK Components/RemoteVideo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"remotevideo",children:"RemoteVideo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"RemoteVideo"})," component renders a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"VideoTile"})," and connects the video to the associated tileId."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note"})," - The binding occurs any time the passed tileId changes. If you are working with a list of tiles, make sure to give each item a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://reactjs.org/docs/lists-and-keys.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"key"})," of the tileId to avoid binding the video unecessarily."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { RemoteVideo } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport {\n  MeetingProvider,\n  RemoteVideo\n} from 'amazon-chime-sdk-component-library-react';\n\nconst App = () => (\n  <MeetingProvider>\n    <MyCustomGrid>\n      <RemoteVideo tileId={2} />\n    </MyCustomGrid>\n  </MeetingProvider>\n);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ov,{of:___WEBPACK_IMPORTED_MODULE_2__.A})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
//# sourceMappingURL=components-sdk-RemoteVideo-RemoteVideo-mdx.1a308a96.iframe.bundle.js.map