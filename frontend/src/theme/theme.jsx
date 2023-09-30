import { createTheme } from "@mui/material";

export const createMuiTheme = () => {
    const theme = createTheme({
        components: {
            MuiPaper: {
                styleOverrides: {
                    sidebar: {
                        backgroundColor: "#ebc034",
                        minHeight:'100vh',
                    },
                    dashboard_analytics: {
                        color: '#ecfdf3'
                    }
                    
                },
            },
        },
    });

    return theme;
};

export default createMuiTheme;