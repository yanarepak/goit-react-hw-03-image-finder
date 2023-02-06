import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPhotos } from 'api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, images } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });

      fetchPhotos(query, page).then(({ data }) => {
        if (!data.hits.length) {
          return toast.error(`This request ${query} is not found`, {
            theme: 'colored',
          });
        }
        this.setState({
          images: [...images, ...data.hits],
          totalHits: data.totalHits,
          isLoading: false,
        });
      });
    }
  }

  handleFormSubmit = name => {
    this.setState({ query: name, page: 1, images: [], totalHits: 0 });
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
        {this.state.isLoading && <Loader />}
        {this.state.images && <ImageGallery images={this.state.images} />}
        {this.state.totalHits > 12 && <Button onLoadMore={this.onLoadMore} />}
      </div>
    );
  }
}
