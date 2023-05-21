
import logo from '../../assets/logo/Village-Toy-Shop_logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content rounded-2xl">
        <div>
          <p className='font-semibold'>© Toy Shop</p>
          <img className='w-24 h-24 image-full' src={logo} alt="" />
          <p className='font-bold text-xl text-gray-900'>Toy World</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;