"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[4326],{"./src/components/ui/FormField/FormField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicInputFormField:()=>BasicInputFormField,CheckboxFormField:()=>CheckboxFormField,MixedInputsFormField:()=>MixedInputsFormField,RadioGroupFormField:()=>RadioGroupFormField,SelectFormField:()=>SelectFormField,TextareaFormField:()=>TextareaFormField,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/FormField/index.tsx"),_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Input/index.tsx"),_Checkbox__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Checkbox/index.tsx"),_Textarea__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/Textarea/index.tsx"),_Select__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/Select/index.tsx"),_RadioGroup__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/ui/RadioGroup/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React, { useState } from 'react';\n\nimport FormField from '.';\nimport Input from '../Input';\nimport Checkbox from '../Checkbox';\nimport Textarea from '../Textarea';\nimport Select from '../Select';\nimport RadioGroup from '../RadioGroup';\n\nexport default {\n  title: 'UI Components/Form/FormField',\n  component: FormField,\n};\n\nconst commonHiddenArgTypes = {\n  checked: { table: { disable: true } },\n  field: { table: { disable: true } },\n  fieldProps: { table: { disable: true } },\n  onChange: { table: { disable: true } },\n  value: { table: { disable: true } },\n  options: { table: { disable: true } },\n};\n\nconst options = [\n  {\n    value: 'react',\n    label: 'React',\n  },\n  {\n    value: 'angular',\n    label: 'Angular',\n  },\n  {\n    value: 'vue',\n    label: 'Vue',\n  },\n  {\n    value: 'none',\n    label: 'None',\n  },\n];\n\ninterface FormFieldProps {\n  label: string;\n  layout?: 'stack' | 'horizontal' | 'input-only';\n  error: boolean;\n  infoText: string;\n  errorText: string;\n  placeholder?: string;\n}\n\nconst TestInput: React.FC<React.PropsWithChildren<FormFieldProps>> = (\n  props\n) => {\n  const [name, setName] = useState('');\n\n  function handleChange(evt: any) {\n    const value = evt.target.value;\n    setName(value);\n  }\n\n  return (\n    <FormField\n      field={Input}\n      label={props.label}\n      value={name}\n      fieldProps={{\n        name: 'firstName',\n        placeholder: props.placeholder,\n      }}\n      onChange={handleChange}\n      layout={props.layout}\n      errorText={props.errorText}\n      error={props.error}\n      infoText={props.infoText}\n    />\n  );\n};\n\nexport const BasicInputFormField = (args) => {\n  return (\n    <div style={{ width: '20rem' }}>\n      <TestInput {...args} />\n    </div>\n  );\n};\n\nBasicInputFormField.args = {\n  layout: 'stack',\n  label: 'First Name',\n  placeholder: 'Enter your first name',\n  infoText: 'This is some informational text',\n  error: false,\n  errorText: 'This is some error text',\n};\n\nBasicInputFormField.argTypes = {\n  layout: { control: 'radio', options: ['stack', 'horizontal', 'input-only'] },\n  label: { control: 'text' },\n  placeholder: { control: 'text' },\n  infoText: { control: 'text' },\n  error: { control: 'boolean' },\n  errorText: { control: 'text' },\n  ...commonHiddenArgTypes,\n};\n\nconst TestSelect: React.FC<React.PropsWithChildren<FormFieldProps>> = (\n  props\n) => {\n  const [value, setValue] = useState('');\n  const handleChange = (e: any) => setValue(e.target.value);\n\n  return (\n    <FormField\n      field={Select}\n      options={options}\n      onChange={handleChange}\n      value={value}\n      label={props.label}\n      layout={props.layout}\n      errorText={props.errorText}\n      error={props.error}\n      infoText={props.infoText}\n    />\n  );\n};\n\nexport const SelectFormField = (args) => {\n  return (\n    <div style={{ width: '20rem' }}>\n      <TestSelect {...args} />\n    </div>\n  );\n};\n\nSelectFormField.args = {\n  layout: 'stack',\n  label: 'Select a framework',\n  infoText: 'This is some informational text',\n  error: false,\n  errorText: 'This is some error text',\n};\n\nSelectFormField.argTypes = {\n  layout: { control: 'radio', options: ['stack', 'horizontal', 'input-only'] },\n  label: { control: 'text' },\n  infoText: { control: 'text' },\n  error: { control: 'boolean' },\n  errorText: { control: 'text' },\n  ...commonHiddenArgTypes,\n};\n\nconst TestTextarea: React.FC<React.PropsWithChildren<FormFieldProps>> = (\n  props\n) => {\n  const [value, setValue] = useState('');\n\n  const handleChange = (e: any) => {\n    setValue(e.target.value);\n  };\n\n  return (\n    <FormField\n      field={Textarea}\n      label={props.label}\n      value={value}\n      fieldProps={{ placeholder: props.placeholder }}\n      onChange={handleChange}\n      layout={props.layout}\n      infoText={props.infoText}\n      error={props.error}\n      errorText={props.errorText}\n    />\n  );\n};\n\nexport const TextareaFormField = (args) => {\n  return (\n    <div style={{ width: '20rem' }}>\n      <TestTextarea {...args} />\n    </div>\n  );\n};\n\nTextareaFormField.args = {\n  layout: 'stack',\n  label: 'Description',\n  placeholder: 'Enter your description here',\n  infoText: 'This is some informational text',\n  error: false,\n  errorText: 'This is some error text',\n};\n\nTextareaFormField.argTypes = {\n  layout: { control: 'radio', options: ['stack', 'horizontal', 'input-only'] },\n  label: { control: 'text' },\n  placeholder: { control: 'text' },\n  infoText: { control: 'text' },\n  error: { control: 'boolean' },\n  errorText: { control: 'text' },\n  ...commonHiddenArgTypes,\n};\n\nconst TestRadioGroup: React.FC<React.PropsWithChildren<FormFieldProps>> = (\n  props\n) => {\n  const [value, setValue] = useState('');\n\n  const handleChange = (evt: any) => {\n    setValue(evt.target.value);\n  };\n\n  return (\n    <FormField\n      options={options}\n      field={RadioGroup}\n      onChange={handleChange}\n      value={value}\n      label={props.label}\n      errorText={props.errorText}\n      error={props.error}\n      infoText={props.infoText}\n    />\n  );\n};\n\nexport const RadioGroupFormField = (args) => {\n  return (\n    <div style={{ width: '20rem' }}>\n      <TestRadioGroup {...args} />\n    </div>\n  );\n};\n\nRadioGroupFormField.args = {\n  label: 'Select from the following:',\n  infoText: 'This is some informational text',\n  error: false,\n  errorText: 'This is some error text',\n};\n\nRadioGroupFormField.argTypes = {\n  label: { control: 'text' },\n  infoText: { control: 'text' },\n  error: { control: 'boolean' },\n  errorText: { control: 'text' },\n  layout: { table: { disable: true } },\n  ...commonHiddenArgTypes,\n};\n\nconst TestCheckboxGroup: React.FC<React.PropsWithChildren<{}>> = (props) => {\n  const [state, setState] = React.useState({\n    react: false,\n    angular: false,\n    vue: false,\n  });\n\n  function handleChange(evt: any) {\n    const value = evt.target.checked;\n    setState({\n      ...state,\n      [evt.target.value]: value,\n    });\n  }\n\n  return (\n    <>\n      <FormField\n        field={Checkbox}\n        label=\"React\"\n        value=\"react\"\n        checked={state.react}\n        onChange={handleChange}\n      />\n      <FormField\n        field={Checkbox}\n        label=\"Angular\"\n        value=\"angular\"\n        checked={state.angular}\n        onChange={handleChange}\n      />\n      <FormField\n        field={Checkbox}\n        label=\"Vue\"\n        value=\"vue\"\n        checked={state.vue}\n        onChange={handleChange}\n      />\n    </>\n  );\n};\n\nexport const CheckboxFormField = () => {\n  return (\n    <div style={{ width: '20rem' }}>\n      <TestCheckboxGroup />\n    </div>\n  );\n};\n\nCheckboxFormField.argTypes = {\n  layout: { table: { disable: true } },\n  label: { table: { disable: true } },\n  infoText: { table: { disable: true } },\n  error: { table: { disable: true } },\n  errorText: { table: { disable: true } },\n  ...commonHiddenArgTypes,\n};\n\nconst TestMixedInputs: React.FC<React.PropsWithChildren<FormFieldProps>> = (\n  props\n) => {\n  const [state, setState] = useState({\n    firstName: '',\n    lastName: '',\n    acknowledge: false,\n    select: '',\n    textarea: '',\n    tabs: 'spaces',\n  });\n\n  function handleChange(evt: any) {\n    const value =\n      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;\n\n    setState({\n      ...state,\n      [evt.target.type === 'radio' ? 'tabs' : evt.target.name]: value,\n    });\n  }\n\n  return (\n    <>\n      <FormField\n        field={Input}\n        label=\"First Name\"\n        value={state.firstName}\n        fieldProps={{\n          name: 'firstName',\n          placeholder: 'Enter your first name',\n        }}\n        onChange={handleChange}\n        layout={props.layout}\n        errorText=\"This is invalid\"\n        error={props.error}\n      />\n      <FormField\n        layout={props.layout}\n        options={options}\n        field={RadioGroup}\n        onChange={handleChange}\n        value={state.tabs}\n        label=\"Select from the following\"\n        errorText=\"This is invalid\"\n        error={props.error}\n      />\n      <FormField\n        layout={props.layout}\n        fieldProps={{ name: 'select' }}\n        field={Select}\n        options={options}\n        onChange={handleChange}\n        value={state.select}\n        label=\"Select a framework\"\n        errorText=\"This is invalid\"\n        error={props.error}\n      />\n      <FormField\n        layout={props.layout}\n        field={Textarea}\n        label=\"Additional comments\"\n        value={state.textarea}\n        fieldProps={{\n          placeholder: 'Enter any additional comments',\n          name: 'textarea',\n        }}\n        onChange={handleChange}\n        errorText=\"This is invalid\"\n        error={props.error}\n      />\n      <FormField\n        layout={props.layout}\n        field={Checkbox}\n        fieldProps={{ name: 'acknowledge' }}\n        label=\"Acknowledge\"\n        value=\"acknowledge\"\n        checked={state.acknowledge}\n        onChange={handleChange}\n        errorText=\"This is invalid\"\n        error={props.error}\n      />\n    </>\n  );\n};\n\nexport const MixedInputsFormField = (args) => {\n  return (\n    <div style={{ width: '20rem' }}>\n      <TestMixedInputs {...args} />\n    </div>\n  );\n};\n\nMixedInputsFormField.args = {\n  layout: 'stack',\n  error: false,\n};\n\nMixedInputsFormField.argTypes = {\n  layout: { control: 'radio', options: ['stack', 'horizontal', 'input-only'] },\n  error: { control: 'boolean' },\n  label: { table: { disable: true } },\n  infoText: { table: { disable: true } },\n  errorText: { table: { disable: true } },\n  ...commonHiddenArgTypes,\n};\n",locationsMap:{"basic-input-form-field":{startLoc:{col:35,line:83},endLoc:{col:1,line:89},startBody:{col:35,line:83},endBody:{col:1,line:89}},"select-form-field":{startLoc:{col:31,line:131},endLoc:{col:1,line:137},startBody:{col:31,line:131},endBody:{col:1,line:137}},"textarea-form-field":{startLoc:{col:33,line:180},endLoc:{col:1,line:186},startBody:{col:33,line:180},endBody:{col:1,line:186}},"radio-group-form-field":{startLoc:{col:35,line:230},endLoc:{col:1,line:236},startBody:{col:35,line:230},endBody:{col:1,line:236}},"checkbox-form-field":{startLoc:{col:33,line:296},endLoc:{col:1,line:302},startBody:{col:33,line:296},endBody:{col:1,line:302}},"mixed-inputs-form-field":{startLoc:{col:36,line:399},endLoc:{col:1,line:405},startBody:{col:36,line:399},endBody:{col:1,line:405}}}}},title:"UI Components/Form/FormField",component:___WEBPACK_IMPORTED_MODULE_1__.A},commonHiddenArgTypes={checked:{table:{disable:!0}},field:{table:{disable:!0}},fieldProps:{table:{disable:!0}},onChange:{table:{disable:!0}},value:{table:{disable:!0}},options:{table:{disable:!0}}},options=[{value:"react",label:"React"},{value:"angular",label:"Angular"},{value:"vue",label:"Vue"},{value:"none",label:"None"}],TestInput=props=>{const[name,setName]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{field:_Input__WEBPACK_IMPORTED_MODULE_2__.A,label:props.label,value:name,fieldProps:{name:"firstName",placeholder:props.placeholder},onChange:function handleChange(evt){const value=evt.target.value;setName(value)},layout:props.layout,errorText:props.errorText,error:props.error,infoText:props.infoText})};TestInput.displayName="TestInput";const BasicInputFormField=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{style:{width:"20rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TestInput,{...args})});BasicInputFormField.displayName="BasicInputFormField",BasicInputFormField.args={layout:"stack",label:"First Name",placeholder:"Enter your first name",infoText:"This is some informational text",error:!1,errorText:"This is some error text"},BasicInputFormField.argTypes={layout:{control:"radio",options:["stack","horizontal","input-only"]},label:{control:"text"},placeholder:{control:"text"},infoText:{control:"text"},error:{control:"boolean"},errorText:{control:"text"},...commonHiddenArgTypes};const TestSelect=props=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{field:_Select__WEBPACK_IMPORTED_MODULE_5__.A,options,onChange:e=>setValue(e.target.value),value,label:props.label,layout:props.layout,errorText:props.errorText,error:props.error,infoText:props.infoText})};TestSelect.displayName="TestSelect";const SelectFormField=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{style:{width:"20rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TestSelect,{...args})});SelectFormField.displayName="SelectFormField",SelectFormField.args={layout:"stack",label:"Select a framework",infoText:"This is some informational text",error:!1,errorText:"This is some error text"},SelectFormField.argTypes={layout:{control:"radio",options:["stack","horizontal","input-only"]},label:{control:"text"},infoText:{control:"text"},error:{control:"boolean"},errorText:{control:"text"},...commonHiddenArgTypes};const TestTextarea=props=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{field:_Textarea__WEBPACK_IMPORTED_MODULE_4__.A,label:props.label,value,fieldProps:{placeholder:props.placeholder},onChange:e=>{setValue(e.target.value)},layout:props.layout,infoText:props.infoText,error:props.error,errorText:props.errorText})};TestTextarea.displayName="TestTextarea";const TextareaFormField=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{style:{width:"20rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TestTextarea,{...args})});TextareaFormField.displayName="TextareaFormField",TextareaFormField.args={layout:"stack",label:"Description",placeholder:"Enter your description here",infoText:"This is some informational text",error:!1,errorText:"This is some error text"},TextareaFormField.argTypes={layout:{control:"radio",options:["stack","horizontal","input-only"]},label:{control:"text"},placeholder:{control:"text"},infoText:{control:"text"},error:{control:"boolean"},errorText:{control:"text"},...commonHiddenArgTypes};const TestRadioGroup=props=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{options,field:_RadioGroup__WEBPACK_IMPORTED_MODULE_6__.A,onChange:evt=>{setValue(evt.target.value)},value,label:props.label,errorText:props.errorText,error:props.error,infoText:props.infoText})};TestRadioGroup.displayName="TestRadioGroup";const RadioGroupFormField=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{style:{width:"20rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TestRadioGroup,{...args})});RadioGroupFormField.displayName="RadioGroupFormField",RadioGroupFormField.args={label:"Select from the following:",infoText:"This is some informational text",error:!1,errorText:"This is some error text"},RadioGroupFormField.argTypes={label:{control:"text"},infoText:{control:"text"},error:{control:"boolean"},errorText:{control:"text"},layout:{table:{disable:!0}},...commonHiddenArgTypes};const TestCheckboxGroup=props=>{const[state,setState]=react__WEBPACK_IMPORTED_MODULE_0__.useState({react:!1,angular:!1,vue:!1});function handleChange(evt){const value=evt.target.checked;setState({...state,[evt.target.value]:value})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{field:_Checkbox__WEBPACK_IMPORTED_MODULE_3__.A,label:"React",value:"react",checked:state.react,onChange:handleChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{field:_Checkbox__WEBPACK_IMPORTED_MODULE_3__.A,label:"Angular",value:"angular",checked:state.angular,onChange:handleChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{field:_Checkbox__WEBPACK_IMPORTED_MODULE_3__.A,label:"Vue",value:"vue",checked:state.vue,onChange:handleChange})]})},CheckboxFormField=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{style:{width:"20rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TestCheckboxGroup,{})});CheckboxFormField.displayName="CheckboxFormField",CheckboxFormField.argTypes={layout:{table:{disable:!0}},label:{table:{disable:!0}},infoText:{table:{disable:!0}},error:{table:{disable:!0}},errorText:{table:{disable:!0}},...commonHiddenArgTypes};const TestMixedInputs=props=>{const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({firstName:"",lastName:"",acknowledge:!1,select:"",textarea:"",tabs:"spaces"});function handleChange(evt){const value="checkbox"===evt.target.type?evt.target.checked:evt.target.value;setState({...state,["radio"===evt.target.type?"tabs":evt.target.name]:value})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{field:_Input__WEBPACK_IMPORTED_MODULE_2__.A,label:"First Name",value:state.firstName,fieldProps:{name:"firstName",placeholder:"Enter your first name"},onChange:handleChange,layout:props.layout,errorText:"This is invalid",error:props.error}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{layout:props.layout,options,field:_RadioGroup__WEBPACK_IMPORTED_MODULE_6__.A,onChange:handleChange,value:state.tabs,label:"Select from the following",errorText:"This is invalid",error:props.error}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{layout:props.layout,fieldProps:{name:"select"},field:_Select__WEBPACK_IMPORTED_MODULE_5__.A,options,onChange:handleChange,value:state.select,label:"Select a framework",errorText:"This is invalid",error:props.error}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{layout:props.layout,field:_Textarea__WEBPACK_IMPORTED_MODULE_4__.A,label:"Additional comments",value:state.textarea,fieldProps:{placeholder:"Enter any additional comments",name:"textarea"},onChange:handleChange,errorText:"This is invalid",error:props.error}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{layout:props.layout,field:_Checkbox__WEBPACK_IMPORTED_MODULE_3__.A,fieldProps:{name:"acknowledge"},label:"Acknowledge",value:"acknowledge",checked:state.acknowledge,onChange:handleChange,errorText:"This is invalid",error:props.error})]})},MixedInputsFormField=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{style:{width:"20rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TestMixedInputs,{...args})});MixedInputsFormField.displayName="MixedInputsFormField",MixedInputsFormField.args={layout:"stack",error:!1},MixedInputsFormField.argTypes={layout:{control:"radio",options:["stack","horizontal","input-only"]},error:{control:"boolean"},label:{table:{disable:!0}},infoText:{table:{disable:!0}},errorText:{table:{disable:!0}},...commonHiddenArgTypes},BasicInputFormField.parameters={...BasicInputFormField.parameters,docs:{...BasicInputFormField.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '20rem'\n  }}>\n      <TestInput {...args} />\n    </div>;\n}",...BasicInputFormField.parameters?.docs?.source}}},SelectFormField.parameters={...SelectFormField.parameters,docs:{...SelectFormField.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '20rem'\n  }}>\n      <TestSelect {...args} />\n    </div>;\n}",...SelectFormField.parameters?.docs?.source}}},TextareaFormField.parameters={...TextareaFormField.parameters,docs:{...TextareaFormField.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '20rem'\n  }}>\n      <TestTextarea {...args} />\n    </div>;\n}",...TextareaFormField.parameters?.docs?.source}}},RadioGroupFormField.parameters={...RadioGroupFormField.parameters,docs:{...RadioGroupFormField.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '20rem'\n  }}>\n      <TestRadioGroup {...args} />\n    </div>;\n}",...RadioGroupFormField.parameters?.docs?.source}}},CheckboxFormField.parameters={...CheckboxFormField.parameters,docs:{...CheckboxFormField.parameters?.docs,source:{originalSource:"() => {\n  return <div style={{\n    width: '20rem'\n  }}>\n      <TestCheckboxGroup />\n    </div>;\n}",...CheckboxFormField.parameters?.docs?.source}}},MixedInputsFormField.parameters={...MixedInputsFormField.parameters,docs:{...MixedInputsFormField.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '20rem'\n  }}>\n      <TestMixedInputs {...args} />\n    </div>;\n}",...MixedInputsFormField.parameters?.docs?.source}}};const __namedExportsOrder=["BasicInputFormField","SelectFormField","TextareaFormField","RadioGroupFormField","CheckboxFormField","MixedInputsFormField"];try{BasicInputFormField.displayName="BasicInputFormField",BasicInputFormField.__docgenInfo={description:"",displayName:"BasicInputFormField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/FormField.stories.tsx#BasicInputFormField"]={docgenInfo:BasicInputFormField.__docgenInfo,name:"BasicInputFormField",path:"src/components/ui/FormField/FormField.stories.tsx#BasicInputFormField"})}catch(__react_docgen_typescript_loader_error){}try{SelectFormField.displayName="SelectFormField",SelectFormField.__docgenInfo={description:"",displayName:"SelectFormField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/FormField.stories.tsx#SelectFormField"]={docgenInfo:SelectFormField.__docgenInfo,name:"SelectFormField",path:"src/components/ui/FormField/FormField.stories.tsx#SelectFormField"})}catch(__react_docgen_typescript_loader_error){}try{TextareaFormField.displayName="TextareaFormField",TextareaFormField.__docgenInfo={description:"",displayName:"TextareaFormField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/FormField.stories.tsx#TextareaFormField"]={docgenInfo:TextareaFormField.__docgenInfo,name:"TextareaFormField",path:"src/components/ui/FormField/FormField.stories.tsx#TextareaFormField"})}catch(__react_docgen_typescript_loader_error){}try{RadioGroupFormField.displayName="RadioGroupFormField",RadioGroupFormField.__docgenInfo={description:"",displayName:"RadioGroupFormField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/FormField.stories.tsx#RadioGroupFormField"]={docgenInfo:RadioGroupFormField.__docgenInfo,name:"RadioGroupFormField",path:"src/components/ui/FormField/FormField.stories.tsx#RadioGroupFormField"})}catch(__react_docgen_typescript_loader_error){}try{MixedInputsFormField.displayName="MixedInputsFormField",MixedInputsFormField.__docgenInfo={description:"",displayName:"MixedInputsFormField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/FormField.stories.tsx#MixedInputsFormField"]={docgenInfo:MixedInputsFormField.__docgenInfo,name:"MixedInputsFormField",path:"src/components/ui/FormField/FormField.stories.tsx#MixedInputsFormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox,A:()=>ui_Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./src/components/ui/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const HiddenCheckbox=styled_components_browser_esm.Ay.input`
  ${style.Qg};

  &[aria-invalid='true'] + .ch-checkbox {
    border: ${props=>props.theme.inputs.error.border};
    box-shadow: ${props=>props.theme.inputs.error.shadow};
  }
