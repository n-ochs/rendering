// WORKING WITHOUT A FOR LOOP
// function renderNametags(nametags) {
//     return `
//     <div class="name-tag">
//         <div class="intro">Hello, my name is:</div>
//         <div class="name">Kamilah</div>
//     </div>

//     <div class="name-tag">
//         <div class="intro">Hello, my name is:</div>
//         <div class="name">Kim</div>
//     </div>
    
//     <div class="name-tag">
//         <div class="intro">Hello, my name is:</div>
//         <div class="name">Stuart</div>
//     </div>

//     <div class="name-tag">
//         <div class="intro">Hello, my name is:</div>
//         <div class="name">Ron</div>
//     </div>

//     <div class="name-tag">
//         <div class="intro">Hello, my name is:</div>
//         <div class="name">Krissy</div>
//     </div>
//     `
// }

// TRYING TO MAKE THIS WORK WITH A FOR LOOP
// function renderNametags(nametags) {
//     let abstraction = '';
//     for (i = 0; i < nametagsAbstraction.length; i++) {
//         abstraction += 
//         `
//         <div class="name-tag">
//             <div class="intro">Hello, my name is</div>
//             <div class="name">${nametagsAbstraction[i]}</div>
//             </div>
//         `
//     }
//     return abstraction
// }

//LIVE CODING IN CLASS SOLUTION
function renderNametags(nametags) {
    let names = [];
    nametags.forEach(function (name) {
        let html = `
            <div class="name-tag">
                <div class="intro">Hello, my name is:</div>
                <div class="name">
                    ${name}
                </div>
            </div>
        `;
        names.push(html)
    });

    return `
    <div class="text-center mt-5">
        ${names.join('')}
    </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}