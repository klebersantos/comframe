import React from "react";
import "./contact.css";

import { Formik, Form, Field } from "formik";

import InputMask from "react-input-mask";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Campo obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "E-mail inválido";
  }
  return error;
}

function validateNome(value) {
  let error;
  if (value === "") {
    error = "Campo obrigatório";
  }
  return error;
}

function validateTelefone(value) {
  let error;
  if (value === "") {
    error = "Campo obrigatório";
  }
  return error;
}

function validateMensagem(value) {
  let error;
  if (value === "") {
    error = "Campo obrigatório";
  }
  return error;
}

function Contact() {
  return (
    <div>
      <section className="formulario">
        <Formik
          initialValues={{
            nome: "",
            email: "",
            telefone: "",
            mensagem: "",
          }}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <div className="box-input">
                <label htmlFor="nome">*Nome:</label>
                <Field
                  name="nome"
                  placeholder="Informe seu nome"
                  validate={validateNome}
                />
                {errors.nome && touched.nome && (
                  <span className="erro">{errors.nome}</span>
                )}
              </div>
              <div className="d-flex">
                <div className="box-input">
                  <label htmlFor="email">*E-mail:</label>
                  <Field
                    name="email"
                    placeholder="Informe seu e-mail"
                    validate={validateEmail}
                  />
                  {errors.email && touched.email && (
                    <span className="erro">{errors.email}</span>
                  )}
                </div>
                <div className="box-input">
                  <label htmlFor="telefone">*Telefone:</label>
                  <Field
                    name="telefone"
                    mask="(99)99999-9999"
                    placeholder="(__)_____ ____"
                    validate={validateTelefone}
                  />
                  {errors.telefone && touched.telefone && (
                    <span className="erro">{errors.telefone}</span>
                  )}
                </div>
              </div>
              <div className="box-input">
                <label htmlFor="mensagem">*Mensagem:</label>
                <Field
                  name="mensagem"
                  placeholder="Escreva aqui"
                  validate={validateMensagem}
                />
                {errors.mensagem && touched.mensagem && (
                  <span className="erro">{errors.mensagem}</span>
                )}
              </div>

              <input type="submit" value="Enviar" />
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
}

export default Contact;
