$(function OnLoad() {
    //Here we have the on load functio for the FoodMenu.html file
    //First we start by getting the Restaurant URL keyword
    //and then based on the value of that get the respective JSON data
    //Then, we iterate through the data for starters, mains and Desserts
    //And append the html to the file that we have automatically generated
    var URLParmeter = GetURLRestaurantParameter();
    $.getJSON(URLParmeter + "/Food.json", function (data) {
        $.each(data.Starters, function (key, value) {
            $("#Starters").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })
        $.each(data.Mains, function (key, value) {
            $("#Mains").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })
        $.each(data.Desert, function (key, value) {
            $("#Deserts").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })
    })
    //Then additionally we set the header, socials and navigation of the page automatically
    //We also set the page title based on the URL parameter
    SetRestaurantHeader();
    SetSocials();
    setRestaurantNavigation();
    document.title = "Food Menu - " + URLParmeter;
})


