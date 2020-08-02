// Code your solutions in this file
function writeCards(names, event) {
  let cards = []
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    cards.push(`Thank you, ${name}, for the wonderful ${event} gift!`) 
  }
  return cards
}

function countDown(number) {
  while (number > 0) {
    console.log(number)
    number--
  }
  console.log(number)
}