"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[2442],{"./src/components/ui/Roster/Roster.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Roster:()=>_Roster,_RosterCell:()=>_RosterCell,_RosterGroup:()=>_RosterGroup,_RosterHeader:()=>_RosterHeader,_RosterHeaderWithCustomElements:()=>_RosterHeaderWithCustomElements,_RosterHeaderWithNavigationIcon:()=>_RosterHeaderWithNavigationIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Flex/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Roster/index.tsx"),_RosterGroup__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Roster/RosterGroup.tsx"),_RosterCell__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/Roster/RosterCell/index.tsx"),_RosterHeader__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/Roster/RosterHeader.tsx"),_Button_IconButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/ui/Button/IconButton.tsx"),_icons_SignalStrength__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/ui/icons/SignalStrength/index.tsx"),_icons_Cog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/ui/icons/Cog/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI Components/Roster",component:___WEBPACK_IMPORTED_MODULE_2__.A,parameters:{storySource:{source:'// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React, { useState } from \'react\';\n\nimport Flex from \'../Flex\';\nimport Roster from \'./\';\nimport RosterGroup from \'./RosterGroup\';\nimport RosterCell from \'./RosterCell\';\nimport RosterHeader from \'./RosterHeader\';\nimport IconButton from \'../Button/IconButton\';\nimport SignalStrength from \'../icons/SignalStrength\';\nimport Cog from \'../icons/Cog\';\n\nexport default {\n  title: \'UI Components/Roster\',\n  component: Roster,\n  parameters: {\n    layout: \'fullscreen\',\n  },\n};\n\nconst Menu = () => (\n  <>\n    <div style={{ padding: \'.5rem 1rem\', cursor: \'pointer\' }}>Message user</div>\n    <div style={{ padding: \'.5rem 1rem\', cursor: \'pointer\' }}>Kick user</div>\n  </>\n);\n\nconst HeaderMenu = () => (\n  <>\n    <div style={{ padding: \'.5rem 1rem\', cursor: \'pointer\' }}>\n      Some menu action\n    </div>\n    <div style={{ padding: \'.5rem 1rem\', cursor: \'pointer\' }}>\n      Some other menu action\n    </div>\n  </>\n);\nconst commonHiddenArgTypes = {\n  tabIndex: { table: { disable: true } },\n  onFocus: { table: { disable: true } },\n  onBlur: { table: { disable: true } },\n};\n\nexport const _Roster = () => {\n  const [search, setSearch] = useState(\'\');\n  const handleSearch = (e) => setSearch(e.target.value);\n\n  return (\n    <Flex\n      container\n      layout="fill-space"\n      css="height: 100vh; background: #f6f9fc"\n    >\n      <Roster>\n        <RosterHeader\n          title="Present"\n          badge={2}\n          onClose={() => alert(\'Closing\')}\n          searchValue={search}\n          onSearch={handleSearch}\n          menu={<HeaderMenu />}\n          a11yMenuLabel="Roster options"\n        />\n        <RosterGroup>\n          <RosterCell\n            name="Michael Scott"\n            subtitle="Regional Manager"\n            muted={false}\n            videoEnabled={true}\n            menu={<Menu />}\n            a11yMenuLabel="Contact options"\n          />\n          <RosterCell\n            name="Michael Scarn"\n            subtitle="FBI agent"\n            muted={true}\n            videoEnabled={false}\n            menu={<Menu />}\n            a11yMenuLabel="Contact options"\n          />\n        </RosterGroup>\n\n        <RosterGroup title="Left" badge={2}>\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n          <RosterCell name="Mike the Magic" subtitle="Magician" />\n        </RosterGroup>\n      </Roster>\n    </Flex>\n  );\n};\n\n_Roster.story = \'Roster\';\n\nexport const _RosterGroup = (args) => {\n  return (\n    <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterGroup title={args.title} badge={args.badge}>\n          <RosterCell name="Michael Scarn" subtitle="FBI agent" />\n          <RosterCell name="Prison Mike" subtitle="Inmate" />\n          <RosterCell name="Date Mike" subtitle="Bachelor" />\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n        </RosterGroup>\n      </Flex>\n    </Flex>\n  );\n};\n\n_RosterGroup.argTypes = {\n  title: { control: \'text\', table: { disable: false } },\n  badge: { control: \'number\' },\n  ...commonHiddenArgTypes,\n};\n\n_RosterGroup.args = {\n  title: \'Left\',\n  badge: 2,\n};\n\n_RosterGroup.story = \'RosterGroup\';\n\nexport const _RosterHeader = (args) => {\n  const [search, setSearch] = useState(\'\');\n\n  const handleSearch = (e) => setSearch(e.target.value);\n\n  return (\n    <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterHeader\n          title={args.title}\n          badge={args.badge}\n          onClose={() => alert(\'Closing\')}\n          searchValue={search}\n          onSearch={handleSearch}\n          menu={<Menu />}\n        />\n        <RosterGroup>\n          <RosterCell name="Michael Scarn" subtitle="FBI agent" />\n          <RosterCell name="Prison Mike" subtitle="Inmate" />\n          <RosterCell name="Date Mike" subtitle="Bachelor" />\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n        </RosterGroup>\n      </Flex>\n    </Flex>\n  );\n};\n\n_RosterHeader.argTypes = {\n  title: { control: \'text\', table: { disable: false } },\n  badge: { control: \'number\' },\n  ...commonHiddenArgTypes,\n};\n\n_RosterHeader.args = {\n  title: \'Present\',\n  badge: 4,\n};\n\n_RosterHeader.story = \'RosterHeader\';\n\nexport const _RosterHeaderWithNavigationIcon = (args) => {\n  const [search, setSearch] = useState(\'\');\n  const handleSearch = (e) => setSearch(e.target.value);\n\n  return (\n    <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterHeader\n          title={args.title}\n          badge={args.badge}\n          onClose={() => alert(\'Closing\')}\n          searchValue={search}\n          onSearch={handleSearch}\n          menu={<Menu />}\n        />\n\n        <RosterGroup>\n          <RosterCell name="Michael Scarn" subtitle="FBI agent" />\n          <RosterCell name="Prison Mike" subtitle="Inmate" />\n          <RosterCell name="Date Mike" subtitle="Bachelor" />\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n        </RosterGroup>\n      </Flex>\n    </Flex>\n  );\n};\n\n_RosterHeaderWithNavigationIcon.argTypes = {\n  title: { control: \'text\', table: { disable: false } },\n  badge: { control: \'number\' },\n  ...commonHiddenArgTypes,\n};\n\n_RosterHeaderWithNavigationIcon.args = {\n  title: \'Present\',\n  badge: 4,\n};\n\n_RosterHeaderWithNavigationIcon.story = \'RosterHeaderWithNavigationIcon\';\n\nexport const _RosterHeaderWithCustomElements = (args) => {\n  const [search, setSearch] = useState(\'\');\n  const handleSearch = (e) => setSearch(e.target.value);\n\n  return (\n    <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterHeader\n          title={args.title}\n          badge={args.badge}\n          onClose={() => alert(\'Closing\')}\n          searchValue={search}\n          onSearch={handleSearch}\n          menu={<Menu />}\n        >\n          <IconButton label="test" icon={<Cog />} />\n          <IconButton label="test" icon={<SignalStrength />} />\n        </RosterHeader>\n        <RosterGroup>\n          <RosterCell name="Michael Scarn" subtitle="FBI agent" />\n          <RosterCell name="Prison Mike" subtitle="Inmate" />\n          <RosterCell name="Date Mike" subtitle="Bachelor" />\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n        </RosterGroup>\n      </Flex>\n    </Flex>\n  );\n};\n\n_RosterHeaderWithCustomElements.argTypes = {\n  title: { control: \'text\', table: { disable: false } },\n  badge: { control: \'number\' },\n  ...commonHiddenArgTypes,\n};\n\n_RosterHeaderWithCustomElements.args = {\n  title: \'Present\',\n  badge: 4,\n};\n\n_RosterHeaderWithCustomElements.story = \'_RosterHeaderWithCustomElements\';\n\nexport const _RosterCell = (args) => {\n  return (\n    <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterCell\n          name={args.name}\n          subtitle={args.subtitle}\n          muted={args.muted}\n          videoEnabled={args.videoEnabled}\n          sharingContent={args.sharingContent}\n          runningLate={args.runningLate}\n          micPosition={args.micPosition}\n          poorConnection={args.poorConnection}\n          menu={<Menu />}\n        />\n      </Flex>\n    </Flex>\n  );\n};\n\n_RosterCell.argTypes = {\n  name: { control: \'text\' },\n  subtitle: { control: \'text\' },\n  runningLate: { control: \'text\' },\n  muted: { control: \'boolean\' },\n  videoEnabled: { control: \'boolean\' },\n  sharingContent: { control: \'boolean\' },\n  poorConnection: { control: \'boolean\' },\n  micPosition: { control: \'select\', options: [\'grouped\', \'leading\'] },\n  ...commonHiddenArgTypes,\n};\n\n_RosterCell.args = {\n  name: \'Stanley Hudson\',\n  subtitle: \'Bagel savant\',\n  runningLate: \'\',\n  muted: false,\n  videoEnabled: false,\n  sharingContent: false,\n  poorConnection: false,\n  micPosition: \'grouped\',\n};\n\n_RosterCell.story = \'RosterCell\';\n',locationsMap:{roster:{startLoc:{col:23,line:46},endLoc:{col:1,line:92},startBody:{col:23,line:46},endBody:{col:1,line:92}},"roster-group":{startLoc:{col:28,line:96},endLoc:{col:1,line:109},startBody:{col:28,line:96},endBody:{col:1,line:109}},"roster-header":{startLoc:{col:29,line:124},endLoc:{col:1,line:149},startBody:{col:29,line:124},endBody:{col:1,line:149}},"roster-header-with-navigation-icon":{startLoc:{col:47,line:164},endLoc:{col:1,line:189},startBody:{col:47,line:164},endBody:{col:1,line:189}},"roster-header-with-custom-elements":{startLoc:{col:47,line:204},endLoc:{col:1,line:231},startBody:{col:47,line:204},endBody:{col:1,line:231}},"roster-cell":{startLoc:{col:27,line:246},endLoc:{col:1,line:264},startBody:{col:27,line:246},endBody:{col:1,line:264}}}},layout:"fullscreen"}},Menu=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{style:{padding:".5rem 1rem",cursor:"pointer"},children:"Message user"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{style:{padding:".5rem 1rem",cursor:"pointer"},children:"Kick user"})]}),HeaderMenu=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{style:{padding:".5rem 1rem",cursor:"pointer"},children:"Some menu action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{style:{padding:".5rem 1rem",cursor:"pointer"},children:"Some other menu action"})]}),commonHiddenArgTypes={tabIndex:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}}},_Roster=()=>{const[search,setSearch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{container:!0,layout:"fill-space",css:"height: 100vh; background: #f6f9fc",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterHeader__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Present",badge:2,onClose:()=>alert("Closing"),searchValue:search,onSearch:e=>setSearch(e.target.value),menu:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HeaderMenu,{}),a11yMenuLabel:"Roster options"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_RosterGroup__WEBPACK_IMPORTED_MODULE_3__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Michael Scott",subtitle:"Regional Manager",muted:!1,videoEnabled:!0,menu:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Menu,{}),a11yMenuLabel:"Contact options"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Michael Scarn",subtitle:"FBI agent",muted:!0,videoEnabled:!1,menu:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Menu,{}),a11yMenuLabel:"Contact options"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_RosterGroup__WEBPACK_IMPORTED_MODULE_3__.A,{title:"Left",badge:2,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Dwight",subtitle:"Assistant regional manager"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Mike the Magic",subtitle:"Magician"})]})]})})};_Roster.displayName="_Roster",_Roster.story="Roster";const _RosterGroup=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{container:!0,layout:"fill-space-centered",css:"height: 100vh;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{css:"width: 100%; max-width: 280px;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_RosterGroup__WEBPACK_IMPORTED_MODULE_3__.A,{title:args.title,badge:args.badge,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Michael Scarn",subtitle:"FBI agent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Prison Mike",subtitle:"Inmate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Date Mike",subtitle:"Bachelor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Dwight",subtitle:"Assistant regional manager"})]})})});_RosterGroup.displayName="_RosterGroup",_RosterGroup.argTypes={title:{control:"text",table:{disable:!1}},badge:{control:"number"},...commonHiddenArgTypes},_RosterGroup.args={title:"Left",badge:2},_RosterGroup.story="RosterGroup";const _RosterHeader=args=>{const[search,setSearch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{container:!0,layout:"fill-space-centered",css:"height: 100vh;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{css:"width: 100%; max-width: 280px;",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterHeader__WEBPACK_IMPORTED_MODULE_5__.A,{title:args.title,badge:args.badge,onClose:()=>alert("Closing"),searchValue:search,onSearch:e=>setSearch(e.target.value),menu:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Menu,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_RosterGroup__WEBPACK_IMPORTED_MODULE_3__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Michael Scarn",subtitle:"FBI agent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Prison Mike",subtitle:"Inmate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Date Mike",subtitle:"Bachelor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Dwight",subtitle:"Assistant regional manager"})]})]})})};_RosterHeader.displayName="_RosterHeader",_RosterHeader.argTypes={title:{control:"text",table:{disable:!1}},badge:{control:"number"},...commonHiddenArgTypes},_RosterHeader.args={title:"Present",badge:4},_RosterHeader.story="RosterHeader";const _RosterHeaderWithNavigationIcon=args=>{const[search,setSearch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{container:!0,layout:"fill-space-centered",css:"height: 100vh;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{css:"width: 100%; max-width: 280px;",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterHeader__WEBPACK_IMPORTED_MODULE_5__.A,{title:args.title,badge:args.badge,onClose:()=>alert("Closing"),searchValue:search,onSearch:e=>setSearch(e.target.value),menu:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Menu,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_RosterGroup__WEBPACK_IMPORTED_MODULE_3__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Michael Scarn",subtitle:"FBI agent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Prison Mike",subtitle:"Inmate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Date Mike",subtitle:"Bachelor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Dwight",subtitle:"Assistant regional manager"})]})]})})};_RosterHeaderWithNavigationIcon.displayName="_RosterHeaderWithNavigationIcon",_RosterHeaderWithNavigationIcon.argTypes={title:{control:"text",table:{disable:!1}},badge:{control:"number"},...commonHiddenArgTypes},_RosterHeaderWithNavigationIcon.args={title:"Present",badge:4},_RosterHeaderWithNavigationIcon.story="RosterHeaderWithNavigationIcon";const _RosterHeaderWithCustomElements=args=>{const[search,setSearch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{container:!0,layout:"fill-space-centered",css:"height: 100vh;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{css:"width: 100%; max-width: 280px;",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_RosterHeader__WEBPACK_IMPORTED_MODULE_5__.A,{title:args.title,badge:args.badge,onClose:()=>alert("Closing"),searchValue:search,onSearch:e=>setSearch(e.target.value),menu:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Menu,{}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_IconButton__WEBPACK_IMPORTED_MODULE_6__.A,{label:"test",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_icons_Cog__WEBPACK_IMPORTED_MODULE_8__.A,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_IconButton__WEBPACK_IMPORTED_MODULE_6__.A,{label:"test",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_icons_SignalStrength__WEBPACK_IMPORTED_MODULE_7__.A,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_RosterGroup__WEBPACK_IMPORTED_MODULE_3__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Michael Scarn",subtitle:"FBI agent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Prison Mike",subtitle:"Inmate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Date Mike",subtitle:"Bachelor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:"Dwight",subtitle:"Assistant regional manager"})]})]})})};_RosterHeaderWithCustomElements.displayName="_RosterHeaderWithCustomElements",_RosterHeaderWithCustomElements.argTypes={title:{control:"text",table:{disable:!1}},badge:{control:"number"},...commonHiddenArgTypes},_RosterHeaderWithCustomElements.args={title:"Present",badge:4},_RosterHeaderWithCustomElements.story="_RosterHeaderWithCustomElements";const _RosterCell=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{container:!0,layout:"fill-space-centered",css:"height: 100vh;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_1__.A,{css:"width: 100%; max-width: 280px;",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RosterCell__WEBPACK_IMPORTED_MODULE_4__.A,{name:args.name,subtitle:args.subtitle,muted:args.muted,videoEnabled:args.videoEnabled,sharingContent:args.sharingContent,runningLate:args.runningLate,micPosition:args.micPosition,poorConnection:args.poorConnection,menu:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Menu,{})})})});_RosterCell.displayName="_RosterCell",_RosterCell.argTypes={name:{control:"text"},subtitle:{control:"text"},runningLate:{control:"text"},muted:{control:"boolean"},videoEnabled:{control:"boolean"},sharingContent:{control:"boolean"},poorConnection:{control:"boolean"},micPosition:{control:"select",options:["grouped","leading"]},...commonHiddenArgTypes},_RosterCell.args={name:"Stanley Hudson",subtitle:"Bagel savant",runningLate:"",muted:!1,videoEnabled:!1,sharingContent:!1,poorConnection:!1,micPosition:"grouped"},_RosterCell.story="RosterCell",_Roster.parameters={..._Roster.parameters,docs:{..._Roster.parameters?.docs,source:{originalSource:'() => {\n  const [search, setSearch] = useState(\'\');\n  const handleSearch = e => setSearch(e.target.value);\n  return <Flex container layout="fill-space" css="height: 100vh; background: #f6f9fc">\n      <Roster>\n        <RosterHeader title="Present" badge={2} onClose={() => alert(\'Closing\')} searchValue={search} onSearch={handleSearch} menu={<HeaderMenu />} a11yMenuLabel="Roster options" />\n        <RosterGroup>\n          <RosterCell name="Michael Scott" subtitle="Regional Manager" muted={false} videoEnabled={true} menu={<Menu />} a11yMenuLabel="Contact options" />\n          <RosterCell name="Michael Scarn" subtitle="FBI agent" muted={true} videoEnabled={false} menu={<Menu />} a11yMenuLabel="Contact options" />\n        </RosterGroup>\n\n        <RosterGroup title="Left" badge={2}>\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n          <RosterCell name="Mike the Magic" subtitle="Magician" />\n        </RosterGroup>\n      </Roster>\n    </Flex>;\n}',..._Roster.parameters?.docs?.source}}},_RosterGroup.parameters={..._RosterGroup.parameters,docs:{..._RosterGroup.parameters?.docs,source:{originalSource:'args => {\n  return <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterGroup title={args.title} badge={args.badge}>\n          <RosterCell name="Michael Scarn" subtitle="FBI agent" />\n          <RosterCell name="Prison Mike" subtitle="Inmate" />\n          <RosterCell name="Date Mike" subtitle="Bachelor" />\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n        </RosterGroup>\n      </Flex>\n    </Flex>;\n}',..._RosterGroup.parameters?.docs?.source}}},_RosterHeader.parameters={..._RosterHeader.parameters,docs:{..._RosterHeader.parameters?.docs,source:{originalSource:'args => {\n  const [search, setSearch] = useState(\'\');\n  const handleSearch = e => setSearch(e.target.value);\n  return <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterHeader title={args.title} badge={args.badge} onClose={() => alert(\'Closing\')} searchValue={search} onSearch={handleSearch} menu={<Menu />} />\n        <RosterGroup>\n          <RosterCell name="Michael Scarn" subtitle="FBI agent" />\n          <RosterCell name="Prison Mike" subtitle="Inmate" />\n          <RosterCell name="Date Mike" subtitle="Bachelor" />\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n        </RosterGroup>\n      </Flex>\n    </Flex>;\n}',..._RosterHeader.parameters?.docs?.source}}},_RosterHeaderWithNavigationIcon.parameters={..._RosterHeaderWithNavigationIcon.parameters,docs:{..._RosterHeaderWithNavigationIcon.parameters?.docs,source:{originalSource:'args => {\n  const [search, setSearch] = useState(\'\');\n  const handleSearch = e => setSearch(e.target.value);\n  return <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterHeader title={args.title} badge={args.badge} onClose={() => alert(\'Closing\')} searchValue={search} onSearch={handleSearch} menu={<Menu />} />\n\n        <RosterGroup>\n          <RosterCell name="Michael Scarn" subtitle="FBI agent" />\n          <RosterCell name="Prison Mike" subtitle="Inmate" />\n          <RosterCell name="Date Mike" subtitle="Bachelor" />\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n        </RosterGroup>\n      </Flex>\n    </Flex>;\n}',..._RosterHeaderWithNavigationIcon.parameters?.docs?.source}}},_RosterHeaderWithCustomElements.parameters={..._RosterHeaderWithCustomElements.parameters,docs:{..._RosterHeaderWithCustomElements.parameters?.docs,source:{originalSource:'args => {\n  const [search, setSearch] = useState(\'\');\n  const handleSearch = e => setSearch(e.target.value);\n  return <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterHeader title={args.title} badge={args.badge} onClose={() => alert(\'Closing\')} searchValue={search} onSearch={handleSearch} menu={<Menu />}>\n          <IconButton label="test" icon={<Cog />} />\n          <IconButton label="test" icon={<SignalStrength />} />\n        </RosterHeader>\n        <RosterGroup>\n          <RosterCell name="Michael Scarn" subtitle="FBI agent" />\n          <RosterCell name="Prison Mike" subtitle="Inmate" />\n          <RosterCell name="Date Mike" subtitle="Bachelor" />\n          <RosterCell name="Dwight" subtitle="Assistant regional manager" />\n        </RosterGroup>\n      </Flex>\n    </Flex>;\n}',..._RosterHeaderWithCustomElements.parameters?.docs?.source}}},_RosterCell.parameters={..._RosterCell.parameters,docs:{..._RosterCell.parameters?.docs,source:{originalSource:'args => {\n  return <Flex container layout="fill-space-centered" css="height: 100vh;">\n      <Flex css="width: 100%; max-width: 280px;">\n        <RosterCell name={args.name} subtitle={args.subtitle} muted={args.muted} videoEnabled={args.videoEnabled} sharingContent={args.sharingContent} runningLate={args.runningLate} micPosition={args.micPosition} poorConnection={args.poorConnection} menu={<Menu />} />\n      </Flex>\n    </Flex>;\n}',..._RosterCell.parameters?.docs?.source}}};const __namedExportsOrder=["_Roster","_RosterGroup","_RosterHeader","_RosterHeaderWithNavigationIcon","_RosterHeaderWithCustomElements","_RosterCell"];try{_RosterGroup.displayName="_RosterGroup",_RosterGroup.__docgenInfo={description:"",displayName:"_RosterGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Roster.stories.tsx#_RosterGroup"]={docgenInfo:_RosterGroup.__docgenInfo,name:"_RosterGroup",path:"src/components/ui/Roster/Roster.stories.tsx#_RosterGroup"})}catch(__react_docgen_typescript_loader_error){}try{_RosterHeader.displayName="_RosterHeader",_RosterHeader.__docgenInfo={description:"",displayName:"_RosterHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Roster.stories.tsx#_RosterHeader"]={docgenInfo:_RosterHeader.__docgenInfo,name:"_RosterHeader",path:"src/components/ui/Roster/Roster.stories.tsx#_RosterHeader"})}catch(__react_docgen_typescript_loader_error){}try{_RosterHeaderWithNavigationIcon.displayName="_RosterHeaderWithNavigationIcon",_RosterHeaderWithNavigationIcon.__docgenInfo={description:"",displayName:"_RosterHeaderWithNavigationIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Roster.stories.tsx#_RosterHeaderWithNavigationIcon"]={docgenInfo:_RosterHeaderWithNavigationIcon.__docgenInfo,name:"_RosterHeaderWithNavigationIcon",path:"src/components/ui/Roster/Roster.stories.tsx#_RosterHeaderWithNavigationIcon"})}catch(__react_docgen_typescript_loader_error){}try{_RosterHeaderWithCustomElements.displayName="_RosterHeaderWithCustomElements",_RosterHeaderWithCustomElements.__docgenInfo={description:"",displayName:"_RosterHeaderWithCustomElements",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Roster.stories.tsx#_RosterHeaderWithCustomElements"]={docgenInfo:_RosterHeaderWithCustomElements.__docgenInfo,name:"_RosterHeaderWithCustomElements",path:"src/components/ui/Roster/Roster.stories.tsx#_RosterHeaderWithCustomElements"})}catch(__react_docgen_typescript_loader_error){}try{_RosterCell.displayName="_RosterCell",_RosterCell.__docgenInfo={description:"",displayName:"_RosterCell",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Roster/Roster.stories.tsx#_RosterCell"]={docgenInfo:_RosterCell.__docgenInfo,name:"_RosterCell",path:"src/components/ui/Roster/Roster.stories.tsx#_RosterCell"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/Button/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,K:()=>IconButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_2__.qn,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{ref,variant:"icon",...props}),props.badge]}))),__WEBPACK_DEFAULT_EXPORT__=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{badge:{defaultValue:null,description:"Render a component to the top right area of the IconButton",name:"badge",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/ui/Button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OV:()=>StyledButton,qn:()=>StyledIconButtonWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts"),_Base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Base/index.ts");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`,StyledIconButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  display: inline-block;
  position: relative;
