export function ProductList(props) {
  return (
    <>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "16px", padding: "10px", overflowX: "auto", whiteSpace: "nowrap", justifyContent: "center", }}>{props.children}</div>
      </>
  );
}
