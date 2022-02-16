import Logo from "./Logo";
import NavItem from "./NavItem";
import Button from "./Button";

export default function App() {
    return (
    <nav className="flex items-center">
        <div className="w-3/12">
          <Logo/>
        </div>
        <div className="w-6/12 justify-items-center">
         <NavItem/>
        </div>
        <div className="3/120">
          <Button variant={"outline-yellow"}>
            Contact
          </Button>
        </div>
    </nav>
    )
}