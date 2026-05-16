from pydantic import BaseModel
from typing import Optional, List

class NLPRequest(BaseModel):
    text: str
    age_group: str = "5-10"
    subject: str = "general"

class NLPResponse(BaseModel):
    original: str
    simplified: str
    keywords: List[str]
    reading_level: str

class LessonRequest(BaseModel):
    subject: str
    topic: str
    concept: str

class LessonResponse(BaseModel):
    concept: str
    simple_explanation: str
    fun_fact: str
    example: str
    keywords: List[str]

class VoiceRequest(BaseModel):
    text: str
    subject: Optional[str] = None

class VoiceResponse(BaseModel):
    command: str
    action: str
    target: Optional[str] = None
    response_text: str

class QuizQuestion(BaseModel):
    question: str
    options: List[str]
    correct_index: int
    explanation: str

class QuizRequest(BaseModel):
    subject: str
    topic: str
    num_questions: int = 3