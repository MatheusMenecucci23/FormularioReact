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

        <FormularioCadastro></FormularioCadastro>
      </Container>
    )
  }
}

export default App;
