$(function OnLoad() {
    var URLParmeter = GetURLRestaurantParameter();
    $.getJSON(URLParmeter + "/Restaurant.json", function (data) {
        $("#BlurbText").text(data.About);
        $("#RestrauntLocation").attr("src", data.MapURL);
        $("#VisitWebsite").attr("href", data.WebsiteLink);
        SetSocialsWithJson(data);
    })
    SetRestrauntHeader();
    setRestaurantNavigation();
    document.title = "About - " + URLParmeter;
})