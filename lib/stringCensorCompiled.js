'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringCensor = exports.StringCensor = function () {
	function StringCensor() {
		_classCallCheck(this, StringCensor);

		this.bannedWords = [];
		this.exceptions = [];
	}

	_createClass(StringCensor, [{
		key: 'addBannedWord',
		value: function addBannedWord(word) {
			this.bannedWords.push(_formatWord(word));
		}
	}, {
		key: 'addException',
		value: function addException(word) {
			this.exceptions.push(_formatWord(word));
		}
	}, {
		key: 'censor',
		value: function censor(string) {
			var _this = this;

			var _isBanned = function _isBanned(word) {
				var banned = false;
				if (_this.exceptions.includes(_formatWord(word))) return banned;
				_this.bannedWords.forEach(function (bannedWord) {
					if (_formatWord(word).search(bannedWord) >= 0) banned = true;
				});
				return banned;
			};

			return string.split(' ').map(function (word) {
				return _isBanned(word) ? word.replace(/[AEIOUaeiou]/g, '-') : word;
			}).join(' ');
		}
	}]);

	return StringCensor;
}();

var _formatWord = function _formatWord(word) {
	return word.replace(/\W/g, '').toLowerCase();
};

// export default StringCensor;
