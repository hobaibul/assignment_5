function TitleCard(id){
    const cardTitle = document.getElementById(id).innerText;
}

function incrementCount(id){
    const incrementCount = document.getElementById(id).innerText;
    const convertIncrementCount = parseInt(incrementCount);

    const sum = convertIncrementCount + 1;
     document.getElementById(id).innerText = sum;
     
}


function decrementCount(id){
    const decrementCount = document.getElementById(id).innerText;
    const convertDecrementCount = parseInt(decrementCount);

    const sub = convertDecrementCount - 1;

    document.getElementById(id).innerText = sub;
}