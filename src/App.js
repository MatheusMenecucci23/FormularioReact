import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './component/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto'



class App extends Component {
  render(){
    //variant é o estilo
    //component é a semantica do html
    return (
      <Container component="article" maxWidth="sm">
        
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>

        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF1={validarCPF}></FormularioCadastro>
      </Container>
    )
  }
}


function aoEnviarForm(dados){
  console.log(dados)
}


//--validando cpf--//
function validarCPF(cpf){
  if (cpf.length !== 11){
    return {valido:false,texto:"CPF deve ter 11 digitos"}
  }else{
    return {valido:true,texto:""}
  }
}
export default App;
