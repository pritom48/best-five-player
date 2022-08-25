const allPlayer = [];

function select(element) {
    const player = element.parentNode.children[0].innerText;
    const playerButton = element.parentNode.children[2].disabled = true
    allPlayer.push(player)

    if (allPlayer.length > 5) {
        alert('sorry!!, You already selected 5 players')
        return;
    }

    const playerNum = document.getElementById('player-numbers')
    playerNum.innerText = allPlayer.length;

    const playerList = document.getElementById('player-list')
    const li = document.createElement('li')
    li.innerHTML = `
    <li>${player}</li>
    `
    playerList.appendChild(li)
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const parPlayerInput = parseFloat(document.getElementById('per-player-input-field').value)


    const playerExpensess = document.getElementById('player-expenses')

    const plyerTotalExpenses = parPlayerInput * allPlayer.length

    playerExpensess.innerText = plyerTotalExpenses
    console.log(plyerTotalExpenses)
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const parPlayerInput = parseFloat(document.getElementById('per-player-input-field').value)

    const plyerTotalExpenses = parPlayerInput * allPlayer.length

    const manager = parseFloat(document.getElementById('manager-input-field').value)
    const couch = parseFloat(document.getElementById('couch-input-field').value)

    const total = plyerTotalExpenses + manager + couch;

    const totalExpenses = document.getElementById('total')

    totalExpenses.innerText = total
    console.log(total)
})
