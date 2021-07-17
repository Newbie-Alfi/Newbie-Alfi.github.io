
let viewPhoto = (e) => {
    let btnList = document.querySelectorAll(".button");

    for( let i = 0; i < btnList.length; i++){
        if (btnList[i].textContent == "View photo"){
            btnList[i].addEventListener('click', (e) => {
                let currentBtn = e.target;

                let currentChildren = currentBtn.parentElement.childNodes;
                // console.log(currentChildren.length);
                for (let j = 0; j < currentChildren.length; j++){
                    console.log(currentChildren[j]);
                    if (currentChildren[j].getClass != "button"){
                        currentChildren[j].style.opacity = 0;
                    }
                }
            });
        }
    }
}

viewPhoto();