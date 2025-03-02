let countClink = 0; 

document.getElementById('complete_btn').addEventListener('click',function(){
    alert("Board Updated successfully");
    const container = document.getElementById('history_container');
    const cardTitle1 = document.getElementById('card_title1').innerText;
    //const cardTitle1 = TitleCard('card_title1');
 
    countClink++;
    if(countClink == 6){
        alert("Congress! You have completed all the current task");
    }

    const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});


    // const incrementCount = document.getElementById('increment_count').innerText;
    // const convertIncrementCount = parseInt(incrementCount);

    // const sum = convertIncrementCount + 1;
    //  document.getElementById('increment_count').innerText = sum;
    incrementCount('increment_count');
    

    // const decrementCount = document.getElementById('decremetn_count').innerText;
    // const convertDecrementCount = parseInt(decrementCount);

    // const sub = convertDecrementCount - 1;

    // document.getElementById('decremetn_count').innerText = sub;
    decrementCount('decremetn_count');


    
    const p1 = document.createElement("p");
            p1.innerText = `
                You are Complete the task  ${cardTitle1} at ${date}
            `
            container.appendChild(p1);

            this.disabled = true;

})

//2
document.getElementById('complete_btn2').addEventListener('click',function(){
    alert("Board Updated successfully");
    const container = document.getElementById('history_container');
    const cardTitle2 = document.getElementById('card_title2').innerText;
  
    const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    countClink++;
    if(countClink == 6){
        alert("Congress! You have completed all the current task");
    }

    incrementCount('increment_count');
    decrementCount('decremetn_count');

            const p2 = document.createElement("p");
            p2.innerText = `
                You are Complete the task  ${cardTitle2} at ${date}
            `
            container.appendChild(p2);

            this.disabled = true;
})



//3
document.getElementById('complete_btn3').addEventListener('click',function(){
    alert("Board Updated successfully");
    const container = document.getElementById('history_container');
    const cardTitle3 = document.getElementById('card_title3').innerText;
  
    const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    countClink++;
    if(countClink == 6){
        alert("Congress! You have completed all the current task");
    }

    incrementCount('increment_count');
    decrementCount('decremetn_count');

            const p3 = document.createElement("p");
            p3.innerText = `
                You are Complete the task  ${cardTitle3} at ${date}
            `
            container.appendChild(p3);

            this.disabled = true;
})



//4
document.getElementById('complete_btn4').addEventListener('click',function(){
    alert("Board Updated successfully");
    const container = document.getElementById('history_container');
    const cardTitle4 = document.getElementById('card_title4').innerText;
  
    const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    countClink++;
    if(countClink == 6){
        alert("Congress! You have completed all the current task");
    }

    incrementCount('increment_count');
    decrementCount('decremetn_count');

            const p4 = document.createElement("p");
            p4.innerText = `
                You are Complete the task  ${cardTitle4} at ${date}
            `
            container.appendChild(p4);

            this.disabled = true;
})



//5
document.getElementById('complete_btn5').addEventListener('click',function(){
    alert("Borad Updated successfully");
    const container = document.getElementById('history_container');
    const cardTitle5 = document.getElementById('card_title5').innerText;
  
    const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    countClink++;
    if(countClink == 6){
        alert("Congress! You have completed all the current task");
    }

    incrementCount('increment_count');
    decrementCount('decremetn_count');

            const p5 = document.createElement("p");
            p5.innerText = `
                You are Complete the task  ${cardTitle5} at ${date}
            `
            container.appendChild(p5);

            this.disabled = true;
})


//6
document.getElementById('complete_btn6').addEventListener('click',function(){
    alert("Borad Updated successfully");
   
    const container = document.getElementById('history_container');
    const cardTitle6 = document.getElementById('card_title6').innerText;
  
    const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    countClink++;
    if(countClink == 6){
        alert("Congress! You have completed all the current task");
    }

    incrementCount('increment_count');
    decrementCount('decremetn_count');

            const p6 = document.createElement("p");
            p6.innerText = `
                You are Complete the task  ${cardTitle6} at ${date}
            `
            container.appendChild(p6);

            this.disabled = true;
})

function currentDate() {
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);

    document.getElementById("currentDate").innerText = formattedDate.replace(',', '');
}
currentDate();



function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackground() {
    document.body.style.backgroundColor = getRandomColor();
}




