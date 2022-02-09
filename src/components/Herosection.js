import Button from "./Button";
import Navbar from "./Navbar";

function Herosection () {
    return (
        <div className="bg-indigo-600 h-[550px]">
            <div className="container mx-auto">
                <Navbar />
                <div className="text-center mt-16">
                    <h1 className="text-white font-semibold"></h1>
                    <p className="text-lg text-white text-opacity-60"></p>
                    <Button variant="fill-yellow">Pelajari</Button>
                </div>

            </div>
        </div>

    )
}
export default Herosection;