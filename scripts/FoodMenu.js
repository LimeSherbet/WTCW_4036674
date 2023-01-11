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
    
    $.getJSON(URLParmeter + "/Food.json", function (data) {


        $.each(data.Starters,function(key,value) {
            $("#Starters").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })


        $.each(data.Mains,function(key,value) {
            $("#Mains").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })

        $.each(data.Desert,function(key,value) {
            window.alert(value.Price);
            $("#Deserts").append(`<p>${value.Name} ${CurrencyConvert(value.Price)}</p>`);
        })


    })

    $("#About").attr("href", "https://limesherbet.github.io/WTCW_4036674/Restaurant.html?Restaurant="+ URLParmeter);
    $("#FoodMenu").attr("href",window.location.href);
    $("#DrinkMenu").attr("href","https://limesherbet.github.io/WTCW_4036674/DrinkMenu.html?Restaurant="+ URLParmeter);

    document.title = "Food Menu - " + URLParmeter;
})


