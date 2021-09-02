import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  //controlando o formulário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //--usando o contxeto--//
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes); 

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        type="email"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      ></TextField>
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        name="senha"
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="Senha"
        type="password"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
