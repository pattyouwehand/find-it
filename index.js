const images = [
    {
        name: "waving-wally",
        src: "img/waving-wally.jpg"
    },
    {
        name: "fake-wally",
        src: "img/fake-wally.jpg"
    },
    {
        name: "invisable-wally",
        src: "img/invisable-wally.jpg"
    },
    {
        name: "weird-wally",
        src: "img/weird-wally.jpg"
    },
    {
        name: "transgender-wally",
        src: "img/transgender-wally.jpg"
    },
]

function getRandomInt(max){
    return (Math.floor(Math.random() * max))
};

for(let i=0; i<images.length; i++){
    const main = document.getElementById("searchField");
    const img = document.createElement("img");
    img.alt = images[i].name;
    img.src = images[i].src;
    img.setAttribute("style", "height: 30px; position: absolute; bottom: absolute; left: absolute");
    img.style.bottom = getRandomInt(30).toString() + 'rem';
    img.style.left = getRandomInt(60).toString() + 'rem';
    main.appendChild(img)

    img.onclick = function(){
        addToFoundItems(images[i])
        displayInFooter()
        
    }
}

getRandomInt()

const foundItems = [];

function addToFoundItems(image){
    if(!foundItems.includes(image)){
        foundItems.push(image)
        return foundItems
    }    
    return false 
}


function displayInFooter(){
    const footer = document.getElementById("foundItems");
    footer.innerHTML = "";

    for(let i=0; i<foundItems.length; i++){
        const image = foundItems[i];
        const images = document.createElement('img');
        images.alt = foundItems[i].name;
        images.scr = foundItems[i].scr;
        images.height = (100 + 'px');
        images.width = (100 + 'px');
        addToFoundItems.appendChild(newImages)
    }
}
displayInFooter()
