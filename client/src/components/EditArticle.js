import React, {useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';

function AddArticle() {
  const[title, setTitle] = useState('');
  const[article, setArticle] = useState('');
  const[authorname, setAuthorName] = useState('');

  const changeOnClick = e => {
    e.preventDefault();

    // Get Values from form
    const articles ={
      title,
      article,
      authorname
    }

    // Clear form values
    setTitle('')
    setArticle('')
    setAuthorName('')

    // Send to database
    axios.post("/articles/add", articles)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }



  return (
    <AddArticleContainer>
      <div className="container">
        <h1>Add New Article</h1>
    <form onSubmit={changeOnClick} encType='multipart/form-data'>
  <div className="form-group">
    <label htmlFor="authorname">Author Name</label>
    <input 
    type="text"
    value={authorname} 
    className="form-control"  
    placeholder="Auther Name"
    onChange={e => setAuthorName(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input 
    type="text" 
    value={title}
    className="form-control" 
    placeholder="Enter Title"
    onChange={e => setTitle(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor='article'>Article</label>
    <textarea 
    className="form-control" 
    rows="3"
    value={article}
    onChange={e => setArticle(e.target.value)}
    ></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Post Article</button>
</form>
</div>
</AddArticleContainer>
  )
}

export default AddArticle;

const AddArticleContainer = styled.div `
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25;

  h1{
    font-weight: 900;
    color: var(--dark-green);
  }

  .btn-primary{
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover{
      background: var(--light-green);
    }
  }

`