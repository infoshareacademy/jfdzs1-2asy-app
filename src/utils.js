    export const sortByBestRatingValue = (a, b) => {
        if (a.imdbRating < b.imdbRating) {
            return 1
        } else if (a.imdbRating > b.imdbRating) {
            return -1
        }
        return 0
    };

    export const sortByWorstRatingValue = (a, b) => {
        if (a.imdbRating > b.imdbRating) {
            return 1
        } else if (a.imdbRating < b.imdbRating) {
            return -1
        }
        return 0
    };
    export const sortDate = (a, b) => {
        const isAfter = a.Year > b.Year;
        const isBefore = a.Year < b.Year;

        if (isAfter) return 1
        if (isBefore) return -1
        return 0
    };