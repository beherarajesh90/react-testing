import { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Headline extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const { heading, desc } = this.props;
    if (!heading) {
      return null;
    }
    return (
      <div data-test='headlineComponent'>
        <h1 data-test='headlineHeading'>{heading}</h1>
        <p data-test='headlineDesc'>{desc}</p>
      </div>
    );
  }
}
Headline.propTypes = {
  heading: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      isOnline: PropTypes.bool,
    })
  ),
};
export default Headline;
