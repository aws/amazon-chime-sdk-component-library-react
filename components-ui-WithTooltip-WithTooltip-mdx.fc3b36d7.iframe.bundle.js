/*! For license information please see components-ui-WithTooltip-WithTooltip-mdx.fc3b36d7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[5936],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ui/WithTooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>WithTooltip});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),LoggerProvider=__webpack_require__("./src/providers/LoggerProvider/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const TopProps=styled_components_browser_esm.AH`
  top: calc(
    ${props=>props.bounds?.top??0}px -
      ${1.75}rem
  );
  left: ${props=>((props.bounds?.left??0)+(props.bounds?.right??0))/2}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(180deg);
    top: 100%;
    left: calc(50% - ${.5}rem);
  }
`,BottomProps=styled_components_browser_esm.AH`
  top: calc(
    ${props=>props.bounds?.bottom??0}px +
      ${1.75}rem
  );
  left: ${props=>((props.bounds?.left??0)+(props.bounds?.right??0))/2}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(0deg);
    top: -${.5}rem;
    left: calc(50% - ${.5}rem);
  }
`,LeftProps=styled_components_browser_esm.AH`
  top: ${props=>((props.bounds?.top??0)+(props.bounds?.bottom??0))/2}px;
  left: calc(
    ${props=>props.bounds?.left??0}px - ${.75}rem
  );
  transform: translateY(-50%) translateX(-100%);

  &::before {
    transform: rotateZ(90deg);
    top: calc(50% - ${.25}rem);
    left: calc(100% - ${.25}rem);
  }
`,RightProps=styled_components_browser_esm.AH`
  top: ${props=>((props.bounds?.top??0)+(props.bounds?.bottom??0))/2}px;
  left: calc(
    ${props=>props.bounds?.right??0}px + ${.75}rem
  );
  transform: translateY(-50%);

  &::before {
    transform: rotateZ(270deg);
    top: calc(50% - ${.25}rem);
    left: -${.75}rem;
  }
`,StyledTooltip=styled_components_browser_esm.Ay.span.withConfig(style.P6)`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  position: fixed;
  z-index: 9999;
  color: white;
  white-space: nowrap;
  pointer-events: none;
  line-height: normal;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: ${.5}rem;
  font-size: ${1}rem;
  font-weight: 300;
  padding: ${.5}rem ${.75}rem;
  white-space: nowrap;
  animation: fadeIn 0.3s;

  &::before {
    border-bottom: ${.5}rem solid rgba(0, 0, 0, 0.8);
    border-left: ${.5}rem solid transparent;
    border-right: ${.5}rem solid transparent;
    content: '';
    height: 0;
    transform: translateX(-100%) translateY(-50%);
    width: 0;
    z-index: 1;
    position: absolute;
  }

  ${props=>"top"===props.position&&TopProps}
  ${props=>"bottom"===props.position&&BottomProps}
  ${props=>"left"===props.position&&LeftProps}
  ${props=>"right"===props.position&&RightProps}
`;try{StyledTooltip.displayName="StyledTooltip",StyledTooltip.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"]={docgenInfo:StyledTooltip.__docgenInfo,name:"StyledTooltip",path:"src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const initialState={show:!1,bounds:null},WithTooltip=(Component,container_id)=>props=>{const logger=(0,LoggerProvider.Ul)(),[{show,bounds},setShow]=(0,react.useState)(initialState),[container,setContainer]=(0,react.useState)(null),position=props.tooltipPosition??"top",showToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation();let component=e.target;for(;!component.getAttribute("data-tooltip");)component=component.parentElement;const bounds=component.getBoundingClientRect();setShow({show:!0,bounds})}),[]),hideToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),setShow(initialState)}),[]);return(0,react.useEffect)((()=>(document.addEventListener("scroll",hideToolTip,!0),()=>document.removeEventListener("scroll",hideToolTip,!0))),[]),(0,react.useEffect)((()=>{const container=document.getElementById(container_id||"Tooltip__container");container?setContainer(container):logger.warn("Attempted to use 'WithTooltip' but could not find container element.Pass a valid element ID or add 'Tooltip__container' ID to existing element")}),[container_id]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[show&&bounds&&container&&react_dom.createPortal((0,jsx_runtime.jsx)(StyledTooltip,{position,bounds,children:props.tooltipContent||props.label}),container),(0,jsx_runtime.jsx)(Component,{...props,"data-tooltip":!0,"data-tooltip-position":position,onClick:e=>{show&&hideToolTip(e),props?.onClick?.(e)},onFocus:e=>{show||showToolTip(e),props?.onFocus?.(e)},onBlur:e=>{show&&hideToolTip(e),props?.onBlur?.(e)},onMouseEnter:e=>{show||showToolTip(e),props?.onMouseEnter?.(e)},onMouseLeave:e=>{show&&hideToolTip(e),props?.onMouseLeave?.(e)}})]})}},"./src/providers/LoggerProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{IB:()=>LoggerProvider,Ul:()=>useLogger});var amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amazon-chime-sdk-js/build/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const consoleLogger=new amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger("ChimeSDKReactComponent",amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO),LoggerContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(consoleLogger),LoggerProvider=({logger,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LoggerContext.Provider,{value:logger,children});LoggerProvider.displayName="LoggerProvider";const useLogger=()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LoggerContext);try{LoggerProvider.displayName="LoggerProvider",LoggerProvider.__docgenInfo={description:"",displayName:"LoggerProvider",props:{logger:{defaultValue:null,description:"",name:"logger",required:!0,type:{name:"Logger"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/LoggerProvider/index.tsx#LoggerProvider"]={docgenInfo:LoggerProvider.__docgenInfo,name:"LoggerProvider",path:"src/providers/LoggerProvider/index.tsx#LoggerProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/WithTooltip/WithTooltip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/ui/WithTooltip/index.tsx"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",strong:"strong",h2:"h2"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"UI Components/WithTooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"withtooltip",children:"WithTooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Returns a higher order component (HOC) that renders a tooltip. Make sure to pass an existing element container ID and spread props of the wrapped component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"WithTooltip"})," function takes a component to be wrapped, and an optional container ID used to insert the tooltip into.\nIf no container ID is passed, it will fallback to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip__container"}),". If no portal is found, it will log a warning."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The wrapped component takes a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tooltipPosition"})," prop for placing the tooltip, and a label prop for the tooltip text."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"  type `tooltipPosition` = 'top' | 'bottom' | 'right' | 'left';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Please note"})," - This HOC will eventually be deprecated, as we plan to create a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<Tooltip/>"})," component in its place. We do not recommend using this HOC."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { WithTooltip } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'const MyComponent = (props) => {\n  return <div {...props}> hello world </div>;\n}\n\nconst WrappedComponent = WithTooltip(MyComponent, "a-tooltip-container");\n\n// usage\n\nconst App = () => (\n  <>\n    <WrappedComponent\n      label="Tooltip label"\n      tooltipPosition="bottom"\n    />\n    <div id="a-tooltip-container" />\n  </>\n)\n\n// Alternate usage\n\nconst App = () => (\n  <>\n    <WrappedComponent\n      tooltipContent={<div>Hello world</div>}\n      tooltipPosition="bottom"\n    />\n    <div id="a-tooltip-container" />\n  </>\n)\n'})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ui-WithTooltip-WithTooltip-mdx.fc3b36d7.iframe.bundle.js.map