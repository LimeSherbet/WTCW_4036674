function CurrencyConvert(value) {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    });
    return formatter.format(value);
}


function GetURLRestaurantParameter() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    return URLObject.searchParams.get("Restaurant");
}

function SetSocialsWithJson(data) {
    $.each(data.Socials, function (name, val) {
        switch (name) {
            case "Twitter":
                $("#Socials").append("<a class = 'icon-block' href=" + val + "><i class='fa-brands fa-twitter fa-2x'></i></a>");
                break;
            case "Instagram":
                $("#Socials").append("<a class = 'icon-block' href=" + val + "> <i class='fa-brands fa-instagram fa-2x'></i></a>");
                break;
            case "Facebook":
                $("#Socials").append("<a class = 'icon-block' href=" + val + "><i class='fa-brands fa-facebook fa-2x'></i></a>");
                break;
            default:
                break;
        }
    })

}

function SetSocials() {
    $.getJSON(GetURLRestaurantParameter() + "/Restaurant.json", function (data) {
        SetSocialsWithJson(data);
    })
}


function setRestaurantNavigation() {
    var currentURL = window.location.href;
    if (currentURL.includes("Restaurant.html")) {
        $("#About").attr("href", window.location.href);
        $("#FoodMenu").attr("href", "https://limesherbet.github.io/WTCW_4036674/FoodMenu.html?Restaurant=" + GetURLRestaurantParameter());
        $("#DrinkMenu").attr("href", "https://limesherbet.github.io/WTCW_4036674/DrinkMenu.html?Restaurant=" + GetURLRestaurantParameter());
    }
    else if (currentURL.includes("FoodMenu.html")) {
        $("#About").attr("href", "https://limesherbet.github.io/WTCW_4036674/Restaurant.html?Restaurant=" + GetURLRestaurantParameter());
        $("#FoodMenu").attr("href", window.location.href);
        $("#DrinkMenu").attr("href", "https://limesherbet.github.io/WTCW_4036674/DrinkMenu.html?Restaurant=" + GetURLRestaurantParameter());
    }
    else {
        $("#About").attr("href", "https://limesherbet.github.io/WTCW_4036674/Restaurant.html?Restaurant=" + GetURLRestaurantParameter());
        $("#FoodMenu").attr("href", "https://limesherbet.github.io/WTCW_4036674/FoodMenu.html?Restaurant=" + GetURLRestaurantParameter());
        $("#DrinkMenu").attr("href", window.location.href);
    }
}

function SetRestaurantHeader() {
    $(".header h1").text(GetURLRestaurantParameter());
}
