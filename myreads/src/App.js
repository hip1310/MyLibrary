import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  // Use the component's state to store the books data
  // So, that we can manage that data easily
  state = {
    books : []
  }

  /**
   *  When this component get mounted, get all the books data from the
   *  backend-server using BooksAPI and store them in the component's
   *  state.
   */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        {/* Use ListBooks component to list the books
            Pass books data as props
        */}
        <ListBooks books={this.state.books}/>
      </div>
    )
  }
}

export default BooksApp
