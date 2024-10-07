export default function Editor() {
    return (
        <div
            class="editor"
            style={{
                position: "absolute",
                top: "40px",
                left: "60px",
                right: 0,
                bottom: 0,
                backgroundColor: "#1e1e1e",
                padding: "20px",
                boxSizing: "border-box",
                overflow: "auto",
            }}
        >
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    1
                </span>
                <span class="line-content">
                    <span class="comment" style={{ color: "#6a9955" }}>
                        // Welcome to my portfolio page!
                    </span>
                </span>
            </div>
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    2
                </span>
                <span class="line-content">
                    <span class="comment" style={{ color: "#6a9955" }}>
                        // I'm Byungsoo Kang, a Computer Engineering student
                        interested in backend development, deep learning, and
                        data analysis.
                    </span>
                </span>
            </div>
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    3
                </span>
                <span class="line-content">
                    <span class="comment" style={{ color: "#6a9955" }}>
                        // Below is a brief description of me:
                    </span>
                </span>
            </div>
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    4
                </span>
                <span class="line-content">
                    <span class="keyword" style={{ color: "#569cd6" }}>
                        const
                    </span>{" "}
                    aboutMe = {"{"}
                </span>
            </div>
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    5
                </span>
                <span class="line-content">
                    <span class="property" style={{ color: "#9cdcfe" }}>
                        name
                    </span>:{" "}
                    <span class="string" style={{ color: "#d69d85" }}>
                        &quot;Byungsoo Kang&quot;
                    </span>,
                </span>
            </div>
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    6
                </span>
                <span class="line-content">
                    <span class="property" style={{ color: "#9cdcfe" }}>
                        education
                    </span>:{" "}
                    <span class="string" style={{ color: "#d69d85" }}>
                        &quot;Computer Engineering at Myongji University&quot;
                    </span>,
                </span>
            </div>
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    7
                </span>
                <span class="line-content">
                    <span class="property" style={{ color: "#9cdcfe" }}>
                        skills
                    </span>: [<span class="string" style={{ color: "#d69d85" }}>
                        &quot;Backend Development&quot;
                    </span>,{" "}
                    <span class="string" style={{ color: "#d69d85" }}>
                        &quot;Deep Learning&quot;
                    </span>,{" "}
                    <span class="string" style={{ color: "#d69d85" }}>
                        &quot;Data Analysis&quot;
                    </span>],
                </span>
            </div>
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    8
                </span>
                <span class="line-content">
                    <span class="property" style={{ color: "#9cdcfe" }}>
                        hobbies
                    </span>: [<span class="string" style={{ color: "#d69d85" }}>
                        &quot;Football&quot;
                    </span>,{" "}
                    <span class="string" style={{ color: "#d69d85" }}>
                        &quot;Singing&quot;
                    </span>],
                </span>
            </div>
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    9
                </span>
                <span class="line-content">{"}"};</span>
            </div>
            <div
                class="code-line"
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                }}
            >
                <span
                    class="line-number"
                    style={{
                        color: "#858585",
                        marginRight: "15px",
                        minWidth: "30px",
                        textAlign: "right",
                    }}
                >
                    10
                </span>
                <span class="line-content">
                    <span class="keyword" style={{ color: "#569cd6" }}>
                        console
                    </span>.<span class="property" style={{ color: "#9cdcfe" }}>
                        log
                    </span>(<span class="string" style={{ color: "#d69d85" }}>
                        &quot;Feel free to browse my projects and get in
                        touch!&quot;
                    </span>);
                </span>
            </div>
        </div>
    );
}
