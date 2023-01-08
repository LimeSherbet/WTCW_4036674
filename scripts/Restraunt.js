$(function OnLoad() {
    var urlString = document.location.href;
    var URLObject = new URL(urlString);
    var URLParmeter = URLObject.searchParams.get("Restraunt");
    alert(URLParmeter);
    $.getJSON("Restraunts/Restraunt.json",function(data) {
        $.each(data,function(key,val) {
            

           
            
            
            
        })
    })
})