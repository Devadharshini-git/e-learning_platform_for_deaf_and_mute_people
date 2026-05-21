from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

from app.routers import nlp, lessons, voice

app = FastAPI(
    title="SignLearn API",
    description="AI/NLP backend for Sign Language E-Learning Platform",
    version="1.0.0"
)

# CORS — allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite dev
        "http://localhost:3000",  # Docker
        "http://frontend",        # Docker internal
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(nlp.router, prefix="/api/nlp", tags=["NLP"])
app.include_router(lessons.router, prefix="/api/lessons", tags=["Lessons"])
app.include_router(voice.router, prefix="/api/voice", tags=["Voice"])

@app.get("/")
def root():
    return {
        "app": "SignLearn API",
        "status": "running",
        "version": "1.0.0"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}