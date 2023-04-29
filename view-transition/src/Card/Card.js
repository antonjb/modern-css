export function Card({ imageUrl, title, children, onClick }) {
  return (
    <div class="card">
      <div class="card-header">
        <img className="card-image" src={imageUrl} alt="" />
      </div>
      <div class="card-body">
        <h2>{title}</h2>
        {children}
      </div>
      <div class="card-footer">
        <button className="button secondary" onClick={onClick}>
          More info
        </button>
        <button className="button" onClick={onClick}>
          Buy now
        </button>
      </div>
    </div>
  );
}
