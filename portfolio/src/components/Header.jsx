import React from 'react';
import myImage from '../assets/foto.jpeg'
import { SvgGithub, SvgLinkedin, SvgMail, SvgCv, SvgDirection } from './icons/icons.jsx';
import { Link } from './utils/Link.jsx';

function Header() {


    return (
    <>
    <header className='pt-header'>
            <section className='pt-header-container'>
                    <figure className='pt-header-figure'>
                        <img className='pt-header-imagenDev' src={myImage} alt="Foto de Kevin Rojas, programador FullStack"/>
                    </figure>
                    <div className='pt-header-containerInfo'>
                        <h1 className='pt-header-nameDev'>Kevin Rojas</h1>
                        <p className='pt-header-description'>Programador FullStack</p>
                                    <p className='pt-header-direction'>
                                    <SvgDirection/>
                                    Collado Villalba, Madrid</p>
                                    
                        <nav className='pt-header-containerUl'>
                            <ul className='pt-header-containerLinks'>
                                <li>
                                    <Link text="Kevinrojaszhuma@icloud.com" link="mailto:Kevinrojaszhuma@icloud.com"Icon={SvgMail} />
                                </li>
                                <li>
                                    
                                    <Link  link="https://github.com/KevinRojasZh" Icon={SvgGithub} />
                                </li>
                                <li>
                                    <Link  link="https://www.linkedin.com/in/kevin-rojas-zhuma-4b92b02ab/" Icon={SvgLinkedin}/>
                                </li>
                                <li>
                                    <Link text="CV" link="#" Icon={SvgCv}/>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </section>
        </header>
    </>
    )
}

export default Header;
