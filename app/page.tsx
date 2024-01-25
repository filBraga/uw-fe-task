'use client';

import styles from './page.module.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import CountrySelect from './components/CountrySelect';
import { CountryType } from './types';
import { useState } from 'react';
import { countries } from './utils/countries';

export default function Home() {
    const [name, setName] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(null);
    const [taxId, setTaxId] = useState<string>('');

    const isNameValid = () => {
        return name.length >= 3;
    };

    const isTaxIdValid = () => {
        if (!selectedCountry || !taxId) return false;
        return selectedCountry.regex.test(taxId);
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
                    error={!isNameValid() && name.length > 0}
                    helperText={!isNameValid() && taxId.length > 0 ? 'Minimum name length: 3 characters' : ''}
                />
                <CountrySelect countries={countries} onChange={(country) => setSelectedCountry(country)} />
                <TextField
                    className={styles.input}
                    id="tax"
                    label="Tax ID"
                    variant="outlined"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    error={!isTaxIdValid() && taxId.length > 0}
                    helperText={!isTaxIdValid() && taxId.length > 0 ? 'Invalid Tax ID for selected country' : ''}
                />
            </Paper>
        </main>
    );
}
