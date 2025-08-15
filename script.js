function addRecommendation() {
  // Get the textarea value
  var recommendation = document.getElementById("new_recommendation").value;

  // Only add if not empty
  if (recommendation.trim() !== "") {
    // Create a new recommendation div
    var recommendationDiv = document.createElement("div");
    recommendationDiv.className = "recommendation";
    recommendationDiv.innerHTML = `<span>&#8220;</span>${recommendation}<span>&#8221;</span>`;

    // Add to the recommendations list
    document.getElementById("all_recommendations").appendChild(recommendationDiv);

    // Clear the textarea
    document.getElementById("new_recommendation").value = "";

    // Show confirmation popup
    showPopup(true);
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
