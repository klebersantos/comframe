import React from "react";
import "./contact.css";
import { useForm } from "react-hook-form";

import InputMask from "react-input-mask";

function Contact() {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.log("Data submitted: ", data);
  }

  return (
    <div>
      <section className="formulario">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="box-input">
            <label htmlFor="nome">*Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="inpt"
              placeholder="Informe seu nome"
              ref={register({
                required: "Digite seu nome",
              })}
            />
            {errors.nome && <span className="erro">{errors.nome.message}</span>}
          </div>
          <div className="d-flex">
            <div className="box-input">
              <label htmlFor="email">*E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="inpt"
                placeholder="Informe seu e-mail"
                ref={register({
                  required: "Digite seu email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Digite um email válido",
                  },
                })}
              />
              {errors.email && (
                <span className="erro">{errors.email.message}</span>
              )}
            </div>
            <div className="box-input">
              <label htmlFor="telefone">Telefone:</label>
              <InputMask
                type="text"
                id="telefone"
                nome="telefone"
                mask="(99)99999-9999"
                className="phone phone_with_ddd"
                placeholder="(__)_____ ____"
                ref={register({
                  required: "Digite seu telefone",
                })}
              />
              {errors.telefone && (
                <span className="erro">{errors.telefone.message}</span>
              )}
            </div>
          </div>
          <div className="box-input">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              type="text"
              id="mensagem"
              nome="mensagem"
              className="text-area"
              placeholder="Escreva aqui"
              ref={register({
                required: "Digite sua mensagem",
              })}
            ></textarea>
            {errors.mensagem && (
              <span className="erro">{errors.mensagem.message}</span>
            )}
          </div>
          <input type="submit" value="ENVIAR" />
        </form>
      </section>
    </div>
  );
}

export default Contact;
