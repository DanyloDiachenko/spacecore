import IPlacingPrice from "./placingPrice.interface";

export default interface PlacingPricesProps {
    placingPricesBlock: {
        title: string;
        placingPrices: IPlacingPrice[];
        description: string;
        descriptionPrice: string;
    };
}
