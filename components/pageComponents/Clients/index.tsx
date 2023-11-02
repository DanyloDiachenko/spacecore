import Image from "next/image";

import ClientReviews from "./ClientReviews";
import ClientsProps from "./clients.props";

const Clients = ({ clientsBlock }: ClientsProps): JSX.Element => {
    return (
        <section className="mt-12 container-fluid-bg clients">
            <div className="container">
                <h2>{clientsBlock.title}</h2>
                <div className="right-col">
                    <div className="number">{clientsBlock.clientsNumber}+</div>
                    <p>{clientsBlock.clientsDescription}</p>
                    <Image
                        src={clientsBlock.imgSrc}
                        alt={clientsBlock.title + "photo"}
                        width="420"
                        height="418"
                    />
                </div>
            </div>
            <ClientReviews
                buttonLink={clientsBlock.buttonLink}
                buttonText={clientsBlock.buttonText}
                reviews={clientsBlock.reviews}
            />
        </section>
    );
};

export default Clients;
