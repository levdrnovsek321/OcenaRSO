const pozdravGumb = document.getElementById("pozdravGumb");

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

const kontaktObrazec = document.getElementById("kontaktObrazec");

if (kontaktObrazec) {
    kontaktObrazec.addEventListener("submit", (dogodek) => {
        dogodek.preventDefault();

        const ime = document.getElementById("ime").value.trim();
        const rezultat = document.getElementById("obrazecRezultat");

        rezultat.textContent =
            `Hvala, ${ime}! Vaše povpraševanje je pripravljeno.`;

        rezultat.classList.add("uspesno");
    });
}

