export async function playNotificationSound() {
    try{
        // create audio object
        const audio = new Audio('/notification.mp3');
        // set volume
        audio.volume = 0.3;
        // play sound
        await audio.play()
        // wait to play sound
        return new Promise<void>((resolve) => {
            audio.onended = () => {
                resolve();
            };
        });
    } catch (error) {
        console.error('failed to play notification')
    }
}