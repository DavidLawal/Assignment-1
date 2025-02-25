$(document).ready(function() {
    
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
    
    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }
    
    function validateInput(temperature) {
        return !isNaN(temperature) && temperature !== "";
    }
    
    function updateWeatherIcon(fahrenheit) {

        $(".weather-icon").removeClass("active");
        
        if (fahrenheit < 50) {
            $("#cold").addClass("active");
        } else if (fahrenheit >= 50 && fahrenheit < 80) {
            $("#mild").addClass("active");
        } else {
            $("#hot").addClass("active");
        }
    }
    
    $("#convert-btn").on("click", function() {
        const fahrenheit = parseFloat($("#temperature").val());
        
        if (validateInput(fahrenheit)) {
            $("#error-message").hide();
            
            const celsius = fahrenheitToCelsius(fahrenheit).toFixed(2);
            const kelvin = celsiusToKelvin(parseFloat(celsius)).toFixed(2);
            
            $("#fahrenheit-value").text(fahrenheit.toFixed(2) + " ");
            $("#celsius-value").text(celsius + " ");
            $("#kelvin-value").text(kelvin + " ");
            
            updateWeatherIcon(fahrenheit);
        } else {
            $("#error-message").show();
        }
    });
    
    $("#reset-btn").on("click", function() {
        $("#temperature").val("");
        
        $("#fahrenheit-value").html("-- <span class='unit'>°F</span>");
        $("#celsius-value").html("-- <span class='unit'>°C</span>");
        $("#kelvin-value").html("-- <span class='unit'>K</span>");
        

        $("#error-message").hide();
        
        $(".weather-icon").removeClass("active");
    });
    
    $("#temperature").on("keyup", function() {
        const fahrenheit = $(this).val();
        
        if (validateInput(fahrenheit)) {
            $("#error-message").hide();
        } else if (fahrenheit !== "") {
            $("#error-message").show();
        }
    });
    
    $("#temperature").on("keypress", function(e) {
        if (e.which === 13) {
            $("#convert-btn").click();
        }
    });
});