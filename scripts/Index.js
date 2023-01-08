$(function OnLoad() {
    $.getJSON("Restraunts/Restraunts.json",function(data) {
        $.each(data,function(key,val) {
            

            $("#RestrauntsList").append(`<li href = https://limesherbet.github.io/WTCW_4036674/Template/Restraunt.html?Restraunt${encodeURIComponent(val.url)}>${val.name}<\li>`)
            
            
            
        })
    })
})