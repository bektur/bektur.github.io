import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import facebookIcon from '../icons/facebook.png';
import instagramIcon from '../icons/instagram.png';
import twitterIcon from '../icons/twitter.png';
import telegramIcon from '../icons/telegram.png';
import redditIcon from '../icons/reddit.png';
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Details(props) {
    const [exchange, setExchange] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/exchanges/${id}`)
        .then(response => response.json())
        .then((data) => {
            setExchange(data);
        })
    }, []);

    return (
        <>
        <Card className="text-center">            
            <Card.Header>{exchange.name}</Card.Header>
            <Card.Body>
                <Table responsive striped hover variant="dark">               
                    <tbody>
                        <tr>
                            <th scope="row" className="title">Rank</th>            
                            <td>{exchange.trust_score_rank}</td>
                        </tr> 
                        <tr>
                            <th scope="row" className="title">Name</th> 
                            <td><img style={{width: "30px"}} src={exchange.image} /><span style={{marginLeft: "5px"}}>{exchange.name}</span></td>                                       
                        </tr> 
                        <tr>
                            <th scope="row" className="title">Country</th>
                            <td>{exchange.country}</td>
                        </tr>          
                        <tr>
                            <th scope="row" className="title">Year of Establishment</th>
                            <td>{exchange.year_established}</td>
                        </tr>   
                        <tr>
                            <th scope="row" className="title">Social Media</th>
                            <td>
                                <a href={exchange.facebook_url} title="facebook icons"><img src={facebookIcon} className="social-media"/></a>
                                <a href="https://www.instagram.com/binance" title="instagram icons"><img src={instagramIcon} className="social-media"/></a>
                                <a href={`https://www.twitter.com/${exchange.twitter_handle}`} title="instagram icons"><img src={twitterIcon} className="social-media"/></a>
                                <a href={exchange.telegram_url} title="facebook icons"><img src={telegramIcon} className="social-media"/></a>
                                <a href={exchange.reddit_url} title="facebook icons"><img src={redditIcon} className="social-media"/></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="title">Description</th>
                            <td>{exchange.description}</td>
                        </tr>  
                    </tbody>                       
                </Table>
            </Card.Body>
        </Card>
        </>
    );
}

export default Details;