import  React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import apiKey from '../config';
import Nav from './Nav';
import Search from './Search';
import PhotoPage from './PhotoPage';
import PageNotFound from './PageNotFound';
 
class App extends PureComponent {
  
  constructor() {
    super();
    console.log('Test constructed');
    this.state = {
      photos: [],
      foodPhotos: [],
      beachPhotos: [],
      sunsetPhotos: [],
      loading: true,
    }
  }

  //everytime state changes React rerenders page 
  componentDidMount() {
    console.log('Test mounted');
    this.searchPhotos();
    this.getFoodPhotos();
    this.getBeachPhotos();
    this.getSunsetPhotos();
  }

  searchPhotos = (query = "flowers") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      this.setState({
        photos: response.data.photos.photo,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getFoodPhotos = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=food&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        this.setState({
          foodPhotos: response.data.photos.photo
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getBeachPhotos = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=beach&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        this.setState({
          beachPhotos: response.data.photos.photo
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getSunsetPhotos = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        this.setState({
          sunsetPhotos: response.data.photos.photo
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  /**
   * this.getFoodPhotos() -> render immediately/automatically, will execute at that route 
   * () => reference to a function that will get executed on initiation
   * 
   * @returns 
   */
  render() {
    console.log('Test rendered')
    return (
      <BrowserRouter>
          <div className="container">
            <Search onSearch={this.searchPhotos}/>
            <Nav />
            <Switch>
              <Route exact path="/" render={() => <PhotoPage data={this.state.photos}/>} />
              <Route exact path="/search/:query" render={() => <PhotoPage data={this.state.photos}/>} />
              <Route path="/food" render={ () => <PhotoPage data={this.state.foodPhotos} onClick={this.getFoodPhotos}/>} />
              <Route path="/beaches" render={ () => <PhotoPage data={this.state.beachPhotos} onClick={this.getBeachPhotos}/>} />
              <Route path="/sunset" render={ () => <PhotoPage data={this.state.sunsetPhotos} onClick={this.getSunsetPhotos}/>} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App; 

/**
 * caching -- store in an array 
 * react tutorial 
 * research caching and implement 
 * 
 */