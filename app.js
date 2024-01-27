let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user_score");
const compscorepara = document.querySelector("#comp_score");

 const playgame = (userchoice)=>{
    console.log("User choice is ",userchoice)

    
 }
 const Showwin = (userwin)=>{
    if(userwin){
       userscore++;
       userscorepara.innerText = userscore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }

 }

 const compchoice = ()=>{
    const options = ["Rock","Paper","Sciessors"]
    let ramdomidx = Math.floor(Math.random()*3)
    return options[ramdomidx]
    
 }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userchoice =   choice.getAttribute("id")
      playgame(userchoice);
      const compopt = compchoice();
      console.log("computer choice",compopt)
      if(userchoice === compopt){
        console.log("Game was Draw");
        msg.innerText = "Game Draw Play Again!";
        msg.style.backgroundColor = "#081b31"
      }else{
        let userwin = true;
        if(userchoice === "Rock"){
            userwin = compopt === "Paper" ? false : true;
        }
        else if (userchoice === "Paper"){
            userwin = compopt === "Sciessors" ? false : true;
        }else{
            userwin = compopt === "Rock" ?false : true;
        }
        Showwin(userwin);
      };
       
    


    })
        
    
})
