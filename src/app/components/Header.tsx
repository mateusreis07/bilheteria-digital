import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 shadow-md mb-5">
      <div className='container mx-auto flex items-center text-white px-4 h-16'>
        <div className="text-xl font-bold p-2 mr-4">
          <Link href="/">
            <p>Ingressos Online</p>
          </Link>
        </div>
        <form>
          <div className='p-2'>
            <input
              type='text'
              placeholder='Buscar eventos'
              className='w-96 h-9 rounded-lg p-2 border-2 border-blue-200 text-black shadow-md outline-none focus:border-2 focus:border-white'
            />
          </div>
        </form>

        <nav className="flex items-center space-x-4 ml-auto">
          <Link href="/eventos/criar">
            <p className="p-2">Crie seu evento</p>
          </Link>
          <Link href="/events">
            <p className="p-2">Acesse sua conta</p>
          </Link>
          <Link href="/contact">
            <p className="rounded-xl border-2 border-blue-200 px-4 py-2 hover:bg-white hover:text-blue-600 hover:">Cadastre-se</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
