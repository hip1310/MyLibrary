import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import AddBook from './AddBook'
import {Route} from 'react-router-dom'

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

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then()
    this.componentDidMount()
  }

  render() {
    return (
      <div className="app">
        {/* Route component of React Router renders particular UI
            if the path matches to the URL
        */}
        {/* Use ListBooks component to list the books
            Pass books data as props
        */}
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books}
                     onUpdateShelf={this.updateBookShelf}/>
        )}/>
        {/* Use AddBook component to search and then add a book
            to one of the shelves
        */}
        <Route path="/search" render={({history}) => (
          <AddBook/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
