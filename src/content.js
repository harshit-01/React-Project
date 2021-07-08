import {Media} from "reactstrap"
import { Table } from 'reactstrap';
import React, {useEffect} from "react";
import ads from "./ads.jpeg"
import Bit  from "./Bit.jpeg"
import Giotus from "./Giotus.jpeg"
import WazirX from "./Wazirx.jpeg"
import Coin from "./CoinDCX.jpeg"
import Colodax from "./Colodax.jpeg"
import ZebPay from "./Zebpay.jpeg"

const Content = ({isDarkMode})=>{
     return (<div style={{marginTop:"55px"}}>
         <div className="row">
            <div className="text-center col-2">
                 <div style={{color:"#52B2BF",fontSize:"2.4em"}}>0.65 %</div>
                 <div>5 Mins</div>
            </div>
            <div className="text-center col-2" >
                <div style={{color:"#52B2BF",fontSize:"2.4em"}}>1.7 %</div>
                <div>1 Hour</div>
            </div>
            <div className="text-center col-4" style={{marginTop:"-45px"}}>
                <div style={{fontSize:"1.5em"}}>Best Price to Trade</div>
                <div id ="fontChange"style={{color:"#fff",fontSize:"3.5em"}}>₹ 26,50,568</div>
                <div>Average BTC/INR net price including commission</div>
            </div>
            <div className="text-center col-2">
                <div style={{color:"#52B2BF",fontSize:"2.4em"}}>4.4 %</div>
                <div>1 Day</div>
            </div>
            <div className="text-center col-2">
                <div style={{color:"#52B2BF",fontSize:"2.4em"}}>9.56 %</div>
                <div>7 Days</div>
            </div>
         </div>
         <div className="row">
         <Media>
            <Media left object src={ads} className="center" style={{paddingTop:"20px",paddingLeft:"20px",width:"90%"}}alt="learn Crypto" />
        </Media>
         </div>
         <div  className="row" style={{padding:"15px"}}>
            <Table id="tab" responsive borderless>
            <thead>
                <tr>
                <th>#</th>
                <th>Platform</th>
                <th>LastTraded Price</th>
                <th>Buy/Sell Price</th>
                <th>Difference</th>
                <th>Savings</th>
                </tr>
            </thead>
            <tbody>
                <tr striped>
                <th scope="row">1</th>
              
                <td><img src={WazirX}></img>Wazir X</td>
                <td>₹ 25,74,231</td>
                <td>₹ 25,71,620 / ₹ 25,74,231</td>
                <td style={{color:"red"}}>-0.09 %</td>
                <td style={{color:"red"}}>▼ ₹ 2,312</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td><img src={Bit}></img> Bitbns</td>
                <td>₹ 25,76,668</td>
                <td>₹ 25,70,160 / ₹ 25,75,124</td>
                <td style={{color:"#49a3af"}}>0.00 %</td>
                <td style={{color:"#49a3af"}}>▲ ₹ 124</td>
                </tr>
                <tr >
                <th scope="row">3</th>
                <td><img src={Giotus}></img> Giotus</td>
                <td>₹ 25,80,000</td>
                <td>₹ 25,90,000 / ₹ 26,39,989</td>
                <td style={{color:"#49a3af"}}>0.13 %</td>
                <td style={{color:"#49a3af"}}>▲ ₹ 3,456</td>
                </tr>
                <tr >
                <th scope="row">4</th>
                <td><img src={Colodax}></img> Colodax</td>
                <td>₹ 25,83,138</td>
                <td>₹ 25,75,167 / ₹ 26,08,984</td>
                <td style={{color:"#49a3af"}}>0.26 %</td>
                <td style={{color:"#49a3af"}}>▲ ₹ 6,594</td>
                </tr>
                <tr >
                <th scope="row">5</th>
                <td><img src={ZebPay}></img> ZebPay</td>
                <td>₹ 25,79,900</td>
                <td>₹ 25,79,900 / ₹ 25,71,001</td>
                <td style={{color:"#49a3af"}}>0.13 %</td>
                <td style={{color:"#49a3af"}}>▲ ₹ 3,356</td>
                </tr>
                <tr >
                <th scope="row">6</th>

                <td><img src={Coin}></img> CoinDCX</td>
                <td>₹ 25,65,323</td>
                <td>₹ 25,65,323 / ₹ 25,71,839</td>
                <td style={{color:"red"}}>0.44 %</td>
                <td style={{color:"red"}}>▼ ₹ 11,219</td>
                </tr>
            </tbody>
            </Table>
         </div>
        <Media>
            <Media left object src="https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png" className="center" style={{paddingTop:"20px",paddingLeft:"10px",paddingBottom:"14px",width:"90%"}}alt="learn Crypto" />
        </Media>
     </div>
     )
}
export default Content;