import { useState } from "preact/hooks";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPostsVisible, setIsPostsVisible] = useState(false);

    const posts = [
        "Post 1: Understanding Reactivity",
        "Post 2: Introduction to Fresh Framework",
        "Post 3: Deep Dive into Deno",
        "Post 4: Preact vs React",
    ];

    return (
        <div
            class="sidebar"
            style={{
                width: isExpanded ? "200px" : "60px",
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
                href="#"
                style={{
                    color: "#d4d4d4",
                    textDecoration: "none",
                    marginBottom: "20px",
                    fontSize: "20px",
                }}
                onClick={() => {
                    setIsExpanded(!isExpanded);
                    setIsPostsVisible(!isPostsVisible);
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

            {isPostsVisible && (
                <div
                    style={{
                        marginTop: "20px",
                        color: "#d4d4d4",
                        width: "100%",
                        paddingLeft: "10px",
                        boxSizing: "border-box",
                    }}
                >
                    <h3 style={{ fontSize: "16px", color: "#d4d4d4" }}>
                        Posts
                    </h3>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {posts.map((post, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: "10px",
                                    cursor: "pointer",
                                }}
                            >
                                <a
                                    href={`/posts/${index}`}
                                    style={{
                                        color: "#3794ff",
                                        textDecoration: "none",
                                    }}
                                >
                                    {post}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
