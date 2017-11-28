// FUNÇÃO PARA O MENU DROPDOWN
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// FIM DE FUNÇÃO PARA O MENU DROPDOWN

// var theLeftSide = document.getElementById("leftSide");  //takes the HTML id leftSide to the theLeftSide var
// var leftSideImages = theLeftSide.cloneNode(true);//cloning (float)
// theRightSide.appendChild(leftSideImages);//cloning (paste)

// FUNÇÃO PARA O ADD button
function add_card(){
    var theCard = document.getElementById('card');  //takes the HTML id leftSide to the theLeftSide var
    var cardClone = theCard.cloneNode(true);//cloning (float)
    clone.appendChild(cardClone);//cloning (paste)
}
// FIM DE FUNÇÃO PARA O ADD button

// FUNÇÃO PARA O remove button
function remove_card(){

}
// FIM DE FUNÇÃO PARA O remove button

// FUNÇÃO PARA calcular o preço x quantidade
function calc_item(){
  var val_preco = document.getElementById('preco').value;
  var val_peso = document.getElementById('peso').value;

  var relacao_preco = val_preco / val_peso;
  document.getElementById('preco_grama').innerHTML = (relacao_preco);
  console.log(val_preco);
  console.log(val_peso);
  console.log(relacao_preco);


}
// FIM DE FUNÇÃO PARA calcular o preço x quantidade
