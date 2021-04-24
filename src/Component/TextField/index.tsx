import { ChangeEvent, ReactElement } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

interface Props {
    label: string;
    variant?: TextFieldProps['variant'];
    fullWidth?: boolean;
    multiline?: boolean;
    InputProps?: TextFieldProps['InputProps'];
    onChange: (newValue: string) => void;
}

const Component = ({
    label,
    variant,
    fullWidth,
    multiline,
    InputProps,
    onChange
}: Props): ReactElement => {
    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        onChange(target.value);
    };

    return (
        <TextField
            label={label}
            variant={variant}
            fullWidth={fullWidth}
            multiline={multiline}
            onChange={handleInputChange}
            InputProps={InputProps}
        />
    );
};

export default Component;
