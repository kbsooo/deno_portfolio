export default function Sidebar() {
    return (
        <div
            class="sidebar"
            style={{
                width: "60px",
                background: "#333",
                position: "fixed",
                top: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "20px",
                transition: "width 0.3s",
                zIndex: 10,
            }}
        >
            <a
                href="/"
                style={{
                    color: "#d4d4d4",
                    textDecoration: "none",
                    marginBottom: "20px",
                    fontSize: "20px",
                }}
            >
                <i class="fas fa-user"></i>
            </a>
            <a
                href="/posts"
                style={{
                    color: "#d4d4d4",
                    textDecoration: "none",
                    marginBottom: "20px",
                    fontSize: "20px",
                }}
            >
                <i class="fas fa-folder"></i>
            </a>
            <a
                href="/contact"
                style={{
                    color: "#d4d4d4",
                    textDecoration: "none",
                    marginBottom: "20px",
                    fontSize: "20px",
                }}
            >
                <i class="fas fa-envelope"></i>
            </a>
        </div>
    );
}
