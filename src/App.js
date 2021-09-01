import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./component/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    //variant é o estilo
    //component é a semantica do html
    //Typography é do Material ui
    return (
      <Container component="article" maxWidth="sm">
        
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        {/* indicando os valores que o contexto ira pegar */}
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm}></FormularioCadastro>
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
