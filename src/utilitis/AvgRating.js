
export const AvgRat = (rating) => {
    if (!rating.length) {
        return 0;
    }
    const total = rating.map(item => parseInt(item.rating)).reduce((prev, next) => { return prev + next }, 0);
    const avg = total / rating.length
    return avg.toFixed(1);
}