import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import AddBook from './AddBook'
import {Route} from 'react-router-dom'
// This is for using React Performance measurement tools
// Use this code only when measuring performance
//import Perf from 'react-addons-perf'
//window.Perf=Perf

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
    this.getBooks()
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })
  }

  getBooks(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    const shelfValues = ["currentlyReading", "wantToRead", "read"]
    const shelfNames = ["Currently Reading", "Want To Read", "Read"]

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
                     shelfValues={shelfValues}
                     shelfNames={shelfNames}
                     onUpdateShelf={this.updateBookShelf}/>
        )}/>
        {/* Use AddBook component to search and then add a book
            to one of the shelves
        */}
        <Route path="/search" render={({history}) => (
          <AddBook shelfValues={shelfValues}
                   shelfNames={shelfNames}
                   onUpdateShelf={this.updateBookShelf}
                   booksInShelf={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
