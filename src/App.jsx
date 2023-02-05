import React, {useEffect, useState} from 'react';
import './index.scss';
import Overview from './Components/Overview.jsx';
import QnA from './Components/QnA/QandA.jsx'
import RnR from './Components/RnR/RnR.jsx'
//import for reviews
const axios = require('axios');

function App() {

  const [currProducts, changeProducts] = useState([]);//current array
  const [currProd, changeProd] = useState([]);//current product that is displayed
  const [currStyles, changeStyles] = useState([]); //all styles for the currently rendered product
  const [displayedStyle, changeDisplayedStyle] = useState({photos: [{}, {}, {}, {}, {}, {}]});//currently displayed style inside the image gallery
  const [displayedPhoto, changeDisplayedPhoto] = useState();
  const [currReviews, setCurrReviews] = useState([]); //All reviews for the current product
  const [currMeta, setCurrMeta] = useState([]);
  const [currQuestions, setCurrQuestions] = useState([]);
  const [reviewsSort, setReviewsSort] = useState('newest');
  const [render, reRender] = useState([]);

  useEffect(() => {
    axios.post('', {
      term: '/products',
    })
    .then((data) => {
      changeProducts(data.data);//update the current products
      changeProd(data.data[8]);//update the currently displayed product, defaults to first on page load.

      //communicate with server, fetch api data for styles
      axios.post('', {
        term: `/products/${data.data[8].id}/styles`,
      })
      .then((data) => {
        changeStyles(data.data.results); //update the current styles for the currently displayed product
        changeDisplayedStyle(data.data.results[0]); //update the currently displayed style, defaults to first on page load.
        changeDisplayedPhoto(data.data.results[0].photos[0].url);
      })
      // .catch((err) => {
      //   console.log('axios post for product data failed', err);
      // });

      //this is the array of products received upon page render
      // console.log('this is the data', data.data);
    })
    .catch((err) => {
      // console.log('axios post for product data failed', err);
    });



  }, []);

  useEffect(() => {

      axios.post('/revs', {
        term: '/reviews/',
        product_id: currProd.id,
        sort: reviewsSort
      })
      .then((data) => {
        // console.log('this is the REVIEWS data', data.data);
        setCurrReviews(data.data.results)
      })
      .catch((err) => {
        throw err;
      });
      axios.post('/revsMeta', {
        term: '/reviews/meta',
        product_id: currProd.id
      })
      .then((data) => {
        setCurrMeta(data.data);
        // console.log('Meta Results', data.data);
      })
      .catch((err) => {
        throw err;
      });

  }, [reviewsSort, currProd])

  useEffect(() => {
    if(!Array.isArray(currProd)){
      axios.post('/questions', {
        term: '/qa/questions',
        product_id: currProd.id
      })
      .then((data) => {setCurrQuestions(data.data.results)})
      .catch((err) => console.log(err))
    }
  }, [currProd])
  //console.log(currQuestions)
  return (
    <div className="app">
      <Overview currMeta={currMeta} displayedPhoto={displayedPhoto} changeDisplayedPhoto={changeDisplayedPhoto} displayedStyle={displayedStyle} changeDisplayedStyle={changeDisplayedStyle} currStyles={currStyles} changeStyles={changeStyles} currProd={currProd} changeProd={changeProd} currProducts={currProducts} changeProducts={changeProducts}/>
      <QnA currProd={currProd} currQuestions={currQuestions}/>
      <RnR currProd={currProd} changeProd={changeProd} currProducts={currProducts} changeProducts={changeProducts} currReviews={currReviews} currMeta={currMeta} reviewsSort={reviewsSort} setReviewsSort={setReviewsSort} reRender={reRender}/>
    </div>
  );
}

export default App;