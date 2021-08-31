import React, { useState  } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validarCPF1}) {
  //const[variavel,a função que altera o estado da variavel setVariavel]
  const [nome, setNome] = useState("");

  const [sobrenome, setSobrenome] = useState("");

  const [cpf, setCpf] = useState("");

  const [promocoes, setPromocoes] = useState(true);

  const [novidades, setNovidades] = useState(true);

  //--erros--/
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
  //--//

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
      }}
    >
      <TextField
       //value={valor inicial do estado}
        value={nome}
        //quando mudar o evento de mudança é passado para o nome com o setNome(event.target.value)
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        margin="normal"
        variant="outlined"
        fullWidth
      ></TextField>

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        margin="normal"
        variant="outlined"
        fullWidth
      ></TextField>

      <TextField
      //value={valor inicial do estado}
        value={cpf}
        //quando mudar, pega a mudança e coloca na variável com o set
        onChange={(event) => {
          setCpf(event.target.value);
        }}


        //------erros--------//
        onBlur={(event)=>{
          const ehValido =validarCPF1(cpf)

          setErros({cpf:ehValido})
        }}
        error={!erros.cpf.valido}
        helperText= {erros.cpf.texto}
        //-------------------//


        id="cpf"
        label="CPF"
        margin="normal"
        variant="outlined"
        fullWidth
      ></TextField>

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            //checked={pega o valor inicial de promocoes}
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            color="primary"
          ></Switch>
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
          checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          ></Switch>
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
