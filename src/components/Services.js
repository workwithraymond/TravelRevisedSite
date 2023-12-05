import Title from "./Title";
import Service from '../components/Service'

const Services = () => {
    return(
        <section className="section services" id="services">
      <Title title='Our' subTitle='Services'/>
     <Service {...Service}/>
    </section>
    )
}

export default Services