$(function OnLoad() {
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
    SetSocials();
    setRestaurantNavigation();
    document.title = "Food Menu - " + URLParmeter;
})


