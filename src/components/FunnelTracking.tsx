import { useEffect } from 'react';

const FunnelTracking = () => {
    useEffect(() => {
        const scriptId = 'funnel-tracking-script';

        // Prevent duplicate injection
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://link.msgsndr.com/js/external-tracking.js";
        script.setAttribute('data-tracking-id', 'tk_b12df32264f04403a0612a818f9dd9e2');
        script.async = true;

        document.body.appendChild(script);

        return () => {
            // Cleanup if needed, though usually tracking scripts stay for the session
            // document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default FunnelTracking;
