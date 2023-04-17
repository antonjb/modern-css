export function Breadcrumbs({ labels }) {
  return (
    <ul className="breadcrumb">
      <li className="breadcrumb-home">🏠</li>
      {labels.map((label) => (
        <li key={label}>{label}</li>
      ))}
    </ul>
  );
}
