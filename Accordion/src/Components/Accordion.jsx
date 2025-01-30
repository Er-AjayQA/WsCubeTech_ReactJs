import { useState } from "react";
import accordData from "../../AccordData.js";
import { AccordCard } from "./AccordCard.jsx";

export const Accordion = () => {
  const [accord, setAccord] = useState(accordData.length > 0 ? accordData : []);
  const [displayId, setDisplayId] = useState(accord[0].id);

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
                    setDisplayId={setDisplayId}
                    displayId={displayId}
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
