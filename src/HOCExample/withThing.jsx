import React from 'react';

const withThing = Component => {
  return class extends React.Component {
    state = {
      thing: 'Unicorns',
    };

    setThing = thing => {
      this.setState({ thing });
    };

    render() {
      return <Component thing={this.state.thing} setThing={this.setThing} />;
    }
  };
};

export default withThing;
