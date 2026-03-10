import { motion } from "framer-motion";

export function Modules() {
    return (
        <section id="solucoes" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-black mb-6">
                        Módulos de <span className="text-verdio-green">Performance</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl text-lg font-secondary">
                        Nossa arquitetura modular permite que você escale o monitoramento
                        conforme sua necessidade.
                    </p>
                </motion.div>

                <div className="grid grid-cols-12 gap-6">
                    <motion.div
                        className="col-span-12 md:col-span-8 polymer-card p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="flex-1">
                                <div className="w-16 h-16 bg-verdio-green rounded-[24px] flex items-center justify-center mb-8 shadow-lg shadow-[#53a000]/20">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-black mb-4">
                                    Rastreador GPRS e Satélite
                                </h3>
                                <p className="text-gray-500 text-lg max-w-md font-secondary">
                                    Cobertura global, rastreamento a cada 10 minutos e bloqueio
                                    remoto para proteção máxima do seu ativo.
                                </p>
                            </div>
                            
                            {/* Satellite/GPRS Illustration */}
                            <div className="relative w-full md:w-[280px] h-[200px] flex items-center justify-center">
                                <div className="absolute inset-0 bg-verdio-green/5 rounded-full blur-3xl"></div>
                                <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-full p-4">
                                    {/* Globe / Earth Surface */}
                                    <path d="M20 180 Q 100 130 180 180" stroke="#53a000" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" opacity="0.3"/>
                                    <path d="M40 190 Q 100 150 160 190" stroke="#53a000" strokeWidth="4" strokeLinecap="round" opacity="0.1"/>
                                    
                                    {/* Pin on Earth */}
                                    <g transform="translate(100, 160)">
                                        <path d="M0 0 C -8 -8 -12 -16 -12 -22 A 12 12 0 1 1 12 -22 C 12 -16 8 -8 0 0 Z" fill="#53a000" />
                                        <circle cx="0" cy="-22" r="4" fill="white" />
                                    </g>

                                    {/* Satellite orbiting */}
                                    <g transform="translate(100, 60) rotate(-15)">
                                        {/* Left Solar Panel */}
                                        <rect x="-45" y="-12" width="30" height="24" rx="4" fill="white" stroke="#53a000" strokeWidth="4" />
                                        <line x1="-30" y1="-12" x2="-30" y2="12" stroke="#53a000" strokeWidth="3" opacity="0.4"/>
                                        <line x1="-15" y1="0" x2="-10" y2="0" stroke="#53a000" strokeWidth="4" />
                                        
                                        {/* Right Solar Panel */}
                                        <rect x="15" y="-12" width="30" height="24" rx="4" fill="white" stroke="#53a000" strokeWidth="4" />
                                        <line x1="30" y1="-12" x2="30" y2="12" stroke="#53a000" strokeWidth="3" opacity="0.4"/>
                                        <line x1="10" y1="0" x2="15" y2="0" stroke="#53a000" strokeWidth="4" />
                                        
                                        {/* Main Body */}
                                        <rect x="-10" y="-15" width="20" height="30" rx="4" fill="white" stroke="#53a000" strokeWidth="4" />
                                        <circle cx="0" cy="0" r="4" fill="#53a000" />
                                        
                                        {/* Dish/Antenna pointing down */}
                                        <path d="M -15 25 Q 0 45 15 25" fill="white" stroke="#53a000" strokeWidth="4" strokeLinecap="round" />
                                        <line x1="0" y1="15" x2="0" y2="30" stroke="#53a000" strokeWidth="4" strokeLinecap="round"/>
                                        <circle cx="0" cy="30" r="3" fill="#53a000"/>
                                    </g>
                                    
                                    {/* Signal Waves */}
                                    <path d="M90 100 Q 100 110 110 100" stroke="#53a000" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
                                    <path d="M80 115 Q 100 135 120 115" stroke="#53a000" strokeWidth="3" strokeLinecap="round" opacity="0.5" className="animate-ping" style={{ animationDuration: '2s' }}/>
                                    <path d="M70 130 Q 100 160 130 130" stroke="#53a000" strokeWidth="3" strokeLinecap="round" opacity="0.2" className="animate-ping" style={{ animationDuration: '3s' }}/>
                                </svg>
                                {/* Floating dots for data feel */}
                                <div className="absolute top-10 right-10 w-2 h-2 bg-verdio-green rounded-full animate-bounce"></div>
                                <div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 mt-8">
                            <span className="px-4 py-2 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest font-secondary">
                                Latência &lt; 1s
                            </span>
                            <span className="px-4 py-2 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest font-secondary">
                                Cobertura Global
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="col-span-12 md:col-span-4 polymer-card p-10 bg-verdio-dark text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-16 h-16 bg-verdio-green rounded-[24px] flex items-center justify-center mb-8">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-black mb-4">Sensor de Fadiga</h3>
                        <p className="opacity-60 mb-6 font-secondary">
                            Alertas em tempo real para distrações, sonolência e uso de
                            celular, reduzindo riscos e acidentes.
                        </p>
                        <ul className="space-y-3 font-secondary">
                            <li className="flex items-center gap-2 text-sm font-bold">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#53a000"
                                    strokeWidth="3"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>{" "}
                                Relatórios CANBUS
                            </li>
                            <li className="flex items-center gap-2 text-sm font-bold">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#53a000"
                                    strokeWidth="3"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>{" "}
                                Sensor de Bocal
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="col-span-12 md:col-span-4 polymer-card p-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="w-16 h-16 bg-verdio-green rounded-[24px] flex items-center justify-center mb-8 shadow-lg shadow-[#53a000]/20">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <path d="M18 20V10M12 20V4M6 20v-6" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-black mb-4">RFID para Motoristas</h3>
                        <p className="text-gray-500 font-secondary">
                            Identificação individual e controle de jornada, garantindo
                            segurança operacional.
                        </p>
                    </motion.div>

                    <motion.div
                        className="col-span-12 md:col-span-8 polymer-card p-10 bg-white border-2 border-verdio-green relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1">
                                <div className="w-16 h-16 bg-verdio-green rounded-[24px] flex items-center justify-center mb-8 shadow-lg shadow-[#53a000]/20">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                    >
                                        <path d="M23 7l-7 5 7 5V7z" />
                                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-black mb-4">Video Monitoramento</h3>
                                <p className="text-gray-500 text-lg font-secondary">
                                    Até 4 câmeras para cada dispositivo para imagens em tempo real
                                    e gravação de ângulos estratégicos.
                                </p>
                            </div>
                            <div className="w-48 h-48 bg-verdio-soft-green rounded-full flex items-center justify-center shrink-0">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-verdio-green">
                                        -22%
                                    </div>
                                    <div className="text-[10px] font-bold text-gray-400 font-secondary">
                                        CUSTO MANUT.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
