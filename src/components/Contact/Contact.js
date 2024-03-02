import './Contact.css';
import Facebook from '../../assets/facebook-icon.png';
import Youtube from '../../assets/youtube.png';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';


const Contact = () => {
    return ( 
        <section id="contact">
            <h2 className="contactTitle">
                Contact Me
            </h2>
            <span className="contactDesc">
                Please fill out the form below to discuss any work opportunities
            </span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email" placeholder='Your Email' />
                <textarea className="Msg" name="message"  rows="5" placeholder="Message"></textarea>
            </form>
            <button type="submit" value='send' className="submitBtn">submit</button>
            <div className="links">
                <img src={Facebook} alt="Facebook" className="link" />
                <img src={Youtube} alt="Youtube" className="link" />
                <img src={Twitter} alt="Twitter" className="link" />
                <img src={Instagram} alt="Instagram" className="link" />
            </div>
        </section>
     );
}
 
export default Contact;