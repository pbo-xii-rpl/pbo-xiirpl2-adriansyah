import Logo from "./Logo";
import Nav from "./NavItem";
import Button from "./BtnItems";

export default function App() {
    return (
    <nav className="navbar bg-blue-600 py-12">
      <div className="container flex mx-auto">
        <div className="w-3/12">
          <Logo/>
        </div>
        <div className="w-6/12 justify-items-center">
         <Nav/>
        </div>
        <div className="3/120">
          <Button/>
        </div>
      </div>
      <div>
      <div className="text-5xl my-12 mt-20 font-mono text-white text-center">Saya seorang front-end engineer, back-end <br/>engineer, dan juga UI designer</div>
      <div className="mt-12 text-2xl text-white text-center opacity-50">Sejak umur 17 tahun saya memulai programming. <br/> Dan baru-baru ini memulai UI designer.</div>
      </div>
      <div className="text-center mt-10">
          <a href="#" className="border-yellow-400 bg-yellow-400 rounded-full border-2 hover:bg-yellow-400 hover:border-yellow-400 px-8 py-2 text-black font-semibold text-xl">Klik!</a>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </nav>
    )
}