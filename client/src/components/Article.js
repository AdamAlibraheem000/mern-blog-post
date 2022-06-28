import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import spinner from '../../src/spinner.gif'

function Article(props) {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [authorname, setAuthorName] = useState('');


    useEffect(()=> {
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.date.title),
            setArticle(res.data.article),
            setAuthorName(res.data.authorname)
        ])
        .catch(error => console.log(error));
    }, [props]);


  return (
    <>
    <MainContainer>
       {!title || !article || !authorname ? <img src={spinner} alt="loading"/> : 
       <>
       <h2>{title}</h2>
       <p>{article}</p>
       <p>{authorname}</p>
       <br />
       <button type="submit" className="btn btn-primary">Post Article</button>
       </>
       }
    </MainContainer>
    </>
  )
}

export default Article;

const MainContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2{
        text-align: center;
        font-weight: 900;
        color: var(--dark-green);
    }

    img{
        display: block;
        margin: auto;
    }

    .btn-primary{
        background: var(--dark-green);
        border: none;
        &:hover{
          background: var(--light-green);
        }
      }

`