`;try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/ui/Button/Styled.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}try{StyledIconButtonWrapper.displayName="StyledIconButtonWrapper",StyledIconButtonWrapper.__docgenInfo={description:"",displayName:"StyledIconButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"]={docgenInfo:StyledIconButtonWrapper.__docgenInfo,name:"StyledIconButtonWrapper",path:"src/components/ui/Button/Styled.tsx#StyledIconButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Button/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styled__WEBPACK_IMPORTED_MODULE_1__.OV,{...props,className:props.className||"",as:props.tag,ref,"aria-label":props.label,"data-testid":"button",disabled:props.disabled,children:[props.icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-icon","data-testid":"button-icon",children:props.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ch-label","data-testid":"button-label",children:props.label})]}))),__WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"The icon element to be shown in the button.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The text of the button.",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"The variant of button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'}]}},selected:{defaultValue:null,description:"Whether or not the button is selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:null,description:"Defines the size of the icon in the button, it defaults to `sm`.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"Whether or not the button is disabled. *",name:"disabled",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Flex/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Flex,A:()=>ui_Flex});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const fillSpace=styled_components_browser_esm.AH`
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
`;try{StyledFlex.displayName="StyledFlex",StyledFlex.__docgenInfo={description:"",displayName:"StyledFlex",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/Styled.tsx#StyledFlex"]={docgenInfo:StyledFlex.__docgenInfo,name:"StyledFlex",path:"src/components/ui/Flex/Styled.tsx#StyledFlex"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=({children,className,tag,alignItems="stretch",container=!1,flexBasis="auto",flexDirection="row",flexShrink=1,flexWrap="nowrap",justifyContent="flex-start",...props})=>(0,jsx_runtime.jsx)(StyledFlex,{alignItems,container,flexBasis,flexDirection,flexShrink,flexWrap,justifyContent,as:tag,"data-testid":"flex",className:className||"",...props,children});Flex.displayName="Flex";const ui_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{alignItems:{defaultValue:{value:"stretch"},description:"Defines the default behavior for how flex items are laid out along the cross axis on the current line.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"baseline"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"stretch"'}]}},container:{defaultValue:{value:"false"},description:"If `true`, display = `flex`, otherwise, display = `block`.",name:"container",required:!1,type:{name:"boolean | undefined"}},flexDirection:{defaultValue:{value:"row"},description:"Establishes the main-axis, thus defining the direction flex items are placed in the flex container.",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},flexWrap:{defaultValue:{value:"nowrap"},description:"By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"Shorthand for flex-grow, flex-shrink and flex-basis combined.",name:"flex",required:!1,type:{name:"string | undefined"}},flexBasis:{defaultValue:{value:"auto"},description:"Defines the default size of an element before the remaining space is distributed.",name:"flexBasis",required:!1,type:{name:"number | undefined"}},flexGrow:{defaultValue:null,description:"Defines the ability for a flex item to grow if necessary.",name:"flexGrow",required:!1,type:{name:"number | undefined"}},flexShrink:{defaultValue:{value:"1"},description:"Defines the ability for a flex item to shrink if necessary.",name:"flexShrink",required:!1,type:{name:"number | undefined"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Defines the alignment along the main axis.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"initial"'},{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"space-between"'},{value:'"space-around"'}]}},layout:{defaultValue:null,description:"The pre-defined layout.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stack"'},{value:'"fill-space"'},{value:'"fill-space-centered"'},{value:'"equal-columns"'}]}},style:{defaultValue:null,description:"Additional style of the flex",name:"style",required:!1,type:{name:"{} | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Flex/index.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/ui/Flex/index.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/Styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GW:()=>StyledPopOverMenu,JD:()=>StyledSubMenu,WL:()=>StyledPopOverSeparator,kC:()=>StyledPopOverHeader,kL:()=>StyledPopOverItem,rS:()=>StyledPopOverToggle});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/style.ts");const StyledPopOverMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.ul.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`,StyledPopOverToggle=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`,StyledPopOverItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.li.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`,StyledPopOverHeader=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.header.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
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
`,StyledPopOverSeparator=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.li.withConfig(_utils_style__WEBPACK_IMPORTED_MODULE_0__.P6)`
  margin: 0;
  border-width: 0.0625rem 0 0 0;
  border-style: solid;
  border-color: ${props=>props.theme.popOver.separator};
  margin-bottom: 0.75rem;
  opacity: 0.8;
