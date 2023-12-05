import Title from "./Title"
import Tour from "./Tour"


const Tours = () => {
return (
    <section className="section" id="tours">
      <Title title='Featured' subTitle='Tours'/>

      <Tour {...Tours}/>

      
    </section>
)
}

export default Tours