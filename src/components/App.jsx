import React, { Component } from 'react';
import { requestPhotos } from 'services/api';

export class App extends Component {
  state = {
    pictureName: '',
    responcedPhotos: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPictures: null,
    modal: { isOpen: false, modalData: null },
  };

  async componentDidMount(_, prevState) {
    const { pictureName, page } = this.state;
    if (
      this.state.pictureName !== prevState.pictureName ??
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoading: true });
        const responcedPhotos = await requestPhotos(pictureName, page);
        console.log(requestPhotos);
        this.setState({
          totalPictures: responcedPhotos.totalHits,
          responcedPhotos:
            page === 1
              ? responcedPhotos.hits
              : [...prevState.responcedPhotos, ...responcedPhotos.hits],
        });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  render() {
    return <div>App</div>;
  }
}
