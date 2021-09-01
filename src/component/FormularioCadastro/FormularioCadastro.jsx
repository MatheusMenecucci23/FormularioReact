import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF1 }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados,setDadosColetados] = useState({})
  //useEffect: uma atualização que é efeita após a renderização
  useEffect(()=>{
    //enviando dados no penultimo component, por isso o length-1
    if (etapaAtual === formulario.length-1){
      aoEnviar(dadosColetados)
    }
  })

  //array de rotas dos formulários
  const formulario = [
  <DadosUsuario  aoEnviar={coletarDados} />,
  <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF1} />,
  <DadosEntrega  aoEnviar={coletarDados}/>,
  <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ];
  function coletarDados(dados){
    setDadosColetados({...dadosColetados, ...dados});
    proximo();
  }
  //adicioando mais um para etapaAtual
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  
  return <>
  {/* Stepper e Step são do MATERIAL UI */}
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {/* //exibindo o formulario no indice etapaAtual */}
  {formulario[etapaAtual]}
  </>;
}
export default FormularioCadastro;
