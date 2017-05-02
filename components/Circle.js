import React from 'react';

export default class Circle extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props)
    return(nextProps.circle !== this.props.circle);
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}
