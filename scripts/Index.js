$(function OnLoad() {
    $.getJSON("Restraunts/Restraunts.json",function(data) {
        window.alert("data activated")
        var items = [];
        $.each(data,function(key,val) {
            items.push("<li>");
            
        })
    })
})