import nltk
import re
from typing import List

# Download required NLTK data
nltk.download('punkt', quiet=True)
nltk.download('stopwords', quiet=True)
nltk.download('averaged_perceptron_tagger', quiet=True)

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize

# Simple word replacements for child-friendly language (age 5-10)
SIMPLIFY_MAP = {
    "approximately": "about",
    "enormous": "very big",
    "tiny": "very small",
    "rapidly": "quickly",
    "difficult": "hard",
    "because": "because",
    "however": "but",
    "therefore": "so",
    "additionally": "also",
    "subsequently": "then",
    "demonstrate": "show",
    "observe": "see",
    "obtain": "get",
    "utilize": "use",
    "comprehend": "understand",
    "communicate": "talk",
    "environment": "surroundings",
    "organism": "living thing",
    "characteristic": "feature",
    "reproduction": "making babies",
}

def simplify_text(text: str, age_group: str = "5-10") -> str:
    """Simplify text for young children aged 5-10."""
    simplified = text.lower()

    # Replace complex words
    for complex_word, simple_word in SIMPLIFY_MAP.items():
        simplified = simplified.replace(complex_word, simple_word)

    # Shorten long sentences
    sentences = sent_tokenize(simplified)
    short_sentences = []
    for sentence in sentences:
        words = sentence.split()
        if len(words) > 15:
            # Break into smaller chunks
            mid = len(words) // 2
            part1 = ' '.join(words[:mid])
            part2 = ' '.join(words[mid:])
            short_sentences.append(part1.capitalize() + '.')
            short_sentences.append(part2.capitalize() + '.')
        else:
            short_sentences.append(sentence.capitalize())

    return ' '.join(short_sentences)


def extract_keywords(text: str) -> List[str]:
    """Extract important keywords from text."""
    stop_words = set(stopwords.words('english'))
    tokens = word_tokenize(text.lower())

    # Filter out stopwords and short words
    keywords = [
        word for word in tokens
        if word.isalpha()
        and word not in stop_words
        and len(word) > 3
    ]

    # Return unique keywords, max 5
    seen = set()
    unique = []
    for k in keywords:
        if k not in seen:
            seen.add(k)
            unique.append(k)
        if len(unique) == 5:
            break

    return unique


def get_reading_level(text: str) -> str:
    """Estimate reading level based on word/sentence length."""
    words = text.split()
    sentences = sent_tokenize(text)

    if not sentences:
        return "beginner"

    avg_word_length = sum(len(w) for w in words) / max(len(words), 1)
    avg_sentence_length = len(words) / max(len(sentences), 1)

    if avg_word_length < 4 and avg_sentence_length < 8:
        return "beginner"
    elif avg_word_length < 6 and avg_sentence_length < 12:
        return "intermediate"
    else:
        return "advanced"


def process_nlp(text: str, age_group: str = "5-10", subject: str = "general") -> dict:
    """Main NLP processing pipeline."""
    simplified = simplify_text(text, age_group)
    keywords = extract_keywords(text)
    reading_level = get_reading_level(text)

    return {
        "original": text,
        "simplified": simplified,
        "keywords": keywords,
        "reading_level": reading_level
    }