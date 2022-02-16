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

//current balance

function currentBalance() {
    let TotalBalanceField = document.getElementById('balance-total');
    const getTotalBalance = parseFloat(TotalBalanceField.innerText);
    return getTotalBalance;
}


// Total balance

function showTotalBalance(totalDepositOrWithdraw, isTrue) {

    let TotalBalanceField = document.getElementById('balance-total');
    const getTotalBalance = parseFloat(TotalBalanceField.innerText);

    if (isTrue) {
        const newTotalBlance = getTotalBalance + totalDepositOrWithdraw;
        TotalBalanceField.innerText = newTotalBlance;
    }
    else {
        const newTotalBlance = getTotalBalance - totalDepositOrWithdraw;
        if (newTotalBlance > 0) {
            TotalBalanceField.innerText = newTotalBlance;
        }
    }

}

//deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    let getDepositInput = getInputValue('deposit-input');  // for get value from input field
    //console.log('dep', getDepositInput)
    getDepositOrWithdraw('deposit-total', getDepositInput); // get previous deposit value & add new value
    showTotalBalance(getDepositInput, true)
})

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    let getWithdrawInput = getInputValue('withdraw-input')
    // console.log('wit', getWithdrawInput)

    let currentMoney = currentBalance();
    //console.log(currentMoney);
    if (getWithdrawInput < currentMoney) {
        getDepositOrWithdraw('withdraw-total', getWithdrawInput); // get previous withdraw value & add new value
        showTotalBalance(getWithdrawInput, false)
    }
})