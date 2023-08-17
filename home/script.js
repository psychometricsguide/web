// initialize all Bootstrap popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


// Likes, dislikes
const cardContainer = document.getElementById("card-container");

cardContainer.onclick = (event) => {
	const target = event.target.closest('.likes') || event.target.closest('.dislikes');
	if (target) {
		updateLikesDislikes(target);
	}
}

function updateLikesDislikes(button) {
    const card = button.closest(".content-card");

    const likeButton = card.querySelector(".likes");
    const dislikeButton = card.querySelector(".dislikes");

    const likesCount = card.querySelector(".likes-count");
    const dislikesCount = card.querySelector(".dislikes-count");

    const currentLikes = parseInt(likesCount.textContent);
    const currentDislikes = parseInt(dislikesCount.textContent);

    if (button.classList.contains("likes")) {
        if (likeButton.classList.contains("active")) {
            toggleActive(likeButton);
            likesCount.textContent = currentLikes - 1;
        } else {
            if (dislikeButton.classList.contains("active")) {
                toggleActive(dislikeButton);
                dislikesCount.textContent = currentDislikes - 1;
            }
            toggleActive(likeButton);
            likesCount.textContent = currentLikes + 1;
        }
    } else if (button.classList.contains("dislikes")) {
        if (dislikeButton.classList.contains("active")) {
            toggleActive(dislikeButton);
            dislikesCount.textContent = currentDislikes - 1;
        } else {
            if (likeButton.classList.contains("active")) {
                toggleActive(likeButton);
                likesCount.textContent = currentLikes - 1;
            }
            toggleActive(dislikeButton);
            dislikesCount.textContent = currentDislikes + 1;
        }
    }
}

function toggleActive(button) {
    button.classList.toggle("active");
}

// Load articles
import { researchData } from "../articles/script.js";

const card_container = document.getElementById('card-container');
for (let i = 0; i < researchData.length; i++)
{
    cardContainer.innerHTML += `
    <!-- Content card -->
    <div class="col-12 col-md-6 col-xxl-4">
        <div class="content-card p-3 p-sm-4 p-lg-5 p-xxl-4 rounded-4">
            <div class="card-img-container rounded-4" style="background-image: url('${researchData[i]['image_url']}');"></div>

            <div class="card-body mt-2">
                <p class="accent-color fw-semibold mb-2">${researchData[i]['article_type']}</p>
                <a href="../articles/article.html?id=${researchData[i]['id']}" class="card-title fs-3">${researchData[i]['title']}</a>

                <div class="d-flex justify-content-between align-items-start mt-4">
                    <!-- Author -->
                    <span class="text-center">
                        <a href="#"><img src="${researchData[i]['author_image_url']}" class="rounded-circle" height="27" width="27" alt="author"></a>
                        <span class="fw-semibold">${researchData[i]['date']}</span>
                    </span>

                    <!-- Likes, Dislikes, Share -->
                    <span class="d-flex gap-3 gap-md-2 gap-lg-3">
                        <span class="text-center likes">
                            <i class="fa-regular fa-thumbs-up fa-lg"></i>
                            <span class="fw-semibold likes-count">${researchData[i]['likes']}</span>
                        </span>
                        <span class="text-center dislikes">
                            <i class="fa-regular fa-thumbs-down fa-flip-horizontal fa-lg"></i>
                            <span class="fw-semibold dislikes-count">${researchData[i]['dislikes']}</span>
                        </span>
                        <span><i class="fa-solid fa-share-nodes fa-xl share"></i></span>
                    </span>
                </div>
            </div>
        </div>
    </div>
    `;
}