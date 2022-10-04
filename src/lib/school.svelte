<script>
   
  var currentSlide = 1
  var maxSlide = 2
  var currentTracker = "e" + currentSlide

  function scrollSlidesLeft() {
    if (currentSlide != 1) {
      document.getElementById(currentTracker).classList.remove("tracked")
      currentSlide = currentSlide - 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxSchool").style.transform = x
      currentTracker = "e" + currentSlide
      document.getElementById(currentTracker).classList.add("tracked")
    }
    if (currentSlide == 1) {
      document.getElementById("schoolLeft").style.opacity = "0"
      document.getElementById("schoolLeft").style.pointerEvents = "none"
    } else if (currentSlide != 1) {
      document.getElementById("schoolLeft").style.opacity = "1"
      document.getElementById("schoolLeft").style.pointerEvents = "all"
    }
    if (currentSlide == maxSlide) {
      document.getElementById("schoolRight").style.opacity = "0"
      document.getElementById("schoolRight").style.pointerEvents = "none"
    } else if (currentSlide != maxSlide) {
      document.getElementById("schoolRight").style.opacity = "1"
      document.getElementById("schoolRight").style.pointerEvents = "all"
    }
  }
  function scrollSlidesRight() {
    if (currentSlide < maxSlide) {
      document.getElementById(currentTracker).classList.remove("tracked")
      currentSlide = currentSlide + 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxSchool").style.transform = x
      currentTracker = "e" + currentSlide
      document.getElementById(currentTracker).classList.add("tracked")
    }
    if (currentSlide == 1) {
      document.getElementById("schoolLeft").style.opacity = "0"
      document.getElementById("schoolLeft").style.pointerEvents = "none"
    } else if (currentSlide != 1) {
      document.getElementById("schoolLeft").style.opacity = "1"
      document.getElementById("schoolLeft").style.pointerEvents = "all"
    }
    if (currentSlide == maxSlide) {
      document.getElementById("schoolRight").style.opacity = "0"
      document.getElementById("schoolRight").style.pointerEvents = "none"
    } else if (currentSlide != maxSlide) {
      document.getElementById("schoolRight").style.opacity = "1"
      document.getElementById("schoolRight").style.pointerEvents = "all"
    }
  }

</script>

<div id="slides">
  <div class="scrollArrows">
    <div class="goLeft scroll">
      <h1 id="schoolLeft" on:click={scrollSlidesLeft}>&LeftTriangle;</h1>
    </div>
    <div class="slideTracker">
      <div id="e1" class="tracker tracked"></div>
      <div id="e2" class="tracker"></div>
    </div>
    <div id="goRight" class="goRight scroll">
      <h1 id="schoolRight" on:click={scrollSlidesRight}>&RightTriangle;</h1>
    </div>
  </div>
  <section id="slidesBoxSchool">
    <section class="slide">
        <div class="left-text block">
          <h1>Education</h1>
          <h3>I graduated from Innovation Academy Charter School with a high
            school diploma, achieving honor roll or high honor roll every
            semester. I attended the school from grade 5 to grade 12. I am
            currently working towards a BS in Biomedical Engineering at 
            Worcester Polytechnic Institute (WPI). My plan for the future is 
            to get an MS in Biomedical Engineering with a focus in prosthetics 
            engineering and design.
          </h3>
        </div>
        <div class="right-img block">
          <img src="./src/assets/schools.png" class="iacs-wpi" alt="IACS and WPI logos" />
        </div>
    </section>
    <section class="slide">
      <div class="left-text block">
        <h1>Education</h1>
        <h3>I graduated from Innovation Academy Charter School with a high
          school diploma, achieving honor roll or high honor roll every
          semester. I attended the school from grade 5 to grade 12. I am
          currently working towards a BS in Biomedical Engineering at 
          Worcester Polytechnic Institute (WPI). My plan for the future is 
          to get an MS in Biomedical Engineering with a focus in prosthetics 
          engineering and design.
        </h3>
      </div>
      <div class="right-img block">
        <img src="./src/assets/schools.png" class="iacs-wpi" alt="IACS and WPI logos" />
      </div>
    </section>
  </section>
</div>
  
  <style>
    section {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
    .slideTracker {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
  }
  .tracker {
    width: 1.5vw;
    height: 1.5vw;
    margin: .25vw;
    margin-bottom: .5vh;
    background-color: #787878ee;
    border-radius: 50%;
    transition: all 1s;
  }
  .tracked {
    background-color: #d8d8d8ee;
  }
  @media screen and (max-aspect-ratio: 1/1) {
    .tracker {
      width: 1.5vh;
      height: 1.5vh;
      margin: .25vh;
    }
  }
    .scrollArrows {
    height: 60vh;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 100;
    pointer-events: none;
  }
  @media (prefers-color-scheme: dark) {
    .scrollArrows {
      color: #d9d9d9;
    }
  }
  @media (prefers-color-scheme: light) {
    .scrollArrows {
      color: #102436;
    }
  }
  .goLeft h1 {
    margin-right: auto;
    width: 5vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    opacity: 0;
    cursor: pointer;
    background-image: linear-gradient(to right, #00000099, #00000022);
  }
  .goRight h1 {
    margin-left: auto;
    width: 5vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: all;
    cursor: pointer;
    background-image: linear-gradient(to left, #00000099, #00000022);
  }
  @media screen and (max-aspect-ratio: 1/1) {
    .goLeft h1, .goRight h1 {
      width: 5vh;
    }
  }
  #schoolLeft, #schoolRight {
    transition: all .5s;
  }
  #slides {
    transition: all 1s;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  #slidesBoxSchool {
    display: flex;
    flex-direction: row;
    transition: all 1s;
  }
  .slide {
    width: 70vw;
    height: 60vh;
    background-color: #f7576e;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  h1 {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  .left-text {
    width: 50%;
  }
  .right-img, .right-img img {
    width: 25vw;
    height: 25vw; 
  }
  @media screen and (max-aspect-ratio: 1/1) {
    section {
      flex-direction: column;
    }
    .slide {
      display: flex;
      flex-direction: column;
    }
    h1 {
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h3 {
      height: 60%;
      width: 80%;
      font-size: 130%;
    }
    img, .right-img {
      display: none;
    }
    .left-text {
      width: 100%;
      height: 90%;
      font-size: 140%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }  
</style>