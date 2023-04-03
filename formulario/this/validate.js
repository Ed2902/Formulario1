

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
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25}){1,3}$/g;
        const respuesta = values.match(nombresRX) ? true : false;
        return respuesta;
    }

    validMail(values){
        const correoRX = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const respuesta = values.match(correoRX)? true : false;
        return respuesta;
    }

    validTel(values){
        const TelRX = /^(((300|301|302|303|304|324|305|310|311|312|313|314|320|321|322|323|315|316|317|318|319|350|351)[0-9]{7}))$/g; 
        const respuesta = values.match(TelRX) ? true : false;
        //devuelve true o false
        return respuesta;
    }

    validText(values){
        const textRX =/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\/\*\-\+\.\)\(\&\%\$\#\@\!]).{6,32})$/;
        const respuesta = values.match(textRX) ? true : false;
        return respuesta;
    }

    validform = (objeto) => {
        const valores = Object.values(objeto);
        let resp = valores.findIndex(e => e === false); 
        return resp;
    }
}
export {validateString, validateTel, Validate}; 