import React from "react";
import Grid from "../images/photo-grid.png";

export default function Hero() {
    return (
        <section className="hero">
            <img src={Grid} alt="grid" className="hero--photo" />
            <h1 className="hero--heading">Online Experiences</h1>
            <p className="hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}