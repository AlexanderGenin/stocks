import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(e);
          }}
        >
          <input
            id={this.props.inputId}
            list={this.props.listId}
            type="text"
            name="query"
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
          />

          <datalist id={this.props.listId}>
            {this.props.options.map((option, key) => (
              <option value={option} key={key} />
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
