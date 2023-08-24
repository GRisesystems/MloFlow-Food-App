import { useState } from "react";
import { useForm } from 'react-hook-form'
import { Box, DialogContent, DialogContentText, DialogTitle,Divider} from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';

interface VendorFirstLoginFormProps {
    is_first_time_login: boolean; // Specify the type of the prop
}

const VendorFirstLoginForm = ({ is_first_time_login }: VendorFirstLoginFormProps) => {
    const [fullWidth, setFullWidth] = useState(true);
    const [open, setOpen] = useState(is_first_time_login);
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
        >
            <DialogTitle>Vendors Information</DialogTitle>
            <Divider/>
            <DialogContent>
                <DialogContentText>
                    Kindly fill the information inorder to proceed
                </DialogContentText>
                <Box display="flex" justifyContent="center" alignItems="center" maxWidth="sm">
                    <Box component="form" noValidate autoComplete="off"
                        onSubmit={
                            handleSubmit(onSubmit)
                        }
                    >

                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default VendorFirstLoginForm;
