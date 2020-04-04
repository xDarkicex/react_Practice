import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  state = {lat: null, errorMessage: ''}
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // must call setState
        this.setState({lat: position.coords.latitude});
      },
      (err) => this.setState({errorMessage: err.message})
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
    return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="please allow location."/>
  }
  //react requires render to be defined
  render() {
      return (
        <div className="border red">
          {this.renderContent()}
        </div>
      )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)