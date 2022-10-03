<script>

  var currentSlide = 1
  var maxSlide = 2

  function scrollSlidesLeft() {
    if (currentSlide != 1) {
      currentSlide = currentSlide - 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxIntro").style.transform = x
    }
  }
  function scrollSlidesRight() {
    if (currentSlide < maxSlide) {
      currentSlide = currentSlide + 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxIntro").style.transform = x
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
  <section id="slidesBoxIntro">
    <section class="slide">
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
    <section class="slide">
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
  #slidesBoxIntro {
    transition: all 1s;
  }
  .slide {
    width: 80vw;
    height: 60vh;
    background-color: #db9ecd;
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
  }
  .intro {
    width: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
  }
  .text {
    width: 45%;
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
      width: 90%;
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