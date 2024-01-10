import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Alert, AlertColor, Box, Snackbar, Stack, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';

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

export default function FileUploadInput({ handleUploadFile }: { handleUploadFile: any }) {
    const [alert, setAlert] = useState<Alert>({
        open: false,
        severity: undefined,
        message: ""
    })

    const [selectedFile, setSelectedFile] = useState<File | null>()

    const handleFileUpload = async (event: any) => {
        const file = event.target.files[0]

        setSelectedFile(file)
        const formData = new FormData()
        formData.append('file', file)
        try {
            await handleUploadFile(formData)
            setAlert({ open: true, severity: "success", message: "Sucesso ao fazer upload da planilha" })
        } catch (error) {
            setAlert({ open: true, severity: "error", message: "Erro ao fazer upload da planilha" })
        }
    }

    const handleAlertClose = () => {
        setAlert({ open: false, severity: undefined, message: "" })
    }

    const isBelowMediumViewport = useMediaQuery('(max-width: 768px)')

    function formatFileName(fileName: string, maxLength: number) {
        if (fileName.length <= maxLength) {
            return fileName;
        } else {
            const extensionIndex = fileName.lastIndexOf('.');
            if (extensionIndex !== -1 && fileName.length - extensionIndex <= 5) {
                const extension = fileName.slice(extensionIndex + 1);
                const nameWithoutExtension = fileName.slice(0, extensionIndex);

                const truncatedName = nameWithoutExtension.substring(0, maxLength - extension.length - 4);
                return truncatedName + '...' + extension;
            } else {
                const truncatedName = fileName.substring(0, maxLength - 4);
                return truncatedName + '...';
            }
        }
    }


    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginY: "20px" }}>
            <Stack direction={isBelowMediumViewport ? "column" : "row"} spacing={2} alignItems="center">
                <Button sx={{ width: "max-content" }} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload de arquivo
                    <VisuallyHiddenInput onChange={(e) => handleFileUpload(e)} type="file" accept='.xlsx, .csv' />
                </Button>
                {selectedFile && (
                    <Box sx={{ padding: 1, border: "1px dashed gray", height: "40px", borderRadius: 1, width: "210px", display: "flex", alignItems: "center", columnGap: 1, }}>
                        <Image src={"/images/excel_icon.png"} width={24} height={24} alt='excel_file_preview_icon' />
                        <Typography sx={{ whiteSpace: "nowrap", width: "100%", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {formatFileName(selectedFile.name, 20)}
                        </Typography>

                    </Box>
                )}
            </Stack>
            <Typography
                color="text.secondary"
                variant="caption"
                marginY={1}
                textAlign={isBelowMediumViewport ? "center" : "start"}
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