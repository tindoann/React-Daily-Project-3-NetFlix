import React from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        apiKey: '87dfa1c669eea853da609d4968d294be', 
        searchTerm: '', searchUrl: ''
      }
  render() {
    return (
     
  }, 

  handleKeyUp(e) {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = 'serach/multi?query=' + this.state.searchTerm + '&api_key=' + this.apiKey; 
      this.setState({seachUrl:searchUrl}); 
    }
  }

  handleChange(e) {
    this.setState({searchTerm : e.target.value}); 
  }, 
  render() {
    return (
      <div>
        <header className='Header'>
          <Logo />
          <Navigation />
          <div id='search' className='Search'>
            <input onKeyUp={this.handleKeysUp} onChange={this.handleChange} type='Search for a title...' value={this.state.searchTerm}/>
          </div>
          <UserProfile />
        </header>
        <Hero />
        <TitelList title='Search Results' url={this.state.searchUrl} />
        <TitleList title='Top TV picks for Jack for Jack' url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}
};
// Navigation


class Navigation extends React.Component {
  render() {
  return (
      <div id='navigation' className='Navigation'>
        <nav>
          <ul>`
            <li>Browse</li>
            <li>My list</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    ); 
  }
};

// User Profile
class UserProfile extends React.Component {
  render() {
    return (
      <div id='UserProfile'>
        <div className='User'>
          <div className='name'>Jack Oliver</div>
          <div className='image'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" alt="profile" /></div>          
          </div>
        </div>
    ); 
  }
}); 







