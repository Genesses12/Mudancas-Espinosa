import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
	"Equipe especializada e treinada",
	"Veículos modernos e equipados",
	"Seguro para seus pertences",
	"Atendimento personalizado",
	"Orçamento sem compromisso",
	"Pontualidade e compromisso",
];

export default function About() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <a>
		<section id="sobre" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<Badge variant="secondary" className="mb-4 text-lg py-2 px-4">
						Sobre Nós
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
						Por que escolher a Mudanças Espinosa?
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Com mais de uma década de experiência, somos referência no mercado
						de mudanças. Nossa missão é tornar sua mudança uma experiência
						tranquila e sem preocupações.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{features.map((feature, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<div key={i} className="flex items-start space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
									<span className="text-gray-700">{feature}</span>
								</div>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="bg-blue-600 hover:bg-blue-700">
								Conheça Nossa História
							</Button>
							<Button variant="outline" size="lg">
								Nossa Equipe
							</Button>
						</div>
					</div>

					<Card className="border-0 shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-center">
								Nossa Experiência
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-center space-y-4">
								<div className="grid grid-cols-3 gap-4 mb-6">
									<div className="text-center">
										<div className="text-3xl font-bold text-blue-600">10+</div>
										<div className="text-sm text-gray-600">Anos</div>
									</div>
									<div className="text-center">
										<div className="text-3xl font-bold text-blue-600">
											1000+
										</div>
										<div className="text-sm text-gray-600">Clientes</div>
									</div>
									<div className="text-center">
										<div className="text-3xl font-bold text-blue-600">24h</div>
										<div className="text-sm text-gray-600">Atendimento</div>
									</div>
								</div>
								<div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
									<div className="text-white text-center p-6">
										<div className="text-4xl mb-3">🚚</div>
										<p className="text-lg font-semibold">Frota Moderna</p>
										<p className="text-blue-100 text-sm">
											Veículos equipados para qualquer tipo de mudança
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
