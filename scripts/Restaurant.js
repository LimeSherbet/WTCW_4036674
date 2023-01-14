$(function OnLoad() {
    //This function is the An On Load function for the Reataurant.html file which is initialised by JQuery
    //First we get the URL query parameter to determine which restaurant we are looking at
    var URLParmeter = GetURLRestaurantParameter();

    //Then from that we get the JSON data of that restaurant
    //Then from that JSON data we set the Blurb text
    //We also set the Map URL so that we get a google maps API reference
    //Then, finally, we set the website and socials URL dynamically from the JSON data
    $.getJSON(URLParmeter + "/Restaurant.json", function (data) {
        $("#BlurbText").text(data.About);
        $("#RestaurantLocation").attr("src", data.MapURL);
        $("#VisitWebsite").attr("href", data.WebsiteLink);
        SetSocialsWithJson(data);
    })
    //We also call functions to set the restaurant header
    //And also set the restaurant navigations and the title of the page
    SetRestaurantHeader();
    setRestaurantNavigation();
    document.title = "About - " + URLParmeter;
})