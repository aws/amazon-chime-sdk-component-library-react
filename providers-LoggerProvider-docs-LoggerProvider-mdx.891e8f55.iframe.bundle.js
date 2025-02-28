/*! For license information please see providers-LoggerProvider-docs-LoggerProvider-mdx.891e8f55.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[4763],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/providers/LoggerProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{IB:()=>LoggerProvider,Ul:()=>useLogger});var amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amazon-chime-sdk-js/build/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const consoleLogger=new amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger("ChimeSDKReactComponent",amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO),LoggerContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(consoleLogger),LoggerProvider=({logger,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LoggerContext.Provider,{value:logger,children});LoggerProvider.displayName="LoggerProvider";const useLogger=()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LoggerContext);try{LoggerProvider.displayName="LoggerProvider",LoggerProvider.__docgenInfo={description:"",displayName:"LoggerProvider",props:{logger:{defaultValue:null,description:"",name:"logger",required:!0,type:{name:"Logger"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/LoggerProvider/index.tsx#LoggerProvider"]={docgenInfo:LoggerProvider.__docgenInfo,name:"LoggerProvider",path:"src/providers/LoggerProvider/index.tsx#LoggerProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/providers/LoggerProvider/docs/LoggerProvider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/LoggerProvider/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"SDK Providers/LoggerProvider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"loggerprovider",children:"LoggerProvider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LoggerProvider"})," takes in a class implementing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://aws.github.io/amazon-chime-sdk-js/interfaces/logger.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Logger"})," interface from Amazon Chime SDK for JavaScript as a required ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"prop"})," and provides it to\nchildren components wrapped under ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LoggerProvider"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Children components can use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useLogger"})," custom hook which returns the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"logger"})," object for logging.\nThis custom hook provides ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://aws.github.io/amazon-chime-sdk-js/classes/consolelogger.html",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ConsoleLogger"})})," as the default logger, if not overriden by ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LoggerProvider"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"logger"})," prop."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ov,{of:___WEBPACK_IMPORTED_MODULE_2__.IB}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { LoggerProvider, useLogger } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You have to explicitly use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LoggerProvider"})," if you want to provide a custom ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Logger"})," for logging in your app.\nThe ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"amazon-chime-sdk-component-library-react"})," will use this same custom logger for logging."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you do not use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LoggerProvider"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useLogger"})," will just provide the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ConsoleLogger"})," as the default logger."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3,{id:"using-single-loggerprovider",children:["Using single ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LoggerProvider"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport { POSTLogger, LogLevel } from 'amazon-chime-sdk-js';\nimport { LoggerProvider, useLogger } from 'amazon-chime-sdk-component-library-react';\n\nconst postLogger = new POSTLogger({\n  url: 'URL to POST logs',\n  LogLevel.INFO,\n  metadata: {\n    appName: 'ChimeComponentLibraryReactDemo',\n  },\n});\n\nconst App = () => (\n  <div className='App'>\n    <LoggerProvider logger={postLogger}>\n      <MyComponent1 />\n    </LoggerProvider>\n    <MyComponent2 />\n  </div>\n);\n\nconst MyComponent1 = () => {\n  // logger is a POSTLogger object.\n  const logger = useLogger();\n  logger.info('info');\n  logger.error('error');\n  logger.warn('warn');\n  logger.debug('debug');\n  return null;\n};\n\nconst MyComponent2 = () => {\n  // logger is a ConsoleLogger object.\n  const logger = useLogger();\n  logger.info('info');\n  logger.error('error');\n  logger.warn('warn');\n  logger.debug('debug');\n  return null;\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3,{id:"using-multiple-loggerproviders",children:["Using multiple ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LoggerProvider"}),"'s"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport { POSTLogger, LogLevel } from 'amazon-chime-sdk-js';\nimport { LoggerProvider, useLogger } from 'amazon-chime-sdk-component-library-react';\n\nconst meetingPOSTLogger = new POSTLogger({\n  url: 'URL to POST logs',\n  LogLevel.INFO,\n  metadata: {\n    appName: 'ChimeComponentLibraryReactDemo-Meeting',\n  },\n});\n\nconst chatPOSTLogger = new POSTLogger({\n  url: 'URL to POST logs',\n  LogLevel.INFO,\n  metadata: {\n    appName: 'ChimeComponentLibraryReactDemo-Chat',\n  },\n});\n\nconst App = () => (\n  <div className='App'>\n    <LoggerProvider logger={meetingPOSTLogger}>\n      <MyMeetingComponent />\n    </LoggerProvider>\n    <LoggerProvider logger={chatPOSTLogger}>\n      <MyChatComponent />\n    </LoggerProvider>\n  </div>\n);\n\nconst MyMeetingComponent = () => {\n  // logger is a meetingPOSTLogger object.\n  const logger = useLogger();\n  logger.info('info');\n  logger.error('error');\n  logger.warn('warn');\n  logger.debug('debug');\n  return null;\n};\n\nconst MyChatComponent = () => {\n  // logger is a chatPOSTLogger object.\n  const logger = useLogger();\n  logger.info('info');\n  logger.error('error');\n  logger.warn('warn');\n  logger.debug('debug');\n  return null;\n};\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);