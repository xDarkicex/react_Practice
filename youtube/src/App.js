import React from 'react'
import SearchBar from './SearchBar'
import youtube from './apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
 
videos: [],
selectedVideo: null,
 
  componentDidMount() {
  
    this.onTermSubmit('mechanical animals'])
  }
  onTermSubmit = async (term) => {
    await youtube.get('/search', {
      params: {
        q: term
      }
    }).then((response) => {
      this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
    })
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid ui stackable">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App