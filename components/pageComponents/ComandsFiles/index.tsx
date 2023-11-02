import { useState, useRef } from "react";

import Button from "components/UI/Button";
import Select from "components/UI/Select";
import IVariant from "components/UI/Select/select.interface";
import Files from "./Files";
import translate from "inc/locale/transFunc";
import ComandsFilesProps from "./comandsFiled.props";

const ComandsFiles = ({
    comandsFilesBlock,
}: ComandsFilesProps): JSX.Element => {
    const outputContentRef = useRef<HTMLDivElement>(null);
    const executeButtonRef = useRef<HTMLButtonElement>(null);
    const outputCardRef = useRef<HTMLDivElement>(null);

    const [command, setCommand] = useState<string>(
        comandsFilesBlock.commands[0].title,
    );

    const setCurrentCommand = (commandClicked: IVariant): void => {
        setCommand(commandClicked.title);
    };

    const executeLookingGlass = () => {
        const outputContent = outputContentRef.current;
        const executeButton = executeButtonRef.current;
        const outputCard = outputCardRef.current;

        if (executeButton) {
            executeButton.innerText = "Executing...";
            executeButton.disabled = true;
        }
        if (outputCard) {
            outputCard.style.display = "inherit";
        }

        fetch("http://95.181.153.55/backend.php")
            .then(async (response) => {
                // response.body is a ReadableStream
                const reader = response.body ? response.body.getReader() : "";
                const decoder = new TextDecoder();

                for await (const chunk of readChunks(reader)) {
                    const text = decoder.decode(chunk);
                    if (command == "mtr") {
                        const splittedText = text.split("---");
                        if (!splittedText[1]) {
                            continue;
                        }
                        outputContent
                            ? (outputContent.innerHTML = splittedText[1].trim())
                            : "";
                    } else {
                        outputContent
                            ? (outputContent.innerHTML =
                                  outputContent.innerHTML +
                                  text.trim().replace(/<br \/> +/g, "<br />"))
                            : "";
                    }
                }
            })
            .finally(() => {
                executeButton ? (executeButton.innerText = "Execute") : "";
                executeButton ? (executeButton.disabled = false) : "";
            });

        // readChunks() reads from the provided reader and yields the results into an async iterable
        function readChunks(reader: any) {
            return {
                async *[Symbol.asyncIterator]() {
                    let readResult = await reader.read();
                    while (!readResult.done) {
                        yield readResult.value;
                        readResult = await reader.read();
                    }
                },
            };
        }
    };

    return (
        <section className="comands-files container mt-12">
            <div className="left-col">
                <h2>{comandsFilesBlock.comandTitle}</h2>
                <div className="comand-adress-button">
                    <div className="comand">
                        <div className="h3">
                            {comandsFilesBlock.comandSelectTitle}
                        </div>
                        <Select
                            currentVariant={translate(command)}
                            setCurrentVariant={setCurrentCommand}
                            variants={[...comandsFilesBlock.commands]}
                            type="commands"
                        />
                    </div>
                    <div className="adress">
                        <div className="h3">
                            {comandsFilesBlock.resourseAdressTitle}
                        </div>
                        <div className="disabled">
                            <p>{comandsFilesBlock.resourseAdressPlaceholder}</p>
                        </div>
                    </div>
                    <div className="button-col">
                        <Button
                            background="rose"
                            ref={executeButtonRef}
                            onClick={executeLookingGlass}
                        >
                            <span className="h6">
                                {comandsFilesBlock.buttonText}
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="result h3-lg">
                    {comandsFilesBlock.resultTitle}
                </div>
                <div className="output-card" ref={outputContentRef}>
                    <p className="details" ref={outputCardRef}>
                        32 bytes from 1.1.1.1: icmp_seq=0 time=1.312ms
                        <br />
                        32 bytes from 1.1.1.1: icmp_seq=1 time=1.497ms
                        <br />
                        32 bytes from 1.1.1.1: icmp_seq=2 time=1.407ms
                        <br />
                        32 bytes from 1.1.1.1: icmp_seq=3 time=1.502ms
                        <br />
                        --- 1.1.1.1 ping statistics ---
                        <br />
                        4 packets transmitted, 4 packets received, 0% packet
                        loss
                        <br />
                        round-trip min/avg/max/stddev = <br />
                        1.312ms/1.429ms/1.502ms/0.077ms
                    </p>
                </div>
            </div>
            <Files
                title={comandsFilesBlock.fileTitle}
                description={comandsFilesBlock.fileDescription}
                files={comandsFilesBlock.files}
            />
        </section>
    );
};

export default ComandsFiles;
