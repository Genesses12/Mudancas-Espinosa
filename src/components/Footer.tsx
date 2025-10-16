import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo e Descrição */}
					<div className="space-y-4">
						<div className="flex items-center">
							<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
								<span className="text-white font-bold">M</span>
							</div>
							<span className="ml-2 text-xl font-bold">Mudanças Espinosa</span>
						</div>
						<p className="text-gray-300 leading-relaxed">
							Sua mudança com segurança, agilidade e preço justo. Mais de 10
							anos de experiência no mercado.
						</p>
						<Button
							variant="outline"
							className="border-gray-600 text-white hover:bg-gray-800"
						>
							📞 Ligar Agora
						</Button>
					</div>

					{/* Serviços */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Serviços</h3>
						<ul className="space-y-2 text-gray-300">
							<li className="hover:text-white cursor-pointer transition-colors">
								🏠 Mudanças Residenciais
							</li>
							<li className="hover:text-white cursor-pointer transition-colors">
								🏢 Mudanças Comerciais
							</li>
							<li className="hover:text-white cursor-pointer transition-colors">
								🚚 Mudanças Interestaduais
							</li>
							<li className="hover:text-white cursor-pointer transition-colors">
								📦 Embalagem Profissional
							</li>
						</ul>
					</div>

					{/* Links Rápidos */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
						<ul className="space-y-2 text-gray-300">
							<li>
								<a href="#home" className="hover:text-white transition-colors">
									🏠 Início
								</a>
							</li>
							<li>
								<a
									href="#servicos"
									className="hover:text-white transition-colors"
								>
									🛠️ Serviços
								</a>
							</li>
							<li>
								<a href="#sobre" className="hover:text-white transition-colors">
									ℹ️ Sobre
								</a>
							</li>
							<li>
								<a
									href="#contato"
									className="hover:text-white transition-colors"
								>
									📞 Contato
								</a>
							</li>
						</ul>
					</div>

					{/* Contato */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Contato</h3>
						<ul className="space-y-3 text-gray-300">
							<li className="flex items-center space-x-2">
								<span>📞</span>
								<span>(11) 9999-9999</span>
							</li>
							<li className="flex items-center space-x-2">
								<span>📧</span>
								<span>contato@mudancasespinosa.com</span>
							</li>
							<li className="flex items-center space-x-2">
								<span>🕒</span>
								<span>24h por dia</span>
							</li>
							<li className="flex items-center space-x-2">
								<span>📍</span>
								<span>São Paulo, SP</span>
							</li>
						</ul>
					</div>
				</div>

				<Separator className="my-8 bg-gray-700" />

				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<div className="text-gray-300 text-center md:text-left">
						<p>&copy; 2024 Mudanças Espinosa. Todos os direitos reservados.</p>
					</div>

					<div className="flex space-x-4">
						<Button
							variant="ghost"
							size="sm"
							className="text-gray-300 hover:text-white"
						>
							📘 Facebook
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="text-gray-300 hover:text-white"
						>
							📷 Instagram
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="text-gray-300 hover:text-white"
						>
							💼 LinkedIn
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}
