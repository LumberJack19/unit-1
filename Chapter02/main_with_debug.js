//initialize function called when the script loads
//the script below creates the cities
function initialize(){
	cityPop();
 };
 //Example 2.3 line 6...function to create a table with cities and their populations
 function cityPop(){
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
	 ];
 
	/*Put all my code in the Cities function, consult ex 4.2
    create the table element
	According to Jonathan, there are about 10 diff ways to configure these code function in each script */
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

	var myDiv = document.getElementById("myDiv");
    myDiv.addEventListener("click", function(){
        alert("Hello World!");
    });
	
	//add the row to the table
function addColumns(cityPop){ //Add columns to cityPop
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){

    		row.insertAdjacntHTML('beforeend', '<th>City Size</th>');
    	} else {
//Below the code stipulates the size of each city in our table
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacntHTML = '<td' + citySize + '</td>';
    	};
    });
};

function addEvents(){ //this code creates the table and lays out the color and other key factors

	document.querySelector("table").addEventListener("mouseover"), function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
	};
		document.querySelector("table").color = color;
// for when someone clicks on the buttons in the table
	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
}};

document.addEventListener('DOMContentLoaded',initialize)
//call the initialize function when the window has loaded
//window.onload = initialize();