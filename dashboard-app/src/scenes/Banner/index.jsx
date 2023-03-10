import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons'; 
import headerImg from '../../assets/chalky.png';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Banner = () => {


    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Automate', 'Speed Up', 'Facilitate', 'Streamline'];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => (prevDelta / 2));
        }
        if (!isDeleting && updateText === fullText) {
            setDelta(period);
            setIsDeleting(true);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    }


  return (
    <Box className="banner" display="flex" flexDirection="row" backgroundColor="white">
        <Box m="190px">
                    <span className="tagline">Welcome to RedBirdRoster</span>
                    <h1><span className="background__span">{`Red/Bird/Roster`}</span>{` allows you to`} <span className='wrap'><br/>{text}</span></h1>
                    <p>RedBirdsRoster streamlines task management with a user-friendly design and pleasant interface. Say goodbye to cluttered to-do lists, confusing event planning, and accessible team management and hello to an intuitive platform that prioritizes ease of use and efficiency. Enhance your team's productivity and get more done in less time with our innovative solution.</p>
                    <Link to="/login">Start here<ArrowRightCircle size={25}/></Link>
                </Box>
                <Box className="banner">
                <img src={headerImg} alt='Header Img'/>
                </Box>
            

    </Box>  )
}

export default Banner