import { useState } from "react";
import { Grid, TextField} from "@material-ui/core";

import useStyles from './styles';
export default function App() {
  const { input } = useStyles();
  const [iframeValue, setIframeValue] = useState('');

  const handleChange = (value: any) => {
    setIframeValue(value);
  };


  return (
    <>
      <Grid container spacing={3}>
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
        <Grid item xs={12}>
            <div
              dangerouslySetInnerHTML={{
                __html: iframeValue
              }}
            />
        </Grid>
      </Grid>
    </>
  );
}
