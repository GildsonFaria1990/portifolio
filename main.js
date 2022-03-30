function datavalidate() {
  window.event.preventDefault();

  if(document.contact-form.value == ""){
    alert("campo é obrigatório");
    document.contact-form.value.focus();
  }else if(document.contact-form.e-mail.value.indexof("@")== -1){
    alert("e-mail inválido")
  }

}
document.querySelector("contact-form").addEventListener("submit", datavalidate)