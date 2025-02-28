(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[2569,9179],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ui/Chat/InfiniteList/InfiniteList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicInfiniteList:()=>BasicInfiniteList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Flex/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Chat/InfiniteList/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React, { useState } from 'react';\n\nimport Flex from '../../Flex';\nimport InfiniteList from './';\n\nexport default {\n  title: 'UI Components/Chat/InfiniteList',\n  component: InfiniteList,\n};\n\nexport const BasicInfiniteList = () => {\n  // All of the below code is just to fake an API call that would return a new batch of messages\n  const [batchNumber, setBatchNumber] = useState(2);\n  const numberOfBatches = 5;\n  const batchSize = 50;\n\n  const createBatch = (batchNum) => {\n    if (batchNum <= numberOfBatches) {\n      const batch: JSX.Element[] = [];\n      for (let i = 1; i <= batchSize; i++) {\n        batch.push(\n          <div\n            style={{\n              border: '1px solid #3f4149',\n              textAlign: 'center',\n              backgroundColor: '#075fff',\n              color: 'white',\n              padding: '0.5rem',\n            }}\n          >\n            {(batchSize * (numberOfBatches - batchNum) + 1 + i - 1).toString()}\n          </div>\n        );\n      }\n      return batch;\n    } else {\n      console.log('No more messages to send.');\n      return [];\n    }\n  };\n\n  const [isLoading, setIsLoading] = useState(false);\n  const [items, setItems] = useState([...createBatch(1)]);\n\n  const onLoad = async () => {\n    setIsLoading(true);\n    setTimeout(() => {\n      setBatchNumber(batchNumber + 1);\n      setItems([...createBatch(batchNumber), ...items]);\n      setIsLoading(false);\n    }, 500);\n  };\n\n  return (\n    <Flex css=\"height: unset; display: flex; justify-content: center;\">\n      <InfiniteList\n        items={items}\n        onLoad={onLoad}\n        css=\"border: 1px solid #3f4149; width: 10rem; height: 20rem\"\n        isLoading={isLoading}\n      />\n    </Flex>\n  );\n};\n\nBasicInfiniteList.story = {\n  name: 'Basic InfiniteList',\n};\n",locationsMap:{"basic-infinite-list":{startLoc:{col:33,line:14},endLoc:{col:1,line:67},startBody:{col:33,line:14},endBody:{col:1,line:67}}}}},title:"UI Components/Chat/InfiniteList",component:___WEBPACK_IMPORTED_MODULE_2__.A},BasicInfiniteList=()=>{const[batchNumber,setBatchNumber]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),createBatch=batchNum=>{if(batchNum<=5){const batch=[];for(let i=1;i<=50;i++)batch.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{border:"1px solid #3f4149",textAlign:"center",backgroundColor:"#075fff",color:"white",padding:"0.5rem"},children:(50*(5-batchNum)+1+i-1).toString()}));return batch}return console.log("No more messages to send."),[]},[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[items,setItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([...createBatch(1)]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{css:"height: unset; display: flex; justify-content: center;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{items,onLoad:async()=>{setIsLoading(!0),setTimeout((()=>{setBatchNumber(batchNumber+1),setItems([...createBatch(batchNumber),...items]),setIsLoading(!1)}),500)},css:"border: 1px solid #3f4149; width: 10rem; height: 20rem",isLoading})})};BasicInfiniteList.displayName="BasicInfiniteList",BasicInfiniteList.story={name:"Basic InfiniteList"},BasicInfiniteList.parameters={...BasicInfiniteList.parameters,docs:{...BasicInfiniteList.parameters?.docs,source:{originalSource:"() => {\n  // All of the below code is just to fake an API call that would return a new batch of messages\n  const [batchNumber, setBatchNumber] = useState(2);\n  const numberOfBatches = 5;\n  const batchSize = 50;\n  const createBatch = batchNum => {\n    if (batchNum <= numberOfBatches) {\n      const batch: JSX.Element[] = [];\n      for (let i = 1; i <= batchSize; i++) {\n        batch.push(<div style={{\n          border: '1px solid #3f4149',\n          textAlign: 'center',\n          backgroundColor: '#075fff',\n          color: 'white',\n          padding: '0.5rem'\n        }}>\n            {(batchSize * (numberOfBatches - batchNum) + 1 + i - 1).toString()}\n          </div>);\n      }\n      return batch;\n    } else {\n      console.log('No more messages to send.');\n      return [];\n    }\n  };\n  const [isLoading, setIsLoading] = useState(false);\n  const [items, setItems] = useState([...createBatch(1)]);\n  const onLoad = async () => {\n    setIsLoading(true);\n    setTimeout(() => {\n      setBatchNumber(batchNumber + 1);\n      setItems([...createBatch(batchNumber), ...items]);\n      setIsLoading(false);\n    }, 500);\n  };\n  return <Flex css=\"height: unset; display: flex; justify-content: center;\">\n      <InfiniteList items={items} onLoad={onLoad} css=\"border: 1px solid #3f4149; width: 10rem; height: 20rem\" isLoading={isLoading} />\n    </Flex>;\n}",...BasicInfiniteList.parameters?.docs?.source}}};const __namedExportsOrder=["BasicInfiniteList"]},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Chat/InfiniteList/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Chat_InfiniteList});var react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./src/components/ui/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const rotate=styled_components_browser_esm.i7`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,StyledInfiniteList=styled_components_browser_esm.Ay.ul.withConfig(style.P6)`
  background-color: ${props=>props.theme.chatBubble.container.bgd};
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  /* disable scrolling while fetching */
  &.ch-not-scrollable {
    overflow-y: hidden;
  }

  ${Base.d}
  ${Base.i}

  .ch-spinner {
    margin: 0 auto;
  }

  .ch-spinner svg {
    width: 2rem;
    height: 2rem;
    animation: ${rotate} 2s linear infinite;
    display: block;
  }
`;try{StyledInfiniteList.displayName="StyledInfiniteList",StyledInfiniteList.__docgenInfo={description:"",displayName:"StyledInfiniteList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/InfiniteList/Styled.tsx#StyledInfiniteList"]={docgenInfo:StyledInfiniteList.__docgenInfo,name:"StyledInfiniteList",path:"src/components/ui/Chat/InfiniteList/Styled.tsx#StyledInfiniteList"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InfiniteList=props=>{const{isLoading,onLoad,items}=props,listEnd=(0,react.useRef)(null),currentTopItemRef=(0,react.useRef)(null),firstNew=(0,react.useRef)(null),prevLength=(0,react.useRef)(items.length),newLength=(0,react.useRef)(0),onLoadRef=(0,react.useRef)(onLoad);onLoadRef.current=onLoad;const[atBottom,setAtBottom]=(0,react.useState)(!1);(0,react.useEffect)((()=>{firstNew.current?.scrollIntoView()}),[items.length]);const topObserver=new IntersectionObserver((entries=>{entries[0].isIntersecting&&onLoadRef.current()}),{threshold:1});(0,react.useEffect)((()=>(listEnd.current?.scrollIntoView(),currentTopItemRef.current&&topObserver.observe(currentTopItemRef.current),()=>{currentTopItemRef.current&&topObserver.unobserve(currentTopItemRef.current)})),[]),items.length!==prevLength.current&&(prevLength.current=newLength.current),newLength.current=items.length;const newBottom=(0,react.useRef)(null);let prevBottom;const messageList=items.map(((item,i)=>{return(0,jsx_runtime.jsx)("li",{id:i.toString(),ref:0===i?currentTopItemRef:(index=i,index===newLength.current-1?newBottom:index===items.length-prevLength.current-1&&isLoading&&items.length!==prevLength.current?firstNew:null),role:"article",children:item},i);var index})),bottomObserver=new IntersectionObserver((entries=>{const entry=entries[0];setAtBottom(entry.isIntersecting)}),{threshold:0});return(0,react.useEffect)((()=>(atBottom&&listEnd.current&&listEnd.current.scrollIntoView(),prevBottom=newBottom.current,prevBottom&&bottomObserver.unobserve(prevBottom),newBottom.current&&(bottomObserver.observe(newBottom.current),prevBottom=newBottom.current),()=>{prevBottom&&bottomObserver.unobserve(prevBottom)})),[items.length]),(0,jsx_runtime.jsxs)(StyledInfiniteList,{...props,className:""+(isLoading?"ch-not-scrollable":""),"data-testid":"infinite-list","aria-busy":!!isLoading,role:"feed",children:[isLoading&&(0,jsx_runtime.jsx)("li",{className:"ch-spinner",children:(0,jsx_runtime.jsx)(icons.y$,{})}),messageList,(0,jsx_runtime.jsx)("div",{ref:listEnd})]})};InfiniteList.displayName="InfiniteList";const Chat_InfiniteList=InfiniteList;try{InfiniteList.displayName="InfiniteList",InfiniteList.__docgenInfo={description:"",displayName:"InfiniteList",props:{onLoad:{defaultValue:null,description:"",name:"onLoad",required:!0,type:{name:"() => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode[]"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/InfiniteList/index.tsx#InfiniteList"]={docgenInfo:InfiniteList.__docgenInfo,name:"InfiniteList",path:"src/components/ui/Chat/InfiniteList/index.tsx#InfiniteList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_k:()=>_light__WEBPACK_IMPORTED_MODULE_0__._,a5:()=>_dark__WEBPACK_IMPORTED_MODULE_1__.a,kH:()=>_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__.k});var _light__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/light.ts"),_dark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/dark.ts"),_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/theme/StyledReset.ts"),__webpack_require__("./src/theme/GlobalStyles.ts"))},"./src/components/ui/Chat/InfiniteList/InfiniteList.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Flex/index.tsx"),_theme___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/index.ts"),_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/theme/GlobalStyles.ts"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/Chat/InfiniteList/index.tsx"),_InfiniteList_stories_tsx__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/ui/Chat/InfiniteList/InfiniteList.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.W8,{of:_InfiniteList_stories_tsx__WEBPACK_IMPORTED_MODULE_6__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"infinitelist",children:"InfiniteList"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The InfiniteList component populates a list with elements. The list then handles loading more elements when the user scrolls to the top.\nThe InfiniteList initially scrolls the newest (bottom) item into view upon load. It also ensures the most recent new items is loaded into the top of the visible list and scrolling is disabled while loading the new batch."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { InfiniteList } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_9__.NP,{theme:_theme___WEBPACK_IMPORTED_MODULE_3__._k,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.k,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_2__.A,{layout:"fill-space-centered",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_InfiniteList_stories_tsx__WEBPACK_IMPORTED_MODULE_6__.BasicInfiniteList,{})})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"<InfiniteList\n  items={[<span>1</span>, ...]}\n  handleLoad={fetchItems}\n  batchSize={50}\n/>\n\n<InfiniteList\n  items={items}\n  handleLoad={fetchItems}\n  batchSize={50}\n/>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.ov,{of:___WEBPACK_IMPORTED_MODULE_5__.A})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
//# sourceMappingURL=components-ui-Chat-InfiniteList-InfiniteList-mdx.e5bc63dd.iframe.bundle.js.map