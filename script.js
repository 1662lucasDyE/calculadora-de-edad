const birthdateInput = document.getElementById("birthdate");
const calcularBoton = document.getElementById("contenido-btn");
const resultElement = document.getElementById("resultado")

calcularBoton.addEventListener("click",calcularEdad);

//funcion para calcular la edad 
function calcularEdad(){
const birthdate = new Date(birthdateInput.value);
const dia = new Date();

//calcular la edad xd 

const edadEnMilisegundos = dia - birthdate;

const edadEnAños = Math.floor(edadEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25));

//mostrar el resultado 
if(edadEnAños >=0){
    resultElement.textContent = `tenes ${edadEnAños} años ! `;
}else{
resultElement.textContent=`no es valido boludo`
 }

}