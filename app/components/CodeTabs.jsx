// src/components/CodeTabs.jsx
import { useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import the base oneDark theme
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// bring in your SCSS
import "../styles/_code-tabs.scss";

// take oneDark but make the inner block transparent
const customOneDark = {
  ...oneDark,
  plain: {
    ...oneDark.plain,
    backgroundColor: "transparent",
  },
};

const TABS = [
  { id: "javascript", name: "JavaScript", src: "https://api.iconify.design/simple-icons:javascript.svg", url: "https://www.javascript.com/" },
  { id: "typescript", name: "TypeScript", src: "https://api.iconify.design/simple-icons:typescript.svg", url: "https://www.typescriptlang.org/" },
  { id: "python",     name: "Python",     src: "https://api.iconify.design/simple-icons:python.svg",     url: "https://www.python.org/" },
  { id: "go",         name: "Go",         src: "https://api.iconify.design/simple-icons:go.svg",         url: "https://go.dev/" },
  { id: "react",      name: "React",      src: "https://api.iconify.design/simple-icons:react.svg",      url: "https://reactjs.org/" },
  { id: "nextjs",     name: "Next.js",    src: "https://api.iconify.design/simple-icons:nextdotjs.svg",  url: "https://nextjs.org/" },
  { id: "postgresql", name: "PostgreSQL", src: "https://api.iconify.design/simple-icons:postgresql.svg", url: "https://www.postgresql.org/" },
  { id: "sass",       name: "Sass / SCSS",src: "https://api.iconify.design/simple-icons:sass.svg",       url: "https://sass-lang.com/" },
  { id: "nodejs",     name: "Node.js",    src: "https://api.iconify.design/simple-icons:nodedotjs.svg",   url: "https://nodejs.org/" },
  { id: "express",    name: "Express",    src: "https://api.iconify.design/simple-icons:express.svg",     url: "https://expressjs.com/" },
  { id: "mongodb",    name: "MongoDB",    src: "https://api.iconify.design/simple-icons:mongodb.svg",     url: "https://www.mongodb.com/" },
  { id: "vercel",     name: "Vercel Fn",  src: "https://api.iconify.design/simple-icons:vercel.svg",      url: "https://vercel.com/docs/serverless-functions" },
  { id: "supabase",   name: "Supabase Fn",src: "https://api.iconify.design/simple-icons:supabase.svg",    url: "https://supabase.com/docs/guides/functions" },
  { id: "aws",        name: "AWS EC2",    src: "https://api.iconify.design/simple-icons:amazonaws.svg",   url: "https://docs.aws.amazon.com/ec2/index.html" },
  { id: "curl",       name: "cURL",       src: "https://api.iconify.design/simple-icons:curl.svg",        url: "https://curl.se/docs/manpage.html" },
];

const SNIPPETS = {
  javascript: `const fetchPattern = useCallback(async () => {
  if (!beatId) return;
  setLoading(true);
  try {
    const res = await API.get(\`/beats/\${beatId}\`);
    setTitle(res.data.beat.title);
    setPattern(res.data.beat.data);
    setMessage({ text: '', type: '' });
  } catch (error) {
    setMessage({ text: error.response?.data?.message || 'Failed to load beat', type: 'error' });
  } finally {
    setLoading(false);
  }
}, [beatId]);`,
  typescript: `interface User { id?: number; email: string }
interface AuthContextType {
  user: User | null;
  token: string | null;
  ready: boolean;
  login: (email: string, pw: string) => Promise<boolean>;
  register: (email: string, pw: string) => Promise<boolean>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);`,
  python: `MENU = {
  "espresso": {"ingredients": {"water":50,"coffee":18},"cost":1.5},
  "latte":    {"ingredients": {"water":200,"milk":150,"coffee":24},"cost":2.5}
}
resources = {"water":300,"milk":200,"coffee":100}

def is_resource_sufficient(order_ingredients):
    for item, amt in order_ingredients.items():
        if amt > resources[item]:
            print(f"Sorry, not enough {item}.")
            return False
    return True

if is_resource_sufficient(MENU["latte"]["ingredients"]):
    print("Let's make a latte!")`,
  go: `package db

import (
  "database/sql"
  "fmt"
  "log"
  "os"
  _ "github.com/lib/pq"
)

func InitDB() {
  connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
    os.Getenv("DB_HOST"), os.Getenv("DB_PORT"),
    os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_NAME"),
  )
  db, err := sql.Open("postgres", connStr)
  if err != nil { log.Fatal("Open error:", err) }
  if err = db.Ping(); err != nil { log.Fatal("Ping error:", err) }
  log.Println("Database connected")
}`,
  react: `‘use client’
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SequencerGrid = dynamic(() => import('@/components/SequencerGrid'), {
  ssr: false,
  loading: () => <p>Loading…</p>
});

export default function PatternEditor({ beatId }) {
  const [pattern, setPattern] = useState(
    Array.from({ length: 4 }, () => Array(16).fill(false))
  );
  useEffect(() => { /* fetchPattern here */ }, [beatId]);
  return <SequencerGrid pattern={pattern} onPatternChange={setPattern} />;
}`,
  nextjs: `‘use client’
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function WelcomeHeader() {
  const textRef = useRef(null);
  const router = useRouter();
  return (
    <h1 ref={textRef} onClick={() => router.push('/')}>
      Welcome to BeatSeq
    </h1>
  );
}`,
  postgresql: `generator client { provider = "prisma-client-js" }
datasource db { provider = "postgresql"; url = env("DATABASE_URL") }

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  sketches  Sketch[]
  createdAt DateTime @default(now())
}

model Sketch {
  id       Int      @id @default(autoincrement())
  title    String
  timeline Json?
  content  String?
  tags     String[]
  user     User     @relation(fields:[userId],references:[id])
  userId   Int
  @@index([userId])
}`,





  sass: `body[data-theme="light"] {
  --bg-color: #f3f3f6;
  --text-color: #111111;
  --card-bg: linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%);
  --primary-accent: #007fba;
  --glass-button-text: #f5f5f5;
  --border-color: rgba(0, 0, 0, 0.05);
  --shadow-color: rgba(0, 0, 0, 0.1);
  --input-bg: #ffffff;
  --placeholder-color: rgba(0, 0, 0, 0.5);
  --accent-grad: linear-gradient(135deg, #2a2a2c 0%, #1b1b1c 100%);
  --grid: black;
}
body[data-theme="dark"] {
  --bg-color: #000000;
  --text-color: #f5f5f5;
  --card-bg: rgba(0, 0, 0, 0);
  --primary-accent: #5dc6ff;
  --glass-button-text: #f5f5f5;
  --border-color: rgba(255, 255, 255, 0.08);
  --shadow-color: rgba(0, 0, 0, 0.6);
  --input-bg: #111111;
  --placeholder-color: rgba(255, 255, 255, 0.4);
  --accent-grad: none;
  --grid: rgba(255, 255, 255, 0.05);

}`,








  nodejs: `import fs from "fs";

fs.readFile("./data.json", "utf8", (err, data) => {
  if (!err) console.log(JSON.parse(data));
});`,
  express: `import express from "express";
const app = express();

app.get("/api/beat", (req, res) => {
  res.json({ title: "My Beat", id: req.query.id });
});

app.listen(3000, () => console.log("Express server running"));`,
  mongodb: `import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_URL);

await client.connect();
const beats = await client
  .db("seq")
  .collection("patterns")
  .find()
  .toArray();
console.log(beats);`,
  vercel: `// api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Vercel Function!" });
}`,
  supabase: `// supabase/functions/echo.ts
import { serve } from "https://deno.land/std/http/server.ts";

serve(req => new Response(JSON.stringify({ echo: req.url })));`,
  aws: `import AWS from "aws-sdk";
const ec2 = new AWS.EC2({ region: "us-east-1" });

ec2.describeInstances({}, (err, data) => {
  if (err) console.error(err);
  else console.log(data.Reservations);
});`,
  curl: `curl -X POST https://api.beatseq.app/beats \\ 
  -H "Authorization: Bearer $TOKEN" \\ 
  -H "Content-Type: application/json" \\ 
  -d '{"title":"My New Beat","pattern":[[0,1,0],[1,0,1]]}'`,
};

export default function CodeTabs() {
  const [active, setActive] = useState(TABS[0].id);

  return (
    <div className="code-tabs">
      <div className="tab-list">
        {TABS.map(({ id, name, src }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`tab-trigger ${active === id ? "active" : ""}`}
            title={name}
          >
            <img src={src} alt={name} />
          </button>
        ))}
      </div>

      <div className="code-panel">
        <SyntaxHighlighter
          style={customOneDark}
          customStyle={{
            backgroundColor: "var(--bg-color)",
            textAlign: "left",
          }}
          language={
            active === "sass" ? "scss" :
            active === "curl" ? "bash" :
            active
          }
          showLineNumbers
          wrapLines
          lineProps={() => ({
            style: {
              display: "block",
              backgroundColor: "transparent",
              textAlign: "left",
            }
          })}
          lineNumberStyle={{ backgroundColor: "transparent", textAlign: "right" }}
        >
          {SNIPPETS[active]}
        </SyntaxHighlighter>
      </div>

      <div className="doc-link">
        <a
          href={TABS.find(t => t.id === active).url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View {TABS.find(t => t.id === active).name} docs →
        </a>
      </div>
    </div>
  );
}
