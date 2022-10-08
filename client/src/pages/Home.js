import React from "react"
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom';
export default function Home() {

    return (
        <div className='md:mx-28 mx-4 text-white pb-12'>

            <div className='md:grid md:grid-cols-2 items-center pt-10'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Correct evaluation of different degrees of burn is a bit challenging in the visual assessment method. Therefore to combat this issue, we came up with an idea for creating a web application where you just need to upload a picture of the area with burnt skin and get the information about the degree of burn.</p>

                    <Link to="/skinBurn">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Skin Burn Classifier</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="350" height="350" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={FeatImg} alt="img" width="300" height="300" />
                </div>
                <div className=''>
                    <h1 className='text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>Burn Out is a web app where you can:
                    </p>
                    <ul className="text-xl">
                        <li className="list-disc">Upload a picture of the area with burnt skin and get the information about the degree of burn.</li>
                        <li className="list-disc">Get the information about first aid for burn.</li>
                        <li className="list-disc">Get the location of the nearest hospitals.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
