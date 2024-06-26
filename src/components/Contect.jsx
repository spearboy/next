import { contactText } from "@/constants";

export default function Contect() {
  return (
    
  <section id="contact">
  <div className="contact__inner">
    <h2 className="contact__title">Contact</h2>
    <div className="contact__lines" aria-hidden="true">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
    <div className="contact__text">
      <div className="text">
        <div>
          <a href={contactText[0].link} target="_blank">{ contactText[0].title }</a>
        </div>
        <div>
          <a href={contactText[1].link} target="_blank">{ contactText[1].title }</a>
        </div>
      </div>
    </div>
    <div className="contact__lines bottom" aria-hidden="true">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  </div>
</section>
  )
}
