/**
 * React Component to add a shelf
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ListBooksContent from './ListBooksContent'

class AddBookShelf extends Component{
  static propTypes = {
    shelfName    : PropTypes.string.isRequired,
    booksInShelf : PropTypes.array.isRequired
  }

  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ListBooksContent books={this.props.booksInShelf} />
        </div>
      </div>
    )
  }  
}

export default AddBookShelf
