import React, { useEffect, useState } from 'react'
import './Short_Links.css'
import './Short_Links_Responsive.css'

const Short_Links = ({ item }) => {

    const [longUrl, setLongUrl] = useState()
    const [shortUrl, setShortUrl] = useState()
    const [btn, setBtn] = useState('Copy')
    const [btnColor, setBtnColor] = useState('#2acfcf')

    
    useEffect(() => {
        Object.entries(item).forEach(([key, value]) => {
            setShortUrl(key)
            setLongUrl(value

            )
          });
      
    }, [item])


    const handleClick = () => {
        setBtn('Copied!')
        setBtnColor('#3b3054')
        setTimeout(() => {
            setBtn('Copy')
            setBtnColor('#2acfcf')
        }, 1500);

        navigator.clipboard.writeText(shortUrl)
    }
    


   

    return (
        <div className="short_links">
        <div className="short_link">

            <p>{longUrl}</p>

            <div className='link_copy'>

                <p>{shortUrl}</p>
                <button onClick={handleClick} style={{ 'backgroundColor': btnColor}}>{btn}</button>
            </div>
        </div>
        </div>
    )
}

export default Short_Links








