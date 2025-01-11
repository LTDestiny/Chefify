import "./Footer.css";
import Logo from "../../../../public/logo.png";
import ListContact from "@/app/shared/Footer/ListContact";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__title">About Us</div>
      <div className="footer__content">
        Welcome to our website, a wonderful place to explore and learn how to
        cook like a pro.
      </div>
      <div className="textbox">
        <input
          type="email"
          placeholder="Enter your email"
          className="footer__mail"
        />
      </div>
      <button className="footer__button">Send</button>
      <div className="footer__information">
        <img className="footer__information__image" src={Logo.src} alt="" />
        <div className="footer__information__name">Chefify</div>
        <div className="footer__information__Company">2023 Chefify Company</div>
        <div className="footer__information__Service">
          Terms of Service| Privacy Policy
        </div>
      </div>
      <div className="footer__learnMore">
        <ListContact
          title="Learn More"
          contacts={["Our Cooks", "See Our Features", "FAQ"]}
        />
      </div>
    </div>
  );
}
