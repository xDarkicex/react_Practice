import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import StreamCreate from './streams/StreamsCreate'
import StreamList from './streams/StreamsList'
import StreamShow from './streams/StreamsShow'
import StreamEdit from './streams/StreamsEdit'
import StreamDelete from './streams/StreamsDelete'
import Header from './Header'

const App = () => {
  return (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/show" component={StreamShow} />
        <Route path="/streams/delete" component={StreamDelete} />
      </div>
      
    </BrowserRouter>
  </div>
  )
}

export default App