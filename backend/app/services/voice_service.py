import re

# Voice command patterns for children
COMMANDS = {
    "navigate": [
        (r"go to (lessons|home|practice|progress)", "navigate"),
        (r"open (math|science|english)", "open_subject"),
        (r"(next|forward)", "next"),
        (r"(back|previous|go back)", "previous"),
        (r"(repeat|say again|again)", "repeat"),
        (r"(stop|quiet|pause)", "stop"),
        (r"(help|what can i say)", "help"),
        (r"start quiz", "quiz"),
    ]
}

HELP_TEXT = (
    "You can say: Go to lessons, Open Math, Open Science, "
    "Open English, Next, Back, Repeat, Stop, or Start Quiz."
)

RESPONSES = {
    "navigate": "Going to {target}",
    "open_subject": "Opening {target} lessons",
    "next": "Moving to the next slide",
    "previous": "Going back to the previous slide",
    "repeat": "Let me repeat that for you",
    "stop": "Stopping",
    "help": HELP_TEXT,
    "quiz": "Starting the quiz. Are you ready?",
    "unknown": "Sorry, I did not understand. Say help to hear what you can say.",
}


def process_voice_command(text: str) -> dict:
    """Process voice command and return action."""
    text_lower = text.lower().strip()

    for pattern, action in COMMANDS["navigate"]:
        match = re.search(pattern, text_lower)
        if match:
            target = match.group(1) if match.lastindex else None
            response = RESPONSES.get(action, "").format(
                target=target or ""
            )
            return {
                "command": text,
                "action": action,
                "target": target,
                "response_text": response
            }

    return {
        "command": text,
        "action": "unknown",
        "target": None,
        "response_text": RESPONSES["unknown"]
    }