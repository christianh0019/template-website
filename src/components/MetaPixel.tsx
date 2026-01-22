import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        fbq: any;
    }
}

const MetaPixel = () => {
    const location = useLocation();

    useEffect(() => {
        // fbq is initialized in index.html, but we check just in case or for TS
        if (window.fbq) {
            window.fbq('track', 'PageView');
        }
    }, [location.pathname]); // Fire on every route change

    return null;
};

export default MetaPixel;
