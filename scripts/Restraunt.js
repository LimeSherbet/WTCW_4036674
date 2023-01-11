$(function OnLoad() {
    var URLParmeter = GetURLRestaurantParameter();
    $.getJSON(URLParmeter + "/Restaurant.json", function (data) {
        $("#BlurbText").text(data.About);
        $("#RestrauntLocation").attr("src", data.MapURL);
        $("#VisitWebsite").attr("href", data.WebsiteLink);
        SetSocialsWithJson(data);
        $(".header h1").text(URLParmeter);
    })
    setRestaurantNavigation();
    document.title = "About - " + URLParmeter;
})