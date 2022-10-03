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