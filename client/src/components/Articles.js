import React from 'react'
import styled from 'styled-components'
import spinner from '../../src/spinner.gif'

function Articles({posts}) {
  return (
    <MainContainer>
       {!posts.length ? (
       <img src={spinner} alt="loading"/>
       ) : (
    posts.map((article, key) => (
        <div className='container'>
        <h2>{article.title}</h2>
        <p>{article.article}</p>
        <p>
            {article.authorname}
        </p>
        <div className='row'>
            <div className="col-sm-2">
            <a href="" className="btn btn-outline-success">Edit Article</a>
            </div> 
            <div className="col-sm-2">
            <a href="" className="btn btn-outline-danger">Delete Article</a>
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