import { useEffect, useState } from "preact/hooks";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        // 서버에서 posts 폴더의 파일 목록을 가져옴
        fetch("/api/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const renderPosts = (posts: any[], depth: number = 0) => {
        return posts.map((post, index) => {
            const paddingLeft = `${depth * 10}px`;
            if (typeof post === "string") {
                return (
                    <li
                        key={index}
                        style={{
                            marginBottom: "10px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: paddingLeft,
                            // borderLeft: "2px solid #3c3c3c",
                            fontSize: "14px",
                        }}
                    >
                        <i
                            class="fas fa-file-alt"
                            style={{
                                fontSize: "14px",
                                marginRight: "10px",
                            }}
                        >
                        </i>
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
                );
            } else if (typeof post === "object" && post.name) {
                return (
                    <li
                        key={index}
                        style={{
                            marginBottom: "10px",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            paddingLeft: paddingLeft,
                            // borderLeft: "2px solid #3c3c3c",
                            fontSize: "14px",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <i
                                class="fas fa-folder"
                                style={{
                                    fontSize: "14px",
                                    marginRight: "10px",
                                }}
                            >
                            </i>
                            <span style={{ color: "#d4d4d4" }}>
                                {post.name}
                            </span>
                        </div>
                        <ul
                            style={{
                                listStyleType: "none",
                                padding: 0,
                                marginTop: "5px",
                            }}
                        >
                            {renderPosts(post.children, depth + 1)}
                        </ul>
                    </li>
                );
            }
        });
    };

    return (
        <div
            class="sidebar"
            style={{
                width: isExpanded ? "300px" : "60px",
                background: "#1e1e1e",
                position: "fixed",
                top: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                paddingTop: "10px",
                transition: "width 0.3s",
                zIndex: 10,
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "20px",
                    left: 0,
                    width: "60px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <a
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#d4d4d4",
                        textDecoration: "none",
                        marginBottom: "20px",
                        fontSize: "20px",
                    }}
                >
                    <i class="fas fa-user" style={{ fontSize: "24px" }}></i>
                </a>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        cursor: "pointer",
                        color: "#d4d4d4",
                    }}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <i class="fas fa-folder" style={{ fontSize: "24px" }}></i>
                </div>
                <a
                    href="/contact"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#d4d4d4",
                        textDecoration: "none",
                        marginBottom: "20px",
                        fontSize: "20px",
                    }}
                >
                    <i class="fas fa-envelope" style={{ fontSize: "24px" }}></i>
                </a>
            </div>

            {isExpanded && (
                <div
                    style={{
                        marginLeft: "60px",
                        color: "#d4d4d4",
                        width: "calc(100% - 60px)",
                        paddingLeft: "10px",
                        boxSizing: "border-box",
                    }}
                >
                    <h3
                        style={{
                            fontSize: "16px",
                            color: "#d4d4d4",
                            marginBottom: "10px",
                            top: "20px",
                        }}
                    >
                        Posts
                    </h3>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {renderPosts(posts)}
                    </ul>
                </div>
            )}
        </div>
    );
}
