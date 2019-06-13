function isShowHeader() {
    if (Util.isInApp()) {
        document.getElementById('landing-header').style.display = 'none';
    }
}

export default {
	isShowHeader
};