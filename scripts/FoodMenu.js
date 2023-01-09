$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restaurant");
    
    $.getJSON("../"+ URLParmeter + "/Food.json", function (data) {


        $.each(data.Starters,function(key,value) {
            $("#Starters").append(`<p>${value.Name} ${StringifyValues(value.Price)}</p>`);
        })


        $.each(data.Mains,function(key,value) {
            $("#Mains").append(`<p>${value.Name} ${StringifyValues(value.Price)}</p>`);
        })

        $.each(data.Desert,function(key,value) {
            window.alert(value.Price);
            $("#Deserts").append(`<p>${value.Name} ${StringifyValues(value.Price)}</p>`);
        })


    })

    $("#About").attr("href", "../Templates/Restaurant?Restaurant="+ URLParmeter);
    $("#FoodMenu").attr("href",window.location.href);
    $("#DrinkMenu").attr("href","../Templates/DrinkMenu?Restaurant="+ URLParmeter);

    document.title = "Food Menu - " + URLParmeter;
})


function StringifyValues(value) {
    if(value.includes('.')){
        return value
    }
    else {
        return value + ".00"
    }

}