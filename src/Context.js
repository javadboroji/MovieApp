import{createContext,useState} from 'react'

const newContext=createContext();
export  function MovieContext({children}){
 
    const [movieID, setMovieID] = useState(2424)
    const [moviePost, setMoviePost] = useState([]);
    const [saveMovie, setSaveMovie] = useState([]);   
     const [searchValue, setSearchValue] = useState("")   
    const apiKey = "9b3c3dd82f875d13ca789d1e30540fe4";

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