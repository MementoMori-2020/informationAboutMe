<script>
    
  var currentSlide = 1
  var maxSlide = 2
  var currentTracker = "j" + currentSlide

  function scrollSlidesLeft() {
    if (currentSlide != 1) {
      document.getElementById(currentTracker).classList.remove("tracked")
      currentSlide = currentSlide - 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxJobs").style.transform = x
      currentTracker = "j" + currentSlide
      document.getElementById(currentTracker).classList.add("tracked")
    }
    if (currentSlide == 1) {
      document.getElementById("jobsLeft").style.opacity = "0"
      document.getElementById("jobsLeft").style.pointerEvents = "none"
    } else if (currentSlide != 1) {
      document.getElementById("jobsLeft").style.opacity = "1"
      document.getElementById("jobsLeft").style.pointerEvents = "all"
    }
    if (currentSlide == maxSlide) {
      document.getElementById("jobsRight").style.opacity = "0"
      document.getElementById("jobsRight").style.pointerEvents = "none"
    } else if (currentSlide != maxSlide) {
      document.getElementById("jobsRight").style.opacity = "1"
      document.getElementById("jobsRight").style.pointerEvents = "all"
    }
  }
  function scrollSlidesRight() {
    if (currentSlide < maxSlide) {
      document.getElementById(currentTracker).classList.remove("tracked")
      currentSlide = currentSlide + 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxJobs").style.transform = x
      currentTracker = "j" + currentSlide
      document.getElementById(currentTracker).classList.add("tracked")
    }
    if (currentSlide == 1) {
      document.getElementById("jobsLeft").style.opacity = "0"
      document.getElementById("jobsLeft").style.pointerEvents = "none"
    } else if (currentSlide != 1) {
      document.getElementById("jobsLeft").style.opacity = "1"
      document.getElementById("jobsLeft").style.pointerEvents = "all"
    }
    if (currentSlide == maxSlide) {
      document.getElementById("jobsRight").style.opacity = "0"
      document.getElementById("jobsRight").style.pointerEvents = "none"
    } else if (currentSlide != maxSlide) {
      document.getElementById("jobsRight").style.opacity = "1"
      document.getElementById("jobsRight").style.pointerEvents = "all"
    }
  }

</script>

<div id="slides">
  <div class="scrollArrows">
    <div class="goLeft scroll">
      <h1 id="jobsLeft" on:click={scrollSlidesLeft}>&LeftTriangle;</h1>
    </div>
    <div class="slideTracker">
      <div id="j1" class="tracker tracked"></div>
      <div id="j2" class="tracker"></div>
    </div>
    <div id="goRight" class="goRight scroll">
      <h1 id="jobsRight" on:click={scrollSlidesRight}>&RightTriangle;</h1>
    </div>
  </div>
  <section id="slidesBoxJobs">
    <section class="slide">
      <div class="left-img block">
        <img src="./src/assets/MBAndTPS.png" class="TPS" alt="The Paper Store Logo" />
      </div>
      <div class="right-text block">
        <h1>Previous Jobs</h1>
        <h3>
          In the past, I have worked for the grocery store Market Basket and
          the gift store The Paper Store. At Market Basket, I worked as a bagger
          and a cart collector for a little over a year, before I unfortunately needed
          to leave due to the COVID-19 pandemic. At The Paper Store, I
          worked as a cashier, stocker, and customer service, as well as processing
          and shipping online orders. 
        </h3>
      </div>
    </section>
    <section class="slide">
      <div class="left-img block">
        <img src="./src/assets/MBAndTPS.png" class="TPS" alt="The Paper Store Logo" />
      </div>
      <div class="right-text block">
        <h1>Previous Jobs</h1>
        <h3>
          In the past, I have worked for the grocery store Market Basket and
          the gift store The Paper Store. At Market Basket, I worked as a bagger
          and a cart collector for a little over a year, before I unfortunately needed
          to leave due to the COVID-19 pandemic. At The Paper Store, I
          worked as a cashier, stocker, and customer service, as well as processing
          and shipping online orders. 
        </h3>
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
    background-color: #a4a4a4ee;
    border-radius: 50%;
    transition: all 1s;
  }
  .tracked {
    background-color: #d8d8d899;
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
  #jobsLeft, #jobsRight {
    transition: all .5s;
  }
  #slides {
    transition: all 1s;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  #slidesBoxJobs {
    display: flex;
    flex-direction: row;
    transition: all 1s;
  }
  .slide {
    width: 70vw;
    height: 60vh;
    background-color: #b49edb;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  h1 {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  .right-text {
    width: 50%;
  }
  .left-img, .left-img img {
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
    img, .left-img {
      display: none;
    }
    .right-text {
      width: 100%;
      height: 90%;
      font-size: 140%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>