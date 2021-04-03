import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '100%'
    },

    header: {
        margin: '15px',
        textAlign: 'center',
        fontFamily: 'UI-MONOSPACE'
    },

    input: {
        minHeight: '180px',
        borderColor: '#000',
        border: '2px'
    },

    resultContent: {
        marginTop: '10px',
        borderColor: '#000',
        border: '4px',
        minHeight: '500px'
    }
}));

export default styles;
