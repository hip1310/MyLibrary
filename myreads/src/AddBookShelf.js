/**
 * React Component to add a shelf
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ListBooksContent from './ListBooksContent'

class AddBookShelf extends Component{
  static propTypes = {
    shelfName     : PropTypes.string.isRequired,
    shelfValue    : PropTypes.string.isRequired,
    booksInShelf  : PropTypes.array.isRequired,
    shelfValues   : PropTypes.array.isRequired,
    shelfNames    : PropTypes.array.isRequired,
    onUpdateShelf : PropTypes.func.isRequired
  }

  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ListBooksContent books={this.props.booksInShelf}
                            shelf={this.props.shelfValue}
                            shelfValues={this.props.shelfValues}
                            shelfNames={this.props.shelfNames}
                            onUpdateShelf={this.props.onUpdateShelf} />
        </div>
      </div>
    )
  }  
}

export default AddBookShelf
