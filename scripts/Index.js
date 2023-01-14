$(function OnLoad() {
    $.getJSON("Restaurants/Restaurants.json", function (data) {
        $.each(data, function (key, val) {
            $("#RestaurantsList").append(`<li><a href=https://limesherbet.github.io/WTCW_4036674/Restaurant.html?Restaurant=${encodeURIComponent(val.url)}>${val.name}</a></li>`)
        })
    })
})

function QueryRestaurants(QueryRestaurants) {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('RestaurantSearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById("RestaurantsList");
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