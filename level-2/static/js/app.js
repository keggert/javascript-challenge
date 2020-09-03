// from our data.js file
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

    // Loop through each field in the dataRow and add each value as a table cell with (td)
    Object.values(dataRow).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Keep Track of all the filters we will be using
var filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that has been changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all of the filters and rebuild the table
  filterTable();

}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that matches the filtered values
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // Finally, rebuild the table using filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each of the filters
d3.selectAll(".filter").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
