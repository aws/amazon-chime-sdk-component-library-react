"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[2934],{"./src/components/ui/Chat/MessageAttachment/Attachment.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_MessageAttachment:()=>_MessageAttachment,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Flex/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Chat/MessageAttachment/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\n\nimport Flex from '../../Flex';\nimport MessageAttachment from '.';\n\nexport default {\n  title: 'UI Components/Chat/MessageAttachment',\n  component: MessageAttachment,\n};\n\nexport const _MessageAttachment = () => {\n  return (\n    <Flex layout=\"fill-space-centered\">\n      <MessageAttachment\n        name=\"Monthly_report.txt\"\n        size=\"30.3KB\"\n        downloadUrl=\"https://download.com/url.txt\"\n      />\n    </Flex>\n  );\n};\n\n_MessageAttachment.story = {\n  name: 'MessageAttachment',\n};\n",locationsMap:{"message-attachment":{startLoc:{col:34,line:14},endLoc:{col:1,line:24},startBody:{col:34,line:14},endBody:{col:1,line:24}}}}},title:"UI Components/Chat/MessageAttachment",component:___WEBPACK_IMPORTED_MODULE_2__.A},_MessageAttachment=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{layout:"fill-space-centered",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{name:"Monthly_report.txt",size:"30.3KB",downloadUrl:"https://download.com/url.txt"})});_MessageAttachment.displayName="_MessageAttachment",_MessageAttachment.story={name:"MessageAttachment"},_MessageAttachment.parameters={..._MessageAttachment.parameters,docs:{..._MessageAttachment.parameters?.docs,source:{originalSource:'() => {\n  return <Flex layout="fill-space-centered">\n      <MessageAttachment name="Monthly_report.txt" size="30.3KB" downloadUrl="https://download.com/url.txt" />\n    </Flex>;\n}',..._MessageAttachment.parameters?.docs?.source}}};const __namedExportsOrder=["_MessageAttachment"]},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Chat/MessageAttachment/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Chat_MessageAttachment});__webpack_require__("./node_modules/react/index.js");var icons=__webpack_require__("./src/components/ui/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledMessageAttachmentContent=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
  display: flex;
  flex-direction: row;
  padding: 10px;

  & .ch-attachment-icon {
    height: 2rem;
    width: 2rem;
    margin: auto;
    background-color: ${props=>props.theme.messageAttachment.icon.bgd};
    border-radius: 25px;

    & .ch-document-icon {
      margin: auto 0;
      color: ${props=>props.theme.messageAttachment.icon.color};
    }
  }
  & .ch-attachment-name {
    margin-left: 1rem;

    & a:link,
    & a:visited,
    & a:hover,
    & a:active {
      color: ${props=>props.theme.messageAttachment.name.fontColor};
      text-decoration: none;
    }
  }
  & .ch-attachment-size {
    font-size: ${props=>props.theme.messageAttachment.size.fontSize};
    color: ${props=>props.theme.messageAttachment.size.fontColor};
    display: block;
    padding-top: 3px;
  }
`,StyledMessageAttachment=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
  color: ${props=>props.theme.messageAttachment.content.fontColor};
  display: flex;
  flex-direction: column;
  width: fit-content;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${props=>props.theme.messageAttachment.content.bgd};
  letter-spacing: ${props=>props.theme.messageAttachment.content.letterSpacing};
  font-size: ${props=>props.theme.fontSizes.text.fontSize};
  line-height: ${props=>props.theme.fontSizes.text.lineHeight};

  & img {
    ${props=>props.imgStyles};
  }

  ${Base.d}
  ${Base.i}
`;try{StyledMessageAttachmentContent.displayName="StyledMessageAttachmentContent",StyledMessageAttachmentContent.__docgenInfo={description:"",displayName:"StyledMessageAttachmentContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/MessageAttachment/Styled.tsx#StyledMessageAttachmentContent"]={docgenInfo:StyledMessageAttachmentContent.__docgenInfo,name:"StyledMessageAttachmentContent",path:"src/components/ui/Chat/MessageAttachment/Styled.tsx#StyledMessageAttachmentContent"})}catch(__react_docgen_typescript_loader_error){}try{StyledMessageAttachment.displayName="StyledMessageAttachment",StyledMessageAttachment.__docgenInfo={description:"",displayName:"StyledMessageAttachment",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/MessageAttachment/Styled.tsx#StyledMessageAttachment"]={docgenInfo:StyledMessageAttachment.__docgenInfo,name:"StyledMessageAttachment",path:"src/components/ui/Chat/MessageAttachment/Styled.tsx#StyledMessageAttachment"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MessageAttachment=({size="Unknown",...props})=>{const{name,downloadUrl,renderImg,imgUrl,imgOnClick,imgOnLoad}=props;return(0,jsx_runtime.jsxs)(StyledMessageAttachment,{...props,children:[(0,jsx_runtime.jsxs)(StyledMessageAttachmentContent,{...props,children:[(0,jsx_runtime.jsx)("div",{className:"ch-attachment-icon",children:(0,jsx_runtime.jsx)(icons.yo,{className:"ch-document-icon",width:"2rem",height:"2rem"})}),(0,jsx_runtime.jsxs)("div",{className:"ch-attachment-name",children:[(0,jsx_runtime.jsx)("a",{target:"_blank",href:downloadUrl,rel:"noreferrer",children:name}),(0,jsx_runtime.jsx)("span",{className:"ch-attachment-size",children:size})]})]}),renderImg&&(0,jsx_runtime.jsx)("img",{className:"ch-attachment-img","data-testid":"preview-img",alt:imgUrl||downloadUrl,onClick:imgOnClick,src:imgUrl||downloadUrl,onLoad:imgOnLoad})]})};MessageAttachment.displayName="MessageAttachment";const Chat_MessageAttachment=MessageAttachment;try{MessageAttachment.displayName="MessageAttachment",MessageAttachment.__docgenInfo={description:"",displayName:"MessageAttachment",props:{name:{defaultValue:null,description:"The name of the attachment.",name:"name",required:!0,type:{name:"string"}},downloadUrl:{defaultValue:null,description:"The file URL string to download attachment.",name:"downloadUrl",required:!0,type:{name:"string"}},renderImg:{defaultValue:null,description:"Determines whether render image of the attachment.",name:"renderImg",required:!1,type:{name:"boolean | undefined"}},imgUrl:{defaultValue:null,description:"The URL of the image.",name:"imgUrl",required:!1,type:{name:"string | undefined"}},imgStyles:{defaultValue:null,description:"The style of the image.",name:"imgStyles",required:!1,type:{name:"string | undefined"}},imgOnClick:{defaultValue:null,description:"How to handle onClick of the image.",name:"imgOnClick",required:!1,type:{name:"(() => void) | undefined"}},imgOnLoad:{defaultValue:null,description:"How to handle onLoad of the image.",name:"imgOnLoad",required:!1,type:{name:"(() => void) | undefined"}},size:{defaultValue:{value:"Unknown"},description:"The size of attachment.",name:"size",required:!1,type:{name:"string | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/MessageAttachment/index.tsx#MessageAttachment"]={docgenInfo:MessageAttachment.__docgenInfo,name:"MessageAttachment",path:"src/components/ui/Chat/MessageAttachment/index.tsx#MessageAttachment"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
//# sourceMappingURL=components-ui-Chat-MessageAttachment-Attachment-stories.8b79e1a7.iframe.bundle.js.map