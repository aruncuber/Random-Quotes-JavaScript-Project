let text = document.getElementById("text");

const button = document.querySelector("button");


button.addEventListener("click",function(){
    let randomText = ["We Never Outgrow The Truth","Find Your Peace And Live In It"," The Simplest Answer Is Usually The Correct One","Blue Is Not A Lonely Color","Once Again Blue Is Not A Lonely Color","Success Demands We Defy These Imaginary Boundaries."];
    let index = Math.floor(Math.random()*6);
    text.innerText = randomText[index];
})

