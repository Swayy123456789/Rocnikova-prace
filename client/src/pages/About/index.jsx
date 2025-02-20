import { Link } from 'react-router-dom'
import Header from "../../components/Header/index";


import React from 'react'

export default function About() {
  return (
    <>
    
    <Header />


    <section className="bg-white py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">O nás</h1>
                <p className="mt-4 text-lg text-gray-600">Jsme váš spolehlivý partner pro kvalitní hodinky. Nabízíme široký výběr elegantních a moderních časoměřičů pro každou příležitost.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold text-gray-800">Kdo jsme?</h2>
                    <p className="text-lg text-gray-700">Naše vášeň pro hodinky nás vedla k vytvoření této online platformy, kde můžete najít nejlepší kousky od renomovaných značek. Naším cílem je nabídnout vám nejen krásný design, ale i špičkovou kvalitu a funkčnost. Naší vizí je, aby každý, kdo navštíví náš eshop, našel hodinky, které dokonale ladí s jeho osobností.</p>
                    <p className="text-lg text-gray-700">Věříme v individuální přístup, a proto se snažíme každému zákazníkovi poskytnout tu nejlepší zkušenost s nákupem, ať už hledáte hodinky pro sebe, nebo jako dárek pro své blízké.</p>
                </div>

                
                <div className="relative">
                    <img src="https://via.placeholder.com/500x500.png?text=Hodinky" alt="Hodinky" className="rounded-lg shadow-lg w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                        <span className="text-4xl font-semibold text-white">Váš čas začíná zde</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Proč si vybrat nás?</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-500 text-white p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Kvalitní hodinky</h3>
                            <p className="text-gray-600">Naše hodinky jsou pečlivě vybírány a testovány pro jejich dlouhou životnost a přesnost.</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="bg-green-500 text-white p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v12l7-4 7 4V3"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Doprava zdarma</h3>
                            <p className="text-gray-600">Při objednávkách nad určitou částku vám nabízíme dopravu zdarma.</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="bg-purple-500 text-white p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Rychlá a jednoduchá výměna</h3>
                            <p className="text-gray-600">Pokud s hodinkami nejste spokojeni, nabízíme snadnou výměnu nebo vrácení zboží.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </>
  )
}
