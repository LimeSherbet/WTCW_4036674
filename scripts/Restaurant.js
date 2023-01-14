$(function OnLoad() {
    var URLParmeter = GetURLRestaurantParameter();
    $.getJSON(URLParmeter + "/Restaurant.json", function (data) {
        $("#BlurbText").text(data.About);
        $("#RestaurantLocation").attr("src", data.MapURL);
        $("#VisitWebsite").attr("href", data.WebsiteLink);
        SetSocialsWithJson(data);
    })
    SetRestaurantHeader();
    setRestaurantNavigation();
    document.title = "About - " + URLParmeter;
})