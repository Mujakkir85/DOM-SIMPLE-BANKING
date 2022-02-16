function getInputValue(inputId) {
    let inputField = document.getElementById(inputId)
    let inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getDepositOrWithdraw(totalID, getDepositInputOrWithdrawInput) {
    const depositOrWithdrawField = parseFloat(document.getElementById(totalID).innerText)
    //console.log(getTotalDeposit);
    let addTotalDepositOrWithdraw = getDepositInputOrWithdrawInput + depositOrWithdrawField;
    const setTotalDepositOrWithdraw = document.getElementById(totalID);
    setTotalDepositOrWithdraw.innerText = addTotalDepositOrWithdraw;
}


//deposit 

document.getElementById('deposit-button').addEventListener('click', function () {
    let getDepositInput = getInputValue('deposit-input');
    //console.log('dep', getDepositInput)
    getDepositOrWithdraw('deposit-total', getDepositInput);
})

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    let getWithdrawInput = getInputValue('withdraw-input')
    // console.log('wit', getWithdrawInput)
    getDepositOrWithdraw('withdraw-total', getWithdrawInput);
})