function GeneralInfo({name, year}) {
    return (
        <>
            <h1 className="text-3xl font-bold mt-5  text-sky-950">{name}</h1>
            <h2 className="text-xl text-gray-400 font-light mt-3">{year}</h2>
        </>
    )
}

export default GeneralInfo;