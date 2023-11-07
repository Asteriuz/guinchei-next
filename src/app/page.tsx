import React from "react";
import GuinchoAzul from "@/assets/images/Towing-amico.png";
import "@/app/styles/test.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col pt-20 gap-y-8">
      <section className="w-screen pt-24 bg-azul-escuro">
        <div className="flex flex-col items-center justify-between max-w-screen-xl px-8 pb-12 mx-auto gap-y-8 lg:flex-row bg-azul-escuro">
          <div className="order-2 lg:order-1 textos-section">
            <div className="title">
              <p>Chamou!</p>
              <p>Chegou!</p>
              <p>Guinchou!</p>
            </div>
            <div className="text-white subtitle">
              <p>
                Não fique na mão. O guincho perfeito para você a poucos clicks
                de distância!
              </p>
            </div>
            <Link href={"./solicitar-guincho"} className="linkbutton">
              Solicite o Guincho
            </Link>
          </div>
          <Image
            id="guincho-img"
            className="order-1 lg:order-2"
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
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}
