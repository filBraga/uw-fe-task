import { NextResponse } from 'next/server';
import { countries } from '../../utils/countries';
import { CountryType } from '../../types';

const isNameValid = ({ name }: { name: string }) => {
    return name.length >= 3;
};

const isCountryValid = ({ country }: { country: string }) => {
    return country !== null;
};

const isTaxIdValid = ({ country, taxId }: { country: CountryType; taxId: string }) => {
    if (!country || !taxId) return false;
    const countryData = countries.find((c) => c.code === country.code);
    return countryData?.regex.test(taxId);
};

export async function GET() {
    return NextResponse.json({ message: 'Success!' });
}

export async function POST(request: Request) {
    const { name, country, taxId } = await request.json();

    if (!name || !country || !taxId) return NextResponse.json({ message: 'Missing required data', status: 400 });

    if (!isNameValid({ name })) return NextResponse.json({ message: 'Invalid name', status: 400 });
    if (!isCountryValid({ country: country })) return NextResponse.json({ message: 'Invalid country', status: 400 });
    if (!isTaxIdValid({ country: country, taxId }))
        return NextResponse.json({ message: 'Invalid tax ID', status: 400 });

    return NextResponse.json({ message: 'Success!', status: 200 });
}
