const formatNumber = (value) => {
    if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 10000) {
        return (value / 1000).toFixed(0) + 'K';
    } else if (value >= 1000) {
        return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
        return value.toString();
    }
};

export default formatNumber;