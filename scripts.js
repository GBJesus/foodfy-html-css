const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
  card.addEventListener("click", function() {
    const imageId = card.getAttribute("id")
    const cardTitle = document.querySelector(".card_title")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('#modal-img').src = `${imageId}.png`;
    document.querySelector('#modal-h1').innerText = cardTitle;
  })
}

document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove('active')
})
