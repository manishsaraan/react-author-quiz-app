import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import axios from 'axios';
import _ from 'lodash';
    var data = [
        {
            name: 'Mark Twain', 
            imageUrl: 'images/authors/marktwain.jpg',
            books: ['The Adventures of Huckleberry Finn']
        },
        {
            name: 'Joseph Conrad',
            imageUrl: 'images/authors/josephconrad.png',
            books: ['Heart of Darkness']
        },
        {
            name: 'J.K. Rowling',
            imageUrl: 'images/authors/jkrowling.jpg',
            imageSource: 'Wikimedia Commons',
            imageAttribution: 'Daniel Ogren',
            books: ['Harry Potter and the Sorcerers Stone']
        },
        {
            name: 'Stephen King',
            imageUrl: 'images/authors/stephenking.jpg',
            imageSource: 'Wikimedia Commons',
            imageAttribution: 'Pinguino',
            books: ['The Shining','IT']
        },
        {
            name: 'Charles Dickens',
            imageUrl: 'images/authors/charlesdickens.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['David Copperfield', 'A Tale of Two Cities']
        },
        {
            name: 'William Shakespeare',
            imageUrl: 'images/authors/williamshakespeare.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
        }
    ];

const Book = (props) => {
   return (
        <div>
          <h4 className="answer">{ props.title.books  }</h4>
        </div>
     )
}
class Quiz extends React.Component{
   state = {
      author : this.props.data[0],
      books : this.props.data[1]
   }
   render(){
     return(
              <div>
                <div className="row">
                   <div className="col-md-4">
                     <img src={this.state.author.imageUrl} className="authorimage col-md-3" />
                   </div>
                   <div className="col-md-7">
                       {this.props.data.map( (b, i) => 
                              <div key={i}>
                                    <Book key = {i} title = { b } />
                              </div>
                        )}
                       </div>
                   <div className="col-md-1">

                   </div>
                </div>
              </div>
       );
   }
}

//render the app
ReactDOM.render(<Quiz data = { data } />,document.getElementById('container'))