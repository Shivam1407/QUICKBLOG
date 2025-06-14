import { createContext, useContext } from "react"
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


const AppContext = createContext();

// for this we have to create a provider function
export const AppProvider = ({ children }) =>{
    const value = {}

    return(

        <AppContext.Provider value ={value}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = ()=>{
    return useContext(AppContext)
};

// after this we have to create some data will be shared in diff component , for diff comp we have to make api call to get data form our backend and DB , for this we need api call for api call we need backend varible that is stored in enviroment variables.