import { Outlet } from 'react-router-dom'
import { AuthProvider } from './utils/AuthContext'
import { ActivationProvider } from './utils/ActivationContext'

const AdminRoot = () => {
    return (
        <AuthProvider>
            <ActivationProvider>               
                <Outlet />                
            </ActivationProvider>
        </AuthProvider>
    )
}

export default AdminRoot