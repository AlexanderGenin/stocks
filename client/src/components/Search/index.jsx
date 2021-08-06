import React, { Component } from "react";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  Dropdown,
  Option,
} from "./search-styles";
import { RiSearchLine } from "react-icons/ri";

class Search extends Component {
  state = {
    showResults: false,
  };

  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ showResults: false });
    }
  };

  render() {
    return (
      <SearchContainer ref={this.wrapperRef}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(e);
          }}
        >
          <SearchInput
            type="text"
            name="query"
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            onClick={() => this.setState({ showResults: true })}
          />
          {this.state.showResults ? (
            <Dropdown>
              {this.props.options.map((option, key) => (
                <Option
                  key={key}
                  onClick={() => {
                    this.props.onClick(option.Ticker);
                    this.setState({ showResults: false });
                  }}
                >
                  <div>
                    <p>{option.Ticker}</p>
                    <p>{option.Name}</p>
                  </div>
                </Option>
              ))}
            </Dropdown>
          ) : null}
          <SearchButton type="submit">
            <RiSearchLine />
          </SearchButton>
        </form>
      </SearchContainer>
    );
  }
}

export default Search;
