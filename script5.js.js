function taxation(Annualincome) {
    if(Annualincome < 50000){
        console.log("نباید مالیات بپردازید");
    }else if (Annualincome  >= 50000 && Annualincome < 100000) {
        const mozade  = (Annualincome - 50000) * 10 /100;
        console.log(mozade);
    }else{
        const mozade = (Annualincome - 100000) * 15 /100+5000;
        console.log(mozade);
    }
    }
const Annualincome = 70000;
taxation(
    Annualincome

);