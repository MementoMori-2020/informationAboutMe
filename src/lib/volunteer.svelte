<section class="slide">
  <div class="left-img block">
    <img src="./src/assets/COSAndOPDD.png" class="opdd" alt="Operation Delta Dog Logo" />
  </div>
  <div class="right-text block">
    <h1>Volunteer Work</h1>
    <h3>
      Over the years I have volunteered with a number of people and
      organizations, including the Chelmsford Open Space Stewardship, such as raking leaves
      for disabled veterans, helping plant crops for a local garden, and doing 
      maintenance on wilderness trails. Additionally, I have been volunteering
      with Operation Delta Dog since its founding in 2012. Operation Delta Dog
      is a non-profit organization that works to rescue dogs from shelters
      and trains them to be service dogs for veterans with PTSD and TBI. I have helped with
      event planning, presentations, fostering dogs, and more.
    </h3>
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
    background-color: #686df5;
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
    min-height: 25vw; 
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
      width: 70%;
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