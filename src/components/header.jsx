import logo from '../assets/fastandfresh.png';

function Header() {

  return (
    <>
      <div id="header">
        <img src={logo} className="logo" alt="Fast&Fresh logo" />
      </div>
    </>
  )
}

export default Header