import React, { useEffect, useState } from 'react'
import axios from "axios"
import './Hero_Main.css'
import './Hero_Main_Responsive.css'
import Short_Links from '../Short_Links/Short_Links'


const Hero_Main = () => {

  const [shortUrl, setShortUrl] = useState('')
  const [longUrl, setLongUrl] = useState('')
  const [recentShortUrl, setRecentShortUrl] = useState(JSON.parse(localStorage.getItem('recent_short')) || [])
  const [recentLongUrl, setRecentLongUrl] = useState(JSON.parse(localStorage.getItem('recent_long')) || [])
  const [border, setBorder] = useState('none')
  const [txt, setTxt] = useState('')

  const handleChange = (e) => {
      setLongUrl(e.target.value)
  }

  

  const arrayUrl = recentShortUrl.map((item, index) => ({
    [item]: recentLongUrl[index] || null
  }));

  
  
  const getUrl = async () => {

    if(!longUrl)
    {
      setBorder('2px solid hsl(0, 87%, 67%)')
      setTxt('Please add a link')
    }

    !longUrl ? setBorder('2px solid hsl(0, 87%, 67%)') && setTxt('Please add a link') : null
    
    const response = await axios.get(`https://tinyurl.com/api-create.php?url=${longUrl}`)
    .then(async (response) => {
      setShortUrl(response.data)

      if(recentShortUrl.length >= 3) 
        {
          setRecentShortUrl(value => value.slice(1))
          setRecentShortUrl(value => [...value, response.data])
          setRecentLongUrl(value => value.slice(1))
          setRecentLongUrl(value => [...value, longUrl])
        }
        else {
          setRecentShortUrl(value => [...value, response.data])
          setRecentLongUrl(value => [...value, longUrl])
        }

      
    
  })

    .catch((error) => console.log("This is the error: ", error))
  
  }

  useEffect(() => {
    localStorage.setItem('recent_short', JSON.stringify(recentShortUrl))
    localStorage.setItem('recent_long', JSON.stringify(recentLongUrl))
    

    if(longUrl)
      {
        setBorder('none')
        setTxt('')
      }
    
  }, [shortUrl, longUrl])


  return (
    <>
      <div className="hero_main_container">
        <div className="search_box">
          <div className="search_input">
          <input type="text" placeholder='Shorten a link here...' onChange={handleChange} style={{'border':border}}/>
          <p>{txt}</p>
          <button onClick={getUrl}>Shorten It!</button>
          </div>
          <p>{txt}</p>
        </div>
      </div>
      {
        arrayUrl.map((item, index) => (
          <Short_Links item={item} key={index}/> 
        ))
      }
          
    </>
  )
}

export default Hero_Main












  

//   return (
//     <>
//     <h2>Please enetr a Url</h2>
//         <div>
//           <input type="text" onChange={handleChange}/>
//           <button onClick={getUrl}>Submit</button>
//         </div>
//         <div>
//         <h1>Copy Shorten URL</h1>
//         <h3>{shortUrl}</h3>
//         </div>
//         <div>
//         <h1>Your Recent Shorten URLs</h1>
//           {
//             recentUrl ?
//             recentUrl.map((item, index) => {
//               return ( <h3 key={index}> {item} </h3> )
//             }) 
//             : null
//           }
//         </div>
//     </>
//   )
// }



