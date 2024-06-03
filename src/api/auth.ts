export async function login(email: string, password:string){
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //Chama a função para efetuar o email e o password.
  if(email == null || password == null){
    console.log("Nenhum dado foi enviado para a API");
    return false;
  }
  if(email != null && password != null){
    console.log("Dados enviados para a API");
    console.log("Email", email);
    console.log("Password", password);
    return { isNotVerified: false, errorMessage: "Usuario não fez a verificação de email."};
  }
}

export async function register(name:string, email: string, password:string){
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //Chama a função para efetuar o email e o password.
  if(email == null || password == null){
    console.log("Nenhum dado foi enviado para a API");
    return false;
  }
  if(email != null && password != null){
    console.log("Dados enviados para a API");
    console.log("Name", name);
    console.log("Email", email);
    console.log("Password", password);
    return { errorMessage: "Usuario não fez a verificação de email."};
  }
}