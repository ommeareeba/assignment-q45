//Q-16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests : string[] = ["Areeba","Amna","Eman"];
    console.log(`Good news! We found a bigger dinner table!`);

// Add one new guest to the beginning

guests.unshift("Rabia");

// Add one new guest to the middle

guests.splice(guests.length / 2, 0, "Aiman");

// Use append() (push) to add one new guest to the end
guests.push("Noor");

guests.forEach(guest => {
console.log(`Dear ${guest}, you are invited to our dinner party!`);
});
