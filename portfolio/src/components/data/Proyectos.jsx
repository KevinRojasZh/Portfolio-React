import imageProyecto1 from '../../assets/proyecto1.png'
import imageProyecto2 from '../../assets/proyecto2.png'
import imageProyecto3 from '../../assets/proyecto3.png'

import { SvgGithub,SvgEnlace } from '../icons/icons';


/*Creamos un array de objetos con los proyectos que tenemos. Las keys son los props que luego Preoyetcard va a necesitar para renderizarse */
    const proyectos = [
        {
            title:'MyGram',
            subtitle:'Construyendo una red social desde cero',
            description:'Proyecto full stack que replica las funcionalidades clave de Instagram, incluyendo registro de usuarios, carga de imágenes y feed interactivo. Desarrollado con un backend robusto en Django y un frontend dinámico en React, destacando el manejo de datos y la experiencia de usuario.',
            tecnologias:'Python JavaScrip',
            imageScr: imageProyecto1,
            links: [
                {
                    href:'https://www.youtube.com/@kenanrojass',
                    Icon: SvgEnlace,
                },
                {
                    href:'https://github.com/KevinRojasZh',
                    Icon: SvgGithub,
                },
                
            ]
        },
        {
            title:'LinkShort',
            subtitle:'Construyendo un LinkShort ',
            description:'LinkShort es un componente de React que muestra enlaces acortados de forma sencilla. Acepta una URL y la presenta con un texto opcional o un ícono. Ideal para integrar con acortadores de URL, se puede personalizar con clases para adaptarse al diseño de tu aplicación.',
            tecnologias:'React, Django',
            imageScr: imageProyecto2,
            links: [
                {
                    href:'https://www.youtube.com/@kenanrojass',
                    Icon: SvgEnlace,
                },
                {
                    href:'https://github.com/KevinRojasZh',
                    Icon: SvgGithub,
                },
                
            ]
        },
        {
            title:'MyGram',
            subtitle:'Construyendo una red social desde cero',
            description:'Proyecto full stack que replica las funcionalidades clave de Instagram, incluyendo registro de usuarios, carga de imágenes y feed interactivo. Desarrollado con un backend robusto en Django y un frontend dinámico en React, destacando el manejo de datos y la experiencia de usuario.',
            tecnologias:'Python JavaScrip',
            imageScr: imageProyecto3,
            links: [
                {
                    href:'https://www.youtube.com/@kenanrojass',
                    Icon: SvgEnlace,
                },
                {
                    href:'https://github.com/KevinRojasZh',
                    Icon: SvgGithub,
                },
                
            ]
        },
    ]

    export default proyectos;