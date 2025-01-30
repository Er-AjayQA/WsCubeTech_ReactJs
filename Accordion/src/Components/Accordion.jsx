import { useState } from "react";
import accordData from "../../AccordData.js";
import { AccordCard } from "./AccordCard.jsx";

export const Accordion = () => {
  const [accord, setAccord] = useState(accordData);
  const [displayId, setDisplayId] = useState(accord[0].id);

  function handleAccordion(id) {
    setDisplayId((prevId) => (prevId === id ? "" : id));
  }

  return (
    <section className="py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1 className="mb-3">FAQ Section</h1>
            <div className="accord">
              {accord?.map((item) => {
                return (
                  <AccordCard
                    accordContent={item}
                    key={item.id}
                    handleAccordShow={handleAccordion}
                    displayAccord={displayId}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
