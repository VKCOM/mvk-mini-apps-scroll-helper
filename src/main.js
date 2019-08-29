const PLATFORM_PARAM = 'vk_platform';
const MOBILE_WEB = 'mobile_web';

/**
 * @param {HTMLElement|null} appContainerNode
 */
const mvkScrollHelper = appContainerNode => {
  if (appContainerNode == null) {
    return;
  }

  const isMobileWeb = new RegExp(`[?&]${PLATFORM_PARAM}=${MOBILE_WEB}(&|$)`).test(location.search);
  const { userAgent } = navigator;

  if ((userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) && isMobileWeb) {
    appContainerNode.style.overflowY = 'scroll';
    appContainerNode.style.webkitOverflowScrolling = 'touch';
  }
};

export default mvkScrollHelper;
