(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[483,9473],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ui/Chat/ChatBubble/ChatBubble.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_ChatBubble:()=>_ChatBubble,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Flex/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Chat/ChatBubble/index.tsx"),_MessageAttachment__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Chat/MessageAttachment/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\n\nimport Flex from '../../Flex';\nimport ChatBubble from './';\nimport MessageAttachment from '../MessageAttachment';\n\nexport default {\n  title: 'UI Components/Chat/ChatBubble',\n  component: ChatBubble,\n};\n\nexport const _ChatBubble = (args) => {\n  const containerStyles = `\n    display: flex; \n    flex-direction: column;\n    padding-top: 1rem;\n  `;\n\n  const bubbleStyles = `\n    margin: 1rem;\n  `;\n\n  return (\n    <Flex layout=\"fill-space-centered\" css={containerStyles}>\n      <ChatBubble\n        variant={args.variant}\n        senderName={args.senderName}\n        timestamp={args.timestamp}\n        showTail={args.showTail}\n        css={bubbleStyles}\n      >\n        {args.message}\n        {args.withAttachment && (\n          <MessageAttachment\n            name=\"Report.pdf\"\n            size=\"23.3KB\"\n            downloadUrl=\"https://test.com/download/Report.pdf\"\n            css=\"margin-top: 1rem\"\n          />\n        )}\n      </ChatBubble>\n    </Flex>\n  );\n};\n\n_ChatBubble.argTypes = {\n  showTail: { control: 'boolean' },\n  variant: { control: 'select', options: ['incoming', 'outgoing'] },\n  senderName: { control: 'text' },\n  message: { control: 'text' },\n  timestamp: { control: 'text' },\n  withAttachment: { control: 'boolean' },\n  redacted: { table: { disable: true } },\n};\n\n_ChatBubble.args = {\n  showTail: false,\n  variant: 'incoming',\n  message:\n    'This is a long message. This amount of text reaches the max length and goes onto the next line.',\n  senderName: 'Kam Chancellor',\n  timestamp: '2022-02-22',\n  withAttachment: false,\n};\n\n_ChatBubble.story = {\n  name: 'ChatBubble',\n};\n",locationsMap:{"chat-bubble":{startLoc:{col:27,line:15},endLoc:{col:1,line:47},startBody:{col:27,line:15},endBody:{col:1,line:47}}}}},title:"UI Components/Chat/ChatBubble",component:___WEBPACK_IMPORTED_MODULE_2__.A},_ChatBubble=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{layout:"fill-space-centered",css:"\n    display: flex; \n    flex-direction: column;\n    padding-top: 1rem;\n  ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.A,{variant:args.variant,senderName:args.senderName,timestamp:args.timestamp,showTail:args.showTail,css:"\n    margin: 1rem;\n  ",children:[args.message,args.withAttachment&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MessageAttachment__WEBPACK_IMPORTED_MODULE_3__.A,{name:"Report.pdf",size:"23.3KB",downloadUrl:"https://test.com/download/Report.pdf",css:"margin-top: 1rem"})]})});_ChatBubble.displayName="_ChatBubble",_ChatBubble.argTypes={showTail:{control:"boolean"},variant:{control:"select",options:["incoming","outgoing"]},senderName:{control:"text"},message:{control:"text"},timestamp:{control:"text"},withAttachment:{control:"boolean"},redacted:{table:{disable:!0}}},_ChatBubble.args={showTail:!1,variant:"incoming",message:"This is a long message. This amount of text reaches the max length and goes onto the next line.",senderName:"Kam Chancellor",timestamp:"2022-02-22",withAttachment:!1},_ChatBubble.story={name:"ChatBubble"},_ChatBubble.parameters={..._ChatBubble.parameters,docs:{..._ChatBubble.parameters?.docs,source:{originalSource:'args => {\n  const containerStyles = `\n    display: flex; \n    flex-direction: column;\n    padding-top: 1rem;\n  `;\n  const bubbleStyles = `\n    margin: 1rem;\n  `;\n  return <Flex layout="fill-space-centered" css={containerStyles}>\n      <ChatBubble variant={args.variant} senderName={args.senderName} timestamp={args.timestamp} showTail={args.showTail} css={bubbleStyles}>\n        {args.message}\n        {args.withAttachment && <MessageAttachment name="Report.pdf" size="23.3KB" downloadUrl="https://test.com/download/Report.pdf" css="margin-top: 1rem" />}\n      </ChatBubble>\n    </Flex>;\n}',..._ChatBubble.parameters?.docs?.source}}};const __namedExportsOrder=["_ChatBubble"];try{_ChatBubble.displayName="_ChatBubble",_ChatBubble.__docgenInfo={description:"",displayName:"_ChatBubble",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/ChatBubble.stories.tsx#_ChatBubble"]={docgenInfo:_ChatBubble.__docgenInfo,name:"_ChatBubble",path:"src/components/ui/Chat/ChatBubble/ChatBubble.stories.tsx#_ChatBubble"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Chat/ChatBubble/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{HL:()=>StyledChatBubbleContainer,si:()=>StyledChatBubble,un:()=>StyledChatBubbleInfo});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledChatBubbleContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  display: flex;
  flex-direction: row;
  font-size: 0.65rem;
  margin-left: 1rem;
  align-items: center;
  background-color: ${props=>props.theme.chatBubble.container.bgd};
  width: 100%;

  .ch-timestamp {
    padding-right: ${props=>props.actions?"1rem":"2.5rem"};
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledChatBubble=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  background-color: ${props=>props.theme.chatBubble[props.variant].bgd};
  padding: 0.625rem 1rem;
  border-radius: 4px;
  width: fit-content;
  color: ${props=>props.theme.chatBubble[props.variant].fontColor};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  line-height: 20px;
  width: ${props=>props.editable?"100%":"fit-content"};
  max-width: 70.6%;
  font-size: 0.875rem;
  position: relative;
  margin-bottom: ${props=>props.editable?"4rem":"unset"};
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;

  & .ch-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
    align-items: baseline;
  }

  & .ch-sender-name {
    font-weight: bold;
    padding-right: 0.5rem;
  }

  & .ch-header-timestamp {
    font-size: 0.65rem;
  }

  & svg {
    position: absolute;
    height: 19px;
    width: 11px;
    margin-top: -14px;
    margin-left: -25px;

    & .ch-chat-bubble-tail {
      fill: ${props=>props.theme.chatBubble[props.variant].bgd};
    }
  }

  .ch-input {
    width: 100%;
  }

  .ch-edit-buttons {
    position: absolute;
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
    width: 10rem;
    justify-content: space-between;
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d};
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i};
`,StyledChatBubbleInfo=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  display: flex;
  margin-right: 0.5rem;
  margin-left: auto;
  color: ${props=>props.theme.chatBubble.container.fontColor};
  align-items: center;

  & .ch-message-actions {
    border: 1px solid transparent;
    border-radius: 50%;
  }

  & button:hover .ch-message-actions {
    background-color: ${props=>props.theme.buttons.icon.hover.bgd};

    & g {
      fill: ${props=>props.theme.buttons.icon.hover.text};
    }
  }

  & button:focus .ch-message-actions {
    border: 1px solid ${props=>props.theme.colors.primary.dark};
    border-radius: 50%;
  }

  & .ch-message-actions g {
    fill: ${props=>props.theme.chatBubble.container.fontColor};
  }

  & .ch-message-actions.isOpen {
    background-color: ${props=>props.theme.buttons.icon.active.bgd};
    border-radius: 50%;

    & g {
      fill: ${props=>props.theme.buttons.icon.active.text};
    }
  }
`;try{StyledChatBubbleContainer.displayName="StyledChatBubbleContainer",StyledChatBubbleContainer.__docgenInfo={description:"",displayName:"StyledChatBubbleContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubbleContainer"]={docgenInfo:StyledChatBubbleContainer.__docgenInfo,name:"StyledChatBubbleContainer",path:"src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubbleContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledChatBubble.displayName="StyledChatBubble",StyledChatBubble.__docgenInfo={description:"",displayName:"StyledChatBubble",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubble"]={docgenInfo:StyledChatBubble.__docgenInfo,name:"StyledChatBubble",path:"src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubble"})}catch(__react_docgen_typescript_loader_error){}try{StyledChatBubbleInfo.displayName="StyledChatBubbleInfo",StyledChatBubbleInfo.__docgenInfo={description:"",displayName:"StyledChatBubbleInfo",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubbleInfo"]={docgenInfo:StyledChatBubbleInfo.__docgenInfo,name:"StyledChatBubbleInfo",path:"src/components/ui/Chat/ChatBubble/Styled.tsx#StyledChatBubbleInfo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Chat/ChatBubble/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Chat/ChatBubble/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChatBubble=({variant,senderName,timestamp,showTail,redacted,children,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.si,{variant,editable:!1,...rest,"data-testid":"chat-bubble",children:[(senderName||timestamp)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"ch-header",children:[senderName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"ch-sender-name","data-testid":"chat-bubble-sender-name",children:senderName}),timestamp&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"ch-header-timestamp","data-testid":"chat-bubble-timestamp",children:timestamp})]}),children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children}),showTail&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{viewBox:"0 0 4 9","data-testid":"tail",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("g",{transform:"translate(0, -53)",className:"ch-chat-bubble-tail",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M4,62 L3.92789928,61.999999 C2.89671177,62.0004988 1.33197354,61.8123902 0.200755581,60.8250184 C-0.0781312712,60.5814641 -0.0639788041,60.0290387 0.229060515,59.8181428 C1.47198013,58.9247413 3.99237825,57.6821586 4,52.9112516 L4,52.9112516 L4,62 Z"})})})})]});ChatBubble.displayName="ChatBubble";const __WEBPACK_DEFAULT_EXPORT__=ChatBubble;try{ChatBubble.displayName="ChatBubble",ChatBubble.__docgenInfo={description:"",displayName:"ChatBubble",props:{variant:{defaultValue:null,description:"Determines styling for outgoing and incoming messages.",name:"variant",required:!0,type:{name:"enum",value:[{value:'"incoming"'},{value:'"outgoing"'}]}},senderName:{defaultValue:null,description:"The name of the user that sent the message.",name:"senderName",required:!1,type:{name:"string | undefined"}},timestamp:{defaultValue:null,description:"The timestamp of the message being sent.",name:"timestamp",required:!1,type:{name:"string | undefined"}},showTail:{defaultValue:null,description:"Adds the bubble tail style to a message.",name:"showTail",required:!1,type:{name:"boolean | undefined"}},redacted:{defaultValue:null,description:"Determines if the message has been removed after being sent.",name:"redacted",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"Includes other elements or components, such as a message attachment.",name:"children",required:!1,type:{name:"((string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | ReactNode[]) & (string | ... 4 more ... | ReactPortal)) | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/ChatBubble/index.tsx#ChatBubble"]={docgenInfo:ChatBubble.__docgenInfo,name:"ChatBubble",path:"src/components/ui/Chat/ChatBubble/index.tsx#ChatBubble"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Chat/MessageAttachment/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Chat_MessageAttachment});__webpack_require__("./node_modules/react/index.js");var icons=__webpack_require__("./src/components/ui/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledMessageAttachmentContent=styled_components_browser_esm.Ay.div.withConfig(style.P6)`
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
`;try{StyledMessageAttachmentContent.displayName="StyledMessageAttachmentContent",StyledMessageAttachmentContent.__docgenInfo={description:"",displayName:"StyledMessageAttachmentContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/MessageAttachment/Styled.tsx#StyledMessageAttachmentContent"]={docgenInfo:StyledMessageAttachmentContent.__docgenInfo,name:"StyledMessageAttachmentContent",path:"src/components/ui/Chat/MessageAttachment/Styled.tsx#StyledMessageAttachmentContent"})}catch(__react_docgen_typescript_loader_error){}try{StyledMessageAttachment.displayName="StyledMessageAttachment",StyledMessageAttachment.__docgenInfo={description:"",displayName:"StyledMessageAttachment",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/MessageAttachment/Styled.tsx#StyledMessageAttachment"]={docgenInfo:StyledMessageAttachment.__docgenInfo,name:"StyledMessageAttachment",path:"src/components/ui/Chat/MessageAttachment/Styled.tsx#StyledMessageAttachment"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MessageAttachment=({size="Unknown",...props})=>{const{name,downloadUrl,renderImg,imgUrl,imgOnClick,imgOnLoad}=props;return(0,jsx_runtime.jsxs)(StyledMessageAttachment,{...props,children:[(0,jsx_runtime.jsxs)(StyledMessageAttachmentContent,{...props,children:[(0,jsx_runtime.jsx)("div",{className:"ch-attachment-icon",children:(0,jsx_runtime.jsx)(icons.yo,{className:"ch-document-icon",width:"2rem",height:"2rem"})}),(0,jsx_runtime.jsxs)("div",{className:"ch-attachment-name",children:[(0,jsx_runtime.jsx)("a",{target:"_blank",href:downloadUrl,rel:"noreferrer",children:name}),(0,jsx_runtime.jsx)("span",{className:"ch-attachment-size",children:size})]})]}),renderImg&&(0,jsx_runtime.jsx)("img",{className:"ch-attachment-img","data-testid":"preview-img",alt:imgUrl||downloadUrl,onClick:imgOnClick,src:imgUrl||downloadUrl,onLoad:imgOnLoad})]})};MessageAttachment.displayName="MessageAttachment";const Chat_MessageAttachment=MessageAttachment;try{MessageAttachment.displayName="MessageAttachment",MessageAttachment.__docgenInfo={description:"",displayName:"MessageAttachment",props:{name:{defaultValue:null,description:"The name of the attachment.",name:"name",required:!0,type:{name:"string"}},downloadUrl:{defaultValue:null,description:"The file URL string to download attachment.",name:"downloadUrl",required:!0,type:{name:"string"}},renderImg:{defaultValue:null,description:"Determines whether render image of the attachment.",name:"renderImg",required:!1,type:{name:"boolean | undefined"}},imgUrl:{defaultValue:null,description:"The URL of the image.",name:"imgUrl",required:!1,type:{name:"string | undefined"}},imgStyles:{defaultValue:null,description:"The style of the image.",name:"imgStyles",required:!1,type:{name:"string | undefined"}},imgOnClick:{defaultValue:null,description:"How to handle onClick of the image.",name:"imgOnClick",required:!1,type:{name:"(() => void) | undefined"}},imgOnLoad:{defaultValue:null,description:"How to handle onLoad of the image.",name:"imgOnLoad",required:!1,type:{name:"(() => void) | undefined"}},size:{defaultValue:{value:"Unknown"},description:"The size of attachment.",name:"size",required:!1,type:{name:"string | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Chat/MessageAttachment/index.tsx#MessageAttachment"]={docgenInfo:MessageAttachment.__docgenInfo,name:"MessageAttachment",path:"src/components/ui/Chat/MessageAttachment/index.tsx#MessageAttachment"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_k:()=>_light__WEBPACK_IMPORTED_MODULE_0__._,a5:()=>_dark__WEBPACK_IMPORTED_MODULE_1__.a,kH:()=>_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__.k});var _light__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/light.ts"),_dark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/dark.ts"),_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/theme/StyledReset.ts"),__webpack_require__("./src/theme/GlobalStyles.ts"))},"./src/components/ui/Chat/ChatBubble/ChatBubble.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Chat/ChatBubble/index.tsx"),_MessageAttachment__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Chat/MessageAttachment/index.tsx"),_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/theme/index.ts"),_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/theme/GlobalStyles.ts"),_ChatBubble_stories_tsx__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/ui/Chat/ChatBubble/ChatBubble.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.W8,{of:_ChatBubble_stories_tsx__WEBPACK_IMPORTED_MODULE_6__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"chatbubble",children:"ChatBubble"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The ChatBubble component displays incoming and outgoing chat messages and data.\nIt also determines the style of the bubble including color, chat bubble tail visibility, and name visibility."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["ChatBubbles support tooltips on any buttons by adding a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data-tooltip"})," property. Adding a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data-tooltip-position"})," property controls the tooltip position"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import {\n  ChatBubble,\n  MessageAttachment,\n} from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.Hl,{style:{backgroundColor:"#eee"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_9__.NP,{theme:_theme__WEBPACK_IMPORTED_MODULE_4__._k,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__.k,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{variant:"incoming",senderName:"Jim Halpert",time:"9:47 AM",css:"margin: 1rem;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"I've always been your biggest flan."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{variant:"outgoing",senderName:"Ryan Howard",time:"9:45 AM",css:"margin: 1rem;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"You should have put him in custardy."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.A,{variant:"outgoing",senderName:"Fred Miller",css:"margin: 1rem;",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This is an outgoing message with attachment"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MessageAttachment__WEBPACK_IMPORTED_MODULE_3__.A,{name:"Report.pdf",size:"23.3KB",downloadUrl:"https://test.com/download/Report.pdf"})]})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'    <ChatBubble\n      variant="incoming"\n      senderName="Jim Halpert"\n      time="9:47 AM"\n      css="margin: 1rem;"\n    >\n      I\'ve always been your biggest flan.\n    </ChatBubble>\n    <ChatBubble\n      variant="outgoing"\n      senderName="Ryan Howard"\n      time="9:45 AM"\n      css="margin: 1rem;"\n    >\n      You should have put him in custardy.\n    </ChatBubble>\n    <ChatBubble\n      variant="outgoing"\n      senderName="Fred Miller"\n      css="margin: 1rem;"\n    >\n      This is an outgoing message with attachment\n      <MessageAttachment\n        name="Report.pdf"\n        size="23.3KB"\n        downloadUrl="https://test.com/download/Report.pdf"\n      />\n    </ChatBubble>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.ov,{of:___WEBPACK_IMPORTED_MODULE_2__.A})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
//# sourceMappingURL=components-ui-Chat-ChatBubble-ChatBubble-mdx.eb1c6e49.iframe.bundle.js.map