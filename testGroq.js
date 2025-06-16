const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: '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' });

async function testGroq() {
    try {
        const completion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: "Hello, what is AI?" }],
            model: "llama-3.3-70b-versatile"

        });
        console.log("Response from GROQ:", completion.choices[0].message.content);
    } catch (error) {
        console.error("Error:", error);
    }
}

testGroq();
