"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[7778],{"./src/components/ui/Flex/docs/Flex.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EqualColumns:()=>EqualColumns,FillSpaceCentered:()=>FillSpaceCentered,StackStory:()=>StackStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Flex/index.tsx"),_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Flex/docs/common.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const commonHiddenArgTypes={alignItems:{table:{disable:!0}},container:{table:{disable:!0}},flexWrap:{table:{disable:!0}},flexDirection:{table:{disable:!0}},flexBasis:{table:{disable:!0}},flexShrink:{table:{disable:!0}},flexGrowth:{table:{disable:!0}},justifyContent:{table:{disable:!0}},style:{table:{disable:!0}},flex:{table:{disable:!0}},flexGrow:{table:{disable:!0}},layout:{table:{disable:!0}}},meta={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport type { Meta, StoryObj } from '@storybook/react';\nimport { Flex } from '..';\nimport { Title, Stack, StackChild, Child } from './common';\n\nconst commonHiddenArgTypes = {\n  alignItems: { table: { disable: true } },\n  container: { table: { disable: true } },\n  flexWrap: { table: { disable: true } },\n  flexDirection: { table: { disable: true } },\n  flexBasis: { table: { disable: true } },\n  flexShrink: { table: { disable: true } },\n  flexGrowth: { table: { disable: true } },\n  justifyContent: { table: { disable: true } },\n  style: { table: { disable: true } },\n  flex: { table: { disable: true } },\n  flexGrow: { table: { disable: true } },\n  layout: { table: { disable: true } },\n};\n\nconst meta: Meta<typeof Flex> = {\n  /* 👇 The title prop is optional.\n   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading\n   * to learn how to generate automatic titles\n   */\n  title: 'UI Components/Flex',\n  component: Flex,\n};\n\ntype Story = StoryObj<typeof Flex>;\n\nexport const FillSpaceCentered: Story = {\n  args: { layout: 'fill-space-centered' },\n  argTypes: { ...commonHiddenArgTypes },\n  render: (args) => {\n    return (\n      <Flex {...args}>\n        <Title>I'm centered</Title>\n      </Flex>\n    );\n  },\n};\n\nexport const EqualColumns: Story = {\n  args: { layout: 'equal-columns' },\n  argTypes: { ...commonHiddenArgTypes },\n  render: (args) => {\n    return (\n      <Flex {...args}>\n        <Child tag=\"article\" />\n        <Child tag=\"article\" />\n        <Child tag=\"article\" />\n        <Child tag=\"article\" />\n      </Flex>\n    );\n  },\n};\n\nexport const StackStory: Story = {\n  args: { layout: 'stack' },\n  argTypes: { ...commonHiddenArgTypes },\n  render: (args) => {\n    return (\n      <Stack {...args}>\n        <StackChild as=\"article\" />\n        <StackChild as=\"article\" />\n        <StackChild as=\"article\" />\n        <StackChild as=\"article\" />\n      </Stack>\n    );\n  },\n};\n\nStackStory.storyName = 'Stack';\n\nexport default meta;\n",locationsMap:{"fill-space-centered":{startLoc:{col:40,line:35},endLoc:{col:1,line:45},startBody:{col:40,line:35},endBody:{col:1,line:45}},"equal-columns":{startLoc:{col:35,line:47},endLoc:{col:1,line:60},startBody:{col:35,line:47},endBody:{col:1,line:60}},"stack-story":{startLoc:{col:33,line:62},endLoc:{col:1,line:75},startBody:{col:33,line:62},endBody:{col:1,line:75}}}}},title:"UI Components/Flex",component:___WEBPACK_IMPORTED_MODULE_1__.s},FillSpaceCentered={args:{layout:"fill-space-centered"},argTypes:{...commonHiddenArgTypes},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.s,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.hE,{children:"I'm centered"})})},EqualColumns={args:{layout:"equal-columns"},argTypes:{...commonHiddenArgTypes},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.s,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.RY,{tag:"article"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.RY,{tag:"article"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.RY,{tag:"article"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.RY,{tag:"article"})]})},StackStory={args:{layout:"stack"},argTypes:{...commonHiddenArgTypes},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_common__WEBPACK_IMPORTED_MODULE_2__.BJ,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.bs,{as:"article"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.bs,{as:"article"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.bs,{as:"article"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.bs,{as:"article"})]}),storyName:"Stack"},__WEBPACK_DEFAULT_EXPORT__=meta;FillSpaceCentered.parameters={...FillSpaceCentered.parameters,docs:{...FillSpaceCentered.parameters?.docs,source:{originalSource:"{\n  args: {\n    layout: 'fill-space-centered'\n  },\n  argTypes: {\n    ...commonHiddenArgTypes\n  },\n  render: args => {\n    return <Flex {...args}>\n        <Title>I'm centered</Title>\n      </Flex>;\n  }\n}",...FillSpaceCentered.parameters?.docs?.source}}},EqualColumns.parameters={...EqualColumns.parameters,docs:{...EqualColumns.parameters?.docs,source:{originalSource:'{\n  args: {\n    layout: \'equal-columns\'\n  },\n  argTypes: {\n    ...commonHiddenArgTypes\n  },\n  render: args => {\n    return <Flex {...args}>\n        <Child tag="article" />\n        <Child tag="article" />\n        <Child tag="article" />\n        <Child tag="article" />\n      </Flex>;\n  }\n}',...EqualColumns.parameters?.docs?.source}}},StackStory.parameters={...StackStory.parameters,docs:{...StackStory.parameters?.docs,source:{originalSource:'{\n  args: {\n    layout: \'stack\'\n  },\n  argTypes: {\n    ...commonHiddenArgTypes\n  },\n  render: args => {\n    return <Stack {...args}>\n        <StackChild as="article" />\n        <StackChild as="article" />\n        <StackChild as="article" />\n        <StackChild as="article" />\n      </Stack>;\n  }\n}',...StackStory.parameters?.docs?.source}}};const __namedExportsOrder=["FillSpaceCentered","EqualColumns","StackStory"]},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Flex/docs/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BJ:()=>Stack,RY:()=>Child,bs:()=>StackChild,eB:()=>Block,hE:()=>Title});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Flex/index.tsx");const Child=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(___WEBPACK_IMPORTED_MODULE_1__.A)`
  background-color: ${props=>props.theme.colors.primary.lightest};
  color: ${props=>props.theme.colors.primary.darkest};
  margin: 1vh;
  border-radius: 4px;
  height: 20vh;
  width: 20vw;
