

const FunnelHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 h-24">
            <div className="container mx-auto px-6 h-full flex items-center justify-center">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Homestead Home Builders" className="h-16 w-auto" />
                </div>
            </div>
        </header>
    );
};

export default FunnelHeader;
