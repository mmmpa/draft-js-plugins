import React from 'react';
import unionClassNames from 'union-class-names';
import emojione from 'emojione';

const Emoji = ({ theme = {}, cacheBustParam, imagePath, imageType, className, decoratedText, ...props }) => {
  const shortName = emojione.toShort(decoratedText);
  // short name to image url code steal from emojione source code

  // TODO: patch for https://github.com/draft-js-plugins/draft-js-plugins/issues/717
  // const shortNameForImage = emojione.emojioneList[shortName].unicode[emojione.emojioneList[shortName].unicode.length - 1];
  // const backgroundImage = `url(${imagePath}${shortNameForImage}.${imageType}${cacheBustParam})`;
  const { unicode } = emojione.emojioneList[shortName] || { unicode: [] };
  const shortNameForImage = unicode[unicode.length - 1];
  const backgroundImage = shortNameForImage ?
    `url(${imagePath}${shortNameForImage}.${imageType}${cacheBustParam})` : undefined;

  const combinedClassName = unionClassNames(theme.emoji, className);
  return (
    <span
      className={combinedClassName}
      title={emojione.toShort(decoratedText)}
      style={{ backgroundImage }}
    >
      {props.children}
    </span>
  );
};

export default Emoji;
