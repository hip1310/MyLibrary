/**
 * React Component to list the books
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AddBookShelf from './AddBookShelf'

class ListBooks extends Component{
  // Using prop-types to define required props and their types
  static propTypes = {
    books         : PropTypes.array.isRequired,
    onUpdateShelf : PropTypes.func.isRequired
  }

  render(){
    const {books} = this.props
    const shelfValues = ["currentlyReading", "wantToRead", "read"]
    const shelfNames = ["Currently Reading", "Want To Read", "Read"]

    // Filter the books according to their shelf name
    const shelfBooks = []
    shelfValues.map(shelfValue =>
      shelfBooks.push(books.filter((book) => (book.shelf === shelfValue)))
    )

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* Add shelf by providing shelf name and books in that shelf
              as props
          */}
          {shelfValues.map((shelfValue, i) =>
            <AddBookShelf shelfValue={shelfValue}
                          shelfName={shelfNames[i]}
                          booksInShelf={shelfBooks[i]}
                          shelfValues={shelfValues}
                          shelfNames={shelfNames}
                          onUpdateShelf={this.props.onUpdateShelf} />
          )}
        </div>
      </div>
    )
  }
}

// Export this component so that other component can import it
export default ListBooks
