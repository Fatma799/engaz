import React from 'react';
import './Partners.css'; // استيراد ملف CSS اختياري لـ Partners
import logoEngaz from '../.././assets/partners/logo.svg'; // استيراد شعار إنجاز (تأكد من المسار الصحيح)

function Partners() {
  return (
    <div className="partners-section">
      <h2>شركاء نجاحنا</h2>
      <div className="partners-logos">
        <img src={logoEngaz} alt="شعار إنجاز" />
        <img src={logoEngaz} alt="شعار إنجاز" />
        <img src={logoEngaz} alt="شعار إنجاز" />
        <img src={logoEngaz} alt="شعار إنجاز" />
        <img src={logoEngaz} alt="شعار إنجاز" />
        <img src={logoEngaz} alt="شعار إنجاز" />
        {/* يمكنك تكرار أو إضافة المزيد من الشعارات هنا */}
      </div>
    </div>
  );
}

export default Partners;