$(function OnLoad() {
    $.getJSON("Restraunts/Restraunts.json",function(data) {
        window.alert("data activated")
        var items = [];
        $.each(data,function(key,val) {
            $.each(val, function(K,V) {

                $("#RestrauntsList").append("<li>Suck Nuts</li>")
            })
            
        })
    })
})