import ReadByThemeProps from "components/pageComponents/ReadByTheme/readByTheme.props";
import { NewsDetailePageComponentProps } from "./newsDetailedPageComponent.props";

export default interface NewsDetailePageProps {
    content: {
        news_detailed_block: NewsDetailePageComponentProps["newsDetailedBlock"];
        read_by_theme_block: ReadByThemeProps["readByThemeBlock"];
    };
}
