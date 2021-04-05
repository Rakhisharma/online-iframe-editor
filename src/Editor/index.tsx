import { useEffect, useState } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import useStyles from './styles';
import { ERROR_TITLE, ERROR_MESSAGE, HEADER } from './constants';

const Editor = () => {
    const { root, header, input, resultContent } = useStyles();
    const [iframeValue, setIframeValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const handleChange = (value: any) => {
        setIframeValue(value);
    };

    useEffect(() => {
        const isIFrame = window.parent.frames.length > 0;
        if (iframeValue !== '' && !isIFrame) {
            setError(true);
        } else {
            setError(false);
        }
    }, [iframeValue, error]);

    return (
        <Grid container spacing={3} className={root}>
            <Grid item xs={12}>
                <Typography variant="h4" className={header}>
                    {HEADER}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Paste your iframe snippet"
                    variant="outlined"
                    onChange={({ target }) => {
                        const value = target.value;
                        handleChange(value);
                    }}
                    InputProps={{
                        classes: { input }
                    }}
                    fullWidth
                    multiline
                />
            </Grid>

            <Grid item xs className={resultContent}>
                {error ? (
                    <Alert severity="error">
                        <AlertTitle>{ERROR_TITLE}</AlertTitle>
                        {ERROR_MESSAGE}
                    </Alert>
                ) : (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: iframeValue
                        }}
                    />
                )}
            </Grid>
        </Grid>
    );
};

export default Editor;
