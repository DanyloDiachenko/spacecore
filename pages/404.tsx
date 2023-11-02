import { useRouter, NextRouter } from "next/router";

import Button from "components/UI/Button";

const NotFoundPage = (): JSX.Element => {
    const router: NextRouter = useRouter();

    return (
        <section className="not-found-page">
            <div className="container">
                <div className="left-col">
                    <h2>Упс, в космосе возникла ошибка :{"("}</h2>
                    <p>
                        Без паники! Мы на месте и все уже исправляем. Пока
                        можете вернуться на главную планету и просмотреть наши
                        передовые услуги <span className="nobr">:{")"}</span>
                    </p>
                    <Button onClick={() => router.push("/")} background="rose">
                        <span className="h6">Вернуться на главную</span>
                    </Button>
                </div>
                <div className="right-col">
                    <img
                        src="/images/banners/404-page.webp"
                        alt="Упс, в космосе возникла ошибка"
                    />
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
