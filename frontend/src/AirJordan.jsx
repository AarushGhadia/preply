export default function AirJordan() {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(circle at top, #0f172a, #020617)",
      fontFamily: "Inter, system-ui, sans-serif",
    },
    card: {
      width: 340,
      padding: 24,
      borderRadius: 20,
      background: "linear-gradient(180deg, #0b0f1a, #060914)",
      color: "#fff",
      boxShadow:
        "0 0 0 2px rgba(96,165,250,0.7), 0 0 30px rgba(56,189,248,0.35)",
    },
    image: {
      width: "100%",
      objectFit: "contain",
      marginBottom: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 600,
      marginBottom: 10,
    },
    description: {
      fontSize: 13,
      lineHeight: 1.5,
      color: "#cbd5f5",
      marginBottom: 18,
    },
    button: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      background: "#111827",
      color: "#fff",
      border: "none",
      borderRadius: 999,
      cursor: "pointer",
      fontSize: 14,
    },
    price: {
      background: "#1f2937",
      padding: "4px 10px",
      borderRadius: 999,
      fontSize: 12,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
          src="/airjordan.png"
          alt="Air Jordan 4 Retro Reimagined"
          style={styles.image}
        />

        <div style={styles.title}>
          Air Jordan 4 Retro Reimagined
        </div>

        <div style={styles.description}>
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </div>

        <button style={styles.button}>
          Buy now <span style={styles.price}>$100</span>
        </button>
      </div>
    </div>
  );
}