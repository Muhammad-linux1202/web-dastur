// BMW saytining JavaScript qismi


// Model haqida xabar
function showCar(carName) {

    alert(
        "🚘 " + carName +
        "\n\nBMW modelining batafsil ma'lumotlari tez orada qo'shiladi."
    );

}


// Technology sectionga o'tish
function scrollToTechnology() {

    document
        .getElementById("technology")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Contact
function sendMessage() {

    alert(
        "✅ Xabaringiz yuborildi!\n\n" +
        "BMW jamoasi tez orada siz bilan bog'lanadi."
    );

}