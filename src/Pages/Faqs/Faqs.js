import React, { useState } from 'react';
import './Faqs.css'; 

function Faqs() {

    const faqData = [
      {
        id: 1,
        question: 'كيف أطلب خدمة من إنجاز؟',
        answer: 'وريم إيبسوم (Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويستخدم في صناعات المطابع ودور النشر كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص...',
        isOpen: false,
      },
      {
        id: 2,
        question: 'كيف أطلب خدمة من الجارة؟',
        answer: 'إجابة السؤال الثاني ستكون هنا.',
        isOpen: false,
      },
      {
        id: 3,
        question: 'كيف أطلب خدمة من النجارة؟',
        answer: 'إجابة السؤال الثالث ستكون هنا.',
        isOpen: false,
      },
      {
        id: 4,
        question: 'كيف أطلب خدمة من الجازا؟',
        answer: 'إجابة السؤال الرابع ستكون هنا.',
        isOpen: false,
      },
      {
        id: 5,
        question: 'كيف أطلب خدمة من الجار؟',
        answer: 'إجابة السؤال الخامس ستكون هنا.',
        isOpen: false,
      },
    ];
  
    const [faqs, setFaqs] = useState(faqData);
  
    const toggleFAQ = (id) => {
      setFaqs(
        faqs.map((faq) =>
          faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
        )
      );
    };
  
    return (
      <div className="faqs-container">
        <h2>الأسئلة الشائعة</h2>
        {faqs.map((faq) => (
          <div className={`faq-item ${faq.isOpen ? 'open' : ''}`} key={faq.id}>
            <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                <span className="arrow-icon">
                    {faq.isOpen ? <i className="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-left"></i>}
                </span>
                {faq.question}
            </div>
            <div className={`faq-answer ${faq.isOpen ? 'open' : ''}`}>
                {faq.answer}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Faqs;