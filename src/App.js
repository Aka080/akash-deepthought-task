import React, { useEffect,useCallback, useState } from 'react'
import axios from 'axios';
import _ from 'lodash';
import { API_KEY } from './apiSetup';
import './App.css';

function App() {
const [featured,setFeatured]=useState([]);
const [searchedGif,setSearchedGif]=useState([]);
const [inputTerm,setInputTerm] =useState('')
const [searchTerm,setSearchTerm]=useState('')
const [trending,setTrending] = useState([])
const[resultList,setResultList]=useState({feature:true,trending:false,searchResult:false})

const baseUrl = 'https://g.tenor.com/v1'

const delayedQuery = useCallback(_.debounce((value)=>{
  setSearchTerm(value)
},500),[])

useEffect(()=>{
  axios.get(baseUrl+`/categories?key=${API_KEY}&type=featured&limit=10`).then((res)=>{
    setFeatured(res.data.tags)
  })   
},[])
useEffect(()=>{
 
  axios.get(baseUrl+`/trending?key=${API_KEY}&contentfilter=medium&media_filter=basic`).then((res)=>{
    setTrending(res.data.results)
  })
},[resultList.trending]) 
useEffect(()=>{
 
  axios.get(baseUrl+`/search?key=${API_KEY}&q=${searchTerm}&contentfilter=medium&media_filter=minimal&limit=10`)
  .then((res)=>{
    setSearchedGif(res.data.results)
  })
},[searchTerm]) 

const seeFeatured=()=>{
  setResultList({feature:true,trending:false,searchResult:false})
}
const seeTrending=()=>{
  setResultList({feature:false,trending:true,searchResult:false})
}

const seeResult =(e)=>{
  setInputTerm(e.target.value)
  delayedQuery(e.target.value)
  setResultList({feature:false,trending:false,searchResult:true})
}


 


return <div>
      <div className='gif-welcomeMessage'>
        <h1><i class="fas fa-meteor"></i></h1>
        <h1>Search that Giff!!</h1>
      </div>

      <section className='gif-SearchBox'>
          <input type='text' placeholder='type to earch gifs...' value={inputTerm} onChange={(e)=>seeResult(e)}></input>
      </section>

      <section className='gif-categories'>
       
       <div className={`gif-categoryTag ${resultList.feature?'active':''}`} onClick={()=>{seeFeatured()}}>#featured</div>
       <div className={`gif-categoryTag ${resultList.trending?'active':''}`}onClick={()=>{seeTrending()}}>#trending</div>
      </section>
      <section className ='gif-searchResults'>
        <ul className='gif-searchResult-list'>
            {
              resultList.feature?featured.map((item)=>{
                  return <li>
                    <img src={item.image}/>
                  </li>
              }):''
            }
            {  resultList.searchResult?searchedGif.map((item)=>{
                return <li key={item.id}>
                 
                  <img src={item.media[0].tinygif.url}/>
                </li>
              }):''
            }
             
            { 
              resultList.trending?trending.map((item)=>{
                return <li key={item.id}>
                  <img  src={item.media[0].gif.url} />
                </li>
              }):''
            }
        </ul>
      </section>


</div>
}

export default App;
