'use client';

import styles from './page.module.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import CountrySelect from './components/CountrySelect';
import Button from '@mui/material/Button';
import { CountryType } from './types';
import { useState } from 'react';
import { countries } from './utils/countries';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [name, setName] = useState<string>('');
    const [country, setCountry] = useState<CountryType | null>(null);
    const [taxId, setTaxId] = useState<string>('');
    const [submitAttempted, setSubmitAttempted] = useState<boolean>(false);

    const isNameValid = () => {
        return name.length >= 3;
    };

    const isCountryValid = () => {
        return country !== null;
    };

    const isTaxIdValid = () => {
        if (!country || !taxId) return false;
        return country.regex.test(taxId);
    };

    const postData = async () => {
        const response = await fetch('/api/tax', {
            method: 'POST',
            body: JSON.stringify({
                name,
                country,
                taxId,
            }),
        });
        return response.json();
    };

    const handleSubmit = async () => {
        setSubmitAttempted(true);

        if (!isNameValid() || !isCountryValid() || !isTaxIdValid()) return;

        try {
            const data = await postData();
            toast(data.message, {
                type: data.status === 200 ? 'success' : 'error',
            });

            setName('');
            setCountry(null);
            setTaxId('');
            setSubmitAttempted(false);
        } catch (error) {
            console.error('There was an error!', error);
        }
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
                    value={country}
                    onChange={(country) => setCountry(country)}
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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Paper>
        </main>
    );
}
