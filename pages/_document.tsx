import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = (): JSX.Element => {
    return (
        <Html lang="ru">
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script
                    src="https://polyfill.io/v3/polyfill.min.js?flags=gated&features=ES6%2CArray.prototype.includes%2CArray.prototype.find&browsers=ie%2011"
                    type="text/javascript"
                />
            </body>
        </Html>
    );
};

export default Document;
