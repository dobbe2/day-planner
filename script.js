$(document).ready(function () {

    //getting current time from timer.js//
    let currentTime = function () {
        document.getElementById("currentDate").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    

    }
    setInterval(currentTime, 1000);
    

    //display time below H1//
    $("#currentDate").append(currentTime);

    //set current hour event to new color (class)//

    function setHour() {

        let currentHour = moment().hours();
        console.log(currentHour);
        let local = JSON.parse(localStorage.getItem("daily"))
        if (!local){
            local={}
        }

        console.log(local)
        // if (localStorage.getItem(local) !== null){
        $(".block").each(function () {
            let hour = parseInt($(this).attr("hour"))
            $(this).children().val(local[hour])
            if (hour < currentHour) {
                $(this).removeClass("futureHour");
                $(this).removeClass("currentHour");
                $(this).addClass("pastHour");
            }
            else if (hour === currentHour) {
                $(this).removeClass("futureHour");
                $(this).removeClass("pastHour");
                $(this).addClass("currentHour");
            } 
            else {
                $(this).removeClass("pastHour")
                $(this).removeClass("currentHour")
                $(this).addClass("futureHour");

            }
        })
    }
    //using button click to save event to page and local storage//
    $(".save").on("click", function () {
        let input = $(this).parent().siblings(".block").children().val()
        let hour = $(this).parent().siblings(".block").attr("hour")
        console.log("hour", hour)
        console.log(input);

        let local = JSON.parse(localStorage.getItem("daily"))
        if (!local){
            local={}
        }
        local[hour]=input
        console.log(local)
        localStorage.setItem("daily", JSON.stringify(local))

    })

    //clearing local storage
    $("#clearSchedule").on("click", function(){
        localStorage.clear()
        $(".userInput").val("")
        
    })

    //check to see if hour has changed
    let interval = setInterval(function(){
        setHour()
    }, 30000)
    setHour()
//end of document.ready//
})