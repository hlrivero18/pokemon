export default function validationType(types){
    const error = {}
    if(!types.length > 0) error['types'] = '⚠️ Debes seleccionar al menos un tipo de pokemon' 
    if(types.length > 2) error['types'] = '⚠️ no puedes elegir mas de dos tipos de pokemon' 
    return error
}