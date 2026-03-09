import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contato" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="polymer-card bg-verdio-dark p-12 md:p-24 text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-verdio-green rounded-full blur-120 opacity-20 -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                            Pronto para transformar <br />
                            sua operação?
                        </h2>
                        <p className="text-white text-xl mb-12 max-w-2xl mx-auto opacity-60 font-secondary">
                            Solicite uma análise gratuita da sua frota atual e descubra onde
                            você está perdendo dinheiro.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <input
                                type="email"
                                placeholder="Seu e-mail corporativo"
                                className="px-8 py-5 rounded-full bg-white/10 border border-white/20 text-white w-full md:w-96 font-secondary focus:outline-none focus:border-verdio-green"
                            />
                            <button className="btn-polymer !text-lg justify-center">
                                Falar com Consultor
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
