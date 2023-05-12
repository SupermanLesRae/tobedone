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
        <nav className="flex justify-between items-center shadow">
            <NavLink
                to="/"
                aria-label="go to home"
            >
                <div className="inline-flex items-center gap-2 py-2 m-4 border-2 border-transparent hover:border-fluorescent rounded-full">
                    <img src={logoMark} alt="" height={30} />
                    <span className="text-lg text-fluorescent">Todo</span>
                </div>
            </NavLink>
            {
                userName ? (
                    <Form
                        className="m-4"
                        method="post"
                        action="logout"
                        onSubmit={(event) => {
                            if (!confirm("Delete user and all data?")) {
                                event.preventDefault();
                            }
                        }}
                    >                       
                        <SubmitBtn className={"font-sans text-sm"} type={"danger"} title={"Delete User account"}>
                            <TrashIcon className="h-4 w-4"></TrashIcon>
                        </SubmitBtn>
                    </Form>
                ) : ''
            }
        </nav>

    );
}

export default Nav;