'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _emojione = require('emojione');

var _emojione2 = _interopRequireDefault(_emojione);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var newEmojiListWithOutPriorityList = function newEmojiListWithOutPriorityList(priorityList) {
  var list = {};
  for (var key in _emojione2.default.emojioneList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }
    list[key] = _emojione2.default.emojioneList[key].unicode;
  }

  return _extends({}, priorityList, list);
};

var emojiList = {};

emojiList.setPriorityList = function (newPriorityList) {
  // re-generate emojiList when set PriorityList
  emojiList.list = newEmojiListWithOutPriorityList(newPriorityList);
};

emojiList.ignoreByRegex = function (regex) {
  emojiList.list = Object.keys(emojiList.list).filter(function (colonName) {
    return !regex.test(colonName);
  }).reduce(function (ret, colonName) {
    return _extends({}, ret, _defineProperty({}, colonName, emojiList.list[colonName]));
  }, {});
};

// init emojiList
var priorityList = {
  ':thumbsup:': ['1f44d'],
  ':smile:': ['1f604'],
  ':heart:': ['2764-fe0f', '2764'],
  ':ok_hand:': ['1f44c'],
  ':joy:': ['1f602'],
  ':tada:': ['1f389'],
  ':see_no_evil:': ['1f648'],
  ':raised_hands:': ['1f64c'],
  ':100:': ['1f4af']
};
emojiList.setPriorityList(priorityList);

exports.default = emojiList;