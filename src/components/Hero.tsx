import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <explanation>
		<section
			id="home"
			className="pt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
		>
			<div className="container mx-auto px-4 py-20">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Sua Mudança com
						<span className="text-yellow-300"> Segurança</span> e
						<span className="text-yellow-300"> Agilidade</span>
					</h1>
					<p className="text-xl md:text-2xl mb-8 text-blue-100">
						Mais de 10 anos transportando sonhos e realizando mudanças com
						excelência
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg px-8 py-3 h-auto">
							📞 Solicitar Orçamento Grátis
						</Button>
						<Button
							variant="outline"
							className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 h-auto"
						>
							💬 Falar no WhatsApp
						</Button>
					</div>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-yellow-300">
							1000+
						</div>
						<div className="text-blue-100">Mudanças Realizadas</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-yellow-300">
							24h
						</div>
						<div className="text-blue-100">Atendimento</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-yellow-300">
							100%
						</div>
						<div className="text-blue-100">Satisfação</div>
					</div>
				</div>
			</div>
		</section>
	);
}
