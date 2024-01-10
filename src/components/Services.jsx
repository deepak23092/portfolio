import { React, useState } from 'react';
import '../App.css';

const Services = () => {

    const [showModalFrontend, setShowModalFrontend] = useState(false);
    const [showModalBackend, setShowModalBackend] = useState(false);
    const [showModalUIUX, setShowModalUIUX] = useState(false);

    const handleModalToggleFrontend = () => {
        setShowModalFrontend(!showModalFrontend);
    };

    const handleModalToggleBackend = () => {
        setShowModalBackend(!showModalBackend);
    };

    const handleModalToggleUIUX = () => {
        setShowModalUIUX(!showModalUIUX);
    };

    const handleCloseModal = () => {
        setShowModalFrontend(false);
        setShowModalBackend(false);
        setShowModalUIUX(false);
    };

    return (

        <section id='services' className='mt-32 flex flex-col justify-center items-center text-white md:scroll-mt-[120px] scroll-mt-24'>
            <div className='text-center font-poppins mb-4'>
                <h1 className='md:text-4xl font-medium'>Services</h1>
                <p className='text-slate-300 md:text-lg text-sm -mt-2'>What I offer</p>
            </div>

            <div className='flex md:flex-row md:gap-8 gap-6 flex-wrap md:m-0 ml-4'>

                <div className='bg-indigo-900 font-poppins flex flex-col justify-end md:h-72 h-60 md:w-64 w-40 rounded-3xl md:pl-10 pl-6 pb-2'>

                    <i className="fab fa-react md:text-3xl text-2xl"></i>
                    <h4 className='w-40 mt-4 md:leading-8 leading-6 md:text-2xl text-lg'>Frontend Developer</h4>

                    <div className='md:mt-3 mt-2 md:mb-4 hover-move-right w-32 p-2 cursor-pointer rounded-xl -ml-2' onClick={handleModalToggleFrontend}>
                        <span className='text-slate-300 md:text-base text-sm'>View More <i className="fa-solid fa-arrow-right text-xs ml-1"></i></span>
                    </div>

                    {showModalFrontend && (
                        <div
                            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                            onClick={handleCloseModal}
                        >
                            <div className="bg-indigo-900 text-white rounded-2xl p-4 flex flex-col text-center justify-center md:w-[28rem] w-[22rem]">
                                <h5 className='mt-10 md:text-xl text-base'>Frontend Developer</h5>
                                <p className='md:w-96 w-72 md:text-sm text-xs mt-3 ml-2 text-slate-300'>With over 3 years of expertise, I specialize in crafting interactive and engaging user interfaces that elevate web experiences. My services encompass:</p>
                                <div className='md:text-sm text-xs flex flex-col gap-3 mt-3 ml-2 text-slate-300 mb-4'>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Development of intuitive user interfaces</span></span>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Creation of dynamic and responsive web pages</span></span>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Crafting seamless interactions with UX elements</span></span>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Strategic brand positioning through design</span></span>

                                </div>
                            </div>
                        </div>
                    )}

                </div>

                <div className='bg-indigo-900 font-poppins flex flex-col justify-end md:h-72 h-60 md:w-64 w-40 rounded-3xl md:pl-10 pl-6 pb-2'>

                    <i className="fa-brands fa-node-js md:text-3xl text-2xl"></i>
                    <h4 className='w-40 mt-4 md:leading-8 leading-6 md:text-2xl text-lg'>Backend Developer</h4>
                    <div className='md:mt-3 mt-2 md:mb-4 hover-move-right w-32 p-2 cursor-pointer rounded-xl -ml-2' onClick={handleModalToggleBackend}>
                        <span className='text-slate-300 md:text-base text-sm'>View More <i className="fa-solid fa-arrow-right text-xs ml-1"></i></span>
                    </div>

                    {showModalBackend && (
                        <div
                            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                            onClick={handleCloseModal}
                        >
                            <div className="bg-indigo-900 text-white rounded-2xl p-4 flex flex-col text-center justify-center md:w-[28rem] w-[22rem]">
                                <h5 className='mt-10 md:text-xl text-base'>Backend Developer</h5>
                                <p className='md:w-96 w-72 md:text-sm text-xs mt-3 ml-2 text-slate-300'>With over 3 years of expertise, I specialize in crafting interactive and engaging user interfaces that elevate web experiences. My services encompass:</p>
                                <div className='md:text-sm text-xs flex flex-col gap-3 mt-3 ml-2 text-slate-300 mb-4'>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Development of intuitive user interfaces</span></span>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Creation of dynamic and responsive web pages</span></span>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Crafting seamless interactions with UX elements</span></span>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Strategic brand positioning through design</span></span>

                                </div>
                            </div>
                        </div>
                    )}

                </div>

                <div className='bg-indigo-900 font-poppins flex flex-col justify-end md:h-72 h-60 md:w-64 w-40 rounded-3xl md:pl-10 pl-6 pb-2'>

                    <i className="fa-solid fa-code md:text-2xl text-xl"></i>
                    <h4 className='w-32 mt-4 md:leading-8 leading-6 md:text-2xl text-lg'>UI/UX Designer</h4>
                    <div className='md:mt-3 mt-2 md:mb-4 hover-move-right w-32 p-2 cursor-pointer rounded-xl -ml-2' onClick={handleModalToggleUIUX}>
                        <span className='text-slate-300 md:text-base text-sm'>View More <i className="fa-solid fa-arrow-right text-xs ml-1"></i></span>
                    </div>

                    {showModalUIUX && (
                        <div
                            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                            onClick={handleCloseModal}
                        >
                            <div className="bg-indigo-900 text-white rounded-2xl p-4 flex flex-col text-center justify-center md:w-[28rem] w-[22rem]">
                                <h5 className='mt-10 md:text-xl text-base'>UI/UX Designer</h5>
                                <p className='md:w-96 w-72 md:text-sm text-xs mt-3 ml-2 text-slate-300'>With over 3 years of expertise, I specialize in crafting interactive and engaging user interfaces that elevate web experiences. My services encompass:</p>
                                <div className='md:text-sm text-xs flex flex-col gap-3 mt-3 ml-2 text-slate-300 mb-4'>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Development of intuitive user interfaces</span></span>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Creation of dynamic and responsive web pages</span></span>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Crafting seamless interactions with UX elements</span></span>
                                    <span className='flex items-center gap-2'><i className="fa-regular fa-circle-check"></i><span>Strategic brand positioning through design</span></span>

                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </section>

    )
}

export default Services;
