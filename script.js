/* .js files add interaction to your website */
var factList = [
  "sea ice is melting rapidly, shrinking by 14% per decade",
  "many wildlife species (ex. polar bears) are going extinct",
  "climate change causes melting glaciers and water springs to dry up in the eastern himalayas affecting the lives of many animals",
  "the coral triangle is affected by climate change due to global warming, rising sea levels, ocean acidification, and coral bleaching which endangers many marine animals", 
  "climate change impacts monarch butterflies by interrupting their migration pattern due to the change in the weather",
  "the amazon is home to many wildlife but is negatively affected by deforestation and droughts which results in the loss of many species and ecosystems",
  "sea turtles are impacted by climate change because due to severe storms and rising sea levels, sea turtles’ nesting beaches and nests are being destroyed",
  "climate change takes away sea ice which impacts whales’ habitats and food as the plants and animals that the whales feed on change in quantity or move further away from the locations of whales due to rising sea temperatures", 
  "human activities are part of the cause of climate change", "we can help combat climate change (visit the “Take Action” tab to learn how)"];


var randomFact = document.getElementById("randomFact");
var factButton = document.getElementById("factButton");
var count = 0;

if(factButton) {
  factButton.addEventListener("click", displayFact);
}

// function to generate through the list of facts
function displayFact(){
  randomFact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
