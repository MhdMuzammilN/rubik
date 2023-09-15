import logo from '../assets/rubik.png'
const NavBar = () => {

    
  return (
    <nav className="bg-[#06b6d4] flex md:flex-row md:justify-between max-sm:flex-col">
      <div className="h-14 w-14 pt-5 pl-5 pb-5 flex flex-row">
            <img src={logo} />
            <div>
              <h1>Rubik</h1>
            </div>
            
      </div>
      <div className="">
        <ul className="list-none flex flex-col sm:flex-row justify-end gap-5 justify-items-end pt-5 pr-5" >
            <li>Home</li>
            <li>Services</li>
            <li>Sales</li>
            <li>contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;