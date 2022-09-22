import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Parson name="Shuvo" age="26"></Parson>
      <Posts ></Posts>
    </div>
  );
}

function Parson(props){
  return(
    <div>
       <h1>Hello Frome Person</h1>
       <div className='bg-warning p-2'>
       <p>Name: {props.name} </p>
       <p>Age: {props.age}</p>
       </div>
       
    </div>
  )
}

function Posts(){
  let [posts, setPost] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  },[])
  return(
    <div>
       <h1>Post: {posts.length}</h1>
       
       {
        posts.map(post => <LoadPosts body={post.body} title={post.title}></LoadPosts>)
       }
    </div>
  )
}


function LoadPosts(props){
  return(
    <div className='bg-info p-2 rounded-3 m-3'>
      <p className='fw-bold'>Titel: {props.title}</p>
      <p>Body: {props.body} </p>
    </div>
  )
}

export default App;
