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