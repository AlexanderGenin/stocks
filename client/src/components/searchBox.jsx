import { Component } from "react";

class SearchBox extends Component {
  state = {
    ticker: "",
    typingTimeout: 0,
  };

  // onChange = (e) => {
  //   if (this.state.typingTimeout) {
  //     clearTimeout(this.state.typingTimeout);
  //   }

  //   this.setState({
  //     value: e.target.value,
  //     typingTimeout: setTimeout(function () {
  //       this.sendToParent(this.state.value);
  //     }, 2000),
  //   });
  // };

  onChange = (ticker) => {
    this.setState({ ticker });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.ticker);
          }}
        >
          <input
            id={this.props.inputId}
            list={this.props.listId}
            type="text"
            name="query"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={(e) => this.onChange(e.target.value)}
          />

          <datalist id={this.props.listId}>
            {this.props.options.map((option, key) => (
              <option value={option.value} key={key} />
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
