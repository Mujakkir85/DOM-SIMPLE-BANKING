function getInputValue(inputId) {
    let inputField = document.getElementById(inputId)
    let inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}


//deposit 



document.getElementById('deposit-button').addEventListener('click', function () {
    let getDepositInput = getInputValue('deposit-input');
    //console.log('dep', getDepositInput)

    const getTotalDeposit = parseFloat(document.getElementById('deposit-total').innerText)
    //console.log(getTotalDeposit);
    let addTotalDeposit = getDepositInput + getTotalDeposit;
    const setTotalDeposit = document.getElementById('deposit-total');
    setTotalDeposit.innerText = addTotalDeposit;
})




document.getElementById('withdraw-button').addEventListener('click', function () {
    const getWithdrawInput = getInputValue('withdraw-input')
    // console.log('wit', getWithdrawInput)
    const getTotalWithdraw = parseFloat(document.getElementById('withdraw-total').innerText)
    //console.log(getTotalDeposit);
    let addTotalWithdraw = getWithdrawInput + getTotalWithdraw;
    const setTotalWithdraw = document.getElementById('withdraw-total');
    setTotalWithdraw.innerText = addTotalWithdraw;
})