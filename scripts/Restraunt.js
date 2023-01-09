$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restaurant");
    window.alert(URLParmeter);
    $.getJSON("../"+ URLParmeter + "/Restaurant.json", function (data) {
        $("#BlurbText").text = data.About;




        $.each(data, function (key, val) {
            switch (key) {
                case "About":
                    
                    break;
                case "WebsiteLink":
                    break;
                case "MapURL":
                    break;
                case "Socials":
                    break;
            
                default:
                    break;
            }

        })
    })
})