'use client';

import styles from './page.module.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import CountrySelect from './components/CountrySelect';
import { CountryType } from './types';
import { useState } from 'react';
import { countries } from './utils/countries';

export default function Home() {
    const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(null);
    const [taxId, setTaxId] = useState<string>('');

    const isTaxIdValid = () => {
        if (!selectedCountry || !taxId) return false;
        return selectedCountry.regex.test(taxId);
    };

    return (
        <main className={styles.main}>
            <Paper className={styles.card} elevation={3}>
                <TextField className={styles.input} id="outlined-basic" label="Name" variant="outlined" />
                <CountrySelect
                    countries={countries}
                    onChange={(country) => setSelectedCountry(country)} // Update the selected country
                />
                <TextField
                    className={styles.input}
                    id="outlined-basic"
                    label="Tax ID"
                    variant="outlined"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    error={!isTaxIdValid() && taxId.length > 0} // Show error if tax ID is invalid
                    helperText={!isTaxIdValid() && taxId.length > 0 ? 'Invalid Tax ID for selected country' : ''}
                />{' '}
            </Paper>
        </main>
    );
}
