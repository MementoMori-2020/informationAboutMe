<script>
    
</script>

<section class="slide">
  <div class="left-text block">
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
  <div class="right-img block">
    <img src="./src/assets/nuveraAndAMB.png" class="nuvera" alt="Nuvera Fuel Cells Logo" />
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
    background-color: #9edba6;
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