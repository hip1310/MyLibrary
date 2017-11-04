/**
 * React Component to list the books
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AddBookShelf from './AddBookShelf'

class ListBooks extends Component{
  // Using prop-types to define required props and their types
  static propTypes = {
    books : PropTypes.array.isRequired
  }

  render(){
    const {books} = this.props
    let currReadBooks, readBooks, wantReadBooks

    // Filter the books according to their shelf name
    currReadBooks = books.filter((book) => (book.shelf === "currentlyReading"));
    readBooks = books.filter((book) => (book.shelf === "read"));
    wantReadBooks = books.filter((book) => (book.shelf === "wantToRead"));

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* Add shelf by providing shelf name and books in that shelf
              as props
          */}
          <AddBookShelf shelfName="Currently Reading"
                           booksInShelf={currReadBooks}/>
          <AddBookShelf shelfName="Want To Read"
                           booksInShelf={wantReadBooks}/>
          <AddBookShelf shelfName="Read"
                           booksInShelf={readBooks}/>
        </div>
      </div>
    )
  }
}

// Export this component so that other component can import it
export default ListBooks
