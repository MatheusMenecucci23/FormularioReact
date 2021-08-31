import React from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validarCPF1}) {

  return (
    <>
    <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF1}/>
    <DadosUsuario/>
    <DadosEntrega/>
    </>
  )
}
export default FormularioCadastro;
