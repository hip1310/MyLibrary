/**
 * React Component to search and then add a book
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooksContent from './ListBooksContent'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component{
  state = {
    searchResults : []
  }

  static propTypes = {
    shelfValues   : PropTypes.array.isRequired,
    shelfNames    : PropTypes.array.isRequired,
    onUpdateShelf : PropTypes.func.isRequired,
    booksInShelf  : PropTypes.array.isRequired
  }

  updateQuery = (query) => {
    this.searchBooks(query.trim(), 20)
  }

  searchBooks = (query, maxResults) => {
    if(!query){
      this.setState({searchResults : []})
    }
    else{
      BooksAPI.search(query, maxResults).then((books) =>{
        let searchResults = []
        if(Array.isArray(books)) searchResults = books
        this.setState({searchResults})
      })
    }
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
                   placeholder="Search by title or author"
                   onChange={(e) => this.updateQuery(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ListBooksContent books={this.state.searchResults}
                            shelfValues={this.props.shelfValues}
                            shelfNames={this.props.shelfNames}
                            onUpdateShelf={this.props.onUpdateShelf}
                            booksInShelf={this.props.booksInShelf}/>
        </div>
      </div>
    )
  }
}

export default AddBook
