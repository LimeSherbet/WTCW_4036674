$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restaurant");
    window.alert(URLParmeter);
    $.getJSON("../"+ URLParmeter + "/Restaurant.json", function (data) {
        $.each(data, function (key, val) {
            window.alert(key + val);

        })
    })
})