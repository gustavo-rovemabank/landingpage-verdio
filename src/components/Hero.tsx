import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="pt-12 pb-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                {/* We will add Framer motion here */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8 gradient-text font-primary">
                        Controle total da sua frota em tempo real <br />
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl font-secondary">
                        Reduza custos operacionais e aumente a produtividade com a
                        plataforma de telemetria mais intuitiva do mercado.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="btn-polymer text-lg">
                            Começar Agora
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                        <button className="btn-secondary">Ver Demonstração</button>
                    </div>
                    <div className="mt-16 flex items-center gap-8">
                        <div>
                            <div className="text-3xl font-black text-verdio-green font-primary">
                                +1000
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold font-secondary">
                                Veículos Ativos
                            </div>
                        </div>
                        <div className="w-px h-10 bg-gray-200"></div>
                        <div>
                            <div className="text-3xl font-black text-verdio-green font-primary">
                                99.9%
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold font-secondary">
                                Uptime Satelital
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Dashboard graphic */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="polymer-card p-4 aspect-square relative overflow-hidden bg-green-50">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "radial-gradient(#53a000 1px, transparent 1px)",
                                backgroundSize: "30px 30px",
                            }}
                        ></div>
                        <div className="relative h-full w-full rounded-[30px] overflow-hidden bg-white shadow-inner flex flex-col">
                            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-[10px] font-bold text-gray-400 tracking-tighter uppercase font-secondary">
                                    Live Telemetry Stream
                                </div>
                            </div>
                            <div className="flex-1 relative bg-slate-50 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900 overflow-hidden flex flex-col p-4 md:p-6 gap-4 min-w-[500px]">
                                    {/* Abstract Background Grid */}
                                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#53a000 1px, transparent 1px), linear-gradient(90deg, #53a000 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
                                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-verdio-green rounded-full blur-[120px] opacity-30"></div>
                                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>

                                    {/* Top Bar */}
                                    <div className="relative z-10 w-full h-12 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center px-4 justify-between">
                                        <div className="flex gap-2">
                                            <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                                            <div className="w-8 h-2 bg-white/10 rounded-full"></div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div className="w-2 h-2 rounded-full bg-verdio-green animate-pulse"></div>
                                            <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="relative z-10 flex flex-1 gap-4">
                                        {/* Sidebar */}
                                        <div className="w-1/4 h-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 flex flex-col gap-3">
                                            <div className="w-full h-3 bg-white/20 rounded-full mb-2"></div>
                                            <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                                            <div className="w-1/2 h-2 bg-white/10 rounded-full mb-4"></div>
                                            <div className="w-full bg-verdio-green/20 h-10 rounded-lg border border-verdio-green/30 flex items-center px-3">
                                                <div className="w-2 h-2 bg-verdio-green rounded-full mr-2"></div>
                                                <div className="w-10 h-2 bg-verdio-green/50 rounded-full"></div>
                                            </div>
                                            <div className="w-full bg-white/5 h-10 rounded-lg flex items-center px-3">
                                                <div className="w-2 h-2 bg-white/30 rounded-full mr-2"></div>
                                                <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                                            </div>
                                            <div className="w-full bg-white/5 h-10 rounded-lg flex items-center px-3">
                                                <div className="w-2 h-2 bg-white/30 rounded-full mr-2"></div>
                                                <div className="w-8 h-2 bg-white/20 rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Center Area */}
                                        <div className="flex-1 h-full flex flex-col gap-4">
                                            {/* Map/Chart Area */}
                                            <div className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 relative overflow-hidden flex items-center justify-center">
                                                <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-50">
                                                    <path d="M 0 80 Q 50 20 100 50 T 200 30 L 200 100 L 0 100 Z" fill="#53a000" opacity="0.3" />
                                                    <path d="M 0 80 Q 50 20 100 50 T 200 30" fill="none" stroke="#53a000" strokeWidth="2" />
                                                </svg>

                                                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-verdio-green/20 rounded-full animate-ping"></div>
                                                <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-verdio-green border-2 border-white rounded-full -mt-2 -ml-2 shadow-[0_0_15px_#53a000]"></div>

                                                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-500 border border-white rounded-full"></div>
                                                <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-blue-400 border border-white rounded-full animate-bounce"></div>
                                            </div>

                                            {/* Bottom metrics */}
                                            <div className="h-24 flex gap-4">
                                                <div className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                                                    <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                                                    <div className="text-xl md:text-2xl font-bold text-white tracking-widest font-primary">99.9%</div>
                                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-[99%] h-full bg-verdio-green"></div></div>
                                                </div>
                                                <div className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                                                    <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                                                    <div className="text-xl md:text-2xl font-bold text-white tracking-widest font-primary">1.2k</div>
                                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-[75%] h-full bg-blue-400"></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-1/4 left-1/4 z-10">
                                    <div className="telemetry-node"></div>
                                    {/* Float animation goes here */}
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        className="mt-4 p-4 polymer-card !rounded-2xl shadow-xl w-48 bg-white/90 backdrop-blur-sm"
                                    >
                                        <div className="text-[10px] font-bold text-verdio-green mb-1 font-secondary">
                                            CAMINHÃO #0842
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="text-2xl font-black tracking-tighter font-primary">
                                                82{" "}
                                                <span className="text-sm font-normal text-gray-400 font-secondary">
                                                    km/h
                                                </span>
                                            </div>
                                            <div className="text-[10px] text-red-500 font-bold font-secondary">
                                                FREAGEM BRUSCA
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Float animation goes here */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 z-20 polymer-card p-6 w-64 bg-white/90 backdrop-blur-lg border-white border-4 shadow-2xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#53a000"
                                    strokeWidth="2"
                                >
                                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-gray-400 font-secondary">
                                    ECONOMIA ESTIMADA
                                </div>
                                <div className="text-xl font-black font-primary">
                                    R$ 14.280,00
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-verdio-green h-full w-[75%]"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
