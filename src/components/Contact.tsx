import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        // Regex básica e robusta para validação client-side
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email) {
            setError("Por favor, preencha seu e-mail.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Insira um endereço de e-mail válido.");
            return;
        }

        setIsSubmitting(true);

        try {
            // =========================================================================
            // [APPSEC] IMPLEMENTAÇÃO ANTI-BOT DEVE SER FEITA NESTE PONTO
            // =========================================================================
            // Exemplo Turnstile / reCAPTCHA:
            // 1. const token = await window.turnstile.getResponse();
            // 2. if (!token) throw new Error("Validação de segurança falhou.");
            // 3. Acrescentar 'token' no payload do fetch para o backend validar.
            // =========================================================================

            // Simulando um delay da API
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Aqui iria o fetch('seu-endpoint', { method: 'POST', body: JSON.stringify({ email }) })
            console.log("Formulário submetido com sucesso. E-mail sanitizado:", email);
            setEmail("");
            // Mostre uma mensagem de sucesso na tela para o usuário final.

        } catch (err) {
            setError("Ocorreu um erro ao processar sua solicitação.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                                <div className="flex flex-col w-full md:w-auto relative">
                                    <input
                                        type="email"
                                        placeholder="Seu e-mail corporativo"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setError("");
                                        }}
                                        disabled={isSubmitting}
                                        className={`px-8 py-5 rounded-full bg-white/10 border ${error ? 'border-red-500' : 'border-white/20'} text-white w-full md:w-96 font-secondary focus:outline-none focus:border-verdio-green transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    />
                                    {error && (
                                        <motion.span
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm mt-2 text-left absolute -bottom-6 left-6 font-primary font-bold"
                                        >
                                            {error}
                                        </motion.span>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`btn-polymer !text-lg justify-center w-full md:w-auto self-start ${isSubmitting ? 'opacity-50 cursor-not-allowed scale-100' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Enviando...</span>
                                        </div>
                                    ) : (
                                        "Falar com Consultor"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
