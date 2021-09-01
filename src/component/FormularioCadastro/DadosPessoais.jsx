import React, { useState  } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Switch, FormControlLabel } from "@material-ui/core";
import { useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosPessoais({aoEnviar}) {
  //const[variavel,a função que altera o estado da variavel setVariavel]
  const [nome, setNome] = useState("");

  const [sobrenome, setSobrenome] = useState("");

  const [cpf, setCpf] = useState("");

  const [promocoes, setPromocoes] = useState(true);

  const [novidades, setNovidades] = useState(true);

  //--erros--/
  const [erros, setErros] = useState({cpf:{valido:true, texto:""},nome:{valido:true, texto:""}})
  //--//
  //usando o contexto criado
  const validacoes = useContext(ValidacoesCadastro)
  function validarCampos(event){
     //------erros--------//
      const{name, value}=event.target;
      const novoEstado = {...erros}
      novoEstado[name] = validacoes[name](value)
      setErros(novoEstado)
    }
    function possoEnviar(){
      for(let campo in erros){
        if(!erros[campo].valido){
          return false
        }
      }
      return true
    }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({nome, sobrenome, cpf, novidades, promocoes})

        }
      }}
    >
      <TextField
       //value={valor inicial do estado}
        value={nome}
        //quando mudar o evento de mudança é passado para o nome com o setNome(event.target.value)
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        name="nome"
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
        name="sobrenome"
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
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText= {erros.cpf.texto}
        //-------------------//
        name="cpf"
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
