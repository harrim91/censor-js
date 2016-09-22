import { expect } from 'chai';
import StringCensor from '../../lib/stringCensor';

describe('StringCensor', () => {
	
	var stringCensor;

	beforeEach(() => {
		stringCensor = new StringCensor();
	});

	describe('censor', () => {
		context('no words are added', () => {
			it('doesn\'t censor the string', () => {
				expect(stringCensor.censor('foo bar')).to.eql('foo bar');
			});
		});

		context('words have been added', () => {
			beforeEach(() => {
				stringCensor.addBannedWord('foo');
				stringCensor.addException('FOOTBALL');
			});

			it('censors vowels in banned words', () => {
				expect(stringCensor.censor('foo')).to.eql('f--');
			});

			it('only censors banned words', () => {
				expect(stringCensor.censor('foo bar')).to.eql('f-- bar')
			});

			it('accounts for punctuation', () => {
				expect(stringCensor.censor('foo.')).to.eql('f--.');
			});

			it('is not case sensitive', () => {
				expect(stringCensor.censor('FOO bar')).to.eql('F-- bar');
			});

			it('censors words containing banned words', () => {
				expect(stringCensor.censor('FoObar')).to.eql('F--b-r');
			});

			it('does not censor exceptions containing banned words', () => {
				expect(stringCensor.censor('FoObar FoOtBaLl foo bar')).to.eql('F--b-r FoOtBaLl f-- bar');
			});
		});




	});

});