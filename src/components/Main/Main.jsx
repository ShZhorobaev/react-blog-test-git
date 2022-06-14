import React from 'react';
import Post from '../Post/Post';

const Main = (props) => {

  // const posts = [
  //   { id: 1,
  //     title: "The first title", 
  //     desc: "The first desc"
  //   },
  //   { id: 1,
  //     title: "The second title", 
  //     desc: "The second desc"
  //   },
  //   { id: 1,
  //     title: "The third title", 
  //     desc: "The first desc"
  //   }
  // ]
  
  let post1 = {
    id: 1,
    title: "The first title", 
    desc: "The first desc"
  }
  
  let post2 = {
    id: 1,
    title: "The first title", 
    desc: "The first desc"
  }
  
  let post3 = {
    id: 1,
    title: "The first title", 
    desc: "The first desc"
  }
  
  return (
    // <div>
    //   {posts.map(post => {
    //     return <Post key={post.id} title={post.title} desc={post.desc}/>
    //   })}
      
    // </div>
    <div>
      return (
        <Post title={post1.title} desc={post1.desc}/>
        <Post title={post2.title} desc={post2.desc}/>
        <Post title={post3.title} desc={post3.desc}/>
      )
      
        
    </div>
  );
};

export default Main;
