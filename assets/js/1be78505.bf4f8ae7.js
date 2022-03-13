"use strict";
(self["webpackChunkchromaticity_color_utilities_documentation"] = self["webpackChunkchromaticity_color_utilities_documentation"] || []).push([[9514,4608],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 8511:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DocPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(8790);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 18 modules
var Layout = __webpack_require__(2773);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 52 modules
var lib = __webpack_require__(3725);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconArrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconArrow(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({width:"20",height:"20","aria-hidden":"true"},props),/*#__PURE__*/react.createElement("g",{fill:"#7a7a7a"},/*#__PURE__*/react.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/react.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(3919);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js + 1 modules
var IconExternalLink = __webpack_require__(541);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"menuHtmlItem":"menuHtmlItem_fVIQ"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2389);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/index.js
var _excluded=["item"],_excluded2=["item","onItemClick","activePath","level","index"],_excluded3=["item","onItemClick","activePath","level","index"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItem(_ref){var item=_ref.item,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);switch(item.type){case'category':return/*#__PURE__*/react.createElement(DocSidebarItemCategory,(0,esm_extends/* default */.Z)({item:item},props));case'html':return/*#__PURE__*/react.createElement(DocSidebarItemHtml,(0,esm_extends/* default */.Z)({item:item},props));case'link':default:return/*#__PURE__*/react.createElement(DocSidebarItemLink,(0,esm_extends/* default */.Z)({item:item},props));}}// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(_ref2){var isActive=_ref2.isActive,collapsed=_ref2.collapsed,setCollapsed=_ref2.setCollapsed;var wasActive=(0,lib/* usePrevious */.D9)(isActive);(0,react.useEffect)(function(){var justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){setCollapsed(false);}},[isActive,wasActive,collapsed,setCollapsed]);}/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */function useCategoryHrefWithSSRFallback(item){var isBrowser=(0,useIsBrowser/* default */.Z)();return (0,react.useMemo)(function(){if(item.href){return item.href;}// In these cases, it's not necessary to render a fallback
// We skip the "findFirstCategoryLink" computation
if(isBrowser||!item.collapsible){return undefined;}return (0,lib/* findFirstCategoryLink */.Wl)(item);},[item,isBrowser]);}function DocSidebarItemCategory(_ref3){var item=_ref3.item,onItemClick=_ref3.onItemClick,activePath=_ref3.activePath,level=_ref3.level,index=_ref3.index,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref3,_excluded2);var items=item.items,label=item.label,collapsible=item.collapsible,className=item.className,href=item.href;var hrefWithSSRFallback=useCategoryHrefWithSSRFallback(item);var isActive=(0,lib/* isActiveSidebarItem */._F)(item,activePath);var isCurrentPage=(0,lib/* isSamePath */.Mg)(href,activePath);var _useCollapsible=(0,lib/* useCollapsible */.uR)({// active categories are always initialized as expanded
// the default (item.collapsed) is only used for non-active categories
initialState:function initialState(){if(!collapsible){return false;}return isActive?false:item.collapsed;}}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;useAutoExpandActiveCategory({isActive:isActive,collapsed:collapsed,setCollapsed:setCollapsed});var _useDocSidebarItemsEx=(0,lib/* useDocSidebarItemsExpandedState */.fP)(),expandedItem=_useDocSidebarItemsEx.expandedItem,setExpandedItem=_useDocSidebarItemsEx.setExpandedItem;function updateCollapsed(toCollapsed){if(toCollapsed===void 0){toCollapsed=!collapsed;}setExpandedItem(toCollapsed?null:index);setCollapsed(toCollapsed);}var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),autoCollapseSidebarCategories=_useThemeConfig.autoCollapseSidebarCategories;(0,react.useEffect)(function(){if(collapsible&&expandedItem&&expandedItem!==index&&autoCollapseSidebarCategories){setCollapsed(true);}},[collapsible,expandedItem,index,setCollapsed,autoCollapseSidebarCategories]);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemCategory */.kM.docs.docSidebarItemCategory,lib/* ThemeClassNames.docs.docSidebarItemCategoryLevel */.kM.docs.docSidebarItemCategoryLevel(level),'menu__list-item',{'menu__list-item--collapsed':collapsed},className)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('menu__list-item-collapsible',{'menu__list-item-collapsible--active':isCurrentPage})},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',{'menu__link--sublist':collapsible&&!href,'menu__link--active':isActive}),onClick:collapsible?function(e){onItemClick==null?void 0:onItemClick(item);if(href){updateCollapsed(false);}else{e.preventDefault();updateCollapsed();}}:function(){onItemClick==null?void 0:onItemClick(item);},"aria-current":isCurrentPage?'page':undefined,href:collapsible?hrefWithSSRFallback!=null?hrefWithSSRFallback:'#':hrefWithSSRFallback},props),label),href&&collapsible&&/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.I)({id:'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',message:"Toggle the collapsible sidebar category '{label}'",description:'The ARIA label to toggle the collapsible sidebar category'},{label:label}),type:"button",className:"clean-btn menu__caret",onClick:function onClick(e){e.preventDefault();updateCollapsed();}})),/*#__PURE__*/react.createElement(lib/* Collapsible */.zF,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:items,tabIndex:collapsed?-1:0,onItemClick:onItemClick,activePath:activePath,level:level+1})));}function DocSidebarItemHtml(_ref4){var item=_ref4.item,level=_ref4.level,index=_ref4.index;var value=item.value,defaultStyle=item.defaultStyle,className=item.className;return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemLink */.kM.docs.docSidebarItemLink,lib/* ThemeClassNames.docs.docSidebarItemLinkLevel */.kM.docs.docSidebarItemLinkLevel(level),defaultStyle&&styles_module.menuHtmlItem+" menu__list-item",className),key:index// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:value}});}function DocSidebarItemLink(_ref5){var item=_ref5.item,onItemClick=_ref5.onItemClick,activePath=_ref5.activePath,level=_ref5.level,index=_ref5.index,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref5,_excluded3);var href=item.href,label=item.label,className=item.className;var isActive=(0,lib/* isActiveSidebarItem */._F)(item,activePath);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemLink */.kM.docs.docSidebarItemLink,lib/* ThemeClassNames.docs.docSidebarItemLinkLevel */.kM.docs.docSidebarItemLinkLevel(level),'menu__list-item',className),key:label},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',{'menu__link--active':isActive}),"aria-current":isActive?'page':undefined,to:href},(0,isInternalUrl/* default */.Z)(href)&&{onClick:onItemClick?function(){return onItemClick(item);}:undefined},props),(0,isInternalUrl/* default */.Z)(href)?label:/*#__PURE__*/react.createElement("span",null,label,/*#__PURE__*/react.createElement(IconExternalLink/* default */.Z,null))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItems/index.js
var DocSidebarItems_excluded=["items"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems(_ref){var items=_ref.items,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DocSidebarItems_excluded);return/*#__PURE__*/react.createElement(lib/* DocSidebarItemsExpandedStateProvider */.D_,null,items.map(function(item,index){return/*#__PURE__*/react.createElement(DocSidebarItem,(0,esm_extends/* default */.Z)({key:index// sidebar is static, the index does not change
,item:item,index:index},props));}));}// Optimize sidebar at each "level"
/* harmony default export */ var theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocSidebar_styles_module = ({"sidebar":"sidebar_CW9Y","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_FoYL","sidebarHidden":"sidebarHidden_D64r","sidebarLogo":"sidebarLogo_FJUI","menu":"menu_SkdO","menuWithAnnouncementBar":"menuWithAnnouncementBar_x19h","collapseSidebarButton":"collapseSidebarButton_cwdi","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_xORG","sidebarMenuIcon":"sidebarMenuIcon_LfgG","sidebarMenuCloseIcon":"sidebarMenuCloseIcon_uo5v"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useShowAnnouncementBar(){var _useAnnouncementBar=(0,lib/* useAnnouncementBar */.nT)(),isActive=_useAnnouncementBar.isActive;var _useState=(0,react.useState)(isActive),showAnnouncementBar=_useState[0],setShowAnnouncementBar=_useState[1];(0,lib/* useScrollPosition */.RF)(function(_ref){var scrollY=_ref.scrollY;if(isActive){setShowAnnouncementBar(scrollY===0);}},[isActive]);return isActive&&showAnnouncementBar;}function HideableSidebarButton(_ref2){var onClick=_ref2.onClick;return/*#__PURE__*/react.createElement("button",{type:"button",title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:(0,clsx_m/* default */.Z)('button button--secondary button--outline',DocSidebar_styles_module.collapseSidebarButton),onClick:onClick},/*#__PURE__*/react.createElement(IconArrow,{className:DocSidebar_styles_module.collapseSidebarButtonIcon}));}function DocSidebarDesktop(_ref3){var _clsx,_clsx2;var path=_ref3.path,sidebar=_ref3.sidebar,onCollapse=_ref3.onCollapse,isHidden=_ref3.isHidden;var showAnnouncementBar=useShowAnnouncementBar();var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll,hideableSidebar=_useThemeConfig.hideableSidebar;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(DocSidebar_styles_module.sidebar,(_clsx={},_clsx[DocSidebar_styles_module.sidebarWithHideableNavbar]=hideOnScroll,_clsx[DocSidebar_styles_module.sidebarHidden]=isHidden,_clsx))},hideOnScroll&&/*#__PURE__*/react.createElement(Logo/* default */.Z,{tabIndex:-1,className:DocSidebar_styles_module.sidebarLogo}),/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.Z)('menu thin-scrollbar',DocSidebar_styles_module.menu,(_clsx2={},_clsx2[DocSidebar_styles_module.menuWithAnnouncementBar]=showAnnouncementBar,_clsx2))},/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarMenu */.kM.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:sidebar,activePath:path,level:1}))),hideableSidebar&&/*#__PURE__*/react.createElement(HideableSidebarButton,{onClick:onCollapse}));}// eslint-disable-next-line react/function-component-definition
var DocSidebarMobileSecondaryMenu=function DocSidebarMobileSecondaryMenu(_ref4){var toggleSidebar=_ref4.toggleSidebar,sidebar=_ref4.sidebar,path=_ref4.path;return/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarMenu */.kM.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:sidebar,activePath:path,onItemClick:function onItemClick(item){// Mobile sidebar should only be closed if the category has a link
if(item.type==='category'&&item.href){toggleSidebar();}if(item.type==='link'){toggleSidebar();}},level:1}));};function DocSidebarMobile(props){return/*#__PURE__*/react.createElement(lib/* MobileSecondaryMenuFiller */.Cv,{component:DocSidebarMobileSecondaryMenu,props:props});}var DocSidebarDesktopMemo=/*#__PURE__*/react.memo(DocSidebarDesktop);var DocSidebarMobileMemo=/*#__PURE__*/react.memo(DocSidebarMobile);function DocSidebar(props){var windowSize=(0,lib/* useWindowSize */.iP)();// Desktop sidebar visible on hydration: need SSR rendering
var shouldRenderSidebarDesktop=windowSize==='desktop'||windowSize==='ssr';// Mobile sidebar not visible on hydration: can avoid SSR rendering
var shouldRenderSidebarMobile=windowSize==='mobile';return/*#__PURE__*/react.createElement(react.Fragment,null,shouldRenderSidebarDesktop&&/*#__PURE__*/react.createElement(DocSidebarDesktopMemo,props),shouldRenderSidebarMobile&&/*#__PURE__*/react.createElement(DocSidebarMobileMemo,props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5742);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(7410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism["default"],
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ var dist = (Highlight);


;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input, {target = document.body} = {}) {
	const element = document.createElement('textarea');
	const previouslyFocusedElement = document.activeElement;

	element.value = input;

	// Prevent keyboard from showing on mobile
	element.setAttribute('readonly', '');

	element.style.contain = 'strict';
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	element.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = document.getSelection();
	let originalRange = false;
	if (selection.rangeCount > 0) {
		originalRange = selection.getRangeAt(0);
	}

	target.append(element);
	element.select();

	// Explicit selection workaround for iOS
	element.selectionStart = 0;
	element.selectionEnd = input.length;

	let isSuccess = false;
	try {
		isSuccess = document.execCommand('copy');
	} catch {}

	element.remove();

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}

	// Get the focus back on the previously focused element, if any
	if (previouslyFocusedElement) {
		previouslyFocusedElement.focus();
	}

	return isSuccess;
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CodeBlock_styles_module = ({"codeBlockContainer":"codeBlockContainer_I0IT","codeBlockContent":"codeBlockContent_wNvx","codeBlockTitle":"codeBlockTitle_BvAR","codeBlock":"codeBlock_jd64","codeBlockStandalone":"codeBlockStandalone_csWH","copyButton":"copyButton_wuS7","codeBlockLines":"codeBlockLines_mRuA"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlock(_ref){var _ref3;var children=_ref.children,_ref$className=_ref.className,blockClassName=_ref$className===void 0?'':_ref$className,metastring=_ref.metastring,title=_ref.title,languageProp=_ref.language;var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),prism=_useThemeConfig.prism;var _useState=(0,react.useState)(false),showCopied=_useState[0],setShowCopied=_useState[1];var _useState2=(0,react.useState)(false),mounted=_useState2[0],setMounted=_useState2[1];// The Prism theme on SSR is always the default theme but the site theme
// can be in a different mode. React hydration doesn't update DOM styles
// that come from SSR. Hence force a re-render after mounting to apply the
// current relevant styles. There will be a flash seen of the original
// styles seen using this current approach but that's probably ok. Fixing
// the flash will require changing the theming approach and is not worth it
// at this point.
(0,react.useEffect)(function(){setMounted(true);},[]);// We still parse the metastring in case we want to support more syntax in the
// future. Note that MDX doesn't strip quotes when parsing metastring:
// "title=\"xyz\"" => title: "\"xyz\""
var codeBlockTitle=(0,lib/* parseCodeBlockTitle */.bc)(metastring)||title;var prismTheme=(0,lib/* usePrismTheme */.pJ)();// <pre> tags in markdown map to CodeBlocks and they may contain JSX children.
// When the children is not a simple string, we just return a styled block
// without actually highlighting.
if(react.Children.toArray(children).some(function(el){return/*#__PURE__*/(0,react.isValidElement)(el);})){return/*#__PURE__*/react.createElement(dist,(0,esm_extends/* default */.Z)({},defaultProps,{key:String(mounted),theme:prismTheme,code:"",language:'text'}),function(_ref2){var className=_ref2.className,style=_ref2.style;return/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:(0,clsx_m/* default */.Z)(className,CodeBlock_styles_module.codeBlockStandalone,'thin-scrollbar',CodeBlock_styles_module.codeBlockContainer,blockClassName,lib/* ThemeClassNames.common.codeBlock */.kM.common.codeBlock),style:style},/*#__PURE__*/react.createElement("code",{className:CodeBlock_styles_module.codeBlockLines},children));});}// The children is now guaranteed to be one/more plain strings
var content=Array.isArray(children)?children.join(''):children;var language=(_ref3=languageProp!=null?languageProp:(0,lib/* parseLanguage */.Vo)(blockClassName))!=null?_ref3:prism.defaultLanguage;var _parseLines=(0,lib/* parseLines */.nZ)(content,metastring,language),highlightLines=_parseLines.highlightLines,code=_parseLines.code;var handleCopyCode=function handleCopyCode(){copyTextToClipboard(code);setShowCopied(true);setTimeout(function(){return setShowCopied(false);},2000);};return/*#__PURE__*/react.createElement(dist,(0,esm_extends/* default */.Z)({},defaultProps,{key:String(mounted),theme:prismTheme,code:code,language:language!=null?language:'text'}),function(_ref4){var _clsx;var className=_ref4.className,style=_ref4.style,tokens=_ref4.tokens,getLineProps=_ref4.getLineProps,getTokenProps=_ref4.getTokenProps;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(CodeBlock_styles_module.codeBlockContainer,blockClassName,(_clsx={},_clsx["language-"+language]=language&&!blockClassName.includes("language-"+language),_clsx),lib/* ThemeClassNames.common.codeBlock */.kM.common.codeBlock)},codeBlockTitle&&/*#__PURE__*/react.createElement("div",{style:style,className:CodeBlock_styles_module.codeBlockTitle},codeBlockTitle),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(CodeBlock_styles_module.codeBlockContent,language)},/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:(0,clsx_m/* default */.Z)(className,CodeBlock_styles_module.codeBlock,'thin-scrollbar'),style:style},/*#__PURE__*/react.createElement("code",{className:CodeBlock_styles_module.codeBlockLines},tokens.map(function(line,i){if(line.length===1&&line[0].content==='\n'){line[0].content='';}var lineProps=getLineProps({line:line,key:i});if(highlightLines.includes(i)){lineProps.className+=' docusaurus-highlight-code-line';}return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:i},lineProps),line.map(function(token,key){return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:key},getTokenProps({token:token,key:key})));}),/*#__PURE__*/react.createElement("br",null));}))),/*#__PURE__*/react.createElement("button",{type:"button","aria-label":(0,Translate/* translate */.I)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),className:(0,clsx_m/* default */.Z)(CodeBlock_styles_module.copyButton,'clean-btn'),onClick:handleCopyCode},showCopied?/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))));});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(9649);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Details_styles_module = ({"details":"details_BAp3"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
var InfimaClasses='alert alert--info';function Details(_ref){var props=Object.assign({},_ref);return/*#__PURE__*/react.createElement(lib/* Details */.PO,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)(InfimaClasses,Details_styles_module.details,props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js
var MDXComponents_excluded=["mdxType","originalType"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// MDX elements are wrapped through the MDX pragma. In some cases (notably usage
// with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element){var _element$props,_element$props2;if(element!=null&&(_element$props=element.props)!=null&&_element$props.mdxType&&element!=null&&(_element$props2=element.props)!=null&&_element$props2.originalType){var _element$props3=element.props,mdxType=_element$props3.mdxType,originalType=_element$props3.originalType,newProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_element$props3,MDXComponents_excluded);return/*#__PURE__*/react.createElement(element.props.originalType,newProps);}return element;}var MDXComponents={head:function head(props){var unwrappedChildren=react.Children.map(props.children,function(child){return unwrapMDXElement(child);});return/*#__PURE__*/react.createElement(Head/* default */.Z,props,unwrappedChildren);},code:function code(props){var inlineElements=['a','b','big','i','span','em','strong','sup','sub','small'];var shouldBeInline=react.Children.toArray(props.children).every(function(el){return typeof el==='string'&&!el.includes('\n')||/*#__PURE__*/react.isValidElement(el)&&inlineElements.includes(el.props.mdxType);});return shouldBeInline?/*#__PURE__*/react.createElement("code",props):/*#__PURE__*/react.createElement(CodeBlock,props);},a:function a(props){return/*#__PURE__*/react.createElement(Link/* default */.Z,props);},pre:function pre(props){var _props$children;return/*#__PURE__*/react.createElement(CodeBlock// If this pre is created by a ``` fenced codeblock, unwrap the children
,/*#__PURE__*/(0,react.isValidElement)(props.children)&&props.children.props.originalType==='code'?(_props$children=props.children)==null?void 0:_props$children.props:Object.assign({},props));},details:function details(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
var summary=items.find(function(item){var _item$props;return(item==null?void 0:(_item$props=item.props)==null?void 0:_item$props.mdxType)==='summary';});var children=/*#__PURE__*/react.createElement(react.Fragment,null,items.filter(function(item){return item!==summary;}));return/*#__PURE__*/react.createElement(Details,(0,esm_extends/* default */.Z)({},props,{summary:summary}),children);},h1:function h1(props){return/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h1"},props));},h2:function h2(props){return/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h2"},props));},h3:function h3(props){return/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h3"},props));},h4:function h4(props){return/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h4"},props));},h5:function h5(props){return/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h5"},props));},h6:function h6(props){return/*#__PURE__*/react.createElement(Heading/* default */.Z,(0,esm_extends/* default */.Z)({as:"h6"},props));}};/* harmony default export */ var theme_MDXComponents = (MDXComponents);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NotFound.js
var NotFound = __webpack_require__(4608);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var BackToTopButton_styles_module = ({"backToTopButton":"backToTopButton_RiI4","backToTopButtonShow":"backToTopButtonShow_ssHd"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var threshold=300;// Not all have support for smooth scrolling (particularly Safari mobile iOS)
// TODO proper detection is currently unreliable!
// see https://github.com/wessberg/scroll-behavior-polyfill/issues/16
var SupportsNativeSmoothScrolling=false;// const SupportsNativeSmoothScrolling =
//   ExecutionEnvironment.canUseDOM &&
//   'scrollBehavior' in document.documentElement.style;
function smoothScrollTopNative(){window.scrollTo({top:0,behavior:'smooth'});return function(){// Nothing to cancel, it's natively cancelled if user tries to scroll down
};}function smoothScrollTopPolyfill(){var raf=null;function rafRecursion(){var currentScroll=document.documentElement.scrollTop;if(currentScroll>0){raf=requestAnimationFrame(rafRecursion);window.scrollTo(0,Math.floor(currentScroll*0.85));}}rafRecursion();// Break the recursion. Prevents the user from "fighting" against that
// recursion producing a weird UX
return function(){return raf&&cancelAnimationFrame(raf);};}function useSmoothScrollToTop(){var lastCancelRef=(0,react.useRef)(null);function smoothScrollTop(){lastCancelRef.current=SupportsNativeSmoothScrolling?smoothScrollTopNative():smoothScrollTopPolyfill();}return{smoothScrollTop:smoothScrollTop,cancelScrollToTop:function cancelScrollToTop(){return lastCancelRef.current==null?void 0:lastCancelRef.current();}};}function BackToTopButton(){var _clsx;var _useState=(0,react.useState)(false),show=_useState[0],setShow=_useState[1];var isFocusedAnchor=(0,react.useRef)(false);var _useSmoothScrollToTop=useSmoothScrollToTop(),smoothScrollTop=_useSmoothScrollToTop.smoothScrollTop,cancelScrollToTop=_useSmoothScrollToTop.cancelScrollToTop;(0,lib/* useScrollPosition */.RF)(function(_ref,lastPosition){var scrollTop=_ref.scrollY;var lastScrollTop=lastPosition==null?void 0:lastPosition.scrollY;// No lastScrollTop means component is just being mounted.
// Not really a scroll event from the user, so we ignore it
if(!lastScrollTop){return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;return;}var isScrollingUp=scrollTop<lastScrollTop;if(!isScrollingUp){cancelScrollToTop();}if(scrollTop<threshold){setShow(false);return;}if(isScrollingUp){var documentHeight=document.documentElement.scrollHeight;var windowHeight=window.innerHeight;if(scrollTop+windowHeight<documentHeight){setShow(true);}}else{setShow(false);}});(0,lib/* useLocationChange */.SL)(function(locationChangeEvent){if(locationChangeEvent.location.hash){isFocusedAnchor.current=true;setShow(false);}});return/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.I)({id:'theme.BackToTopButton.buttonAriaLabel',message:'Scroll back to top',description:'The ARIA label for the back to top button'}),className:(0,clsx_m/* default */.Z)('clean-btn',lib/* ThemeClassNames.common.backToTopButton */.kM.common.backToTopButton,BackToTopButton_styles_module.backToTopButton,(_clsx={},_clsx[BackToTopButton_styles_module.backToTopButtonShow]=show,_clsx)),type:"button",onClick:function onClick(){return smoothScrollTop();}});}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(6775);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocPage_styles_module = ({"docPage":"docPage_P2Lg","docMainContainer":"docMainContainer_TCnq","docSidebarContainer":"docSidebarContainer_rKC_","docMainContainerEnhanced":"docMainContainerEnhanced_WDCb","docSidebarContainerHidden":"docSidebarContainerHidden_nvlY","collapsedDocSidebar":"collapsedDocSidebar_Xgr6","expandSidebarButtonIcon":"expandSidebarButtonIcon_AV8S","docItemWrapperEnhanced":"docItemWrapperEnhanced_r_WG"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageContent(_ref){var _clsx,_clsx2,_clsx3;var currentDocRoute=_ref.currentDocRoute,versionMetadata=_ref.versionMetadata,children=_ref.children,sidebarName=_ref.sidebarName;var sidebar=(0,lib/* useDocsSidebar */.Vq)();var pluginId=versionMetadata.pluginId,version=versionMetadata.version;var _useState=(0,react.useState)(false),hiddenSidebarContainer=_useState[0],setHiddenSidebarContainer=_useState[1];var _useState2=(0,react.useState)(false),hiddenSidebar=_useState2[0],setHiddenSidebar=_useState2[1];var toggleSidebar=(0,react.useCallback)(function(){if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(function(value){return!value;});},[hiddenSidebar]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{wrapperClassName:lib/* ThemeClassNames.wrapper.docsPages */.kM.wrapper.docsPages,pageClassName:lib/* ThemeClassNames.page.docsDocPage */.kM.page.docsDocPage,searchMetadata:{version:version,tag:(0,lib/* docVersionSearchTag */.os)(pluginId,version)}},/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.docPage},/*#__PURE__*/react.createElement(BackToTopButton,null),sidebar&&/*#__PURE__*/react.createElement("aside",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarContainer */.kM.docs.docSidebarContainer,DocPage_styles_module.docSidebarContainer,(_clsx={},_clsx[DocPage_styles_module.docSidebarContainerHidden]=hiddenSidebarContainer,_clsx)),onTransitionEnd:function onTransitionEnd(e){if(!e.currentTarget.classList.contains(DocPage_styles_module.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}}},/*#__PURE__*/react.createElement(DocSidebar,{key:// Reset sidebar state on sidebar changes
// See https://github.com/facebook/docusaurus/issues/3414
sidebarName,sidebar:sidebar,path:currentDocRoute.path,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.collapsedDocSidebar,title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react.createElement(IconArrow,{className:DocPage_styles_module.expandSidebarButtonIcon}))),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)(DocPage_styles_module.docMainContainer,(_clsx2={},_clsx2[DocPage_styles_module.docMainContainerEnhanced]=hiddenSidebarContainer||!sidebar,_clsx2))},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('container padding-top--md padding-bottom--lg',DocPage_styles_module.docItemWrapper,(_clsx3={},_clsx3[DocPage_styles_module.docItemWrapperEnhanced]=hiddenSidebarContainer,_clsx3))},/*#__PURE__*/react.createElement(esm/* MDXProvider */.Zo,{components:theme_MDXComponents},children)))));}function DocPage(props){var docRoutes=props.route.routes,versionMetadata=props.versionMetadata,location=props.location;var currentDocRoute=docRoutes.find(function(docRoute){return (0,react_router/* matchPath */.LX)(location.pathname,docRoute);});if(!currentDocRoute){return/*#__PURE__*/react.createElement(NotFound["default"],null);}// For now, the sidebarName is added as route config: not ideal!
var sidebarName=currentDocRoute.sidebar;var sidebar=sidebarName?versionMetadata.docsSidebars[sidebarName]:null;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("html",{className:versionMetadata.className})),/*#__PURE__*/react.createElement(lib/* DocsVersionProvider */.qu,{version:versionMetadata},/*#__PURE__*/react.createElement(lib/* DocsSidebarProvider */.bT,{sidebar:sidebar},/*#__PURE__*/react.createElement(DocPageContent,{currentDocRoute:currentDocRoute,versionMetadata:versionMetadata,sidebarName:sidebarName},(0,react_router_config/* renderRoutes */.H)(docRoutes,{versionMetadata:versionMetadata})))));}

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

/***/ }),

/***/ 4608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NotFound; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2773);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5999);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFound(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{title:(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .I)({id:'theme.NotFound.title',message:'Page Not Found'})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{className:"container margin-vert--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col col--6 col--offset-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"hero__title"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))));}

/***/ })

}]);