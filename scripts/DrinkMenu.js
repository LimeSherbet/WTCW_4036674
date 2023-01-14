$(function OnLoad() {
    //Here we have the on load function for the DrinkMenu.html file
    //First we get the URL Restaurant Query Parmeter
    //And based on thta output we get the respective JSON file that represents the drinks menu data
    var URLParmeter = GetURLRestaurantParameter();
    $.getJSON(URLParmeter + "/Drinks.json", function (data) {
        //We then iterate through the data for alcoholic and non alcoholic data and generate the HTML
        //To represent those automatically
        $.each(data.alcholoic, function (key, value) {
            $("#Alcohol").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })

        $.each(data.NonAlcoholic, function (key, value) {
            $("#Non-Alcoholic").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })

    })
    //Then additionally we set the header, socials and navigation of the page automatically
    //We also set the page title based on the URL parameter
    SetRestaurantHeader();
    SetSocials();
    setRestaurantNavigation();
    document.title = "Drink Menu - " + URLParmeter;
})



