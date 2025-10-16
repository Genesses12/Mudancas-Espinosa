import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-lg fixed w-full top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<div className="flex items-center">
						<div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
							<span className="text-white font-bold text-lg">M</span>
						</div>
						<span className="ml-2 text-xl font-bold text-gray-800">
							Mudanças Espinosa
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						<a
							href="#home"
							className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
						>
							Início
						</a>
						<a
							href="#servicos"
							className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
						>
							Serviços
						</a>
						<a
							href="#sobre"
							className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
						>
							Sobre
						</a>
						<a
							href="#depoimentos"
							className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
						>
							Depoimentos
						</a>
						<a
							href="#contato"
							className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
						>
							Contato
						</a>
					</nav>

					{/* CTA Button */}
					<Button className="hidden md:flex">Solicitar Orçamento</Button>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<div className="space-y-1">
							<div className="w-6 h-0.5 bg-gray-600"></div>
							<div className="w-6 h-0.5 bg-gray-600"></div>
							<div className="w-6 h-0.5 bg-gray-600"></div>
						</div>
					</Button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t">
						<nav className="flex flex-col space-y-4">
							<a
								href="#home"
								className="text-gray-600 hover:text-blue-600 font-medium"
							>
								Início
							</a>
							<a
								href="#servicos"
								className="text-gray-600 hover:text-blue-600 font-medium"
							>
								Serviços
							</a>
							<a
								href="#sobre"
								className="text-gray-600 hover:text-blue-600 font-medium"
							>
								Sobre
							</a>
							<a
								href="#depoimentos"
								className="text-gray-600 hover:text-blue-600 font-medium"
							>
								Depoimentos
							</a>
							<a
								href="#contato"
								className="text-gray-600 hover:text-blue-600 font-medium"
							>
								Contato
							</a>
							<Button className="w-full">Solicitar Orçamento</Button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
