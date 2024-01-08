import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Alert, AlertColor, Box, Snackbar, Typography } from '@mui/material';
import { axiosInstance } from '@/config/axios';
import { useState } from 'react';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

interface Alert {
    open: boolean;
    message: string;
    severity: AlertColor | undefined
}

export default function FileUploadInput() {
    const [alert, setAlert] = useState<Alert>({
        open: false,
        severity: undefined,
        message: ""
    })

    const handleFileUpload = async (event: any) => {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('file', file)
        try {
            const processedData = await axiosInstance.post('/subscription/upload/metrics', formData)
            console.log(processedData)
            setAlert({ open: true, severity: "success", message: "Sucesso ao fazer upload da planilha" })
        } catch (error) {
            setAlert({ open: true, severity: "error", message: "Erro ao fazer upload da planilha" })
        }
    }

    const handleAlertClose = () => {
        setAlert({ open: false, severity: undefined, message: "" })
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginY: "20px" }}>
            <Button sx={{ width: "max-content" }} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload de arquivo
                <VisuallyHiddenInput onChange={(e) => handleFileUpload(e)} type="file" accept='.xlsx, .csv' />
            </Button>
            <Typography
                color="text.secondary"
                variant="caption"
                marginY={1}
            >
                Faça upload de uma planilha no formato .xlsx ou .csv
            </Typography>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={alert.open} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert variant='filled' onClose={handleAlertClose} severity={alert.severity} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </Box>
    )
}