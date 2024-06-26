import { siteText } from "@/constants";

export default function Site() {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">Site coding <em>나의 작업물</em></h2>
        <div className="site__wrap">
          {siteText.map((text, index) => (
            <article key={index} className="site__item">
              <span className="num">{index + 1}.</span>
              <div className="text">
                {text.text.map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
              </div>
              <h3 className="title">{text.title}</h3>
              <div className="btn">
                <a href={text.code}>code</a>
                <a href={text.view}>view</a>
              </div>
              <div className="info">
                {text.info.map((infoItem, infoIndex) => (
                  <span key={infoIndex}>{infoItem}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
