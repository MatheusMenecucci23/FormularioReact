import React from "react";
//
const ValidacoesCadastro = React.createContext({
//informações padrão que o contexto recebe
  cpf: semValidacao,
  senha: semValidacao,
  nome: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}
export default ValidacoesCadastro;
