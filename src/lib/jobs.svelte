<script>
    
  var currentSlide = 1
  var maxSlide = 2

  function scrollSlidesLeft() {
    if (currentSlide != 1) {
      currentSlide = currentSlide - 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxJobs").style.transform = x
    }
  }
  function scrollSlidesRight() {
    if (currentSlide < maxSlide) {
      currentSlide = currentSlide + 1
      let x = "translateX(" + -80*(currentSlide-1) + "vw)"
      document.getElementById("slidesBoxJobs").style.transform = x
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
  #slidesBoxJobs {
    transition: all 1s;
  }
  .slide {
    width: 80vw;
    height: 60vh;
    background-color: #b49edb;
  }
  h1 {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  .right-text {
    width: 35vw;
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
      width: 60%;
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