export default function validationType(types){
    const error = {}
    if(!types.length > 0) error['types'] = '⚠️ Debes seleccionar al menos un tipo de pokemon' 
    return error
}