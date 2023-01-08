$(function OnLoad() {
    $.getJSON("Restraunts/Restraunts.json",function(data) {
        $.each(data,function(key,val) {
            

            $("#RestrauntsList").append("<li>" + val.name +" " + val.url + "</li>")
            
            
            
        })
    })
})