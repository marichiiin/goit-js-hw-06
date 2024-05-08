let numberOfCategories = document.getElementsByClassName("item");
console.log("Numbers of Categories: " + numberOfCategories.length);  

for (let i = 0; i < numberOfCategories.length; i++) {
    console.log(`Category: ${numberOfCategories[i].firstElementChild.innerHTML}`);
    console.log(`Category: ${numberOfCategories[i].firstElementChild.nextElementSibling.children.length}`);
}