import { TextField, Button } from "@material-ui/core";
import React from "react";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      aoEnviar()
    }}>
      <TextField
        id="email"
        label="Email"
        type="email"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      ></TextField>
      <TextField
        id="senha"
        label="Senha"
        type="password"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
