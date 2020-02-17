// from data.js
var tableData = data;

// Create reference to the table body in index.html
var tbody = d3.select("tbody");

// select the button
var button = d3.select("#filter-btn");

// Pre-Populate Table
tableData.forEach(function (ufoSightings) {
    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);

    });
});


// Re-populate Table based on Data
button.on("click", function () {

    // Capture date-time value
    var inputDateElement = d3.select("#datetime");
    var inputDateValue = inputDateElement.property("value");

    // Capture city name value
    var inputCityElement = d3.select("#city");
    var inputCityValue = inputCityElement.property("value");
    var filteredData = ''

    // Check for valid entries and filter input data
    if (inputDateValue !== '' && inputCityValue != '') {
        filteredData = data.filter(ufosighting => ufosighting.datetime == inputDateValue && ufosighting.city === inputCityValue);
    } else if (inputDateValue === '' && inputCityValue === '') {
        filteredData = tableData;
    } else if (inputDateValue !== '') {
        filteredData = data.filter(ufosighting => ufosighting.datetime === inputDateValue);
    } else if (inputCityValue !== '') {
        filteredData = data.filter(ufosighting => ufosighting.city === inputCityValue);
    }

    // Clear Table of all rows
    tbody.selectAll('tr').remove();

    // Create Table rows for each item in data.js
    //  Update cell text with values
    filteredData.forEach(function (ufoSightings) {
        var row = tbody.append("tr");

        Object.entries(ufoSightings).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);

        });
    });
});


