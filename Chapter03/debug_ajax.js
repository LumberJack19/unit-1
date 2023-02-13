function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};

//Example 2.7 line 1
function jsAjax(){
    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();

function debugAjax(){
	
	var myData;
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
			debugCallback(response);
		})

	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
};

document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
//The goal of this activity is figuring out how asynchronous calls work, wait for a response then call the data back
//The key is to improve the asynch connection
//2.8 is the most simplified but best module to get this code to work