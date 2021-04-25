import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import useStyles from './styles';
import Header from '../Header';
import TextField from '../Component/TextField';
import { ERROR_TITLE, ERROR_MESSAGE, CONTAINS_IFRAME_REGEX } from './constants';

const Editor = () => {
    const { root, input, resultContent } = useStyles();
    const [iframeValue, setIframeValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const handleChange = (value: any) => {
        setIframeValue(value);
    };

    useEffect(() => {
        const isIFrame = window.parent.frames.length > 0;
        if (
            !CONTAINS_IFRAME_REGEX.test(iframeValue) &&
            !isIFrame &&
            iframeValue !== ''
        ) {
            setError(true);
        } else {
            setError(false);
        }
    }, [iframeValue, error]);

    return (
        <Grid container spacing={3} className={root}>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Paste your iframe snippet"
                    variant="outlined"
                    onChange={value => {
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
