/* MergeSort */
import  MergeSort from './util/MergeSort.js';

window.onload = () => {
    const ms = new MergeSort();
    let sortedArray1 = ms.mergeSort([9,5,8,6,7,3,4,96,1,8,3,3,5,4,85,5,5]);
    let sortedArray2 = ms.mergeSort(['harry', 'bob', 'andy', 'liz', 'larry', 'alex']);
    console.log('MergeSort:', sortedArray1, sortedArray2);
  
};