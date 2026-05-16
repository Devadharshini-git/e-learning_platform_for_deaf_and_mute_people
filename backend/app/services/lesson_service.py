from typing import List

# Child-friendly lesson content generator
LESSON_TEMPLATES = {
    "math": {
        "numbers": {
            "keywords": ["count", "number", "one", "two", "three"],
            "fun_facts": [
                "Zero was invented in India!",
                "You have 10 fingers to help you count!",
                "Numbers never end — they go on forever!",
            ]
        },
        "shapes": {
            "keywords": ["circle", "square", "triangle", "sides", "corners"],
            "fun_facts": [
                "A circle has no corners at all!",
                "Honeybees make hexagon shapes in their hives!",
                "Triangles are the strongest shape in building!",
            ]
        }
    },
    "science": {
        "animals": {
            "keywords": ["animal", "pet", "wild", "fur", "wings"],
            "fun_facts": [
                "There are more insects than any other animal!",
                "A snail can sleep for 3 years!",
                "Elephants are the only animals that cannot jump!",
            ]
        },
        "weather": {
            "keywords": ["sun", "rain", "cloud", "wind", "temperature"],
            "fun_facts": [
                "Lightning strikes Earth 100 times every second!",
                "No two snowflakes are exactly alike!",
                "The wind has no color — that is why we cannot see it!",
            ]
        }
    },
    "english": {
        "alphabet": {
            "keywords": ["letter", "vowel", "consonant", "word", "spell"],
            "fun_facts": [
                "There are 26 letters in the English alphabet!",
                "A, E, I, O, U are called vowels!",
                "The letter E is used most in English words!",
            ]
        },
        "colors": {
            "keywords": ["color", "red", "blue", "yellow", "green"],
            "fun_facts": [
                "Red, blue and yellow are called primary colors!",
                "Mixing red and blue makes purple!",
                "A rainbow has 7 colors!",
            ]
        }
    }
}


def generate_lesson_content(subject: str, topic: str, concept: str) -> dict:
    """Generate child-friendly lesson content."""
    subject_data = LESSON_TEMPLATES.get(subject, {})
    topic_data = subject_data.get(topic, {})

    keywords = topic_data.get("keywords", [concept.lower()])
    fun_facts = topic_data.get("fun_facts", ["Learning is fun!"])

    # Pick a fun fact based on concept length (simple hash)
    fact_index = len(concept) % len(fun_facts)
    fun_fact = fun_facts[fact_index]

    simple_explanation = (
        f"{concept} is something amazing we can learn today! "
        f"It is part of {subject} and helps us understand the world around us. "
        f"Let us explore it together!"
    )

    example = f"Can you think of a {concept.lower()} you have seen today?"

    return {
        "concept": concept,
        "simple_explanation": simple_explanation,
        "fun_fact": f"🌟 {fun_fact}",
        "example": example,
        "keywords": keywords
    }


def generate_quiz(subject: str, topic: str, num_questions: int = 3) -> List[dict]:
    """Generate simple quiz questions for children."""
    quiz_bank = {
        "math-numbers": [
            {
                "question": "How many fingers do you have on one hand?",
                "options": ["3", "4", "5", "6"],
                "correct_index": 2,
                "explanation": "You have 5 fingers on each hand!"
            },
            {
                "question": "What comes after number 2?",
                "options": ["1", "4", "3", "5"],
                "correct_index": 2,
                "explanation": "1, 2, 3 — three comes after two!"
            },
            {
                "question": "How many eyes do you have?",
                "options": ["1", "2", "3", "4"],
                "correct_index": 1,
                "explanation": "You have 2 eyes — one on each side!"
            },
        ],
        "math-shapes": [
            {
                "question": "How many sides does a triangle have?",
                "options": ["2", "4", "3", "5"],
                "correct_index": 2,
                "explanation": "A triangle has 3 sides!"
            },
            {
                "question": "What shape is a ball?",
                "options": ["Square", "Triangle", "Circle", "Rectangle"],
                "correct_index": 2,
                "explanation": "A ball is round like a circle!"
            },
        ],
        "science-animals": [
            {
                "question": "What sound does a dog make?",
                "options": ["Meow", "Bark", "Moo", "Tweet"],
                "correct_index": 1,
                "explanation": "Dogs say BARK! WOOF WOOF!"
            },
            {
                "question": "Which animal can fly?",
                "options": ["Dog", "Cat", "Fish", "Bird"],
                "correct_index": 3,
                "explanation": "Birds have wings and can fly!"
            },
        ],
        "english-alphabet": [
            {
                "question": "What is the first letter of the alphabet?",
                "options": ["B", "C", "A", "D"],
                "correct_index": 2,
                "explanation": "A is the very first letter!"
            },
            {
                "question": "A is for ___?",
                "options": ["Ball", "Cat", "Apple", "Dog"],
                "correct_index": 2,
                "explanation": "A is for Apple!"
            },
        ],
        "english-colors": [
            {
                "question": "What color is the sun?",
                "options": ["Blue", "Red", "Green", "Yellow"],
                "correct_index": 3,
                "explanation": "The sun is bright yellow!"
            },
            {
                "question": "What color is the sky?",
                "options": ["Yellow", "Blue", "Red", "Green"],
                "correct_index": 1,
                "explanation": "The sky is beautiful blue!"
            },
        ],
    }

    key = f"{subject}-{topic}"
    questions = quiz_bank.get(key, [
        {
            "question": f"Is {topic} interesting?",
            "options": ["Yes!", "Of course!", "Absolutely!", "Very much!"],
            "correct_index": 0,
            "explanation": "Learning is always fun and interesting!"
        }
    ])

    return questions[:num_questions]