import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"

      ></TextField>
      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
      ></TextField>
      <TextField
        id="numero"
        label="Numero"
        type="number"
        margin="normal"
        variant="outlined"
   
      ></TextField>
      <TextField
        id="estado"
        label="Estado"
        type="text"
        margin="normal"
        variant="outlined"
      ></TextField>
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
        variant="outlined"
      ></TextField>
      <Button variant="contained" color="primary" type="submit" fullWidth>
        FINALIZAR CADASTRO
      </Button>
    </form>
  );
}

export default DadosEntrega;
