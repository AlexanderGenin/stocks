import { Component } from "react";
import { SearchContainer, SearchInput, SearchButton } from "./search-styles";
import { RiSearchLine } from "react-icons/ri";

class Search extends Component {
  render() {
    return (
      <SearchContainer>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(e);
          }}
        >
          <SearchInput
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
          <SearchButton type="submit">
            <RiSearchLine />
          </SearchButton>
        </form>
      </SearchContainer>
    );
  }
}

export default Search;
