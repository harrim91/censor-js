class StringCensor {
	constructor() {
		this.bannedWords = [];
		this.exceptions = [];
	}

	addBannedWord(word) {
		this.bannedWords.push(_formatWord(word));
	}

	addException(word) {
		this.exceptions.push(_formatWord(word));
	}

	censor(string) {
		let _isBanned = (word) => { 
			let banned = false;
			if (this.exceptions.includes(_formatWord(word))) return banned;
			this.bannedWords.forEach((bannedWord) => {
				if (_formatWord(word).search(bannedWord) >= 0) banned = true;
			});
			return banned;
		}

		return (
			string.split(' ')
						.map(word => (_isBanned(word)) ? word.replace(/[AEIOUaeiou]/g, '-') : word)
						.join(' ')
		);
	}
}

let _formatWord = (word) => { return word.replace(/\W/g, '').toLowerCase();	}

export default StringCensor;