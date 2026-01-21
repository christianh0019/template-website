const FunnelFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-12">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-400 text-sm">
                    &copy; {currentYear} Homestead Home Builders. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center gap-6 text-xs text-slate-400">
                    <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <span className="text-slate-300">|</span>
                    <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default FunnelFooter;
