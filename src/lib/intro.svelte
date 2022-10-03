<script>

</script>

<div class="slides">
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
</div>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .slides {
    transition: all 1s;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  .slides:hover {
    transform: translateX(-80vw);
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
    width: 43.75%;
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