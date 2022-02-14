const billAmountInput = document.getElementById("bill");
const numberOfPeopleInput = document.getElementById("people");

// Select a tip percentage
Array.from(document.querySelectorAll(".tips > p")).forEach((tip, index, tips) => {
    tip.addEventListener("click", (e) => {
        tips.forEach(tip => tip.classList.remove("active-tip"))
        e.target.classList.add("active-tip")
    })
    tip.addEventListener("click", updateBillingAmount)
})


billAmountInput.addEventListener("keyup", updateBillingAmount);
numberOfPeopleInput.addEventListener("keyup",updateBillingAmount);

function updateBillingAmount() {
    let activeTip = document.querySelector(".active-tip > span").textContent;

    let tipAmount = 0;

    const Condition = billAmountInput.value === "" || numberOfPeopleInput.value === "";

    //Calculate the total Billing Amount
    tipAmount = (Condition) ? 0 : ((billAmountInput.value * activeTip)/100)/numberOfPeopleInput.value;

    const totalBilling = (Condition) ? 0 : (parseInt(billAmountInput.value) + (tipAmount*numberOfPeopleInput.value))/numberOfPeopleInput.value


    document.querySelector(".tip-amount").textContent = `$${tipAmount}`
    document.querySelector(".total-amount").textContent = `$${totalBilling}`
}

// Reset all the input data
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
    billAmountInput.value = "";
    numberOfPeopleInput.value = "";

    document.querySelector(".tip-amount").textContent = `$${0}`
    document.querySelector(".total-amount").textContent = `$${0}`
})
