import isNumber from "./isNumber";
import validationName from "./validationName";

export default function validation(input){
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    const error = {}
    const name = validationName(input.name)
    const imagen = urlRegex.test(input.imagen)
    const vida = isNumber(input.vida)
    const ataque = isNumber(input.ataque)
    const defensa = isNumber(input.defensa)

    if(name){
        error['name'] = name
    }
    if(!imagen){
        error['imagen'] = '⚠️ debe seleccionar una imagen'
    }
    if(!vida){
        error['vida'] = '⚠️ este campo debe contener numeros'
    }
    if(!ataque){
        error['ataque'] = '⚠️ este campo debe contener numeros'
    }
    if(!defensa){
        error['defensa'] = '⚠️ este campo debe contener numeros'
    }
    
    return error
}