"use client";

import { useState } from "react";
import Image from "next/image";
import 'animate.css';
import Head from "next/head";
import Link from "next/link";

export default function Home() {

	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false); // Estado del menú móvil

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.scrollY > 50) { // Cambia el valor según cuando quieras que cambie
	// 			setScrolled(true);
	// 		} else {
	// 			setScrolled(false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	const handleNavClick = (id) => (e) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			const navHeight = 100; // altura de tu nav
			const y = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
		setMenuOpen(false);
	};

	return (
		<div className="flex flex-col max-w-[2560px] mx-auto font-montserrat">
			<Head>
				<title>Transportes Danfer | Transporte confiable en México</title>
				<meta name="description" content="Ofrecemos soluciones de transporte confiables y seguras para todo tipo de mercancías en México." />
				<meta name="keywords" content="transporte, logística, paquetería, envíos, México" />
				<meta name="author" content="Transportes Danfer" />
				<link rel="canonical" href="https://www.transportesdanfer.com/" />
			</Head>
			{/* <nav className={`fixed top-0 left-0 w-full transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"} z-50`}> */}
			<nav className={`fixed top-0 left-0 w-full transition-colors duration-300 bg-sky-700 shadow-md z-50`}>
				<div className="max-w-[2560px] w-[95%] mx-auto h-[100px] px-4 py-2 hidden md:flex justify-between items-center text-white">
					<span className="uppercase italic font-bold text-[2rem]">Transportes Danfer</span>
					<ul className="flex space-x-1">
						{["inicio", "servicios", "beneficios", "nosotros", "operacion", "contacto"].map(
							(section) => (
								<li key={section}>
									<a
										href={`#${section}`}
										onClick={handleNavClick(section)}
										className="hover:text-white text-[1.2rem] font-bold hover:ring-2 ring-white-500 px-4 py-4 rounded-md"
									>
										{section.charAt(0).toUpperCase() + section.slice(1)}
									</a>
								</li>
							)
						)}
					</ul>
				</div>
				{/* Menú Móvil */}
				{menuOpen && (
					<div className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg flex flex-col p-8 space-y-6 z-50">
						{["inicio", "servicios", "beneficios", "nosotros", "operacion", "contacto"].map(
							(section) => (
								<a
									key={section}
									href={`#${section}`}
									onClick={handleNavClick(section)}
									className="text-[1.5rem] font-bold px-4 text-center py-2 rounded-md hover:bg-sky-700 hover:text-white animate__animated animate__fadeInRight"
								>
									{section.charAt(0).toUpperCase() + section.slice(1)}
								</a>
							)
						)}
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="mt-auto bg-sky-700 text-white py-2 px-8 rounded-sm hover:bg-sky-700 uppercase font-bold shadow-lg animate__animated animate__fadeInRight"
						>
							Cerrar
						</button>
					</div>
				)}
			</nav>
			<header
				className="w-full flex md:h-[1000px]  md:mt-[100px] md:bg-[url('/img/banner-wall-3.png')] bg-cover bg-center"
				id="inicio"
			// style={{
			// 	backgroundImage: "url('/img/banner-wall-1.jpg')",
			// 	backgroundSize: "cover",
			// 	backgroundPosition: "left",
			// }}
			>
				<div className="w-full flex justify-start items-start">
					<div className=" w-[60%] hidden md:flex flex-col gap-2 p-2 md:py-8 md:px-14 text-white mt-[70px]">
						<h1 className="text-5xl font-extrabold italic animate__animated animate__fadeInUp text-shadow-lg">Tu aliado logístico</h1>
						<h1 className="text-5xl font-extrabold italic animate__animated animate__fadeInRight text-shadow-lg">de <span className="text-sky-700">transporte confiable</span> </h1>
						<h1 className="text-5xl font-extrabold italic animate__animated animate__fadeInLeft">en todo México</h1>
						<h1 className="mt-10 text-[2rem] font-semibold animate__animated animate__fadeIn">En <span className="text-sky-700 font-extrabold italic animate__animated animate__fadeIn fontro">Transportes Danfer</span>, conectamos cada rincón de México con soluciones de transporte confiables y a la medida de tus necesidades. Contamos con servicio público federal, así como servicio exprés local y foráneo a nivel nacional, garantizando seguridad, calidad y puntualidad en cada envío. </h1>
						<div className="mt-14 animate__animated animate__fadeInUp">
							<button
								className="bg-green-500 text-white py-2 px-8 rounded-full hover:bg-green-700 uppercase font-bold"
								onClick={handleNavClick("contacto")}
							>solicita tu cotizacion</button>
						</div>
					</div>
					<div className="w-[90%] flex md:hidden flex-col gap-2 py-8">
						<div className="flex justify-end mb-[50px] mt-4">
							<button
								onClick={() => setMenuOpen(!menuOpen)}
								className="bg-sky-700 text-white py-2 px-4 rounded-sm hover:bg-sky-700 uppercase font-bold shadow-lg transition-all"
							>
								<Image
									src="/img/menu-icon.png"
									alt="Danfer"
									width={300}
									height={200}
									objectFit="cover"
									className="w-[25px] h-auto"
								/>
							</button>
						</div>
						<div className="flex justify-center items-center">
							{/* <Image
								src="/img/logo-nav.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="w-[400px] h-auto mb-[100px]"
							/> */}
							<span className="text-[2rem] font-extrabold">Transportes Danfer</span>
						</div>
						<h1 className="text-[1.6rem] font-extrabold text-center animate__animated animate__fadeIn italic">Tu aliado logístico <span className="text-sky-700 animate__animated animate__fadeIn">transporte confiable</span> en todo México </h1>
						<h1 className="mt-6 text-center text-[1.2rem] animate__animated animate__fadeIn italic">En <span className="text-sky-700 font-extrabold">Transportes Danfer</span>, conectamos cada rincón de México con soluciones de transporte confiables y a la medida de tus necesidades. Contamos con servicio público federal, así como servicio exprés local y foráneo a nivel nacional, garantizando seguridad, calidad y puntualidad en cada envío.</h1>
						<div className="mt-6 flex justify-center items-center animate__animated animate__fadeInUp">
							<button
								className="bg-green-600 text-white py-2 px-8 rounded-full hover:bg-green-700 uppercase font-bold shadow-lg"
								onClick={handleNavClick("contacto")}
							>Solicita tu cotizacion</button>
						</div>
					</div>
				</div>
			</header>
			<main>

				{/* Servicios */}
				<section id="servicios" className="flex flex-col w-[90%] mx-auto my-10">
					<div className="">
						<h1 className="text-[2.5rem] font-bold mb-4 inline border-b-6 border-sky-700 italic">Servicios</h1>
					</div>
					<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="w-full flex flex-col justify-start items-center py-12">
							<Image
								src="/img/servicios-1.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="rounded-lg mb-4 shadow-lg w-auto h-[400px] animate__animated animate__fadeIn"
							/>
							<div className="flex flex-col w-full justify-center items-center">
								<h3 className="text-[1.3rem] font-bold mt-4 text-center">Envíos exprés</h3>
								<h4 className="text-[1.1rem] mt-2 text-center">Porque tu tiempo vale: entregas rapidas, seguras y siempre puntuales.</h4>
							</div>
						</div>
						<div className="w-full flex flex-col justify-start items-center py-12">
							<Image
								src="/img/servicios-2.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="rounded-lg mb-4 shadow-lg w-auto h-[400px]  animate__animated animate__fadeIn"
							/>
							<div className="flex flex-col w-full justify-center items-center">
								<h3 className="text-[1.3rem] font-bold mt-4 text-center">Servicios de paquetería pesada</h3>
								<h4 className="text-[1.1rem] mt-2 text-center">Movemos lo otros no pueden para todo el pais.</h4>
							</div>
						</div>
						<div className="w-full flex flex-col justify-start items-center py-12">
							<Image
								src="/img/servicios-3.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="rounded-lg mb-4 shadow-lg w-auto h-[400px]  animate__animated animate__fadeIn"
							/>
							<div className="flex flex-col w-full justify-center items-center">
								<h3 className="text-[1.3rem] font-bold mt-4 text-center">Rastreo en tiempo real</h3>
								<h4 className="text-[1.1rem] mt-2 text-center">Tu envio bajo control monitorea cada etapa con total transporencia y confianza.</h4>
							</div>
						</div>
						<div className="w-full flex flex-col justify-start items-center py-12">
							<Image
								src="/img/servicios-4.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="rounded-lg mb-4 shadow-lg w-auto h-[400px]  animate__animated animate__fadeIn"
							/>
							<div className="flex flex-col w-full justify-center items-center">
								<h3 className="text-[1.3rem] font-bold mt-4 text-center">Recolección en múltiples puntos</h3>
								<h4 className="text-[1.1rem] mt-2 text-center">Nos adaptamos a ti: recolectamos tu mercancia en diferentes ubicaciones con flexibilidad y eficiencia.</h4>
							</div>
						</div>
					</div>
				</section>

				{/* Beneficios movil  */}
				<section id='beneficios-movil' className="flex md:hidden flex-col w-[90%] mx-auto my-10">
					<div className="">
						<h1 className="text-[2.5rem] font-bold mb-4 inline border-b-6 border-sky-700 italic">Beneficios</h1>
					</div>

					<div className="w-full flex justify-center items-center">
						{/* Círculo central */}

						<div className="flex flex-col justify-center items-center gap-10">

							<div className="w-[90%] p-8">
								<div className="flex flex-col justify-center items-center">
									<div className="flex justify-center items-center">
										<Image
											src="/img/beneficios-icon-1.png"
											alt="Danfer"
											width={300}
											height={200}
											objectFit="cover"
											className=" w-[125px] h-auto p-4"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-center gap-4 mt-4">
										<p className="text-[1.2rem] text-gray-700 font-bold">Cobertura y tiempo de entrega</p>
										<p className="text-gray-600 text-[.9rem] text-center">Garantizamos entregas confiables en todo el territorio nacional, destacándonos por la agilidad en nuestro servicio, la puntualidad de cada envío y la seguridad que brindamos a cada cliente en cada entrega.</p>
									</div>
								</div>
							</div>

							<div className="w-[90%] p-8">
								<div className="flex flex-col justify-center items-center">
									<div>
										<Image
											src="/img/beneficios-icon-2.png"
											alt="Danfer"
											width={300}
											height={200}
											objectFit="cover"
											className="w-[125px] h-auto p-4"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-center gap-4 mt-4">
										<p className="text-[1.2rem] text-gray-700 font-bold text-center">Excelentes tarifas para diferentes tipo de carga</p>
										<p className="text-gray-600 text-[.9rem] text-center">Nos adaptamos a cada necesidad de transporte, desde cargas pequeñas hasta grandes volúmenes, ofreciendo soluciones accesibles y confiables que garantizan ahorro, eficiencia y la mejor experiencia para nuestros clientes.</p>
									</div>
								</div>
							</div>

							<div className="w-[90%] p-8">
								<div className="flex flex-col justify-center items-center">
									<div>
										<Image
											src="/img/beneficios-icon-3.png"
											alt="Danfer"
											width={300}
											height={200}
											objectFit="cover"
											className="w-[125px] h-auto p-4"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-center gap-4 mt-4">
										<p className="text-[1.2rem] text-gray-700 font-bold">Garantia de entrega</p>
										<p className="text-gray-600 text-[.9rem] text-center">Cada envío está protegido con procesos rigurosos y personal altamente capacitado, asegurando confianza total en el traslado y cumplimiento puntual de cada entrega, con atención dedicada a la satisfacción del cliente.</p>
									</div>
								</div>
							</div>

							<div className="w-[90%] p-8">
								<div className="flex flex-col justify-center items-center">
									<div>
										<Image
											src="/img/beneficios-icon-4.png"
											alt="Danfer"
											width={300}
											height={200}
											objectFit="cover"
											className="w-[125] h-auto p-4"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-center gap-4 mt-4">
										<p className="text-[1.2rem] text-gray-700 font-bold">Atencion personalizada</p>
										<p className="text-gray-600 text-[.9rem] text-center">Nuestro equipo acompaña a cada cliente con un servicio cercano y adaptado a sus necesidades, ofreciendo soluciones confiables y un trato especializado que impulsa relaciones sólidas con negocios y organizaciones.</p>
									</div>
								</div>
							</div>



						</div>

					</div>
				</section>

				{/* Beneficios web  */}
				<section id='beneficios' className="hidden md:flex flex-col w-full md:w-[90%] mx-auto my-10">
					<div className="">
						<h1 className="text-[2.5rem] font-bold mb-4 inline border-b-6 border-sky-700 italic">Beneficios</h1>
					</div>

					<div className="w-full h-[900px] flex justify-center items-center">
						{/* Círculo central */}
						<div
							className="w-[500px] h-[500px] bg-gray-800 rounded-full shadow-lg shadow-sky-700 ring-4 ring-sky-700 animate__animated animate__fadeIn"
							style={{
								backgroundImage: "url('/img/beneficios-img.png')",
								backgroundSize: "cover",
								backgroundPosition: "center"
							}}
						>
						</div>

						<div className="flex flex-col gap-12">
							<div className="max-w-[700px] p-4 rounded">
								<div className="flex">
									<div className="w-[120px] h-auto">
										<Image
											src="/img/beneficios-icon-1.png"
											alt="Danfer"
											width={300}
											height={200}
											objectFit="cover"
											className="w-auto h-auto p-4 animate__animated animate__fadeInLeft"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-start ml-8 animate__animated animate__fadeInRight">
										<p className="text-[1.2rem] text-gray-700 font-bold">Cobertura y tiempo de entrega</p>
										<p className="text-gray-600 text-[.9rem]">Garantizamos entregas confiables en todo el territorio nacional, destacándonos por la agilidad en nuestro servicio, la puntualidad de cada envío y la seguridad que brindamos a cada cliente en cada entrega.</p>
									</div>
								</div>
							</div>

							<div className="max-w-[700px] p-4 rounded ml-28">
								<div className="flex">
									<div className="w-[120px] h-auto">
										<Image
											src="/img/beneficios-icon-2.png"
											alt="Danfer"
											width={300}
											height={200}
											objectFit="cover"
											className="w-auto h-auto p-4 animate__animated animate__fadeInLeft"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-start ml-8 animate__animated animate__fadeInRight">
										<p className="text-[1.2rem] text-gray-700 font-bold">Excelentes tarifas para diferentes tipo de carga</p>
										<p className="text-gray-600 text-[.9rem]">Nos adaptamos a cada necesidad de transporte, desde cargas pequeñas hasta grandes volúmenes, ofreciendo soluciones accesibles y confiables que garantizan ahorro, eficiencia y la mejor experiencia para nuestros clientes.</p>
									</div>
								</div>
							</div>

							<div className="max-w-[700px] p-4 rounded ml-28">
								<div className="flex">
									<div className="w-[120px] h-auto">
										<Image
											src="/img/beneficios-icon-3.png"
											alt="Danfer"
											width={300}
											height={200}
											objectFit="cover"
											className="w-auto h-auto p-4 animate__animated animate__fadeInLeft"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-start ml-8 animate__animated animate__fadeInRight">
										<p className="text-[1.2rem] text-gray-700 font-bold">Garantia de entrega</p>
										<p className="text-gray-600 text-[.9rem]">Cada envío está protegido con procesos rigurosos y personal altamente capacitado, asegurando confianza total en el traslado y cumplimiento puntual de cada entrega, con atención dedicada a la satisfacción del cliente.</p>
									</div>
								</div>
							</div>

							<div className="max-w-[700px] p-4 rounded">
								<div className="flex">
									<div className="w-[120px] h-auto">
										<Image
											src="/img/beneficios-icon-4.png"
											alt="Danfer"
											width={300}
											height={200}
											objectFit="cover"
											className="w-auto h-auto p-4 animate__animated animate__fadeInLeft"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-start ml-8 animate__animated animate__fadeInRight">
										<p className="text-[1.3rem] text-gray-700 font-bold">Atencion personalizada</p>
										<p className="text-gray-600 text-[.9rem]">Nuestro equipo acompaña a cada cliente con un servicio cercano y adaptado a sus necesidades, ofreciendo soluciones confiables y un trato especializado que impulsa relaciones sólidas con negocios y organizaciones.</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>



				{/* Nosotros */}
				<section id="nosotros" className="flex flex-col md:flex-row w-[90%] mx-auto gap-8 md:gap-4 my-10 p-10">
					<div className="w-full md:w-[65%]">
						<h1 className="text-[2.5rem] font-bold inline border-b-6 border-sky-700 italic">Nosotros</h1>
						<div className="w-full md:w-[90%] mt-10 text-center md:text-start ">
							<h4 className="text-[1.4rem] text-gray-900 mb-2 font-bold italic">En <span className="text-sky-700">Transporte Danfer</span>, no solo transportamos mercancías, también entregamos confianza, seguridad y puntualidad en cada ruta.</h4>
							<p className="text-[1.1rem] text-gray-700 mt-6">
								En transportes Danfer somo una empresa mexicana dedicada a ofrecer soluciones logísticas y de transportes confiable, segura y puntual en todo el pais. Con mas de 25 años de experencia, hemos construido una trayectoria basada en la honestidad, la responsabilidad y el compromiso con cada cliente. Nuestra flota moderna, junto con un equipo altamente capacitado, nos permite garantizar la calidad en cada envío.
								Nuestra misión es brindar cobertura logística a nivel nacional con altos estándares de calidad, actuando siempre con honradez, compromiso y confianza para convertirnos en la mejor opción de nuestros clientes en el manejo de sus bienes.
							</p>
							<p className="text-[1.1rem] text-gray-700 mt-4">
								Con la mirada puesta en el futuro, nuestra visión es ser la referencia en soluciones logísticas industriales en México, fortaleciendo cadenas de suministro con un servicio de excelencia y estándares superiores de seguridad y calidad.
							</p>
							<p className="text-[1.1rem] text-gray-700 mt-4">
								Nos definen valores sólidos: puntualidad, honestidad, responsabilidad, compromiso y confianza. A lo largo de nuestra trayectoria hemos trabajado con sectores estratégicos como el automotriz, energía de alta tensión, seguridad automotriz, fibra óptica y alimentos para consumo humano, adaptando nuestras soluciones a cada necesidad.
							</p>
						</div>
					</div>

					<div className="w-full md:w-[35%] flex justify-center items-center">
						<Image
							src="/img/nosotros-1.png"
							alt="Danfer"
							width={300}
							height={200}
							objectFit="cover"
							className="rounded-lg mb-4 shadow-lg w-[500px] h-auto"
						/>
					</div>
				</section>


				{/* Operacion */}
				<section id="operacion" className="flex flex-col w-[90%] mx-auto my-14">
					<div className="text-center">
						<h1 className="text-[2.5rem] font-bold inline border-b-6 border-sky-700 italic">Operación</h1>
						<h2 className="text-[1.2rem] font-bold italic text-center mt-10">Nuestro equipo gestiona cada operación con excelencia, asegurando envíos confiables y atención personalizada al cliente</h2>
						<h2 className="text-[1.1rem] font-bold italic text-center mt-2">Logística confiable y eficiente que asegura cada entrega puntual</h2>
					</div>

					<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-20 px-8">

						<div className="w-full flex flex-col justify-center items-center">
							<Image
								src="/img/operaciones-icon-1.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="w-[100px] h-auto p-2"
							/>
							<div className="flex flex-col w-full justify-center items-center py-2 px-2 md:px-16">
								<h3 className="text-center text-[1.1rem] font-bold mt-4">Recolección</h3>
								<h4 className="text-center text-[1rem] mt-2 text-gray-600">Nuestro servicio inicia con la recolección en el punto de origen, garantizando puntualidad y cuidado en cada paquete, adaptándonos a horarios y necesidades específicas de cada cliente.</h4>
							</div>
						</div>

						<div className="w-full flex flex-col justify-center items-center">
							<Image
								src="/img/operaciones-icon-2.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="w-[100px] h-auto p-2"
							/>
							<div className="flex flex-col w-full justify-center items-center py-2 px-2 md:px-16">
								<h3 className="text-center text-[1.1rem] font-bold mt-4">Rastreo en tiempo real</h3>
								<h4 className="text-center text-[1rem] mt-2 text-gray-600">Con nuestra tecnología, cada envío puede monitorearse minuto a minuto. Esto asegura transparencia, seguridad y confianza, permitiendo al cliente conocer siempre la ubicación de su mercancía.</h4>
							</div>
						</div>

						<div className="w-full flex flex-col justify-center items-center">
							<Image
								src="/img/operaciones-icon-3.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="w-[100px] h-auto p-2"
							/>
							<div className="flex flex-col w-full justify-center items-center py-2 px-2 md:px-16">
								<h3 className="text-center text-[1.1rem] font-bold mt-4">Proceso de entrega</h3>
								<h4 className="text-center text-[1rem] mt-2 text-gray-600">Finalizamos con un proceso de entrega seguro y eficiente, garantizando puntualidad y la integridad de cada paquete hasta el destino final, superando siempre las expectativas del cliente.</h4>
							</div>
						</div>



					</div>

				</section>


				{/* Cobertura del negocio */}

				<section id="cobertura" className="flex  md:bg-[url('/img/fondo-banner.png')] bg-cover bg-center">
					<div className="w-[90%] flex flex-col md:flex-row mx-auto gap-8 md:gap-4 my-10 p-10">
						<div className="w-full md:w-[65%]">
							<h1 className="text-[2.5rem] font-bold inline border-b-6 border-sky-700 italic">Cobertura</h1>
							<div className="w-full md:w-[80%] mt-10 text-center md:text-start ">
								<h4 className="text-[1.4rem] text-gray-900 mb-2 font-bold italic">Cobertura nacional para el transporte confiable de todo tipo de mercancías</h4>
								<p className="text-[1.1rem] text-gray-700 mt-6">
									Contamos con un completo parque vehicular, incluyendo unidades de 1, 1.5 y 3.5 toneladas, así como tipo van y camionetas de 3.5 toneladas, adaptadas a diversas necesidades logísticas. Cada vehículo está diseñado para garantizar eficiencia, seguridad y puntualidad en cada entrega, sin importar la distancia.
								</p>
								<p className="text-[1.1rem] text-gray-700 mt-4">
									Todo nuestro equipo es caja seca y cerrado, lo que asegura la protección total de tu mercancía durante el transporte. Esto nos permite mantener la calidad y condiciones óptimas de cada envío, cumpliendo con los más altos estándares de seguridad y confiabilidad para nuestros clientes.
								</p>
								<p className="text-[1.1rem] text-gray-700 mt-4">
									Operamos las 24 horas cubriendo prácticamente toda la República Mexicana, ofreciendo soluciones logísticas flexibles y confiables. Nuestro compromiso es entregar tus productos en tiempo y forma, respaldados por un servicio profesional que prioriza la seguridad, cuidado y satisfacción de cada cliente.
								</p>
							</div>
						</div>

						<div className="w-full md:w-[35%] flex justify-center items-center">
							<Image
								src="/img/cobertura-2.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="rounded-lg mt-8 shadow-lg w-[500px] h-auto"
							/>
						</div>
					</div>
				</section>

				{/* Banner de contacto */}
				<section id="contacto" className="flex flex-col w-full mx-auto py-[150px] bg-gray-950 p-4">
					<div className="text-center text-white">
						<h2 className="text-[2.5rem] font-bold italic">Conoce nuestro servicio de transporte</h2>
						<h2 className="text-[1.5rem] md:text-[2rem] font-semibold italic">mercancias y productos</h2>
					</div>
					<div className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-center gap-4 mt-12">
						<input
							type="text"
							placeholder="Escribe tu correo electrónico"
							className="border border-gray-300 py-2 px-4 w-[350px] rounded-full text-white *:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-700"
						/>
						<button className="bg-sky-700 text-white py-2 px-8 rounded-full hover:bg-sky-700 uppercase font-bold">contacto</button>
					</div>
					<div className="w-[80%] mx-auto text-center text-white mt-12">
						<h3 className="text-[1.3rem] font-bold italic">Estamos listos para contactarte y proporcionarte toda la información que necesitas sobre nuestros servicios.</h3>
					</div>

				</section>

			</main>
			<footer>
				<div className="flex flex-col w-full mx-auto py-[50px]">
					<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
						<div className="w-full hidden md:flex flex-col justify-center items-center p-6">
							<Image
								src="/img/logo-union.png"
								alt="Danfer"
								width={300}
								height={200}
								objectFit="cover"
								className="w-[250px] h-auto"
							/>
						</div>
						<div className="w-full flex flex-col justify-start items-start p-6">
							<h4 className="text-gray-950 font-bold">Escríbenos en</h4>

							{/* <div className="flex flex-row justify-center items-center gap-2 mt-4 pl-4">
								<Image
									src="/img/facebook.png"
									alt="Danfer"
									width={300}
									height={200}
									objectFit="cover"
									className="w-7 h-7"
								/>
								<a className="text-gray-950 font-bold text-lg">Facebook</a>
							</div> */}
							<div className="flex flex-row justify-center items-center gap-2 mt-4 pl-4">
								<Image
									src="/img/whatsapp.png"
									alt="Danfer"
									width={300}
									height={200}
									objectFit="cover"
									className="w-7 h-7"
								/>
								<a
									href="https://wa.me/5214448051867"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-950 font-bold text-lg"
								>
									WhatsApp
								</a>

								{/* <p className="text-gray-950 font-bold text-lg">Whats App</p> */}
							</div>
							{/* <div className="flex flex-row justify-center items-center gap-2 mt-4 pl-4">
								<Image
									src="/img/instagram.png"
									alt="Danfer"
									width={300}
									height={200}
									objectFit="cover"
									className="w-7 h-7"
								/>
								<p className="text-gray-950 font-bold text-lg">Instagram</p>
							</div> */}

						</div>
						<div className="w-full flex flex-col justify-start items-start p-6">
							<h4 className="text-gray-950 font-bold">Contactanos</h4>

							<div className="flex flex-row justify-center items-center gap-2 mt-4 pl-4">
								<Image
									src="/img/phone-icon.png"
									alt="Danfer"
									width={300}
									height={200}
									objectFit="cover"
									className="w-7 h-7"
								/>
								<p className="text-gray-950 font-bold text-lg">444 805 1867</p>
							</div>
							{/* <div className="flex flex-row justify-center items-center gap-2 mt-4 pl-4">
								<Image
									src="/img/phone-icon.png"
									alt="Danfer"
									width={300}
									height={200}
									objectFit="cover"
									className="w-7 h-7"
								/>
								<p className="text-gray-950 font-bold text-lg">444 1234 5678</p>
							</div> */}
						</div>

						<div className="w-full flex flex-col justify-start items-start p-6">
							<h4 className="text-gray-950 font-bold">Via correo electrónico</h4>

							{/* <div className="flex flex-row justify-center items-center gap-2 mt-4 pl-4">
								<Image
									src="/img/mail-icon.png"
									alt="Danfer"
									width={300}
									height={200}
									objectFit="cover"
									className="w-7 h-7"
								/>
								<Link
									href="mailto:soporte@tudominio.com?subject=Hola"
									className="text-gray-950 font-bold text-lg"
								>
									Enviar email
								</Link>
							</div> */}
							<div className="flex flex-row justify-center items-center gap-2 mt-4 pl-4">
								<Image
									src="/img/mail-icon.png"
									alt="Danfer"
									width={300}
									height={200}
									objectFit="cover"
									className="w-7 h-7"
								/>
								<p className="text-gray-950 font-bold text-lg">contacto@danfer.com</p>
							</div>
						</div>

					</div>
				</div>
				<div className="flex flex-col w-full mx-auto bg-gray-950 py-6">
					<p className="text-[.9rem] text-center text-white">
						&copy; 2025 Transportes Danfer. Todos los derechos reservados.
					</p>
				</div>
			</footer>
		</div>
	);
}
