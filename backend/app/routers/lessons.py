from fastapi import APIRouter, HTTPException
from app.models.schemas import LessonRequest, LessonResponse, QuizRequest
from app.services.lesson_service import generate_lesson_content, generate_quiz

router = APIRouter()

@router.post("/generate", response_model=LessonResponse)
async def generate_lesson(request: LessonRequest):
    try:
        result = generate_lesson_content(request.subject, request.topic, request.concept)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/quiz")
async def get_quiz(request: QuizRequest):
    try:
        questions = generate_quiz(request.subject, request.topic, request.num_questions)
        return {"questions": questions, "total": len(questions)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/subjects")
async def get_subjects():
    return {
        "subjects": ["math", "science", "english"],
        "age_group": "5-10"
    }