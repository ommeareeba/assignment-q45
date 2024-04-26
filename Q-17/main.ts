//Q-17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guests : string[] = ["Rabia","Areeba","Aiman","Amna","Eman","Noor"];
// Informing people about the smaller dinner table
console.log("Unfortunately, due to unforeseen circumstances, we can now invite only two people for dinner.");

// Remove guests until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
  }
  
  // Print a message to the remaining two guests
  guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to our dinner party!`);
  });


// Empty the list
guests.splice(0,guests.length);

// Verify that the list is empty
console.log("Final guest list:", guests);