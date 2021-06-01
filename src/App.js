import React,{  useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards/NewsCards'
import useStyles from './styles.js'

const alankey='a85038d6db021b0f61d05f450cd54ff92e956eca572e1d8b807a3e2338fdd0dc/stage'
const App=()=>{
  const [newsArticle, setNewsArticles]=useState([]);
  const classes =useStyles();
    useEffect(()=>{
        alanBtn({
            key:alankey,
            onCommand: ({ command,articles})=> {
                if(command ==='newHeadlines'){
                setNewsArticles(articles);
                }
            }
        })

    },[])
    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/alan.jpg"  className={classes.alanLogo} alt="logo" />

            </div>
            <NewsCards articles={newsArticle}></NewsCards>
        </div>
    );
}


export default App;


//1:30