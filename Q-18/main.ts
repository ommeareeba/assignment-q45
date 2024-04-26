//Q-18:Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// Create an array of travel destinations
let placesToVisit = [
    "Paris", 
    "New zealand", 
    "Japan", 
    "Bangkok", 
    "Switzerland" 
  ];
  
  // Print the array in its original order
  console.log("original order:", placesToVisit);
  
  // Print the array in alphabetical order (without modifying the actual list)
  console.log("Alphabetical order:" , [...placesToVisit].sort());
  
  
  // Confirm that the original order remains unchanged
  console.log("original order:", placesToVisit);
  
  // Print the array in reverse alphabetical order (without changing the original list)
  console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
  
  // Confirm that the original order remains unchanged
  console.log("original order:", placesToVisit);

  
  // Reverse the order of the list
  placesToVisit.reverse();
  
  // Print the array to show the changed order
  console.log("Reversed order:",placesToVisit);
  
  // Reverse the order of the list again
  placesToVisit.reverse();
  
  // Print the list to show it's back to its original order
  console.log("original order :", placesToVisit);
  
  // Sort the array in alphabetical order
  placesToVisit.sort();
  
  // Print the array to show the changed order
  console.log("Reverse alphabetical order:", placesToVisit);
  
  // Sort the array in reverse alphabetical order
  placesToVisit.sort().reverse();
  
  // Print the list to show the changed order
  console.log("\nSorted in reverse alphabetical order:");
  console.log(placesToVisit);
  