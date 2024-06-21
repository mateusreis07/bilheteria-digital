import Link from "next/link";


const Header2 = () => {
  return (
<header className="pb-6 bg-white lg:pb-0 shadow-md">
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
        {/*<!-- lg+ -->*/}
        <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                <p className="text-xl font-extrabold p-2 mr-4">Ingressos Online</p>
                    {/*<img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />*/}
                </a>
            </div>
<div className="grow max-lg:hidden pr-20">
        <form className="ml-1 mr-4">
            <input
              type='text'
              placeholder='Buscar eventos'
              className='w-full h-11 rounded-lg p-2 border border-gray-400 text-black shadow-md outline-none focus:border focus:border-blue-600 focus:shadow-lg'
            />
        </form>
</div>

            <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                {/*<!-- Menu open: "hidden", Menu closed: "block" -->*/}
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

                {/*<!-- Menu open: "block", Menu closed: "hidden" -->*/}
                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <Link href="/eventos/criar" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    Crie seu Evento
                </Link>
                <Link href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    Acessar Conta
                </Link>
            </div>

            <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Cadastre-se </a>
        </nav>

        {/*<!-- xs to lg -->*/}
<div className="grow pt-2 pb-2 bg-white rounded-md lg:hidden">
        <form className="">
            <input
              type='text'
              placeholder='Buscar eventos'
              className='w-full h-11 rounded-lg p-2 border border-gray-400 text-black shadow-md outline-none focus:border focus:border-blue-600 focus:shadow-lg'
            />
        </form>
</div>
        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">

                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Crie seu Evento </a>

                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Acessar Conta </a>
                </div>
            </div>

            <div className="px-6 mt-6">
                <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Cadastre-se </a>
            </div>
        </nav>
    </div>
</header>

  );
}

export default Header2;
