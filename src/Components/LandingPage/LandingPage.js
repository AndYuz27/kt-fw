import ReactStars from "react-rating-stars-component";
import React from "react";
import img1 from "../../assets/Chel_s_PC.png"
import Uslugi from "./Uslugi";


export default function LandingPage(){
    const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur unde laboriosam quae ullam doloribus inventore! Eius numquam explicabo blanditiis aspernatur fugit saepe dolorum corrupti, a exercitationem nostrum ea temporibus."
    const h1_txt="Мы поможем настроить интернет в вашем мире Minecraft"
    return(
        <div className="ddd">
            <div className="ttt">
                <div className="title">
                    <h2>{h1_txt}</h2>
                    <p className="dhgfj">{lorem}</p>
                    <div className="btns_hdr">
                    <a href="#" className="lnk3">Get Started</a>
                    <a href="#" className="lnk3">Sample Text</a>
                    </div>
                    

                </div>
                <div className="img_container" style={{backgroundImage:`url(${img1})`}}></div>
            </div>
            <Uslugi/>
        </div>
    )
}