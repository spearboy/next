import { skillText } from "@/constants/index"
export default function Skill() {
  return (
    
  <section id="skill">
  <div className="skill__inner">
    <div className="skill__title">
      <h2>Challenge <em>나의 도전</em></h2>
    </div>
    <div className="skill__desc">
      {skillText.map((skill,index,key) => (
        <div key={key}>
          <span>{ index + 1 }.</span>

          <h3>{skill.title }</h3>
          <p>{skill.description }</p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
