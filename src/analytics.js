const createAnalytics = () => {
    let clicks = 0;
    let isActive = true;

    const listener = () => clicks++;

    document.addEventListener('click', listener)

    return {
        getClicks() {
            return isActive ? clicks : `Analytics destroyed. Total clicks = ${clicks}`;
        },

        destroy() {
            isActive = false;
            document.removeEventListener('click', listener);
            return 'Analytics destroyed!'
        }
    }
}

window.analytics = createAnalytics();