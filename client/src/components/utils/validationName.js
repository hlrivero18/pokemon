export default function validationName(name){
    if(name.length < 1) return '⚠️ el pokemon debe tener un nombre.'
    if(name.length > 10) return '⚠️ no puede ser mayor a 10 caracteres'
}