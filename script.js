// Function to update the rate slider value
function updateRate() {
    // Get the rate value from the slider
    let rateval = document.getElementById("rate").value;
    
    // Update the <span id="rate_val"> with the current rate value
    document.getElementById("rate_val").innerText = rateval + "%";
}

// Function to compute the interest and display the result
function compute() {
    // Get and parse the input values
    let principal = parseInt(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);

    // Validate the principal input
    if (principal <= 0 || isNaN(principal)) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // Calculate interest and future amount
    let interest = (principal * years * rate) / 100;
    let amount = principal + interest;

    // Calculate the future year
    let currentYear = new Date().getFullYear();
    let futureYear = currentYear + years;

    // Update the result section
    let result = document.getElementById("result");
    result.innerHTML = 
        "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\>" +
        "at an interest rate of " + "<mark>" + rate + "%</mark>.\<br\>" +
        "You will receive an amount of $" + "<mark>" + amount.toFixed(2) + "</mark>" + ",\<br\>" +
        "in the year " + "<mark>" + futureYear + "</mark>.\<br\>";
}
      