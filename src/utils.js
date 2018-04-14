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
        if (a.Year > b.Year) {
            return 1
        } else if (a.Year < b.Year) {
            return -1
        }
        return 0
    };