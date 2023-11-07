import Image from "next/image";
import GuincheiLogo from "@/assets/GuincheiLogoRemake.png";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full px-4 text-xl bg-azul-escuro">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={GuincheiLogo}
            className="mr-3 transition-all duration-300 ease-in-out hover:scale-110 "
            alt="Flowbite Logo"
            height={48}
          />
        </Link>

        <div className="flex md:order-2">
          <button
            type="button"
            className="px-4 py-2 mr-3 text-xl font-medium text-center text-white transition-all duration-300 hover:scale-105 rounded-xl bg-azul-claro hover:outline outline-azul-claro hover:bg-transparent md:mr-0 "
          >
            Solicite o Guincho
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-azul-escuro ">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white transition-all duration-300 ease-in-out rounded hover:scale-110 bg-azul-claro md:bg-transparent md:text-azul-claro md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="block py-2 pl-3 pr-4 text-white transition-all duration-300 ease-in-out rounded hover:scale-110 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-azul-claro md:p-0 "
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
