'use client';

import styles from './page.module.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import CountrySelect from './components/CountrySelect';
import Button from '@mui/material/Button';
import { CountryType } from './types';
import { useState } from 'react';
import { countries } from './utils/countries';

export default function Home() {
    const [name, setName] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(null);
    const [taxId, setTaxId] = useState<string>('');
    const [submitAttempted, setSubmitAttempted] = useState<boolean>(false);

    const isNameValid = () => {
        return name.length >= 3;
    };

    const isCountryValid = () => {
        return selectedCountry !== null;
    };

    const isTaxIdValid = () => {
        if (!selectedCountry || !taxId) return false;
        return selectedCountry.regex.test(taxId);
    };

    const handleSubmit = async () => {
        setSubmitAttempted(true);

        const data = {
            name,
            country: selectedCountry?.code,
            taxId,
        };

        const response = await fetch('/api/tax', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        return response.json();
    };

    return (
        <main className={styles.main}>
            <Paper className={styles.card} elevation={3}>
                <TextField
                    className={styles.input}
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!isNameValid() && submitAttempted}
                    helperText={!isNameValid() && submitAttempted ? 'Minimum name length: 3 characters' : ''}
                />
                <CountrySelect
                    countries={countries}
                    onChange={(country) => setSelectedCountry(country)}
                    error={!isCountryValid() && submitAttempted}
                    helperText={!isCountryValid() && submitAttempted ? 'Please select a country' : ''}
                />
                <TextField
                    className={styles.input}
                    id="tax"
                    label="Tax ID"
                    variant="outlined"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    error={!isTaxIdValid() && submitAttempted}
                    helperText={!isTaxIdValid() && submitAttempted ? 'Invalid Tax ID for selected country' : ''}
                />
                <Button onClick={handleSubmit} variant="contained">
                    Submit
                </Button>
            </Paper>
        </main>
    );
}
