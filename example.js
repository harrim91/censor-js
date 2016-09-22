import StringCensor from './lib/stringCensor';

var stringCensor = new StringCensor();
var bannedWords = ['red', 'blue', 'yellow', 'green'];
var exceptions = ['covered', 'coloured', 'evergreens', 'greenbelt', 'blues'];
var sentence = 'It was a sunny day in the greenbelt. The sky was Blue, but curiously the evergreens were full of Red and yellow leaves. They were not green at all. This angered me - it was enough to give one the blues.';

for (let word of bannedWords) {
	stringCensor.addBannedWord(word);
}

for (let word of exceptions) {
	stringCensor.addException(word);
}

console.log(stringCensor.censor(sentence));