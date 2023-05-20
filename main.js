let ammountbtns = document.querySelectorAll(".btn-amount");
let bill = document.querySelector("#bill");
let nbofpeople = document.querySelector("#nbofppl");
let tipamount = document.querySelector("#tipppers");
let totalamount = document.querySelector("#totalam");

ammountbtns.forEach((e)=> {
    e.addEventListener("click",function () {
        ammountbtns.forEach((b)=>b.classList.remove("clicked"));
        e.classList.add("clicked");
        const result = calculateTip(bill.value, e.innerHTML.replace("%", ""), nbofpeople.value);
        tipamount.innerHTML = `$` + `${result.tipPerPerson}`
        totalamount.innerHTML = `$`+`${result.totalPerPerson}`

    })
});
function calculateTip(billAmount, tipPercentage, numberOfPeople) {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + Math.ceil(tipAmount);
    const tipPerPerson = tipAmount / numberOfPeople;
    const totalPerPerson = totalBill / numberOfPeople;
    return {
        tipAmount: tipAmount.toFixed(2),
        totalBill: totalBill,
        tipPerPerson: tipPerPerson.toFixed(2),
        totalPerPerson: totalPerPerson.toFixed(2),
    };
}

