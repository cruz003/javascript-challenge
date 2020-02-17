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
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(ufosighting => ufosighting.datetime === inputValue);

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


