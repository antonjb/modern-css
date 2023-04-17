import logo from "./logo.svg";

export function Page2({ changePage }) {
  return (
    <>
      <header className="App-header">
        <h1>Page 2!!</h1>
        <div>🍩</div>
        <img src={logo} className="App-logo" alt="logo" />

        <button type="button" onClick={() => changePage(1)}>
          Go to page 1
        </button>
      </header>
      <div className="doughnutdothis" />
    </>
  );
}
