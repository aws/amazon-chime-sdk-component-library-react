"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[3342],{"./src/components/ui/VideoGrid/VideoGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_VideoGrid:()=>_VideoGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/VideoGrid/index.tsx"),_VideoTile__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/VideoTile/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI Components/Video/VideoGrid",component:___WEBPACK_IMPORTED_MODULE_1__.Ay,parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\n\nimport VideoGrid from './';\nimport VideoTile from '../VideoTile';\n\nexport default {\n  title: 'UI Components/Video/VideoGrid',\n  component: VideoGrid,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport const _VideoGrid = (args) => {\n  const tiles = new Array(args.size).fill(0).map((_, index) => {\n    const isFeatured = args.layout === 'featured' && index === 0;\n    return (\n      <VideoTile\n        style={{\n          border: '1px solid grey',\n          gridArea: isFeatured ? 'ft' : '',\n        }}\n        nameplate={isFeatured ? 'Featured tile' : `Tile ${index + 1}`}\n        key={index}\n      />\n    );\n  });\n\n  return (\n    <div style={{ padding: '1rem', height: '100vh', boxSizing: 'border-box' }}>\n      <VideoGrid layout={args.layout}>{tiles}</VideoGrid>\n    </div>\n  );\n};\n\n_VideoGrid.argTypes = {\n  size: { control: 'number' },\n  layout: { control: 'select', options: ['standard', 'featured'] },\n};\n\n_VideoGrid.args = {\n  size: 4,\n  layout: 'standard',\n};\n\n_VideoGrid.story = {\n  name: 'VideoGrid',\n};\n",locationsMap:{"video-grid":{startLoc:{col:26,line:17},endLoc:{col:1,line:37},startBody:{col:26,line:17},endBody:{col:1,line:37}}}},layout:"fullscreen"}},_VideoGrid=args=>{const tiles=new Array(args.size).fill(0).map(((_,index)=>{const isFeatured="featured"===args.layout&&0===index;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_VideoTile__WEBPACK_IMPORTED_MODULE_2__.A,{style:{border:"1px solid grey",gridArea:isFeatured?"ft":""},nameplate:isFeatured?"Featured tile":`Tile ${index+1}`},index)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{padding:"1rem",height:"100vh",boxSizing:"border-box"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Ay,{layout:args.layout,children:tiles})})};_VideoGrid.displayName="_VideoGrid",_VideoGrid.argTypes={size:{control:"number"},layout:{control:"select",options:["standard","featured"]}},_VideoGrid.args={size:4,layout:"standard"},_VideoGrid.story={name:"VideoGrid"},_VideoGrid.parameters={..._VideoGrid.parameters,docs:{..._VideoGrid.parameters?.docs,source:{originalSource:"args => {\n  const tiles = new Array(args.size).fill(0).map((_, index) => {\n    const isFeatured = args.layout === 'featured' && index === 0;\n    return <VideoTile style={{\n      border: '1px solid grey',\n      gridArea: isFeatured ? 'ft' : ''\n    }} nameplate={isFeatured ? 'Featured tile' : `Tile ${index + 1}`} key={index} />;\n  });\n  return <div style={{\n    padding: '1rem',\n    height: '100vh',\n    boxSizing: 'border-box'\n  }}>\n      <VideoGrid layout={args.layout}>{tiles}</VideoGrid>\n    </div>;\n}",..._VideoGrid.parameters?.docs?.source}}};const __namedExportsOrder=["_VideoGrid"];try{_VideoGrid.displayName="_VideoGrid",_VideoGrid.__docgenInfo={description:"",displayName:"_VideoGrid",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/VideoGrid/VideoGrid.stories.tsx#_VideoGrid"]={docgenInfo:_VideoGrid.__docgenInfo,name:"_VideoGrid",path:"src/components/ui/VideoGrid/VideoGrid.stories.tsx#_VideoGrid"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)}}]);