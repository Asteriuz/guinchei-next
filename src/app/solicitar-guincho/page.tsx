"use client";
import React, { useRef, FormEvent, useState, useEffect } from "react";
import "./style.css";

export default function SolicitarGuincho() {
  const submitBtn = useRef<HTMLInputElement>(null);
  const formsSection = useRef<HTMLElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dados, setDados] = useState<Dados[]>([]);

  const [marca, setMarca] = useState("");
  const [modelosDisponiveis, setModelosDisponiveis] = useState<String[]>([""]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/dados/");
      const data: Dados[] = await response.json();
      setDados(data);
      console.log(data);
      setModelosDisponiveis(data.map((dado) => dado.nome));
    };
    fetchData();
  }, []); // Run once on component mount

  const submitClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formsSection.current) {
      formsSection.current.style.backgroundImage = "none";
    }
    setIsSubmitted(true);
  };

  const marcas = dados.map((dado) => dado.marca);
  const marcasUnicas = marcas.filter(
    (elem, pos) => marcas.indexOf(elem) === pos
  );

  useEffect(() => {
    if (marca === "") {
      setModelosDisponiveis(dados.map((dado) => dado.nome));
      return;
    }
    const modelosDaMarca = dados
      .filter((dado) => dado.marca === marca)
      .map((dado) => dado.nome);
    setModelosDisponiveis(modelosDaMarca);
  }, [marca]);

  return (
    <div className="main-forms">
      {isSubmitted ? (
        <div className="success-message mt-4 outline rounded-3xl p-8">
          <h2>Solicitação enviada com sucesso!</h2>
          <p className="text-cinza-escuro mt-2 mb-2">
            Em breve entraremos em contato com você por e-mail.
          </p>
          <p className="text-cinza-escuro mb-4">
            Obrigado por escolher o Guinchei!
          </p>
          <a className="button" href="/">
            Voltar para a página inicial
          </a>
        </div>
      ) : (
        <section ref={formsSection} className="forms-section">
          <h1 id="title">Solicitar Guincho</h1>
          <form className="form-flex" onSubmit={submitClick}>
            <div className="row">
              <div className="form-group ">
                <label className="label" htmlFor="fname">
                  Nome Completo
                </label>
                <input
                  className="input-form"
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Nome"
                  required
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="email">
                  Endereço de email
                </label>
                <input
                  className="input-form"
                  pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
                  type="email"
                  id="email"
                  autoComplete="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label className="label" htmlFor="marca">
                  Marca do Veículo
                </label>
                <input
                  id="marca"
                  name="marca"
                  type="text"
                  className="border-0 shadow-[0px_8px_19px_-13px_rgba(0,0,0,0.6)] rounded-lg"
                  list="marcas"
                  onChange={(e) => setMarca(e.target.value)}
                  value={marca}
                />
                <datalist id="marcas">
                  {marcasUnicas.map((marca, index) => (
                    <option key={index}>{marca}</option>
                  ))}
                </datalist>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="modelo">
                  Modelo do Veículo
                </label>
                <input
                  id="modelo"
                  name="modelo"
                  type="text"
                  className="border-0 shadow-[0px_8px_19px_-13px_rgba(0,0,0,0.6)] rounded-lg"
                  list="modelos"
                />
                <datalist id="modelos">
                  {modelosDisponiveis.map((modelo, index) => (
                    <option key={index}>{modelo}</option>
                  ))}
                </datalist>
              </div>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="email">
                Imagens do caminhão
              </label>
              <input
                id="input-file"
                type="file"
                accept="image/*,.pdf"
                multiple
                required
              />
            </div>
            <div className="form-group extended">
              <label className="label" htmlFor="email">
                Endereço do Acidente
              </label>
              <input
                className="input-form extended"
                type="text"
                name="acidente"
                id="acidente"
                placeholder="Endereço"
                required
              />
            </div>
            <p id="hint-subtitle" className="text-cinza-claro ml-4 mb-2">
              Todos os campos são obrigatórios
            </p>
            <input
              ref={submitBtn}
              type="submit"
              value="Pedir o Guincho"
              className="button ml-4"
            />
          </form>
        </section>
      )}
    </div>
  );
}
