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
        //console.log("IMAGE:", i)        
        //addToFoundItems(img[i])
        addToFoundItems(images[i])
    }
    //console.log(images[i])
}

getRandomInt()

const foundItems = [];

function addToFoundItems(image){
    if(!foundItems.includes(image)){
        foundItems.push(image)
        console.log(foundItems)
        return foundItems
    }    
    return false 
}
//console.log(foundItems)
//addToFoundItems(images[0])
//console.log(foundItems)



addToFoundItems()


function displayInFooter(){
    const foundItemsSection = document.getElementById("foundItems");
    foundItemsSection.innerHTML = "";

}