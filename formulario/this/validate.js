

const validateString = (cad)=>{
    let response = (cad.length >= 3) ? true : false; 
    return response;
};

const validateTel = (cad) =>{
    let response = (cad.length >= 10) ? true : false; 
    return response;
}

class Validate{
    validNames(values){
        const nombresFo = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25}){1,3}$/g;
        const respuesta = values.match(nombresFo) ? true : false;
        return respuesta;
    }

    validMail(values){
        const correoFo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const respuesta = values.match(correoFo)? true : false;
        return respuesta;
    }

    validTel(values){
        const TelFo = /^(((300|301|302|303|304|324|305|310|311|312|313|314|320|321|322|323|315|316|317|318|319|350|351)[0-9]{7}))$/g; 
        const respuesta = values.match(TelFo) ? true : false;
        //devuelve true o false
        return respuesta;
    }

    validText(values){
        const textF =/^([a-zA-ZÀ-ÖØ-öø-ÿ]+\s){6,32}$/g;
        const respuesta = values.match(textF) ? true : false;
        return respuesta;

    }

    validform = (objeto) => {
        const valores = Object.values(objeto);
        let resp = valores.findIndex(e => e === false); 
        return resp;
    }
}
export {validateString, validateTel, Validate}; 