`,StyledCheckbox=styled_components_browser_esm.Ay.div`
  background-color: ${props=>props.theme.inputs.bgd};
  border: ${props=>props.theme.inputs.border};
  border-radius: ${props=>props.theme.radii.default};
  box-shadow: ${props=>props.theme.inputs.shadow};
  color: ${props=>props.theme.inputs.fontColor};
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;
  transition: box-shadow 0.05s ease-in;

  > svg {
    left: -0.03125rem;
    position: absolute;
    transform: scale(1.5);
  }

  ${HiddenCheckbox}:checked ~ & {
    background-color: ${props=>props.theme.inputs.checked.bgd};
    border: ${props=>props.theme.inputs.checked.border};
    box-shadow: ${props=>props.theme.inputs.checked.shadow};
    color: ${props=>props.theme.inputs.checked.fontColor};
  }

  ${HiddenCheckbox}:focus ~ & {
    border: ${props=>props.theme.inputs.focus.border};
    box-shadow: ${props=>props.theme.inputs.focus.shadow};
  }
`;try{HiddenCheckbox.displayName="HiddenCheckbox",HiddenCheckbox.__docgenInfo={description:"",displayName:"HiddenCheckbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Checkbox/Styled.tsx#HiddenCheckbox"]={docgenInfo:HiddenCheckbox.__docgenInfo,name:"HiddenCheckbox",path:"src/components/ui/Checkbox/Styled.tsx#HiddenCheckbox"})}catch(__react_docgen_typescript_loader_error){}try{StyledCheckbox.displayName="StyledCheckbox",StyledCheckbox.__docgenInfo={description:"",displayName:"StyledCheckbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Checkbox/Styled.tsx#StyledCheckbox"]={docgenInfo:StyledCheckbox.__docgenInfo,name:"StyledCheckbox",path:"src/components/ui/Checkbox/Styled.tsx#StyledCheckbox"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=props=>{const{checked,onChange,value}=props,checkboxNode=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(HiddenCheckbox,{...props,"data-testid":"hidden-checkbox",ref:checkboxNode,type:"checkbox",value,onChange}),(0,jsx_runtime.jsx)(StyledCheckbox,{"data-testid":"styled-checkbox",checked,className:"ch-checkbox",onClick:()=>{checkboxNode.current?.click(),checkboxNode.current?.focus()},children:checked&&(0,jsx_runtime.jsx)(icons.Jl,{"data-testid":"check"})})]})};Checkbox.displayName="Checkbox";const ui_Checkbox=Checkbox;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event?: string | ChangeEvent<Element> | undefined) => void"}},value:{defaultValue:null,description:"The value of the checkbox.",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"Whether or not the checkbox is checked.",name:"checked",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/ui/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/FormField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>FormField,A:()=>ui_FormField});var react=__webpack_require__("./node_modules/react/index.js"),useUniqueId=__webpack_require__("./src/hooks/useUniqueId/index.tsx"),Label=__webpack_require__("./src/components/ui/Label/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const stack=styled_components_browser_esm.AH`
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
`;try{StyledFormField.displayName="StyledFormField",StyledFormField.__docgenInfo={description:"",displayName:"StyledFormField",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},layout:{defaultValue:null,description:"Specify the layout of the field, it defaults to `stack`.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"horizontal"'},{value:'"input-only"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/Styled.tsx#StyledFormField"]={docgenInfo:StyledFormField.__docgenInfo,name:"StyledFormField",path:"src/components/ui/FormField/Styled.tsx#StyledFormField"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormField=(0,react.forwardRef)(((props,ref)=>{const{field:Field,label,layout="stack",errorText,fieldProps,infoText,error,onChange,value,checked,options,className,...rest}=props,displayName=Field.displayName?.toLowerCase()||"",labelId=(0,useUniqueId.A)(),descriptionId=(0,useUniqueId.A)(),helpText=error&&errorText||infoText;return(0,jsx_runtime.jsxs)(StyledFormField,{layout,error,className:`ch-form-field-${displayName} ${className||""}`,"data-testid":"form-field",...rest,children:["input-only"===layout&&"checkbox"!==displayName?null:"radiogroup"!==displayName&&(0,jsx_runtime.jsx)(Label.A,{htmlFor:labelId,className:`ch-${displayName}-label`,children:label}),"radiogroup"===displayName?(0,jsx_runtime.jsxs)("fieldset",{"aria-describedby":helpText&&descriptionId,"aria-invalid":error,children:[label&&(0,jsx_runtime.jsx)("legend",{children:label}),(0,jsx_runtime.jsx)(Field,{options,ref,id:labelId,onChange,value,...fieldProps})]}):(0,jsx_runtime.jsx)(Field,{options,"aria-label":"input-only"===layout&&label||null,"aria-describedby":helpText&&descriptionId,"aria-invalid":error,ref,id:labelId,onChange,value,checked,...fieldProps}),helpText&&(0,jsx_runtime.jsx)("span",{className:"ch-help-text",id:descriptionId,children:helpText})]})})),ui_FormField=FormField;try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},label:{defaultValue:null,description:"The label of the field.",name:"label",required:!0,type:{name:"string"}},field:{defaultValue:null,description:"The type of the field.",name:"field",required:!0,type:{name:"FieldType"}},infoText:{defaultValue:null,description:"The informational text in the field.",name:"infoText",required:!1,type:{name:"string | undefined"}},error:{defaultValue:null,description:"Whether or not the error text is shown.",name:"error",required:!1,type:{name:"boolean | undefined"}},errorText:{defaultValue:null,description:"The error text in the field.",name:"errorText",required:!1,type:{name:"string | undefined"}},fieldProps:{defaultValue:null,description:"Additional props for field component.",name:"fieldProps",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"Whether or not the field is checked.",name:"checked",required:!1,type:{name:"boolean | undefined"}},options:{defaultValue:null,description:"Options for some fields, e.g. radio group or select.",name:"options",required:!1,type:{name:"string[] | object[] | undefined"}},layout:{defaultValue:null,description:"Specify the layout of the field, it defaults to `stack`.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"horizontal"'},{value:'"input-only"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/FormField/index.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/ui/FormField/index.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Input/InputWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Input/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputWrapper=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>{const{leadingIcon,children,sizing,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.to,{ref,sizing,leadingIcon,...rest,"data-testid":"input-wrapper",children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon",children:leadingIcon}),children]})})),__WEBPACK_DEFAULT_EXPORT__=InputWrapper;try{InputWrapper.displayName="InputWrapper",InputWrapper.__docgenInfo={description:"",displayName:"InputWrapper",props:{leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},sizing:{defaultValue:null,description:"",name:"sizing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"sm"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/InputWrapper.tsx#InputWrapper"]={docgenInfo:InputWrapper.__docgenInfo,name:"InputWrapper",path:"src/components/ui/Input/InputWrapper.tsx#InputWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Input/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sQ:()=>StyledInput,to:()=>StyledInputWrapper,vG:()=>StyledClear});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledInputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span`
  position: relative;

  > .ch-icon {
    position: absolute;
    width: 1rem;
    left: 0.1875rem;
    position: absolute;
    top: 54%;
    transform: translateY(-50%);
  }

  > input {
    padding: ${props=>(props=>{const{sizing,leadingIcon}=props;return"sm"===sizing?"0.125rem 1.75rem 0.125rem "+(leadingIcon?"1.3125rem":"0.5rem"):"0.34375rem 1.75rem 0.34375rem "+(leadingIcon?"1.3125rem":"0.5rem")})(props)};
  }
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input`
  align-items: center;
  display: flex;
  letter-spacing: -0.005625rem;
  transition: box-shadow 0.05s ease-in;
  background-color: ${props=>props.theme.inputs.bgd};
  border: ${props=>props.theme.inputs.border};
  border-radius: ${props=>props.theme.inputs.borderRadius};
  box-shadow: ${props=>props.theme.inputs.shadow};
  color: ${props=>props.theme.inputs.fontColor};
  font-size: ${props=>props.theme.fontSizes.text.fontSize};
  line-height: ${props=>props.theme.fontSizes.text.lineHeight};

  &::placeholder {
    color: ${props=>props.theme.inputs.placeholder};
  }

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

  // Hides native clear button
  &::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_0__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_0__.i}
`,StyledClear=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
  position: absolute;
  top: 50%;
  right: 0.125rem;
  transform: translateY(-44%);
  border: none;
  background: none;
  cursor: pointer;
  display: ${props=>props.active?"block":"none"};

  path {
    fill: ${props=>props.theme.inputs.clearBg};
  }

  &:active,
  &:focus {
    outline: none;
  }
