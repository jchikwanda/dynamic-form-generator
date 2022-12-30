// Table
const tableStyles = `w-full`;

// Table Header
const theadStyles = 'bg-gray-50 sticky top-0';

// Table heading and data
const commonThTdStyles = 'text-sm text-left p-3'
const thStyles = `font-semibold ${commonThTdStyles}`;
const tdStyles = `text-grey-900 ${commonThTdStyles}`;

/**
 * sets the background color of a given row
 * @param {number} number helps determine whether a given number is even or odd
 * @returns {string} background color
 */
const setTrStyles = (number) => {
    return `${number % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`;
}

export {
    tableStyles,
    theadStyles,
    thStyles,
    tdStyles,
    setTrStyles
}