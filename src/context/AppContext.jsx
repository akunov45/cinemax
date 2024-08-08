

import { 
    createContext,
    useState
 } from 'react';


export const MOVIE_CONTEXT = createContext();

const AppContext = ({ children }) => {
    const [img, setImg] = useState('')

    const setBgImg = (bgImg) => {
        setImg(bgImg)
    }

    const contextData = {
        setBgImg,
        img,
    }

    return (
        <MOVIE_CONTEXT.Provider value={contextData}>
            {children}
        </MOVIE_CONTEXT.Provider>
    )
}

export default AppContext

