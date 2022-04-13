import axios from 'axios';
import React,{ useState, useEffect,createContext} from 'react'

const NewsContext = createContext();

const NewProvider = ({children}) => {

    const [category, setCategory] = useState('general');
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalNews,setTotalNews] = useState(0);

    useEffect(() => {
        const consultAPI = async()=> {
            const url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const {data} = await axios(url);
  
            setNews(data.articles);
            setTotalNews(data.totalResults);
            setPage(1);

        }
        consultAPI();
    }, [category]);


    useEffect(() => {
        const consultAPI = async()=> {
            const url =`https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const {data} = await axios(url);
            setNews(data.articles);
            setTotalNews(data.totalResults);
            
        }
        consultAPI();
    }, [page]);
    

    const handleChangeCategory = (e) => {
        console.log(e);
        setCategory(e.target.value);
    }

    const handleChangePage = (e,valor) => {
        //es lo que tiene todo el context
        setPage(e.target.textContent);
    }

  return (
    <NewsContext.Provider
        value={{
            category,
            handleChangeCategory,
            news,
            totalNews,
            handleChangePage,
            page
        }}
    >
        {children}
    </NewsContext.Provider>
  )
}

export { NewProvider, NewsContext }
