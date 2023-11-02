import Trans from "inc/locale/Trans";
import PlacingPricesProps from "./placingPrices.props";

const PlacingPrices = ({
    placingPricesBlock,
}: PlacingPricesProps): JSX.Element => {
    return (
        <section className="container mt-12 placing-prices">
            <div className="h2-md">{placingPricesBlock.title}</div>
            {placingPricesBlock.placingPrices.map((plPrice, index) => (
                <div key={index} className="item">
                    <span className="left">{plPrice.title}</span>
                    <span className="right">
                        <span className="h3 price">{plPrice.price}</span>
                        {plPrice.price !== "бесплатно" && (
                            <span className="per-month">
                                / <Trans string="месяц" />
                            </span>
                        )}
                    </span>
                </div>
            ))}
            <p className="description">
                {placingPricesBlock.description}
                <br />
                <span className="price-nds">
                    {placingPricesBlock.descriptionPrice}
                </span>
            </p>
        </section>
    );
};

export default PlacingPrices;
