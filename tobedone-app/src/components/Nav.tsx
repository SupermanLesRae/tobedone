import { NavProps } from "../interfaces/interface";

const Nav = ( {userName} :NavProps ) => {
    return ( 
        <nav>
            {userName}
        </nav>
     );
}
 
export default Nav;