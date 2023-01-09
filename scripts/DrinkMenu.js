$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restaurant");
    $.getJSON("../"+ URLParmeter + "/Drinks.json", function (data) {


        $.each(data.alcholoic,function(key,value) {
            $("#Alcohol").append(`<p>${value.Name} ${StringifyValues(value.Price)}</p>`);
        })


        $.each(data.NonAlcoholic,function(key,value) {
            $("#Non-Alcoholic").append(`<p>${value.Name} ${StringifyValues(value.Price)}</p>`);
        })

    })

    $("#About").attr("href","../Templates/Restaurant?Restaurant="+ URLParmeter);
    $("#FoodMenu").attr("href","../Templates/FoodMenu?Restaurant="+ URLParmeter);
    $("#DrinkMenu").attr("href",window.location.href);

    document.title = "Drink Menu - " + URLParmeter;
})



function StringifyValues(value) {
    if(value.includes('.')){
        return value
    }
    else {
        return value + ".00"
    }

}