$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restaurant");
    
    $.getJSON("../"+ URLParmeter + "/Restaurant.json", function (data) {
        window.alert(data.About);
        $("#BlurbText").text(data.About);
        $("#RestrauntLocation").attr("src",data.MapURL);
        $("#VisitWebsite").attr("href", data.WebsiteLink);
        $("#About").attr("href", window.location.href)
        $("#FoodMenu").attr("href","../Templates/FoodMenu?Restaurant="+ URLParmeter)
        $("#DrinkMenu").attr("href","../Templates/DrinkMenu?Restaurant="+ URLParmeter);
    })
})