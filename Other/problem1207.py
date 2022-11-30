"""
1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

eg1. Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

eg2. Input: arr = [1,2]
Output: false

eg3. Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
"""

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        return len(set(Counter(arr).values())) == len(Counter(arr).values())  

### Counter(arr).values() is a list of all the different counts of the elements of arr. If they are all unique then this will be the same length as set(Counter(arr).values()).