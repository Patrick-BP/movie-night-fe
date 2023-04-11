
import React, {createContext, useEffect, useState} from 'react'
const init = []
const moviesContext = createContext(init)

export function MoviesStore({children}){
const [globalMovies, setGlobalMovies] =useState(init)
    useEffect(()=>{
async function fetch(){
    const list = await axios.get('/movies')
    setGlobalMovies(list.data)
}
fetch()
    },[])
return <moviesContext.Provider value={{globalMovies}}>
    {children}
</moviesContext.Provider>
}

export default moviesContext