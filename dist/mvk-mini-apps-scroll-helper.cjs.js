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

  var searchParams = new URLSearchParams(location.search);
  var _navigator = navigator,
      userAgent = _navigator.userAgent;

  if ((userAgent.includes('iPhone') || userAgent.includes('iPad')) && searchParams.get(PLATFORM_PARAM) === MOBILE_WEB) {
    appContainerNode.style.overflowY = 'scroll';
    appContainerNode.style.webkitOverflowScrolling = 'touch';
  }
};

module.exports = mvkScrollHelper;
