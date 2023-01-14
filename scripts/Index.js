$(function OnLoad() {
  //The first function in this file is a function to call on load of the HTML file
  //This function gets the JSON data of which restaurants exist in the website for us to view
  //Then, for each object retrieved we generate the List element alongside of the attathed Href attribute needed to navigate to it
  $.getJSON("Restaurants/Restaurants.json", function (data) {
    $.each(data, function (key, val) {
      $("#RestaurantsList").append(`<li><a href=https://limesherbet.github.io/WTCW_4036674/Restaurant.html?Restaurant=${encodeURIComponent(val.url)}>${val.name}</a></li>`)
    })
  })
})

function QueryRestaurant(QueryRestaurants) {
  //Next we have the function that handles the search functionality 
  var input, filter, ul, li, a, i, txtValue;
  //We tell the function that the input is the element that holds ID "RestaurantSearch"
  input = document.getElementById('RestaurantSearch');
  //We then capitalise the input to make it case insensitive
  filter = input.value.toUpperCase();
  //And then we get the unordered list and it's list elements so we know what to query
  ul = document.getElementById("RestaurantsList");
  li = ul.getElementsByTagName('li');
  //We then iterate through each one of those items and set the ones that don't match the input value
  //To css display value "none"
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