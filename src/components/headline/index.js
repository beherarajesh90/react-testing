import { Component } from 'react';
import './styles.scss';

class Headline extends Component {
  constructor(props) {
    super(props);
  }
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

export default Headline;
