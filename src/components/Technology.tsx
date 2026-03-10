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
                        <div className="w-full md:w-3/5 relative group">
                            <div className="absolute -inset-4 bg-verdio-green/5 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="polymer-card p-4 bg-white border border-slate-100 relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <svg viewBox="0 0 800 600" className="w-full h-auto rounded-[16px] bg-white overflow-hidden">
                                        {/* Sidebar */}
                                        <rect x="0" y="0" width="80" height="600" fill="#f8fafc" />
                                        <circle cx="40" cy="50" r="20" fill="#53a000" />
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <rect key={i} x="20" y={100 + i * 60} width="40" height="40" rx="8" fill="#e2e8f0" />
                                        ))}

                                        {/* Header */}
                                        <rect x="80" y="0" width="720" height="80" fill="#ffffff" />
                                        <line x1="80" y1="80" x2="800" y2="80" stroke="#f1f5f9" strokeWidth="2" />
                                        <rect x="110" y="25" width="200" height="30" rx="15" fill="#f1f5f9" />
                                        <circle cx="740" cy="40" r="20" fill="#f1f5f9" />

                                        {/* Stats Widgets */}
                                        <rect x="110" y="110" width="200" height="120" rx="16" fill="#f8fafc" stroke="#f1f5f9" />
                                        <text x="135" y="150" fill="#94a3b8" className="text-[14px] font-bold">Consumo</text>
                                        <text x="135" y="190" fill="#53a000" className="text-[28px] font-black">94.2%</text>
                                        <rect x="135" y="205" width="150" height="4" rx="2" fill="#f1f5f9" />
                                        <rect x="135" y="205" width="120" height="4" rx="2" fill="#53a000" />

                                        <rect x="330" y="110" width="200" height="120" rx="16" fill="#f8fafc" stroke="#f1f5f9" />
                                        <text x="355" y="150" fill="#94a3b8" className="text-[14px] font-bold">Frota Ativa</text>
                                        <text x="355" y="190" fill="#1e293b" className="text-[28px] font-black">124</text>
                                        <path d="M 450 170 L 470 150 L 490 170" stroke="#53a000" strokeWidth="3" fill="none" />

                                        <rect x="550" y="110" width="140" height="120" rx="16" fill="#f8fafc" stroke="#f1f5f9" />
                                        <circle cx="620" cy="165" r="35" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                                        <path d="M 620 130 A 35 35 0 0 1 655 165" fill="none" stroke="#53a000" strokeWidth="8" strokeLinecap="round" />
                                        <text x="620" y="172" textAnchor="middle" fill="#1e293b" className="text-[12px] font-black">82%</text>

                                        {/* Main Chart Section */}
                                        <rect x="110" y="250" width="580" height="310" rx="24" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />
                                        
                                        {/* Grid Lines */}
                                        {[0, 1, 2, 3].map((i) => (
                                            <line key={i} x1="140" y1={300 + i * 70} x2="660" y2={300 + i * 70} stroke="#f1f5f9" strokeWidth="1" />
                                        ))}

                                        {/* Data Line Chart */}
                                        <path 
                                            d="M 140 500 Q 200 450 250 480 T 350 400 T 450 460 T 550 350 T 660 380" 
                                            fill="none" 
                                            stroke="#53a000" 
                                            strokeWidth="4" 
                                            strokeLinecap="round"
                                        />
                                        <path 
                                            d="M 140 500 Q 200 450 250 480 T 350 400 T 450 460 T 550 350 T 660 380 L 660 550 L 140 550 Z" 
                                            fill="url(#chartGradient3)" 
                                            opacity="0.15" 
                                        />

                                        <defs>
                                            <linearGradient id="chartGradient3" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#53a000" />
                                                <stop offset="100%" stopColor="#53a000" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </motion.div>

                                {/* Mini Overlapping Cards for Modal feel */}
                                <motion.div 
                                    className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white p-4 rounded-3xl shadow-2xl z-20 border border-gray-100 hidden lg:block"
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-verdio-soft-green rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-verdio-green rounded-full animate-ping"></div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Status Frota</div>
                                            <div className="text-sm font-black text-verdio-dark">100% ONLINE</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
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
                        <div className="w-full md:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-blue-500/5 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="polymer-card p-8 bg-white border border-slate-100 relative z-10 overflow-hidden">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-verdio-soft-green rounded-xl flex items-center justify-center">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#53a000" strokeWidth="2.5">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-black text-verdio-dark uppercase tracking-tight">Relatório de Conformidade</span>
                                    </div>
                                    <div className="px-3 py-1 bg-verdio-green/10 text-verdio-green text-[10px] font-black rounded-full border border-verdio-green/20">
                                        LEI 13.103/2015
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Journey Timeline */}
                                    <div className="bg-slate-50 p-4 rounded-2xl">
                                        <div className="flex justify-between items-end mb-3">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase">Controle de Jornada</span>
                                            <span className="text-xs font-black text-verdio-green">11:00h Descanso OK</span>
                                        </div>
                                        <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden flex">
                                            <div className="h-full w-[35%] bg-verdio-green" title="Direção"></div>
                                            <div className="h-full w-[10%] bg-blue-400" title="Espera"></div>
                                            <div className="h-full w-[45%] bg-emerald-200" title="Descanso"></div>
                                            <div className="h-full w-[10%] bg-verdio-green" title="Direção"></div>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <span className="text-[9px] text-gray-400 font-bold">06:00</span>
                                            <span className="text-[9px] text-gray-400 font-bold">14:00</span>
                                            <span className="text-[9px] text-gray-400 font-bold">22:00</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Status Cards */}
                                        <div className="bg-slate-50 p-4 rounded-2xl border border-transparent hover:border-verdio-green/20 transition-colors">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase mb-2">Toxicológico</div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-verdio-green rounded-full shadow-[0_0_8px_rgba(83,160,0,0.6)]"></div>
                                                <span className="text-sm font-black text-verdio-dark uppercase">Válido</span>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-2xl border border-transparent hover:border-verdio-green/20 transition-colors">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase mb-2">Segurança</div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span className="text-sm font-black text-verdio-dark uppercase">Score 98/100</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Checklist */}
                                    <div className="space-y-3 pt-2">
                                        {[
                                            { label: 'Exames em Dia', status: true },
                                            { label: 'Seguro de Carga RPW', status: true },
                                            { label: 'Pagamento de Pedágio Vale', status: true }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between group/item">
                                                <span className="text-xs font-bold text-gray-500 group-hover/item:text-verdio-dark transition-colors">{item.label}</span>
                                                <div className="w-5 h-5 bg-verdio-green rounded-full flex items-center justify-center">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Abstract decorative elements */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-verdio-green/5 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
