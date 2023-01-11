$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restaurant");
    
    $.getJSON(URLParmeter + "/Restaurant.json", function (data) {
        $("#BlurbText").text(data.About);
        $("#RestrauntLocation").attr("src",data.MapURL);
        $("#VisitWebsite").attr("href", data.WebsiteLink);
        $("#About").attr("href", window.location.href);
        $("#FoodMenu").attr("href","https://limesherbet.github.io/WTCW_4036674/FoodMenu.html?Restaurant="+ URLParmeter);
        $("#DrinkMenu").attr("href","https://limesherbet.github.io/WTCW_4036674/DrinkMenu.html?Restaurant="+ URLParmeter);
        $("#Socials").append("<a class = 'icon-block' href="+ data.Socials.Twitter +"><i class='fa-brands fa-twitter'></i>Twitter</a>");
        $("#Socials").append("<a class = 'icon-block' href="+ data.Socials.Instagram +"> <i class='fa-brands fa-instagram'></i>Instagram</a>");
        $("#Socials").append("<a class = 'icon-block' href="+ data.Socials.Facebook +"><i class='fa-brands fa-facebook'></i>Facebook</a>");
        $(".header h1").text(URLParmeter);
    })
    document.title = "About - " + URLParmeter;
})