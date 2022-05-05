function validateText(data){
    //Validar solo en minúsculas, espacios permitidos y ñ. No para mayúsuculas ni otros carácteres especiales.
    let regex = /^[a-z\u00f1\s\,\¿?]+$/ 
    
    if(regex.test(data)){
        return true;
    } else {
        return false;
    }
}