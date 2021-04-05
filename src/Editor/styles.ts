import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '100%'
    },

    input: {
        minHeight: '150px',
        borderColor: '#000',
        border: '2px'
    },

    resultContent: {
        minHeight: '500px'
    }
}));

export default styles;
