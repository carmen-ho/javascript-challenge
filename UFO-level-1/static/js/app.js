// from data.js
var tableData = data;

// var table = d3.select('table');
var tbody = d3.select('tbody');

function buildtable(data) {

    tbody.html("");

    data.forEach(ufo => {
        var addRow = tbody.append('tr');
    Object.values(ufo).forEach((value) => {
        var cell = addRow.append("td");
        cell.text(value);
     });
    });
}

function click() {

    var dateinput = d3.select("#datetime").property("value");

    var filteredData = tableData;
    if (dateinput){
        filteredData = filteredData.filter(addRow => addRow.datetime === dateinput);
    }

    buildtable(filteredData);
}
    
d3.selectAll("#filter-btn").on("click",click);

buildtable(tableData);

