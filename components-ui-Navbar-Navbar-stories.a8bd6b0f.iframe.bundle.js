"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[1384],{"./src/components/ui/Navbar/Navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Navbar:()=>_Navbar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Navbar/index.tsx"),_NavbarHeader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Navbar/NavbarHeader.tsx"),_NavbarItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Navbar/NavbarItem.tsx"),_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/icons/index.tsx"),_Flex__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/Flex/index.tsx"),_icons_Share__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/ui/icons/Share/index.tsx"),_Badge__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/ui/Badge/index.tsx"),_icons_Cog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/ui/icons/Cog/index.tsx"),_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/ui/PopOver/PopOverItem.tsx"),_PopOver_PopOverSubMenu__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/ui/PopOver/PopOverSubMenu.tsx"),_PopOver_PopOverSeparator__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/ui/PopOver/PopOverSeparator.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI Components/Navbar",component:___WEBPACK_IMPORTED_MODULE_1__.A,parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\n\nimport Navbar from '.';\nimport NavbarHeader from './NavbarHeader';\nimport NavbarItem from './NavbarItem';\nimport { Attendees, LeaveMeeting } from '../icons';\nimport Flex from '../Flex';\nimport Share from '../icons/Share';\nimport Badge from '../Badge';\nimport Cog from '../icons/Cog';\n\nimport PopOverItem from '../PopOver/PopOverItem';\nimport PopOverSubMenu from '../PopOver/PopOverSubMenu';\nimport PopOverSeparator from '../PopOver/PopOverSeparator';\n\nexport default {\n  title: 'UI Components/Navbar',\n  component: Navbar,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport const _Navbar = ({ responsive, showLabel }) => {\n  const handleOnClose = () => {\n    console.log('On close');\n  };\n\n  return (\n    <div style={{ height: '100vh' }}>\n      <Navbar flexDirection=\"column\" container responsive={responsive}>\n        <NavbarHeader onClose={handleOnClose} title=\"is this thing on?\" />\n        <Flex\n          css={`\n            margin-top: 0rem;\n          `}\n        >\n          <NavbarItem\n            icon={<Share />}\n            onClick={() => alert('Do not Leave Meeting')}\n            label=\"Bridge Info\"\n            showLabel={showLabel}\n          />\n\n          <NavbarItem\n            icon={<Attendees />}\n            onClick={() => alert('Attendees')}\n            label=\"Attendees\"\n            badge={<Badge value=\"7\" />}\n            showLabel={showLabel}\n          />\n          <NavbarItem\n            icon={<Cog />}\n            label=\"Settings\"\n            onClick={() => {}}\n            showLabel={showLabel}\n          >\n            <PopOverItem as=\"button\" onClick={() => console.log('clicked')}>\n              <span>Also test content</span>\n            </PopOverItem>\n            <PopOverSeparator />\n            <PopOverItem as=\"button\" onClick={() => console.log('clicked')}>\n              <span>This is more test content</span>\n            </PopOverItem>\n            <PopOverSubMenu text=\"This is a submenu\">\n              <PopOverItem as=\"button\" onClick={() => console.log('clicked')}>\n                <span>This is also a submenu component</span>\n              </PopOverItem>\n              <PopOverItem as=\"button\" onClick={() => console.log('clicked')}>\n                <span>This is also a submenu component</span>\n              </PopOverItem>\n            </PopOverSubMenu>\n            <PopOverItem as=\"button\" onClick={() => console.log('clicked')}>\n              <span>This has very long text</span>\n            </PopOverItem>\n          </NavbarItem>\n        </Flex>\n        <Flex marginTop=\"auto\">\n          <NavbarItem\n            icon={<LeaveMeeting />}\n            onClick={() => alert('Leave Meeting')}\n            label=\"Leave Meeting\"\n            showLabel={showLabel}\n          />\n        </Flex>\n      </Navbar>\n    </div>\n  );\n};\n\n_Navbar.args = {\n  showLabel: true,\n  responsive: true,\n};\n\n_Navbar.argTypes = {\n  showLabel: {\n    control: 'boolean',\n    description: 'Responsive (enable and resize to see responsive layout)',\n  },\n  responsive: { control: 'boolean' },\n  alignItems: { table: { disable: true } },\n  container: { table: { disable: true } },\n  flex: { table: { disable: true } },\n  flexDirection: { table: { disable: true } },\n  flexWrap: { table: { disable: true } },\n  flexBasis: { table: { disable: true } },\n  flexGrow: { table: { disable: true } },\n  flexShrink: { table: { disable: true } },\n  justifyContent: { table: { disable: true } },\n  layout: { table: { disable: true } },\n  style: { table: { disable: true } },\n  tabIndex: { table: { disable: true } },\n  onFocus: { table: { disable: true } },\n  onBlur: { table: { disable: true } },\n};\n\n_Navbar.story = {\n  name: 'NavBar with options',\n};\n",locationsMap:{navbar:{startLoc:{col:23,line:27},endLoc:{col:1,line:92},startBody:{col:23,line:27},endBody:{col:1,line:92}}}},layout:"fullscreen"}},_Navbar=({responsive,showLabel})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{style:{height:"100vh"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.A,{flexDirection:"column",container:!0,responsive,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_NavbarHeader__WEBPACK_IMPORTED_MODULE_2__.A,{onClose:()=>{console.log("On close")},title:"is this thing on?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_5__.A,{css:"\n            margin-top: 0rem;\n          ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_NavbarItem__WEBPACK_IMPORTED_MODULE_3__.A,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_icons_Share__WEBPACK_IMPORTED_MODULE_6__.A,{}),onClick:()=>alert("Do not Leave Meeting"),label:"Bridge Info",showLabel}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_NavbarItem__WEBPACK_IMPORTED_MODULE_3__.A,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.G4,{}),onClick:()=>alert("Attendees"),label:"Attendees",badge:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_7__.A,{value:"7"}),showLabel}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_NavbarItem__WEBPACK_IMPORTED_MODULE_3__.A,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_icons_Cog__WEBPACK_IMPORTED_MODULE_8__.A,{}),label:"Settings",onClick:()=>{},showLabel,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_9__.A,{as:"button",onClick:()=>console.log("clicked"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"Also test content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PopOver_PopOverSeparator__WEBPACK_IMPORTED_MODULE_11__.A,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_9__.A,{as:"button",onClick:()=>console.log("clicked"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"This is more test content"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_PopOver_PopOverSubMenu__WEBPACK_IMPORTED_MODULE_10__.A,{text:"This is a submenu",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_9__.A,{as:"button",onClick:()=>console.log("clicked"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"This is also a submenu component"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_9__.A,{as:"button",onClick:()=>console.log("clicked"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"This is also a submenu component"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PopOver_PopOverItem__WEBPACK_IMPORTED_MODULE_9__.A,{as:"button",onClick:()=>console.log("clicked"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:"This has very long text"})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_5__.A,{marginTop:"auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_NavbarItem__WEBPACK_IMPORTED_MODULE_3__.A,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.f1,{}),onClick:()=>alert("Leave Meeting"),label:"Leave Meeting",showLabel})})]})});_Navbar.displayName="_Navbar",_Navbar.args={showLabel:!0,responsive:!0},_Navbar.argTypes={showLabel:{control:"boolean",description:"Responsive (enable and resize to see responsive layout)"},responsive:{control:"boolean"},alignItems:{table:{disable:!0}},container:{table:{disable:!0}},flex:{table:{disable:!0}},flexDirection:{table:{disable:!0}},flexWrap:{table:{disable:!0}},flexBasis:{table:{disable:!0}},flexGrow:{table:{disable:!0}},flexShrink:{table:{disable:!0}},justifyContent:{table:{disable:!0}},layout:{table:{disable:!0}},style:{table:{disable:!0}},tabIndex:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}}},_Navbar.story={name:"NavBar with options"},_Navbar.parameters={..._Navbar.parameters,docs:{..._Navbar.parameters?.docs,source:{originalSource:'({\n  responsive,\n  showLabel\n}) => {\n  const handleOnClose = () => {\n    console.log(\'On close\');\n  };\n  return <div style={{\n    height: \'100vh\'\n  }}>\n      <Navbar flexDirection="column" container responsive={responsive}>\n        <NavbarHeader onClose={handleOnClose} title="is this thing on?" />\n        <Flex css={`\n            margin-top: 0rem;\n          `}>\n          <NavbarItem icon={<Share />} onClick={() => alert(\'Do not Leave Meeting\')} label="Bridge Info" showLabel={showLabel} />\n\n          <NavbarItem icon={<Attendees />} onClick={() => alert(\'Attendees\')} label="Attendees" badge={<Badge value="7" />} showLabel={showLabel} />\n          <NavbarItem icon={<Cog />} label="Settings" onClick={() => {}} showLabel={showLabel}>\n            <PopOverItem as="button" onClick={() => console.log(\'clicked\')}>\n              <span>Also test content</span>\n            </PopOverItem>\n            <PopOverSeparator />\n            <PopOverItem as="button" onClick={() => console.log(\'clicked\')}>\n              <span>This is more test content</span>\n            </PopOverItem>\n            <PopOverSubMenu text="This is a submenu">\n              <PopOverItem as="button" onClick={() => console.log(\'clicked\')}>\n                <span>This is also a submenu component</span>\n              </PopOverItem>\n              <PopOverItem as="button" onClick={() => console.log(\'clicked\')}>\n                <span>This is also a submenu component</span>\n              </PopOverItem>\n            </PopOverSubMenu>\n            <PopOverItem as="button" onClick={() => console.log(\'clicked\')}>\n              <span>This has very long text</span>\n            </PopOverItem>\n          </NavbarItem>\n        </Flex>\n        <Flex marginTop="auto">\n          <NavbarItem icon={<LeaveMeeting />} onClick={() => alert(\'Leave Meeting\')} label="Leave Meeting" showLabel={showLabel} />\n        </Flex>\n      </Navbar>\n    </div>;\n}',..._Navbar.parameters?.docs?.source}}};const __namedExportsOrder=["_Navbar"];try{_Navbar.displayName="_Navbar",_Navbar.__docgenInfo={description:"",displayName:"_Navbar",props:{responsive:{defaultValue:null,description:"",name:"responsive",required:!0,type:{name:"any"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Navbar/Navbar.stories.tsx#_Navbar"]={docgenInfo:_Navbar.__docgenInfo,name:"_Navbar",path:"src/components/ui/Navbar/Navbar.stories.tsx#_Navbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_Badge});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledBadge=styled_components_browser_esm.Ay.span`
  ${props=>{if("object"==typeof props.value){const element=props.value;return`width: ${element.props&&element.props.width||"1rem"};`}return null}}
  display: inline-block;
  padding: ${props=>"object"==typeof props.value?"0":"0.1rem 0.4rem 0.125rem"};
  border-radius: 0.5rem;
  line-height: ${props=>"object"==typeof props.value?"1":"1.43"};
  color: ${props=>props.theme.colors.greys.white};
  font-size: 0.65rem;
  background-color: ${props=>"alert"===props.status?props.theme.colors.error.primary:props.theme.colors.greys.grey60};

  ${Base.d};
  ${Base.i}
`;try{StyledBadge.displayName="StyledBadge",StyledBadge.__docgenInfo={description:"",displayName:"StyledBadge",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"The value shows in the badge",name:"value",required:!1,type:{name:"string | number | Element | undefined"}},status:{defaultValue:null,description:"The status of the badge",name:"status",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"alert"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Badge/Styled.tsx#StyledBadge"]={docgenInfo:StyledBadge.__docgenInfo,name:"StyledBadge",path:"src/components/ui/Badge/Styled.tsx#StyledBadge"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Badge=({value,status="default",className,tag,...rest})=>(0,jsx_runtime.jsx)(StyledBadge,{className:className||"",as:tag,status,value,"data-testid":"badge",...rest,children:value});Badge.displayName="Badge";const ui_Badge=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{value:{defaultValue:null,description:"The value shows in the badge",name:"value",required:!0,type:{name:"string | number | Element"}},status:{defaultValue:{value:"default"},description:"The status of the badge",name:"status",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"alert"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/ui/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Button/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,K:()=>IconButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_2__.qn,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{ref,variant:"icon",...props}),props.badge]}))),__WEBPACK_DEFAULT_EXPORT__=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{badge:{defaultValue:null,description:"Render a component to the top right area of the IconButton",name:"badge",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/ui/Button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OV:()=>StyledButton,qn:()=>StyledIconButtonWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button`
  border-radius: ${props=>props.theme.radii.default};
  font-size: ${props=>props.theme.fontSizes.text.fontSize};
  padding: 0.5rem 1rem;
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  .ch-icon {
    width: ${props=>props.theme.iconButtonSizes[props.iconSize||"sm"]};
    height: ${props=>props.theme.iconButtonSizes[props.iconSize||"sm"]};
    margin-right: 0.25rem;
  }

  /* variant styles */
  ${props=>"primary"===props.variant&&StyledPrimaryButton}
  ${props=>"secondary"===props.variant&&StyledSecondaryButton}
  ${props=>"icon"===props.variant&&StyledIconButton}

  ${_Base__WEBPACK_IMPORTED_MODULE_1__.d}
  ${_Base__WEBPACK_IMPORTED_MODULE_1__.i}
`,StyledPrimaryButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
  background-color: ${props=>props.selected?props.theme.buttons.primary.selected.bgd:props.theme.buttons.primary.static.bgd};
  color: ${props=>props.selected?props.theme.buttons.primary.selected.text:props.theme.buttons.primary.static.text};
  border: ${props=>props.selected?props.theme.buttons.primary.selected.border:props.theme.buttons.primary.static.border};
  box-shadow: ${props=>props.theme.buttons.primary.static.shadow};

  &:focus {
    background-color: ${props=>props.theme.buttons.primary.focus.bgd};
    border: ${props=>props.theme.buttons.primary.focus.border};
    color: ${props=>props.theme.buttons.primary.focus.text};
    box-shadow: ${props=>props.theme.buttons.primary.focus.shadow};
  }

  &:hover {
    background-color: ${props=>props.theme.buttons.primary.hover.bgd};
    border: ${props=>props.theme.buttons.primary.hover.border};
    color: ${props=>props.theme.buttons.primary.hover.text};
    box-shadow: ${props=>props.theme.buttons.primary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${props=>props.theme.buttons.primary.focus.shadow};
  }

  &:active {
    background-color: ${props=>props.theme.buttons.primary.active.bgd};
    border: ${props=>props.theme.buttons.primary.active.border};
    color: ${props=>props.theme.buttons.primary.active.text};
    box-shadow: ${props=>props.theme.buttons.primary.active.shadow};
  }

  &:disabled {
    background-color: ${props=>props.theme.buttons.primary.disabled.bgd};
    border: ${props=>props.theme.buttons.primary.disabled.border};
    color: ${props=>props.theme.buttons.primary.disabled.text};
    cursor: not-allowed;
  }
`,StyledSecondaryButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
  background-color: ${props=>props.selected?props.theme.buttons.secondary.selected.bgd:props.theme.buttons.secondary.static.bgd};
  color: ${props=>props.selected?props.theme.buttons.secondary.selected.text:props.theme.buttons.secondary.static.text};
  border: ${props=>props.selected?props.theme.buttons.secondary.selected.border:props.theme.buttons.secondary.static.border};
  box-shadow: ${props=>props.theme.buttons.secondary.shadow};

  &:focus {
    background-color: ${props=>props.theme.buttons.secondary.focus.bgd};
    border: ${props=>props.theme.buttons.secondary.focus.border};
    color: ${props=>props.theme.buttons.secondary.focus.text};
    box-shadow: ${props=>props.theme.buttons.secondary.focus.shadow};
  }

  &:hover {
    background-color: ${props=>props.theme.buttons.secondary.hover.bgd};
    border: ${props=>props.theme.buttons.secondary.hover.border};
    color: ${props=>props.theme.buttons.secondary.hover.text};
    box-shadow: ${props=>props.theme.buttons.secondary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${props=>props.theme.buttons.secondary.focus.shadow};
  }

  &:active {
    background-color: ${props=>props.theme.buttons.secondary.active.bgd};
    border: ${props=>props.theme.buttons.secondary.active.border};
    color: ${props=>props.theme.buttons.secondary.active.text};
    box-shadow: ${props=>props.theme.buttons.secondary.focus.shadow};
  }

  &:disabled {
    background-color: ${props=>props.theme.buttons.secondary.disabled.bgd};
    border: ${props=>props.theme.buttons.secondary.disabled.border};
    color: ${props=>props.theme.buttons.secondary.disabled.text};
    cursor: not-allowed;
  }
`,badgeLayout={sm:styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
    top: -15%;
    left: 76%;
  `,md:styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
    top: 4%;
    left: 76%;
  `,lg:styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
    top: 10%;
    left: 76%;
  `},StyledIconButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
  background-color: ${props=>props.selected?props.theme.buttons.icon.selected.bgd:props.theme.buttons.icon.static.bgd};
  color: ${props=>props.selected?props.theme.buttons.icon.selected.text:props.theme.buttons.icon.static.text};
  border: ${props=>props.selected?props.theme.buttons.icon.selected.border:props.theme.buttons.icon.static.border};
  border-radius: ${props=>props.theme.radii.circle};
  padding: 0.1875rem;
  position: relative;

  > .ch-label {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.Qg};
  }

  > .ch-icon {
    width: ${props=>props.theme.iconButtonSizes[props.iconSize||"sm"]};
    height: ${props=>props.theme.iconButtonSizes[props.iconSize||"sm"]};
    margin: 0;
  }

  &:focus {
    background-color: ${({theme,selected})=>selected?theme.buttons.icon.selected.bgd:theme.buttons.icon.static.bgd};
    border: ${props=>props.theme.buttons.icon.focus.border};
    color: ${props=>props.theme.buttons.icon.focus.text};
    color: ${({theme,selected})=>selected?theme.buttons.icon.selected.text:theme.buttons.icon.static.text};
    box-shadow: ${props=>props.theme.buttons.icon.focus.shadow};
  }

  &:hover {
    background-color: ${props=>props.theme.buttons.icon.hover.bgd};
    border: ${props=>props.theme.buttons.icon.hover.border};
    color: ${props=>props.theme.buttons.icon.hover.text};
  }

  &:active {
    background-color: ${props=>props.theme.buttons.icon.active.bgd};
    border: ${props=>props.theme.buttons.icon.active.border};
    color: ${props=>props.theme.buttons.icon.active.text};
  }

  &:disabled {
    background-color: ${props=>props.theme.buttons.icon.disabled.bgd};
    border: ${props=>props.theme.buttons.icon.disabled.border};
    color: ${props=>props.theme.buttons.icon.disabled.text};
    cursor: not-allowed;
  }

  + * {
    position: absolute;
    font-size: 0.55rem;
    z-index: 1;
    ${({iconSize})=>iconSize?badgeLayout[iconSize]:badgeLayout.sm}
  }
`,StyledIconButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span`
  display: inline-block;
  position: relative;
`;try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/ui/Button/Styled.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledIconButtonWrapper.displayName="StyledIconButtonWrapper",StyledIconButtonWrapper.__docgenInfo={description:"",displayName:"StyledIconButtonWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"]={docgenInfo:StyledIconButtonWrapper.__docgenInfo,name:"StyledIconButtonWrapper",path:"src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.OV,{...props,className:props.className||"",as:props.tag,ref,"aria-label":props.label,"data-testid":"button",disabled:props.disabled,children:[props.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon","data-testid":"button-icon",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-label","data-testid":"button-label",children:props.label})]}))),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},alignItems:{defaultValue:null,description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:null,description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:null,description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:null,description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:null,description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:null,description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:null,description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Navbar/NavbarHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/IconButton.tsx"),_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/icons/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Navbar/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavbarHeader=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_3__.h9,{...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"ch-title",children:props.title}),props.onClose&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{className:"ch-btn-close",label:"Close",onClick:props.onClose,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.n$,{})})]});NavbarHeader.displayName="NavbarHeader";const __WEBPACK_DEFAULT_EXPORT__=NavbarHeader;try{NavbarHeader.displayName="NavbarHeader",NavbarHeader.__docgenInfo={description:"",displayName:"NavbarHeader",props:{title:{defaultValue:null,description:"The title of the navigation bar menu",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"The callback fired when the navigation bar is closed",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}},tabIndex:{defaultValue:null,description:"Optional tab index for keyboard accessibility",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onFocus:{defaultValue:null,description:"onFocus event handler",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}},onBlur:{defaultValue:null,description:"onBlur event handler",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Navbar/NavbarHeader.tsx#NavbarHeader"]={docgenInfo:NavbarHeader.__docgenInfo,name:"NavbarHeader",path:"src/components/ui/Navbar/NavbarHeader.tsx#NavbarHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Navbar/NavbarItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/IconButton.tsx"),_PopOver__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/PopOver/index.tsx"),_WithTooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/WithTooltip/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/Navbar/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavbarItem=({label,children,placement="right-start",icon,showLabel=!1,badge,onClick,testId="navbar-item",tooltipContainerId,...rest})=>{const IconButtonWithToolTip=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_WithTooltip__WEBPACK_IMPORTED_MODULE_3__.k)(_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,tooltipContainerId)),[tooltipContainerId]),ButtonComponent=rest["data-tooltip"]?IconButtonWithToolTip:_Button_IconButton__WEBPACK_IMPORTED_MODULE_1__.A;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_4__.VP,{"data-testid":testId,showLabel,children:[children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PopOver__WEBPACK_IMPORTED_MODULE_2__.A,{placement,a11yLabel:label,renderButtonWrapper:(isActive,props)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ButtonComponent,{onClick,selected:isActive,icon,badge,label,...rest,...props}),children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ButtonComponent,{icon,label,onClick,badge,...rest}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label",{className:"ch-navigation-bar-item-label","data-testid":"navbar-label",onClick,children:label})]})};NavbarItem.displayName="NavbarItem";const __WEBPACK_DEFAULT_EXPORT__=NavbarItem;try{NavbarItem.displayName="NavbarItem",NavbarItem.__docgenInfo={description:"",displayName:"NavbarItem",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!0,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},badge:{defaultValue:null,description:"Render a component to the top right area of the IconButton",name:"badge",required:!1,type:{name:"ReactNode | ReactNode[]"}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},placement:{defaultValue:{value:"right-start"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},showLabel:{defaultValue:{value:"false"},description:"",name:"showLabel",required:!1,type:{name:"boolean | undefined"}},testId:{defaultValue:{value:"navbar-item"},description:"",name:"testId",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},"data-tooltip":{defaultValue:null,description:"",name:"data-tooltip",required:!1,type:{name:"boolean | undefined"}},"data-tooltip-position":{defaultValue:null,description:"",name:"data-tooltip-position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},tooltipContainerId:{defaultValue:null,description:"",name:"tooltipContainerId",required:!1,type:{name:"string | undefined"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Navbar/NavbarItem.tsx#NavbarItem"]={docgenInfo:NavbarItem.__docgenInfo,name:"NavbarItem",path:"src/components/ui/Navbar/NavbarItem.tsx#NavbarItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Navbar/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{VP:()=>StyledNavbarItem,h9:()=>StyledHeader,qC:()=>StyledNavbar});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ui/Base/index.ts"),_Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Flex/index.tsx");const StyledHeader=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: flex;
  height: 3rem;
  align-items: center;
  border-bottom: ${({theme})=>`0.03125rem solid ${theme.navbar.headerBorder}`};
  padding: 1rem;

  .ch-title {
    flex: 1;
  }

  .ch-btn-close {
    margin-left: auto;
    margin-right: 1rem;
  }

  ${({theme})=>theme.mediaQueries.min.md} {
    display: none;
  }
`,StyledNavbarItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.25rem;
  min-height: 3rem;
  flex-direction: column;
  padding: 0 0.25rem;

  .ch-navigation-bar-item-label {
    text-align: center;
    display: ${({showLabel})=>showLabel?"block":"none"};
    font-size: ${({theme})=>theme.fontSizes.footnote.fontSize};
    width: 100%;
    padding: 0 0.25rem;
    margin-bottom: 1.5rem;
  }
`,StyledNavbar=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A)`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  color: ${props=>props.theme.navbar.text};
  background-color: ${({theme})=>theme.navbar.bgd};
  width: 4.25rem;
  padding-top: 1rem;

  ${({theme,responsive})=>theme.mediaQueries.max.md} {
    width: ${props=>props.responsive?"20rem":"4.25rem;"};
    padding-top: ${props=>props.responsive?"0":"1rem"};

    ${StyledHeader} {
      display: ${props=>props.responsive?"flex":"none"};
    }

    ${StyledNavbarItem} {
      ${props=>props.responsive&&" \n        width: auto;\n        flex-direction: row;\n\n        .ch-navigation-bar-item-label {\n          font-size: 1rem;\n          text-align: left;\n          margin-left: 1.5rem;\n          margin-bottom: 0;\n          display: block;\n        }"};
    }
  }

  ${_Base__WEBPACK_IMPORTED_MODULE_0__.i}
  ${_Base__WEBPACK_IMPORTED_MODULE_0__.d}
`;try{StyledHeader.displayName="StyledHeader",StyledHeader.__docgenInfo={description:"",displayName:"StyledHeader",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Navbar/Styled.tsx#StyledHeader"]={docgenInfo:StyledHeader.__docgenInfo,name:"StyledHeader",path:"src/components/ui/Navbar/Styled.tsx#StyledHeader"})}catch(__react_docgen_typescript_loader_error){}try{StyledNavbarItem.displayName="StyledNavbarItem",StyledNavbarItem.__docgenInfo={description:"",displayName:"StyledNavbarItem",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"any"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},badge:{defaultValue:null,description:"Render a component to the top right area of the IconButton",name:"badge",required:!1,type:{name:"ReactNode | ReactNode[]"}},"data-tooltip":{defaultValue:null,description:"",name:"data-tooltip",required:!1,type:{name:"boolean | undefined"}},"data-tooltip-position":{defaultValue:null,description:"",name:"data-tooltip-position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},tooltipContainerId:{defaultValue:null,description:"",name:"tooltipContainerId",required:!1,type:{name:"string | undefined"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!1,type:{name:"ReactNode"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string | undefined"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Navbar/Styled.tsx#StyledNavbarItem"]={docgenInfo:StyledNavbarItem.__docgenInfo,name:"StyledNavbarItem",path:"src/components/ui/Navbar/Styled.tsx#StyledNavbarItem"})}catch(__react_docgen_typescript_loader_error){}try{StyledNavbar.displayName="StyledNavbar",StyledNavbar.__docgenInfo={description:"",displayName:"StyledNavbar",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element\nClassname to apply custom CSS styles",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tabIndex:{defaultValue:null,description:"Optional tab index for keyboard accessibility",name:"tabIndex",required:!1,type:{name:"number | undefined"}},children:{defaultValue:null,description:"Any react components or HTML elements",name:"children",required:!1,type:{name:"any"}},onFocus:{defaultValue:null,description:"onFocus event handler",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}},onBlur:{defaultValue:null,description:"onBlur event handler",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},responsive:{defaultValue:null,description:"optionally render a responsive layout at mobile breakpoints",name:"responsive",required:!1,type:{name:"boolean | undefined"}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},alignItems:{defaultValue:null,description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:null,description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:null,description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:null,description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:null,description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:null,description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:null,description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Navbar/Styled.tsx#StyledNavbar"]={docgenInfo:StyledNavbar.__docgenInfo,name:"StyledNavbar",path:"src/components/ui/Navbar/Styled.tsx#StyledNavbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Navbar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Navbar/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Navbar=({children,className,responsive=!0,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_1__.qC,{"data-testid":"navigation-bar",...rest,className:className||"",responsive,children});Navbar.displayName="Navbar";const __WEBPACK_DEFAULT_EXPORT__=Navbar;try{Navbar.displayName="Navbar",Navbar.__docgenInfo={description:"",displayName:"Navbar",props:{className:{defaultValue:null,description:"Classname to apply custom CSS styles",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Any react components or HTML elements",name:"children",required:!1,type:{name:"any"}},responsive:{defaultValue:{value:"true"},description:"optionally render a responsive layout at mobile breakpoints",name:"responsive",required:!1,type:{name:"boolean | undefined"}},alignItems:{defaultValue:null,description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:null,description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:null,description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:null,description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:null,description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:null,description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:null,description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},tabIndex:{defaultValue:null,description:"Optional tab index for keyboard accessibility",name:"tabIndex",required:!1,type:{name:"number | undefined"}},onFocus:{defaultValue:null,description:"onFocus event handler",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}},onBlur:{defaultValue:null,description:"onBlur event handler",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<any, Element>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Navbar/index.tsx#Navbar"]={docgenInfo:Navbar.__docgenInfo,name:"Navbar",path:"src/components/ui/Navbar/index.tsx#Navbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/PopOverItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,t:()=>PopOverItem});__webpack_require__("./node_modules/react/index.js");var _icons_Check__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Check/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopOverItem=({as="button",children,checked,testId="popover-item",...rest})=>{const Tag=as;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_2__.kL,{"data-testid":testId,children:[checked&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons_Check__WEBPACK_IMPORTED_MODULE_1__.A,{className:"ch-check","data-testid":"popover-check"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Tag,{className:"ch-content",...rest,children})]})};PopOverItem.displayName="PopOverItem";const __WEBPACK_DEFAULT_EXPORT__=PopOverItem;try{PopOverItem.displayName="PopOverItem",PopOverItem.__docgenInfo={description:"",displayName:"PopOverItem",props:{onClick:{defaultValue:null,description:"The callback fired when the item is clicked.",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},checked:{defaultValue:null,description:"Whether or not the item is checked.",name:"checked",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"The elements that populate the content of the item.",name:"children",required:!1,type:{name:"((ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]) & (string | ... 5 more ... | null)) | undefined"}},disabled:{defaultValue:null,description:"Whether or not the item is disabled.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"Defines the href attribute if the item is rendered as an `a` tag.",name:"href",required:!1,type:{name:"string | undefined"}},as:{defaultValue:{value:"button"},description:"Defines which tag will the item be rendered as, it defaults to `button`.",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"a"'},{value:'"button"'}]}},border:{defaultValue:null,description:"Whether or not the item has a border.",name:"border",required:!1,type:{name:"boolean | undefined"}},testId:{defaultValue:{value:"popover-item"},description:"",name:"testId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/PopOverItem.tsx#PopOverItem"]={docgenInfo:PopOverItem.__docgenInfo,name:"PopOverItem",path:"src/components/ui/PopOver/PopOverItem.tsx#PopOverItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/PopOverSeparator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopOverSeparator=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_1__.WL,{"data-testid":"popover-separator",...props});PopOverSeparator.displayName="PopOverSeparator";const __WEBPACK_DEFAULT_EXPORT__=PopOverSeparator;try{PopOverSeparator.displayName="PopOverSeparator",PopOverSeparator.__docgenInfo={description:"",displayName:"PopOverSeparator",props:{tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/PopOverSeparator.tsx#PopOverSeparator"]={docgenInfo:PopOverSeparator.__docgenInfo,name:"PopOverSeparator",path:"src/components/ui/PopOver/PopOverSeparator.tsx#PopOverSeparator"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/PopOverSubMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _icons_Caret__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Caret/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/PopOver/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopOverSubMenu=({text,children,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_3__.JD,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{renderButton:isOpen=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[text,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons_Caret__WEBPACK_IMPORTED_MODULE_1__.A,{className:"ch-caret",direction:"right","data-testid":"submenu-caret"})]}),placement:"right-start",isSubMenu:!0,a11yLabel:text,...rest,children})});PopOverSubMenu.displayName="PopOverSubMenu";const __WEBPACK_DEFAULT_EXPORT__=PopOverSubMenu;try{PopOverSubMenu.displayName="PopOverSubMenu",PopOverSubMenu.__docgenInfo={description:"",displayName:"PopOverSubMenu",props:{text:{defaultValue:null,description:"The text shown in the item.",name:"text",required:!0,type:{name:"string"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/PopOverSubMenu.tsx#PopOverSubMenu"]={docgenInfo:PopOverSubMenu.__docgenInfo,name:"PopOverSubMenu",path:"src/components/ui/PopOver/PopOverSubMenu.tsx#PopOverSubMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GW:()=>StyledPopOverMenu,JD:()=>StyledSubMenu,WL:()=>StyledPopOverSeparator,kC:()=>StyledPopOverHeader,kL:()=>StyledPopOverItem,rS:()=>StyledPopOverToggle});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts");const StyledPopOverMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.ul`
  width: fit-content;
  max-width: 22rem;
  background-color: ${props=>props.theme.popOver.menuBgd};
  border: ${props=>props.theme.popOver.menuBorder};
  margin: 0;
  border-radius: 0.25rem;
  backdrop-filter: blur(1rem);
  list-style: none;
  padding: 0.5rem 0;
  box-shadow: ${props=>props.theme.popOver.shadow};
  z-index: ${props=>props.theme.zIndex.popOver};
  display: table;
  overflow: inherit;
`,StyledPopOverToggle=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`,StyledPopOverItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.li`
  height: 2rem;
  position: relative;

  button,
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: ${props=>props.theme.popOver.itemBgd};
    color: ${props=>props.theme.popOver.itemText};
    line-height: ${props=>props.theme.fontSizes.text.lineHeight};
    font-size: ${props=>props.theme.fontSizes.text.fontSize};
    padding: 0 2.5rem;
    text-decoration: none;
    outline: 0;

    &:hover,
    &:focus {
      background-color: ${props=>props.theme.popOver.active.itemBgd};
      color: ${props=>props.theme.popOver.active.itemText};
      outline: 0;
    }

    &:disabled {
      color: ${props=>props.theme.popOver.disabled};
    }
  }

  a {
    width: unset;
  }

  .ch-content > * {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.gO};
  }

  .ch-check {
    position: absolute;
    left: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    top: 0.33rem;
  }

  &:hover .ch-check g,
  &:focus .ch-check g {
    fill: ${props=>props.theme.popOver.active.itemText};
  }
`,StyledSubMenu=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(StyledPopOverItem)`
  > span {
    width: 100%;
    height: 100%;
    display: block;
    height: 2rem;
  }

  > button {
    position: relative;
  }

  .ch-caret {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    right: 0;
    color: inherit;
    fill: inherit;
  }
`,StyledPopOverHeader=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.header`
  border-bottom: 0.0625rem solid ${props=>props.theme.popOver.separator};
  margin-bottom: 0.75rem;
  max-width: 22rem;

  img {
    width: 100%;
    display: inline-block;
    margin-top: -0.5rem;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  img + .ch-title {
    margin-top: 0.75rem;
  }

  .ch-title {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.gO};
    padding: 0 2.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: ${props=>props.theme.popOver.titleText};
    font-size: 1.18125rem;
    line-height: ${props=>props.theme.fontSizes.text.lineHeight};
  }

  .ch-subtitle {
    ${_utils_style__WEBPACK_IMPORTED_MODULE_0__.gO};
    padding: 0 2.5rem;
    color: #616672;
    font-size: ${props=>props.theme.fontSizes.text.fontSize};
    line-height: ${props=>props.theme.fontSizes.text.lineHeight};
    line-height: 1.43;
    margin: 0 0 1rem;
  }
`,StyledPopOverSeparator=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.li`
  margin: 0;
  border-width: 0.0625rem 0 0 0;
  border-style: solid;
  border-color: ${props=>props.theme.popOver.separator};
  margin-bottom: 0.75rem;
  opacity: 0.8;
`;try{StyledPopOverMenu.displayName="StyledPopOverMenu",StyledPopOverMenu.__docgenInfo={description:"",displayName:"StyledPopOverMenu",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"]={docgenInfo:StyledPopOverMenu.__docgenInfo,name:"StyledPopOverMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverToggle.displayName="StyledPopOverToggle",StyledPopOverToggle.__docgenInfo={description:"",displayName:"StyledPopOverToggle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"]={docgenInfo:StyledPopOverToggle.__docgenInfo,name:"StyledPopOverToggle",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverItem.displayName="StyledPopOverItem",StyledPopOverItem.__docgenInfo={description:"",displayName:"StyledPopOverItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"]={docgenInfo:StyledPopOverItem.__docgenInfo,name:"StyledPopOverItem",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"})}catch(__react_docgen_typescript_loader_error){}try{StyledSubMenu.displayName="StyledSubMenu",StyledSubMenu.__docgenInfo={description:"",displayName:"StyledSubMenu",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledSubMenu"]={docgenInfo:StyledSubMenu.__docgenInfo,name:"StyledSubMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledSubMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverHeader.displayName="StyledPopOverHeader",StyledPopOverHeader.__docgenInfo={description:"",displayName:"StyledPopOverHeader",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLElement | null) => void) | RefObject<HTMLElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"]={docgenInfo:StyledPopOverHeader.__docgenInfo,name:"StyledPopOverHeader",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverSeparator.displayName="StyledPopOverSeparator",StyledPopOverSeparator.__docgenInfo={description:"",displayName:"StyledPopOverSeparator",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"]={docgenInfo:StyledPopOverSeparator.__docgenInfo,name:"StyledPopOverSeparator",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),react_popper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-popper/lib/esm/Popper.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts"),_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useClickOutside/index.tsx"),_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useTabOutside/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getFocusableElements=node=>node.querySelectorAll("button, [href]"),PopOver=({renderButton,renderButtonWrapper,onPopOverClick,children,isSubMenu=!1,placement="bottom-start",a11yLabel,className,closeOnClick=!0,...rest})=>{const menuRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(isOpen&&menuRef.current){const nodes=getFocusableElements(menuRef.current);nodes&&nodes[0].focus()}}),[isOpen]);const move=direction=>{const node=menuRef.current;if(!isSubMenu&&node){const nodes=getFocusableElements(node),currentElement=document.activeElement;for(let i=0;i<nodes.length;i++)if(nodes[i]===currentElement){if("down"===direction&&i!==nodes.length-1)return nodes[i+1].focus();if("up"===direction&&i>0)return nodes[i-1].focus();break}}},handlePopOverClick=()=>{setIsOpen(!isOpen),onPopOverClick&&onPopOverClick(isOpen)};return(0,_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__.A)(menuRef,(()=>setIsOpen(!1))),(0,_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__.A)(menuRef,(()=>setIsOpen(!1))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref:menuRef,onKeyDown:e=>{switch(e.keyCode){case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ESCAPE:return setIsOpen(!1);case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_UP:return move("up");case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_DOWN:return move("down")}},"data-testid":"popover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_7__.mS,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_8__.O,{children:({ref})=>{const props={ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"ch-popover-toggle"),onClick:handlePopOverClick,"data-menu":isSubMenu?"submenu":null,"aria-label":a11yLabel,"aria-haspopup":!0,"aria-expanded":isOpen,"data-testid":"popover-toggle"};if(renderButton)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.rS,{...props,children:renderButton(isOpen)});if(renderButtonWrapper){const{ref,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref,children:renderButtonWrapper(isOpen,rest)})}return null}}),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_9__.N,{placement,modifiers:[{name:"offset",options:{offset:[-8,0]}}],...rest,children:({ref,style,placement})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.GW,{"data-placement":placement,onClick:e=>(e=>{if(!closeOnClick)return;return!e.target.closest("[data-menu='submenu']")&&setIsOpen(!1)})(e),ref,style,"data-testid":"menu",className:"ch-popover-menu",children})})]})})};PopOver.displayName="PopOver";const __WEBPACK_DEFAULT_EXPORT__=PopOver;try{PopOver.displayName="PopOver",PopOver.__docgenInfo={description:"",displayName:"PopOver",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},isSubMenu:{defaultValue:{value:"false"},description:"Whether or not this is a sub menu.",name:"isSubMenu",required:!1,type:{name:"Boolean | undefined"}},placement:{defaultValue:{value:"bottom-start"},description:"Defines the placement of PopOver menu.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},renderButton:{defaultValue:null,description:"Defines the function to render the inner contents of the popover button element",name:"renderButton",required:!1,type:{name:"((isActive: boolean) => ReactNode) | undefined"}},renderButtonWrapper:{defaultValue:null,description:"Alternative to renderButton, defines the function to render the full popover button element (as opposed to just its contents). This is used if you want full control over the button rendering. The button must forwardRef",name:"renderButtonWrapper",required:!1,type:{name:"((isActive: boolean, props: any) => ReactNode) | undefined"}},onPopOverClick:{defaultValue:null,description:"The callback fired when the render button is clicked.",name:"onPopOverClick",required:!1,type:{name:"((isOpen: boolean) => void) | undefined"}},a11yLabel:{defaultValue:null,description:"The label used for availability.",name:"a11yLabel",required:!0,type:{name:"string"}},closeOnClick:{defaultValue:{value:"true"},description:"Allow the popover to stay open for multiple clicks.",name:"closeOnClick",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/index.tsx#PopOver"]={docgenInfo:PopOver.__docgenInfo,name:"PopOver",path:"src/components/ui/PopOver/index.tsx#PopOver"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/WithTooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>WithTooltip});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),LoggerProvider=__webpack_require__("./src/providers/LoggerProvider/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const TopProps=styled_components_browser_esm.AH`
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
`,StyledTooltip=styled_components_browser_esm.Ay.span`
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
`;try{StyledTooltip.displayName="StyledTooltip",StyledTooltip.__docgenInfo={description:"",displayName:"StyledTooltip",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},bounds:{defaultValue:null,description:"",name:"bounds",required:!0,type:{name:"DOMRect"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"]={docgenInfo:StyledTooltip.__docgenInfo,name:"StyledTooltip",path:"src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const initialState={show:!1,bounds:null},WithTooltip=(Component,container_id)=>props=>{const logger=(0,LoggerProvider.Ul)(),[{show,bounds},setShow]=(0,react.useState)(initialState),[container,setContainer]=(0,react.useState)(null),position=props.tooltipPosition??"top",showToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation();let component=e.target;for(;!component.getAttribute("data-tooltip");)component=component.parentElement;const bounds=component.getBoundingClientRect();setShow({show:!0,bounds})}),[]),hideToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),setShow(initialState)}),[]);return(0,react.useEffect)((()=>(document.addEventListener("scroll",hideToolTip,!0),()=>document.removeEventListener("scroll",hideToolTip,!0))),[]),(0,react.useEffect)((()=>{const container=document.getElementById(container_id||"Tooltip__container");container?setContainer(container):logger.warn("Attempted to use 'WithTooltip' but could not find container element.Pass a valid element ID or add 'Tooltip__container' ID to existing element")}),[container_id]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[show&&bounds&&container&&react_dom.createPortal((0,jsx_runtime.jsx)(StyledTooltip,{position,bounds,children:props.tooltipContent||props.label}),container),(0,jsx_runtime.jsx)(Component,{...props,"data-tooltip":!0,"data-tooltip-position":position,onClick:e=>{show&&hideToolTip(e),props?.onClick?.(e)},onFocus:e=>{show||showToolTip(e),props?.onFocus?.(e)},onBlur:e=>{show&&hideToolTip(e),props?.onBlur?.(e)},onMouseEnter:e=>{show||showToolTip(e),props?.onMouseEnter?.(e)},onMouseLeave:e=>{show&&hideToolTip(e),props?.onMouseLeave?.(e)}})]})}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>KEY_CODES,d:()=>VIDEO_INPUT_QUALITY});const KEY_CODES={TAB:9,ENTER:13,ESCAPE:27,ARROW_UP:38,ARROW_DOWN:40},VIDEO_INPUT_QUALITY={"360p":"360p (nHD) @ 15 fps (600 Kbps max)","540p":"540p (qHD) @ 15 fps (1.4 Mbps max)","720p":"720p (HD) @ 15 fps (1.4 Mbps max)"}},"./src/hooks/useClickOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useClickOutside(ref,onClickOutside){const onMouseDown=e=>{(e=>!!ref.current&&!ref.current.contains(e.target))(e)&&onClickOutside&&onClickOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("mousedown",onMouseDown),document.addEventListener("touchstart",onMouseDown),()=>{document.removeEventListener("mousedown",onMouseDown),document.removeEventListener("touchstart",onMouseDown)})))}},"./src/hooks/useTabOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useTabOutside(ref,onTabOutside){const keyUp=e=>{if(9===e.keyCode&&ref.current&&!ref.current.contains(document.activeElement))return onTabOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("keyup",keyUp),()=>{document.removeEventListener("keyup",keyUp)})))}},"./src/providers/LoggerProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IB:()=>LoggerProvider,Ul:()=>useLogger});var amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amazon-chime-sdk-js/build/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const consoleLogger=new amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger("ChimeSDKReactComponent",amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO),LoggerContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(consoleLogger),LoggerProvider=({logger,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LoggerContext.Provider,{value:logger,children});LoggerProvider.displayName="LoggerProvider";const useLogger=()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LoggerContext);try{LoggerProvider.displayName="LoggerProvider",LoggerProvider.__docgenInfo={description:"",displayName:"LoggerProvider",props:{logger:{defaultValue:null,description:"",name:"logger",required:!0,type:{name:"Logger"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/LoggerProvider/index.tsx#LoggerProvider"]={docgenInfo:LoggerProvider.__docgenInfo,name:"LoggerProvider",path:"src/providers/LoggerProvider/index.tsx#LoggerProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-ui-Navbar-Navbar-stories.a8bd6b0f.iframe.bundle.js.map