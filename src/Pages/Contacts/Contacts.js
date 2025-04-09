import React, { useState } from 'react'; 
import './Contacts.css';
import ReactCountryFlag from "react-country-flag";
import Select from 'react-select';

import contactImage from '../../assets/contacts/Group 1000007106.svg'; 
import location from '../../assets/contacts/location.svg'; 
import phone from '../../assets/contacts/smart-phone.svg'; 

import facebookIcon from '../../assets/contacts/facebook-01.svg';
import twitterIcon from '../../assets/contacts/new-twitter-rectangle.svg';
import snapchatIcon from '../../assets/contacts/snapchat.svg';
import youtubeIcon from '../../assets/contacts/youtube.svg';
import instagramIcon from '../../assets/contacts/instagram.svg';



function Contacts() {

    const [countryCode, setCountryCode] = useState('+966'); 


    
    const countries = [
        { code: "+966", iso: "sa", name: "المملكة العربية السعودية" },
        { code: "+20", iso: "eg", name: "مصر" },
        { code: "+971", iso: "ae", name: "الإمارات العربية المتحدة" },
        { code: "+1", iso: "us", name: "الولايات المتحدة" },
        { code: "+44", iso: "gb", name: "المملكة المتحدة" },
        { code: "+33", iso: "fr", name: "فرنسا" },
        { code: "+49", iso: "de", name: "ألمانيا" },
        { code: "+81", iso: "jp", name: "اليابان" },
        { code: "+86", iso: "cn", name: "الصين" },
        { code: "+91", iso: "in", name: "الهند" },
    ];
    const options = countries.map(country => ({
        value: country.code,
        label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ReactCountryFlag countryCode={country.iso} svg style={{ marginRight: "8px" }} />
                {country.code}
            </div>
        ),
    }));
    const handleCountryCodeChange = (selectedOption) => {
        setCountryCode(selectedOption.value);
    };



  return (
    <div className="contact-container">

      <section className="contact-form-section">

        <div className="contact-form">
            <section className="contact-header">
                <h2>تواصل معنا</h2>
                <p>نسعد دوماً بتواصلك معنا</p>
            </section> 
          <div className="form-group">
            <label htmlFor="name">الاسم</label>
            <input type="text" id="name" name="name" placeholder="ادخل اسم المستخدم" />
          </div>




          <div className="form-group">
                        <label htmlFor="mobile">رقم الجوال</label>
                        <div className="mobile-input-group">
                            <input type="tel" id="mobile" name="mobile" placeholder="ادخل رقم الجوال الخاص بك" />
                            <Select
                                options={options}
                                value={options.find(option => option.value === countryCode)}
                                onChange={handleCountryCodeChange}
                                placeholder="اختر رمز الدولة"
                                classNamePrefix="react-select"
                            />
                        </div>
                    </div>
          <div className="form-group">
            <label htmlFor="message">رسالتك</label>
            <textarea id="message" name="message" rows="5" placeholder="ادخل نص الرسالة هنا"></textarea>
          </div>
          <button type="submit" className="submit-button">ارسال</button>
        </div>

        <div className="contact-image">
          <img src={contactImage} alt="تواصل معنا" />
        </div>
      </section>

      <section className="contact-details">
        <div className="contact-info">         
          <div className="info-item">
            <img src={location} alt='location'/>
            <span>شارع الشهداء حي الزهراء الرياض مبني 12685</span>
          </div>
          <div className="info-item">
            <img src={phone} alt='location'/>
            <span>05 12397597446</span>
          </div>          
        </div>   
      </section>
      <section className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="فيسبوك" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="تويتر" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={snapchatIcon} alt="سناب شات" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="يوتيوب" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="إنستغرام" />
        </a>
      </section>

    </div>
  );
}

export default Contacts;