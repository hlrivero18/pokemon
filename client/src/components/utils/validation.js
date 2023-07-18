import isNumber from "./isNumber";

export default function validation(input){
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    const error = {}
    const name = (input.name.length > 0)
    const imagen = urlRegex.test(input.imagen)
    const vida = isNumber(input.vida)
    const ataque = isNumber(input.ataque)
    const defensa = isNumber(input.defensa)

    if(!name){
        error['name'] = ' ⚠️ el pokemon debe tener un nombre.'
    }
    if(!imagen){
        error['imagen'] = '⚠️ la imagen debe ser una url valida'
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