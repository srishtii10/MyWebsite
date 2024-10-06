import React from 'react'
import { Card } from './Card'

export const Cards = () => {
    const port = " Built with HTML and CSS, the portfolio is responsive, adjusting to different screen sizes.Content is structured logically, with different sections, making it easy for recruiters to find what they need.";
    const tic = " Built a Tic-Tac-Toe game in Java, reinforcing OOP and user input handling skills.Demonstrated proficiency in dynamic memory allocation, efficient array usage, and effective error handling.";
    const music ="Developed a dynamic music player web app using JavaScript, HTML, and CSS, showcasing proficiency in front-end web development."

  return (
    <>
    
    <div className='flex flex-row justify-center flex-wrap'><Card image={"./images/portfolioimg.png"} heading={"Resume-Portfolio"} link={"https://srishtii10.github.io/Resume-portfolio/"} text={port}></Card>
    <Card image={"./images/tictactoe.png"} link={"https://github.com/srishtii10/Tic-tac-toe"} heading={"Tic-Tac-Toe"} text={tic}></Card>
    <Card image={"./images/music.png"} link={"https://srishtii10.github.io/Music-player-app/"} heading={"Music-Player-App"} text={music}></Card>
    
   
    </div>
    </>
    
  )
}
