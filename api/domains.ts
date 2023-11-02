export const getDomains = (domain: string, locale: string = "en") => {
    const url = new URL("https://billing.spacecore.pro/billmgr");

    const params = {
        authinfo: "code@spacecore.pro:code@spacecore.pro",
        domain_name: domain,
        func: "domain.order.name",
        out: "xjson",
        sv_field: "ok_whois",
        lang: locale,
    };

    url.search = new URLSearchParams(params).toString();

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            try {
                const elements = data["doc"]["list"]
                    .find((el: any) => el["$name"] == "domain_list")
                    ["elem"].slice(1);
                return elements.map((el: any) => {
                    return {
                        domain: el["domain"]["$"],
                        price: el["price"]["$"],
                        desc: el["desc"]["$"],
                        link: `https://billing.spacecore.pro/billmgr#/?func=showroom.redirect&redirect_to=desktop&&func=domain.order.name&checked_domain=&domain_name=${
                            el["domain"]["$"].split(".")[0]
                        }&itemtype=37&newbasket=&period=12&selected_domain=&selected_pricelist=&skipbasket=&snext=ok&stylesheet=&sv_field=ok%5Fwhois`,
                    };
                });
            } catch (e) {
                return [];
            }
        })
        .catch((e) => {
            return e;
        });
};
