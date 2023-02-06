import { BiSearch } from 'react-icons/bi';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchWrap,
  Form,
  SearchButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  
  state = {
    search: '',
    page: 1,
  };

  handleQueryChange = el => {
    this.setState({ search: el.currentTarget.value.toLowerCase() });
  };
  
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.search.trim() === '') {
      return toast.error('Please enter your value', { theme: 'colored' });
    }
    this.props.onSubmit(this.state.search);
    // this.setState({ search: '' });
  };

  render() {
    const { handleQueryChange, handleSubmit } = this;
    const { search } = this.state;
    
    return (
      <SearchWrap>
        <Form onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <BiSearch size="2rem" />
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>

          <Input
            name={'search'}
            value={search}
            onChange={handleQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
        <ToastContainer icon={false} />
      </SearchWrap>
    );
  }
}
