import React, { Component } from 'react';

export default class Home extends Component {
    render () {
        return (
                <div className="content">
                    <div className="text col-md-8">
                        <strong>Hi, I'm Austin.</strong><br /><br />
                        I am used to doing web development but I am currently learning more about many different languages.<br /><br />
                        I am interested in things like space, programming (obviously), and spending time with my friends.<br /><br />
                        Honestly that previous block of text makes me want to vomit. I hope my site makes you think of me as someone not entirely pathetic.<br /><br />
                        I first became interested in web development in 7th grade when I discovered code academy and took the course on javascript. <strong className="shudder">shudders</strong>.
                        I had always liked computers, but that was my first experience "programming". Freshman year of high school, I joined my school's robotics team and sat in with the code
                        department. They handled all of the C++ code for the robot. I ended up leaving before my junior year as nobody in that department could be remotely helpful when learning.
                        I still liked the team and decided to give it another shot by joining the <a href="http://team537.org/about-us/team-structure/year-round-cdts/webapps/">
                        Application Development department.</a><br /><br />
                        After joining the App Dev department, I worked with others on our streaming service, <a href="https://atthecontrol.com/">At The Control</a>, which was used to be able to
                        remotely watch and keep up with robotics events.<br /><br />
                        Now I am a soon to be freshman (as of June 2017) at <a hef="https://msoe.edu">MSOE</a> where I plan to get my bachelors in Software Engineering.<br /><br />
                        This site was originally built with just html and css on an apache server.<br /> I then upgraded to using angular, and then node came in to play somewhere along there.<br />
                        I now use react on an NGINX server (a raspberry pi) for rendering the site and all that.
                    </div>
                    <img className="home-img col-md-4" src="/assets/austin.jpg" />
                </div>
        );
    }
}