// components/Actividades/ScheduleTable.jsx
export default function ScheduleTable({ rows = [] }) {
  // console.log("rows:", rows); // deja esto si querés comprobar
  return (
    <div className="table-responsive schedule-tbl-wrap">
      <table className="table schedule-table mb-0" role="table">
        <thead className="schedule-thead" role="rowgroup">
          <tr role="row">
            <th scope="col ">#</th>
            <th scope="col"><i className="bi bi-calendar-event me-1" aria-hidden="true"></i>Fecha</th>
            <th scope="col">Modalidad</th>
            <th scope="col">Lugar</th>
            <th scope="col">Copa</th>
          </tr>
        </thead>
        <tbody className="schedule-tbody" role="rowgroup">
          {rows.map((r, i) => (
            <tr role="row" key={i}>
              <td role="cell">{r.n}</td>
              <td role="cell">{r.fecha}</td>
              <td role="cell">
                <span className="badge bg-info-subtle text-info-emphasis">{r.modalidad}</span>
              </td>
              <td role="cell">{r.lugar}</td>
              <td role="cell" className="text-muted">{r.copa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
