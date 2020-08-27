// from data.js
var tableData = data;

// YOUR CODE HERE!
// get table references
var tbody = d3.select("tbody");
var tableData = data;
console.log("tbody");

function buildTable(data) {
    // Clear out existing data
    tbody.html("");
    // Loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append the row
        let row = tbody.append("tr");
        // Loop through the field in the data row and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};

function handleClic() {
    d3.event.preventDefault();
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // See if date was entered and filter data uusing that particular date
    if (date) {
        // Apply filter to table data to only keep rows where 'datetime' value matches the filter value
        filterData = filterData.filter((row) => row.dateTime === date);
    };
    
    // Rebuild table using filtered data
    buildTable(filterData);
};

// Attach an event to listen for form button
d3.selectAll("#filter-btn").on("click", handleClic);

//Build the table when page loads
buildTable(tableData);