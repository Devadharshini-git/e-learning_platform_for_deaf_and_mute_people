from fastapi import APIRouter, HTTPException
from app.models.schemas import NLPRequest, NLPResponse
from app.services.nlp_service import process_nlp

router = APIRouter()

@router.post("/simplify", response_model=NLPResponse)
async def simplify_text(request: NLPRequest):
    try:
        result = process_nlp(request.text, request.age_group, request.subject)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/health")
async def nlp_health():
    return {"status": "NLP service running"}