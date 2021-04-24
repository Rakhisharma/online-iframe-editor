import { ChangeEvent, ReactElement } from 'react';
import { InputProps, TextField } from '@material-ui/core';

interface Props {
    label: string;
    onChange: (newValue: string) => void;
    fullWidth?: boolean;
    multiline?: boolean;
    InputProps?: InputProps;
    variant?: 'standard' | 'filled' | 'outlined';
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
