import React from 'react';
import styles from './page.module.css';
import { TaxForm } from './components/form/TaxForm';

export default function Home() {
    return (
        <main className={styles.main}>
            <TaxForm />
        </main>
    );
}
