const PLATFORM_PARAM = 'vk_platform';
const MOBILE_WEB = 'mobile_web';

/**
 * @returns {array|false}
 */
const iOSVersion = () => {
  const match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
  let version = null;

  if (match !== undefined && match !== null) {
      version = [
          parseInt(match[1], 10),
          parseInt(match[2], 10),
          parseInt(match[3] || 0, 10)
      ];
      return version;
  }
  return false;
};

/**
 * @param {HTMLElement|null} appContainerNode
 */
const mvkScrollHelper = appContainerNode => {
  if (appContainerNode == null) {
    return;
  }

  const isMobileWeb = location.search.indexOf(`${PLATFORM_PARAM}=${MOBILE_WEB}`) > -1;
  const { userAgent } = navigator;
  const version = iOSVersion();

  if ((userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) && isMobileWeb && version && version[0] < 13) {
    appContainerNode.style.overflowY = 'scroll';
    appContainerNode.style.webkitOverflowScrolling = 'touch';

    document.documentElement.style.maxWidth = '100vw';
    document.body.style.maxWidth = '100vw';
    appContainerNode.style.maxWidth = '100vw';
  }
};

export default mvkScrollHelper;
