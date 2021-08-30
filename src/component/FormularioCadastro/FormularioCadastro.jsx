import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Switch, FormControlLabel} from "@material-ui/core"

function FormularioCadastro(){
    return(
        <form>
            <TextField id="nome" label="Nome"  margin="normal" variant="outlined" fullWidth></TextField>

            <TextField id="sobrenome" label="Sobrenome" margin="normal" variant="outlined" fullWidth></TextField>
  
            <TextField id="cpf" label="CPF" margin="normal" variant="outlined" fullWidth></TextField>
  
            <FormControlLabel 
            label="Promoções" 
            control={<Switch name="promocoes" defaultCheked color="primary"></Switch>}/>
            
            <FormControlLabel 
            label="Novidades" 
            control={<Switch name="novidades" defaultCheked color="primary"></Switch>}/>
            

            <Button variant="contained" color="primary"  type="submit">Cadastrar</Button>
  
        </form>
    )
}
 
export default FormularioCadastro;