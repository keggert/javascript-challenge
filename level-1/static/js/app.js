// From the data.js file we need to call in the data
var tableData = data;

// Get tbody from table for table references
var tbody = d3.select("tbody");

function buildTables(data) {
  // First, we need to clear out any existing data with html("")
  tbody.html("");

  // Loop through every object in the data and append a row and cells for each value in that row
  data.forEach((dataRow) => {
    // We need to append a row to the table body with (tr)
    var row = tbody.append("tr");

    // Using object.values go through each fdataRow and add a value as a table cell of (td)
    Object.values(dataRow).forEach((value) => {
      var cells = row.append("td");
        cells.text(value);
      }
    );
  });
}

// Function to handle our click
function clickHandle() {

  // Using preventDefault to prevent a refresh of the page
  d3.event.preventDefault();

  // Need to grab our datetime value from our filter using #datetime
  var date = d3.select("#datetime").property("value");
  let filterData = tableData;

  // Has a date been entered and can we filter that particular date
  if (date) {
    // Apply a filter to our table data to so that our datetime value matches the filtered value
    filterData = filterData.filter(row => row.datetime === date);
  }

  // Our table will be rebuilt using filterdata
  buildTable(filterData);
}

// Attaching an event for the button
d3.selectAll("#filter-btn").on("click", clickHandle);

// Finally, our table needs to be built when we load the data
buildTables(tableData);
