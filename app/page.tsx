import styles from './page.module.css';
import { Input } from '@chakra-ui/react';

export default function Home() {
    return (
        <main className={styles.main}>
            <Input placeholder="Basic usage" />
        </main>
    );
}
