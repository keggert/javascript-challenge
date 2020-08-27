// from data.js
var tableData = data;
// console.log(tableData);

// Get the table references
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out existing data
    tbody.html("");

    // Next, loop through each object in data and append a row and cells for each value in the row
    data.ForEach((dataRow) => {
        var row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Build the table when the page loads
buildTable(tableData);