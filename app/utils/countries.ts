import { CountryType } from '../types';

export const countries: CountryType[] = [
    { code: 'AR', label: 'Argentina', regex: /^\d{1}-[A-Z]{1}-\d{1}$/i },
    { code: 'AU', label: 'Australia', regex: /^\d{2}-[A-Z]{1}-\d{1}$/i },
    { code: 'BR', label: 'Brazil', regex: /^\d{3}-[A-Z]{1}-\d{1}$/i },
    { code: 'CA', label: 'Canada', regex: /^[ABD0-9]{10}-[A-Z]{2}$/i },
    { code: 'CH', label: 'Switzerland', regex: /^\d{4}-[A-Z]{1}-\d{1}$/i },
    { code: 'CL', label: 'Chile', regex: /^\d{5}-[A-Z]{1}-\d{1}$/i },
    { code: 'CN', label: 'China', regex: /^\d{1}-[A-Z]{1}-\d{2}$/i },
    { code: 'DE', label: 'Germany', regex: /^\d{1}-[A-Z]{1}-\d{3}$/i },
    { code: 'ES', label: 'Spain', regex: /^\d{1}-[A-Z]{1}-\d{4}$/i },
    { code: 'GB', label: 'United Kingdom', regex: /^\d{1}-[A-Z]{1}-\d{5}$/i },
    { code: 'IE', label: 'Ireland', regex: /^\d{2}-[A-Z]{1}-\d{2}$/i },
    { code: 'IN', label: 'India', regex: /^\d{2}-[A-Z]{1}-\d{3}$/i },
    { code: 'IT', label: 'Italy', regex: /^\d{2}-[A-Z]{1}-\d{3}$/i },
    { code: 'JP', label: 'Japan', regex: /^\d{3}-[A-Z]{1}-\d{2}$/i },
    { code: 'MX', label: 'Mexico', regex: /^\d{3}-[A-Z]{1}-\d{3}$/i },
    { code: 'PT', label: 'Portugal', regex: /^\d{2}-[A-Z]{2}-\d{2}$/i },
    { code: 'RU', label: 'Russia', regex: /^\d{4}-[A-Z]{4}-\d{1}$/i },
    { code: 'US', label: 'United States', regex: /^\d{4}-[A-Z]{3}-\d{5}(\d{2})?$/i },
    { code: 'UY', label: 'Uruguay', regex: /^\d{5}-[A-Z]{2}-\d{2}$/i },
    { code: 'ZA', label: 'South Africa', regex: /^\d{3}-[A-Z]{5}-\d{1}$/i },
];
