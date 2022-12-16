const date = new Date('2022-12-01');

const getDateDiffrence = (date) => {
    const today = new Date();
    const diff = today.getTime() - date.getTime();
    if (diff < 0) {
        return 'Invalid Date';
    }
    if (diff < 1000) {
        return 'now';
    }
    const sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return `${sec} sec. ago`;
    }
    const min = Math.floor(sec / 60);
    if (min < 60) {
        return `${min} min. ago`;
    }
    const hour = Math.floor(min / 60);
    if (hour < 24) {
        return `${hour} hour ago`;
    }
    const day = Math.floor(hour / 24);
    if (day < 30) {
        return `${day} day ago`;
    }
    return date.toLocaleString('en-US');
}

console.log(getDateDiffrence(date));