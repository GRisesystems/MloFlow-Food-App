import { useLocation, useNavigate } from 'react-router-dom'
// const location = useLocation()

export const detectRoute = (location) =>{
    let title = null
    switch (location) {
        case location.pathname.includes('chefs'):
            title = 'Chef'  
                      
            break;
    
        default:
            break;
    }
    return title

}