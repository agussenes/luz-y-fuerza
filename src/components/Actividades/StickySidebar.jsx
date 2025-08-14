export default function StickySidebar({ children }) {
  return (
    <aside className="position-sticky" style={{ top: "90px" }}>
      {children}
    </aside>
  );
}
