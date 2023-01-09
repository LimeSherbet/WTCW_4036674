$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restaurant");
    
    $.getJSON("../"+ URLParmeter + "/Restaurant.json", function (data) {
        window.alert(data.About);
        $("#BlurbText").text(data.About);
    })
})