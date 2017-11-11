/**
 * React Component to list the books
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AddBookShelf from './AddBookShelf'
import {Link} from 'react-router-dom'

class ListBooks extends Component{
  // Using prop-types to define required props and their types
  static propTypes = {
    books         : PropTypes.array.isRequired,
    onUpdateShelf : PropTypes.func.isRequired
  }

  render(){
    const {books} = this.props

    // Filter the books according to their shelf name
    const shelfBooks = []
    this.props.shelfValues.map(shelfValue =>
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
          {this.props.shelfNames.map((shelfName, i) =>
            <AddBookShelf key={i}
                          shelfName={shelfName}
                          booksInShelf={shelfBooks[i]}
                          shelfValues={this.props.shelfValues}
                          shelfNames={this.props.shelfNames}
                          onUpdateShelf={this.props.onUpdateShelf} />
          )}
        </div>
        <div className='open-search'>
          {/* Link component of React Router talks to the BrowserRouter
              component and tells it to update the url.
          */}
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

// Export this component so that other component can import it
export default ListBooks
