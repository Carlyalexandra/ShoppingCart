$(document).ready(function(){
	// alert("this is a test")


$("button").click(function(){
	
	var thisItem = ("whatItem").getElementById();
	var thisAmount = ("quantity").getElementById();
	var thisCost = ("cost").getElementById();
	
	var myTotal = thisAmount() * thisCost();

//this add them to a static row
		$("#item2").append(thisItem());
		$("amount2").append(thisAmount());
		$("#price2").append(thisCost());
		$("#result2").append(myTotal);

// but I need to generate cells dynamicall with the add button 

 	function addRow(orders) {
 
            var table = document.getElementById(tableID);
 
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
 
            var cell1 = row.insertCell(0);
            var element1 = document.createElement("input");
            cell1.appendChild(element1);
 
            var cell2 = row.insertCell(1);
            cell2.innerHTML = rowCount + 1;
 
            var cell3 = row.insertCell(2);
            var element2 = document.createElement("input");
            cell3.appendChild(element2);

            var cell4 = row.insertCell(2);
            var element3 = document.createElement("input");
            cell4.appendChild(element2);

	//and then add the value to the dynamic row
		$(cell1).append(thisItem());
		$(cell2).append(thisAmount());
		$(cell3).append(thisCost());
		$(cell4).append(myTotal);

	};

//is this where the value
/*function calculate() {
    var myAmount = "td".getElementById("amount").value; 
    var myPrice = "td".getElementById("price").value;
    var result = "td".getElementById("result"); 
    var myResult = myAmount * myPrice;  

	("#result").html() = myResult;
}
	
function calculate2() {
	var itemTotal = []
	for (1 = 0; i < itemTotal; i++) 
	//need a function that gets all the values of the result

	//td to push to the array      
	 itemTotal.push();

	
	 int sum = IntStream.of(itemTotal).sum();}*/



//end of the Function where you CLICK}	
});

//Maybe we needed to use objects
//added items - this needs to append the table

	/*function itemAdded (item, amount, price){
		this.item = name;
		this.amount = amount;
		this.price = price;
	}
		var newItem = new itemAdded("Ratan Chair",2, 35)
		
		//is this where the value is
		this.total = function() {
		 itemAdded(amount)*itemAdded(price)
		
			console.log(newItem.total())
		};
	
	

//is this where the value is calculated - but we have above
		function calculate() {
		    var myAmount = "td".getElementById("amount").value; 
		    var myPrice = "td".getElementById("price").value;
		    var result = "td".getElementById("result"); 
		    var myResult = myAmount * myPrice;  

			("#result").html() = myResult;
		}
			
		function calculate2() {
			var itemTotal = []
			for (1 = 0; i < itemTotal; i++) 
			//need a function that gets all the values of the result
			//td to push to the array
			      itemTotal.push();

			
			int sum = IntStream.of(itemTotal).sum();
		};*/	

	//mouse over and see the cart
	$("#viewCart").mouseover(function(){
		$("#sidebar").fadeIn("fast");
	});

	$("#viewCart").mouseleave(function(){
		$("#sidebar").fadeOut("fast");
	});

//end of docready
});

