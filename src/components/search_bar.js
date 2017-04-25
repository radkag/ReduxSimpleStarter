import React, { Component } from 'react';
// const Component = React.Component;



// function components
// const SearchBar = () => {
//   return <input />
// };

// class components
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // term can have whatever name we want
  }

  render() { // render is method here
    return (
    <div className="search-bar">
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
    </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // all the code below can be written easily as in input component upp here
  // onInputChange(event) {  // "Input" mostly represents the element which handle the event
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
