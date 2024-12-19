import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Calendar } from "@/components/ui/calendar"


const ScheduleEventForm = ({ formData, setFormData, setStep }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(2); // Move to the next step
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="w-full max-w-md p-6 bg-white rounded shadow-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">BOOK A DEMO</h2>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Enter Details</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Name *
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Email *
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                        Please share anything that will help prepare for our meeting.
                    </label>
                    <textarea
                        id="message"
                        className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                {/* <div className="text-sm text-gray-600 mb-4">
            By proceeding, you confirm that you have read and agree to{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Calendly's Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Notice
            </a>
            .
          </div> */}

                <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Schedule Event
                </button>
            </form>
        </div>
    );
};

const DateAndTime = ({ formData, setFormData, setStep }) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setFormData({ ...formData, date });
    }, [date]);

    const handleTimeSelection = (time) => {
        setFormData({ ...formData, time });
    };

    const handleSchedule = () => {
        setStep(3); // Move to final step
    };

    return (
        <div className="flex justify-center items-center h-screen cursor-grab">
            {/* Outer Container */}
            <div className="flex flex-col lg:flex-row w-[90%] h-[90%] bg-gray-200 mt-10 lg:mt-20">
                {/* First Div (Personal Info) */}
                <div className="w-full lg:w-[30%] bg-slate-100 flex flex-col justify-start items-center p-5 lg:p-10">
                    <h1 className="text-gray-700 font-bold text-xl lg:text-2xl">{formData.name}</h1>
                    <h1 className="text-gray-700 font-bold text-xl lg:text-2xl">{formData.email}</h1>
                    <br />
                    <h1 className="text-gray-900 font-bold text-lg lg:text-2xl">
                        Date: {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                    </h1>
                    <h1 className="text-gray-900 font-bold text-lg lg:text-2xl">
                        Time: {formData.time}
                    </h1>
                </div>

                {/* Second Div (Date & Time Selection) */}
                <div className="w-full lg:w-[70%] bg-white flex flex-col lg:flex-row">
                    {/* Calendar Section */}
                    <div className="flex flex-col items-center p-5 lg:p-10">
                        <h1 className="text-2xl lg:text-3xl font-bold mb-5">Select a Date & Time</h1>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border font-bold text-lg lg:text-4xl w-full lg:w-fit h-fit p-4 lg:pl-14 lg:pr-14 lg:pb-6 lg:pt-6 text-black shadow-lg hover:shadow-xl"
                        />
                        <div
                            className="bg-blue-600 text-white font-bold text-lg lg:text-xl mt-5 p-4 rounded-lg cursor-pointer"
                            onClick={handleSchedule}
                        >
                            Schedule Event
                        </div>
                    </div>

                    {/* Time List Section */}
                    <div className="flex flex-col border-t-2 lg:border-t-0 lg:border-l-2 border-gray-300 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 h-full p-4 lg:pt-4 lg:pb-4 lg:pl-8 lg:pr-8">
                        {[
                            "10:30am",
                            "11:00am",
                            "11:30am",
                            "12:00am",
                            "12:30am",
                            "1:00am",
                            "1:30am",
                            "2:00am",
                            "2:30am",
                            "3:00am",
                            "3:30am",
                            "4:30am",
                            "5:00am",
                            "5:30am",
                        ].map((time) => (
                            <div
                                key={time}
                                className="text-blue-500 font-bold text-base lg:text-xl m-2 border-2 border-sky-500 hover:bg-sky-500 hover:text-white p-2 lg:pt-4 lg:pb-4 lg:pl-6 lg:pr-6 cursor-pointer"
                                onClick={() => handleTimeSelection(time)}
                            >
                                {time}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


import { FaCheckCircle } from "react-icons/fa";

const EventScheduled = ({ formData }) => {
    const getDayName = (date) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return date ? days[date.getDay()] : "";
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded shadow-lg relative">
                <div className="flex flex-col items-center text-center">
                    {/* Success Icon */}
                    <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        🎉 You're Scheduled!
                    </h2>
                    <p className="text-gray-600 mb-6">
                        An invitation has been sent to your email address.
                    </p>

                    {/* Event Details */}
                    <div className="bg-gray-100 p-4 rounded-md shadow-inner w-full">
                        <p className="text-gray-700 text-lg font-semibold text-start">
                            Name: <span className="font-normal">{formData.name}</span>
                        </p>
                        <p className="text-gray-700 text-lg font-semibold text-start">
                            Email: <span className="font-normal">{formData.email}</span>
                        </p>
                        <p className="text-gray-700 text-lg font-semibold text-start">
                            Date:{" "}
                            <span className="font-normal">
                                {formData.date?.getDate()}/
                                {formData.date?.getMonth() + 1}/{formData.date?.getFullYear()}{" "}
                                ({getDayName(formData.date)})
                            </span>
                        </p>
                        <p className="text-gray-700 text-lg font-semibold text-start">
                            Time: <span className="font-normal">{formData.time}</span>
                        </p>
                        <p className="text-gray-700 text-lg font-semibold text-start">
                            Message: <span className="font-normal">{formData.message}</span>
                        </p>
                    </div>
                </div>
                {/* Bottom Note */}
                <p className="mt-6 text-sm text-gray-500">
                    If you have any questions or need to reschedule, please contact us at{" "}
                    <span className="text-blue-500">support@example.com</span>.
                </p>
            </div>
        </div>
    );
};



const BookDemo = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        date: null,
        time: "0:00",
    });

    return (
         <div>
            {step === 1 && <ScheduleEventForm formData={formData} setFormData={setFormData} setStep={setStep} />}
            {step === 2 && <DateAndTime formData={formData} setFormData={setFormData} setStep={setStep} />}
            {step === 3 && <EventScheduled formData={formData} />}
        </div>
    )
}

export default BookDemo