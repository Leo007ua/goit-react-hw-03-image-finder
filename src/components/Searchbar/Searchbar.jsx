import PropTypes from 'prop-types';
import { Component } from 'react';
import { SearchbarStyled } from './SearchbarStyled';

class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  handleOnChange = event => {
    this.setState({
      pictureName: event.target.value,
    });
  };

  formOnSubmit = event => {
    event.preventDefault();
    this.props.OnSubmit(this.state.pictureName);
    this.resetForm(event);
  };

  resetForm = event => {
    event.target.reset();
    this.setState({ pictureName: '' });
  };

  render() {
    return (
      <SearchbarStyled className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name= "pictureName"
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleOnChange}
          />
        </form>
      </SearchbarStyled>
    );
  }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Searchbar;
