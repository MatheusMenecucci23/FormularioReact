import { TextField, Button } from "@material-ui/core";
import React from "react";

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="Email"
        type="email"
        margin="normal"
        variant="outlined"
        fullWidth
      ></TextField>
      <TextField
        id="senha"
        label="Senha"
        type="password"
        margin="normal"
        variant="outlined"
        fullWidth
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
