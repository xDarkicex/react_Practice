import React from 'react'
import unsplash from './unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'


class App extends React.Component {
  state = {
    images: []
  }
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
        client_id:'5c6d66829cc76c198a7a87f53feba2120c059a6c2536c15519f03c632e08f7a4'
      },
    })
    this.setState({images: response.data.results})
  }



  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App