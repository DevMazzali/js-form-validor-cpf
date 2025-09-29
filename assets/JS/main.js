class ValidaForms {
 constructor() {
  this.formulario = document.querySelector(".formulario")
  this.eventos()
 }

 eventos() {
  this.formulario.addEventListener("submit", e => {
   this.handleSubmit(e);
  })

 }
 handleSubmit(e) {
  e.preventDefault();
  console.log("formulario nao enviado")
  const validFields = this.isFieldValid();
  const validPassword = this.isPasswordValid();

  if(validFields && validPassword) {
   alert("Formulario enviado.")
   this.formulario.submit()
  }
 }

 isPasswordValid() {
  let valid = true;

  const password = this.formulario.querySelector(".password")
  const rpassword = this.formulario.querySelector(".rpassword")

  if(password.value !== rpassword) {
   valid = false;
   this.createError(password, "As senhas devem ser iguais")
   this.createError(rpassword, "As senhas devem ser iguais")
  }

  if(password.value.length < 6 || password.value.length > 12) {
   valid = false;
   this.createError(password, "A senha deve conter entre 6 à 12 caracteres")
  }

  return valid
 }

 isFieldValid() {
  let valid = true

  for (let errorText of document.querySelectorAll(".error-text")) {
   errorText.remove()
  }

  for (let campo of this.formulario.querySelectorAll(".validate")) {
   const label = campo.previousElementSibling.innerText;
   if (!campo.value) {
    this.createError(campo, `${label} não pode ser vazio`)
    valid = false;
   }

   if (campo.classList.contains("cpf")) {
    if (!this.IsCpfValid(campo)) valid = false;
   }

   if (campo.classList.contains("usuario")) {
    if (!this.IsUserValid(campo)) valid = false;
   }

  }

  return valid;
 }

 IsUserValid(campo) {
  const user = campo.value;
  let userValid = true

  if (user.length < 3 || usuario.length > 12) {
   this.createError(campo, "Usuário precisa de 3 à 12 caracteres");
   userValid = false;
  }

  if (!usuario.match(/[a-zA-Z0-9]+$/g)) {
   this.createError(campo, "Usuário só pode conter apenas letras e/ou números");
   userValid = false;
  }

  return userValid;
 }

 IsCpfValid(campo) {
  const cpf = new IsCpfValid(campo.value);

  if (!cpf.valida()) {
   this.createError(campo, "CPF Inválido");
   return false
  }
  return true
 }


 createError(campo, msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  div.classList.add("error-text");
  campo.insertAdjacentElement("afterend", div)
 }
}

const valida = new ValidaForms()