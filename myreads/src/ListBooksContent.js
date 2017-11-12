/**
 * React Component to list the books contents
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ListBooksContent extends Component{
  static propTypes = {
    books         : PropTypes.array.isRequired,
    shelfValues   : PropTypes.array.isRequired,
    shelfNames    : PropTypes.array.isRequired,
    onUpdateShelf : PropTypes.func.isRequired
  }

  getBookShelf = (book) => {
    let searchBook = this.props.booksInShelf.find(function(shelfBook)
                       { return shelfBook.id === book.id })
    return ((searchBook) ? searchBook.shelf : "none")
  }

  render(){
    return(
      <ol className="books-grid">
        {/* Loop through all the books to list them */}
        {/* Defining unique key for each list item is advisable,
            as it helps React to know which list item got updated
            rather than reacreating whole list all the time.
        */}
        {(this.props.books) && (this.props.books.map(book =>
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                {/* Showing Book's thumbnail, title and all the authors */}
                <div className="book-cover" 
                     style={{ width: 128, height: 193,
                              backgroundImage: (book && book.imageLinks) ? `url(${book.imageLinks.thumbnail})`
                                               : `url(${'https://books.google.com/googlebooks/images/no_cover_thumb.gif'})`}}>
                </div>
                <div className="book-shelf-changer">
                  {/* We have to differentiate between /search and / pages.
                      If booksInShelf prop is there, then we are on /search page,
                      in that case get the book's shelf from the books which are
                      already on the shelf.
                      On / page get the book's shelf from book object.
                  */}
                  <select value={(this.props.booksInShelf) ? this.getBookShelf(book)
                                                           : book.shelf}
                          onChange={(e) => this.props.onUpdateShelf(book, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    {this.props.shelfValues.map((shelf, i) =>
                      <option key={i} value={shelf}>
                        {this.props.shelfNames[i]}
                      </option>
                    )}
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                {(book.authors) ? book.authors.map((author, i) =>
                  <div key={i}> {author} </div>
                ) : null }
              </div>
            </div>
          </li>
        ))}
      </ol>
    )
  }  
}

export default ListBooksContent
