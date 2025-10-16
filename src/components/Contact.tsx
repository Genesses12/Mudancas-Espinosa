import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Formulário enviado:", formData);
		alert("Orçamento solicitado com sucesso! Entraremos em contato em breve.");
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <a>
		<section id="contato" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Entre em Contato
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Solicite um orçamento gratuito e sem compromisso
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Formulário */}
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Solicitar Orçamento</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="name">Nome completo</Label>
										{/** biome-ignore lint/correctness/useUniqueElementIds: <a> */}
										<Input
											id="name"
											name="name"
											placeholder="Seu nome completo"
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">E-mail</Label>
										{/** biome-ignore lint/correctness/useUniqueElementIds: <a> */}
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="Seu e-mail"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="phone">Telefone</Label>
									{/** biome-ignore lint/correctness/useUniqueElementIds: <a> */}
									<Input
										id="phone"
										name="phone"
										placeholder="Seu telefone"
										value={formData.phone}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="message">Mensagem</Label>
									{/** biome-ignore lint/correctness/useUniqueElementIds: <a> */}
									<Textarea
										id="message"
										name="message"
										placeholder="Conte-nos sobre sua mudança..."
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</div>
								<Button type="submit" className="w-full">
									📨 Enviar Solicitação
								</Button>
							</form>
						</CardContent>
					</Card>

					{/* Informações de Contato */}
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Informações de Contato</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center">
									<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
										<span className="text-blue-600">📞</span>
									</div>
									<div>
										<div className="font-semibold">Telefone</div>
										<div className="text-gray-600">(11) 9999-9999</div>
									</div>
								</div>
								<div className="flex items-center">
									<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
										<span className="text-blue-600">📧</span>
									</div>
									<div>
										<div className="font-semibold">E-mail</div>
										<div className="text-gray-600">
											contato@mudancasespinosa.com
										</div>
									</div>
								</div>
								<div className="flex items-center">
									<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
										<span className="text-blue-600">🕒</span>
									</div>
									<div>
										<div className="font-semibold">Horário de Atendimento</div>
										<div className="text-gray-600">
											24 horas, 7 dias por semana
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Atendimento Rápido</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<Button className="w-full bg-green-600 hover:bg-green-700">
									💬 Falar no WhatsApp
								</Button>
								<Button variant="outline" className="w-full">
									📞 Ligação Imediata
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
