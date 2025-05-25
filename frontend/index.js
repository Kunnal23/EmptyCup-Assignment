document.addEventListener("DOMContentLoaded", async () => {
	const listingsContainer = document.getElementById("listingsContainer");
	const shortlistFilterBtn = document.querySelector(".second .icon"); 
	let allCards = [];

	try {
		
		const response = await fetch(
			"https://emptycup-backend-p7k1.onrender.com/api/listings"
		);
		const listings = await response.json();

		listings.forEach((listing, index) => {
			const card = document.createElement("div");
			card.className = "card whole2";

			if ((index + 1) % 2 === 0) {
				card.classList.add("white-bg");
			}

			
			card.classList.add("not-shortlisted");

			card.innerHTML = `
    <div class="left">
    <div class="subheading">
      <h1 class="sub">${listing.name}</h1>
    </div>
    <div class="gp1">
      <img src="${listing.logo}" alt="${listing.name} logo" />
    </div>
    <div class="para">
      <h1>${listing.para}</h1>
    </div>
    <div class="details">
      <div class="li">
        <h1 class="l1">${listing.projects}</h1>
        <p class="l2">Projects</p>
      </div>
      <div class="li">
        <h1 class="l1">${listing.years}</h1>
        <p class="l2">years</p>
      </div>
      <div class="li">
        <h1 class="l1">${listing.price}</h1>
        <p class="l2">Price</p>
      </div>
    </div>
    <div class="num">
      <p class="num1">${listing.phone1}</p>
      <p class="num2">${listing.phone2}</p>
    </div>
  </div>
  <div class="right">
    <div class="icon">
      <div class="icons"> <img src="assets/arrow-right-short 1.svg" alt="" /><h3>Details</h3></div>
      <div class="icons"> <img src="assets/eye-slash 1.svg" alt="" /><h3>Hide</h3></div>
      <div class="icons iconToggle">
        <img class="heartIcon" src="assets/${
					listing.shortlisted ? "Vector.svg" : "bookmark-heart-1.svg"
				}" alt="" />
        <h3>Shortlist</h3>
      </div>
      <div class="icons"> <img src="assets/exclamation-circle 1.svg" alt="" /><h3>Report</h3></div>
    </div>
  </div>
`;
			listingsContainer.appendChild(card);
			allCards.push(card);
		});

		
		allCards.forEach((card) => {
			const toggleBtn = card.querySelector(".iconToggle");
			const heartIcon = toggleBtn.querySelector(".heartIcon");

			toggleBtn.addEventListener("click", () => {
				if (card.classList.contains("shortlisted")) {
					
					card.classList.remove("shortlisted");
					card.classList.add("not-shortlisted");
					heartIcon.src = "assets/bookmark-heart-1.svg"; 
				} else {
					
					card.classList.add("shortlisted");
					card.classList.remove("not-shortlisted");
					heartIcon.src = "assets/Vector.svg"; 
				}

				if (
					shortlistFilterBtn.classList.contains("active") &&
					!card.classList.contains("shortlisted")
				) {
					card.style.display = "none";
				} else {
					card.style.display = "";
				}
			});
		});

		
		shortlistFilterBtn.addEventListener("click", () => {
			shortlistFilterBtn.classList.toggle("active");
			const filterOn = shortlistFilterBtn.classList.contains("active");

			allCards.forEach((card) => {
				if (filterOn && !card.classList.contains("shortlisted")) {
					card.style.display = "none";
                    shortlistFilterBtn.classList.add("shadow");
				} else {
					card.style.display = "";
                    shortlistFilterBtn.classList.remove("shadow");
				}
			});
		});
	} catch (error) {
		console.error("Error loading listings:", error);
		listingsContainer.innerHTML =
			"<p>Failed to load listings. Please try again later.</p>";
	}
});
