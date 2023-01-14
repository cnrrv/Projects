const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

$(window).resize(function(e) {
  let width = e.target.innerWidth
    if(width < 1200) {
      //меняем элементы в html
   }
});