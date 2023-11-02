import ICountry from "./country.interface";

export default interface CountriesProps {
    countries: {
        countries: ICountry[];
        title: string;
    };

    onCountryClick: (key: string[]) => void;
}
