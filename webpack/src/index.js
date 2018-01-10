var react = require('react');
var reactDOM = require('react-dom');
var EmojiComponent = require('expose-loader?emojiMart.Emoji!./emoji.js');

ReactDOM.render(
 <EmojiComponent emoji={{ id: 'poop' }} size={30} />,
 document.getElementById('app')
);