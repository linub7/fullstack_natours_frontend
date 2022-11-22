import LogoGreen from 'assets/images/logo-green.png';
import './style.css';

const FooterComponent = () => {
  return (
    <div class="footer">
      <div class="footer__logo">
        <img src={LogoGreen} alt="Natours logo" />
      </div>
      <ul class="footer__nav">
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Download apps</a>
        </li>
        <li>
          <a href="#">Become a guide</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p class="footer__copyright">
        &copy; by Mohammad Hadi (FullStack MERN project). All rights reserved.
      </p>
    </div>
  );
};

export default FooterComponent;
