import Footer from "../../components/common/Footer";

export default function Error() {
  return (
    <>
      <div className="mx-auto py-20 sm:py-40 particles-line z-1 text-center">
        <h2 className="text-base font-semibold bg-[#fceaea] rounded p-1 text-[#d35f5f] inline-block mb-10">Mince, une erreur a eu lieu !</h2>
        <h1 className="text-5xl font-bold tracking-tight text-sky-950 sm:text-7xl mb-20">Cette page n'existe pas...</h1>
        <a href="/" className="rounded-md bg-[#d35f5f] hover:bg-[#ae4c4c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
          Revenez en arrière
        </a>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}
