const Contact = () => {
  return (
    <div className="form-box">
      <form>
        <div class="form-head">
          <h2>Contact Me</h2>
          <p>Hi there, contact me to ask about anything you have in mind</p>
        </div>
        <div class="row">
          <div class="first-name" id="input-group">
            <label htmlFor="first-name" className="text">
              First name
            </label>
            <input type="text" id="first_name" name="First-Name" placeholder="Enter your first name" />
          </div>
          <div class="last-name" id="input-group">
            <label htmlFor="last-name" className="text">
              Last name
            </label>
            <input type="text" id="last_name" name="Last-Name" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="email-btn">
          <label htmlFor="email" className="email">
              Email
          </label>
          <input type="email" id="email" name="email" placeholder="yourname@email.com" />
        </div>
        <div className="message-btn">
          <label htmlFor="message" className="message">
              Message
          </label>
          <textarea id="message" name="message" placeholder="Send me a message and i will reply you as soon as possible" />
        </div>
        <div class="radio-btn">
          <input type="checkbox" id="radio" />
          <label htmlFor="radio">You agree to providing your data to benedicta160 who may contact you</label>
        </div>
        <button type="submit" className="form-btn">
          Send Message
        </button>
      </form>
    </div>
   );
}
 
export default Contact;