import Button from "./Button";
import Navbar from "./Navbar";

function HeroSection () {
    return (
        <div className="bg-indigo-600 h-[550px]">
            <div className="container mx-auto">
                <Navbar />
                <div className="text-center mt-16">
                    <h1 className="font-mono text-5xl my-12 mt-20 text-white text-center">Saya seorang front-end engineer, back-end <br/>engineer, dan juga UI designer</h1>
                    <p className="font-mono mt-12 text-2xl text-white text-center opacity-50">Sejak umur 17 tahun saya memulai programming. <br/> Dan baru-baru ini memulai UI designer.</p>
                    <Button variant="fill-yellow">Pelajari</Button> 
                </div>

            </div>
        </div>
    )
}

export default HeroSection;