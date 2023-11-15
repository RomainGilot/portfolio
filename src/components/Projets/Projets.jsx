import { ArrowRightIcon } from '@heroicons/react/24/outline'
import imgPortfolio from "../../images/portfolio.png"

function Projets() {
    return(
        <>
                
            <div className="bg-gray-50 mt-24 p-10 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">Mes projets</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">J'ai réalisé quelques projets, regardez les !</p>
                    
                    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={imgPortfolio} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                <a href="/projets/portfolio" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">Portfolio</p>
                                    <p className="mt-3 text-base text-gray-500">Ce projet est le site sur lequel vous vous trouvez actuellement ! Bonne visite :)</p>
                                </a>
                                </div>
                            </div>
                            <div className="mt-5 flex items-center mb-5 ms-5 gap-x-6">
                                <a
                                    href="/projets/portfolio"
                                    className="rounded-md flex bg-[#62B9CB] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5FACD3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                                >
                                    <ArrowRightIcon height={20} className='me-3'/>
                                    En savoir plus
                                </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projets;