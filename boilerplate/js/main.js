//initialize function called when the script loads
function initialize(){
   cityPop();
   debugAjax();
};
//Example 2.3 line 6...function to create a table with cities and their populations
function cityPop(){ //aka function cities()
   //define two arrays for cities and population
   var cityPop = [
       'Madison',
       'Milwaukee',
       'Green Bay',
       'Superior'
   ];
 var population = [
       233209,
       594833,
       104057,
       27244
   ];
   var populationData = [
      233209,
      594833,
      104057,
      27244
  ];
    //define an array of objects for cities and population
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
    ]};

    //Added near Example 3.5 line 44...
    //get the div id
    var theid = document.querySelector('#mydiv').getAttribute('id'); //alt: var theid = document.querySelector('#mydiv').id;
    //querySelector() is the new getElementById()
    //theid is 'mydiv; add it as text to the div
    document.querySelector('#mydiv').insertAdjacentHTML('beforeend',theid); //alt: document.querySelector('#mydiv').id = "newdiv";

    //add the class 'foo' to the div
    document.querySelector('#mydiv').setAttribute('class', 'foo'); //alt: document.querySelector('#newDiv').className = "foo";

    //Check your work with the Inspector!

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);
    console.log("Hello World!");
    
    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    document.querySelector("#mydiv").appendChild(table);

    //Added below Example 3.7...
    //iterate over each script element and add each one's source url as text to the div
    document.querySelectorAll("script").forEach(function(selectedScript){
        var thesource = selectedScript.src;
        document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thesource);
    })

        //Added below Example 3.8...
    //click listener with anonymous handler function
    document.querySelector("table").addEventListener("click", function(){
        alert('Madison Rocks! Go Badgers!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //add the event listener
    document.querySelector("table").addEventListener('click', clickme);

    //remove the event listener
    document.querySelector("table").removeEventListener('click', clickme);

    //change the text color
document.querySelector('#mydiv').style.color = 'red';
    
    //Added below Example 3.6...
    //change the text color
    document.querySelector('#mydiv').style.color = 'red';

    //change the text size and alignment
    document.querySelector('#mydiv').style.fontSize = '2em';
    document.querySelector('#mydiv').style.textAlign = 'left';

    //get the text color and add it as text to the div
    var thecolor = document.querySelector('#mydiv').style.color;
    document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thecolor);
    
    function debugCallback(response){
        document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
    };
    
//Example 3.1...
//define fetch request
function jsAjax(){
    //define a variable to hold the data
    var myData;

    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(function(response){
            myData = response;
        }) 

    //check the data
    console.log(myData)
};

function nextFunction(data){

    console.log(data); //contains response data held by myData in callback
};
    
    window.onload = jsAjax();
    
    function debugAjax(){
        
        var myData;
        
        fetch("data/MegaCities.geojson")
            .then(function(response){
                debugCallback(response);
            })
            .then(function(response){
                myData = response;
    
                //check the data
                console.log(myData)
            }) 
    
        //check the data to ensure myData displays
        console.log(myData)
        document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
    };
    
    //The goal of this activity is figuring out how asynchronous calls work, wait for a response then call the data back
    //The key is to improve the asynch connection
    //2.8 is the most simplified but best module to get this code to work

document.addEventListener('DOMContentLoaded', jsAjax)