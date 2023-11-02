import Tariff from "../../UI/Tariff";
import TariffesMainProps from "./tariffesMain.props";

const TariffesMain = ({
    tariffes,
    tariffesContent,
}: TariffesMainProps): JSX.Element => {
    return (
        <section className="tariffes-data">
            {tariffesContent && tariffesContent.length
                ? tariffesContent.map((tariff, index) => (
                      <Tariff
                          key={index}
                          {...tariff.attributes}
                          tariffTitles={tariffes.tariffTitles}
                          propsId={index}
                      />
                  ))
                : ""}
        </section>
    );
};

export default TariffesMain;
