import { useState } from "react";
import "./style.css";

const faqs = [
  {
    header:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat,eget scelerisque enim rutrum aliquet.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat,eget scelerisque enim rutrum aliquet. Mauris lobortis",
  },
  {
    header:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat,eget scelerisque enim rutrum aliquet.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat,eget scelerisque enim rutrum aliquet. Mauris lobortis",
  },
  {
    header:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat,eget scelerisque enim rutrum aliquet.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat,eget scelerisque enim rutrum aliquet. Mauris lobortis",
  },
];

const FaqItem = ({ header, content, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="faq-number">0{id}</span>
        <h3 className="faq-header-text">{header}</h3>
        <div
          className={isOpen ? "isOpen faq-header-icon" : "faq-header-icon"}
        />
      </div>
      <div className={isOpen ? "faq-content" : "faq-content hidden"}>
        <p className="faq-content-text">{content}</p>
      </div>
    </div>
  );
};

export const Faqs = () => {
  return (
    <div className="faq_container">
      <h2>faq</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
        magna erat, eget scelerisque enim rutrum aliquet.
      </p>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FaqItem key={i} {...faq} id={i + 1} />
        ))}
      </div>
    </div>
  );
};
