let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function ValidarNome()
{
  var iNome = document.getElementById("textnome").value;
  if(iNome.length == 0)
  {
    alert("Preencha com seu nome completo!")
    return false;
  } 
   else{
    return true;
   }
}


function ValidarEmail()
{
  var iEmail = document.getElementById("textemail").value;
  if(iEmail == "")
  {
    alert("Preencha o campo!")
    return false;
  } 
   else if(iEmail.indexOf('@') == -1)
   {
    alert("Coloque um e-mail válido!")
    return false;
   }
   else{
    return true;
   }
}

function ValidarSenha()
{
  var iSenha = document.getElementById("textsenha").value;
  if(iSenha.length == 0)
  {
    alert("Mínimo 8 caracteres")
    return false;
  } 
   else{
    return true;
   }
}