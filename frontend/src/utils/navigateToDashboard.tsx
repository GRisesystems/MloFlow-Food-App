import { NavigateFunction } from 'react-router-dom';

export type UserRole = 'chef' | 'vendor' | 'customer';

export const navigateToDashboard = (role: UserRole, navigate: NavigateFunction) => {
    switch (role) {
        case 'chef':
            navigate('/chef-dashboard');
            break;
        case 'vendor':
            navigate('/vendor-dashboard');
            break;

        default:
            navigate('/customer-dashboard');
            break;
    }
};
