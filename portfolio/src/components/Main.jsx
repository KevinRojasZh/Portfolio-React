import React from 'react';
import { Link } from './utils/link.jsx';
import { SvgGithub,SvgEnlace } from './icons/icons.jsx';
import imageProyecto1 from '../assets/proyecto1.png'





function Main() {
    const Image = ({src,alt,className})=> (
        <figure className='pt-main-figure'>
            <img src={src} alt={alt} className={className}/>
        </figure>

    )
    const ProyectCard = ({title,subtitle,description,tecnologias,SvgEnlace,SvgGithub,nameSubtitle,nameDescription,nameTecnologias}) => (
        <article className='pt-main-article'>
            <div>
                <p><strong>{title}</strong></p>
                <p className={nameSubtitle}>{subtitle}</p>
                <p className={nameDescription}>{description}</p>
                <p className={nameTecnologias}>{tecnologias}</p>
                <nav>
                    <Link  link="https://www.youtube.com/@kenanrojass"Icon={SvgEnlace} />
                    <Link  link="https://github.com/KevinRojasZh"Icon={SvgGithub} />
                </nav>
            </div>

                <Image className="pt-main-image" src={imageProyecto1} alt="Captura de pantalla del proyecto MYGRAM"/>
        </article>


    );


    return(
        <>
        <main>
            <h2 className='pt-main-tittles'>Proyectos</h2>
            <ProyectCard title="MyGram" subtitle="Construyendo una red social desde cero" description="Proyecto full stack que replica las funcionalidades clave de Instagram, incluyendo registro de usuarios, carga de imágenes y feed interactivo. Desarrollado con un backend robusto en Django y un frontend dinámico en React, destacando el manejo de datos y la experiencia de usuario." tecnologias="Python JavaScrip" SvgEnlace={SvgEnlace} SvgGithub={SvgGithub} nameSubtitle='pt-main-subtitle' nameDescription='pt-main-description' nameTecnologias='pt-main-tecnologias'/>
            <h2 className='pt-main-tittles'>Sobre mi </h2>
        </main>
        
        </>

    )
}

export default Main;