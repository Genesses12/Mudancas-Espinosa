import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useId } from "react";

const services = [
	{
		id: "residencial",
		title: "Mudanças Residenciais",
		description:
			"Transporte seguro para sua casa e família, com cuidado e atenção aos detalhes.",
		icon: "🏠",
	},
	{
		id: "comercial",
		title: "Mudanças Comerciais",
		description:
			"Mudança empresarial com agilidade para minimizar impacto no seu negócio.",
		icon: "🏢",
	},
	{
		id: "interestadual",
		title: "Mudanças Interestaduais",
		description:
			"Atendemos todo o território nacional com segurança e pontualidade.",
		icon: "🚚",
	},
	{
		id: "embalagem",
		title: "Embalagem Profissional",
		description: "Serviço completo de embalagem para proteger seus pertences.",
		icon: "📦",
	},
	{
		id: "armazenamento",
		title: "Armazenamento",
		description: "Solução de guarda-móveis para suas necessidades temporárias.",
		icon: "🏭",
	},
	{
		id: "montagem",
		title: "Montagem de Móveis",
		description: "Montagem e desmontagem profissional de móveis.",
		icon: "🔧",
	},
];

export default function Services() {
	const servicosId = useId();

	return (
		<section id={servicosId} className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Nossos Serviços
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Oferecemos soluções completas para todos os tipos de mudança, sempre
						com qualidade e segurança.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<Card
							key={service.id}
							className="hover:shadow-lg transition-shadow duration-300"
						>
							<CardHeader>
								<div className="text-4xl mb-4">{service.icon}</div>
								<CardTitle className="text-xl">{service.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 leading-relaxed">
									{service.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
