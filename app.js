const calcForm = document.getElementById('calc-form')

const loanAmount = document.getElementById('loan-amount')

const interestRate = document.getElementById('interest-rate')

const noOfMonths = document.getElementById('no-of-months')

const calcBtn = document.getElementById('calc-btn')

const clearBtn = document.getElementById('clear-btn')

const paymentInfoList = document.querySelectorAll('.payment-info div span')

calcForm.addEventListener('submit',(e) => {
    e.preventDefault();
    showPaymentInfo();
})

clearBtn.addEventListener('click', (clearInputResults) => {
    calcForm.reset();
    paymentInfoList.forEach(item => {
        item.innerHTML = "-"
    })
})

//show payment info
function showPaymentInfo(){
    let monthlyPayment = calcMonthlyPayment(loanAmount.value, interestRate.value, noOfMonths.value);

    let interestPaid = totalInterestPaid(loanAmount.value, noOfMonths.value, monthlyPayment);

    paymentInfoList[0].innerHTML = `&#8377 ${loanAmount.value.toLocaleString()}`;

    paymentInfoList[1].innerHTML = `&#8377 ${interestRate.value}%`;

    paymentInfoList[2].innerHTML = noOfMonths.value;

    paymentInfoList[3].innerHTML = `&#8377 ${parseFloat(monthlyPayment).toLocaleString()}`;

    paymentInfoList[4].innerHTML = `&#8377 ${parseFloat(interestPaid).toLocaleString()}`;
}

function calcMonthlyPayment(PV, i, n){
    i = (i/100) / 12;
    let PMT = (PV * i * Math.pow(1 + i,n)) / (Math.pow(1 + i,n)-1);

    return PMT.toFixed(2);
}

function totalInterestPaid(LA, n, MP){
    let TIP = ((MP*n) - LA);
    return TIP.toFixed(2);
}
