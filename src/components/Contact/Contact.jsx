function Contact() {
  return (
    <>
      <div className="py-24 bg-white" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">
            Me contacter
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
            Vous souhaitez me contacter ?
          </p>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <div className="flex items-center ms:mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-[#62B9CB] inline-block"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
              <div className="ms-10 flex max-w-xs flex-col gap-y-4">
                <a
                  href="mailto:ro.gilot@icloud.fr"
                  className="text-2xl  tracking-tight text-gray-900"
                >
                  ro.gilot@icloud.fr
                </a>
                <dd className="order-first text-gray-600">Email</dd>
              </div>
            </div>
            <div className="flex items-center ms:mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-[#62B9CB] inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <div className="ms-10 flex max-w-xs flex-col gap-y-4">
                <a href="" className="text-2xl  tracking-tight text-gray-900">
                  www.romain-gilot.fr
                </a>
                <dd className="order-first text-gray-600">Site web</dd>
              </div>
            </div>
            <div className="flex items-center ms:mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-[#62B9CB] inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div className="ms-10 flex max-w-xs flex-col gap-y-4">
                <dt className="text-2xl  tracking-tight text-gray-900">
                  Metz, France
                </dt>
                <dd className="text-gray-600 order-first">Lieu</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
export default Contact;
