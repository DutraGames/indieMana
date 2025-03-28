import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" bg-indigo-700 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center border-r border-indigo-400">
            <span className="font-bold text-white text-xl my-8">IndieMana</span>
            <p>
              IndieMana é sua vitrine para explorar jogos indie incríveis de
              desenvolvedores ao redor do mundo. Descubra histórias únicas e
              viva experiências inesquecíveis.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center border-r border-indigo-400">
            <div className="flex flex-col border-b border-indigo-400 w-full items-center justify-center">
              <span className="font-bold text-white text-xl uppercase  my-8">
                navegação Rápida
              </span>
              <nav className="mb-8">
                <ul className="flex  gap-2">
                  <li className="underline">
                    <Link href="/">Sobre Nós</Link>
                  </li>
                  <li className="underline">
                    <Link href="/games">Explorar Jogos</Link>
                  </li>
                  <li className="underline">
                    <Link href="/">Enviar Jogo</Link>
                  </li>
                  <li className="underline">
                    <Link href="/">Comunidade</Link>
                  </li>
                  <li className="underline">
                    <Link href="/">Suporte</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex flex-col w-full items-center justify-center">
              <span className="font-bold text-white text-xl uppercase my-8">
                contato
              </span>
              <div className="flex gap-2 mb-8">
                <span>contato@indiemana.com</span>
                <span>|</span>
                <span>Suporte</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="font-bold text-white text-xl uppercase">
              redes sociais
            </span>
            <div className="flex gap-4">
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-indigo-400 py-8">
        <div className="container mx-auto flex items-center justify-around">
          <span>© 2025 IndieMana. Todos os direitos reservados.</span>
          <span>Desenvolvido por: Bruno de Araujo e Gabriel Dutra.</span>
        </div>
      </div>
    </footer>
  );
};
