import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      } else {
        setSubmitMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setSubmitMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          Maple Properties - Transforming Dilapidated Properties Into
          High-Quality Homes
        </title>
        <meta
          name="description"
          content="Maple Properties is a family-run property investment company buying rundown properties across the UK for refurbishment and long-term letting."
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/maple-logo.png"
                alt="Maple Prop Logo"
                width={120}
                height={40}
                className="h-22 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#what-we-buy"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  What We Buy
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#what-we-buy"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  What We Buy
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[50vh]">
        {/* Background Image with Family */}
        <div className="absolute inset-0">
          <Image
            src="/maple-hero.jpeg"
            alt="Family walking in nature"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[40vh]">
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
                A Family-run property building company carrying out projects all
                over England.
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-200 font-light">
                Over 30 years experience buying and renovating
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base"
                >
                  See Our Work
                </a>
              </div>
            </div>

            {/* Right side - Empty for single column layout */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="/icon-everything-144.png"
                  alt="Everything in one place"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Everything in one place
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Maple Properties is led by father and daughter duo Andre and
                Karina Savoie. With over 30 years of hands-on building
                experience and a passion for thoughtful design, we specialise in
                giving neglected properties a new lease of life. From
                fire-damaged terraces to unloved apartments, we turn problems
                into beautiful homes.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="/icons-family.png"
                  alt="Family expertise"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Family expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We combine experienced local knowledge with smart tools and
                transparent pricing. Whether you're selling your first property
                or upgrading to your next, we're here to help you move forward
                with ease and speed.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="/icons-property.png"
                  alt="Property investment reimagined"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Property investment reimagined
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This isn't property investment the old way. It's transforming
                neglected properties into beautiful homes, reimagined for
                today's market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#FF9100" }}
            >
              Family Values. Professional Results.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a family-owned property company with a big vision: to
              restore and retain unloved buildings across the UK.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Andre Savoie
                </h3>
                <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-md mb-4">
                  FOUNDER AND DIRECTOR
                </div>
                <div className="border-t border-dashed border-gray-300 mb-4"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Andre has worked in UK construction for over 30 years. He
                  brings deep technical knowledge, practical site experience and
                  an ability to see potential where others see problems.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Karina Savoie
                </h3>
                <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-md mb-4">
                  PROJECT MANAGER
                </div>
                <div className="border-t border-dashed border-gray-300 mb-4"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Karina is a creative force with interests spanning project
                  management, architecture and interior design.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <p className="text-2xl font-serif text-gray-900 leading-relaxed mb-6">
                    Together, Andre and Karina manage every project from
                    purchase to refurbishment to onward sale or letting.
                  </p>
                  <div className="border-t border-gray-300 w-16 mb-2"></div>
                </div>

                <div className="relative">
                  <Image
                    src="/success-image.jpeg"
                    alt="Urban landscape success story"
                    width={500}
                    height={400}
                    className="w-full h-80 object-cover rounded-[60px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Buy Section */}
      <section
        id="what-we-buy"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#FF9100" }}
            >
              We Buy Houses with Great Potential
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  1
                </span>
                We're actively seeking:
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Unmodernised or dilapidated residential houses</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Bungalows in need of full refurbishment or extension
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Blocks of flats (vacant or part-tenanted)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Mixed-use properties (e.g. shops with upper parts)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  2
                </span>
                We specialise in buying properties with issues such as:
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Structural movement or subsidence</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Fire damage</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Damp and roof problems</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                We're cash buyers and can complete in as little as 7 days. If
                you're looking for a reliable, no-nonsense sale – we can help.
              </p>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Got a property to sell? Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gray-100 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#FF9100" }}
            >
              A Selection of Our Recent Refurbishments
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Broadstairs bungalow extension"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-600/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Broadstairs, Kent
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  Bungalow Extension & Refurbishment
                </p>
                <p className="text-gray-700 text-sm">
                  A tired 2-bed bungalow extended into a spacious 3-bed family
                  home with new kitchen-diner, rewire, and full external
                  landscaping.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Southampton detached house refurbishment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Southampton
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  Detached House Refurbishment
                </p>
                <p className="text-gray-700 text-sm">
                  A large vacant house suffering from neglect. Full strip-out,
                  structural repairs, internal redesign and modernisation.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Coventry semi-detached refurbishment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-600/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Coventry
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  Semi-Detached 3-Bed Refurbishment
                </p>
                <p className="text-gray-700 text-sm">
                  Former rental with fire damage and damp issues. Completed
                  rewire, new roof, and interior fit-out to high rental
                  standard.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Nottingham apartment block overhaul"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-600/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nottingham
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  Apartment Block Overhaul
                </p>
                <p className="text-gray-700 text-sm">
                  A neglected 6-unit block with part-vacancy and anti-social
                  behaviour issues. Renovated and relet to working
                  professionals.
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Cambridgeshire cottage refurbishment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-600/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cambridgeshire
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  Cottage Refurbishment
                </p>
                <p className="text-gray-700 text-sm">
                  Quaint but crumbling. Repaired structural movement, exposed
                  original features, added insulation and restored charm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#FF9100" }}
            >
              Let's Talk
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a property to sell or just want a chat about what's possible?
              Get in touch directly – we're always happy to talk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitMessage.includes("Thank you")
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:info@mapleproperties.co.uk"
                      className="text-gray-700 hover:text-green-600"
                    >
                      info@mapleproperties.co.uk
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href="tel:01234567890"
                      className="text-gray-700 hover:text-green-600"
                    >
                      01234 567890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl shadow-xl border border-orange-200/50">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Why Choose Maple Properties?
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span>Cash buyers - quick completion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span>30+ years of construction experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span>Family-run business with personal touch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span>Portfolio of 50+ successful projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-12 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                Maple Properties
              </h3>
              <p className="text-gray-300">
                Family-run property investment company carrying out projects all
                over England.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-green-400"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#what-we-buy"
                    className="text-gray-300 hover:text-green-400"
                  >
                    What We Buy
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-green-400"
                  >
                    Our Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-green-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Email: info@mapleproperties.co.uk</p>
                <p>Phone: 01234 567890</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Maple Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
