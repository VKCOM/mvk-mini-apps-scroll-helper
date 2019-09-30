'use strict';

var PLATFORM_PARAM = 'vk_platform';
var MOBILE_WEB = 'mobile_web';
/**
 * @param {HTMLElement|null} appContainerNode
 */

var mvkScrollHelper = function mvkScrollHelper(appContainerNode) {
  if (appContainerNode == null) {
    return;
  }

  var isMobileWeb = location.search.indexOf("".concat(PLATFORM_PARAM, "=").concat(MOBILE_WEB)) > -1;
  var _navigator = navigator,
      userAgent = _navigator.userAgent;

  if ((userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) && isMobileWeb) {
    appContainerNode.style.overflowY = 'scroll';
    appContainerNode.style.webkitOverflowScrolling = 'touch';
    document.documentElement.style.maxWidth = '100vw';
    document.body.style.maxWidth = '100vw';
    appContainerNode.style.maxWidth = '100vw';
  }
};

module.exports = mvkScrollHelper;
