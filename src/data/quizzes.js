
export const quizzes = {
    // Day 1 Quizzes
    "intro-basics": [
        {
            question: "What is the primary reason this session exists?",
            options: ["To teach coding", "To explain AI basics and correct usage at work", "To sell AI software", "To replace humans with AI"],
            answer: 1
        },
        {
            question: "AI works primarily by:",
            options: ["Thinking like a human", "Feeling emotions", "Following patterns and data", "Magic"],
            answer: 2
        },
        {
            question: "What is Generative AI?",
            options: ["AI that only analyzes data", "AI that creates new content", "AI that fixes hardware", "AI that manages electricity"],
            answer: 1
        },
        {
            question: "Which of these is NOT an example of AI mentioned?",
            options: ["Google Maps routes", "Netflix recommendations", "Face unlock", "A microwave oven timer"],
            answer: 3
        },
        {
            question: "In the comparison table, Traditional Software is described as having:",
            options: ["Fixed rules", "Learning ability", "Unpredictable outputs", "Sentience"],
            answer: 0
        }
    ],
    "how-genai-works": [
        {
            question: "Machine Learning (ML) is compared to:",
            options: ["A robot building a car", "A child learning what a dog is", "A calculator", "A search engine"],
            answer: 1
        },
        {
            question: "What are the internal numbers inside a model that act like 'volume controls'?",
            options: ["Tokens", "Hallucinations", "Parameters / Weights", "Context Windows"],
            answer: 2
        },
        {
            question: "Neural Networks are inspired by:",
            options: ["The solar system", "The human brain", "Internal combustion engines", "The internet"],
            answer: 1
        },
        {
            question: "What does the 'L' in LLM stand for when referring to 'Large'?",
            options: ["Low-latency", "Large text data", "Logical", "Linear"],
            answer: 1
        },
        {
            question: "What is the primary output of an LLM?",
            options: ["A physical object", "A pattern prediction", "A feelings report", "An electricity bill"],
            answer: 1
        }
    ],
    "key-concepts": [
        {
            question: "What are 'Tokens' in the context of AI?",
            options: ["Physical coins", "Small pieces of text", "Digital keys", "Encrypted passwords"],
            answer: 1
        },
        {
            question: "What is a 'Context Window'?",
            options: ["A physical window in an office", "A period of time for training", "How much info AI can remember at once", "A type of operating system"],
            answer: 2
        },
        {
            question: "What is an AI 'Hallucination'?",
            options: ["When AI stops working", "When AI gives a confident but incorrect answer", "When AI creates a colorful image", "When AI speaks a different language"],
            answer: 1
        },
        {
            question: "What should you always do with important AI outputs?",
            options: ["Trust them blindly", "Post them immediately", "Double-check them", "Delete them"],
            answer: 2
        },
        {
            question: "Tokenization means a sentence is broken into:",
            options: ["Numbers", "Pixels", "Tokens", "Soundwaves"],
            answer: 2
        }
    ],

    // Day 2 Quizzes
    "opening-context": [
        {
            question: "What is the theme of Day 2?",
            options: ["Introduction to coding", "Applying GenAI at work", "Hardware maintenance", "Company history"],
            answer: 1
        },
        {
            question: "Which role is mentioned as something you'll learn about on Day 2?",
            options: ["Software developer", "AI Generalist", "Janitor", "Professional Athlete"],
            answer: 1
        },
        {
            question: "What is one of the modes of Visual GenAI?",
            options: ["Mind -> Reality", "Text -> Image", "Thought -> Speech", "Action -> Reaction"],
            answer: 1
        },
        {
            question: "Day 2 agenda includes learning about:",
            options: ["Cooking", "Custom GPTs (AI bots)", "Car repair", "Plant biology"],
            answer: 1
        },
        {
            question: "What does Day 2 transition from?",
            options: ["Using AI to Designing AI-powered work", "Morning to Evening", "Theory to History", "Office to Home"],
            answer: 0
        }
    ],
    "why-visuals-matter": [
        {
            question: "Why are visuals important at work according to the content?",
            options: ["They look pretty", "People skim before reading", "They are required by law", "They reduce paper usage"],
            answer: 1
        },
        {
            question: "How has AI changed visual creation?",
            options: ["It made it more expensive", "It made it slower", "Anyone can now create visuals", "It removed all designers"],
            answer: 2
        },
        {
            question: "Before AI, there was a dependency on:",
            options: ["Accountants", "Designers", "Printers", "Salespeople"],
            answer: 1
        },
        {
            question: "Which of these is a benefit of using visuals at work?",
            options: ["Better communication", "Higher file sizes", "More meetings", "Longer emails"],
            answer: 0
        },
        {
            question: "Visuals are used in:",
            options: ["LinkedIn posts", "Slide hero images", "Internal communication", "All of the above"],
            answer: 3
        }
    ],

    // Generic placeholders for remaining sections to ensure no crashes
    "capabilities": [
        { question: "What is AI good at?", options: ["Writing drafts", "Exact calculations", "Legal decisions", "Confidential data"], answer: 0 },
        { question: "What is AI bad at?", options: ["Summarizing docs", "Generating ideas", "Exact calculations", "Rewriting content"], answer: 2 },
        { question: "Can AI handle confidential data safely by default?", options: ["Yes", "No", "Always", "Maybe"], answer: 1 },
        { question: "Is AI good at summarizing long documents?", options: ["Yes", "No", "Never", "Partially"], answer: 0 },
        { question: "Which capability is AI NOT good at?", options: ["Writing drafts", "Rewriting content", "Real-time information", "Generating ideas"], answer: 2 }
    ],
    "prompt-engineering": [
        { question: "What is a prompt?", options: ["A piece of hardware", "What you ask AI to do", "A type of computer code", "A loading screen"], answer: 1 },
        { question: "Which is a 'Good Prompt' example?", options: ["'Write email'", "'Write a professional email asking manager for leave, polite tone, short'", "'Do work'", "'Hello'"], answer: 1 },
        { question: "What is the first step in the Prompt Framework?", options: ["Output Format", "Task", "Role", "Constraints"], answer: 2 },
        { question: "Prompt engineering is like giving instructions to:", options: ["A senior partner", "A junior employee", "A robot", "A pet"], answer: 1 },
        { question: "What does 'Constraints' mean in a prompt?", options: ["Limitations like 'short' or 'polite'", "The price of the AI", "The internet speed", "The number of users"], answer: 0 }
    ],
    "model-settings": [
        { question: "What does Temperature control?", options: ["The color of the UI", "Creativity level", "CPU heat", "Download speed"], answer: 1 },
        { question: "A low temperature (0.1) is best for:", options: ["Marketing ideas", "Resume writing", "Poetry", "Jokes"], answer: 1 },
        { question: "Max Tokens controls:", options: ["Memory usage", "Response length", "Internet cost", "Speed of login"], answer: 1 },
        { question: "A high temperature (0.8) is best for:", options: ["Factual reports", "Creative ideas", "Math problems", "Code debugging"], answer: 1 },
        { question: "What happens if Max Tokens is set too low?", options: ["AI stops working", "Response is cut off", "AI becomes smarter", "AI speaks louder"], answer: 1 }
    ],
    "applications-tools": [
        { question: "Which tool is best for research with sources?", options: ["ChatGPT", "Perplexity", "Midjourney", "Notion"], answer: 1 },
        { question: "Which tool is best for writing & thinking?", options: ["Excel", "ChatGPT", "Photoshop", "Outlook"], answer: 1 },
        { question: "Can AI be used in Operations for SOPs?", options: ["Yes", "No", "Never", "Only on Fridays"], answer: 0 },
        { question: "Notion AI is used for:", options: ["Documents", "Images", "Video", "Gaming"], answer: 0 },
        { question: "Which industry uses AI for Ad copy?", options: ["Finance", "Marketing", "HR", "Operations"], answer: 1 }
    ],
    "conclusion": [
        { question: "What is the final takeaway?", options: ["AI is magic", "AI is a tool, not magic", "AI will replace everyone", "AI is always right"], answer: 1 },
        { question: "Does AI follow truth or patterns?", options: ["Truth", "Patterns", "Both", "Neither"], answer: 1 },
        { question: "Who remains responsible for AI outputs?", options: ["The AI", "The CEO of OpenAI", "Humans", "The computer"], answer: 2 },
        { question: "AI will not replace you. Who will?", options: ["Robots", "People who understand AI", "No one", "Aliens"], answer: 1 },
        { question: "What should you always do with AI outputs?", options: ["Trust them blindly", "Double-check important ones", "Delete them", "Share immediately"], answer: 1 }
    ],
    "intro-visual-genai": [
        { question: "What is Visual GenAI?", options: ["AI that only reads text", "AI that creates images/videos", "AI that monitors cameras", "AI that draws on paper"], answer: 1 },
        { question: "What is 'Text -> Image'?", options: ["Printing text", "Creating image from text prompt", "Scanning text", "Reading an image"], answer: 1 },
        { question: "Where is Visual GenAI used?", options: ["LinkedIn creatives", "Slide hero images", "Posters", "All of the above"], answer: 3 },
        { question: "Can AI create video from text?", options: ["Yes", "No", "Only if it's short", "In 10 years"], answer: 0 },
        { question: "What does an image prompt control?", options: ["Internet speed", "Style, mood, clarity", "Keyboard layout", "Monitor brightness"], answer: 1 }
    ],
    "diffusion-intuition": [
        { question: "How do Diffusion Models start generating an image?", options: ["From a blank canvas", "From random noise", "From a stock photo", "From a sketch"], answer: 1 },
        { question: "The process of Diffusion is compared to:", options: ["Building a wall", "Clearing fog from a window", "Painting a house", "Cooking a meal"], answer: 1 },
        { question: "What guides the noise removal in Diffusion?", options: ["Gravity", "Prompt instructions", "Randomness", "Mouse movements"], answer: 1 },
        { question: "Why do prompts matter for images?", options: ["They don't", "They control the outcome", "They make the AI faster", "They save power"], answer: 1 },
        { question: "Style and Mood are controlled by:", options: ["The keyboard", "The prompt", "The monitor", "The desk"], answer: 1 }
    ],
    "visual-storytelling": [
        { question: "Random visuals lead to:", options: ["Clarity", "Confusion", "Success", "Happiness"], answer: 1 },
        { question: "What is the first step in the Visual Story Framework?", options: ["Solution", "Hook", "Outcome", "Problem"], answer: 1 },
        { question: "Visual storytelling improves:", options: ["File size", "Understanding & recall", "Internet speed", "Typing speed"], answer: 1 },
        { question: "What comes after 'Problem' in the framework?", options: ["Hook", "Solution", "Outcome", "Intro"], answer: 1 },
        { question: "Story-based visuals lead to:", options: ["Confusion", "Clarity", "Boredom", "Noise"], answer: 1 }
    ],
    "image-tools": [
        { question: "Which tool is best for 'high aesthetics'?", options: ["Excel", "Midjourney", "Notion", "Slack"], answer: 1 },
        { question: "DALL-E is best for:", options: ["Gaming", "Business visuals", "Music", "Video"], answer: 1 },
        { question: "Stable Diffusion is known for:", options: ["Simplicity", "Customizability", "High cost", "Bad quality"], answer: 1 },
        { question: "Canva AI is good for:", options: ["Low quality", "Templates & collaboration", "Only video", "Only text"], answer: 1 },
        { question: "What is the rule for choosing a tool?", options: ["Follow the hype", "Based on outcome", "Cheapest one", "Most popular one"], answer: 1 }
    ],
    "video-tools": [
        { question: "Which is a video generation tool?", options: ["Runway", "Excel", "Word", "Spotify"], answer: 0 },
        { question: "What is a common use-case for AI Video?", options: ["Static poster -> animated reel", "Printing paper", "Sending emails", "Doing dishes"], answer: 1 },
        { question: "Pika is a tool for:", options: ["Text", "Video", "Music", "Storage"], answer: 1 },
        { question: "Can Canva do Video AI?", options: ["Yes", "No", "Maybe", "Only for pro"], answer: 0 },
        { question: "Text -> Explainer video is possible?", options: ["Yes", "No", "Never", "In the future"], answer: 0 }
    ],
    "hands-on-visual": [
        { question: "What is the first step in hands-on visual creation?", options: ["Submit work", "Pick a real use-case", "Close the app", "Wait"], answer: 1 },
        { question: "How long should the exercise take?", options: ["1 hour", "3-5 minutes", "1 day", "10 seconds"], answer: 1 },
        { question: "What does refining output mean?", options: ["Deleting it", "Improving the prompt", "Changing the screen", "Restarting"], answer: 1 },
        { question: "Weak prompt leads to:", options: ["Great result", "Average output", "No output", "Virus"], answer: 1 },
        { question: "Clear prompt leads to:", options: ["Bad result", "Professional output", "Average output", "Noise"], answer: 1 }
    ],
    "custom-gpts": [
        { question: "What is a Custom GPT?", options: ["A general chat", "AI with a fixed role/instructions", "A new computer", "A browser"], answer: 1 },
        { question: "Comparison: Specialist help is like:", options: ["General chat", "Custom GPT", "Search engine", "Radio"], answer: 1 },
        { question: "Example of a Custom GPT:", options: ["HR Policy Assistant", "Web browser", "Calculator", "Notepad"], answer: 0 },
        { question: "Can you give a Custom GPT fixed instructions?", options: ["Yes", "No", "Only some", "Depends"], answer: 0 },
        { question: "Where do you use Custom GPTs?", options: ["Inside ChatGPT", "On a phone call", "By mail", "Offline"], answer: 0 }
    ],
    "gpt-components": [
        { question: "What are 'Guardrails'?", options: ["Safety limits on what it must NOT do", "The color of the bot", "The speed of typing", "The name of the bot"], answer: 0 },
        { question: "Can you upload documents to a Custom GPT?", options: ["Yes", "No", "Only links", "Only text"], answer: 0 },
        { question: "Knowledge in GPT refers to:", "options": ["Its age", "Documents/PDFs provided", "Its IQ", "Its owners"], answer: 1 },
        { question: "Instructions define:", options: ["Role & behavior", "The price", "The logo", "The developer"], answer: 0 },
        { question: "Actions in GPT allow it to:", options: ["Move physically", "Access web/logic", "Fly", "Eat"], answer: 1 }
    ],
    "gpt-prompt-structure": [
        { question: "What is part of GPT prompt structure?", options: ["Role definition", "Computer specs", "User's age", "Date"], answer: 0 },
        { question: "Tone and Style are part of:", options: ["Instructions", "Hardware", "Internet", "Screen"], answer: 0 },
        { question: "Should you define boundaries?", options: ["Yes", "No", "Sometimes", "Never"], answer: 0 },
        { question: "Does a GPT need an output format?", options: ["Yes", "No", "Maybe", "Only for images"], answer: 0 },
        { question: "Example instruction: 'Never guess policy'", options: ["Wrong", "Example of a boundary", "Useless", "Funny"], answer: 1 }
    ],
    "agentic-ai": [
        { question: "What can an AI Agent do?", options: ["Only read", "Sense -> Think -> Act", "Only speak", "Only listen"], answer: 1 },
        { question: "Prompt vs Agent: An Agent is a:", options: ["One response", "Multi-step workflow", "Simple question", "Search"], answer: 1 },
        { question: "An Agent is compared to an:", options: ["Intern with a checklist", "Unpaid volunteer", "Senior partner", "Rival"], answer: 0 },
        { question: "Sense -> Think -> Act is the cycle of:", options: ["A prompt", "An agent", "A human", "A car"], answer: 1 },
        { question: "Is a prompt multi-step by default?", options: ["Yes", "No", "Always", "Often"], answer: 1 }
    ],
    "agent-workflow": [
        { question: "What is an automation flow step example?", options: ["New row in sheet", "Playing a game", "Watching a movie", "Taking a nap"], answer: 0 },
        { question: "Tool mentioned for logic-focused workflows:", options: ["make.com", "google.com", "facebook.com", "apple.com"], answer: 0 },
        { question: "What happens after AI summarizes info in the flow?", options: ["Nothing", "Sends it to Slack/Email", "Deletes it", "Prints it"], answer: 1 },
        { question: "Is make.com technical or logic-focused?", options: ["Technical", "Logic-focused", "Both", "Neither"], answer: 1 },
        { question: "What is the purpose of an agent flow?", options: ["To automate tasks", "To complicate work", "To use more power", "To hire more people"], answer: 0 }
    ],
    "ai-generalist": [
        { question: "What is an AI Generalist?", options: ["A specialist in 1 tool", "The 'AI person' in a team", "A robot", "A generic employee"], answer: 1 },
        { question: "Key skill for AI Generalist:", options: ["Prompting & Workflows", "Cooking", "Driving", "Singing"], answer: 0 },
        { question: "Outcome of being an AI Generalist:", options: ["More work", "Career acceleration", "Lower salary", "Boredom"], answer: 1 },
        { question: "Executive AI Generalist focuses on:", options: ["Coding", "Business impact & ROI", "Design", "Hardware"], answer: 1 },
        { question: "Does it help visibility?", options: ["Yes", "No", "Maybe", "Only for managers"], answer: 0 }
    ],
    "day2-qa-soft-pitch": [
        { question: "What is the focus of 12 weeks?", options: ["Awareness", "Real Capability & Leadership", "History", "Break"], answer: 1 },
        { question: "What is the focus of Today?", options: ["Leadership", "Awareness & Confidence", "Advanced Coding", "Retirement"], answer: 1 },
        { question: "Final takeaway: Applying AI is:", options: ["Good", "Powerful", "Boring", "Easy"], answer: 1 },
        { question: "What changes careers according to the closing?", options: ["Using AI", "Leading with AI", "Ignoring AI", "Talking about AI"], answer: 1 },
        { question: "AMA stands for:", options: ["Ask Me Anything", "Always Make Art", "Ask More Always", "AI Makes All"], answer: 0 }
    ]
};
