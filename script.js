// all the variables
let apples = 0;

let applesPerSecond = 0;

let applesPerClick = 1;

// costs of items
let iPhoneCost = 10;

let iPadCost = 10;

let airPodsCost = 500;

let penCost = 200;

let macCost = 10000;

let iMacCost = 1000000;

let appleStoreCost = 10000000;

let steveJobsCost = 1000000000;

// how many items you have
let iPhones = 0;

let iPads = 0;

let airPods = 0;

let pens = 0;

let macs = 0;

let iMacs = 0;

let appleStores = 0;

let steveJobs = 0;


// function that gets called when you click the apple logo
function increment() {
	apples += applesPerClick; // adds the number of apples per click to your total apples
	document.getElementById("showApples").innerText = apples; // uses DOM to change the number of apples in the HTMl

	if (apples >= 1000000000000) // if it's higher than world population
	{
		document.getElementById("gameOver").innerText = "You won the game! Apple dominates the Earth!"
	}
}

// function that happens every second
setInterval(function() {
	apples += applesPerSecond; // adds the number of apples per second to your total apples
	document.getElementById("showApples").innerText = apples; // uses DOM to change the number of apples in the HTML
}, 1000) // every second (1000 milliseconds)

// different functions for each item
function buyIPhone() {

	if (apples >= iPhoneCost) // checks if you have enough apples
	{
		
		apples -= iPhoneCost; // subtracts cost apples 

		document.getElementById("showApples").innerText = apples;

		iPhones++; // increments number of that item 

		document.getElementById("iPhoneNum").innerText = iPhones;
	

		iPhoneCost *=2; // doubles price of that item 

		document.getElementById("iPhoneCost").innerText = iPhoneCost;


		applesPerSecond += 1; // increases number of apples per second

		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	
	
	}	else { // if there enough apples
		alert("You don't have enough Apples!") 
	}
}

// different functions for each item
function buyIPad() {

	if (apples >= iPadCost) { // checks if you have enough apples
		
		apples -= iPadCost; // subtracts cost apples 

		document.getElementById("showApples").innerText = apples;

		iPads++; // increments number of that item // increments number of that item // increments number of that item // increments number of that item

		document.getElementById("iPadNum").innerText = iPads;
	

		iPadCost *=2; // doubles price of that item

		document.getElementById("iPadCost").innerText = iPadCost;


		applesPerClick += 1; // increases number of apples per click

		document.getElementById("showApplesPerClick").innerText = applesPerClick;
	
	} else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}

// different functions for each item
function buyPen() {

	if (apples >= penCost) // checks if you have enough apples
	{
		
		apples -= penCost; // subtracts cost apples 

		document.getElementById("showApples").innerText = apples;

		pens++; // increments number of that item // increments number of that item // increments number of that item // increments number of that item

		document.getElementById("penNum").innerText = pens;
	

		penCost *=2; // doubles price of that item

		document.getElementById("penCost").innerText = penCost;


		applesPerSecond += 100; // increases number of apples per second

		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	

	} else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}


function buyAirPods() { // different functions for each item

	if (apples >= airPodsCost) { // checks if you have enough apples
		
		apples -= airPodsCost; // subtracts cost apples 

		document.getElementById("showApples").innerText = apples;

		airPods++; // increments number of that item

		document.getElementById("airPodsNum").innerText = airPods;
	

		airPodsCost *=2; // doubles price of that item

		document.getElementById("airPodsCost").innerText = airPodsCost;


		applesPerClick += 100; // increases number of apples per click

		document.getElementById("showApplesPerClick").innerText = applesPerClick;

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}

}


function buyMac() {

	if (apples >= macCost)
	{
		
		apples -= macCost;

		document.getElementById("showApples").innerText = apples;

		macs++; // increments number of that item

		document.getElementById("macNum").innerText = macs;
	

		macCost *=2; // doubles price of that item

		document.getElementById("macCost").innerText = macCost;


		applesPerSecond += 1000; // increases number of apples per second

		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}


function buyIMac() {

	if (apples >= iMacCost) {
		
		apples -= iMacCost;

		document.getElementById("showApples").innerText = apples;

		iMacs++; // increments number of that item

		document.getElementById("iMacNum").innerText = iMacs;
	

		iMacCost *=2; // doubles price of that item

		document.getElementById("iMacCost").innerText = iMacCost;


		applesPerClick += 10000; // increases number of apples per click

		document.getElementById("showApplesPerClick").innerText = applesPerClick;

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}


function buyAppleStore() {

	if (apples >= appleStoreCost)
	{
		
		apples -= appleStoreCost;

		document.getElementById("showApples").innerText = apples;

		appleStores++; // increments number of that item

		document.getElementById("appleStoreNum").innerText = appleStores;
	

		appleStoreCost *=2; // doubles price of that item

		document.getElementById("appleStoreCost").innerText = appleStoreCost;


		applesPerSecond += 100000; // increases number of apples per second

		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}


function buySteveJobs() {

	if (apples >= steveJobsCost) {
		
		apples -= steveJobsCost;

		document.getElementById("showApples").innerText = apples;

		steveJobs++; // increments number of that item

		document.getElementById("steveJobsNum").innerText = steveJobs;
	

		steveJobsCost *=2; // doubles price of that item

		document.getElementById("steveJobsCost").innerText = steveJobsCost;


		applesPerClick += 1000000; // increases number of apples per click

		document.getElementById("showApplesPerClick").innerText = applesPerClick;

	}	else { // if there enough apples
		alert("You don't have enough Apples!")
	}
}
