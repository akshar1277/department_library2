import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ChartContext = createContext()

export default ChartContext;

export const ChartProvider = ({children}) => {

    let [languages,setLanguages]=useState('');
    const navigate = useNavigate();

    let setfilter=(lang)=>{
        setLanguages(lang);
        navigate('/projects')

    }
    let contextData = {
        languages:languages,
        setfilter:setfilter,

        
    }
    return(
        <ChartContext.Provider value={contextData} >
            {children}
        </ChartContext.Provider>
    )

}
