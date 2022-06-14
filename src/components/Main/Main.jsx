import React from 'react';
import Post from '../Post/Post';

const Main = (props) => {
  // let title1 = "The title of the first post"
  // let title2 = "The tittle of the second post"
  // let title3 = "The title of the third post" 
  
  let book = {
    author: "Robert Kiosaki ",
    title: "Become rich blah blah",
    desc: "Become rich in one month"
  }
  
  return (
    <div>
      <Post title={book.author}/>
      <Post title={book.title}/>
      <Post title={book.desc}/>
    </div>
  );
};

export default Main;
