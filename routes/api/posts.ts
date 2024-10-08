//routes/api/posts.ts
import { HandlerContext } from "$fresh/server.ts";
import { join } from "https://deno.land/std@0.114.0/path/mod.ts";

export const handler = async (_req: Request, _ctx: HandlerContext) => {
    const postsDir = join(Deno.cwd(), "routes", "api", "posts"); // 경로 수정
    const files = [];
    try {
        for await (const dirEntry of Deno.readDir(postsDir)) {
            if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
                files.push(dirEntry.name);
            } else if (dirEntry.isDirectory) {
                const subFiles = [];
                for await (const subDirEntry of Deno.readDir(join(postsDir, dirEntry.name))) {
                    if (subDirEntry.isFile && subDirEntry.name.endsWith(".md")) {
                        subFiles.push(subDirEntry.name);
                    }
                }
                files.push({ name: dirEntry.name, children: subFiles });
            }
        }
    } catch (error) {
        console.error("Error reading posts directory:", error);
    }
    return new Response(JSON.stringify(files), {
        headers: { "Content-Type": "application/json" },
    });
};