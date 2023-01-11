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

function SetSocials(data) {
    $("#Socials").append("<a class = 'icon-block' href=" + data.Socials.Twitter + "><i class='fa-brands fa-twitter'></i>Twitter</a>");
    $("#Socials").append("<a class = 'icon-block' href=" + data.Socials.Instagram + "> <i class='fa-brands fa-instagram'></i>Instagram</a>");
    $("#Socials").append("<a class = 'icon-block' href=" + data.Socials.Facebook + "><i class='fa-brands fa-facebook'></i>Facebook</a>");
}

function SetSocials() {
    $.getJSON(URLParmeter + "/Restaurant.json", function (data) {
        SetSocials(data);
    })
}

function setRestaurantNavigation() {
    var currentURL = window.location.href;

    if (currentURL.includes("Restaurant.html")) {
        $("#About").attr("href", window.location.href);
        $("#FoodMenu").attr("href", "https://limesherbet.github.io/WTCW_4036674/FoodMenu.html?Restaurant=" + URLParmeter);
        $("#DrinkMenu").attr("href", "https://limesherbet.github.io/WTCW_4036674/DrinkMenu.html?Restaurant=" + URLParmeter);
    }
    else if (currentURL.includes("FoodMenu.html")) {
        $("#About").attr("href", "https://limesherbet.github.io/WTCW_4036674/Restaurant.html?Restaurant=" + URLParmeter);
        $("#FoodMenu").attr("href", window.location.href);
        $("#DrinkMenu").attr("href", "https://limesherbet.github.io/WTCW_4036674/DrinkMenu.html?Restaurant=" + URLParmeter);
    }
    else {
        $("#About").attr("href", "https://limesherbet.github.io/WTCW_4036674/Restaurant.html?Restaurant=" + URLParmeter);
        $("#FoodMenu").attr("href", "https://limesherbet.github.io/WTCW_4036674/FoodMenu.html?Restaurant=" + URLParmeter);
        $("#DrinkMenu").attr("href", window.location.href);
    }

    $("#About").attr("href", "https://limesherbet.github.io/WTCW_4036674/Restaurant.html?Restaurant=" + URLParmeter);
    $("#FoodMenu").attr("href", "https://limesherbet.github.io/WTCW_4036674/FoodMenu.html?Restaurant=" + URLParmeter);
    $("#DrinkMenu").attr("href", window.location.href);

}
