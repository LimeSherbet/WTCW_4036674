$(function OnLoad() {
    $.getJSON("Restraunts/Restraunts.json",function(data) {
        window.alert(data)
        var items = [];
        $.each(data,function(key,val) {
            

            $("#RestrauntsList").append("<li>" + key + val + "</li>")
            
            
            
        })
    })
})