import { MapPin, Ruler } from 'lucide-react';

const projects = [
    {
        id: 5,
        title: "The Timberline Retreat",
        location: "Loveland, CO",
        sqft: "4,100 Sq. Ft.",
        description: "A stunning mountain-modern sanctuary blending rustic stone work with sophisticated architectural lines. Features grand entertainment spaces and a private primary wing.",
        image: "/images/spotlights/spotlight-5.jpg",
        tags: ["Mountain Modern", "Luxury Living"]
    },
    {
        id: 2,
        title: "The Stone Creek Estate",
        location: "Fort Collins, CO",
        sqft: "3,200 Sq. Ft.",
        description: "Timeless craftsman detailed with natural stone and timber accents. This family home includes a dedicated home office, a chef's kitchen, and a 4-car garage.",
        image: "/images/spotlights/spotlight-2.png",
        tags: ["Luxury Estate", "Craftsman"]
    },
    {
        id: 6,
        title: "The Black Forest Estate",
        location: "Monument, CO",
        sqft: "3,200 Sq. Ft.",
        description: "An expansive custom estate set amongst towering pines. Featuring a dramatic entry timber truss, stone wainscoting, and a detached workshop.",
        image: "/images/spotlights/spotlight-6.png",
        tags: ["Custom Estate", "Timber Frame"],
        status: "Under Construction"
    },
    {
        id: 3,
        title: "The Mountain View Modern",
        location: "Larimer County, CO",
        sqft: "4,500 Sq. Ft.",
        description: "A striking contemporary walk-out maximizing mountain views. Floor-to-ceiling windows, steel accents, and a multi-level deck define this architectural statement.",
        image: "/images/spotlights/spotlight-3.png",
        tags: ["Contemporary", "Walk-out"],
        status: "Under Construction"
    },
    {
        id: 4,
        title: "The Prairie Horizon",
        location: "Severance, CO",
        sqft: "2,800 Sq. Ft.",
        description: "Efficient luxury on acreage. This plan balances budget and style with durable LVP flooring, quartz countertops, and a highly efficient HVAC system.",
        image: "/images/spotlights/spotlight-4.jpg",
        tags: ["Acreage Build", "Energy Efficient"]
    },
    {
        id: 1,
        title: "The Sagebrush Custom",
        location: "Wellington, CO",
        sqft: "2,400 Sq. Ft.",
        description: "A modern ranch designed for open-concept living. Features a vaulted great room, custom alder cabinetry, and an expansive covered patio perfect for Northern Colorado sunsets.",
        image: "/images/spotlights/spotlight-1.png",
        tags: ["Custom Build", "Ranch Style"]
    }
];

const ProjectSpotlights = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#2B70B6] font-bold uppercase tracking-widest text-sm mb-2 block">Our Work</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Recent Project Spotlights</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        See how we turn vision into reality. Each home we build is custom-tailored to the land, the budget, and the family who lives there.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-slate-50 border border-slate-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ${project.title === "The Prairie Horizon" ? "brightness-110" : ""}`}
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.status === "Under Construction" && (
                                    <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
                                        <span className="bg-[#2B70B6] text-white text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-sm uppercase tracking-wider">
                                            Under Construction
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-primary mb-1">{project.title}</h3>
                                        <div className="flex items-center gap-1 text-slate-500 text-sm font-medium">
                                            <MapPin size={14} />
                                            {project.location}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 bg-white border border-slate-200 px-3 py-1 rounded text-sm font-bold text-slate-700">
                                        <Ruler size={14} className="text-[#2B70B6]" />
                                        {project.sqft}
                                    </div>
                                </div>

                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* Optional CTA or Link style visual if we wanted pages later, for now just static */}
                                {/* <div className="pt-6 border-t border-slate-200">
                                    <span className="text-[#2B70B6] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                                        View Details <ArrowRight size={16} />
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSpotlights;
