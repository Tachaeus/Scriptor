import { useState } from "react";

function Accordion() {
    const [active, setActive] = useState(null);

    const FAQs = [
        {
            question: "What is Scriptor exactly?",
            answer: `Scriptor functions as a round-the-clock and free-to-use job/task/habit-tracking platform for all work done on the site by either individuals or organizations.`
        },
        {
            question: "Is Scriptor free?",
            answer: `Yes! criptor is completely free to use for all registered parties.`
        },
        {
            question: "What can I use it for?",
            answer: `The tool's primary function is as a task-manager. Though, we've observed many use it for other purposes such as habit-tracking, timing, event-calendering, etc.`
        },
        {
            question: "What if I have questions?",
            answer: `Any and all concerns or queries you may hae shall be addressed as soon as possible. Be sure to reach out via the contact page.`
        },
        {
            question: "How many people can use my account at a time?",
            answer: `The maximum number of users allowed per account is twenty-five admins and fifteen workers.`
        },
        {
            question: "How does the tracker work?",
            answer: `We encourage you to read the above instructions. The rest is really straight-foward.`
        }
    ];

    const toggleFAQs = (index) => {
        setActive(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <>
            <h2 className="fading">Frequently Asked Questions</h2>
            <div className="accordion fading">
                {FAQs.map((faq, index) => (
                    <div className="query" key={index} onClick={() => toggleFAQs(index)}>
                        <span className="question-icon">{active === index ? "-" : "+"}</span>
                        <h4 className="question">{faq.question}</h4>
                        <h5 className="answer" style={{
                            maxHeight: active === index ? "200px" : "0px",
                            display: active === index ? "" : "none",
                        }}>{faq.answer}
                        </h5>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Accordion;