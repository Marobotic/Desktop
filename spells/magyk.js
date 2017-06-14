//Magical start menu stuff
$("#Taskbar_popup").hide();

var startmenu_toggle = 0;

$(document).ready(function() {
    $("#start_button").click(function(event) {

        if (startmenu_toggle == 0) {
            startmenu_toggle = 1;
            $("#Taskbar_popup").show();
            //console.log(startmenu_toggle);

        } else if (startmenu_toggle == 1) {
            startmenu_toggle = 0;
            $("#Taskbar_popup").hide();
            //console.log(startmenu_toggle);
        }


    });
});
//console.log(startmenu_toggle);
//this console.log is broken but the function worked anyway like lol?



//Time Function
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setInterval(function() {}, 500);
}
//Locked 'nd Loaded!
startTime();





var Names = ["Maro", "Mathy", "Sinshi"];
for (var i = 0; i < Names.length; i++) {
    $(".main_Window").append(`<button class="main_item">${Names[i]}</button>`);

}
var source = {
    "Mathy": "He says league is shitty",
    "Sinshi": "But Sinshi only plays leeg for his friends",
    "Maro": "But Maro just disagrees"

}

$(document).ready(function() {
    $(".main_item").click(function(event) {


        $(".top_text" + $(this).html()).text(source[$(this).html()]);


        var hello = $(this).text();


        console.log(source[hello]);


    });
});
