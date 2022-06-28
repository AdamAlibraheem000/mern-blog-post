import React, {useState} from 'react'
import styled from 'styled-components'
import spinner from '../../src/spinner.gif'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Articles({posts}) {
  const[article, setArticle] = useState([]);
  // Delete article by ID
  const deleteArticle = id  => {
    axios.delete(`/articles/${id}`)
    .then(res => console.log(res.data))
    setArticle(article.filter(elem => elem._id !== IDBCursor))
  }



  return (
    <MainContainer>
       {!posts.length ? (
       <img src={spinner} alt="loading"/>
       ) : (
    posts.map((article, key) => (
        <div className='container' key={key}>

          {/* Link for specific article by ID */}
          <Link to={{
            pathname: `/article/${article._id}`
          }}
          >
        <h2>{article.title}</h2>
        </Link>
        <p>{article.article}</p>
        <p>
            {article.authorname}
        </p>
        <div className='row'>
            <div className="col-sm-2">
            <a href="" className="btn btn-outline-success">Edit Article</a>
            </div> 
            <div className="col-sm-2">
            <a onClick={() => deleteArticle(article._id)} className="btn btn-outline-danger">Delete Article</a>
            </div>
        </div>
        </div>
    )))}
    </MainContainer>
  )
}

export default Articles

const MainContainer = styled.div`
    margin: 7rem 0;

    img{
      width: 10rem;
      display: block;
      margin: 0 auto;
    }

`