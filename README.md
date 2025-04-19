# 🧠 AI Study Assistant

An intelligent, full-stack study assistant designed to help you chat, summarize YouTube videos, and manage conversations in real-time — with PDF export functionality and support for markdown/code rendering.

Built with **Next.js 14**, **FastAPI**, **Firebase Firestore**, **Opensource LLMs**, and (optionally) **AstraDB (CassIO)** for RAG-based retrieval.

---

## 🚀 Features

- ✨ ChatGPT-like UI with Markdown & code highlighting
- 🔗 YouTube video summarization using transcript parsing
- 🔄 Real-time chat via Firebase Firestore
- 🧠 Session-based memory using FastAPI + LLM
- 📄 Export conversations to **selectable** PDF with clean formatting
- 🧾 Optionally supports RAG with CassIO + AstraDB

---

## 🛠️ Tech Stack

### 🔷 Frontend
- **Next.js 14 (App Router)**
- **Tailwind CSS + Headless UI**
- **ReactMarkdown + rehype-highlight**
- **html2pdf.js** for PDF export
- **Firebase Auth + Firestore**
- **ShadCN UI** & Lucide Icons

### 🧠 Backend
- **FastAPI**
- **OpenAI API (chat + summarize endpoints)**
- **Session-based chat memory**
- **YouTube transcript parser**
- **AstraDB + CassIO (for vector embedding)** [optional]

---

## 🏗️ System Architecture

```text
                ┌────────────────────┐
                │     User Browser   │
                └────────┬───────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │   Next.js Frontend  │
              │  (App Router + SSR) │
              └──────┬──────────────┘
                     │
       ┌─────────────┴─────────────┐
       ▼                           ▼
🟢 REST API Calls          🟢 Real-time Firestore Reads
(to FastAPI)              (chat messages per session)
       │                           │
       ▼                           ▼
 ┌────────────────────┐     ┌────────────────────┐
 │     FastAPI App     │     │   Firebase Firestore│
 │  - /chat (POST)     │     │  - users/           │
 │  - /summarize (POST)│     │  - chats/           │
 └────────┬────────────┘     └────────────────────┘
          │
          ▼
 ┌─────────────────────────────┐
 │  LLM / RAG Handler Logic    │
 │ - OpenAI or Custom Model    │
 │ - Session-based Memory      │
 │ - YouTube Transcript Logic  │
 └────────┬────────────────────┘
          │
          ▼
 ┌─────────────────────────────┐
 │  Optional: Vector DB (RAG)  │
 │   (AstraDB + CassIO)        │
 └─────────────────────────────┘


---

```
---
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


---
