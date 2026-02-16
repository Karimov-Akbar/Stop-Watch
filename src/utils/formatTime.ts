export const formatTime = (milliseconds: number): string => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = milliseconds % 1000;

    return (
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}:` +
        `${String(ms).padStart(3, '0')}`
    );
};
