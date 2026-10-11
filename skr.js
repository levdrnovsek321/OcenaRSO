

if (pozdravGumb) {
    pozdravGumb.addEventListener("click", () => {
        const ime = document.getElementById("imeZivali").value.trim();
        const rezultat = document.getElementById("pozdravRezultat");

         rezultat.textContent = ime
            ? `Pozdravljen, ${ime}! Veselimo se, da bomo lahko skrbeli zate. `
            : "Najprej vpišite ime svojega ljubljenčka.";

        rezultat.classList.toggle("uspesno", !!ime);
        
    });
}

