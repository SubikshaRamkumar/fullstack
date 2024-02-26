import '../../assets/css/contact.css'
const Contact = () => {
  return (
    <div className='contact_container'>
      <div className="contact_big_box">
        <div className="contact_head">
            Get in Touch
        </div>
        <div className="contact_left">
            <div className="con_small_box">
           <h1>Visit one of our agency location or contact us today</h1>
           <h3>Head office</h3>
           <div className="contact-options">
            
                <li>
                    <i className="fa-regular fa-map"></i>                    
                    <p>25, Sri prasanna Avenue Anaikkadu , Hyderabad </p>
                </li>
                <li>
                    <i className="fa-regular fa-envelope"></i>
                    <p>Cara@gmail.com</p>
                </li>
                <li>
                    <i className="fa-solid fa-phone"></i>
                    <p>Helo@gmail.com</p>
                </li>
                <li>
                    <i className="fa-regular fa-clock"></i>
                    <p>Monday to Saturday : 9:00am to 20pm</p>
                </li>
        
           </div> 
            </div>
        </div>
        <div className="contact_right"></div>
     </div>
    </div>
  )
}

export default Contact
