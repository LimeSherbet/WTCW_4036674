function CurrencyConvert(value) {
    //This is a function used throughout the application in order to take a numeric value
    //And return it as a formatted currency string for british GBP

    //We create a number format object and assign it's properties
    //Style we set to be a currency format
    //and currency we set to be GBP
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    });
    //We then end the function by returning the fomatted result
    return formatter.format(value);
}


function GetURLRestaurantParameter() {
    //This a function used throughout the application that gets a value from the query string in the URL
    //First of all we start by getting the URL string
    var urlString = document.location.href;
    //Then, based on the URL string, we create a URL object
    var URLObject = new URL(urlString);
    //Then from the URL object, we query the search paramaters and return the "Restaurant" parameter
    //This parameter is used to determine which Restaurant we will be observing the data of
    return URLObject.searchParams.get("Restaurant");
}

function SetSocialsWithJson(data) {
    //This function is a function to automatically generate the HTML for the Socials nav element based on what exists in the JSON
    //First, we iterate through every object in the data.Socials section of the JSON that is passed in
    $.each(data.Socials, function (name, val) {
        //We then use a switch statement to determine what socials we are looking at
        //and based on the social determined, we append HTML that represents it alongside of the URL to that social media site.
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
    //This function is a method used to intialise the setting social media HTML
    //We start by getting the JSON that is determined by the HTML Query Parameter
    //and we then call "SetSocialsWithJson" from that
    $.getJSON(GetURLRestaurantParameter() + "/Restaurant.json", function (data) {
        SetSocialsWithJson(data);
    })
}

//This function automatically sets the navigation href attributes based on the current HTML file we are observing on the website
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

//Here we are setting the H1 HTML text based on the result from the Query Parameter
function SetRestaurantHeader() {
    $(".header h1").text(GetURLRestaurantParameter());
}
