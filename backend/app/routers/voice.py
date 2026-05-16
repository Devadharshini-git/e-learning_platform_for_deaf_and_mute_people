from fastapi import APIRouter, HTTPException
from app.models.schemas import VoiceRequest, VoiceResponse
from app.services.voice_service import process_voice_command

router = APIRouter()

@router.post("/command", response_model=VoiceResponse)
async def handle_voice_command(request: VoiceRequest):
    try:
        result = process_voice_command(request.text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/commands")
async def list_commands():
    return {
        "commands": [
            "go to lessons",
            "go to home",
            "open math",
            "open science",
            "open english",
            "next",
            "back",
            "repeat",
            "stop",
            "start quiz",
            "help"
        ]
    }