import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CountryType } from '../types';

interface CountrySelectProps {
    countries: CountryType[];
    onChange: (country: CountryType | null) => void;
    error: boolean;
    helperText: string;
    value: CountryType | null;
}

export default function CountrySelect({ countries, onChange, error, helperText, value }: CountrySelectProps) {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: '100%' }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            value={value}
            onChange={(event, newValue) => {
                onChange(newValue);
            }}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                    />
                    {option.label} ({option.code})
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    error={error}
                    label="Choose a country"
                    helperText={helperText}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}
