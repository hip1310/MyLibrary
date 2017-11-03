/**
 * React Component to list the books
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component{
  // Using prop-types to define required props and their types
  static propTypes = {
  	books: PropTypes.array.isRequired
  }

  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <ol className="books-grid">
            // Loop through all the books to list them
            {this.props.books.map(book => 
              // Defining unique key for each list item is advisable,
              // as it helps React to know which list item got updated
              // rather than reacreating whole list all the time.
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    // Showing Book's thumbnail, title and all the authors
                    <div className="book-cover" 
                         style={{ width: 128, height: 193,
                                  backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    {book.authors.map((author, i) =>
                      <p key={i}> {author} </p>
                    )}
                  </div>
                </div>
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

// Export this component so that other component can import it
export default ListBooks
