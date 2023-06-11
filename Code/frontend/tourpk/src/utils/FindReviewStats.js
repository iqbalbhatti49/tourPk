export const getReviewsStats = (reviews) => {
    let ratingAvg = 0;
    reviews.forEach((review) => {
        ratingAvg += review.rating;
    });
    ratingAvg = (ratingAvg / reviews.length).toFixed(1);
    const reviewsCount = reviews.length;
    return { reviewsCount, ratingAvg };
}