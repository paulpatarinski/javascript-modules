var React = require('react');
var Emoji = require('emoji-mart').Emoji;

class PctyEmoji extends React.Component {
 render() {
  return <Emoji
   {...this.props}
  />
 }
}

module.exports = PctyEmoji;