const ValidateName = (name) => {
    if(name === ""){
        return "Please fill username";
    }
    for(let i=0;i<name.length;i++){
        if(name[i] >= '0' && name[i] <='9'){ return "Invalid Username!";}
        if(name[i] === '!' || name[i] === '@' || name[i] === '#' || name[i] === '$' || name[i] === '%'){
            return "Invalid Username!";
        }
    }
    return "";
}

export default ValidateName;