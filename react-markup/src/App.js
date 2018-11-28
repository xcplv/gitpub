import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let Header = p => 
<header>
   <body>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="logomore">
        <img src="images/logo.png" alt="logo" />
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Work</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Location</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <h3 class="col-12"><i class="fas fa-cogs"></i>Projects</h3>
            <div class="col-lg-3 col-sm-6 col-12 text-center">
                <img class="mr-3 img-fluid" src="images/banner1.jpg" alt="Картиночка1" />
            </div>
            <div class="col-lg-3 col-sm-6 col-12 text-center">
                 <img class="mr-3 img-fluid" src="images/banner2.jpg" alt="Картиночка2" />
            </div>
            <div class="col-lg-3 col-sm-6 col-12 text-center">
                <img class="mr-3 img-fluid" src="images/banner3.jpg" alt="Картиночка3" />
            </div>
            <div class="col-lg-3 col-sm-6 col-12 text-center">
                <img class="mr-3 img-fluid" src="images/banner4.jpg" alt="Картиночка4" />
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-12">
                <h3 class="col-12"><i class="fas fa-rss"></i>From blog</h3>
                <div class="row">
                    <div class="col-12 media">
                        <img class="rss" src="images/rss1.jpg" alt="RSS1" />
                        <div class="media-body">
                            <h4 class="mt-0">Meet Twitter Promote Mode</h4>
                            <p>Grow your influence steadily without ever having to manage a campaign.. <a href="https://twitter.com/login" class="link">Read more...</a><br/>
                            <span class="date">01/01/13 - 10:21 AM</span></p>   
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 media">
                        <img class="mr-3" src="images/rss2.jpg" alt="RSS2" />
                        <div class="media-body">
                            <h4 class="mt-0">Twitter is where people come to discover what’s happening</h4>
                            <p>With over 500 million Tweets being sent each day, hundreds of millions of people are exploring links, articles, Retweets, Trends, and Moments to find out more about what’s new.. <a href="https://twitter.com/login" class="link">Read more...</a><br/>
                            <span class="date">01/01/13 - 10:21 AM</span></p>       
                        </div>
                    </div>
                </div>
                <div class="col-12"  id="mobileAddBorder">
                    <a href="#" class="lowLink">Older entries</a>
                </div>
            </div>          
            <div class="col-lg-6 col-12">
                <h3 class="col-12"><i class="fab fa-twitter"></i>Twitter feed</h3>
                <div class="col-12">
                    <p><a href="#" class="authorName">@Twitter team</a> With over 500 million Tweets being sent each day, <a href="#">twitter.com</a> hundreds of millions of people are exploring links, articles, Retweets, Trends, and Moments to find out more about what’s new. <a href="#"> #500 million</a> ^_^ <a href="#">#NEW</a> <br/>
                    <span class="date">01/01/13 - 10:21 AM</span></p>
                </div>
                <div class="col-12">
                    <p><a href="#" class="authorName">@Twitter team</a>, <a href="url">twitter.com</a> Twitter’s unique discovery mindset allows businesses and brands to connect with a relevant<a href="#"> #twitter</a> <a href="#">#twitterAwards</a>.<br/>
                    <span class="date">01/01/13 - 10:21 AM</span></p>
                </div>
                <div class="col-12">
                    <p><a href="#" class="authorName">@Twitter team</a> Follow <a href="https://twitter.com/twitterbusiness">@TwitterBusiness</a> for tips, news, and how-tos that help you promote your business or project.<a href="#"> #twitter2018</a>.<br/>
                    <span class="date">01/01/13 - 10:21 AM</span></p>
                </div>
                <div class="col-12">
                    <a href="https://twitter.com/?lang=ru" class="lowLink">Follow on Twitter</a>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="row">
            <div class="col-sm-6 col-12 footerCopyright">&copy; A-Level 2018</div>
            <div class="col-sm-6 col-12 footerIcons">
              <a href="https://www.apple.com/"><i class="fab fa-apple"></i></a>&nbsp;&nbsp;

              <a href="https://vk.com/"><i class="fab fa-vk"></i></a>&nbsp;&nbsp;

              <a href="https://uk-ua.facebook.com/"><i class="fab fa-facebook"></i></a>&nbsp;
              &nbsp;
              <a href="https://soundcloud.com/"><i class="fab fa-soundcloud"></i></a>
            </div>
        </div>
    </footer>
    
</body>
</header>

let Alert = p =>
<div className={`alert alert-${p.type}`} role="alert">
    {p.children}
</div>

let MenuItem = (p =>
<li className="nav-item ">
   <a className="nav-link" href={p.href}>
        {p.children}
   </a>
</li>)

let MyImg = p =>
<div className='imgContainer'>
    <img src={p.src} />
</div>


let App = p => 
<div>
    <Header />
    <main>
        <Alert type="info">
        </Alert>
        <Alert type="danger">
   
        </Alert>
        <ul> 
        <MyImg src="favicon.ico" />
        </ul>
    </main>
    <footer>
        <div class="row">
            <div class="col-sm-6 col-12 footerCopyright">&copy; A-Level 2018</div>
            <div class="col-sm-6 col-12 footerIcons">
              <a href="https://www.apple.com/"><i class="fab fa-apple"></i></a>&nbsp;&nbsp;

              <a href="https://vk.com/"><i class="fab fa-vk"></i></a>&nbsp;&nbsp;

              <a href="https://uk-ua.facebook.com/"><i class="fab fa-facebook"></i></a>&nbsp;
              &nbsp;
              <a href="https://soundcloud.com/"><i class="fab fa-soundcloud"></i></a>
            </div>
        </div>

   
    </footer>
</div>
export default App;
