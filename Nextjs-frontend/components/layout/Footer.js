import Image from 'next/image';
import whatsappIcon from '../../public/icons/whatsapp.png';
import facebookIcon from '../../public/icons/facebook2.png';
import twitterIcon from '../../public/icons/twitter.png';
import instagramIcon from '../../public/icons/instagram.png';

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userMessage = e.target.message.value;

    const emailData = {
      to: 'mothana@gmail.com',
      subject: 'Contact Us Form Submission',
      body: `User Email: ${userEmail}\nUser Message: ${userMessage}`,

    };
    e.target.email.value = '';
    e.target.message.value = '';
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Website Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/sell">Sell on Golden Fox</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="#" target="_blank" rel="noopener noreferrer"><Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61550785441323" target="_blank" rel="noopener noreferrer"><Image src={facebookIcon} alt="Facebook" width={24} height={24} /></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><Image src={twitterIcon} alt="Twitter" width={24} height={24} /></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><Image src={instagramIcon} alt="Instagram" width={24} height={24} /></a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter your email" required />
            <textarea name="message" rows="1" placeholder="Your message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="footer-resources">
          <h4>Website Policies</h4>
          <ul>
            <li><a href="/trust-safety">Trust & Safety</a></li>
            <li><a href="/customer-support">Customer Support</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/return-policy">Return Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
