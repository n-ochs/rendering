
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map()
    let circlesArray = []; //creating this empty array so that we can add to it with a for loop
    for (i = 0; i < circles.length; i++) {
        circlesArray.push(`<div style="border-radius:${circles[i].radius}px; background-color:${circles[i].color};height:${circles[i].radius}px;width:${circles[i].radius}px;"></div></div>`)
    }
    let circlesHTML = circlesArray.join(''); //join will create and return a new string, concatenating all of the elements in an array

    return `
        <div class="text-center mt-5">
            ${circlesHTML}
        </div>
    
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}