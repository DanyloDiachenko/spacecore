export const renderTitle = (title: string): JSX.Element => {
    const text: string = title; /* Все системы работают */
    const searchWord: string = "работают";

    const highlightedText: string = text.replace(
        new RegExp(searchWord, "gi"),
        `<span class="text-violet"><br />${searchWord}</span>`,
    );

    return <h2 dangerouslySetInnerHTML={{ __html: highlightedText }} />;
};
