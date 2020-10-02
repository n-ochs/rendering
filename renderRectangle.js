
function renderRectangle(rectangle) {
    return `
        <div class="text-center mt-5">
            <div style="border:1px solid #000;width:${rectangle.width}px;height:${rectangle.height}px;background-Color:${rectangle.color}">
                </div>
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}