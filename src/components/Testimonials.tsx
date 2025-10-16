import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useId } from "react";

const testimonials = [
	{
		id: "maria-silva",
		name: "Maria Silva",
		city: "São Paulo, SP",
		text: "Serviço excelente! A equipe foi muito cuidadosa com meus móveis e tudo chegou perfeito. Recomendo!",
		rating: 5,
		service: "Mudança Residencial",
	},
	{
		id: "joao-santos",
		name: "João Santos",
		city: "Rio de Janeiro, RJ",
		text: "Mudança rápida e eficiente. Preço justo e profissionais muito competentes. Superou expectativas!",
		rating: 5,
		service: "Mudança Comercial",
	},
	{
		id: "ana-oliveira",
		name: "Ana Oliveira",
		city: "Belo Horizonte, MG",
		text: "Recomendo! Fizeram minha mudança interestadual sem nenhum problema. Atendimento excelente.",
		rating: 5,
		service: "Mudança Interestadual",
	},
];

export default function Testimonials() {
	const depoimentosId = useId();
	return (
		<section id={depoimentosId} className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<Badge variant="secondary" className="mb-4 text-lg py-2 px-4">
						Depoimentos
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						O que nossos clientes dizem
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						A satisfação dos nossos clientes é nossa maior recompensa
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<Card
							key={testimonial.id}
							className="hover:shadow-lg transition-shadow duration-300"
						>
							<CardContent className="p-6">
								<div className="flex justify-between items-start mb-4">
									<div className="flex text-yellow-400">
										{"★".repeat(testimonial.rating)}
									</div>
									<Badge variant="outline" className="text-xs">
										{testimonial.service}
									</Badge>
								</div>

								<p className="text-gray-600 mb-6 italic leading-relaxed">
									"{testimonial.text}"
								</p>

								<div className="border-t pt-4">
									<div className="font-semibold text-gray-800">
										{testimonial.name}
									</div>
									<div className="text-gray-500 text-sm">
										{testimonial.city}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<div className="inline-flex items-center space-x-2 text-gray-600">
						<span>⭐</span>
						<span className="font-semibold">4.9/5</span>
						<span>baseado em 200+ avaliações</span>
					</div>
				</div>
			</div>
		</section>
	);
}
