(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({14:"components-ui-Input-Input-stories",15:"providers-BackgroundReplacementProvider-docs-BackgroundReplacementProvider-mdx",92:"components-ui-Badge-Badge-mdx",106:"components-ui-Modal-Modal-stories",117:"components-ui-icons-Remove-Remove-stories",191:"hooks-sdk-docs-useMeetingStatus-mdx",221:"components-ui-icons-Clock-Clock-mdx",297:"components-migrationToV2-mdx",346:"hooks-sdk-docs-useLocalAudioInputActivityPreview-mdx",380:"components-ui-Portal-Portal-stories",416:"components-ui-Grid-Grid-stories",431:"components-ui-icons-Attendees-Attendees-stories",433:"components-ui-icons-DropToAttach-DropToAttach-mdx",455:"components-ui-icons-Dots-Dots-mdx",483:"components-ui-Chat-ChatBubble-ChatBubble-stories",486:"components-ui-Badge-Badge-stories",526:"components-sdk-RemoteVideo-RemoteVideo-mdx",782:"components-ui-ControlBar-ControlBar-mdx",785:"providers-FeaturedVideoTileProvider-docs-useFeaturedTileState-mdx",911:"components-ui-icons-Share-Share-stories",935:"components-ui-icons-ListHandRasie-ListHandRaise-stories",957:"components-ui-icons-DeskPhone-DeskPhone-mdx",1029:"providers-VoiceFocusProvider-docs-useVoiceFocus-mdx",1055:"providers-RosterProvider-docs-RosterProvider-mdx",1067:"components-ui-icons-UpAndDownCaret-UpAndDownCaret-stories",1131:"components-ui-icons-Arrow-Arrow-stories",1169:"components-ui-icons-Echo-Echo-mdx",1208:"components-ui-Modal-Modal-mdx",1316:"components-sdk-MeetingControls-docs-ContentShareControl-mdx",1332:"components-ui-Textarea-Textarea-stories",1384:"components-ui-Navbar-Navbar-stories",1463:"providers-NotificationProvider-docs-NotificationProvider-mdx",1467:"components-ui-icons-Play-Play-mdx",1560:"components-ui-Notification-Notification-mdx",1594:"hooks-sdk-docs-useSelectVideoQuality-mdx",1630:"components-introduction-mdx",1633:"hooks-sdk-docs-useMediaStreamMetrics-mdx",1639:"components-ui-icons-Check-Check-stories",1683:"components-sdk-introduction-mdx",1805:"providers-LocalVideoProvider-docs-useLocalVideo-mdx",1827:"components-ui-icons-Cog-Cog-stories",1866:"components-sdk-MicrophoneActivity-MicrophoneActivity-mdx",1880:"components-ui-NotificationGroup-NotificationGroup-mdx",1888:"components-sdk-FeaturedRemoteVideos-FeaturedRemoteVideos-mdx",1939:"providers-AudioVideoProvider-docs-AudioVideoProvider-mdx",1941:"components-ui-icons-Lock-Lock-mdx",1942:"hooks-sdk-docs-useLocalAudioInputActivity-mdx",2020:"components-ui-Heading-Heading-mdx",2037:"components-ui-icons-Dislike-Dislike-mdx",2097:"providers-MeetingProvider-docs-MeetingProvider-mdx",2139:"providers-BackgroundBlurProvider-docs-useBackgroundBlur-mdx",2172:"components-ui-FormField-FormField-mdx",2300:"components-ui-Label-Label-mdx",2303:"providers-MeetingEventProvider-docs-useMeetingEvent-mdx",2305:"components-ui-icons-Crown-Crown-mdx",2310:"components-ui-Grid-Grid-mdx",2367:"components-ui-icons-Microphone-Microphone-mdx",2411:"components-ui-icons-Attachment-Attachment-stories",2434:"components-ui-Textarea-Textarea-mdx",2441:"components-ui-icons-LeaveMeeting-LeaveMeeting-stories",2442:"components-ui-Roster-Roster-stories",2445:"components-ui-icons-Phone-Phone-mdx",2563:"providers-ContentShareProvider-docs-useContentShareState-mdx",2569:"components-ui-Chat-InfiniteList-InfiniteList-mdx",2598:"components-ui-Checkbox-Checkbox-stories",2643:"components-ui-icons-Crown-Crown-stories",2695:"components-ui-icons-CheckRound-CheckRound-mdx",2698:"components-sdk-VideoTileGrid-VideoTileGrid-mdx",2747:"components-ui-icons-ZoomOut-ZoomOut-stories",2793:"providers-NotificationProvider-docs-useNotificationDispatch-mdx",2796:"components-ui-Select-Select-stories",2806:"providers-RosterProvider-docs-useRosterState-mdx",2836:"components-ui-icons-Phone-Phone-stories",2857:"components-ui-icons-UpAndDownCaret-UpAndDownCaret-mdx",2911:"components-ui-icons-Lock-Lock-stories",2934:"components-ui-Chat-MessageAttachment-Attachment-stories",2952:"components-ui-Chat-ChatBubble-ChatBubbleContainer-stories",2963:"components-ui-icons-Echo-Echo-stories",2991:"components-sdk-DeviceSelection-docs-QualitySelection-mdx",3020:"components-ui-Checkbox-Checkbox-mdx",3021:"components-ui-icons-Add-Add-mdx",3129:"components-ui-icons-Attachment-Attachment-mdx",3197:"components-ui-icons-Search-Search-stories",3211:"theme-themes-mdx",3280:"hooks-introduction-mdx",3342:"components-ui-VideoGrid-VideoGrid-stories",3349:"components-ui-icons-Attendees-Attendees-mdx",3374:"components-sdk-MeetingControls-docs-AudioInputVFControl-mdx",3493:"components-ui-icons-Rooms-Rooms-mdx",3499:"components-ui-icons-Record-Record-stories",3529:"components-ui-icons-ZoomIn-ZoomIn-stories",3559:"components-ui-icons-Laptop-Laptop-mdx",3643:"providers-DevicesProvider-docs-useAudioInputs-mdx",3659:"components-ui-icons-Pin-Pin-stories",3673:"components-ui-icons-SignalStrength-SignalStrength-mdx",3679:"components-ui-icons-Rooms-Rooms-stories",3768:"components-sdk-MeetingControls-docs-VideoInputBackgroundBlurControl-mdx",3803:"components-ui-icons-Document-Document-stories",3879:"components-ui-icons-Like-Like-stories",3903:"providers-BackgroundBlurProvider-docs-BackgroundBlurProvider-mdx",3913:"components-ui-icons-Clear-Clear-mdx",3915:"components-ui-icons-Spinner-Spinner-stories",3984:"components-sdk-LocalVideo-LocalVideo-mdx",3993:"providers-LocalAudioOutputProvider-docs-useLocalAudioOutput-mdx",4073:"components-ui-icons-Caution-Caution-mdx",4097:"components-ui-icons-Cog-Cog-mdx",4111:"components-ui-icons-Caret-Caret-stories",4116:"components-ui-VideoGrid-VideoGrid-mdx",4233:"components-ui-icons-Record-Record-mdx",4243:"providers-AudioVideoProvider-docs-useAudioVideo-mdx",4250:"components-ui-NotificationGroup-NotificationGroup-stories",4285:"components-ui-icons-Play-Play-stories",4315:"providers-LocalAudioOutputProvider-docs-LocalAudioOutputProvider-mdx",4326:"components-ui-FormField-FormField-stories",4403:"components-ui-icons-Remove-Remove-mdx",4409:"components-ui-icons-Dialer-Dialer-mdx",4414:"components-ui-VideoTile-VideoTile-stories",4490:"components-sdk-RosterAttendee-RosterAttendee-mdx",4583:"components-ui-icons-All-All-stories",4593:"components-ui-icons-HandRaise-HandRaise-mdx",4616:"hooks-sdk-docs-useAttendeeAudioStatus-mdx",4634:"providers-DevicesProvider-docs-useAudioOutputs-mdx",4660:"components-ui-VideoTile-VideoTile-mdx",4665:"components-sdk-DeviceSelection-docs-CameraSelection-mdx",4736:"components-ui-Flex-docs-Flex-mdx",4763:"providers-LoggerProvider-docs-LoggerProvider-mdx",4809:"components-ui-icons-Arrow-Arrow-mdx",4835:"components-ui-icons-EmojiPicker-EmojiPicker-stories",4851:"components-ui-icons-Camera-Camera-stories",4862:"components-ui-Chat-ChatBubble-ChatBubbleContainer-mdx",4890:"components-ui-PopOver-PopOver-stories",4903:"components-ui-icons-ScreenShare-ScreenShare-stories",4944:"components-ui-ContentTile-ContentTile-mdx",4971:"components-sdk-DeviceSelection-docs-SpeakerSelection-mdx",5041:"components-ui-icons-CheckRound-CheckRound-stories",5069:"components-sdk-DeviceSelection-docs-MicSelection-mdx",5070:"components-ui-Navbar-Navbar-mdx",5080:"components-quickStarts-mdx",5142:"components-ui-Radio-Radio-stories",5243:"providers-BackgroundReplacementProvider-docs-useBackgroundReplacement-mdx",5305:"components-ui-icons-Spinner-Spinner-mdx",5316:"providers-MeetingProvider-docs-useMeetingManager-mdx",5339:"providers-UserActivityProvider-docs-UserActivityProvider-mdx",5340:"components-migrationToV3-mdx",5569:"providers-FeaturedVideoTileProvider-docs-FeaturedVideoTileProvider-mdx",5573:"components-ui-Chat-ChannelList-ChannelList-stories",5595:"components-ui-icons-Eye-Eye-stories",5619:"components-ui-icons-Pause-Pause-stories",5687:"components-ui-icons-Add-Add-stories",5775:"components-ui-icons-Chat-Chat-mdx",5867:"components-ui-icons-Dialer-Dialer-stories",5874:"components-ui-icons-Share-Share-mdx",5889:"components-ui-icons-Sound-Sound-mdx",5911:"providers-MeetingProvider-docs-MeetingManager-mdx",5936:"components-ui-WithTooltip-WithTooltip-mdx",5970:"components-ui-Button-Button-mdx",6013:"components-ui-icons-Like-Like-mdx",6046:"components-ui-RadioGroup-RadioGroup-mdx",6098:"components-ui-icons-Introduction-mdx",6131:"components-ui-icons-Sound-Sound-stories",6152:"providers-DevicesProvider-docs-AudioInputProvider-mdx",6221:"components-ui-icons-ConnectionProblem-ConnectionProblem-mdx",6234:"providers-RemoteVideoTileProvider-docs-useRemoteVideoTileState-mdx",6327:"components-ui-icons-ConnectionProblem-ConnectionProblem-stories",6329:"components-ui-icons-Microphone-Microphone-stories",6369:"components-ui-icons-Camera-Camera-mdx",6446:"providers-NotificationProvider-docs-useNotificationState-mdx",6481:"providers-DevicesProvider-docs-VideoInputProvider-mdx",6667:"components-ui-icons-Meeting-Meeting-stories",6677:"components-ui-icons-Caret-Caret-mdx",6729:"components-ui-icons-Eye-Eye-mdx",6759:"components-ui-icons-DeskPhone-DeskPhone-stories",6785:"components-ui-icons-Pause-Pause-mdx",6805:"hooks-sdk-docs-useActiveSpeakersState-mdx",6809:"components-ui-icons-Chat-Chat-stories",6868:"hooks-sdk-docs-useDeviceLabelTriggerStatus-mdx",6895:"providers-ContentShareProvider-docs-useContentShareControls-mdx",6936:"components-ui-ControlBar-ControlBar-stories",6964:"components-stylingGuide-mdx",6995:"components-ui-icons-HandRaise-HandRaise-stories",7009:"providers-RemoteVideoTileProvider-docs-RemoteVideoTileProvider-mdx",7100:"components-ui-Radio-Radio-mdx",7171:"components-ui-Chat-ChannelList-ChannelList-mdx",7195:"components-ui-icons-Search-Search-mdx",7231:"components-ui-icons-ZoomIn-ZoomIn-mdx",7243:"components-ui-icons-SignalStrength-SignalStrength-stories",7429:"components-ui-icons-Hamburger-Hamburger-mdx",7565:"components-ui-icons-ListHandRasie-ListHandRaise-mdx",7618:"providers-introduction-mdx",7707:"providers-LocalVideoProvider-docs-LocalVideoProvider-mdx",7778:"components-ui-Flex-docs-Flex-stories",7791:"components-ui-icons-LeaveMeeting-LeaveMeeting-mdx",7802:"components-ui-Notification-Notification-stories",7804:"components-ui-Chat-MessageAttachment-Attachment-mdx",7864:"components-ui-RadioGroup-RadioGroup-stories",7871:"components-ui-icons-Dislike-Dislike-stories",7877:"components-ui-icons-Information-Information-mdx",7939:"components-ui-icons-Feedback-Feedback-stories",7959:"components-ui-icons-Presenter-Presenter-stories",7963:"providers-VoiceFocusProvider-docs-VoiceFocusProvider-mdx",8004:"components-ui-Button-Button-stories",8037:"components-ui-icons-Dock-Dock-mdx",8039:"components-ui-icons-Clock-Clock-stories",8073:"components-ui-icons-Pin-Pin-mdx",8097:"components-ui-icons-EmojiPicker-EmojiPicker-mdx",8145:"providers-DevicesProvider-docs-AudioOutputProvider-mdx",8369:"components-sdk-MeetingControls-docs-AudioOutputControl-mdx",8413:"components-ui-icons-ScreenShare-ScreenShare-mdx",8438:"components-sdk-MeetingControls-docs-AudioInputControl-mdx",8483:"components-ui-icons-DropToAttach-DropToAttach-stories",8485:"components-ui-Chat-ChatBubble-EditableChatBubble-mdx",8497:"components-ui-icons-Dots-Dots-stories",8607:"components-ui-icons-Hamburger-Hamburger-stories",8654:"components-ui-Heading-Heading-stories",8692:"providers-DevicesProvider-docs-useVideoInputs-mdx",8737:"components-ui-icons-Feedback-Feedback-mdx",8776:"components-ui-Roster-Roster-mdx",8777:"components-ui-icons-Meeting-Meeting-mdx",8856:"components-ui-PopOver-PopOver-mdx",8907:"providers-MeetingEventProvider-docs-MeetingEventProvider-mdx",8914:"components-ui-ContentTile-ContentTile-stories",8982:"components-sdk-PreviewVideo-PreviewVideo-mdx",8985:"components-ui-icons-Document-Document-mdx",9019:"providers-ContentShareProvider-docs-ContentShareProvider-mdx",9087:"components-ui-icons-Dock-Dock-stories",9100:"providers-UserActivityProvider-docs-useUserActivityState-mdx",9177:"components-ui-icons-ZoomOut-ZoomOut-mdx",9179:"components-ui-Chat-InfiniteList-InfiniteList-stories",9231:"components-ui-Chat-ChatBubble-EditableChatBubble-stories",9279:"components-ui-icons-Information-Information-stories",9308:"hooks-sdk-docs-useToggleLocalMute-mdx",9357:"components-ui-icons-Presenter-Presenter-mdx",9382:"components-ui-Label-Label-stories",9396:"components-sdk-ContentShare-ContentShare-mdx",9412:"components-ui-Input-Input-mdx",9473:"components-ui-Chat-ChatBubble-ChatBubble-mdx",9553:"providers-DevicesProvider-docs-DevicesProvider-mdx",9601:"components-ui-icons-Laptop-Laptop-stories",9627:"components-ui-icons-Caution-Caution-stories",9668:"components-sdk-RemoteVideos-RemoteVideos-mdx",9729:"components-sdk-MeetingControls-docs-VideoInputControl-mdx",9754:"components-ui-Portal-Portal-mdx",9802:"components-ui-Select-Select-mdx",9851:"components-ui-icons-Clear-Clear-stories",9853:"components-ui-icons-Check-Check-mdx",9970:"hooks-sdk-docs-useAttendeeStatus-mdx"}[chunkId]||chunkId)+"."+{14:"6a041696",15:"86f3ef61",92:"61d6cb3f",106:"edcc7813",117:"7d804a55",191:"9d6779bf",221:"dce873c5",297:"802c380a",346:"f48c0e4e",380:"ef55b306",416:"3113d677",431:"43a7bcca",433:"8a8eb4ee",437:"02af33f3",455:"128ad71c",474:"912e0050",483:"5a1bbbae",486:"a335be2a",526:"1a308a96",782:"b0fba1aa",785:"d6c319da",857:"44a36664",911:"cdfbda23",935:"e2adf971",957:"78cc933e",1029:"60ca4688",1048:"7ee93b36",1055:"6ecd5519",1067:"1b853098",1074:"cd713cf5",1131:"b568d64e",1169:"e7588755",1208:"7c56c3ba",1285:"5c1c8371",1294:"65ba6165",1316:"62c8a140",1319:"94c09639",1332:"06cb418b",1384:"ef091dc1",1463:"3b42b392",1467:"fa39c7b4",1503:"999b5588",1560:"2427cafb",1594:"934cb765",1630:"cf152cfe",1633:"38a66ffd",1639:"ebdd1b17",1683:"30247078",1805:"31792b8b",1827:"69da5004",1866:"a2e6529f",1880:"acd36eab",1888:"8e1f34e8",1939:"ec162f54",1941:"5b2a1123",1942:"d88df541",2020:"d4abc84b",2037:"dd7de982",2097:"dd0b3181",2139:"cb64f0c4",2172:"1792cf56",2300:"461eff36",2303:"f9dba8b5",2305:"45b193f3",2310:"2a7a2a93",2367:"0c35d7ec",2411:"06fbf341",2434:"80af3122",2441:"0f65f853",2442:"ca7b9bd5",2445:"d47749da",2563:"e197cdf5",2569:"e5bc63dd",2598:"f32c754f",2643:"b4eeb23b",2695:"eae2690a",2698:"fcce7e42",2747:"6c611305",2793:"c9788cfa",2796:"7cf79c3a",2806:"6c2ef962",2836:"0646ef4e",2857:"4ca95d60",2911:"ecdc4711",2934:"8b79e1a7",2952:"6744a188",2963:"8161e85f",2991:"e19f3a49",3012:"1ceb8f1e",3020:"73113c70",3021:"bd24364b",3126:"7d01275f",3129:"ef1ff07d",3197:"af0e305c",3211:"c6e93576",3280:"d85a6cf6",3342:"b332034d",3349:"042567e6",3374:"4f68a121",3493:"cf9db2d3",3499:"3480b031",3529:"a435f69d",3559:"0c3b1fe9",3643:"8ec57f57",3659:"fe974316",3673:"172609fb",3679:"417754c9",3768:"2e950111",3803:"061f8cf2",3879:"600b77ab",3903:"ff6ed96c",3913:"d1452ed0",3915:"a6d72b1f",3984:"d0fa3d27",3993:"5255bffa",4073:"a9596559",4097:"f78575cc",4111:"3d1f7061",4116:"91436277",4233:"00b5b9c1",4243:"d4b18988",4250:"e90a0a95",4285:"60fd5538",4315:"ac22ab37",4326:"de3dcfe2",4403:"04ead484",4409:"e6218c24",4414:"ecd41ed3",4490:"9c93415b",4583:"db5176ca",4593:"de9485b1",4616:"310b5865",4634:"ca4e80e2",4660:"55645fc2",4665:"e244d37b",4722:"be9f4966",4736:"9906e5c4",4763:"891e8f55",4809:"7052a5f5",4835:"63431b11",4851:"c73ef88c",4862:"d5201e69",4890:"de86856c",4903:"551ad7e2",4944:"444d5b63",4971:"23112b31",5041:"5e05cbd6",5069:"fe4fcc8a",5070:"228b229e",5080:"e15f978e",5142:"a16fc974",5243:"088c7fa9",5304:"9c1b7750",5305:"3e4125f2",5316:"4647fc9d",5339:"b7fbd773",5340:"ad84391b",5569:"2329532a",5573:"bc637a74",5595:"045dbd53",5619:"fb276599",5687:"0bf03f60",5775:"db2bf81d",5867:"08ad116b",5874:"61d5bcb2",5889:"832e085e",5911:"7f56df87",5936:"fc3b36d7",5970:"7739f405",6013:"fe8e7011",6036:"8a06afea",6046:"85f8d6d8",6098:"26901865",6131:"0abd253e",6152:"447e939b",6221:"33b2aebc",6234:"511e5bbe",6289:"a7a96bc7",6327:"3dac801a",6329:"3289a215",6369:"f497bd1e",6406:"9214bd4a",6446:"e008a911",6460:"0de34548",6481:"6234f3f6",6667:"3cabffb5",6677:"f2c95b5d",6714:"3d1524ed",6729:"9e98c4a7",6759:"091de9e7",6785:"50f96e29",6805:"84b44f16",6809:"96181ed8",6868:"3fb9b793",6895:"8dcecba9",6936:"d9531e5e",6964:"3f446c7e",6995:"a2dbd6b3",7009:"293de789",7100:"9bc1f794",7171:"f87f33df",7195:"481886d8",7231:"c699c66d",7243:"89bdd6ec",7429:"4649c4b1",7565:"4a4d8c01",7618:"34ebf20b",7707:"140f75ef",7778:"504d5eac",7791:"c5cfd414",7802:"cabcfb7d",7804:"bc65ea95",7864:"b320f812",7871:"226190a7",7877:"c6945618",7939:"0e6c9d9a",7959:"2c918d42",7963:"32246fa9",8004:"0ff7c0e0",8037:"1f7a659f",8039:"10bed58d",8073:"817a4448",8097:"02c39e34",8142:"d01bd1a6",8145:"6c652b6c",8369:"200ae785",8413:"01ec89cf",8438:"2ca04bec",8483:"1226e20a",8485:"d01d1ab3",8497:"3f33d356",8607:"38bf9095",8609:"32300a5b",8654:"347a5179",8692:"be6d3fcd",8737:"a1428f06",8760:"a16b35b2",8776:"554ffd87",8777:"b4c491cb",8856:"deb1f7dd",8907:"c03cac6a",8914:"a79ade2e",8982:"1b0bb7da",8985:"3d8f726c",9019:"cc2a7854",9087:"b5b08f15",9100:"17f920e6",9106:"f7e4ba80",9177:"f23ad41b",9179:"61de5a04",9231:"cfbc6062",9279:"cddec154",9308:"c2c603c4",9357:"b95de46c",9382:"031f8b19",9396:"489a6863",9412:"30dc467e",9473:"eb1c6e49",9553:"1d83cfad",9601:"bc3bc72b",9627:"e0eee389",9668:"c55bd0f9",9729:"0f04c46f",9754:"74717a40",9802:"7e586f59",9851:"71769860",9853:"2f4003ac",9970:"e244cb13"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="amazon-chime-sdk-component-library-react:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","amazon-chime-sdk-component-library-react:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();