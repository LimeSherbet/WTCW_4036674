$(function OnLoad() {
    $.getJSON("Restraunts/Restraunts.json",function(data) {
        window.alert("data activated")
        var items = [];
        $.each(data,function(key,val) {
            

            $("#RestrauntsList").append("<li>Suck Nuts</li>")
            
            
        })
    })
})