<script>
  
  var currentSlide = 1
  var maxSlide = 3
  var currentTracker = "n" + currentSlide

  function scrollSlidesLeft() {
    if (currentSlide != 1) {
      document.getElementById(currentTracker).classList.remove("tracked")
      currentSlide = currentSlide - 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxIntern").style.transform = x
      currentTracker = "n" + currentSlide
      document.getElementById(currentTracker).classList.add("tracked")
    }
    if (currentSlide == 1) {
      document.getElementById("internLeft").style.opacity = "0"
      document.getElementById("internLeft").style.pointerEvents = "none"
    } else if (currentSlide != 1) {
      document.getElementById("internLeft").style.opacity = "1"
      document.getElementById("internLeft").style.pointerEvents = "all"
    }
    if (currentSlide == maxSlide) {
      document.getElementById("internRight").style.opacity = "0"
      document.getElementById("internRight").style.pointerEvents = "none"
    } else if (currentSlide != maxSlide) {
      document.getElementById("internRight").style.opacity = "1"
      document.getElementById("internRight").style.pointerEvents = "all"
    }
  }
  function scrollSlidesRight() {
    if (currentSlide < maxSlide) {
      document.getElementById(currentTracker).classList.remove("tracked")
      currentSlide = currentSlide + 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxIntern").style.transform = x
      currentTracker = "n" + currentSlide
      document.getElementById(currentTracker).classList.add("tracked")
    }
    if (currentSlide == 1) {
      document.getElementById("internLeft").style.opacity = "0"
      document.getElementById("internLeft").style.pointerEvents = "none"
    } else if (currentSlide != 1) {
      document.getElementById("internLeft").style.opacity = "1"
      document.getElementById("internLeft").style.pointerEvents = "all"
    }
    if (currentSlide == maxSlide) {
      document.getElementById("internRight").style.opacity = "0"
      document.getElementById("internRight").style.pointerEvents = "none"
    } else if (currentSlide != maxSlide) {
      document.getElementById("internRight").style.opacity = "1"
      document.getElementById("internRight").style.pointerEvents = "all"
    }
  }

</script>

<div id="slides">
  <div class="scrollArrows">
    <div class="goLeft scroll">
      <h1 id="internLeft" on:click={scrollSlidesLeft}>&LeftTriangle;</h1>
    </div>
    <div class="slideTracker">
      <div id="n1" class="tracker tracked"></div>
      <div id="n2" class="tracker"></div>
      <div id="n3" class="tracker"></div>
    </div>
    <div id="internRight" class="goRight scroll">
      <h1 on:click={scrollSlidesRight}>&RightTriangle;</h1>
    </div>
  </div>
  <section id="slidesBoxIntern">
    <section class="slide">
      <div class="text block">
        <h1>Past Internships</h1>
        <h3>In the past, I have worked with Nuvera Fuel Cells and A Mighty Blaze
          as an intern. Nuvera is a leader in developing fuel cell technology,
          and I worked with them to develop new ideas and create CAD models
          using Solidworks. A Mighy Blaze is  a company founded in 2020 during 
          the COVID-19 pandemic in order to help authors, new and old, get 
          publicity for their work. I was responsible for creating and maintaining
          the YouTube channel that hosts the authors' daily interviews.
        </h3>
      </div>
      <div class="img block">
        <img src="./src/assets/nuveraAndAMB.png" class="nuvera" alt="Nuvera Fuel Cells Logo" />
      </div>
    </section>
    <section class="slide">
      <div class="img block">
        <img src="./src/assets/nuveraPng.png" class="nuvera" alt="Nuvera Fuel Cells Logo" />
      </div>
      <div class="text block">
        <h1>Nuvera</h1>
        <h3><a href="https://www.nuvera.com/" target="_BLANK">Nuvera Fuel Cells</a> is a Massachusetts-based fuel cell 
          company, and they are one of the national and international 
          leaders in developing fuel cells. When I interned for them, 
          I was learning about the ins-and-outs of fuel cell design 
          and testing, creating CAD models using Solidworks, and 
          working on designing and modelling prototypes for new 
          designs. Unfortunately I can't share any of the models 
          or ideas, as they all needed to remain on the company servers. 
          I was with them from September of 2019 until June of 2020.
        </h3>
      </div>
    </section>
    <section class="slide">
      <div class="text block">
        <h1>A Mighty Blaze</h1>
        <h3><a href="https://www.amightyblaze.com/" target="_BLANK">A Mighty Blaze</a> is a company that was created near the 
          beginning of the COVID-19 pandemic. It is an initiative designed 
          to help authors gain publicity for their works over the pandemic. They conduct interviews almost 
          every day with authors, which are livestreamed on their Facebook page 
          and their <a href="https://www.youtube.com/c/AMightyBlaze" target="_BLANK" >YouTube channel</a>. When I interned with them, I created and maintained 
          the channel, as well as spent upwards of 60 hours taking 
          videos from their Facebook archive and uploading them 
          to the channel. I was with them from March 2020 to September 2020.
        </h3>
      </div>
      <div class="img block">
        <img src="./src/assets/ambPng.png" class="nuvera" alt="Nuvera Fuel Cells Logo" />
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
  #internLeft, #internRight {
    transition: all .5s;
  }
  #slides {
    transition: all 1s;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  #slidesBoxIntern {
    display: flex;
    flex-direction: row;
    transition: all 1s;
  }
  .slide {
    width: 70vw;
    height: 60vh;
    background-color: #9edba6;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  a, a:visited {
    color: #c86abb;
    font-weight: bold;
    transition: all .2s;
  }
  a:hover {
    color: #953788;
    cursor: pointer;
  }
  h1 {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  .text {
    width: 50%;
  }
  .img, .img img {
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
    img, .img {
      display: none;
    }
    .text {
      width: 100%;
      height: 90%;
      font-size: 140%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>