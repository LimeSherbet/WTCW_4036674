$(function OnLoad() {
    $.getJSON("Restraunts/Restraunts.json", function (data) {
        $.each(data, function (key, val) {
            $("#RestrauntsList").append(`<li><a href=https://limesherbet.github.io/WTCW_4036674/Restaurant.html?Restaurant=${encodeURIComponent(val.url)}>${val.name}</a></li>`)
        })
    })
})

function QueryRestraunts(QueryRestraunts) {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('RestrauntSearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById("RestrauntsList");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}