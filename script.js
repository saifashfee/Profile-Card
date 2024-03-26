const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const profileModal = document.querySelector(".profileModal");

const openModal = () => {
    console.log("Modal Open");
    modal.classList.add("active");
    overlay.classList.add("overLayactive");
};

const closeModal = () => {
    console.log("Modal Closed");
    modal.classList.remove("active");
    profileModal.classList.remove("active");
    overlay.classList.remove("overLayactive");
};

const openProfileModal = () => {
    console.log("Profile Modal Open");
    profileModal.classList.add("active");
    overlay.classList.add("overLayactive");
}