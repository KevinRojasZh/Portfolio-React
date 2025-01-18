import React from 'react';
import { Link } from './utils/Link.jsx';
import { Image } from './utils/Image.jsx';
import  proyectos  from './data/Proyectos.jsx';


function Main() {
    /*Creamos el componente ProyectCard que lo vamos a 'inicializar mas alante con el array proyectos' */
    /*Importante las llaves para evaluar el metodo .map puede utilizarse sin indice y acceder a los valores atraves de las keys */
    const ProyectCard = ({title,subtitle,description,tecnologias,imageScr,links}) => (
        <article className='pc-article'>
            <div>
                <p><strong>{title}</strong></p>
                <p className='pc-subtitle'>{subtitle}</p>
                <p className='pc-description'>{description}</p>
                <p className='pc-tecnologias'>{tecnologias}</p>
                <nav>
                    {links.map(({href,Icon},index) => (
                    <Link key={index}  link={href} Icon={Icon} />
                ))}
                </nav>
            </div>

                <Image className="pc-image" src={imageScr} alt="Captura de pantalla del proyecto ${title}"/>
        </article>


    );

    /* Pasamos los props a ProyectCard atraves del arrray proyectos por medio de un .map */
    return(
        <>
        <main>
            <h2 className='pt-main-tittles'>Proyectos</h2>
            {proyectos.map((proyecto)=>(
                <ProyectCard {...proyecto}/>
            ))}

            <h2 className='pt-main-tittles'>Sobre mi </h2>
            <div className='pt-main-terminal'>
            <p>Last login: Wed Jan 15 12:01:01 </p>
            <p>(base) kevinrojaszhuma@icloud.com ~ % 
            Soy un programador inquieto con una doble vida, ya que trabajo en una prestigiosa empresa de software pero también he cometido todos los crímenes informáticos que existen. Tengo la sensación de que nada es lo que parece ser.</p>
            </div>
            <h2 className='pt-main-tittles'>Formacion </h2>


        </main>
        
        </>

    )
}

export default Main;