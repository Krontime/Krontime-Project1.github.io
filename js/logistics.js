$(document).ready(function() {
    if (localStorage.getItem("stylesheet") !== null && localStorage.getItem("stylesheet") !== document.getElementById("stylesheets").href) {
                let style = localStorage.getItem("stylesheet");
                document.getElementById("stylesheets").href = style;
            }
    if (window.location.href == "Krontime-Project1.github.io/index.html") {
        
    window.location.href = "Krontime-Project1.github.io/project_1";
            
    }
    $("#stylesheetDropdown a").click(function(){
        if ($(this).attr("id") == "day"){
            document.getElementById("stylesheets").href = "Krontime-Project1.github.io/css/day_stylsheet.css";
            localStorage.setItem("stylesheet", "Krontime-Project1.github.io/css/day_stylsheet.css")
        } else if ($(this).attr("id") == "night"){
            document.getElementById("stylesheets").href = "Krontime-Project1.github.io/css/night_stylsheet.css";
            localStorage.setItem("stylesheet", "Krontime-Project1.github.io/css/night_stylsheet.css")
        } else if ($(this).attr("id") == "sea"){
            document.getElementById("stylesheets").href = "Krontime-Project1.github.io/css/sea_stylsheet.css";
            localStorage.setItem("stylesheet", "Krontime-Project1.github.io/css/sea_stylsheet.css")
        } else if ($(this).attr("id") == "future"){
            document.getElementById("stylesheets").href = "Krontime-Project1.github.io/css/future_stylsheet.css";
            localStorage.setItem("stylesheet", "Krontime-Project1.github.io/css/future_stylsheet.css")
        } 
    });
    
    $(".navbar-collapse li a").click(function() {
        $(".navbar-collapse").collapse('hide');
    });
    
    $('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
    });
});