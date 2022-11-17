var image = document.getElementById('medium');
var form = document.getElementById('form');
var git = document.getElementById("github")
var link = document.getElementById("linkedin")
var clifton = document.getElementById("clifton")

document.querySelector('.skip').addEventListener('click', skipContent)

if(image){
  image.addEventListener('click', mediumWebsite);
}
if(form){
  form.addEventListener('submit', clickContact);
}
if(git){
  git.addEventListener('click', gitClick);
}
if(link){
  link.addEventListener('click', linkClick);
}
if(clifton){
  clifton.addEventListener('click', cliffClick);
}

function skipContent(){
  var main = document.querySelector('main')
  main.scrollIntoView()
}

function clickContact(){
  alert("Thank you for contacting me. I will be in touch as soon as possible.")
}

function mediumWebsite(){
  window.open("https://medium.com/@megsrinivasa",'_blank')
}

function gitClick(){
  window.open("https://github.com/megsrini",'_blank')
}
function linkClick(){
  window.open("https://www.linkedin.com/in/megsrinivasa504/",'_blank')
}
function cliffClick(){
  window.open("images/clifton_strength_report.pdf",'_blank')
}

