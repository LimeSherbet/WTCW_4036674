function CurrencyConvert(value) {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    });
    return formatter.format(value);
}

$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restaurant");
    $.getJSON("../"+ URLParmeter + "/Drinks.json", function (data) {


        $.each(data.alcholoic,function(key,value) {
            $("#Alcohol").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })


        $.each(data.NonAlcoholic,function(key,value) {
            $("#Non-Alcoholic").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })

    })

    $("#About").attr("href","../Templates/Restaurant?Restaurant="+ URLParmeter);
    $("#FoodMenu").attr("href","../Templates/FoodMenu?Restaurant="+ URLParmeter);
    $("#DrinkMenu").attr("href",window.location.href);

    document.title = "Drink Menu - " + URLParmeter;
})



