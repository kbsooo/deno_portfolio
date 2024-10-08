import { useEffect, useState } from "preact/hooks";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [posts, setPosts] = useState<string[]>([]);

    useEffect(() => {
        // 서버에서 posts 폴더의 파일 목록을 가져옴
        fetch("/api/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

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
                    color: "#d4d4d4",
                    textDecoration: "none",
                    marginBottom: "20px",
                    fontSize: "20px",
                }}
            >
                <i class="fas fa-envelope"></i>
            </a>

            {isExpanded && (
                <div
                    style={{
                        color: "#d4d4d4",
                        width: "100%",
                        paddingLeft: "10px",
                        boxSizing: "border-box",
                    }}
                >
                    <h3 style={{ fontSize: "16px", color: "#d4d4d4" }}>
                        Explorer
                    </h3>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {posts.map((post, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: "10px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "10px",
                                    borderLeft: "2px solid #3c3c3c",
                                }}
                            >
                                <i
                                    class="fas fa-file-alt"
                                    style={{
                                        fontSize: "16px",
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
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

// 서버 측 API 라우트 설정
// /api/posts 경로에서 posts 폴더에 있는 markdown 파일 목록을 가져옴
import { HandlerContext } from "$fresh/server.ts";
import { join } from "https://deno.land/std@0.114.0/path/mod.ts";

export const handler = async (_req: Request, _ctx: HandlerContext) => {
    const postsDir = join(Deno.cwd(), "posts");
    const files = [];
    for await (const dirEntry of Deno.readDir(postsDir)) {
        if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
            files.push(dirEntry.name);
        }
    }
    return new Response(JSON.stringify(files), {
        headers: { "Content-Type": "application/json" },
    });
};
