document.getElementById('add-money-btn').addEventListener('click', function() {
    document.getElementById('add-money-input').classList.remove('hidden')
    document.getElementById('cash-out-input').classList.add('hidden')
})

document.getElementById('deposit-btn').addEventListener('click', function(e) {
    e.preventDefault()
    // document.getElementById('deposit-btn').style.backgroundColor = 'red'
    
    const addAmount = Number(document.getElementById('add-amount-input').value)
    const addPin = document.getElementById('add-pin-input').value

    const currentBalance = Number(document.getElementById('current-balance').innerText)

    if(addPin === '1234rd') {
        const updatedBalance = addAmount + currentBalance
        document.getElementById('current-balance').innerText = updatedBalance
    } else {
        alert('Invalid Pin')
    }
    document.getElementById('add-amount-input').value = ''
    document.getElementById('add-pin-input').value = ''

})


document.getElementById('cash-out-btn').addEventListener('click', function() {
    document.getElementById('cash-out-input').classList.remove('hidden')
    document.getElementById('add-money-input').classList.add('hidden')

})

document.getElementById('withdraw-btn').addEventListener('click', function(e) {
    e.preventDefault()
    // document.getElementById('deposit-btn').style.backgroundColor = 'red'
    
    const subAmount = Number(document.getElementById('sub-amount-input').value)
    const subPin = document.getElementById('sub-pin-input').value

    const currentBalance = Number(document.getElementById('current-balance').innerText)

    if(subPin === '1234rd') {
        if (subAmount > currentBalance) {
            alert("You don't have sufficient credits")
        } else{
            const updatedBalance = Math.abs(currentBalance - subAmount)
            document.getElementById('current-balance').innerText = updatedBalance
        }
    } else {
        alert('Invalid Pin')
    }
    document.getElementById('sub-amount-input').value = ''
    document.getElementById('sub-pin-input').value = ''

})