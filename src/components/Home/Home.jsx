import React from "react";
import bannerImg from '../../assets/artwork-4v.png'
import { Link } from "react-router-dom";
import { IoShieldOutline } from "react-icons/io5";
import { MdOutlineShield } from "react-icons/md";
import { ImAccessibility } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import whoImg from "../../assets/who.png"
import { FaCheck } from "react-icons/fa6";
import womenImg from "../../assets/women.png"
import promoImg from "../../assets/promo.png"



function Home() {

    return (
        <>
        <div className="w-full">
        <div className="md:flex md:place-content-between px-2 md:px-20 pt-2 pb-6">
            <div className="w-full">
                {/* <div className="">
                <button className="bg-[#7E2553] px-4 py-2 rounded-md text-white">START UP</button>
                </div> */}
                
                <h2 className="max-w-2xl md:mb-4 md:mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The best marketing Doesn't feel like silly marketing!</h2>
                <p className="pt-5 text-xl mb-7">Zelevation helps you unify your brand identity by collecting, storing and distributing design tokens and assets automatically.
                We're a digital product and UX agency in San Francisco. Strategy, design, and development across all platforms.
                </p>
                <button className="bg-[#7E2553] rounded-md text-white px-8 py-3">Les't talk - Send a message</button>
                <div className="mt-4 md:mt-8  text-2xl text-[#1D2B53]">
                <Link to="tel:+918102836753">
                Hotline. (+91) 810-283-657
                </Link>
                </div>
                
            </div>
            <div className="mr-0">
                <img src={bannerImg} alt="banner" 
                className=""
                />
            </div>
        </div>
        <div className="md:flex md:place-content-between px-2 md:px-20 py-10 border-b-[1px] border-t-[1px]">
            <div className="">
                <div className="md:flex md:place-content-center w-fit m-auto">
                    <div className="bg-[#1D2B53] w-fit m-auto rounded-full">
                    <MdOutlineShield 
                    className="text-white text-6xl"
                    />
                    </div>
                    <div className="md:ml-3">
                        <h2 className="text-4xl font-bold text-center md:text-left">24/7 Support</h2>
                        <p className="">Nunc molestie tellus sapien, quis laoreet orci.</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 md:mt-0">
                <div className="md:flex md:place-content-center w-fit m-auto">
                    <div className="bg-[#7E2553] w-fit m-auto rounded-full">
                    <ImAccessibility 
                    className="text-white text-6xl"
                    />
                    </div>
                    <div className="md:ml-3">
                        <h2 className="text-4xl font-bold text-center md:text-left">Take Ownership</h2>
                        <p>Nunc molestie tellus sapien, quis laoreet orci.</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 md:mt-0">
                <div className="md:flex md:place-content-center w-fit m-auto">
                    <div className="bg-[#FAEF5D] w-fit m-auto rounded-full">
                    <RiTeamFill 
                    className="text-white text-6xl"
                    />
                    </div>
                    <div className="md:ml-3">
                        <h2 className="text-4xl font-bold text-center md:text-left">Team Work</h2>
                        <p>Nunc molestie tellus sapien, quis laoreet orci.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:flex md:justify-between px-2 md:px-20 py-8 m-auto">
            <div className="w-full md:pt-20">
                <h3 className="text-[#0057fc] text-2xl font-bold">WHO WE ARE</h3>
                <h2 className="text-5xl font-extrabold tracking-tight py-4">We specialize in UI/UX, web development, digital marketing.</h2>
                <p className="text-l">It is a long established fact that a reader will be distracted by the readable content</p>
                <div className="flex items-center gap-2 py-4">
                    <div className="bg-[#0057fc] rounded-full">
                    <FaCheck 
                    className="text-white text-3xl"
                    />
                    </div>
                    <div className="text-center">
                        <p className="text-[#555] font-medium text-lg text-center">Vivamus ac elementum urna.</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-[#0057fc] rounded-full">
                    <FaCheck 
                    className="text-white text-3xl"
                    />
                    </div>
                    <div className="text-center">
                        <p className="text-[#555] font-medium text-lg text-center">Vivamus ac elementum urna.</p>
                    </div>
                </div>
                <div className="w-full m-auto pt-8">
                    <button className="bg-[#7E2553] text-white px-10 rounded-md py-2">Get in touch</button>
                </div>
            </div>
            <div className="w-full md:w-[50%]">
                <img src={whoImg} alt="who" 
                className=""
                />
            </div>
        </div>
        <div className={`bg-no-repeat bg-[#ffdd0f] bg-[right_calc(15%)_top_calc(0%)] bg-contain`} 
             style={{ backgroundImage: `url(${womenImg})`}}
        >
            <div className="py-4  px-2 md:px-20">
                <div>
                <h3 className="pt-16">COMPANY’S VISION</h3>
                </div>
                <div className="md:w-[40%]">
                <h2 className="text-4xl font-[600] py-4">The story behind how our company was founded</h2>
                </div>
                <div className="md:w-[40%]">
                <p className="text-[16px] leading-7">Lorem ipsum dolor sit amet consectetur adipiscing elit eque ipsum odio justo amet urna auctor. At congue vulputate augue praesent mauris eu posuere pretium tellus. Viverra volutpat a est quis egestas id risus cursus venenatis.</p>
                </div>
                <div className="py-6">
                    <button className="border border-[#1D2B53] px-7 py-2 rounded-md text-[#1D2B53] hover:bg-[#1D2B53] hover:text-white">Read More About</button>
                </div>
            </div>
        </div>
        <div className="px-2 py-8 md:flex md:justify-evenly md:px-20">
            <div className="lg:w-[60%]">
                <img src={promoImg} alt="" 
                className="lg:h-[580px]"
                />
            </div>
            <div className="md:pt-16">
                <div>
                    <h3 className="text-[#0057fc] text-2xl font-bold">INSIGHT</h3>
                </div>
                <div>
                    <h2 className="text-5xl font-extrabold tracking-tight py-4">Insight that drives change</h2>
                    <p className="text-xl md:w-[70%]">It is a long established fact that a reader will be distracted by the readable content</p>
                </div>
                <div className="flex gap-24 py-6">
                    <div>
                        <p className="text-6xl font-[600]">98<span className="text-[#0057fc]">%</span> </p>
                        <p>Private Office</p>
                    </div>
                    <div>
                        <p className="text-6xl font-[600]">20M<span className="text-[#0057fc]">+</span> </p>
                        <p>Coworking Desks</p>
                    </div>
                </div>
                <div className="flex gap-24">
                    <div>
                        <p className="text-6xl font-[600]">100<span className="text-[#0057fc]">K</span> </p>
                        <p>Meeting Room</p>
                    </div>
                    <div>
                        <p className="text-6xl font-[600]">55<span className="text-[#0057fc]">%</span> </p>
                        <p>Conversion Rate</p>
                    </div>
                </div>
                <div className="py-6">
                    <button className="bg-[#7E2553] text-white px-10 rounded-md py-2">See Our Services</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home