`;try{StyledInputWrapper.displayName="StyledInputWrapper",StyledInputWrapper.__docgenInfo={description:"",displayName:"StyledInputWrapper",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},sizing:{defaultValue:null,description:"",name:"sizing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"sm"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/Styled.tsx#StyledInputWrapper"]={docgenInfo:StyledInputWrapper.__docgenInfo,name:"StyledInputWrapper",path:"src/components/ui/Input/Styled.tsx#StyledInputWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StyledInput.displayName="StyledInput",StyledInput.__docgenInfo={description:"",displayName:"StyledInput",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/Styled.tsx#StyledInput"]={docgenInfo:StyledInput.__docgenInfo,name:"StyledInput",path:"src/components/ui/Input/Styled.tsx#StyledInput"})}catch(__react_docgen_typescript_loader_error){}try{StyledClear.displayName="StyledClear",StyledClear.__docgenInfo={description:"",displayName:"StyledClear",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/Styled.tsx#StyledClear"]={docgenInfo:StyledClear.__docgenInfo,name:"StyledClear",path:"src/components/ui/Input/Styled.tsx#StyledClear"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/index.tsx"),_InputWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Input/InputWrapper.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Input/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,externalRef)=>{const{type,value,sizing,onClear,onChange,className,leadingIcon,showClear=!0,...rest}=props,[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),focusedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),internalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),inputRef=externalRef||internalRef,clearRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),label=props["aria-label"]?`clear ${props["aria-label"]}`:"clear";return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let blurring=!1;const onFocus=e=>{if(focusedRef.current)return e.target!==clearRef.current&&e.target!==inputRef.current?(focusedRef.current=!1,void setFocused(!1)):void(blurring&&(blurring=!1))},onFocusOut=()=>{focusedRef.current&&(blurring=!0,setTimeout((()=>{blurring&&(focusedRef.current=!1,setFocused(!1)),blurring=!1}),10))};return document.addEventListener("focusin",onFocus),document.addEventListener("focusout",onFocusOut),()=>{document.removeEventListener("focusin",onFocus),document.removeEventListener("focusout",onFocusOut)}}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__.A,{leadingIcon,sizing,className:`ch-input-wrapper ${className||""}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_3__.sQ,{...rest,value,type:type||"text",ref:inputRef,className:"ch-input",onChange,"data-testid":"input",onFocus:()=>{focusedRef.current=!0,setFocused(!0)}}),showClear&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_3__.vG,{type:"button",active:!!(onClear||focused&&value.length),tabIndex:-1,"aria-label":label,onClick:()=>{if(onClear)return void onClear();const input=inputRef.current,nativeSetter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;nativeSetter&&input&&(nativeSetter.call(input,""),input.dispatchEvent(new Event("input",{bubbles:!0}))),input.focus()},ref:clearRef,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.kc,{width:"1.25rem"})})]})}));Input.displayName="Input";const __WEBPACK_DEFAULT_EXPORT__=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},onClear:{defaultValue:null,description:"The callback fired when the input value is cleared.",name:"onClear",required:!1,type:{name:"(() => void) | undefined"}},leadingIcon:{defaultValue:null,description:"The icon in the input.",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},sizing:{defaultValue:null,description:"The size of the input.",name:"sizing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"sm"'}]}},value:{defaultValue:null,description:"The value of the input.",name:"value",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"The id of the input.",name:"id",required:!1,type:{name:"string | undefined"}},showClear:{defaultValue:null,description:"Whether or not the clear icon is shown, it defaults to `true`.",name:"showClear",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Input/index.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/ui/Input/index.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label,A:()=>ui_Label});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledLabel=styled_components_browser_esm.Ay.label`
  color: ${props=>props.theme.inputs.fontColor};
  font-size: ${props=>props.theme.fontSizes.label.fontSize};
  line-height: ${props=>props.theme.fontSizes.label.lineHeight};

  ${Base.d}
  ${Base.i}
`;try{StyledLabel.displayName="StyledLabel",StyledLabel.__docgenInfo={description:"",displayName:"StyledLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Label/Styled.tsx#StyledLabel"]={docgenInfo:StyledLabel.__docgenInfo,name:"StyledLabel",path:"src/components/ui/Label/Styled.tsx#StyledLabel"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=(0,react.forwardRef)(((props,ref)=>{const{className,tag,...rest}=props;return(0,jsx_runtime.jsx)(StyledLabel,{as:tag,"data-testid":"label",className:className||"",...rest,children:props.children})})),ui_Label=Label;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/ui/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Radio/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_Radio});var react=__webpack_require__("./node_modules/react/index.js"),useUniqueId=__webpack_require__("./src/hooks/useUniqueId/index.tsx"),Label=__webpack_require__("./src/components/ui/Label/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const HiddenRadio=styled_components_browser_esm.Ay.input`
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
`;try{HiddenRadio.displayName="HiddenRadio",HiddenRadio.__docgenInfo={description:"",displayName:"HiddenRadio",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#HiddenRadio"]={docgenInfo:HiddenRadio.__docgenInfo,name:"HiddenRadio",path:"src/components/ui/Radio/Styled.tsx#HiddenRadio"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadioWrapper.displayName="StyledRadioWrapper",StyledRadioWrapper.__docgenInfo={description:"",displayName:"StyledRadioWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadioWrapper"]={docgenInfo:StyledRadioWrapper.__docgenInfo,name:"StyledRadioWrapper",path:"src/components/ui/Radio/Styled.tsx#StyledRadioWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadio.displayName="StyledRadio",StyledRadio.__docgenInfo={description:"",displayName:"StyledRadio",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadio"]={docgenInfo:StyledRadio.__docgenInfo,name:"StyledRadio",path:"src/components/ui/Radio/Styled.tsx#StyledRadio"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadioLabel.displayName="StyledRadioLabel",StyledRadioLabel.__docgenInfo={description:"",displayName:"StyledRadioLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadioLabel"]={docgenInfo:StyledRadioLabel.__docgenInfo,name:"StyledRadioLabel",path:"src/components/ui/Radio/Styled.tsx#StyledRadioLabel"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadioIcon.displayName="StyledRadioIcon",StyledRadioIcon.__docgenInfo={description:"",displayName:"StyledRadioIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadioIcon"]={docgenInfo:StyledRadioIcon.__docgenInfo,name:"StyledRadioIcon",path:"src/components/ui/Radio/Styled.tsx#StyledRadioIcon"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio=props=>{const{value,checked,label,icon,onChange,testId,...rest}=props,radioNode=(0,react.useRef)(null),labelId=(0,useUniqueId.A)(),handleChange=()=>{radioNode.current?.click(),radioNode.current?.focus()};return(0,jsx_runtime.jsxs)(StyledRadioWrapper,{className:"ch-radio-wrapper","data-testid":testId,children:[(0,jsx_runtime.jsx)(HiddenRadio,{checked,id:labelId,onChange,type:"radio",value,ref:radioNode,"data-testid":"hidden-radio","aria-label":label,...rest}),icon?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(StyledRadioIcon,{checked,className:"ch-radio",onClick:handleChange,"data-testid":"styled-radio-icon",children:(0,jsx_runtime.jsx)("span",{className:"ch-icon",children:icon})})}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledRadioLabel,{checked,className:"ch-radio",onClick:handleChange,"data-testid":"styled-radio"}),(0,jsx_runtime.jsx)(Label.A,{htmlFor:labelId,className:"ch-radio-label",children:label})]})]})};Radio.displayName="Radio",Radio.displayName="Radio";const ui_Radio=Radio;try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{checked:{defaultValue:null,description:"Whether or not the radio is selected.",name:"checked",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"The icon for the radio.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The label of the radio.",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"The value of the radio.",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: any) => void"}},radioProps:{defaultValue:null,description:"Other props of the radio.",name:"radioProps",required:!1,type:{name:"InputHTMLAttributes<HTMLButtonElement> | undefined"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/index.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/ui/Radio/index.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/RadioGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,z:()=>RadioGroup});__webpack_require__("./node_modules/react/index.js");var _Radio__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Radio/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioGroup=props=>{const{options,value,onChange}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:options.map(((option,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Radio__WEBPACK_IMPORTED_MODULE_1__.A,{value:option.value,label:option.label,checked:option.value===value,icon:option.icon,onChange,testId:option.testId,...option.inputProps},`${option}-${index}`)))})};RadioGroup.displayName="RadioGroup";const __WEBPACK_DEFAULT_EXPORT__=RadioGroup;try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},options:{defaultValue:null,description:"Options of radio group.",name:"options",required:!0,type:{name:"RadioProps[]"}},value:{defaultValue:null,description:"The selected option.",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/RadioGroup/index.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/components/ui/RadioGroup/index.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Select/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Select,A:()=>ui_Select});var react=__webpack_require__("./node_modules/react/index.js"),UpAndDownCaret=__webpack_require__("./src/components/ui/icons/UpAndDownCaret/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledWrapper=styled_components_browser_esm.Ay.div`
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
`;try{StyledWrapper.displayName="StyledWrapper",StyledWrapper.__docgenInfo={description:"",displayName:"StyledWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Select/Styled.tsx#StyledWrapper"]={docgenInfo:StyledWrapper.__docgenInfo,name:"StyledWrapper",path:"src/components/ui/Select/Styled.tsx#StyledWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StyledSelectInput.displayName="StyledSelectInput",StyledSelectInput.__docgenInfo={description:"",displayName:"StyledSelectInput",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSelectElement | null) => void) | RefObject<HTMLSelectElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Select/Styled.tsx#StyledSelectInput"]={docgenInfo:StyledSelectInput.__docgenInfo,name:"StyledSelectInput",path:"src/components/ui/Select/Styled.tsx#StyledSelectInput"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const upAndDownCaretStyle={position:"absolute",top:"50%",transform:"translateY(-50%)",right:"0.2rem",width:"1.5rem",height:"1.5rem"},Select=(0,react.forwardRef)(((props,ref)=>{return(0,jsx_runtime.jsxs)(StyledWrapper,{children:[(0,jsx_runtime.jsx)(StyledSelectInput,{className:"ch-select","data-testid":"select",ref,...props,children:(options=props.options,options.map((({value,label})=>(0,jsx_runtime.jsx)("option",{value,children:label},value))))}),(0,jsx_runtime.jsx)(UpAndDownCaret.A,{style:upAndDownCaretStyle,className:"ch-select-icon","data-testid":"select-icon"})]});var options}));Select.displayName="Select";const ui_Select=Select;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"Options",name:"options",required:!0,type:{name:"SelectOptions[]"}},onChange:{defaultValue:null,description:"The callback fired when the option is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},value:{defaultValue:null,description:"The selected option",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Select/index.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/ui/Select/index.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Textarea/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_Textarea});var react=__webpack_require__("./node_modules/react/index.js");const StyledTextarea=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.textarea`
  background-color: ${props=>props.theme.inputs.bgd};
  border: ${props=>props.theme.inputs.border};
  border-radius: ${props=>props.theme.inputs.borderRadius};
  box-shadow: ${props=>props.theme.inputs.shadow};
  color: ${props=>props.theme.inputs.fontColor};
  font-size: ${props=>props.theme.fontSizes.text.fontSize};
  padding: 0.5rem;
  position: relative;
  min-height: 4rem;
  transition: box-shadow 0.05s ease-in;
  width: 100%;

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
`;try{StyledTextarea.displayName="StyledTextarea",StyledTextarea.__docgenInfo={description:"",displayName:"StyledTextarea",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Textarea/Styled.tsx#StyledTextarea"]={docgenInfo:StyledTextarea.__docgenInfo,name:"StyledTextarea",path:"src/components/ui/Textarea/Styled.tsx#StyledTextarea"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea=react.forwardRef((({label,...props},ref)=>(0,jsx_runtime.jsx)(StyledTextarea,{"aria-label":label,className:"ch-textarea","data-testid":"textarea",ref,...props})));Textarea.displayName="Textarea";const ui_Textarea=Textarea;try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{onChange:{defaultValue:null,description:"The callback fired when the text is changed.",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<Element>) => void"}},value:{defaultValue:null,description:"The value of the textarea.",name:"value",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The label for availability.",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Textarea/index.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"src/components/ui/Textarea/index.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useUniqueId/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),uuid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");const __WEBPACK_DEFAULT_EXPORT__=function useUniqueId(){const[uniqueId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>(0,uuid__WEBPACK_IMPORTED_MODULE_1__.A)()));return uniqueId}},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}}}]);
//# sourceMappingURL=components-ui-FormField-FormField-stories.f53b5ef2.iframe.bundle.js.map