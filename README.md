# Merge Sort
CS concepts showing the implimtaion of Merge Sort in javascript.

Popular, consistent, and one of the most efficient sorting algorithms.  It uses the concept of divide and conquer to sort a list of elements
 
The way it works is by breaking the array in half and then repeating this process until we get to singe elements. Once we have single elements, then we can start merging and sorting the array back together.   Eventually we will have a sorted array. 

The BigO for the Merge Sort is `O(n log n)`

Fun Fact:  Mozilla uses merge sort while Chrome’s v8 uses a combination of insertion Sort and Quick Sort.  If the array is less than 10 elements in length, it uses an InsertionSort
