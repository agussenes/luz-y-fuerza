export default function FaqAccordion({ id = "faq", items = [] }) {
  if (!items.length) return null;
  return (
    <div className="accordion" id={id}>
      {items.map((f, idx) => {
        const hid = `${id}-${idx}`;
        return (
          <div className="accordion-item" key={hid}>
            <h2 className="accordion-header" id={`${hid}-h`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${hid}-c`} aria-expanded="false">
                {f.q}
              </button>
            </h2>
            <div id={`${hid}-c`} className="accordion-collapse collapse" data-bs-parent={`#${id}`}>
              <div className="accordion-body">{f.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
