function showMessage() {
    const message = document.getElementById('message');
    const messages = [
        "Santa Teresinha nos ensina o valor do amor e da simplicidade.",
        "A fé é o caminho para encontrar a verdadeira paz.",
        "Que sua devoção ilumine nosso coração.",
        "Siga o exemplo de Santa Teresinha e seja fiel no amor a Deus."
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.innerText = randomMessage;
}
