const leagueCards = document.querySelectorAll(".league-card");

leagueCards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Скоро здесь откроется страница лиги ⚽");
    });
});
