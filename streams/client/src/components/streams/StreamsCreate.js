import React from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamCreate extends React.Component {
  render() {
    return <div>SteamCreate</div>
  }
}

export default reduxForm()(StreamCreate)