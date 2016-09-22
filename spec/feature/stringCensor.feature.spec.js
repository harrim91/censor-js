import { expect } from 'chai';
import StringCensor from '../../lib/stringCensor';

describe('StringCensor', () => {
	
	let stringCensor = new StringCensor();
	let bannedWords = ['red', 'blue', 'yellow', 'green'];
	let exceptions = ['covered', 'coloured', 'evergreens', 'greenbelt', 'blues'];
	let sentence = 'It was a sunny day in the greenbelt. The sky was Blue, but curiously the evergreens were full of Red and yellow leaves. They were not green at all. This angered me - it was enough to give one the blues.';
	let censored = 'It was a sunny day in the greenbelt. The sky was Bl--, but curiously the evergreens were full of R-d and y-ll-w leaves. They were not gr--n at all. This -ng-r-d me - it was enough to give one the blues.';

	context('no words have been added', () => {
		it('doesn\'t censor the string', () => {
			expect(stringCensor.censor(sentence)).to.eql(sentence);
		});
	});

	context('words have been added', () => {
		before(() => {
			for (let word of bannedWords) {
				stringCensor.addBannedWord(word);
			}
			for (let word of exceptions) {
				stringCensor.addException(word);
			}
		});

		it('censors the string correctly', () => {
			expect(stringCensor.censor(sentence)).to.eql(censored);
		});
	});


});