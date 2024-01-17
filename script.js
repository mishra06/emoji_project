// const finder = document.querySelector("#search_field");

function searchEmoji(){
    
    // finder.Value;
    // displayResult(finder);
    // return false;

    let inputValue = document.getElementById("search_field").value;
    // console.log(inputValue);
    displayResult(inputValue);
}

function displayResult(searchQuary = " "){

    let filterData = emojiList.filter((e) =>{

        if(e.description.indexOf(searchQuary) !=-1){
            return true;
        }

        if(e.tags.some(elem=>elem.startsWith(searchQuary))){
            return true;
        }

        if(e.aliases.some(elem=>elem.startsWith(searchQuary))){
            return true;
        }
    })

    let parent = document.querySelector(".result_sec");
    parent.innerHTML=" ";
    filterData.forEach((e) =>{

        let Box = document.createElement("div");
        Box.classList.add("box");
        // let Aliases = e.aliases.join(" ");
        Box.innerHTML=`
            <p class="Emojyy">${e.emoji}</p>
            <p class ="aliases">${e.aliases}</p>
            <p class="desc">${e.description}</p>
        `
        parent.appendChild(Box);
        
    })

}

// finder.addEventListener("keyup", searchemoji);
document.getElementById("search_field").addEventListener("keyup", searchEmoji)

window.onload = () => displayResult();