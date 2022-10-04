<script>

  var currentSlide = 1
  var maxSlide = 2
  var currentTracker = "i" + currentSlide

  function scrollSlidesLeft(event) {
    if (currentSlide != 1) {
      document.getElementById(currentTracker).classList.remove("tracked")
      currentSlide = currentSlide - 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxIntro").style.transform = x
      currentTracker = "i" + currentSlide
      document.getElementById(currentTracker).classList.add("tracked")
    }
    if (currentSlide == 1) {
      document.getElementById("introLeft").style.opacity = "0"
      document.getElementById("introLeft").style.pointerEvents = "none"
    } else if (currentSlide != 1) {
      document.getElementById("introLeft").style.opacity = "1"
      document.getElementById("introLeft").style.pointerEvents = "all"
    }
    if (currentSlide == maxSlide) {
      document.getElementById("introRight").style.opacity = "0"
      document.getElementById("introRight").style.pointerEvents = "none"
    } else if (currentSlide != maxSlide) {
      document.getElementById("introRight").style.opacity = "1"
      document.getElementById("introRight").style.pointerEvents = "all"
    }
  }
  function scrollSlidesRight() {
    if (currentSlide < maxSlide) {
      document.getElementById(currentTracker).classList.remove("tracked")
      currentSlide = currentSlide + 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxIntro").style.transform = x
      currentTracker = "i" + currentSlide
      document.getElementById(currentTracker).classList.add("tracked")
    }
    if (currentSlide == 1) {
      document.getElementById("introLeft").style.opacity = "0"
      document.getElementById("introLeft").style.pointerEvents = "none"
    } else if (currentSlide != 1) {
      document.getElementById("introLeft").style.opacity = "1"
      document.getElementById("introLeft").style.pointerEvents = "all"
    }
    if (currentSlide == maxSlide) {
      document.getElementById("introRight").style.opacity = "0"
      document.getElementById("introRight").style.pointerEvents = "none"
    } else if (currentSlide != maxSlide) {
      document.getElementById("introRight").style.opacity = "1"
      document.getElementById("introRight").style.pointerEvents = "all"
    }
  }

</script>

<div id="slides">
  <div class="scrollArrows">
    <div class="goLeft scroll">
      <h1 id="introLeft" on:click={scrollSlidesLeft}>&LeftTriangle;</h1>
    </div>
    <div class="slideTracker">
      <div id="i1" class="tracker tracked"></div>
      <div id="i2" class="tracker"></div>
    </div>
    <div class="goRight scroll">
      <h1 id="introRight" on:click={scrollSlidesRight}>&RightTriangle;</h1>
    </div>
  </div>
  <section id="slidesBoxIntro">
    <section id="introSlide1" class="slide">
        <div class="intro">
            <h1>Introductions</h1>
        </div>
        <div class="text">
            <h2>A dedicated, hard-working BME student at WPI. Eagle Scout,
                somewhat experienced engineering intern, extremely experienced
                volunteer. Trustworthy, loyal, helpful, curious, kind, and
                inquisitive. Quick learner, strong creative and analytical
                skills, honed teamwork and leadership expertise, and excellent
                presentation and writing aptitude. Experience with HTML, CSS,
                some JavaScript, and the Svelte framework (all of which were used
                to create this website from scratch). Working towards a BS
                in Biomedical Engineering.
            </h2>
        </div>
    </section>
    <section id="introSlide2" class="slide">
      <div class="text">
          <h2>There will be more text here, but for now I just need a paragraph.
            Lorem ipsum si dolor amet or whatever I guess.
          </h2>
      </div>
      <div class="intro">
        <h1>Slide 2</h1>
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
  #introLeft, #introRight {
    transition: all 1s;
  }
  #slides {
    transition: all 1s;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  #slidesBoxIntro {
    transition: all 1s;
  }
  .slide {
    width: 70vw;
    height: 60vh;
    background-color: #db9ecd;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
  }
  .intro {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
  }
  .text {
    width: 50%;
    min-height: 31.25%; 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-aspect-ratio: 1/1) {
    .slide {
      display: flex;
      flex-direction: column;
    }
    h1 {
      height: 50%;
    }
    .intro {
      width: 80%;
      height: 30%;
      font-size: 170%;
    }
    .text {
      width: 80%;
      height: 70%;
      font-size: 125%;
    }
  }
</style>