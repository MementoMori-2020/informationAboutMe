<script>
  import Intro from './lib/intro.svelte'
  import Interns from './lib/internships.svelte'
  import Jobs from './lib/jobs.svelte'
  import School from './lib/school.svelte'
  import Scouts from './lib/eagle.svelte'
  import Volunteer from './lib/volunteer.svelte'
  
  var pgWidth

  var currentTabName = "one"
  var currentTab
  $: if (currentTabName == "one") {
    currentTab = "intro"
  } else if (currentTabName == "two") {
    currentTab = "intern"
  } else if (currentTabName == "three") {
    currentTab = "jobs"
  } else if (currentTabName == "four") {
    currentTab = "school"
  } else if (currentTabName == "five") {
    currentTab = "volunteer"
  } else if (currentTabName == "six") {
    currentTab = "scouts"
  } else {
    currentTab = "intro"
  }

  var introScrollCurrent = 0
  var internScrollCurrent = 0
  var jobsScrollCurrent = 0
  var schoolScrollCurrent = 0
  var volunteerScrollCurrent = 0
  var scoutsScrollCurrent = 0

  var currentSlidesScroll
  $: currentSlidesScroll = currentTab + "ScrollCurrent"

  function scrollSlides(event) {
    let scrollDirection = event.target.id
    if (scrollDirection == "goLeft" && currentSlidesScroll != 0) {
      let x = document.getElementById(currentTab)
      
    }
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
      currentTabName = newPage
    }
  }
</script>

<svelte:window bind:innerWidth={pgWidth}></svelte:window>
<main>
  <section id="header">
    <div class="header">
      <div class="headerText">
        <h2>Ian Blanchet</h2>
        <div class="contact">
          <h5>978-364-6796</h5>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrlFSprGPRxZxKCrLMxWDZSJLcpFCkDCmNmDDslHZWpVMdjlcmmjbnsZFSqvSxWSqCbwjB">ianblanchet01@gmail.com</a>
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
      <div id="switchTabs">
        <div class="first">
          <div on:click={switchTab} id="one" class="h3 left selected">
            <h3 id="one">Introduction</h3>
          </div>

          <div on:click={switchTab} id="two" class="h3">
            <h3 id="two">Internships</h3>
          </div>
          
          <div on:click={switchTab} id="three" class="h3 leftMid">
            <h3 id="three">Employment</h3>
          </div>
        </div>
        
        <div class="second">
          <div on:click={switchTab} id="four" class="h3 rightMid">
            <h3 id="four">Education</h3>
          </div>
          
          <div on:click={switchTab} id="five" class="h3">
            <h3 id="five">Volunteering</h3>
          </div>

          <div on:click={switchTab} id="six" class="h3 right">
            <h3 id="six">Boy Scouts</h3>
          </div>
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
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #content {
    border: 0px;
  }
  #displayBox {
    width: 80vw;
    height: 60vh;
    border-top: .47vw solid;
    border-right: .47vw solid;
    border-left: .47vw solid;
    border-top-left-radius: .6vw;
    border-top-right-radius: .6vw;
    overflow: hidden;
    z-index: 10;
  }
  #slideDeck {
    height: 100%;
    transition: all 1s;
    z-index: 5;
    color: #102436;
    display: flex;
    flex-direction: column;
    align-items: start;
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



  #switchTabs {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: start;
    height: 8vh;
    margin: 0px;
    border: 0px solid;
    z-index: 10;
  }
  #switchTabs .h3 {
    margin: 0px;
    padding: 0px;
    width: 33.333333333333333%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: start;
    border-top: .47vw solid;
    border-left: .235vw solid;
    border-right: .235vw solid;
    border-bottom: .47vw solid;
    border-bottom-left-radius: .6vw;
    border-bottom-right-radius: .6vw;
    transition: all .2s;
    cursor: pointer;
    z-index: 10;
  }
  .first, .second {
    width: 50%
  }
  #switchTabs .selected {
    height: 10vh;
  }
  #switchTabs .h3:hover {
    height: 10vh;
  }
  #switchTabs .left {
    border-left: .47vw solid;
  }
  #switchTabs .right {
    border-right: .47vw solid;
  }
  #switchTabs h3 {
    margin: auto;
    width: 100%;
    cursor: pointer;
    color: #102436;
  }
  #switchTabs .first, #switchTabs .second {
    width: 50%;
    display: flex;
    flex-direction: row;
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
    background-color: #dcc4a3;
  }
  @media screen and (max-aspect-ratio: 1/1) {
    #switchTabs {
      flex-direction: column;
      height: 17vh;
      width: 80.94vw;
      margin: 0px;
    }
    #switchTabs h3 {
      font-size: 180%;
    }
    #switchTabs .selected {
      height: 8vh;
    }
    #switchTabs .h3:hover {
      height: 8vh;
    }
    #switchTabs .first, #switchTabs .second {
      width: 100%;
    }
    #switchTabs #one, #switchTabs #two, #switchTabs #three, #switchTabs #five{
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    #switchTabs .leftMid {
      border-right: .47vw solid;
    }
    #switchTabs .rightMid {
      border-left: .47vw solid;
      border-bottom-right-radius: 0px;
    }
    #switchTabs #six {
      border-bottom-left-radius: 0px;
    }
  }



  .contact {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 24%;
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
  }
  @media screen and (max-aspect-ratio: 1/1) {
    .contact {
      width: 50%;
      margin-right: 5vw;
    }
    .header {
      font-size: 170%;
      height: 10vh;
    }
  }

  .ignore {
    display: none;
  }
</style>