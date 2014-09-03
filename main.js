function calculate(){
  var thimbles = Number(document.getElementById('thimbles').value) * 1;
  var swords = Number(document.getElementById('swords').value) * 37;

  var total = thimbles + swords;

  document.getElementById("the-total").innerHTML = total+" monies";
};

document.getElementById("update-button").onclick = calculate;
