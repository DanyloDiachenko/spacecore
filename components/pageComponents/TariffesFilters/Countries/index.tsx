import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import CountriesProps from "./countries.props";

const Countries = ({
    countries,
    onCountryClick,
}: CountriesProps): JSX.Element => {
    const router = useRouter();
    const countryQuery = router.query.country as string;

    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

    const click = (key: string) => {
        let updatedCountries: string[] = [];

        if (selectedCountries.includes(key)) {
            updatedCountries = selectedCountries.filter((item) => item !== key);
        } else {
            if (key === "any") {
                updatedCountries = [];
            } else {
                updatedCountries = [...selectedCountries, key];
            }
        }

        setSelectedCountries(updatedCountries);
    };

    useEffect(() => {
        if (countryQuery) {
            const selectedFromQuery = countryQuery.split(",");
            setSelectedCountries(selectedFromQuery);
        } else {
            setSelectedCountries([]);
        }
    }, [router.query.country]);

    useEffect(() => {
        if (countryQuery) {
            const selectedFromQuery = countryQuery.split(",");
            setSelectedCountries(selectedFromQuery);
        }
        onCountryClick(selectedCountries);
    }, []);

    useEffect(() => {
        onCountryClick(selectedCountries);
    }, [selectedCountries]);

    return (
        <>
            <div className="h3">{countries.title}</div>
            <div className="countries">
                {countries.countries.map((country, index) => (
                    <div
                        key={index}
                        onClick={() => click(country.key)}
                        tabIndex={0}
                        className={`item ${
                            selectedCountries.includes(country.key)
                                ? "active"
                                : selectedCountries.length == 0 &&
                                  country.key == "any"
                                ? "active"
                                : ""
                        }`}
                    >
                        <Image
                            src={country.imgSrc}
                            alt={country.title + "photo"}
                            width="28"
                            height="20"
                        />
                        <p>{country.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Countries;
