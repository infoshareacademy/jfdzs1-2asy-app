import _ from 'lodash';

export const sortByValue = (items, sortBy) => {
    let sortedItems = [];
    sortedItems = _.sortBy(items, sortBy)
    console.log(sortedItems)
    return sortedItems
};
