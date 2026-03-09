import { motion } from "framer-motion";

export function Technology() {
    return (
        <section id="tecnologia" className="py-32 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-black mb-8">
                        Tecnologia que move o futuro.
                    </h2>
                    <div className="h-1 w-24 bg-verdio-green mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-32">
                    <motion.div
                        className="flex flex-col md:flex-row gap-16 items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full md:w-1/2">
                            <div className="text-sm font-black text-verdio-green tracking-widest uppercase mb-4 font-secondary">
                                01. Hardware de Elite
                            </div>
                            <h4 className="text-4xl font-black mb-6 leading-tight">
                                Painéis de Controle e Dashboards
                            </h4>
                            <p className="text-gray-500 text-lg leading-relaxed font-secondary">
                                Visibilidade total de custos, desempenho, jornadas e rotas.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 p-4 md:p-12 aspect-video flex items-center justify-center">
                            <svg viewBox="0 0 800 600" className="w-full h-full object-cover rounded-[40px] shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
                                {/* Glowing background elements / tech waves */}
                                <circle cx="400" cy="300" r="150" fill="none" stroke="#53a000" strokeWidth="2" strokeDasharray="4 8" className="animate-[spin_20s_linear_infinite]" opacity="0.5" />
                                <circle cx="400" cy="300" r="220" fill="none" stroke="#8ae034" strokeWidth="1" strokeDasharray="2 12" className="animate-[spin_30s_linear_infinite_reverse]" opacity="0.3" />

                                {/* Base Road/Platform */}
                                <path d="M 100 450 L 700 450 L 750 550 L 50 550 Z" fill="#1e293b" opacity="0.8" />
                                <path d="M 400 450 L 400 550" stroke="#53a000" strokeWidth="4" strokeDasharray="10 20" />

                                {/* Truck Body */}
                                <g transform="translate(150, 200)">
                                    {/* Trailer */}
                                    <path d="M 50 220 L 50 50 Q 50 30 70 30 L 300 30 L 300 220 Z" fill="#334155" />
                                    <path d="M 60 40 L 290 40 L 290 210 L 60 210 Z" fill="#1e293b" />
                                    {/* Data lines on Trailer */}
                                    <rect x="80" y="80" width="180" height="4" fill="#53a000" opacity="0.3" />
                                    <rect x="80" y="100" width="140" height="4" fill="#53a000" opacity="0.3" />
                                    <rect x="80" y="120" width="160" height="4" fill="#53a000" opacity="0.3" />
                                    <path d="M 230 180 L 270 180 L 280 160 L 260 160 Z" fill="#53a000" />

                                    {/* Wheels Trailer */}
                                    <circle cx="100" cy="220" r="30" fill="#0f172a" stroke="#fff" strokeWidth="4" />
                                    <circle cx="100" cy="220" r="15" fill="#334155" />
                                    <circle cx="170" cy="220" r="30" fill="#0f172a" stroke="#fff" strokeWidth="4" />
                                    <circle cx="170" cy="220" r="15" fill="#334155" />

                                    {/* Cabin */}
                                    <path d="M 310 220 L 310 100 Q 310 80 330 80 L 380 80 Q 400 80 410 100 L 440 180 Q 450 200 450 220 Z" fill="#53a000" />
                                    <path d="M 320 100 Q 320 90 330 90 L 375 90 Q 385 90 395 110 L 420 160 L 320 160 Z" fill="#e2e8f0" />

                                    {/* Wheels Cabin */}
                                    <circle cx="340" cy="220" r="30" fill="#0f172a" stroke="#fff" strokeWidth="4" />
                                    <circle cx="340" cy="220" r="15" fill="#334155" />
                                    <circle cx="410" cy="220" r="30" fill="#0f172a" stroke="#fff" strokeWidth="4" />
                                    <circle cx="410" cy="220" r="15" fill="#334155" />
                                </g>

                                {/* Digital Nodes/Connections over the truck */}
                                <circle cx="480" cy="300" r="6" fill="#fff" className="animate-ping" />
                                <circle cx="480" cy="300" r="3" fill="#53a000" />

                                <circle cx="250" cy="260" r="6" fill="#fff" className="animate-ping delay-700" />
                                <circle cx="250" cy="260" r="3" fill="#53a000" />

                                <path d="M 480 300 Q 550 200 650 250" fill="none" stroke="#53a000" strokeWidth="2" strokeDasharray="4 4" opacity="0.7" />
                                <circle cx="650" cy="250" r="4" fill="#fff" />
                            </svg>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col md:flex-row-reverse gap-16 items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full md:w-1/2">
                            <div className="text-sm font-black text-verdio-green tracking-widest uppercase mb-4 font-secondary">
                                02. Inteligência de Dados
                            </div>
                            <h4 className="text-4xl font-black mb-6 leading-tight">
                                Conformidade Legal & Segurança na Estrada
                            </h4>
                            <p className="text-gray-500 text-lg leading-relaxed font-secondary">
                                Garanta a conformidade total com a Lei nº 13.103/2015. Nossas
                                ferramentas auxiliam no controle e registro fidedigno da jornada
                                de trabalho, tempo de direção, períodos de descanso e exames
                                toxicológicos, prevenindo passivos trabalhistas e otimizando a
                                segurança.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 polymer-card p-10 bg-verdio-soft-green">
                            <div className="space-y-4 font-secondary">
                                <div className="bg-white p-4 rounded-2xl flex justify-between items-center">
                                    <span className="text-sm font-bold">Otimização de Rota</span>
                                    <span className="text-verdio-green font-black">
                                        +14% Eficiência
                                    </span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl flex justify-between items-center">
                                    <span className="text-sm font-bold">Risco de Sinistro</span>
                                    <span className="text-blue-500 font-black">Baixo</span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl flex justify-between items-center opacity-40">
                                    <span className="text-sm font-bold">Tempo de Ociosidade</span>
                                    <span className="text-gray-400 font-black">2.4 min</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
