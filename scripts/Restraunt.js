$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restraunt");
    window.alert(URLParmeter);
    $.getJSON("../"+URLParmeter + "/Restraunt.json", function (data) {
        $.each(data, function (key, val) {
            window.alert(key + val);

        })
    })
})