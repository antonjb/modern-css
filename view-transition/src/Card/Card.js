export function Card({ imageUrl, title, children, onClick }) {
  return (
    <div class="card">
      <div class="card-header">
        <img src={imageUrl} alt="" />
        <h2>{title}</h2>
      </div>
      <div class="card-body">{children}</div>
      <div class="card-footer">
        <button className="button" onClick={onClick}>
          Testing
        </button>
      </div>
    </div>
  );
}
