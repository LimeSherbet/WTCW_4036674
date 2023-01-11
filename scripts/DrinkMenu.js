$(function OnLoad() {
    var URLParmeter = GetURLRestaurantParameter();
    $.getJSON(URLParmeter + "/Drinks.json", function (data) {
        $.each(data.alcholoic, function (key, value) {
            $("#Alcohol").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })

        $.each(data.NonAlcoholic, function (key, value) {
            $("#Non-Alcoholic").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })

    })
    SetSocials();
    setRestaurantNavigation();
    document.title = "Drink Menu - " + URLParmeter;
})



