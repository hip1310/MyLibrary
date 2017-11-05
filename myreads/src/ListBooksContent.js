/**
 * React Component to list the books contents
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ListBooksContent extends Component{
  static propTypes = {
    books         : PropTypes.array.isRequired,
    shelf         : PropTypes.string.isRequired,
    shelfValues   : PropTypes.array.isRequired,
    shelfNames    : PropTypes.array.isRequired,
    onUpdateShelf : PropTypes.func.isRequired
  }

  render(){
    return(
      <ol className="books-grid">
        {/* Loop through all the books to list them */}
        {/* Defining unique key for each list item is advisable,
            as it helps React to know which list item got updated
            rather than reacreating whole list all the time.
        */}
        {this.props.books.map(book => 
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                {/* Showing Book's thumbnail, title and all the authors */}
                <div className="book-cover" 
                     style={{ width: 128, height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                </div>
                <div className="book-shelf-changer">
                  <select value={this.props.shelf}
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
                {book.authors.map((author, i) =>
                  <div key={i}> {author} </div>
                )}
              </div>
            </div>
          </li>
        )}
      </ol>
    )
  }  
}

export default ListBooksContent
