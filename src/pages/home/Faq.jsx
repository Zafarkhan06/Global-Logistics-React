import React, { useState } from 'react';

const faqs = [
  {
    question: 'Where does PGL Dispatch find freight?',
    answer: 'Through loadboards, brokers, shippers, and connections developed through our professional networks over time.',
  },
  {
    question: 'Can I use your service for a week or two?',
    answer: "Yes, we can assist you whether it's for a single load or for as long as you like. With no contracts, you can continue using our dedicated dispatch services as long as you need.",
  },
  {
    question: 'Will PGL Dispatch negotiate freight for me?',
    answer: 'Yes, our experienced team will secure the best loads at maximum rates. The more money you make, the more we make.',
  },
  {
    question: 'How do I sign up for this service?',
    answer: "To sign up, simply give us a call at the number listed on our website or send us an email. Our dedicated onboarding specialist will guide you through the process. We'll provide you with a simple setup packet to fill out with your company information and attach the required documents. Let's get started!",
  },
  {
    question: 'What are the required documents to get started?',
    answer: `To get started, you'll need to provide the following documents:
      - Certificate of MC Authority
      - Certificate of Insurance
      - W-9 Form
      - Notice of Assignment from factoring or voided check if you prefer quickpay or standard payment directly from the broker.
      Once we have these documents, we can swiftly proceed with setting up with our expert dispatchers to start getting you the best loads.`,
  },
  {
    question: 'How much do you charge?',
    answer: `At PGL Dispatch, we believe in fair and transparent pricing. While other companies typically charge between 8% to 10% per load, we charge even less – the minimum possible without compromising service quality.
      We're committed to supporting hardworking owner-operators and carriers by providing a dispatch service at a reasonable rate. We work with box trucks at 7% and with semi-trucks at 6%. If you have two or more trucks, we provide a flat fee of just 5% per load.
      Partner with PGL Dispatch and keep more of your hard-earned money in your pocket!`,
  },
  {
    question: 'Do you cover all 48 states?',
    answer: 'Yes. We can find you the best freight available all over the 48 states!',
  },
  {
    question: 'Can I reject a load you offered me?',
    answer: `Absolutely! You're the Boss! At PGL Dispatch, we understand that you're in charge of your business. You have the freedom to decide which loads to accept or reject, ensuring that every decision aligns with your preferences and priorities.`,
  },
  {
    question: 'Do you offer fuel advances?',
    answer: "No, we don't directly offer fuel advances. However, we can facilitate the process by requesting fuel advances from the broker, shipper, or your factoring company on your behalf.",
  },
  {
    question: 'Do you work with new carriers?',
    answer: 'Yes, we specialize in supporting new carriers looking to grow their business. With our expertise and experience working with new carriers and growing their business, we understand the unique challenges new carriers face in the market and assist them every step of the way!',
  },
  {
    question: 'How quickly can I expect my trucks to be dispatched once I sign up with PGL Dispatch?',
    answer: "Upon signing up with PGL Dispatch, we're ready to start making you money as soon as possible. Once you've completed our setup packet and agreement, our dedicated dispatch team springs into action. We'll promptly reach out to you to discuss your preferences and gather essential details about your trucks and drivers, ensuring a seamless and efficient start to our partnership.",
  },
  {
    question: 'What kind of support does PGL Dispatch provide in case of emergencies or late at night?',
    answer: 'Rest assured, our dispatch team is active and available 24/7 to provide support whenever you need it. Whether it’s a late-night emergency or an unforeseen issue, we’re here to assist you every step of the way.',
  },
  {
    question: 'Do you run credit checks on brokers?',
    answer: 'Yes, we take the utmost care in selecting the brokers we work with. Before booking loads, we conduct thorough background checks and credit assessments to ensure they are reputable and reliable. Additionally, we verify that they work with your factoring company, if applicable. Our extensive network allows us to identify any shady brokers, and we maintain a blacklist to ensure our clients never face any issues. Rest assured, we only work with trusted brokers to secure the best opportunities for you.',
  },
];

const FAQ = () => {
  const [openTab, setOpenTab] = useState(null);

  const handleClick = (index) => {
    setOpenTab(openTab === index ? null : index);
  };

  const handleToggle = (index) => {
    return openTab === index
      ? { maxHeight: '100vh', padding: '1rem' }
      : { maxHeight: '0', padding: '0' };
  };

  const handleRotate = (index) => {
    return openTab === index ? 'rotate-180' : '';
  };

  return (
    <div className="flex justify-center items-start my-4">
      <div className="w-full my-1">
        
        <ul className="flex flex-col">
          {faqs.map((faq, index) => (
            <li key={index} className="bg-[#e8e6e6] my-2 shadow-md px-3 py-2 shadow-red-200">
              <h2
                onClick={() => handleClick(index)}
                className="flex flex-row justify-between text-black font-Monts items-center font-semibold p-3 cursor-pointer"
              >
                <span>{faq.question}</span>
                <div>
                <svg
                  className={`fill-current text-[#cc3333] h-8 w-8 transform transition-transform  ease-in-out duration-200 ${handleRotate(index)}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
                </div>
              </h2>
              <div
                style={handleToggle(index)}
                className="border-l-2 border-[#cc3333] overflow-hidden ease-in-out duration-200 transition-all"
              >
                <p className="p-3 font-Raleway text-gray-900">
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
