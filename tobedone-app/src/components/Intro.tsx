//rrd imports
import { Form } from "react-router-dom";

//assets
import { UserPlusIcon } from '@heroicons/react/24/solid'
import SubmitBtn from "./SubmitBtn";
import illustration from "../assets/illustration.jpg"

const Intro = () => {
    return (
        <div className="intro flex flex-col lg:flex-row justify-between">
            <div>
                <h1 className="text-3xl font-sans font-bold">Take Control of your <br /> <span className="text-fluorescent">Daily Tasks</span></h1>
                <p className="leading-6 font-sans text-gray-600">Planning ahead is the key to success. <br /> Start your planning today.</p>
                <Form
                    method="post"
                >
                    <input
                        className="border-2 px-4 py-2 my-6 rounded-full text-sm"
                        type="text"
                        name="userName"
                        placeholder="What is your name?"
                        aria-label="Your Name"
                        autoComplete="given-name"
                        required />

                    <button type="submit"
                        className="flex items-center gap-2 bg-fluorescent hover:bg-white text-white hover:text-fluorescent font-bold py-2 px-4 rounded-full border-transparent border-2 hover:border-fluorescent"
                    >
                        <UserPlusIcon className="h-4 w-4" />
                        <span>Create account</span>
                    </button>



                </Form>
            </div>
            <img className="w-full max-w-[600px] mx-auto lg:mx-0 mt-10" src={illustration} alt="Person with Tasks" />
        </div>
    );
}

export default Intro