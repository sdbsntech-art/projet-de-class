document.querySelector('#reservation form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    const nom = document.getElementById('nom').value;
    const date = document.getElementById('date').value;
    const personnes = document.getElementById('personnes').value;
    const email = document.getElementById('email').value;

    if (nom && date && personnes && email) {
        alert('Votre réservation a été soumise avec succès ! Nous vous contacterons bientôt.');
        // Ici, vous pourriez ajouter du code pour envoyer les données à un serveur
        this.reset(); // Réinitialise le formulaire
    } else {
        alert('Veuillez remplir tous les champs du formulaire de réservation.');
    }
});