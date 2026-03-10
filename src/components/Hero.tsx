import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="pt-12 pb-0 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                {/* We will add Framer motion here */}
                <motion.div
                    className="pb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 gradient-text font-primary">
                        Controle total da sua frota em tempo real
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
                    className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto h-[600px] flex items-center justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Background Graphic elements (3 gradient bars) */}
                    <div className="absolute inset-0 flex flex-col justify-start pt-10 gap-6 z-0 items-center">
                        <div className="w-[50%] md:w-[60%] h-20 md:h-[100px] rounded-full bg-gradient-to-r from-[#8cc63f] to-[#d6ebac] -ml-10 md:-ml-24 shadow-sm"></div>
                        <div className="w-[60%] md:w-[70%] h-20 md:h-[100px] rounded-full bg-gradient-to-r from-[#8cc63f] to-[#d6ebac] shadow-sm ml-4 md:ml-10"></div>
                        <div className="w-[70%] md:w-[80%] h-20 md:h-[100px] rounded-full bg-gradient-to-r from-[#8cc63f] to-[#d6ebac] ml-20 md:ml-40 shadow-sm"></div>
                    </div>

                    {/* Persona Image */}
                    <img
                        src="/img/Persona.png"
                        alt="Gestor de Frota"
                        className="relative z-10 h-[220%] lg:h-[250%] w-auto object-contain object-bottom translate-y-[14%] lg:translate-y-[-38%] scale-125 pointer-events-none"
                    />

                    {/* Caminhão Card float */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-1/3 right-0 md:-right-4 lg:-right-10 z-20 polymer-card p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white w-52 border border-gray-50"
                    >
                        <div className="text-[10px] font-bold text-verdio-green mb-1 font-secondary uppercase">
                            Caminhão #0842
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="text-3xl font-black tracking-tighter font-primary text-gray-800">
                                82{" "}
                                <span className="text-sm font-normal text-gray-400 font-secondary ml-[-4px]">
                                    km/h
                                </span>
                            </div>
                            <div className="text-[9px] text-red-500 font-bold font-secondary leading-tight text-right w-16">
                                FREAGEM BRUSCA
                            </div>
                        </div>
                    </motion.div>

                    {/* Economia Estimada float */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-0 md:left-10 lg:-left-10 z-20 polymer-card py-4 px-5 w-64 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] rounded-[24px] flex items-center gap-4"
                    >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-verdio-green/10">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#53a000"
                                strokeWidth="2.5"
                            >
                                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="text-[9px] font-bold text-gray-400 font-secondary uppercase tracking-widest mb-0.5">
                                Economia Estimada
                            </div>
                            <div className="text-lg font-black font-primary text-gray-800 leading-none mb-2">
                                R$ 14.280,00
                            </div>
                            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-verdio-green h-full w-[80%] rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
