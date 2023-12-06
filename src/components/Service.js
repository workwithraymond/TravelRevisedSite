import {service} from '../data'


const Service = () => {


    return(
        <div className="section-center services-center">
        {service.map((services) => {
          const {id, icon, title, text} = services
          return(
            <article className="service" key={id}>
          <span className="service-icon"><i className={icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">
             {text}
            </p>
           
          </div>
        </article>
          )
        })}

        
      </div>
    )
}

export default Service