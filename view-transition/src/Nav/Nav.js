import "./Nav.css";

export function Nav({ changePage }) {
  return (
    <nav>
      <div className="inner">
        <h1>
          <button
            type="button"
            onClick={() => {
              changePage(1);
            }}
          >
            🍩 Doughnut Shop
          </button>
        </h1>
        <ul>
          <li>
            <button type="button" onClick={() => changePage(1)}>
              Page 1
            </button>
          </li>
          <li>
            <button type="button" onClick={() => changePage(2)}>
              Page 2
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
