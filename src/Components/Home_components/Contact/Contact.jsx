import React from "react";
import styles from "./Contact.module.css"; // Import modular CSS

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContent}>
        <p className={styles.sectionSubtitle}>Contact</p>
        <h2 className={`${styles.h3} ${styles.sectionTitle}`}>
          Have You Any Project? Please Drop a Message
        </h2>
        <p className={styles.sectionText}>
          Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.
        </p>

        <ul className={styles.contactList}>
          {/* Address */}
          <li className={styles.contactListItem}>
            <div className={styles.contactItemIcon}>
            <i class="fa-solid fa-location-crosshairs"></i>
            </div>
            <div className={styles.wrapper}>
              <h3 className={styles.contactItemTitle}>Address:</h3>
              <address className={styles.contactInfo}>
                941 Saqrqorish Road, alandalos, grnata, wa 47122-4194
              </address>
            </div>
          </li>

          {/* Phone */}
          <li className={styles.contactListItem}>
            <div className={styles.contactItemIcon}>
            <i class="fa-solid fa-phone"></i>
            </div>
            <div className={styles.wrapper}>
              <h3 className={styles.contactItemTitle}>Phone:</h3>
              <a href="tel:01234567789" className={styles.contactInfo}>
                (01) 234 567 789
              </a>
              <a href="tel:09765432200" className={styles.contactInfo}>
                (09) 765 432 200
              </a>
            </div>
          </li>

          {/* Email */}
          <li className={styles.contactListItem}>
            <div className={styles.contactItemIcon}>
            <i class="fa-solid fa-envelope"></i>
            </div>
            <div className={styles.wrapper}>
              <h3 className={styles.contactItemTitle}>Email:</h3>
              <a href="mailto:info@jack.com" className={styles.contactInfo}>
                info@jack.com
              </a>
              <a href="mailto:support@jack.com" className={styles.contactInfo}>
                support@jack.com
              </a>
            </div>
          </li>
        </ul>

        {/* Social Links */}
        <ul className={styles.contactSocialList1}>
          <span>
          <i class="fa-brands fa-linkedin"></i>  
            </span>
            <span><i class="fa-brands fa-facebook"></i></span>
            <span><i class="fa-brands fa-twitter"></i></span>
            <span><i class="fa-brands fa-github"></i></span>

        </ul>
      </div>

      {/* Contact Form */}
      <form action="" className={styles.contactForm}>
        {[
          { id: "name", type: "text", label: "Name", placeholder: "e.g John Doe", icon: "person-circle" },
          { id: "email", type: "email", label: "Email", placeholder: "e.g johndoe@mail.com", icon: "mail" },
          { id: "phone", type: "tel", label: "Phone", placeholder: "Phone Number", icon: "call" },
          { id: "message", type: "textarea", label: "Message", placeholder: "Write message...", icon: "chatbubbles" },
        ].map(({ id, type, label, placeholder, icon }) => (
          <div className={styles.formWrapper} key={id}>
            <label htmlFor={id} className={styles.formLabel}>
              {label}
            </label>
            <div className={styles.inputWrapper}>
              {type === "textarea" ? (
                <textarea
                  name={id}
                  id={id}
                  required
                  placeholder={placeholder}
                  className={styles.inputField}
                ></textarea>
              ) : (
                <input
                   type={type}
                  name={id}
                  id={id}
                  required
                  placeholder={placeholder}
                  className={styles.inputField}
                
                />
              )}

            </div>
          </div>
        ))}
        <button type="submit" className={`${styles.btn} ${styles.btnPrimary} ${styles.effect}`}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
