export function ProductCard({ product, background = "slategray", onPurchase }) {
  return (
    <article
      style={{
        backgroundColor: background,
        border: "1px solid black",
        borderRadius: "12px",
        padding: "24px",
        textAlign: "center",
        maxWidth: "350px",
        width: "100%",
        margin: "40px auto",
      }}
    >
      <h2>{product.title}</h2>

      <img
        src={product.imageSrc}
        alt={product.title}
        width={128}
        height={128}
      />

      <p>Specification:</p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {product.specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>

      {/* ✅ Use onClick prop */}
      <Status stockCount={product.stockCount}/>
      <button onClick={() => onPurchase(product)}>
        Buy (From ${product.price})
      </button>
    </article>
  );
}

function Status({ stockCount }) {
  if (stockCount === 0) {
    return <p style={{fontSize: "14px", color: "lightsalmon"}} >Not available</p>;
  }

  return <p style={{ fontSize: "14px", color: "lightgreen" }}>{stockCount} items available</p>;
}