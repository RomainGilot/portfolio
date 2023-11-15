import { ArrowRightIcon } from '@heroicons/react/24/outline'


function Box({img, title, message, projectName}) {
    return(
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={img} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                    <a href="/projets/portfolio" className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">{title}</p>
                        <p className="mt-3 text-base text-gray-500">{message}</p>
                    </a>
                    </div>
                </div>
                <div className="mt-5 flex items-center mb-5 ms-5 gap-x-6">
                    <a
                        href={`projets/${projectName}`}
                        className="rounded-md flex bg-[#62B9CB] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5FACD3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                    >
                        <ArrowRightIcon height={20} className='me-3'/>
                        En savoir plus
                    </a>
                    </div>
                </div>
    )
}

export default Box;