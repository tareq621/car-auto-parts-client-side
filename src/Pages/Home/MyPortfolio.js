import React from 'react';
import html from '../../images/tech/html-5.png'
import css from '../../images/tech/css.png'
import bootstarp from '../../images/tech/bootstrap.png'
import javascript from '../../images/tech/js.png'
import react from '../../images/tech/physics.png'
import database from '../../images/tech/database.png'
const MyPortfolio = () => {
    const technologies = [
        {
            id: 1,
            name: 'html',
            image: html
        },
        {
            id: 2,
            name: 'css',
            image: css
        },
        {
            id: 3,
            name: 'bootstarp',
            image: bootstarp
        },
        {
            id: 4,
            name: 'javascript',
            image: javascript
        },
        {
            id: 5,
            name: 'react',
            image: react
        },
        {
            id: 5,
            name: 'mongodb',
            image: database
        }
    ]
    return (

        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold my-5'>Md Tareq Hossain</h2>
                <h3 className='text-1xl'><strong>Email:</strong> <span>mirtareq621@gmail.com</span></h3>
                <h3 className='text-1xl'><strong>Phone:</strong> <span>01721782805</span></h3>
            </div>
            <p className='text-2xl text-center mt-5 text-secondary'>Academic Qualification:</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 ml-8 mt-5'>
                <div>
                    <p className='font-bold'>Diploma in Computer Engineering
                    </p>
                    <p>Institute: Barishal Ideal Polytechnic Institute, Barishal.
                    </p>
                    <p>Department: Computer</p>
                    <p>Board: Board: Bangladesh Technical Education Board.
                    </p>
                    <p>Passing Year: 2019</p>
                    <p>Result: 3.08</p>
                </div>
                <div>
                    <p className='font-bold'>Secondary Certificate (H.S.C)</p>
                    <p>Institute: Jhalakathi Govt. College, Jhalakathi.</p>
                    <p>Board: Barishal</p>
                    <p>Subject: Humanities</p>
                    <p>Passing Year: 2015</p>
                    <p>Result: 2.33</p>
                </div>
                <div>
                    <p className='font-bold'>Secondary Certificate (H.S.C)</p>
                    <p>Institute: Afser Memorial High School.</p>
                    <p>Board: Barishal</p>
                    <p>Subject: Humanities</p>
                    <p>Passing Year: 2013</p>
                    <p>Result: 3.13</p>
                </div>
            </div>
            <h1 className='text-3xl font-semibold my-5 text-center text-secondary'>Technologies</h1>
            <div className='grid grid-cols-3 px-12 my-5 gap-6'>
                {
                    technologies.map(technology =>
                        <div
                            key={technology.id}
                            className="bg-base-100">
                            <img className='w-4/12' src={technology.image} alt="" />
                            <div className="">
                                <h2 className="card-title">{technology.name}</h2>
                            </div>
                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default MyPortfolio;