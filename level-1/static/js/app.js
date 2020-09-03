// from data.js file
var tableData = data;

// get the table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data with html("")
  tbody.html("");

  // Next, loop through each object in the data and append a row and cells for each value in that row
  data.forEach((dataRow) => {
    // Append a row to the table body with (tr)
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell of (td)
    Object.values(dataRow).forEach((value) => {
      var cell = row.append("td");
        cell.text(value);
      }
    );
  });
}

function handleClick() {

  // Prevent a refresh of our page
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the data using that particular date.
  if (date) {
    // Apply filter to the table data to only keep the rows where the datetime value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using filtered data
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
