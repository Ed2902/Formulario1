import {validateString, validateTel, Validate} from "./validate.js";
import {addStudent,modalAlert} from "./paint.js";

const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("fmContact");


let validator = new Validate();



const objectValid={
    nameObject:false,
    lastNameObject:false,
    mailObject: false,
    teleObject: false,
    msnObject:false
}

form.addEventListener("change",(event)=>{
    const inputId = event.target.id;
    console.log(inputId);
    
    const inputValue = event.target.value;
    console.log(inputValue);
    
    const inputClass = event.target.classList;
    console.log(inputClass);

    //si es valido 
    const validClass = ()=>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }

  
    const invalidClass = ()=>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }
 
    switch(inputId){
        case 'name': 
            objectValid.nameObject = validator.validNames(inputValue);
            
            objectValid.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case 'lastName':    
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case 'mail':    
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case 'telephone':    
            objectValid.teleObject = validator.validTel(inputValue);
            objectValid.teleObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
        case 'fm_contact':    
            objectValid.msnObject = validator.validText(inputValue);
            objectValid.msnObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
    }
});



btnEnviar.addEventListener("click", (e)=>{
     
    e.preventDefault();
    const Nombre = document.getElementById("name").value;
    const Apellido = document.getElementById("lastName").value;
    const Correo = document.getElementById("mail").value;
    const Telefono = document.getElementById("telephone").value;
    const mensaje = document.getElementById("fm_contact").value;

    
    if(validator.validform(objectValid)=== -1){
        addStudent(Nombre,Apellido,Correo,Telefono,mensaje);
        console.log("enviando Formulario")
        
    }else{
        modalAlert("Error en los datos");
        
    }
    
});