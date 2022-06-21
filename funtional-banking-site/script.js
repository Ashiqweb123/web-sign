function getInputValue(inputId)
{
    const inputField=document.getElementById(inputId);
    const inputAmount=inputField.value;
    const inputAmountText=parseFloat(inputAmount)
    inputField.value=''
    return inputAmountText;
}

function updateField(totalField,Amount)
{
    const AmountTotalField=document.getElementById(totalField);
    const AmountTotalTextField=AmountTotalField.innerText;
    const TotalAmountField=parseFloat(AmountTotalTextField)
    const totalAMount=Amount+TotalAmountField;
    AmountTotalField.innerText=totalAMount;
}

function updateBalance(depositAmountText,isAdd)
{
    const balanceAmount=document.getElementById('balance-total');
   const balanceAmountText=balanceAmount.innerText;
   const balanceTotal=parseFloat(balanceAmountText);
//    const totalBalance=balanceTotal+depositAmountText;
//    balanceAmount.innerText=totalBalance;
if(isAdd==true)
{
    const totalBalance=balanceTotal+depositAmountText;
 balanceAmount.innerText=totalBalance;
}
else{
    const totalBalance=balanceTotal-depositAmountText;
   balanceAmount.innerText=totalBalance;
}
}



document.getElementById('deposit-btn').addEventListener('click',function(){
    // const depositInput=document.getElementById('user-deposit');
    // const depositAmount=depositInput.value;
    // const depositAmountText=parseFloat(depositAmount)
     const depositAmountText=getInputValue('user-deposit');

    // const depositTotal=document.getElementById('deposit-total');
    // const depositTotalText=depositTotal.innerText;
    // const depositTotalTextAmount=parseFloat(depositTotalText)
    // const totalDeposit=depositAmountText+depositTotalTextAmount;
//    depositTotal.innerText=totalDeposit;
updateField('deposit-total',depositAmountText)
//    depositInput.value=''

   //balance-update

//    const balanceAmount=document.getElementById('balance-total');
//    const balanceAmountText=balanceAmount.innerText;
//    const balanceTotal=parseFloat(balanceAmountText);
//    const totalBalance=balanceTotal+depositAmountText;
//    balanceAmount.innerText=totalBalance;
updateBalance(depositAmountText,true)

})

//withDraw update
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // const withdrawInput=document.getElementById('user-withdraw')
    // const withdrawAmount=withdrawInput.value;
    // const withdrawAMountConvert=parseFloat(withdrawAmount)
    const withdrawAMountConvert=getInputValue('user-withdraw');


    // const withdrawAmountTotal=document.getElementById('withdraw-total')
    // const withDrawAmountText=withdrawAmountTotal.innerText
    // const withdrawAmountTotalConvert=parseFloat(withDrawAmountText)
    // const withdrawAmountTotalFigure=withdrawAMountConvert+withdrawAmountTotalConvert;
    // withdrawAmountTotal.innerText=withdrawAmountTotalFigure;
   
    updateField('withdraw-total',withdrawAMountConvert)
    //balance after withdraw
//     const balanceAmount=document.getElementById('balance-total');
//    const balanceAmountText=balanceAmount.innerText;
//    const balanceTotal=parseFloat(balanceAmountText);
//     const totalWithdrawBalanceAmount=balanceTotal-withdrawAMountConvert;
//     balanceAmount.innerText=totalWithdrawBalanceAmount;

updateBalance(withdrawAMountConvert,false)
    
})