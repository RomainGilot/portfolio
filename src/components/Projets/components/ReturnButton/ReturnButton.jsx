import { ArrowLeftIcon } from '@heroicons/react/24/outline'


function ReturnButton() {
    return (
        <>
            <a
                href="/"
                className="rounded-md w-32 flex bg-[#62B9CB] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5FACD3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
                <ArrowLeftIcon height={20} className='me-3'/>
                RETOUR
            </a>
        </>
    )
}

export default ReturnButton;