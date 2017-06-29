const batteryBatches = [4, 5, 3, 4, 4, 6, 5];



const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];


// amount of sentences mapped by word count.
// example for first three lines >> {'7': 2, '9': 1}
// 2 sentences with 7 words, and 1 sentence with 9 words
// Create a new variable called wordCountMap that reduces the monologueLines to a map that resembles the output as shown above.

let totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);


let wordCountMap = monologueLines.reduce((object, line) => {
  let wordCount = line.split(' ').length
  debugger
  if (object[wordCount]) {
    object[wordCount] += 1
  } else {
    object[wordCount] = 1
  }
  return object
}, {})

wordCountMap()
