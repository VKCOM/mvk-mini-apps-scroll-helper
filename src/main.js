const mvkScrollHelper = (appContainerId) => {
	const PLATFORM_PARAM = 'vk_platform';
	const MOBILE_WEB = 'mobile_web';
	if (appContainerId && typeof appContainerId === 'string') {
		const searchParams = new URLSearchParams(window.location.search);
		if (searchParams.has(PLATFORM_PARAM) && searchParams.get(PLATFORM_PARAM) === MOBILE_WEB) {
			const container = document.getElementById(appContainerId);
			if (container) {
				container.style.overflowY = 'scroll';
				container.style.webkitOverflowScrolling = 'touch';
			}
		}
	}
}

export default mvkScrollHelper;
