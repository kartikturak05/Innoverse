import React, { useState } from 'react';
import Accordion from './Accordion';

const faqs1 = [
    {
        question: 'What is Netflix?',
        answer: 'Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
        question: 'How much does Netflix cost?',
        answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹199 to ₹799 a month. No extra costs, no contracts.',
    },
];

const faqs2 = [
    {
        question: 'Where can I watch?',
        answer: 'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.',
    },
    {
        question: 'How do I cancel?',
        answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
];

const faqs3 = [
    {
        question: 'What can I watch on Netflix?',
        answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
        question: 'Is Netflix suitable for children?',
        answer: 'Netflix has a dedicated Kids section with content tailored for children and a Parental Control feature for a safe viewing experience.',
    },
];

const FAQ = () => {
    const [faqs, setFaqs] = useState(null);

    const handleClick = (selectedFaqs) => {
        setFaqs(selectedFaqs); // Set the selected FAQs
    };

    return (
        <div className="p-4 bg-gray-200 rounded-lg pt-24">
            {!faqs ? (
                <div className="flex flex-col items-center justify-center p-20 bg-slate-300">
                    <div
                        className="p-5 bg-slate-500 m-2 cursor-pointer text-white text-center rounded-lg"
                        onClick={() => handleClick(faqs1)}
                    >
                        <h1>Box 1</h1>
                        <p>Random Text about this </p>
                    </div>
                    <div
                        className="p-5 bg-slate-500 m-2 cursor-pointer text-white text-center rounded-lg"
                        onClick={() => handleClick(faqs2)}
                    >
                       <h1> Box 2 </h1>
                        <p>Random Text about this </p>
                    </div>
                    <div
                        className="p-5 bg-slate-500 m-2 cursor-pointer text-white text-center rounded-lg"
                        onClick={() => handleClick(faqs3)}
                    >
                        <h1>Box 3</h1>
                        <p>Random Text about this </p>
                    </div>
                </div>
            ) : (
                <>
                
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            title={faq.question}
                            answer={faq.answer}
                        />
                    ))}
               </>
            )}
        </div>
    );
};

export default FAQ;
