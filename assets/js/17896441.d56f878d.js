"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[7918],{

/***/ 5903:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DocItem; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/PaginatorNavLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){var permalink=props.permalink,title=props.title,subLabel=props.subLabel;return/*#__PURE__*/react.createElement(Link/* default */.Z,{className:"pagination-nav__link",to:permalink},subLabel&&/*#__PURE__*/react.createElement("div",{className:"pagination-nav__sublabel"},subLabel),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__label"},title));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){var previous=props.previous,next=props.next;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.I)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages navigation',description:'The ARIA label for the docs pagination'})},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item"},previous&&/*#__PURE__*/react.createElement(PaginatorNavLink,(0,esm_extends/* default */.Z)({},previous,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},next&&/*#__PURE__*/react.createElement(PaginatorNavLink,(0,esm_extends/* default */.Z)({},next,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js
var client = __webpack_require__(5551);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 52 modules
var lib = __webpack_require__(3725);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel(_ref){var siteTitle=_ref.siteTitle,versionMetadata=_ref.versionMetadata;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is unreleased documentation for {siteTitle} {versionLabel} version.');}function UnmaintainedVersionLabel(_ref2){var siteTitle=_ref2.siteTitle,versionMetadata=_ref2.versionMetadata;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');}var BannerLabelComponents={unreleased:UnreleasedVersionLabel,unmaintained:UnmaintainedVersionLabel};function BannerLabel(props){var BannerLabelComponent=BannerLabelComponents[props.versionMetadata.banner];return/*#__PURE__*/react.createElement(BannerLabelComponent,props);}function LatestVersionSuggestionLabel(_ref3){var versionLabel=_ref3.versionLabel,to=_ref3.to,onClick=_ref3.onClick;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:versionLabel,latestVersionLink:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:to,onClick:onClick},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');}function DocVersionBannerEnabled(_ref4){var className=_ref4.className,versionMetadata=_ref4.versionMetadata;var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),siteTitle=_useDocusaurusContext.siteConfig.title;var _useActivePlugin=(0,client/* useActivePlugin */.gA)({failfast:true}),pluginId=_useActivePlugin.pluginId;var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};var _useDocsPreferredVers=(0,lib/* useDocsPreferredVersion */.J)(pluginId),savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;var _useDocVersionSuggest=(0,client/* useDocVersionSuggestions */.Jo)(pluginId),latestDocSuggestion=_useDocVersionSuggest.latestDocSuggestion,latestVersionSuggestion=_useDocVersionSuggest.latestVersionSuggestion;// try to link to same doc in latest version (not always possible)
// fallback to main doc of latest version
var latestVersionSuggestedDoc=latestDocSuggestion!=null?latestDocSuggestion:getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(className,lib/* ThemeClassNames.docs.docVersionBanner */.kM.docs.docVersionBanner,'alert alert--warning margin-bottom--md'),role:"alert"},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(BannerLabel,{siteTitle:siteTitle,versionMetadata:versionMetadata})),/*#__PURE__*/react.createElement("div",{className:"margin-top--md"},/*#__PURE__*/react.createElement(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:function onClick(){return savePreferredVersionName(latestVersionSuggestion.name);}})));}function DocVersionBanner(_ref5){var className=_ref5.className;var versionMetadata=(0,lib/* useDocsVersion */.E6)();if(versionMetadata.banner){return/*#__PURE__*/react.createElement(DocVersionBannerEnabled,{className:className,versionMetadata:versionMetadata});}return null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBadge/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocVersionBadge(_ref){var className=_ref.className;var versionMetadata=(0,lib/* useDocsVersion */.E6)();if(versionMetadata.badge){return/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.Z)(className,lib/* ThemeClassNames.docs.docVersionBadge */.kM.docs.docVersionBadge,'badge badge--secondary')},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:versionMetadata.label}},'Version: {versionLabel}'));}return null;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(1217);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate(_ref){var lastUpdatedAt=_ref.lastUpdatedAt,formattedLastUpdatedAt=_ref.formattedLastUpdatedAt;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString()},formattedLastUpdatedAt))}},' on {date}');}function LastUpdatedByUser(_ref2){var lastUpdatedBy=_ref2.lastUpdatedBy;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/react.createElement("b",null,lastUpdatedBy)}},' by {user}');}function LastUpdated(_ref3){var lastUpdatedAt=_ref3.lastUpdatedAt,formattedLastUpdatedAt=_ref3.formattedLastUpdatedAt,lastUpdatedBy=_ref3.lastUpdatedBy;return/*#__PURE__*/react.createElement("span",{className:lib/* ThemeClassNames.common.lastUpdated */.kM.common.lastUpdated},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt&&formattedLastUpdatedAt?/*#__PURE__*/react.createElement(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/react.createElement(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''}},'Last updated{atDate}{byUser}'), false&&/*#__PURE__*/0);}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"iconEdit":"iconEdit_dcUD"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconEdit(_ref){var className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.Z)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){var editUrl=_ref.editUrl;return/*#__PURE__*/react.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener",className:lib/* ThemeClassNames.common.editThisPage */.kM.common.editThisPage},/*#__PURE__*/react.createElement(IconEdit,null),/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Tag_styles_module = ({"tag":"tag_hD8n","tagRegular":"tagRegular_D6E_","tagWithCount":"tagWithCount_i0QQ"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(props){var _clsx;var permalink=props.permalink,name=props.name,count=props.count;return/*#__PURE__*/react.createElement(Link/* default */.Z,{href:permalink,className:(0,clsx_m/* default */.Z)(Tag_styles_module.tag,(_clsx={},_clsx[Tag_styles_module.tagRegular]=!count,_clsx[Tag_styles_module.tagWithCount]=count,_clsx))},name,count&&/*#__PURE__*/react.createElement("span",null,count));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TagsListInline_styles_module = ({"tags":"tags_XVD_","tag":"tag_JSN8"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){var tags=_ref.tags;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(TagsListInline_styles_module.tags,'padding--none','margin-left--sm')},tags.map(function(_ref2){var label=_ref2.label,tagPermalink=_ref2.permalink;return/*#__PURE__*/react.createElement("li",{key:tagPermalink,className:TagsListInline_styles_module.tag},/*#__PURE__*/react.createElement(Tag,{name:label,permalink:tagPermalink}));})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocItemFooter_styles_module = ({"lastUpdated":"lastUpdated_foO9"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsRow(props){return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooterTagsRow */.kM.docs.docFooterTagsRow,'row margin-bottom--sm')},/*#__PURE__*/react.createElement("div",{className:"col"},/*#__PURE__*/react.createElement(TagsListInline,props)));}function EditMetaRow(_ref){var editUrl=_ref.editUrl,lastUpdatedAt=_ref.lastUpdatedAt,lastUpdatedBy=_ref.lastUpdatedBy,formattedLastUpdatedAt=_ref.formattedLastUpdatedAt;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooterEditMetaRow */.kM.docs.docFooterEditMetaRow,'row')},/*#__PURE__*/react.createElement("div",{className:"col"},editUrl&&/*#__PURE__*/react.createElement(EditThisPage,{editUrl:editUrl})),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',DocItemFooter_styles_module.lastUpdated)},(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react.createElement(LastUpdated,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt,lastUpdatedBy:lastUpdatedBy})));}function DocItemFooter(props){var DocContent=props.content;var metadata=DocContent.metadata;var editUrl=metadata.editUrl,lastUpdatedAt=metadata.lastUpdatedAt,formattedLastUpdatedAt=metadata.formattedLastUpdatedAt,lastUpdatedBy=metadata.lastUpdatedBy,tags=metadata.tags;var canDisplayTagsRow=tags.length>0;var canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);var canDisplayFooter=canDisplayTagsRow||canDisplayEditMetaRow;if(!canDisplayFooter){return null;}return/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooter */.kM.docs.docFooter,'docusaurus-mt-lg')},canDisplayTagsRow&&/*#__PURE__*/react.createElement(TagsRow,{tags:tags}),canDisplayEditMetaRow&&/*#__PURE__*/react.createElement(EditMetaRow,{editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy,formattedLastUpdatedAt:formattedLastUpdatedAt}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js
var TOCItems_excluded=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
/* eslint-disable jsx-a11y/control-has-associated-label */function TOCItemList(_ref){var toc=_ref.toc,className=_ref.className,linkClassName=_ref.linkClassName,isChild=_ref.isChild;if(!toc.length){return null;}return/*#__PURE__*/react.createElement("ul",{className:isChild?undefined:className},toc.map(function(heading){return/*#__PURE__*/react.createElement("li",{key:heading.id},/*#__PURE__*/react.createElement("a",{href:"#"+heading.id,className:linkClassName!=null?linkClassName:undefined// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react.createElement(TOCItemList,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName}));}));}function TOCItems(_ref2){var toc=_ref2.toc,_ref2$className=_ref2.className,className=_ref2$className===void 0?'table-of-contents table-of-contents__left-border':_ref2$className,_ref2$linkClassName=_ref2.linkClassName,linkClassName=_ref2$linkClassName===void 0?'table-of-contents__link':_ref2$linkClassName,_ref2$linkActiveClass=_ref2.linkActiveClassName,linkActiveClassName=_ref2$linkActiveClass===void 0?undefined:_ref2$linkActiveClass,minHeadingLevelOption=_ref2.minHeadingLevel,maxHeadingLevelOption=_ref2.maxHeadingLevel,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,TOCItems_excluded);var themeConfig=(0,lib/* useThemeConfig */.LU)();var minHeadingLevel=minHeadingLevelOption!=null?minHeadingLevelOption:themeConfig.tableOfContents.minHeadingLevel;var maxHeadingLevel=maxHeadingLevelOption!=null?maxHeadingLevelOption:themeConfig.tableOfContents.maxHeadingLevel;var tocTree=(0,lib/* useFilteredAndTreeifiedTOC */.b9)({toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});var tocHighlightConfig=(0,react.useMemo)(function(){if(linkClassName&&linkActiveClassName){return{linkClassName:linkClassName,linkActiveClassName:linkActiveClassName,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);(0,lib/* useTOCHighlight */.Si)(tocHighlightConfig);return/*#__PURE__*/react.createElement(TOCItemList,(0,esm_extends/* default */.Z)({toc:tocTree,className:className,linkClassName:linkClassName},props));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TOC_styles_module = ({"tableOfContents":"tableOfContents_cNA8","docItemContainer":"docItemContainer_WX_Y"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
var TOC_excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
var LINK_CLASS_NAME='table-of-contents__link toc-highlight';var LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){var className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,TOC_excluded);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(TOC_styles_module.tableOfContents,'thin-scrollbar',className)},/*#__PURE__*/react.createElement(TOCItems,(0,esm_extends/* default */.Z)({},props,{linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_jdIR","tocCollapsibleButton":"tocCollapsibleButton_Fzxq","tocCollapsibleContent":"tocCollapsibleContent_MpvI","tocCollapsibleExpanded":"tocCollapsibleExpanded_laf4"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsible(_ref){var _clsx;var toc=_ref.toc,className=_ref.className,minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;var _useCollapsible=(0,lib/* useCollapsible */.uR)({initialState:true}),collapsed=_useCollapsible.collapsed,toggleCollapsed=_useCollapsible.toggleCollapsed;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(TOCCollapsible_styles_module.tocCollapsible,(_clsx={},_clsx[TOCCollapsible_styles_module.tocCollapsibleExpanded]=!collapsed,_clsx),className)},/*#__PURE__*/react.createElement("button",{type:"button",className:(0,clsx_m/* default */.Z)('clean-btn',TOCCollapsible_styles_module.tocCollapsibleButton),onClick:toggleCollapsed},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),/*#__PURE__*/react.createElement(lib/* Collapsible */.zF,{lazy:true,className:TOCCollapsible_styles_module.tocCollapsibleContent,collapsed:collapsed},/*#__PURE__*/react.createElement(TOCItems,{toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(9649);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocItem_styles_module = ({"docItemContainer":"docItemContainer_vinB","docItemCol":"docItemCol_DM6M","tocMobile":"tocMobile_TmEX"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocBreadcrumbs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Xlws","breadcrumbsItemLink":"breadcrumbsItemLink_e5ie"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocBreadcrumbs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to design system folder
function BreadcrumbsItemLink(_ref){var children=_ref.children,href=_ref.href;var className=(0,clsx_m/* default */.Z)('breadcrumbs__link',DocBreadcrumbs_styles_module.breadcrumbsItemLink);return href?/*#__PURE__*/react.createElement(Link/* default */.Z,{className:className,href:href},children):/*#__PURE__*/react.createElement("span",{className:className},children);}// TODO move to design system folder
function BreadcrumbsItem(_ref2){var children=_ref2.children,active=_ref2.active;return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)('breadcrumbs__item',{'breadcrumbs__item--active':active})},children);}function HomeBreadcrumbItem(){var homeHref=(0,useBaseUrl/* default */.Z)('/');return/*#__PURE__*/react.createElement(BreadcrumbsItem,null,/*#__PURE__*/react.createElement(BreadcrumbsItemLink,{href:homeHref},"\uD83C\uDFE0"));}function DocBreadcrumbs(){var breadcrumbs=(0,lib/* useSidebarBreadcrumbs */.s1)();var homePageRoute=(0,lib/* useHomePageRoute */.Ns)();if(!breadcrumbs){return null;}return/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docBreadcrumbs */.kM.docs.docBreadcrumbs,DocBreadcrumbs_styles_module.breadcrumbsContainer),"aria-label":"breadcrumbs"},/*#__PURE__*/react.createElement("ul",{className:"breadcrumbs"},homePageRoute&&/*#__PURE__*/react.createElement(HomeBreadcrumbItem,null),breadcrumbs.map(function(item,idx){return/*#__PURE__*/react.createElement(BreadcrumbsItem,{key:idx,active:idx===breadcrumbs.length-1},/*#__PURE__*/react.createElement(BreadcrumbsItemLink,{href:item.href},item.label));})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItem(props){var _assets$image,_clsx;var DocContent=props.content;var metadata=DocContent.metadata,frontMatter=DocContent.frontMatter,assets=DocContent.assets;var keywords=frontMatter.keywords,hideTitle=frontMatter.hide_title,hideTableOfContents=frontMatter.hide_table_of_contents,tocMinHeadingLevel=frontMatter.toc_min_heading_level,tocMaxHeadingLevel=frontMatter.toc_max_heading_level;var description=metadata.description,title=metadata.title;var image=(_assets$image=assets.image)!=null?_assets$image:frontMatter.image;// We only add a title if:
// - user asks to hide it with front matter
// - the markdown content does not already contain a top-level h1 heading
var shouldAddTitle=!hideTitle&&typeof DocContent.contentTitle==='undefined';var windowSize=(0,lib/* useWindowSize */.iP)();var canRenderTOC=!hideTableOfContents&&DocContent.toc&&DocContent.toc.length>0;var renderTocDesktop=canRenderTOC&&(windowSize==='desktop'||windowSize==='ssr');return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Seo/* default */.Z,{title:title,description:description,keywords:keywords,image:image}),/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',(_clsx={},_clsx[DocItem_styles_module.docItemCol]=!hideTableOfContents,_clsx))},/*#__PURE__*/react.createElement(DocVersionBanner,null),/*#__PURE__*/react.createElement("div",{className:DocItem_styles_module.docItemContainer},/*#__PURE__*/react.createElement("article",null,/*#__PURE__*/react.createElement(DocBreadcrumbs,null),/*#__PURE__*/react.createElement(DocVersionBadge,null),canRenderTOC&&/*#__PURE__*/react.createElement(TOCCollapsible,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docTocMobile */.kM.docs.docTocMobile,DocItem_styles_module.tocMobile)}),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docMarkdown */.kM.docs.docMarkdown,'markdown')},shouldAddTitle&&/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement(Heading/* default */.Z,{as:"h1"},title)),/*#__PURE__*/react.createElement(DocContent,null)),/*#__PURE__*/react.createElement(DocItemFooter,props)),/*#__PURE__*/react.createElement(DocPaginator,{previous:metadata.previous,next:metadata.next}))),renderTocDesktop&&/*#__PURE__*/react.createElement("div",{className:"col col--3"},/*#__PURE__*/react.createElement(TOC,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:lib/* ThemeClassNames.docs.docTocDesktop */.kM.docs.docTocDesktop}))));}

/***/ }),

/***/ 9649:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Heading; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 52 modules
var lib = __webpack_require__(3725);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_mojV","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_R0VQ"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
var _excluded=["as","id"],_excluded2=["as"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnchorHeading(_ref){var _clsx;var As=_ref.as,id=_ref.id,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;if(!id){return/*#__PURE__*/react.createElement(As,props);}return/*#__PURE__*/react.createElement(As,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)('anchor',(_clsx={},_clsx[styles_module.anchorWithHideOnScrollNavbar]=hideOnScroll,_clsx[styles_module.anchorWithStickyNavbar]=!hideOnScroll,_clsx)),id:id}),props.children,/*#__PURE__*/react.createElement("a",{className:"hash-link",href:"#"+id,title:(0,Translate/* translate */.I)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"\u200B"));}function Heading(_ref2){var as=_ref2.as,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded2);if(as==='h1'){return/*#__PURE__*/react.createElement("h1",(0,esm_extends/* default */.Z)({},props,{id:undefined// h1 headings do not need an id because they don't appear in the TOC
}),props.children);}return/*#__PURE__*/react.createElement(AnchorHeading,(0,esm_extends/* default */.Z)({as:as},props));}

/***/ })

}]);