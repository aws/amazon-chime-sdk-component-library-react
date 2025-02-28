"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[8914],{"./src/components/ui/ContentTile/ContentTile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_ContentTile:()=>_ContentTile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/ContentTile/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport { ContentTile } from './';\n\nexport default {\n  title: 'UI Components/Video/ContentTile',\n  component: ContentTile,\n};\n\nexport const _ContentTile = (args) => {\n  return (\n    <div style={{ height: '30rem', width: '50rem', margin: '2rem auto' }}>\n      <ContentTile {...args} />\n    </div>\n  );\n};\n\n_ContentTile.argTypes = {\n  nameplate: { control: 'text' },\n  objectFit: { table: { disable: true } },\n  theme: { table: { disable: true } },\n  as: { table: { disable: true } },\n  forwardedAs: { table: { disable: true } },\n};\n\n_ContentTile.args = {\n  nameplate: 'Content share',\n};\n\n_ContentTile.story = {\n  name: 'ContentTile',\n};\n",locationsMap:{"content-tile":{startLoc:{col:28,line:12},endLoc:{col:1,line:18},startBody:{col:28,line:12},endBody:{col:1,line:18}}}}},title:"UI Components/Video/ContentTile",component:___WEBPACK_IMPORTED_MODULE_1__.W},_ContentTile=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{height:"30rem",width:"50rem",margin:"2rem auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.W,{...args})});_ContentTile.displayName="_ContentTile",_ContentTile.argTypes={nameplate:{control:"text"},objectFit:{table:{disable:!0}},theme:{table:{disable:!0}},as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}}},_ContentTile.args={nameplate:"Content share"},_ContentTile.story={name:"ContentTile"},_ContentTile.parameters={..._ContentTile.parameters,docs:{..._ContentTile.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    height: '30rem',\n    width: '50rem',\n    margin: '2rem auto'\n  }}>\n      <ContentTile {...args} />\n    </div>;\n}",..._ContentTile.parameters?.docs?.source}}};const __namedExportsOrder=["_ContentTile"];try{_ContentTile.displayName="_ContentTile",_ContentTile.__docgenInfo={description:"",displayName:"_ContentTile",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ContentTile/ContentTile.stories.tsx#_ContentTile"]={docgenInfo:_ContentTile.__docgenInfo,name:"_ContentTile",path:"src/components/ui/ContentTile/ContentTile.stories.tsx#_ContentTile"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/ContentTile/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,W:()=>ContentTile});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ui_VideoTile__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ui/VideoTile/index.tsx");const ContentTile=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_ui_VideoTile__WEBPACK_IMPORTED_MODULE_0__._)`
  background-color: ${({theme})=>theme.colors.greys.grey80};
`,__WEBPACK_DEFAULT_EXPORT__=ContentTile;try{ContentTile.displayName="ContentTile",ContentTile.__docgenInfo={description:"",displayName:"ContentTile",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ContentTile/index.tsx#ContentTile"]={docgenInfo:ContentTile.__docgenInfo,name:"ContentTile",path:"src/components/ui/ContentTile/index.tsx#ContentTile"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/VideoTile/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>VideoTile,A:()=>ui_VideoTile});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledVideoTile=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
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
`;try{StyledVideoTile.displayName="StyledVideoTile",StyledVideoTile.__docgenInfo={description:"",displayName:"StyledVideoTile",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/VideoTile/Styled.tsx#StyledVideoTile"]={docgenInfo:StyledVideoTile.__docgenInfo,name:"StyledVideoTile",path:"src/components/ui/VideoTile/Styled.tsx#StyledVideoTile"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VideoTile=(0,react.forwardRef)(((props,ref)=>{const{tag,className,nameplate,...rest}=props;return(0,jsx_runtime.jsxs)(StyledVideoTile,{as:tag,className:className||"","data-testid":"video-tile",...rest,children:[(0,jsx_runtime.jsx)("video",{ref,className:"ch-video"}),nameplate&&(0,jsx_runtime.jsx)("header",{className:"ch-nameplate",children:(0,jsx_runtime.jsx)("p",{className:"ch-text",children:nameplate})})]})})),ui_VideoTile=VideoTile;try{VideoTile.displayName="VideoTile",VideoTile.__docgenInfo={description:"",displayName:"VideoTile",props:{nameplate:{defaultValue:null,description:"The name to show on the video tile",name:"nameplate",required:!1,type:{name:"string | undefined"}},objectFit:{defaultValue:null,description:"Specifies which CSS object-fit value to apply to the VideoTile so that it resizes to fit its container",name:"objectFit",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"fill"'},{value:'"none"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/VideoTile/index.tsx#VideoTile"]={docgenInfo:VideoTile.__docgenInfo,name:"VideoTile",path:"src/components/ui/VideoTile/index.tsx#VideoTile"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-ui-ContentTile-ContentTile-stories.a79ade2e.iframe.bundle.js.map