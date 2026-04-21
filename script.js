function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Історія відомих людей',
            text: 'Історія видатних людей світу технологій і ігор',
            url: window.location.href
        }).then(() => {
            console.log('Успішно поділилися');
        }).catch((error) => {
            console.log('Помилка поділитися:', error);
        });
    } else {
        // Fallback для браузерів, що не підтримують Web Share API
        alert('Ваш браузер не підтримує поділитися. Скопіюйте посилання: ' + window.location.href);
    }
}