<script>
   
  var currentSlide = 1
  var maxSlide = 2

  function scrollSlidesLeft() {
    if (currentSlide != 1) {
      currentSlide = currentSlide - 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxSchool").style.transform = x
    }
  }
  function scrollSlidesRight() {
    if (currentSlide < maxSlide) {
      currentSlide = currentSlide + 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxSchool").style.transform = x
    }
  }

</script>

<div id="slides">
  <div class="scrollArrows">
    <div class="goLeft scroll">
      <h1 on:click={scrollSlidesLeft}>&LeftTriangle;</h1>
    </div>
    <div id="goRight" class="goRight scroll">
      <h1 on:click={scrollSlidesRight}>&RightTriangle;</h1>
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
    pointer-events: all;
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
  #slides {
    transition: all 1s;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  #slidesBoxSchool {
    transition: all 1s;
  }
    .slide {
      width: 80vw;
      height: 60vh;
      background-color: #f7576e;
    }
    h1 {
      margin-bottom: 0px;
      margin-top: 0px;
    }
    .left-text {
      width: 35vw;
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
      width: 60%;
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