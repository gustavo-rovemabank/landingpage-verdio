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
                        className="col-span-12 md:col-span-8 polymer-card p-10 flex flex-col justify-between min-h-[400px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
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
                        <div className="w-16 h-16 bg-gray-100 rounded-[24px] flex items-center justify-center mb-8">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#53a000"
                                strokeWidth="2"
                            >
                                <path d="M18 20V10M12 20V4M6 20v-6" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-black mb-4">RFID para Motoristas</h3>
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
