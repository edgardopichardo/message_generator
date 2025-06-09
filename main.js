// This script generates a random motivational message by combining three unique messages from a predefined list.

// List of motivational messages.
const messageList = [
  'Life is good!',
  'There\'s always a reason to smile.',
  'Keep pushing forward.',
  'Believe in yourself.',
  'Every day is a new beginning.',  
  'Stay positive, work hard, make it happen.',
  'You are stronger than you think.',
  'Dream big, work hard.',
  'Success is not for the lazy.',
  'Make today amazing!']

// Generate a random message by combining three random messages from the list.
let randomNumber = [];

while (randomNumber.length < 3) {
  const randomIndex = Math.floor(Math.random() * messageList.length);
  if (!randomNumber.includes(randomIndex)) {
    randomNumber.push(randomIndex);
  }
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();
const month = months[today.getMonth()];
const day = today.getDate();
const year = today.getFullYear();

// Output the combined message.
console.log(`Today\'s motivational message (${month} ${day}, ${year}): `);
console.log(messageList[randomNumber[0]] + ' ' + messageList[randomNumber[1]] + ' ' + messageList[randomNumber[2]]);