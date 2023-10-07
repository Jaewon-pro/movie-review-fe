import './pagination.css'

function getBase(currentPage, total, sizePerOne) {
  const half = Math.round(sizePerOne / 2);
  if (currentPage < half) {
    return 1;
  }
  if (currentPage / sizePerOne === (total / sizePerOne)) {
    return total - sizePerOne;
  }

  return currentPage - half + 1;
}

function getPrev(currentPage, sizePerOne) {
  return currentPage - sizePerOne - 1
}


export default function Pagination1({total, limit, page, setPage}) {
  const numPages = Math.ceil(total / limit);
  const sizePerOne = 19
  const sizePerOneMin = Math.min(sizePerOne, numPages);
  const idxStart = getBase(page, total, sizePerOneMin);

  return (
    <div className={"pagination"}>
      <button onClick={() => setPage(getPrev(page, sizePerOneMin))} disabled={page <= sizePerOneMin / 2 + 1}>
        &lt;
      </button>
      {Array(sizePerOneMin)
        .fill()
        .map((_, i) => {
          const idx = idxStart + i;

          return (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              aria-current={page === idx ? "page" : undefined}
            >
              {idx}
            </button>
          )
        })}
      <button onClick={() => setPage(page + sizePerOneMin)} disabled={page === numPages}>
        &gt;
      </button>
    </div>
  );
}
