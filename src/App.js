
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu.js'
import Hotels from './components/Hotels/Hotels'
import LoadingIcon from './components/UI/LoadingIcon.js/LoadingIcon';
import Searchbar from './components/UI/LoadingIcon.js/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer'


class App extends Component {

  hotels = [
    {
      id: 1,
      name: 'Pod akacjami',
      city: 'Warszawa',
      rating: 8.3,
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia sagittis nunc, vitae consequat ligula aliquet eget. Vivamus a aliquam ex. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '',
    },
    {
      id: 2,
      name: 'Dębowy',
      city: 'Lublin',
      rating: 8.8,
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia sagittis nunc, vitae consequat ligula aliquet eget. Vivamus a aliquam ex. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '',
    },
  ];


  state =  {
    hotels : this.hotels,
    loading: true
  };

searchHandler(term) {
  console.log('szukaj z app', term)
  const hotels = [...this.state.hotels]
      .filter(x => x.name.toLowerCase()
      .includes(term.toLowerCase()));
  this.setState({ hotels })
}

componentDidMount() {
  setTimeout(() => {
    this.setState({ hotels: this.hotels, loading: false });
  }, 1000);

  
}

  render () {
    
    return (
        <Layout
        header={
        <Header> 
          <Searchbar onSearch={term => this.searchHandler()} /> 
        </Header>
        }
        menu={<Menu />}
        content={
          this.state.loading 
          ? <LoadingIcon />
          : <Hotels hotels={this.state.hotels} />
          
        }
        footer={
          <Footer />
        }
        />
    );
  };

};

export default App;
