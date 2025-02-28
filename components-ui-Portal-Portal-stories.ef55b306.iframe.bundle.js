"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[380],{"./src/components/ui/Portal/Portal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Portal:()=>_Portal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Portal/index.tsx"),_Flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Flex/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport Portal from './';\nimport Flex from '../Flex';\n\nexport default {\n  title: 'UI Components/Portal',\n  component: Portal,\n};\n\nexport const _Portal = (args) => (\n  <Flex layout=\"equal-columns\" style={{ width: '30rem' }}>\n    <Portal rootId={args.rootId}>\n      <div\n        style={{\n          backgroundColor: 'lightgray',\n          padding: '1rem',\n          borderRadius: '0.5rem',\n        }}\n      >\n        Portal content\n      </div>\n    </Portal>\n    <div\n      id=\"root-div-1\"\n      style={{\n        border: '1px solid lightblue',\n        borderRadius: '1rem',\n        padding: '1rem',\n      }}\n    >\n      Root Div 1\n    </div>\n    <div\n      id=\"root-div-2\"\n      style={{\n        border: '1px solid lightgreen',\n        borderRadius: '1rem',\n        padding: '1rem',\n      }}\n    >\n      Root Div 2\n    </div>\n  </Flex>\n);\n\n_Portal.argTypes = {\n  rootId: { control: 'select', options: ['root-div-1', 'root-div-2'] },\n};\n\n_Portal.args = {\n  rootId: 'root-div-1',\n};\n\n_Portal.story = {\n  name: 'Portal',\n};\n",locationsMap:{portal:{startLoc:{col:23,line:13},endLoc:{col:1,line:47},startBody:{col:23,line:13},endBody:{col:1,line:47}}}}},title:"UI Components/Portal",component:___WEBPACK_IMPORTED_MODULE_1__.A},_Portal=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_2__.A,{layout:"equal-columns",style:{width:"30rem"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{rootId:args.rootId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{backgroundColor:"lightgray",padding:"1rem",borderRadius:"0.5rem"},children:"Portal content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"root-div-1",style:{border:"1px solid lightblue",borderRadius:"1rem",padding:"1rem"},children:"Root Div 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"root-div-2",style:{border:"1px solid lightgreen",borderRadius:"1rem",padding:"1rem"},children:"Root Div 2"})]});_Portal.displayName="_Portal",_Portal.argTypes={rootId:{control:"select",options:["root-div-1","root-div-2"]}},_Portal.args={rootId:"root-div-1"},_Portal.story={name:"Portal"},_Portal.parameters={..._Portal.parameters,docs:{..._Portal.parameters?.docs,source:{originalSource:"args => <Flex layout=\"equal-columns\" style={{\n  width: '30rem'\n}}>\n    <Portal rootId={args.rootId}>\n      <div style={{\n      backgroundColor: 'lightgray',\n      padding: '1rem',\n      borderRadius: '0.5rem'\n    }}>\n        Portal content\n      </div>\n    </Portal>\n    <div id=\"root-div-1\" style={{\n    border: '1px solid lightblue',\n    borderRadius: '1rem',\n    padding: '1rem'\n  }}>\n      Root Div 1\n    </div>\n    <div id=\"root-div-2\" style={{\n    border: '1px solid lightgreen',\n    borderRadius: '1rem',\n    padding: '1rem'\n  }}>\n      Root Div 2\n    </div>\n  </Flex>",..._Portal.parameters?.docs?.source}}};const __namedExportsOrder=["_Portal"];try{_Portal.displayName="_Portal",_Portal.__docgenInfo={description:"",displayName:"_Portal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Portal/Portal.stories.tsx#_Portal"]={docgenInfo:_Portal.__docgenInfo,name:"_Portal",path:"src/components/ui/Portal/Portal.stories.tsx#_Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const Portal=({children,rootId})=>{let el,newRoot;const[mount,setMount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(rootId&&(el=document.getElementById(rootId)),el?setMount(el):(newRoot=document.createElement("div"),document.body.appendChild(newRoot),setMount(newRoot)),()=>{newRoot&&newRoot.remove()})),[rootId]),mount?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,mount):null},__WEBPACK_DEFAULT_EXPORT__=Portal;try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{rootId:{defaultValue:null,description:"Specifies the DOM node that the children of the portal will be render into.",name:"rootId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Portal/index.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/ui/Portal/index.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-ui-Portal-Portal-stories.ef55b306.iframe.bundle.js.map