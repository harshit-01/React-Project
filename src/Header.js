import img from './img.png'
import pic from './pic.jpeg'
import { FaPaperPlane} from 'react-icons/fa';
import {Media,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,Button} from 'reactstrap';
import React, {useEffect} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import CircularProgress from '@material-ui/core/CircularProgress';
import CircularProgressWithLabel from './circularProgress';



const Header = (props)=>{
    const [progress, setProgress] = React.useState(60);
    const toggleDropDown = () => props.setChecked(!props.checked);
    const tog = () => props.setOpen(!props.open);
    const modeChange =()=>props.setIsDarkMode(!props.isDarkMode);
    useEffect(() =>{
        if(props.isDarkMode ===true){
            document.body.style.backgroundColor =  "#292d3b";
            document.body.style.color= "#999";
            document.querySelector("#tab").style.color ="floralwhite"
            document.querySelector("#fontChange").style.color = "floralwhite";
        }
        else{
            document.body.style.backgroundColor =  "#fff";
            document.body.style.color= "#333";
            document.querySelector("#tab").style.color = "#333";
            document.querySelector("#fontChange").style.color = "#333";
        }
        console.log(props.isDarkMode)
    },[props.isDarkMode])
        useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress === 0 ? 60 : prevProgress-1));
        }, 1000);
        
         if(progress ===1){
            window.location.reload();
         }
        return () => {
          clearInterval(timer);
        };
      }, [progress]);
      window.onbeforeunload = function() {
        localStorage.setItem("props.isDarkMode",props.isDarkMode);
      }
      window.onload = function() {
        props.setIsDarkMode(localStorage.getItem("props.isDarkMode"));
        modeChange();
    }
    return (
    <div className="container" fullWidth style={{padding: "20px 30px 0px"}}>
        <div className="row">
            <div className="text-center-sm col-12 col-md-5 col-lg-4">
            <Media>
            {props.isDarkMode===false?<Media left object src={img} style={{padding: "10px",width:"90%"}} alt="HODLINFO" />:<Media left object src={pic} style={{padding: "10px",width:"90%"}} alt="HODLINFO" />}
              <Media body>
              <Media heading>
              <p className="col-12 ">Powered By <a className="footer-text-link" href="https://www.finstreet.in/" style={{color: "rgb(61, 198, 193)"}}> Finstreet</a> </p>
              </Media>
              </Media>
            </Media>
            </div>
            <div class="text-center-sm col-12 col-md-3 col-lg-4 dropdown">
                <ButtonDropdown isOpen={props.open} toggle={tog} className="button">
                <DropdownToggle caret color="secondary">
                    INR
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>INR</DropdownItem>
                </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown isOpen={props.checked} toggle={toggleDropDown}>
                <DropdownToggle caret color="secondary">
                    BTC
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>BTC</DropdownItem>
                    <DropdownItem header>ETH</DropdownItem>
                    <DropdownItem header>USDT</DropdownItem>
                    <DropdownItem header>XRP</DropdownItem>
                    <DropdownItem header>TRX</DropdownItem>
                    <DropdownItem header>DASH</DropdownItem>
                    <DropdownItem header>ZEC</DropdownItem>
                    <DropdownItem header>XEM</DropdownItem>
                    <DropdownItem header>IOST</DropdownItem>
                    <DropdownItem header>WIN</DropdownItem>
                    <DropdownItem header>BTT</DropdownItem>
                    <DropdownItem header>WRX</DropdownItem>
                </DropdownMenu>
                </ButtonDropdown>
                <Button className="button" color="secondary">
                      Buy BTC
                </Button>
                
            </div>
            <div class="col-12 col-md-4 col-lg-4">
            <CircularProgressWithLabel variant="determinate" value={progress+40}></CircularProgressWithLabel>
            <a href="https://hodlinfo.com/connect/telegram">
            <Button color="info" size="lg" style={{color:"floralwhite",marginLeft:'4px'}} ><FaPaperPlane />  Connect Telegram</Button></a>{'  '}
            <DarkModeToggle id="mode" onChange={modeChange} checked={props.isDarkMode} size={80}style={{margin:"15px"}}> 
            </DarkModeToggle>
            </div>
        </div>
    </div>
    )
}
export default Header;
