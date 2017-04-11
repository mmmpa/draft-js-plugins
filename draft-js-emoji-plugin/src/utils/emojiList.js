import emojione from 'emojione';

const newEmojiListWithOutPriorityList = (priorityList) => {
  const list = {};
  for (const key in emojione.emojioneList) { // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) { // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }
    list[key] = emojione.emojioneList[key].unicode;
  }

  return { ...priorityList, ...list };
};

const ignoreWithRegex = (emojiList, regex) => (
  Object.keys(emojiList)
    .filter((key) => !regex.test(key))
    .reduce((ret, key) => ({ ...ret, [key]: emojiList[key] }), {})
);

const emojiList = {};

emojiList.setPriorityList = (newPriorityList, ignoreRegex) => {
  // re-generate emojiList when set PriorityList
  const l = newEmojiListWithOutPriorityList(newPriorityList);
  emojiList.list = ignoreRegex ? ignoreWithRegex(l, ignoreRegex) : l;
};

// init emojiList
const priorityList = {
  ':thumbsup:': ['1f44d'],
  ':smile:': ['1f604'],
  ':heart:': ['2764-fe0f', '2764'],
  ':ok_hand:': ['1f44c'],
  ':joy:': ['1f602'],
  ':tada:': ['1f389'],
  ':see_no_evil:': ['1f648'],
  ':raised_hands:': ['1f64c'],
  ':100:': ['1f4af'],
};
emojiList.setPriorityList(priorityList);

export default emojiList;
