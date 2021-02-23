const ValidateEmail = (email) => {
    if(email === ""){ return "Please Enter your Email";}
    if(email.length < 6){ return "Invalid Email";}
    let f1=-1, f2=-1, n;
    n=email.length;
    for(let i=0;i<n;i++){
        if(email[i] === '@'){ f1=i;}
        if(email[i] === '.'){ f2=i;}
    }
    if(f1 === -1 || f2 === -1 || f1 === 0 || f2 === 0 || f1 === n-1 || f2 ===n-1 || f1+1 === f2){
        return "Invalid Email";
    }
    return "";
}

export default ValidateEmail;