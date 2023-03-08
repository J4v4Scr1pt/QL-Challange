
let validCardHolder: boolean=false;
let validMonth: boolean=false;
let validYear: boolean=false;
let validCvc: boolean=false;
let validCardNumber: boolean=false;

const ValidCard=(creditCardNumber: string,month: string,year: string,cvc: string,cardHolder: string) => {
    const IsVisa=/^4[0-9]{6,}$/.test(creditCardNumber);
    const IsMasterCard=
        /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/.test(
            creditCardNumber
        );
    const IsAE=/^3[47][0-9]{5,}$/.test(creditCardNumber);

    validCardNumber=(IsAE||
        IsMasterCard||
        IsVisa)&&
        (creditCardNumber.length>9||
            creditCardNumber.length<16);

    validCardHolder=cardHolder.length>0;
    validMonth=month.length>0;
    validYear=year.length>0;
    validCvc=cvc.length===3;

    return validCardNumber&&validMonth&&validYear&&validCvc&&validCardHolder;
}

export default ValidCard

export {validCardHolder,validMonth,validYear,validCvc,validCardNumber}