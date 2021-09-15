import React, {useEffect, useState} from 'react'
import "./countries.css"

const url = "https://restcountries.eu/rest/v2/regionalbloc/saarc";
const url2 = "https://restcountries.eu/rest/v2/regionalbloc/asean";

const Countries = () => {

    const [Country, setCountries] = useState([]);
    
        const fetchCountryData = async() => {
            const response = await fetch(url)
            const Count = await response.json()
            const response2 = await fetch(url2)
            const Count2 = await response2.json()
            setCountries([...Count2,...Count])
        }
        
        useEffect(() =>{
            fetchCountryData();
        }, [] ) //[] is empty dependency array

    return (
        <>
        
        <section className="box">
            {Country.map((country) => {
                const {name, population, capital, flag, region, subregion, borders, languages, numericCode} = country
                return <article key={numericCode}>
                    <div className="info">
                        <img src={flag} alt={name}/>
                        <div className="countryInfo">
                        <h2>{name}</h2>
                            <h4>Capital : <span>{capital}</span></h4>
                            <h4>Region : <span>{region}</span></h4>
                            <h4>Sub-Region : <span>{subregion}</span></h4>
                            <h4>Population : <span>{population}</span></h4>
                            <h4>Borders : <span>{borders.join(', ')}</span></h4> 
                            {/* borders.map(border => <div>{border.name */}
                            <h4>Languages : <span>{languages.map(lang =><>{lang.name} </>)}</span></h4>
                        </div>
                    </div>
                </article>
            })}
        </section>
        <input className="reloadBtn" type="button" value="Refresh Page" onClick={function(){window.location.reload()}}></input>
        </>  
    );
}

export default Countries
