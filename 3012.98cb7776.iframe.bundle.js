"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[3012],{"./src/components/ui/Button/PrimaryButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,j:()=>PrimaryButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PrimaryButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{variant:"primary",...props}))),__WEBPACK_DEFAULT_EXPORT__=PrimaryButton;try{PrimaryButton.displayName="PrimaryButton",PrimaryButton.__docgenInfo={description:"",displayName:"PrimaryButton",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/PrimaryButton.tsx#PrimaryButton"]={docgenInfo:PrimaryButton.__docgenInfo,name:"PrimaryButton",path:"src/components/ui/Button/PrimaryButton.tsx#PrimaryButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
`},StyledFlex=styled_components_browser_esm.Ay.div`
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
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},alignItems:{defaultValue:null,description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:null,description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:null,description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:null,description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:null,description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:null,description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:null,description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/FormField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>FormField,A:()=>ui_FormField});var react=__webpack_require__("./node_modules/react/index.js"),useUniqueId=__webpack_require__("./src/hooks/useUniqueId/index.tsx"),Label=__webpack_require__("./src/components/ui/Label/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const stack=styled_components_browser_esm.AH`
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
`;try{StyledFormField.displayName="StyledFormField",StyledFormField.__docgenInfo={description:"",displayName:"StyledFormField",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},layout:{defaultValue:null,description:"Specify the layout of the field, it defaults to `stack`.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"horizontal"'},{value:'"input-only"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/Styled.tsx#StyledFormField"]={docgenInfo:StyledFormField.__docgenInfo,name:"StyledFormField",path:"src/components/ui/FormField/Styled.tsx#StyledFormField"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormField=(0,react.forwardRef)(((props,ref)=>{const{field:Field,label,layout="stack",errorText,fieldProps,infoText,error,onChange,value,checked,options,className,...rest}=props,displayName=Field.displayName?.toLowerCase()||"",labelId=(0,useUniqueId.A)(),descriptionId=(0,useUniqueId.A)(),helpText=error&&errorText||infoText;return(0,jsx_runtime.jsxs)(StyledFormField,{layout,error,className:`ch-form-field-${displayName} ${className||""}`,"data-testid":"form-field",...rest,children:["input-only"===layout&&"checkbox"!==displayName?null:"radiogroup"!==displayName&&(0,jsx_runtime.jsx)(Label.A,{htmlFor:labelId,className:`ch-${displayName}-label`,children:label}),"radiogroup"===displayName?(0,jsx_runtime.jsxs)("fieldset",{"aria-describedby":helpText&&descriptionId,"aria-invalid":error,children:[label&&(0,jsx_runtime.jsx)("legend",{children:label}),(0,jsx_runtime.jsx)(Field,{options,ref,id:labelId,onChange,value,...fieldProps})]}):(0,jsx_runtime.jsx)(Field,{options,"aria-label":"input-only"===layout&&label||null,"aria-describedby":helpText&&descriptionId,"aria-invalid":error,ref,id:labelId,onChange,value,checked,...fieldProps}),helpText&&(0,jsx_runtime.jsx)("span",{className:"ch-help-text",id:descriptionId,children:helpText})]})})),ui_FormField=FormField;try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},label:{defaultValue:null,description:"The label of the field.",name:"label",required:!0,type:{name:"string"}},field:{defaultValue:null,description:"The type of the field.",name:"field",required:!0,type:{name:"FieldType"}},infoText:{defaultValue:null,description:"The informational text in the field.",name:"infoText",required:!1,type:{name:"string | undefined"}},error:{defaultValue:null,description:"Whether or not the error text is shown.",name:"error",required:!1,type:{name:"boolean | undefined"}},errorText:{defaultValue:null,description:"The error text in the field.",name:"errorText",required:!1,type:{name:"string | undefined"}},fieldProps:{defaultValue:null,description:"Additional props for field component.",name:"fieldProps",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"Whether or not the field is checked.",name:"checked",required:!1,type:{name:"boolean | undefined"}},options:{defaultValue:null,description:"Options for some fields, e.g. radio group or select.",name:"options",required:!1,type:{name:"string[] | object[] | undefined"}},layout:{defaultValue:null,description:"Specify the layout of the field, it defaults to `stack`.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"horizontal"'},{value:'"input-only"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/index.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/ui/FormField/index.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_Heading});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledHeading=styled_components_browser_esm.Ay.h1`
  display: block;
  margin: 0;

  font-size: ${props=>props.theme.fontSizes[`h${props.level}`].mobile.fontSize};
  font-weight: ${props=>props.theme.fontSizes[`h${props.level}`].mobile.fontWeight};
  line-height: ${props=>props.theme.fontSizes[`h${props.level}`].mobile.lineHeight};

  ${({theme})=>theme.mediaQueries.min.md} {
    font-size: ${props=>props.theme.fontSizes[`h${props.level}`].fontSize};
    font-weight: ${props=>props.theme.fontSizes[`h${props.level}`].fontWeight};
    line-height: ${props=>props.theme.fontSizes[`h${props.level}`].lineHeight};
  }

  ${Base.d}
  ${Base.i}
`;try{StyledHeading.displayName="StyledHeading",StyledHeading.__docgenInfo={description:"",displayName:"StyledHeading",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},level:{defaultValue:null,description:"The level of heading from 1 to 6. 1 defines the most important heading, 6 defines the least important heading.",name:"level",required:!0,type:{name:"enum",value:[{value:"4"},{value:"2"},{value:"1"},{value:"3"},{value:"5"},{value:"6"}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Heading/Styled.tsx#StyledHeading"]={docgenInfo:StyledHeading.__docgenInfo,name:"StyledHeading",path:"src/components/ui/Heading/Styled.tsx#StyledHeading"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading=(0,react.forwardRef)(((props,ref)=>{const{tag,children,className,level,...rest}=props;return(0,jsx_runtime.jsx)(StyledHeading,{as:tag||`h${level}`,className:className||"",level,ref,"data-testid":"heading",...rest,children})})),ui_Heading=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{children:{defaultValue:null,description:"The children element(s) within a heading.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},level:{defaultValue:null,description:"The level of heading from 1 to 6. 1 defines the most important heading, 6 defines the least important heading.",name:"level",required:!0,type:{name:"enum",value:[{value:"4"},{value:"2"},{value:"1"},{value:"3"},{value:"5"},{value:"6"}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Heading/index.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/ui/Heading/index.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label,A:()=>ui_Label});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledLabel=styled_components_browser_esm.Ay.label`
  color: ${props=>props.theme.inputs.fontColor};
  font-size: ${props=>props.theme.fontSizes.label.fontSize};
  line-height: ${props=>props.theme.fontSizes.label.lineHeight};

  ${Base.d}
  ${Base.i}
`;try{StyledLabel.displayName="StyledLabel",StyledLabel.__docgenInfo={description:"",displayName:"StyledLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Label/Styled.tsx#StyledLabel"]={docgenInfo:StyledLabel.__docgenInfo,name:"StyledLabel",path:"src/components/ui/Label/Styled.tsx#StyledLabel"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=(0,react.forwardRef)(((props,ref)=>{const{className,tag,...rest}=props;return(0,jsx_runtime.jsx)(StyledLabel,{as:tag,"data-testid":"label",className:className||"",...rest,children:props.children})})),ui_Label=Label;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/ui/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Modal/ModalBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Modal/Styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalBody=({children,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_1__.hb,{"data-testid":"modal-body",...rest,children});ModalBody.displayName="ModalBody";const __WEBPACK_DEFAULT_EXPORT__=ModalBody;try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Modal/ModalBody.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"src/components/ui/Modal/ModalBody.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Modal/ModalButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalButton=({closesModal,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.A,{...rest});ModalButton.displayName="ModalButton";const __WEBPACK_DEFAULT_EXPORT__=ModalButton;try{ModalButton.displayName="ModalButton",ModalButton.__docgenInfo={description:"",displayName:"ModalButton",props:{closesModal:{defaultValue:null,description:"Whether or not modal button(s) should have the ability to close the modal. By default, you can only close the modal by clicking the close icon button in the modal.",name:"closesModal",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Modal/ModalButton.tsx#ModalButton"]={docgenInfo:ModalButton.__docgenInfo,name:"ModalButton",path:"src/components/ui/Modal/ModalButton.tsx#ModalButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Modal/ModalButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_LoggerProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/LoggerProvider/index.tsx"),_ModalContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Modal/ModalContext.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Modal/Styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalButtonGroup=({primaryButtons,secondaryButtons,...rest})=>{const logger=(0,_providers_LoggerProvider__WEBPACK_IMPORTED_MODULE_1__.Ul)(),context=(0,_ModalContext__WEBPACK_IMPORTED_MODULE_2__.k3)(),addCloseBehaviorToButton=button=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(button,{onClick:()=>{button.props.onClick&&button.props.onClick(),button.props.closesModal&&context.onClose()},key:button.props.label}),addCloseBehaviorToButtons=buttons=>!context.dismissible||!buttons||buttons instanceof Array&&0===buttons.length?(context.dismissible&&logger.warn("the 'dismissible prop prevents buttons from closing the modal"),buttons):buttons instanceof Array?buttons.map(addCloseBehaviorToButton):addCloseBehaviorToButton(buttons);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_3__.qh,{"data-testid":"modal-button-group",...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:addCloseBehaviorToButtons(primaryButtons)},"primarybuttons"),secondaryButtons&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:addCloseBehaviorToButtons(secondaryButtons)},"secondarybuttons")]})};ModalButtonGroup.displayName="ModalButtonGroup";const __WEBPACK_DEFAULT_EXPORT__=ModalButtonGroup;try{ModalButtonGroup.displayName="ModalButtonGroup",ModalButtonGroup.__docgenInfo={description:"",displayName:"ModalButtonGroup",props:{primaryButtons:{defaultValue:null,description:"Defines the primary button(s) in the modal.",name:"primaryButtons",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},secondaryButtons:{defaultValue:null,description:"Defines the secondary button(s) in the modal.",name:"secondaryButtons",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[] | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Modal/ModalButtonGroup.tsx#ModalButtonGroup"]={docgenInfo:ModalButtonGroup.__docgenInfo,name:"ModalButtonGroup",path:"src/components/ui/Modal/ModalButtonGroup.tsx#ModalButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Modal/ModalContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,k3:()=>useModalContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ModalContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({onClose(){},labelID:"",dismissible:!0}),useModalContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ModalContext),__WEBPACK_DEFAULT_EXPORT__=ModalContext;try{Context.displayName="Context",Context.__docgenInfo={description:"Context lets components pass information deep down without explicitly\npassing props.\n\nCreated from {@link createContext}",displayName:"Context",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Modal/ModalContext.tsx#Context"]={docgenInfo:Context.__docgenInfo,name:"Context",path:"src/components/ui/Modal/ModalContext.tsx#Context"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Modal/ModalHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/IconButton.tsx"),_icons_Remove__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/icons/Remove/index.tsx"),_ModalContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Modal/ModalContext.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/Modal/Styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalHeader=({tag:Tag="div",displayClose=!0,title,...rest})=>{const context=(0,_ModalContext__WEBPACK_IMPORTED_MODULE_3__.k3)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_4__.mf,{...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Tag,{className:"ch-title",id:context.labelID,children:title}),displayClose&&context?.dismissible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"ch-close-button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Close",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons_Remove__WEBPACK_IMPORTED_MODULE_2__.A,{}),onClick:()=>context&&context.onClose()})})]})};ModalHeader.displayName="ModalHeader";const __WEBPACK_DEFAULT_EXPORT__=ModalHeader;try{ModalHeader.displayName="ModalHeader",ModalHeader.__docgenInfo={description:"",displayName:"ModalHeader",props:{title:{defaultValue:null,description:"The title of the header in the modal.",name:"title",required:!0,type:{name:"string"}},displayClose:{defaultValue:{value:"true"},description:"Whether or not the close icon is shown on the modal.",name:"displayClose",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Modal/ModalHeader.tsx#ModalHeader"]={docgenInfo:ModalHeader.__docgenInfo,name:"ModalHeader",path:"src/components/ui/Modal/ModalHeader.tsx#ModalHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Modal/Styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hb:()=>StyledModalBody,mf:()=>StyledModalHeader,qh:()=>StyledModalButtonGroup,vq:()=>StyledModal});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_animations__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/animations.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledModal=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props=>props.theme.modal.wrapperBgd};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props=>props.theme.zIndex.modal};
  overflow-x: hidden;
  animation: ${_utils_animations__WEBPACK_IMPORTED_MODULE_0__.r} 0.25s ease 0s forwards;
  will-change: opacity;

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: ${props=>props.theme.radii.default};
    color: ${props=>props.theme.modal.text};
    background-color: ${props=>props.theme.modal.bgd};
    width: ${props=>props.theme.modalSizes[props.size||"md"].width};
    box-shadow: ${props=>props.theme.modal.shadow};
    max-width: ${props=>"fullscreen"===props.size?props.theme.modalSizes[props.size].width:"90vw"};
    height: ${props=>"fullscreen"===props.size?props.theme.modalSizes[props.size].height:"auto"};
    max-height: ${props=>props.theme.modalSizes[props.size||"md"].height};
    will-change: transform, opacity;
    animation: ${_utils_animations__WEBPACK_IMPORTED_MODULE_0__.W} 0.15s ease 0s forwards;

    @media only screen and (max-height: 25rem) {
      position: absolute;
      top: 2rem;
      height: auto;
      max-height: none;
    }
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledModalHeader=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.header`
  padding: 1rem 1.5rem;

  .ch-close-button {
    position: absolute;
    right: 1.55rem;
    top: 1rem;
  }

  .ch-title {
    padding-right: 2rem;
    margin: 0;
    font-size: ${props=>props.theme.modal.titleSize};
    font-weight: ${props=>props.theme.modal.titleWeight};
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledModalBody=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  font-size: ${props=>props.theme.fontSizes.text.fontSize};
  line-height: ${props=>props.theme.fontSizes.text.lineHeight};
  padding: 0 1.5rem;
  flex-grow: 1;
  overflow-y: auto;

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledModalButtonGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.footer`
  padding: 1.5rem;
  border-top: 1px solid ${props=>props.theme.modal.border};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  div:first-child {
    display: flex;
    flex-direction: row-reverse;
  }

  button + button {
    margin: 0 0.5rem 0 0.5rem;
  }

  @media (max-width: 35rem) {
    flex-direction: column;

    button {
      width: 100%;
    }

    div:first-child {
      display: flex;
      flex-direction: column;
    }

    button + button,
    div + div {
      margin: 0.5rem 0 0;
    }
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`},"./src/components/ui/Modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_Modal});var react=__webpack_require__("./node_modules/react/index.js"),constants=__webpack_require__("./src/constants/index.ts"),useClickOutside=__webpack_require__("./src/hooks/useClickOutside/index.tsx"),useUniqueId=__webpack_require__("./src/hooks/useUniqueId/index.tsx");const trap_focus=(e,content)=>{if(!content)return;const focusableElements=content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),firstFocusableEl=focusableElements[0],lastFocusableEl=focusableElements[focusableElements.length-1];e.keyCode!==constants.L.TAB&&"Tab"!==e.code||(e.shiftKey&&document.activeElement===firstFocusableEl?(e.preventDefault(),lastFocusableEl.focus()):e.shiftKey||document.activeElement!==lastFocusableEl||(e.preventDefault(),firstFocusableEl.focus()))};var Portal=__webpack_require__("./src/components/ui/Portal/index.tsx"),ModalContext=__webpack_require__("./src/components/ui/Modal/ModalContext.tsx"),Styled=__webpack_require__("./src/components/ui/Modal/Styled.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal=({size="md",onClose=()=>null,children,rootId,dismissible=!0,...rest})=>{const labelID=(0,useUniqueId.A)(),contentEl=(0,react.useRef)(null),mainEl=(0,react.useRef)(null),modalContext={onClose,labelID,dismissible};return dismissible&&(0,useClickOutside.A)(mainEl,onClose),(0,react.useEffect)((()=>{const activeNode=document.activeElement;return()=>!!activeNode&&activeNode.focus()}),[]),(0,react.useEffect)((()=>{setTimeout((()=>mainEl.current?.focus()),0);const onKeydown=e=>{e.keyCode===constants.L.ESCAPE&&onClose?onClose():trap_focus(e,contentEl.current)};return window.addEventListener("keydown",onKeydown),()=>window.removeEventListener("keydown",onKeydown)}),[]),(0,jsx_runtime.jsx)(Portal.A,{rootId,children:(0,jsx_runtime.jsx)(ModalContext.Ay.Provider,{value:modalContext,children:(0,jsx_runtime.jsx)(Styled.vq,{...rest,size,onClose,ref:contentEl,"data-testid":"modal",children:(0,jsx_runtime.jsx)("section",{"aria-modal":!0,ref:mainEl,role:"dialog",tabIndex:0,"aria-labelledby":labelID,children})})})})};Modal.displayName="Modal";const ui_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{onClose:{defaultValue:{value:"() => null"},description:"The callback fired when the modal is closed.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},size:{defaultValue:{value:"md"},description:"The size of the modal.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"fullscreen"'},{value:'"md"'},{value:'"lg"'}]}},rootId:{defaultValue:null,description:"The rootId of the modal.",name:"rootId",required:!1,type:{name:"string | undefined"}},dismissible:{defaultValue:{value:"true"},description:"Optional prop to prevent the modal from closing.",name:"dismissible",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/ui/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const Portal=({children,rootId})=>{let el,newRoot;const[mount,setMount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(rootId&&(el=document.getElementById(rootId)),el?setMount(el):(newRoot=document.createElement("div"),document.body.appendChild(newRoot),setMount(newRoot)),()=>{newRoot&&newRoot.remove()})),[rootId]),mount?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,mount):null},__WEBPACK_DEFAULT_EXPORT__=Portal;try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{rootId:{defaultValue:null,description:"Specifies the DOM node that the children of the portal will be render into.",name:"rootId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Portal/index.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/ui/Portal/index.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Radio/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_Radio});var react=__webpack_require__("./node_modules/react/index.js"),useUniqueId=__webpack_require__("./src/hooks/useUniqueId/index.tsx"),Label=__webpack_require__("./src/components/ui/Label/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const HiddenRadio=styled_components_browser_esm.Ay.input`
  ${style.Qg};

  &[aria-invalid='true'] + .ch-radio {
    border: ${props=>props.theme.inputs.error.border};
    box-shadow: ${props=>props.theme.inputs.error.shadow};
  }
`,StyledRadioWrapper=styled_components_browser_esm.Ay.span`
  > label {
    margin-left: 0.5rem;
  }
`,StyledRadio=styled_components_browser_esm.Ay.div`
  background-color: ${props=>props.theme.inputs.bgd};
  border: ${props=>props.theme.inputs.border};
  border-radius: ${props=>props.theme.radii.circle};
  box-shadow: ${props=>props.theme.inputs.shadow};
  margin-bottom: -0.1875rem;
  transition: box-shadow 0.05s ease-in;

  ${HiddenRadio}:checked ~ & {
    background-color: ${props=>props.theme.inputs.checked.bgd};
    border: ${props=>props.theme.inputs.checked.border};
    box-shadow: ${props=>props.theme.inputs.checked.shadow};
  }

  ${HiddenRadio}:focus ~ & {
    border: ${props=>props.theme.inputs.focus.border};
    box-shadow: ${props=>props.theme.inputs.focus.shadow};
  }
`,StyledRadioLabel=(0,styled_components_browser_esm.Ay)(StyledRadio)`
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;

  &:after {
    background-color: ${props=>props.checked?props.theme.inputs.checked.fontColor:props.theme.inputs.bgd};
    border-radius: ${props=>props.theme.radii.circle};
    content: '';
    display: block;
    height: 0.375rem;
    padding: 0.03125rem;
    width: 0.375rem;
    ${style.bD};
  }
`,StyledRadioIcon=(0,styled_components_browser_esm.Ay)(StyledRadio)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-color: ${props=>props.theme.colors.greys.white};
  box-shadow: none;
  margin: 0.1rem;

  ${HiddenRadio}:checked ~ & {
    svg {
      stroke: ${props=>props.theme.colors.greys.white};
    }
  }
`;try{HiddenRadio.displayName="HiddenRadio",HiddenRadio.__docgenInfo={description:"",displayName:"HiddenRadio",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#HiddenRadio"]={docgenInfo:HiddenRadio.__docgenInfo,name:"HiddenRadio",path:"src/components/ui/Radio/Styled.tsx#HiddenRadio"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadioWrapper.displayName="StyledRadioWrapper",StyledRadioWrapper.__docgenInfo={description:"",displayName:"StyledRadioWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadioWrapper"]={docgenInfo:StyledRadioWrapper.__docgenInfo,name:"StyledRadioWrapper",path:"src/components/ui/Radio/Styled.tsx#StyledRadioWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadio.displayName="StyledRadio",StyledRadio.__docgenInfo={description:"",displayName:"StyledRadio",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadio"]={docgenInfo:StyledRadio.__docgenInfo,name:"StyledRadio",path:"src/components/ui/Radio/Styled.tsx#StyledRadio"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadioLabel.displayName="StyledRadioLabel",StyledRadioLabel.__docgenInfo={description:"",displayName:"StyledRadioLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadioLabel"]={docgenInfo:StyledRadioLabel.__docgenInfo,name:"StyledRadioLabel",path:"src/components/ui/Radio/Styled.tsx#StyledRadioLabel"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadioIcon.displayName="StyledRadioIcon",StyledRadioIcon.__docgenInfo={description:"",displayName:"StyledRadioIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadioIcon"]={docgenInfo:StyledRadioIcon.__docgenInfo,name:"StyledRadioIcon",path:"src/components/ui/Radio/Styled.tsx#StyledRadioIcon"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio=props=>{const{value,checked,label,icon,onChange,testId,...rest}=props,radioNode=(0,react.useRef)(null),labelId=(0,useUniqueId.A)(),handleChange=()=>{radioNode.current?.click(),radioNode.current?.focus()};return(0,jsx_runtime.jsxs)(StyledRadioWrapper,{className:"ch-radio-wrapper","data-testid":testId,children:[(0,jsx_runtime.jsx)(HiddenRadio,{checked,id:labelId,onChange,type:"radio",value,ref:radioNode,"data-testid":"hidden-radio","aria-label":label,...rest}),icon?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(StyledRadioIcon,{checked,className:"ch-radio",onClick:handleChange,"data-testid":"styled-radio-icon",children:(0,jsx_runtime.jsx)("span",{className:"ch-icon",children:icon})})}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledRadioLabel,{checked,className:"ch-radio",onClick:handleChange,"data-testid":"styled-radio"}),(0,jsx_runtime.jsx)(Label.A,{htmlFor:labelId,className:"ch-radio-label",children:label})]})]})};Radio.displayName="Radio",Radio.displayName="Radio";const ui_Radio=Radio;try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{checked:{defaultValue:null,description:"Whether or not the radio is selected.",name:"checked",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"The icon for the radio.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The label of the radio.",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"The value of the radio.",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: any) => void"}},radioProps:{defaultValue:null,description:"Other props of the radio.",name:"radioProps",required:!1,type:{name:"InputHTMLAttributes<HTMLButtonElement> | undefined"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/index.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/ui/Radio/index.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/RadioGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,z:()=>RadioGroup});__webpack_require__("./node_modules/react/index.js");var _Radio__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Radio/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioGroup=props=>{const{options,value,onChange}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:options.map(((option,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Radio__WEBPACK_IMPORTED_MODULE_1__.A,{value:option.value,label:option.label,checked:option.value===value,icon:option.icon,onChange,testId:option.testId,...option.inputProps},`${option}-${index}`)))})};RadioGroup.displayName="RadioGroup";const __WEBPACK_DEFAULT_EXPORT__=RadioGroup;try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},options:{defaultValue:null,description:"Options of radio group.",name:"options",required:!0,type:{name:"RadioProps[]"}},value:{defaultValue:null,description:"The selected option.",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/RadioGroup/index.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/components/ui/RadioGroup/index.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useUniqueId/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),uuid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");const __WEBPACK_DEFAULT_EXPORT__=function useUniqueId(){const[uniqueId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>(0,uuid__WEBPACK_IMPORTED_MODULE_1__.A)()));return uniqueId}},"./src/utils/animations.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>slideDownAndScaleUp,r:()=>fadeAnimation});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const fadeAnimation=styled_components__WEBPACK_IMPORTED_MODULE_0__.i7`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,slideDownAndScaleUp=styled_components__WEBPACK_IMPORTED_MODULE_0__.i7`
  0% {
    opacity: 0;
    transform: translateY(4rem) scale(0.4);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`}}]);
//# sourceMappingURL=3012.98cb7776.iframe.bundle.js.map