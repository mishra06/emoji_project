// const finder = document.querySelector("#search_field");

function searchEmoji(){

    let inputValue = document.getElementById("search_field").value;
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


const debounce = function(func,delay){
    let timer;
    console.log("hiii");
    return function(){
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this,args);
        },delay);
        console.log("hlo");
    }
   
}

const Debounce = debounce(searchEmoji,300);
document.getElementById("search_field").addEventListener("keyup", Debounce)
window.onload = () => displayResult();