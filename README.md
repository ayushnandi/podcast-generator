# 🎙️ AI Podcast Generator

An end-to-end AI-powered podcast generator that transforms any topic into a natural-sounding podcast audio. Built with **React.js**, **n8n**, **OpenAI**, **ElevenLabs**, and **AWS Lambda + S3** for seamless automation and audio delivery.

## 🌐 Live Demo 

📽️ [Demo Video] https://www.loom.com/share/b3bc752aaf8145589b18dd44158e3bc3

## 🚀 Features

- 🧠 AI script generation via OpenAI (GPT-4)
- 🎤 Realistic voiceover using ElevenLabs TTS
- 📦 Base64 audio conversion in n8n
- ☁️ Secure audio hosting via AWS Lambda & S3
- 🎛️ Voice model selector (ElevenLabs, Deepgram)
- 🖥️ Responsive frontend built with React & Tailwind CSS

## 🛠️ Tech Stack

| Frontend     | Backend / Automation         | AI / Audio | Storage     |
|--------------|------------------------------|------------|-------------|
| React.js     | n8n Workflow Automation      | OpenAI     | AWS Lambda  |
| Tailwind CSS | HTTP Webhooks & API Handling | ElevenLabs | AWS S3      |

## 📁 Project Structure

```bash
📦 podcast-generator
├── frontend
│   ├── components/
│   │   ├── ChoseVoice.js
│   │   └── TakeInput.js
│   ├── pages/
│   │   └── MainPage.jsx
│   └── App.js
├── backend (n8n - visual workflow)
│   ├── Webhook (Topic Input)
│   ├── OpenAI (Script Generation)
│   ├── ElevenLabs API (TTS)
│   ├── Base64 Convert
│   ├── AWS Lambda (Upload to S3)
│   └── Respond to Webhook (with audio URL)
````

## 🧠 Workflow Overview (n8n)

1. **Trigger Webhook**: Topic is received from the frontend.
2. **Generate Script**: Uses OpenAI's GPT model to create a podcast script.
3. **TTS Generation**: ElevenLabs converts the script into speech.
4. **Base64 Encode**: Audio is extracted and converted.
5. **Lambda Upload**: AWS Lambda uploads audio to S3 and returns a secure public URL.
6. **Response**: Final URL is returned to the frontend for audio playback.

📸 *Workflow Screenshot Included:*
![n8n Workflow](https://github.com/user-attachments/assets/1a0628f8-8369-4b6c-b474-a8394821507f)

## ⚙️ How to Run Locally

1. Clone the repo:

```bash
git clone https://github.com/ayushnandi/podcast-generator.git
cd podcast-generator
```

2. Install dependencies:

```bash
cd frontend
npm install
```

3. Start development server:

```bash
npm run dev
```
