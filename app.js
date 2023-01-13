
      //get the container element
      let container = document.getElementById("grid-container");

      let newGridButton = document.getElementById("new-grid-button");

      //create a 16x16 grid with divs   

      for(let n = 0;n < 16; n++) {
        for (let divs = 0;divs < 16; divs++){
          let div = document.createElement("div");
          div.className = "grid-item";
          container.appendChild(div);
        }
      }
      
      let gridItems = document.querySelectorAll(".grid-item");

      gridItems.forEach(function(gridItem){
        gridItem.addEventListener("mouseover", function(){
          gridItem.style.backgroundColor = "black";
        });
      });

      //get number of squares
      newGridButton.addEventListener("click", function(){
        let squarePerSide = prompt("Enter the number of squares per side");

        container.innerHTML = "";

        for(let n = 0;n < squarePerSide; n++) {
        for (let divs = 0;divs < squarePerSide; divs++){
          let div = document.createElement("div");
          div.className = "grid-item";
          container.appendChild(div);
        }
      }
      

      })
 