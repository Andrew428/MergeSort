# Merge Sort
CS concepts showing the implimtaion of Merge Sort in javascript.

Popular, consistent, and one of the most efficient sorting algorithms.  It uses the concept of divide and conquer to sort a list of elements
 
The way it works is by breaking the array in half and then repeating this process until we get to singe elements. Once we have single elements, then we can start merging and sorting the array back together.   Eventually we will have a sorted array. 

![Screen Shot 2019-07-14 at 2 23 03 PM](https://user-images.githubusercontent.com/11912649/61188331-1e20da80-a643-11e9-9f9e-f76a9766f8f5.png)
Image sourced from a screenshoot at https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060

The BigO for the Merge Sort is `O(n log n)`

Fun Fact:  Mozilla uses merge sort while Chrome’s v8 uses a combination of insertion Sort and Quick Sort.  If the array is less than 10 elements in length, it uses an InsertionSort
