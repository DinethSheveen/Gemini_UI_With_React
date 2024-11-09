import React from 'react'
import './Main.css';
import {assets} from '../../../assets/assets';

const Main = () => {
  return (
        <div className="main">
            <div className="nav">
                <p>GEMINI</p>
                <img src={assets.user_icon} alt=""/>
            </div>

            <div className="mainContainer">
                {/*Greeting message */}
                <div className="greeting">
                    <p><span>Hello, Information Seeker!</span></p>
                    <p>How can I help you today?</p>
                </div>

                {/*Default prompt message cards*/}
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to visit during a trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Improve the readbabilty of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Brielfy summarize the this concept on urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                </div>

                {/*BottomSection*/}
            <div className="mainBottom">
                <div className="searchBox">
                    <input type="text" placeholder='Enter your prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottomInfo">
                    Gemini may display innacurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main