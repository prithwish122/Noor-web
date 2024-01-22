import React from "react";
import Games from "../components/games.png";
import Music from "../components/music.png";
import Quiz from "../components/quiz.png";
import Blog from "../components/blog.png";
import Chat from "../components/chat.png";
import '../components/Task.css'
import Circle1 from "../components/circle1.png";
import Circle2 from "../components/circle2.png";
import Circle11 from "../components/circle1.png";
import Circle12 from "../components/circle1.png";

function Task() {
    return (
        <section>
            <div className="hidden-options">
            <img className="games h" src={Games} alt=""/>
            <img className="music h" src={Music} alt=""/>
            <img className="quiz h" src={Quiz} alt=""/>
            <img className="blog h" src={Blog} alt=""/>
            <img className="chat h" src={Chat} alt=""/>
            <img className="circle1" src={Circle1} alt=""/>
            <img className="circle2" src={Circle2} alt=""/>
            <img className="circle11" src={Circle11} alt=""/>
            <img className="circle12" src={Circle12} alt=""/>
            </div>    
    
        </section>

    )
}
export default Task;