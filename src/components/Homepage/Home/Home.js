import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Destinations from "../Destinations/Destinations";
import Experience from "../Experience/Experience";
import SpecialPlace from "../SpecialPlace/SpecialPlace";
import TypeWriter from "../TypeWriter/TypeWriter";
import "./Home.css";

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="text-center spinier-style">
                <Spinner animation="grow" variant="success" />
            </div>
        );
    }
    return (
        <>
            <TypeWriter></TypeWriter>
            <SpecialPlace></SpecialPlace>
            <Banner></Banner>
            <Destinations></Destinations>
            <Experience></Experience>
        </>
    );
};

export default Home;
