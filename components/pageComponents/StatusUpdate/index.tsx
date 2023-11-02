import { useState } from "react";

import { IUpdate, StatusUpdateProps } from "./statusUpdate.props";
import formatDate from "helpers/formatDate";

const StatusUpdate = ({
    statusUpdateBlock,
}: StatusUpdateProps): JSX.Element => {
    const [updates, setUpdates] = useState<IUpdate[]>(
        Array(statusUpdateBlock.updates[0]),
    );

    return (
        <section className="container-large status-update">
            <div className="container content">
                <div className="top">
                    <div className="h2-sm">{statusUpdateBlock.title}</div>
                    <p>{statusUpdateBlock.titleAdditional}</p>
                </div>
                {updates && updates.length
                    ? updates.map((update) => (
                          <>
                              {update ? (
                                  <div className="main-content" key={update.id}>
                                      <p className="date">
                                          {formatDate(update.date)}
                                      </p>
                                      <div className="h4">{update.title}</div>
                                      <div
                                          className="text"
                                          dangerouslySetInnerHTML={{
                                              __html: update.description,
                                          }}
                                      >
                                          {}
                                      </div>
                                      <p className="update">{update.from}</p>
                                  </div>
                              ) : (
                                  ""
                              )}
                          </>
                      ))
                    : ""}
                {statusUpdateBlock.updates.length !== updates.length && (
                    <div className="button-wrapper">
                        <button
                            onClick={() =>
                                setUpdates(statusUpdateBlock.updates)
                            }
                            className="history-update"
                        >
                            {statusUpdateBlock.updateHistoryTitle}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default StatusUpdate;
