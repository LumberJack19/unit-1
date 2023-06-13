// This function is called when the page loads
function initialize(){
    cityPop(); // Calls the cityPop function
};

// This function creates a table with city population data
function cityPop(){
    // An array of objects, each representing a city and its population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    // Creates a table element
    var table = document.createElement("table");
    // Creates a table row for the header
    var headerRow = document.createElement("tr");
    // Adds "City" and "Population" headers to the table
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
    // Appends the header row to the table
    table.appendChild(headerRow);

    // Iterates over each city in the cityPop array
    cityPop.forEach(function(city) {
        // Creates a new row for each city
        var row = document.createElement("tr");
        // Adds the city name and population to the row
        row.insertAdjacentHTML('beforeend', '<td>' + city.city + '</td><td>' + city.population + '</td>');
        // Appends the row to the table
        table.appendChild(row);
    });

    // Gets the div with id "myDiv"
    var myDiv = document.getElementById("myDiv");
    // Appends the table to the div
    myDiv.appendChild(table);

    // Adds a click event listener to the div that alerts "Hello World!"
    myDiv.addEventListener("click", function(){
        alert("Hello World!");
    });

    // Calls the addColumns function to add a "City Size" column to the table
    addColumns(cityPop);
    // Calls the addEvents function to add interactivity to the table
    addEvents();
};

// This function adds a "City Size" column to the table
function addColumns(cityPop){
    // Iterates over each row in the table
    document.querySelectorAll("tr").forEach(function(row, i){
        // If it's the first row (header row), adds a "City Size" header
        if (i == 0){
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            // For other rows, determines the city size based on population and adds it to the row
            var citySize;
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';
            } else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            };
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        };
    });
};

// This function adds interactivity to the table
function addEvents(){
    // Adds a mouseover event listener to the table that changes its color
    document.querySelector("table").addEventListener("mouseover", function(){
        var color = "rgb(";
        for (var i=0; i<3; i++){
            var random = Math.round(Math.random() * 255);
            color += random;
            if (i<2){
                color += ",";
            } else {
                color += ")";
            }
        }
        document.querySelector("table").style.color = color;
    });

    // This function is called when the table is clicked
    function clickme(){
        alert('Hey, you clicked me!');
    };
    // Adds a click event listener to the table that calls the clickme function
    document.querySelector("table").addEventListener("click", clickme);
}; 

// Calls the initialize function when the page loads
window.onload = initialize;
