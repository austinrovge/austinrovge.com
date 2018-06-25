import React, { Component } from 'react';

export default class Home extends Component {

    render () {
        return (
            <div>
                <h1><strong>Hi, I'm Austin.</strong></h1>
                <img className="me-img" src="/assets/me.jpg" />
                <div>
                    <p>I am used to doing web development but I am currently learning more about many different languages.</p>
                    <p>I am interested in things like space, programming (obviously), and spending time with my friends.</p>
                    <p>Honestly that previous block of text makes me want to vomit. I hope my site makes you think of me as someone not entirely pathetic.</p>
                    <p>I first became interested in web development in 7th grade when I discovered code academy and took the course on javascript. <strong className="shudder">shudders</strong>.
                        I had always liked computers, but that was my first experience "programming". Freshman year of high school, I joined my school's robotics team and sat in with the code
                        department. They handled all of the C++ code for the robot. I ended up leaving before my junior year as nobody in that department could be remotely helpful when learning.
                        I still liked the team and decided to give it another shot by joining the <a target="_blank" href="http://team537.org/about-us/team-structure/year-round-cdts/webapps/">Application Development department.</a></p>
                    <p>After joining the App Dev department, I worked with others on our streaming service, <a target="_blank" href="https://atthecontrol.com/">At The Control</a>, which was used to be able to
                        remotely watch and keep up with robotics events.</p>
                    <p>Now I am a freshman (as of Fall 2017) at <a target="_blank" href="https://msoe.edu">MSOE</a> where I plan to get my bachelors in Software Engineering.</p>
                    <p>This site was originally built with just HTML and CSS on an apache server.</p>
                    <p>I then upgraded to using Angular 1, and then Node came in to play somewhere along there.</p>
                    <p>I now use React on an NGINX server (a raspberry pi) for rendering the site and all that.</p>
                </div>
            </div>
        );
    }
}