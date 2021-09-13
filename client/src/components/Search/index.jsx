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

  wrapperRef = React.createRef();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
      this.setState({ showResults: false });
    }
  };

  render() {
    const { placeholder, options, onSubmit, onChange, onClick } = this.props;

    return (
      <SearchContainer ref={this.wrapperRef}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
        >
          <SearchInput
            type="text"
            name="query"
            placeholder={placeholder}
            onChange={onChange}
            onClick={() => this.setState({ showResults: true })}
          />
          {this.state.showResults ? (
            <Dropdown>
              {options.map(({ ticker, name }, index) => (
                <Option
                  key={index}
                  onClick={() => {
                    onClick(ticker);
                    this.setState({ showResults: false });
                  }}
                >
                  <div>
                    <p>{ticker}</p>
                    <p>{name}</p>
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
