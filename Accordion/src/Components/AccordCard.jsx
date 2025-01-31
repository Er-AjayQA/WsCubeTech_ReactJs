export const AccordCard = ({ accordContent, setDisplayId, displayId }) => {
  const { id, question, answer } = accordContent;

  return (
    <>
      <div className="accord_item" key={id}>
        <h2 className="accord_header m-0">
          <button
            className="accord_button d-flex justify-content-between w-100 border-0 text-bg-gray py-2 px-3"
            type="button"
            onClick={() => setDisplayId(id)}
          >
            <p className="p-0 m-0"> {question}</p>
            {id === displayId ? (
              <i class="bi bi-dash"></i>
            ) : (
              <i className="bi bi-plus"></i>
            )}
          </button>
        </h2>
        <div
          className={`accord_collapse p-3 ${
            id === displayId ? "show_accord" : "hide_accord"
          }`}
        >
          <div className="accord_body">{answer}</div>
        </div>
      </div>
    </>
  );
};
