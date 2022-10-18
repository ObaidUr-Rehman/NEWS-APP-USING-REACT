import React from "react";
import { useEffect, useState } from "react";

const News = () => {
    
    const [data, setdata] = useState([]);

    const getnewsapi = async () => {
        
        const res = await fetch("https://newsapi.org/v2/everything?q=apple&from=2022-10-16&to=2022-10-16&sortBy=popularity&apiKey=dbe4fa12db134b959d4c95136948ef4a");
        const actualdata = await res.json();
        console.log(actualdata);
        setdata(actualdata.articles);
        console.log(data);
        
    };
    
    
    useEffect(() => {
        getnewsapi();
    }, []);

    
    return ( 
        
        <>
    {
        data.map((elem)=>{
            const date = new Date(elem.publishedAt)
            const mydate = date.toLocaleDateString();
            return(
                 <div className='main'>

                   <div className='about-post'>
                      <div className='info'>
                         <h3 className='name'>{elem.title}</h3>
                         <h5 className='time'>Date: {mydate}</h5>
                       </div>
                    </div>
    

                     <div className='para'>
                        <p>{elem.description}</p>
                      </div>


                      <div className='postimg'>
                         <img src={elem.urlToImage} alt="" />
                       </div>
    

                        <div className="link">
                            <a href={elem.url} target="_blank"><button className="mybtn">Read More</button></a>
                         </div>



                   </div>
            )
        

        })
    }
        
    </>
)
}

export default News;

