import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		setIsMenuOpen(false);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<header className="bg-white shadow-lg fixed w-full top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<Button
						variant="ghost"
						className="p-0 hover:bg-transparent"
						onClick={() => scrollToSection("home")}
					>
						<div className="flex items-center">
							<div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
								<span className="text-white font-bold text-lg">M</span>
							</div>
							<span className="ml-2 text-xl font-bold text-gray-800">
								Mudanças Espinosa
							</span>
						</div>
					</Button>

					{/* Desktop Navigation com shadcn */}
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList className="space-x-2">
							<NavigationMenuItem>
								<NavigationMenuLink
									className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
									onClick={() => scrollToSection("home")}
								>
									Início
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
									onClick={() => scrollToSection("servicos")}
								>
									Serviços
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
									onClick={() => scrollToSection("sobre")}
								>
									Sobre
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
									onClick={() => scrollToSection("depoimentos")}
								>
									Depoimentos
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
									onClick={() => scrollToSection("contato")}
								>
									Contato
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

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
							<Button
								variant="ghost"
								className="justify-start text-gray-600 hover:text-blue-600 font-medium"
								onClick={() => scrollToSection("home")}
							>
								Início
							</Button>
							<Button
								variant="ghost"
								className="justify-start text-gray-600 hover:text-blue-600 font-medium"
								onClick={() => scrollToSection("servicos")}
							>
								Serviços
							</Button>
							<Button
								variant="ghost"
								className="justify-start text-gray-600 hover:text-blue-600 font-medium"
								onClick={() => scrollToSection("sobre")}
							>
								Sobre
							</Button>
							<Button
								variant="ghost"
								className="justify-start text-gray-600 hover:text-blue-600 font-medium"
								onClick={() => scrollToSection("depoimentos")}
							>
								Depoimentos
							</Button>
							<Button
								variant="ghost"
								className="justify-start text-gray-600 hover:text-blue-600 font-medium"
								onClick={() => scrollToSection("contato")}
							>
								Contato
							</Button>
							<Button className="w-full">Solicitar Orçamento</Button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
