(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[4665],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/sdk/DeviceSelection/CameraSelection/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _providers_DevicesProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/DevicesProvider/index.tsx"),_providers_LoggerProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/LoggerProvider/index.tsx"),_providers_MeetingProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/providers/MeetingProvider/index.tsx"),_DeviceInput__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/sdk/DeviceSelection/DeviceInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CameraSelection=({notFoundMsg="No camera devices found",label="Camera source",...rest})=>{const logger=(0,_providers_LoggerProvider__WEBPACK_IMPORTED_MODULE_2__.Ul)(),{devices,selectedDevice}=(0,_providers_DevicesProvider__WEBPACK_IMPORTED_MODULE_1__.O5)(),meetingManager=(0,_providers_MeetingProvider__WEBPACK_IMPORTED_MODULE_3__.GY)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DeviceInput__WEBPACK_IMPORTED_MODULE_4__.A,{label,onChange:async deviceId=>{try{await meetingManager.startVideoInputDevice(deviceId)}catch(error){logger.error("CameraSelection failed to select camera")}},devices,selectedDevice,notFoundMsg,...rest})};CameraSelection.displayName="CameraSelection";const __WEBPACK_DEFAULT_EXPORT__=CameraSelection;try{CameraSelection.displayName="CameraSelection",CameraSelection.__docgenInfo={description:"",displayName:"CameraSelection",props:{notFoundMsg:{defaultValue:{value:"No camera devices found"},description:"The message that will be shown when no camera devices are found.",name:"notFoundMsg",required:!1,type:{name:"string | undefined"}},label:{defaultValue:{value:"Camera source"},description:'The label that will be shown for camera selection, it defaults to "Camera source".',name:"label",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/DeviceSelection/CameraSelection/index.tsx#CameraSelection"]={docgenInfo:CameraSelection.__docgenInfo,name:"CameraSelection",path:"src/components/sdk/DeviceSelection/CameraSelection/index.tsx#CameraSelection"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/DeviceSelection/DeviceInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_device_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/device-utils.ts"),_ui_FormField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/FormField/index.tsx"),_ui_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Select/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DeviceInput=({onChange,label,devices,selectedDevice,notFoundMsg,...rest})=>{const[selectedDeviceId,setSelectedDeviceId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(async()=>{const selectedDeviceId=await(0,_utils_device_utils__WEBPACK_IMPORTED_MODULE_1__.IP)(selectedDevice);setSelectedDeviceId(selectedDeviceId)})()}),[selectedDevice]);const deviceList=devices.map((device=>({value:device.deviceId,label:device.label}))),options=deviceList.length?deviceList:[{value:"not-available",label:notFoundMsg}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_FormField__WEBPACK_IMPORTED_MODULE_2__.z,{field:_ui_Select__WEBPACK_IMPORTED_MODULE_3__.l,options,onChange:e=>{const deviceId=e.target.value;"not-available"!==deviceId&&onChange(deviceId)},value:selectedDeviceId,label,...rest})};DeviceInput.displayName="DeviceInput";const __WEBPACK_DEFAULT_EXPORT__=DeviceInput;try{DeviceInput.displayName="DeviceInput",DeviceInput.__docgenInfo={description:"",displayName:"DeviceInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},notFoundMsg:{defaultValue:null,description:"",name:"notFoundMsg",required:!0,type:{name:"string"}},devices:{defaultValue:null,description:"",name:"devices",required:!0,type:{name:"DeviceType[]"}},selectedDevice:{defaultValue:null,description:"",name:"selectedDevice",required:!0,type:{name:"Device | AudioTransformDevice | VideoTransformDevice | null | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(deviceId: string) => void"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/DeviceSelection/DeviceInput.tsx#DeviceInput"]={docgenInfo:DeviceInput.__docgenInfo,name:"DeviceInput",path:"src/components/sdk/DeviceSelection/DeviceInput.tsx#DeviceInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/FormField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>FormField,A:()=>ui_FormField});var react=__webpack_require__("./node_modules/react/index.js"),useUniqueId=__webpack_require__("./src/hooks/useUniqueId/index.tsx"),Label=__webpack_require__("./src/components/ui/Label/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const stack=styled_components_browser_esm.AH`
  &.ch-form-field-input,
  &.ch-form-field-select,
  &.ch-form-field-textarea {
    display: flex;
    flex-direction: column;

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    input,
    select {
      width: 100%;
    }
  }

  &.ch-form-field-checkbox {
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    grid-template-rows: auto;
    gap: 0px 0.5rem;

    .ch-checkbox {
      grid-column: 1;
      grid-row: 1;
    }

    .ch-checkbox-label {
      line-height: 1.3;
      grid-column: 2;
    }

    .ch-help-text {
      grid-row: 2;
      grid-column: 1/3;
    }
  }

  &.ch-form-field-radiogroup {
    flex-direction: column;

    .ch-radio-wrapper {
      display: block;
      margin-bottom: 0.5rem;
      padding-left: 0.125rem;
      display: grid;
      grid-template-columns: 1.5rem 1fr;
      grid-template-rows: auto;

      align-items: center;
    }

    .ch-radio-label {
      margin-left: 1rem;
      position: relative;
      bottom: -0.5px;
    }
  }
`,layoutMap={stack,horizontal:styled_components_browser_esm.AH`
  @media (max-width: 599px) {
    ${stack};
  }

  @media (min-width: 600px) {
    &.ch-form-field-input,
    &.ch-form-field-select,
    &.ch-form-field-textarea,
    &.ch-form-field-checkbox {
      display: grid;
      grid-template-columns: 30% 1fr;
      grid-template-rows: auto;
      gap: 0px 0.5rem;
      align-items: center;

      input {
        width: 100%;
      }

      .ch-help-text {
        grid-column: 2;
      }
    }

    &.ch-form-field-radiogroup {
      flex-wrap: wrap;

      fieldset {
        width: 100%;
      }

      .ch-radio-wrapper {
        display: grid;
        grid-template-columns: 30% 1fr;
        grid-template-rows: auto;
        gap: 0px 0.5rem;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .ch-radio {
        grid-column: 2;
        grid-row: 1;
        margin-top: -4px;
      }

      .ch-radio-label {
        grid-column: 1;
        padding-right: 1rem;
        margin-left: 0;
      }

      .ch-help-text {
        width: 100%;
      }
    }
  }
`,"input-only":styled_components_browser_esm.AH`
  &.ch-form-field-input,
  &.ch-form-field-select,
  &.ch-form-field-textarea {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
    }
  }

  &.ch-form-field-checkbox {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .ch-checkbox {
      order: 1;
    }

    .ch-checkbox-label {
      order: 2;
      padding-left: 1rem;
    }

    .ch-help-text {
      width: 100%;
      order: 3;
    }
  }

  &.ch-form-field-radiogroup {
    flex-direction: column;

    .ch-radio-wrapper {
      display: block;
      margin-bottom: 0.5rem;
    }

    .ch-radio-label {
      margin-left: 1rem;
    }
  }
`},StyledFormField=styled_components_browser_esm.Ay.div`
  display: flex;
  margin-bottom: 1rem;
  position: relative;

  fieldset {
    margin: 0;
    border: none;
    padding: 0;
  }

  .ch-help-text {
    font-size: ${props=>props.theme.fontSizes.small.fontSize};
    margin-top: 0.5rem;
    color: ${props=>props.error?props.theme.inputs.error.fontColor:props.theme.inputs.fontColor};
  }

  legend {
    font-size: ${props=>props.theme.fontSizes.text.fontSize};
    color: ${props=>props.theme.inputs.fontColor};
    margin-bottom: 0.5rem;
  }

  ${props=>!!props.layout&&layoutMap[props.layout]}

  ${Base.d}
  ${Base.i}
`;try{StyledFormField.displayName="StyledFormField",StyledFormField.__docgenInfo={description:"",displayName:"StyledFormField",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},layout:{defaultValue:null,description:"Specify the layout of the field, it defaults to `stack`.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"horizontal"'},{value:'"input-only"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/Styled.tsx#StyledFormField"]={docgenInfo:StyledFormField.__docgenInfo,name:"StyledFormField",path:"src/components/ui/FormField/Styled.tsx#StyledFormField"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormField=(0,react.forwardRef)(((props,ref)=>{const{field:Field,label,layout="stack",errorText,fieldProps,infoText,error,onChange,value,checked,options,className,...rest}=props,displayName=Field.displayName?.toLowerCase()||"",labelId=(0,useUniqueId.A)(),descriptionId=(0,useUniqueId.A)(),helpText=error&&errorText||infoText;return(0,jsx_runtime.jsxs)(StyledFormField,{layout,error,className:`ch-form-field-${displayName} ${className||""}`,"data-testid":"form-field",...rest,children:["input-only"===layout&&"checkbox"!==displayName?null:"radiogroup"!==displayName&&(0,jsx_runtime.jsx)(Label.A,{htmlFor:labelId,className:`ch-${displayName}-label`,children:label}),"radiogroup"===displayName?(0,jsx_runtime.jsxs)("fieldset",{"aria-describedby":helpText&&descriptionId,"aria-invalid":error,children:[label&&(0,jsx_runtime.jsx)("legend",{children:label}),(0,jsx_runtime.jsx)(Field,{options,ref,id:labelId,onChange,value,...fieldProps})]}):(0,jsx_runtime.jsx)(Field,{options,"aria-label":"input-only"===layout&&label||null,"aria-describedby":helpText&&descriptionId,"aria-invalid":error,ref,id:labelId,onChange,value,checked,...fieldProps}),helpText&&(0,jsx_runtime.jsx)("span",{className:"ch-help-text",id:descriptionId,children:helpText})]})})),ui_FormField=FormField;try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},label:{defaultValue:null,description:"The label of the field.",name:"label",required:!0,type:{name:"string"}},field:{defaultValue:null,description:"The type of the field.",name:"field",required:!0,type:{name:"FieldType"}},infoText:{defaultValue:null,description:"The informational text in the field.",name:"infoText",required:!1,type:{name:"string | undefined"}},error:{defaultValue:null,description:"Whether or not the error text is shown.",name:"error",required:!1,type:{name:"boolean | undefined"}},errorText:{defaultValue:null,description:"The error text in the field.",name:"errorText",required:!1,type:{name:"string | undefined"}},fieldProps:{defaultValue:null,description:"Additional props for field component.",name:"fieldProps",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"Whether or not the field is checked.",name:"checked",required:!1,type:{name:"boolean | undefined"}},options:{defaultValue:null,description:"Options for some fields, e.g. radio group or select.",name:"options",required:!1,type:{name:"string[] | object[] | undefined"}},layout:{defaultValue:null,description:"Specify the layout of the field, it defaults to `stack`.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"horizontal"'},{value:'"input-only"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/index.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/ui/FormField/index.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>Label,A:()=>ui_Label});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledLabel=styled_components_browser_esm.Ay.label`
  color: ${props=>props.theme.inputs.fontColor};
  font-size: ${props=>props.theme.fontSizes.label.fontSize};
  line-height: ${props=>props.theme.fontSizes.label.lineHeight};

  ${Base.d}
  ${Base.i}
`;try{StyledLabel.displayName="StyledLabel",StyledLabel.__docgenInfo={description:"",displayName:"StyledLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Label/Styled.tsx#StyledLabel"]={docgenInfo:StyledLabel.__docgenInfo,name:"StyledLabel",path:"src/components/ui/Label/Styled.tsx#StyledLabel"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=(0,react.forwardRef)(((props,ref)=>{const{className,tag,...rest}=props;return(0,jsx_runtime.jsx)(StyledLabel,{as:tag,"data-testid":"label",className:className||"",...rest,children:props.children})})),ui_Label=Label;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/ui/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Select/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>Select,A:()=>ui_Select});var react=__webpack_require__("./node_modules/react/index.js"),UpAndDownCaret=__webpack_require__("./src/components/ui/icons/UpAndDownCaret/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledWrapper=styled_components_browser_esm.Ay.div`
  position: relative;

  .ch-select-icon {
    pointer-events: none;
  }

  ${Base.d}
  ${Base.i}
`,StyledSelectInput=styled_components_browser_esm.Ay.select`
  background-color: ${props=>props.theme.inputs.bgd};
  border: ${props=>props.theme.inputs.border};
  border-radius: ${props=>props.theme.inputs.borderRadius};
  box-shadow: ${props=>props.theme.inputs.shadow};
  color: ${props=>props.theme.inputs.fontColor};
  font-size: ${props=>props.theme.fontSizes.text.fontSize};
  line-height: ${props=>props.theme.fontSizes.text.lineHeight};
  height: 2rem;
  letter-spacing: -0.005625rem;
  width: 100%;
  padding: 0.375rem 1.5rem 0.375rem 0.5rem;
  transition: box-shadow 0.05s ease-in;
  display: inline-block;
  appearance: none;

  &:focus,
  &[aria-invalid='true']:focus {
    border: ${props=>props.theme.inputs.focus.border};
    box-shadow: ${props=>props.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid='true'] {
    border: ${props=>props.theme.inputs.error.border};
    box-shadow: ${props=>props.theme.inputs.error.shadow};
  }

  ${Base.d}
  ${Base.i}
`;try{StyledWrapper.displayName="StyledWrapper",StyledWrapper.__docgenInfo={description:"",displayName:"StyledWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Select/Styled.tsx#StyledWrapper"]={docgenInfo:StyledWrapper.__docgenInfo,name:"StyledWrapper",path:"src/components/ui/Select/Styled.tsx#StyledWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StyledSelectInput.displayName="StyledSelectInput",StyledSelectInput.__docgenInfo={description:"",displayName:"StyledSelectInput",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSelectElement | null) => void) | RefObject<HTMLSelectElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Select/Styled.tsx#StyledSelectInput"]={docgenInfo:StyledSelectInput.__docgenInfo,name:"StyledSelectInput",path:"src/components/ui/Select/Styled.tsx#StyledSelectInput"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const upAndDownCaretStyle={position:"absolute",top:"50%",transform:"translateY(-50%)",right:"0.2rem",width:"1.5rem",height:"1.5rem"},Select=(0,react.forwardRef)(((props,ref)=>{return(0,jsx_runtime.jsxs)(StyledWrapper,{children:[(0,jsx_runtime.jsx)(StyledSelectInput,{className:"ch-select","data-testid":"select",ref,...props,children:(options=props.options,options.map((({value,label})=>(0,jsx_runtime.jsx)("option",{value,children:label},value))))}),(0,jsx_runtime.jsx)(UpAndDownCaret.A,{style:upAndDownCaretStyle,className:"ch-select-icon","data-testid":"select-icon"})]});var options}));Select.displayName="Select";const ui_Select=Select;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"Options",name:"options",required:!0,type:{name:"SelectOptions[]"}},onChange:{defaultValue:null,description:"The callback fired when the option is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},value:{defaultValue:null,description:"The selected option",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Select/index.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/ui/Select/index.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Svg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Svg=({className,children,viewBox="0 0 24 24",xmlns="http://www.w3.org/2000/svg",width,height,title,...otherProps})=>{const styles={width,height};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns,className:`Svg ${className||""}`,height,style:styles,viewBox,width,...otherProps,children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title",{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{fillRule:"evenodd",fill:"currentColor",children})]})};Svg.displayName="Svg";const __WEBPACK_DEFAULT_EXPORT__=Svg;try{Svg.displayName="Svg",Svg.__docgenInfo={description:"",displayName:"Svg",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:{value:"0 0 24 24"},description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Svg.tsx#Svg"]={docgenInfo:Svg.__docgenInfo,name:"Svg",path:"src/components/ui/icons/Svg.tsx#Svg"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/UpAndDownCaret/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Svg.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UpAndDownCaret=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Svg__WEBPACK_IMPORTED_MODULE_1__.A,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M8.824 9.88c-.21.18-.526.154-.705-.056-.159-.187-.156-.457-.006-.64l.063-.065 3.523-3c.165-.14.397-.156.577-.05l.074.052 3.477 3c.209.18.232.497.052.706-.16.185-.428.224-.632.104l-.074-.052-3.151-2.72-3.198 2.722zM15.176 14.12c.21-.18.526-.154.705.056.159.187.157.457.006.64l-.063.065-3.523 3c-.165.14-.397.156-.577.05l-.074-.052-3.477-3c-.209-.18-.232-.497-.052-.706.16-.185.428-.224.632-.104l.074.052 3.151 2.72 3.198-2.722z"})});UpAndDownCaret.displayName="UpAndDownCaret",UpAndDownCaret.displayName="UpAndDownCaret";const __WEBPACK_DEFAULT_EXPORT__=UpAndDownCaret;try{UpAndDownCaret.displayName="UpAndDownCaret",UpAndDownCaret.__docgenInfo={description:"",displayName:"UpAndDownCaret",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:null,description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/UpAndDownCaret/index.tsx#UpAndDownCaret"]={docgenInfo:UpAndDownCaret.__docgenInfo,name:"UpAndDownCaret",path:"src/components/ui/icons/UpAndDownCaret/index.tsx#UpAndDownCaret"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useUniqueId/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),uuid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");const __WEBPACK_DEFAULT_EXPORT__=function useUniqueId(){const[uniqueId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>(0,uuid__WEBPACK_IMPORTED_MODULE_1__.A)()));return uniqueId}},"./src/utils/device-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>isPrevNextUndefined,GJ:()=>isOptionActive,IP:()=>getDeviceId,Sl:()=>isPrevNextEmpty});var amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amazon-chime-sdk-js/build/index.js");const isOptionActive=async(selectedDevice,currentDeviceId)=>await getDeviceId(selectedDevice)===currentDeviceId,getDeviceId=async device=>{if(!device)return"";let intrinsicDevice;intrinsicDevice=(0,amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.isAudioTransformDevice)(device)||(0,amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.isVideoTransformDevice)(device)?await device.intrinsicDevice():device;return amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DefaultDeviceController.getIntrinsicDeviceId(intrinsicDevice)};function isPrevNextUndefined(prev,next){return void 0===prev&&void 0===next}function isPrevNextEmpty(prev,next){const isPrevEmpty=prev&&0===Object.keys(prev).length,isNextEmpty=next&&0===Object.keys(next).length;return isPrevEmpty&&isNextEmpty}},"./src/components/sdk/DeviceSelection/docs/CameraSelection.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_CameraSelection__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/sdk/DeviceSelection/CameraSelection/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",em:"em",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"SDK Components/DeviceSelection/Camera/CameraSelection"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"cameraselection",children:"CameraSelection"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CameraSelection"})," component renders a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Select FormField"})," component with video input source options and the selected video input provided by the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useVideoInputs"})," hook."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, the first device will be selected from the device list returned by the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useVideoInputs"})," hook, otherwise a single option with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"not found"})," message will be shown."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The component depends on the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DevicesProvider"}),". If you are using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MeetingProvider"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DevicesProvider"})," is rendered by default."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { CameraSelection } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport {\n  MeetingProvider,\n  CameraSelection\n} from 'amazon-chime-sdk-component-library-react';\n\nconst App = () => {\n  return (\n    <MeetingProvider>\n      <CameraSelection />\n    </MeetingProvider>\n  );\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ov,{of:_CameraSelection__WEBPACK_IMPORTED_MODULE_2__.A}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MeetingProvider"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DevicesProvider"}),", If you are using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MeetingProvider"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DevicesProvider"})," is rendered by default"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useVideoInputs"})}),"\n"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
//# sourceMappingURL=components-sdk-DeviceSelection-docs-CameraSelection-mdx.be632373.iframe.bundle.js.map