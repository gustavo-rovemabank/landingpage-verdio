import { motion } from "framer-motion";

export function Benefits() {
    return (
        <section id="beneficios" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-12 h-12 bg-verdio-green/10 rounded-xl flex items-center justify-center mb-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#53a000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                <polyline points="17 18 23 18 23 12"></polyline>
                            </svg>
                        </div>
                        <h5 className="text-2xl font-black mb-4">Redução de Custos</h5>
                        <p className="text-gray-500 leading-relaxed font-secondary">
                            O controle rigoroso de combustível e a otimização de rotas refletem
                            diretamente no seu Ebitda.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="w-12 h-12 bg-verdio-green/10 rounded-xl flex items-center justify-center mb-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#53a000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                                <path d="M12 12V3"></path>
                                <path d="M11 21h2"></path>
                                <path d="M7 21h10"></path>
                                <path d="M12 21v-3"></path>
                                <path d="m19 15-2-2"></path>
                                <path d="m5 15 2-2"></path>
                            </svg>
                        </div>
                        <h5 className="text-2xl font-black mb-4">Segurança Jurídica</h5>
                        <p className="text-gray-500 leading-relaxed font-secondary">
                            Tenha provas concretas em casos de acidentes ou multas indevidas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-12 h-12 bg-verdio-green/10 rounded-xl flex items-center justify-center mb-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#53a000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                                <path d="M2 21c0-3 1.85-5.36 5.08-6C10.9 14.24 10.9 14.24 10.9 14.24"></path>
                            </svg>
                        </div>
                        <h5 className="text-2xl font-black mb-4">Conformidade Ambiental</h5>
                        <p className="text-gray-500 leading-relaxed font-secondary">
                            Monitore a emissão de CO2 da sua frota e adote práticas de ESG.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
