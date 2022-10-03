<section class="slide">
  <div class="left-text block">
    <h1>Eagle Scout Project</h1>
    <h3>In order to obtain the rank of Eagle Scout, I needed to complete an
      Eagle Project. My project was to build two wooden benches on my
      high school's wooded walking trails. This involved fully designing,
      CAD modelling, constructing, and installing both benches. During this
      procedure, I needed to lead others to assist with the building and installing,
      fundraise in order to purchase the materials, and design the benches
      themselves. I had to coordinate a large team, approximately 30 people,
      to complete the entire project over the course of roughly 100 hours.</h3>
  </div>
  <div class="right-img block">
    <img src="./src/assets/ScoutsAndEagle.png" class="eagle-scout" alt="Boy Scout Logo and Eagle Scout Badge" />
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .slide {
    width: 80vw;
    height: 60vh;
    background-color: #b6b4ba;
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