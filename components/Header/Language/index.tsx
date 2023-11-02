import Link from "next/link";
import Image from "next/image";
import router from "next/router";
import { useState, useEffect } from "react";

const Language = (): JSX.Element => {
    const [languages, setLanguages] = useState<string[]>([]);
    const [activeLanguage, setActiveLanguage] = useState<string>("ru");

    const generateLanguageSelect = (): JSX.Element => {
        useEffect(() => {
            setLanguages(["ru", "en", "uk"]);
            router.locale && setActiveLanguage(router.locale);
        }, []);

        useEffect(() => {
            const filteredLanguages = router.locales?.filter(
                (locale) => locale !== activeLanguage && locale !== "default",
            );
            filteredLanguages && setLanguages(filteredLanguages);
        }, [activeLanguage]);

        return (
            <div className="lang-wrapper">
                <div className="lang-selector">
                    {languages &&
                        languages.map((language: string, index) => (
                            <div
                                className="lang-choosed"
                                onClick={() => setActiveLanguage(language)}
                                key={index}
                            >
                                <Link href={router.asPath} locale={language}>
                                    {language.toLocaleUpperCase()}
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        );
    };

    return (
        <div tabIndex={0} className="language">
            <Image
                src="/images/icons/world.svg"
                alt="language"
                width="24"
                priority
                height="24"
            />
            <div className="lang-choosed">
                {activeLanguage && activeLanguage.toLocaleUpperCase()}
            </div>
            <div className="langs-to-choose">{generateLanguageSelect()}</div>
        </div>
    );
};

export default Language;
