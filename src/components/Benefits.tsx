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
