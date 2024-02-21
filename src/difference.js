export const difference = (arr1, arr2) => {
    return arr1.filer(el => !arr2.includes(el));
} 