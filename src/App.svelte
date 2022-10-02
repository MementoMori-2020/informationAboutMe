<script>
  import Intro from './lib/intro.svelte'
  import Interns from './lib/internships.svelte'
  import Jobs from './lib/jobs.svelte'
  import School from './lib/school.svelte'
  import Scouts from './lib/eagle.svelte'
  import Volunteer from './lib/volunteer.svelte'
  
  var pgWidth

  function load() {
    let x = document.querySelector('#slideDeck')
    x.classList.add('one')
  }
  function switchTab(event) {
    let viewport = document.querySelector('#slideDeck')
    let newPage = event.target.id
    let oldPage = viewport.classList[0]
    let newTab = document.getElementById(newPage)
    let oldTab = document.querySelector('.selected')
    if (newPage != oldPage) {
      viewport.classList.remove(oldPage)
      viewport.className = newPage + ' ' + viewport.className
      newTab.classList.add('selected')
      oldTab.classList.remove('selected')
    }
  }
</script>

<svelte:window bind:innerWidth={pgWidth}></svelte:window>
<main>
<!--
  <div>
    <a href="https://vitejs.dev" target="_blank"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
-->
  <section id="header">
    <div class="header">
      <div class="headerText">
        <h2>Ian Blanchet</h2>
        <div class="contact">
          <h5>978-364-6796</h5>
          <h5>ianblanchet01@gmail.com</h5>
        </div>
      </div>
    </div>
    </section>
    <section id="content">
      <div id="displayBox">
        <section id="slideDeck" class="one">
          <div id="intro" class="slides">
            <Intro />
          </div>
          <div id="intern" class="slides">
            <Interns />
          </div>
          <div id="jobs" class="slides">
            <Jobs />
          </div>
          <div id="school" class="slides">
            <School />
          </div>
          <div id="volunteer" class="slides">
            <Volunteer />
          </div>
          <div id="scouts" class="slides">
            <Scouts />
          </div>
        </section>
      </div>
      <!--Make the "slideshows" scroll sideways, but scroll
          up/down between topics.-->
      <div on:load={load} id="switchTabs">
        <div on:click={switchTab} id="one" class="h3 left selected">
          <h3 id="one">Introduction</h3>
        </div>

        <div on:click={switchTab} id="two" class="h3">
          <h3 id="two">Internships</h3>
        </div>
        
        <div on:click={switchTab} id="three" class="h3">
          <h3 id="three">Employment</h3>
        </div>
        
        <div on:click={switchTab} id="four" class="h3">
          <h3 id="four">Education</h3>
        </div>
        
        <div on:click={switchTab} id="five" class="h3">
          <h3 id="five">Volunteering</h3>
        </div>

        <div on:click={switchTab} id="six" class="h3 right">
          <h3 id="six">Boy Scouts</h3>
        </div>
        
      </div>
    </section>
    <section class="ignore one two three four five six"></section>
</main>

<style>
  /*
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  */
  main {
    width: 100%;
    background-color: #9EA7DC;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #content {
    border-bottom: 0px;
  }
  #displayBox {
    Width: 80vw;
    height: 60vh;
    border-top: 4px solid black;
    border-right: 4px solid black;
    border-left: 4px solid black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    z-index: 10;
  }
  #slideDeck {
    height: 100%;
    transition: all 1s;
    z-index: 5;
  }
  section.one {
    transform: translateY(0);
  }
  section.two {
    transform: translateY(-60vh);
  }
  section.three {
    transform: translateY(-120vh);
  }
  section.four {
    transform: translateY(-180vh);
  }
  section.five {
    transform: translateY(-240vh)
  }
  section.six {
    transform: translateY(-300vh);
  }
  /*
  .slideDeck:hover {
    transform: translateY(-60vh);
  }
  */



  #switchTabs {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 8vh;
    margin: 0px;
    border: 0px solid black;
    z-index: 10;
  }
  #switchTabs .h3 {
    margin: 0px;
    padding: 0px;
    width: 16.66666666666666666%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: start;
    border-top: 4px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;
    border-bottom: 4px solid black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all .2s;
    cursor: pointer;
    z-index: 10;
  }
  #switchTabs .selected {
    height: 10vh;
    transform: translateY(1vh);
  }
  #switchTabs .h3:hover {
    height: 10vh;
    transform: translateY(1vh);
  }
  #switchTabs .left {
    border-left: 4px solid black;
  }
  #switchTabs .right {
    border-right: 4px solid black;
  }
  #switchTabs h3 {
    margin: auto;
    width: 100%;
    cursor: pointer;
  }
  #one {
    background-color: #db9ecd;
  }
  #two {
    background-color: #9edba6;
  }
  #three {
    background-color: #b49edb;
  }
  #four {
    background-color: #f7576e;
  }
  #five {
    background-color: #686df5;
  }
  #six {
    background-color: #b6b4ba;
  }



  .contact {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20vw;
    margin-right: 2vw;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 7vw;
  }
  .headerText {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: 5vw;
  }
  #header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    background-color: #9EA7DC;
  }

  .ignore {
    display: none;
  }
</style>