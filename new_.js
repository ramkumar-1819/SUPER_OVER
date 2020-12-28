var score=[0,1,2,3,4,5,6];
var turn;


//team detail
var team1={
    name:"India",
    runs:[],
    score:0
}
//team detail
var team2={
    name:"Australia",
    runs:[],
    score:0
}
window.onload = () =>{
    //decide turn
    selectturn();
    //update textbutton
    updatetextbutton();
    //updatescore
    updatescore();
    //updatename
    updatename();
    //buttonclick
   

}
var selectturn = () =>{
    turn = Math.round(Math.random())+1;
}
var updatetextbutton = () =>{
    var button = document.getElementById("btn");
    var res=document.getElementById("result");
    res.style.visibility="";
    if (team1.runs.length===6 && team2.runs.length===6){
        button.remove();
        res.textContent=team1.score==team2.score?"MATCH DRAW": `${team1.score>team2.score?team1.name : team2.name} wins`;
    }
    else{
        turn=team1.runs.length==6?2:team2.runs.length==6?1:turn;
        button.textContent = `${turn === 1 ? team1.name: team2.name} batting` ;
    }
}




var updatescore=()=>{
    document.getElementById("team-1-score").textContent=team1.score;
    document.getElementById("team-2-score").textContent=team2.score;
    updateruns();
}

var updatename= ()=>{
    document.getElementById("team1").textContent=team1.name;
    document.getElementById("team2").textContent=team2.name;
}

var buttonclick=()=>{
    var run=score[Math.floor(Math.random()*score.length)];
    run=run ===5?"W":run;
    if (turn==1){
        team1.runs.push(run);
        team1.score=calculatescore(team1.runs);
    }
    else {
        if (turn==2)
        team2.runs.push(run);
        team2.score=calculatescore(team2.runs);
    }
    updatescore();
    updatetextbutton();
        
}
var calculatescore=(runs)=>{
    return  runs.map(num =>{
        return num=="W"?0:num;
     }).reduce((total,num)=>total+num);
}
var updateruns=()=>{
    var t1=document.getElementById("team-1-run").children;
    var t2=document.getElementById("team-2-run").children;
    team1.runs.forEach((runs,index) => {
        t1[index].textContent=runs;
    })
    team2.runs.forEach((runs,index) => {
        t2[index].textContent=runs;
    })
}

