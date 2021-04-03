import { useState } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';

import useStyles from './styles';

const Editor = () => {
    const { root, header, input, resultContent } = useStyles();
    const [iframeValue, setIframeValue] = useState('');

    const handleChange = (value: any) => {
        setIframeValue(value);
    };

    return (
        <>
            <Grid container spacing={3} className={root}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={header}>
                        {`Online <iframe> viewer`}
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
                    <div
                        dangerouslySetInnerHTML={{
                            __html: iframeValue
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Editor;
