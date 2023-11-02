import { useRouter } from "next/router";
import strings from "./strings";

const translate = (string: string) => {
    const router = useRouter();

    const locale = router.locale ? router.locale : "uk";

    return strings[string] && strings[string][locale]
        ? strings[string][locale]
        : string;
};

export default translate;
