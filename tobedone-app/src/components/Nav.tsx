//interfaces
import { NavProps } from "../interfaces/interface";

//assets
import logoMark from "../assets/logomark.svg";
import { TrashIcon } from '@heroicons/react/24/solid'

//rrd imports
import { Form, NavLink } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";



const Nav = ({ userName }: NavProps) => {
    return (
        <nav className="flex justify-between items-center">
            <NavLink
                to="/"
                aria-label="go to home"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 m-2 border-2 border-transparent hover:border-fluorescent rounded-full">
                    <img src={logoMark} alt="" height={30} />
                    <span className="text-lg text-fluorescent">Todo</span>
                </div>
            </NavLink>
            {
                userName ? (
                    <Form
                        className="m-2"
                        method="post"
                        action="logout"
                        onSubmit={(event) => {
                            if (!confirm("Delete user and all data?")) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit"
                            className="flex items-center gap-2 bg-red-500 hover:bg-white text-white hover:text-red-500 font-bold py-2 px-4 rounded-full border-transparent border-2 hover:border-red-500"
                        >
                            <TrashIcon className="h-4 w-4"></TrashIcon>
                            <span>Delete User</span>
                        </button>


                    </Form>
                ) : ''
            }
        </nav>

    );
}

export default Nav;