import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <p>Ingressos Online</p>
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/eventos/criar">
            <p className="p-2">Crie seu evento</p>
          </Link>
          <Link href="/events">
            <p className="p-2">Acesse sua conta</p>
          </Link>
          <Link href="/contact">
            <p className="rounded-md border-2 border-white p-2 hover:bg-white hover:text-blue-600 hover:">Cadastre-se</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;