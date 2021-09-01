//--validando cpf--//
function validarCPF(cpf){
    if (cpf.length !== 11){
      return {valido:false,texto:"CPF deve ter 11 dígitos"}
    }else{
      return {valido:true,texto:""}
    }
  }

  //--validando senha--//
function validarSenha(senha){
    if (senha.length < 4 || senha.legth>72){
      return {valido:false,texto:"Senha deve ter 4 e 72 dígitos"}
    }else{
      return {valido:true,texto:""}
    }
}

export{validarCPF, validarSenha}