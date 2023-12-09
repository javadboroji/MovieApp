import{createContext,useState} from 'react'

const newContext=createContext();
export  function MovieContext({children}){
 
    const [movieID, setMovieID] = useState(2424)
    const [moviePost, setMoviePost] = useState([]);
    const [saveMovie, setSaveMovie] = useState([]);   
     const [searchValue, setSearchValue] = useState("")   
    const apiKey = "79d67acf2b0c54cb33201f4d9e957583";

    const saveMovieHandler=(e)=>{
        e.preventDefault(); 
        setSaveMovie([...saveMovie,moviePost]);
        
    }
    const searchHandler=(e)=>{
        setSearchValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    
  
    
     

    return(
        <newContext.Provider value={{movieID,setMovieID,apiKey,saveMovie,setSaveMovie,saveMovieHandler,moviePost, setMoviePost,searchValue,searchHandler,handleSubmit}}>
        {children}
        </newContext.Provider>
    )
}


export default newContext;