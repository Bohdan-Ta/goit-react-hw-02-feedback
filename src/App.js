import { Component } from 'react';
import Feedback from './components/Feedback';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback />
        </Section>
      </div>
    );
  }
}

export default App;