`;try{StyledPopOverMenu.displayName="StyledPopOverMenu",StyledPopOverMenu.__docgenInfo={description:"",displayName:"StyledPopOverMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"]={docgenInfo:StyledPopOverMenu.__docgenInfo,name:"StyledPopOverMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverToggle.displayName="StyledPopOverToggle",StyledPopOverToggle.__docgenInfo={description:"",displayName:"StyledPopOverToggle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"]={docgenInfo:StyledPopOverToggle.__docgenInfo,name:"StyledPopOverToggle",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverToggle"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverItem.displayName="StyledPopOverItem",StyledPopOverItem.__docgenInfo={description:"",displayName:"StyledPopOverItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"]={docgenInfo:StyledPopOverItem.__docgenInfo,name:"StyledPopOverItem",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverItem"})}catch(__react_docgen_typescript_loader_error){}try{StyledSubMenu.displayName="StyledSubMenu",StyledSubMenu.__docgenInfo={description:"",displayName:"StyledSubMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledSubMenu"]={docgenInfo:StyledSubMenu.__docgenInfo,name:"StyledSubMenu",path:"src/components/ui/PopOver/Styled.tsx#StyledSubMenu"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverHeader.displayName="StyledPopOverHeader",StyledPopOverHeader.__docgenInfo={description:"",displayName:"StyledPopOverHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"]={docgenInfo:StyledPopOverHeader.__docgenInfo,name:"StyledPopOverHeader",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverHeader"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopOverSeparator.displayName="StyledPopOverSeparator",StyledPopOverSeparator.__docgenInfo={description:"",displayName:"StyledPopOverSeparator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"]={docgenInfo:StyledPopOverSeparator.__docgenInfo,name:"StyledPopOverSeparator",path:"src/components/ui/PopOver/Styled.tsx#StyledPopOverSeparator"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/PopOver/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-popper/lib/esm/Manager.js"),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper/lib/esm/Reference.js"),react_popper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-popper/lib/esm/Popper.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts"),_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useClickOutside/index.tsx"),_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useTabOutside/index.tsx"),_Styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/PopOver/Styled.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getFocusableElements=node=>node.querySelectorAll("button, [href]"),PopOver=({renderButton,renderButtonWrapper,onPopOverClick,children,isSubMenu=!1,placement="bottom-start",a11yLabel,className,closeOnClick=!0,...rest})=>{const menuRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(isOpen&&menuRef.current){const nodes=getFocusableElements(menuRef.current);nodes&&nodes[0].focus()}}),[isOpen]);const move=direction=>{const node=menuRef.current;if(!isSubMenu&&node){const nodes=getFocusableElements(node),currentElement=document.activeElement;for(let i=0;i<nodes.length;i++)if(nodes[i]===currentElement){if("down"===direction&&i!==nodes.length-1)return nodes[i+1].focus();if("up"===direction&&i>0)return nodes[i-1].focus();break}}},handlePopOverClick=()=>{setIsOpen(!isOpen),onPopOverClick&&onPopOverClick(isOpen)};return(0,_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__.A)(menuRef,(()=>setIsOpen(!1))),(0,_hooks_useTabOutside__WEBPACK_IMPORTED_MODULE_4__.A)(menuRef,(()=>setIsOpen(!1))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref:menuRef,onKeyDown:e=>{switch(e.keyCode){case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ESCAPE:return setIsOpen(!1);case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_UP:return move("up");case _constants__WEBPACK_IMPORTED_MODULE_2__.L.ARROW_DOWN:return move("down")}},"data-testid":"popover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_7__.mS,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_8__.O,{children:({ref})=>{const props={ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"ch-popover-toggle"),onClick:handlePopOverClick,"data-menu":isSubMenu?"submenu":null,"aria-label":a11yLabel,"aria-haspopup":!0,"aria-expanded":isOpen,"data-testid":"popover-toggle"};if(renderButton)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.rS,{...props,children:renderButton(isOpen)});if(renderButtonWrapper){const{ref,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{ref,children:renderButtonWrapper(isOpen,rest)})}return null}}),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_9__.N,{placement,modifiers:[{name:"offset",options:{offset:[-8,0]}}],...rest,children:({ref,style,placement})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styled__WEBPACK_IMPORTED_MODULE_5__.GW,{"data-placement":placement,onClick:e=>(e=>{if(!closeOnClick)return;return!e.target.closest("[data-menu='submenu']")&&setIsOpen(!1)})(e),ref,style,"data-testid":"menu",className:"ch-popover-menu",children})})]})})};PopOver.displayName="PopOver";const __WEBPACK_DEFAULT_EXPORT__=PopOver;try{PopOver.displayName="PopOver",PopOver.__docgenInfo={description:"",displayName:"PopOver",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},isSubMenu:{defaultValue:{value:"false"},description:"Whether or not this is a sub menu.",name:"isSubMenu",required:!1,type:{name:"Boolean | undefined"}},placement:{defaultValue:{value:"bottom-start"},description:"Defines the placement of PopOver menu.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},renderButton:{defaultValue:null,description:"Defines the function to render the inner contents of the popover button element",name:"renderButton",required:!1,type:{name:"((isActive: boolean) => ReactNode) | undefined"}},renderButtonWrapper:{defaultValue:null,description:"Alternative to renderButton, defines the function to render the full popover button element (as opposed to just its contents). This is used if you want full control over the button rendering. The button must forwardRef",name:"renderButtonWrapper",required:!1,type:{name:"((isActive: boolean, props: any) => ReactNode) | undefined"}},onPopOverClick:{defaultValue:null,description:"The callback fired when the render button is clicked.",name:"onPopOverClick",required:!1,type:{name:"((isOpen: boolean) => void) | undefined"}},a11yLabel:{defaultValue:null,description:"The label used for availability.",name:"a11yLabel",required:!0,type:{name:"string"}},closeOnClick:{defaultValue:{value:"true"},description:"Allow the popover to stay open for multiple clicks.",name:"closeOnClick",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/PopOver/index.tsx#PopOver"]={docgenInfo:PopOver.__docgenInfo,name:"PopOver",path:"src/components/ui/PopOver/index.tsx#PopOver"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/WithTooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>WithTooltip});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),LoggerProvider=__webpack_require__("./src/providers/LoggerProvider/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const TopProps=styled_components_browser_esm.AH`
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
`;try{StyledTooltip.displayName="StyledTooltip",StyledTooltip.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"]={docgenInfo:StyledTooltip.__docgenInfo,name:"StyledTooltip",path:"src/components/ui/WithTooltip/Styled.tsx#StyledTooltip"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const initialState={show:!1,bounds:null},WithTooltip=(Component,container_id)=>props=>{const logger=(0,LoggerProvider.Ul)(),[{show,bounds},setShow]=(0,react.useState)(initialState),[container,setContainer]=(0,react.useState)(null),position=props.tooltipPosition??"top",showToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation();let component=e.target;for(;!component.getAttribute("data-tooltip");)component=component.parentElement;const bounds=component.getBoundingClientRect();setShow({show:!0,bounds})}),[]),hideToolTip=(0,react.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),setShow(initialState)}),[]);return(0,react.useEffect)((()=>(document.addEventListener("scroll",hideToolTip,!0),()=>document.removeEventListener("scroll",hideToolTip,!0))),[]),(0,react.useEffect)((()=>{const container=document.getElementById(container_id||"Tooltip__container");container?setContainer(container):logger.warn("Attempted to use 'WithTooltip' but could not find container element.Pass a valid element ID or add 'Tooltip__container' ID to existing element")}),[container_id]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[show&&bounds&&container&&react_dom.createPortal((0,jsx_runtime.jsx)(StyledTooltip,{position,bounds,children:props.tooltipContent||props.label}),container),(0,jsx_runtime.jsx)(Component,{...props,"data-tooltip":!0,"data-tooltip-position":position,onClick:e=>{show&&hideToolTip(e),props?.onClick?.(e)},onFocus:e=>{show||showToolTip(e),props?.onFocus?.(e)},onBlur:e=>{show&&hideToolTip(e),props?.onBlur?.(e)},onMouseEnter:e=>{show||showToolTip(e),props?.onMouseEnter?.(e)},onMouseLeave:e=>{show&&hideToolTip(e),props?.onMouseLeave?.(e)}})]})}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>KEY_CODES,d:()=>VIDEO_INPUT_QUALITY});const KEY_CODES={TAB:9,ENTER:13,ESCAPE:27,ARROW_UP:38,ARROW_DOWN:40},VIDEO_INPUT_QUALITY={"360p":"360p (nHD) @ 15 fps (600 Kbps max)","540p":"540p (qHD) @ 15 fps (1.4 Mbps max)","720p":"720p (HD) @ 15 fps (1.4 Mbps max)"}},"./src/hooks/useClickOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useClickOutside(ref,onClickOutside){const onMouseDown=e=>{(e=>!!ref.current&&!ref.current.contains(e.target))(e)&&onClickOutside&&onClickOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("mousedown",onMouseDown),document.addEventListener("touchstart",onMouseDown),()=>{document.removeEventListener("mousedown",onMouseDown),document.removeEventListener("touchstart",onMouseDown)})))}},"./src/hooks/useTabOutside/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useTabOutside(ref,onTabOutside){const keyUp=e=>{if(9===e.keyCode&&ref.current&&!ref.current.contains(document.activeElement))return onTabOutside(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("keyup",keyUp),()=>{document.removeEventListener("keyup",keyUp)})))}},"./src/providers/LoggerProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IB:()=>LoggerProvider,Ul:()=>useLogger});var amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amazon-chime-sdk-js/build/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const consoleLogger=new amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger("ChimeSDKReactComponent",amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO),LoggerContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(consoleLogger),LoggerProvider=({logger,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LoggerContext.Provider,{value:logger,children});LoggerProvider.displayName="LoggerProvider";const useLogger=()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LoggerContext);try{LoggerProvider.displayName="LoggerProvider",LoggerProvider.__docgenInfo={description:"",displayName:"LoggerProvider",props:{logger:{defaultValue:null,description:"",name:"logger",required:!0,type:{name:"Logger"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/LoggerProvider/index.tsx#LoggerProvider"]={docgenInfo:LoggerProvider.__docgenInfo,name:"LoggerProvider",path:"src/providers/LoggerProvider/index.tsx#LoggerProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-ui-Roster-Roster-stories.ca7b9bd5.iframe.bundle.js.map