import GuinchoAzul from "@/assets/images/Towing-amico.png";
import "@/app/styles/home.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col pt-20 gap-y-8">
      <section className="w-screen pt-24 bg-azul-escuro">
        <div className="flex flex-col items-center justify-between max-w-screen-xl px-8 pb-12 mx-auto gap-y-8 lg:flex-row bg-azul-escuro">
          <div className="order-2 lg:order-1 textos-section">
            <div className="title">
              <p className="obs-hidden">Chamou!</p>
              <p className="obs-hidden" style={{ ["--delay" as any]: 2 }}>
                Chegou!
              </p>
              <p className="obs-hidden" style={{ ["--delay" as any]: 4 }}>
                Guinchou!
              </p>
            </div>
            <div className="text-white subtitle animated fadeInUp">
              <p>
                Não fique na mão. O guincho perfeito para você a poucos clicks
                de distância!
              </p>
            </div>
            <Link
              href={"./solicitar-guincho"}
              className="linkbutton group obs-hidden"
            >
              <svg
                className="inline mr-3 duration-500 ease-in-out fill-white stroke-white group-hover:fill-azul-claro group-hover:stroke-azul-claro"
                width="35px"
                height="35px"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path d="M4.8125 4C4.609375 4.035156 4.425781 4.136719 4.28125 4.28125L3.28125 5.28125C2.917969 5.644531 2.890625 6.226563 3.21875 6.625L4 7.5625L4 19C4 19.550781 4.449219 20 5 20C5.566406 20 6 20.433594 6 21C6 21.566406 5.566406 22 5 22C4.433594 22 4 21.566406 4 21L2 21C2 22.644531 3.355469 24 5 24C6.644531 24 8 22.644531 8 21C8 19.742188 7.109375 18.847656 6 18.40625L6 10L17 23.375L17 28L0 28L0 35C0 36.644531 1.355469 38 3 38L7.09375 38C7.570313 40.835938 10.035156 43 13 43C15.964844 43 18.429688 40.835938 18.90625 38L33.09375 38C33.570313 40.835938 36.035156 43 39 43C41.964844 43 44.429688 40.835938 44.90625 38L47 38C48.644531 38 50 36.644531 50 35L50 25.375C50 23.085938 48.40625 21.0625 48.40625 21.0625L48.375 21.0625L44.25 15.5625L44.25 15.53125L44.21875 15.5C43.296875 14.386719 41.914063 13 40 13L32 13C30.355469 13 29 14.355469 29 16L29 28L27 28L27 23C27 22.710938 26.875 22.4375 26.65625 22.25L5.65625 4.25C5.453125 4.066406 5.179688 3.976563 4.90625 4C4.875 4 4.84375 4 4.8125 4 Z M 6.875 7.9375L25 23.46875L25 28L19 28L19 23C19 22.773438 18.921875 22.550781 18.78125 22.375 Z M 32 15L40 15C40.785156 15 41.894531 15.84375 42.65625 16.75C42.664063 16.761719 42.679688 16.769531 42.6875 16.78125L42.84375 17L38 17C36.40625 17 35 18.289063 35 20L35 24C35 24.832031 35.375 25.5625 35.90625 26.09375C36.4375 26.625 37.167969 27 38 27L48 27L48 35C48 35.554688 47.554688 36 47 36L44.90625 36C44.429688 33.164063 41.964844 31 39 31C36.035156 31 33.570313 33.164063 33.09375 36L31 36L31 16C31 15.445313 31.445313 15 32 15 Z M 38 19L44.34375 19L46.78125 22.25C46.78125 22.25 47.6875 23.800781 47.875 25L38 25C37.832031 25 37.5625 24.875 37.34375 24.65625C37.125 24.4375 37 24.167969 37 24L37 20C37 19.496094 37.59375 19 38 19 Z M 2 30L29 30L29 36L18.90625 36C18.429688 33.164063 15.964844 31 13 31C10.035156 31 7.570313 33.164063 7.09375 36L3 36C2.449219 36 2 35.550781 2 35 Z M 13 33C15.222656 33 17 34.777344 17 37C17 39.222656 15.222656 41 13 41C10.777344 41 9 39.222656 9 37C9 34.777344 10.777344 33 13 33 Z M 39 33C41.222656 33 43 34.777344 43 37C43 39.222656 41.222656 41 39 41C36.777344 41 35 39.222656 35 37C35 34.777344 36.777344 33 39 33Z" />
                </g>
              </svg>
              Solicite o Guincho
            </Link>
          </div>
          <Image
            id="guincho-img"
            className="order-1 lg:order-2 float"
            src={GuinchoAzul}
            alt="Guincho levando carro com técnico do lado"
          />
        </div>
      </section>
      <section className="about">
        <div className="mb-10 about-text">
          <h1 className="mx-auto text-5xl font-bold tracking-wider">
            Sobre o Projeto
          </h1>
          <p className="mx-auto text-base text-center w-96 text-cinza ">
            Pedir o guincho certo nunca foi tão fácil. A revolução na forma de
            chamar guinchos, adicionado a IA (Inteligência Artificial). Confira
            o vídeo:
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/fJ7NEAQQQZo?si=v5zFzRR7zOoF9pIF"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
