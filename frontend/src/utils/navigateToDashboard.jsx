
export const navigateToDashboard = (role, navigate) => {
    switch (role) {
        case 'admin':
            navigate('/admin');
            break;
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
