import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF1 }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formulario = [
  <DadosUsuario  aoEnviar={proximo} />,
  <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF1} />,
  <DadosEntrega  aoEnviar={aoEnviar}/>
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formulario[etapaAtual]}</>;
}
export default FormularioCadastro;