`,Block=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(___WEBPACK_IMPORTED_MODULE_1__.A)`
  background-color: ${props=>props.theme.colors.primary.lightest};
  height: 5vh;
  margin: 1rem;
  border-radius: 4px;
`,Stack=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(___WEBPACK_IMPORTED_MODULE_1__.A)`
  padding: 1rem 20vw;
`,StackChild=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  height: 20vh;
  width: 20vw;
  margin: 1vh;
  background-color: ${props=>props.theme.colors.primary.lightest};
`,Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.h1.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  background-color: ${props=>props.theme.colors.primary.lightest};
  color: ${props=>props.theme.colors.primary.darkest};
  padding: 2rem;
  border-radius: 4px;
`;try{Child.displayName="Child",Child.__docgenInfo={description:"",displayName:"Child",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/docs/common.tsx#Child"]={docgenInfo:Child.__docgenInfo,name:"Child",path:"src/components/ui/Flex/docs/common.tsx#Child"})}catch(__react_docgen_typescript_loader_error){}try{Block.displayName="Block",Block.__docgenInfo={description:"",displayName:"Block",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/docs/common.tsx#Block"]={docgenInfo:Block.__docgenInfo,name:"Block",path:"src/components/ui/Flex/docs/common.tsx#Block"})}catch(__react_docgen_typescript_loader_error){}try{Stack.displayName="Stack",Stack.__docgenInfo={description:"",displayName:"Stack",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/docs/common.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/components/ui/Flex/docs/common.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}try{StackChild.displayName="StackChild",StackChild.__docgenInfo={description:"",displayName:"StackChild",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/docs/common.tsx#StackChild"]={docgenInfo:StackChild.__docgenInfo,name:"StackChild",path:"src/components/ui/Flex/docs/common.tsx#StackChild"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/docs/common.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/components/ui/Flex/docs/common.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-ui-Flex-docs-Flex-stories.504d5eac.iframe.bundle.js.map