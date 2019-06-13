function isInApp() {
    return /auto_android|auto_iphone/.test(navigator.userAgent);
}

export default {
	isInApp
};