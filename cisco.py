1.

# Given a list of integers, find the maximum difference of two elements where the larger number appears 
# after the smaller number. Example 1: Input: 7 2 3 10 6 4 8 1 Output: 8. 
# solve in python

def max_difference(nums):
    max_diff = 0
    min_val = nums[0]

    for i in range(1, len(nums)):
        diff = nums[i] - min_val
        if diff > max_diff:
            max_diff = diff
        if nums[i] < min_val:
            min_val = nums[i]

    return max_diff

# You can call the max_difference function by passing a list of integers as an argument. The function 
# iterates over the list and keeps track of the minimum value seen so far. It calculates the difference 
# between the current element and the minimum value, and updates the maximum difference seen if necessary.

# Here's an example usage of the function with the input from the question:

# python
# Copy code
# nums = [7, 2, 3, 10, 6, 4, 8, 1]
# print(max_difference(nums))  # Output: 8
# The output is 8, which is the maximum difference between any two elements where the larger number appears 
# after the smaller number.

2.


# write an algorithm in python to help identify the person from the given input who is not a twin. Input: the first line of input consist of an integer - inputArr_size, representing the number of entries in the array (N). 
# The next line consist of N space-separated integer elements in the array.

# Output: Print the smallest value of the person who is not a twin from the given array of elements.

# Examples 1: Input: 7 1 1 22 3 3 4 4 Output: 2 Explanations: In the given array of element, only non-twin element is '2'. So, the output is 2.

# eg 2: Input: 4 1 1 2 2 Output: -1 Explanation: given array of element contain all the twin elements. So, the output is -1.


# 1. Read the integer value inputArr_size from the input, representing the number of entries in the array.
# 2. Read the next line from the input, consisting of N space-separated integer elements in the array, and store them in a list called inputArr.
# 3. Create an empty dictionary called countDict to keep track of the count of each element in the inputArr.
# 4. Iterate over each element in the inputArr, and increment its count in the countDict.
# 5. Create a list called nonTwinList, and append all elements from the countDict whose count is 1.
# 6. If nonTwinList is empty, print -1 and exit.
# 7. Otherwise, print the minimum value from nonTwinList and exit.


def identify_non_twin(inputArr_size, inputArr):
    countDict = {}
    for i in inputArr:
        if i in countDict:
            countDict[i] += 1
        else:
            countDict[i] = 1
    nonTwinList = [k for k, v in countDict.items() if v == 1]
    if len(nonTwinList) == 0:
        return -1
    else:
        return min(nonTwinList)


# You can call the function identify_non_twin with the size of the array and the array itself as arguments. The function creates a dictionary to store the count of each element in the array, 
# and then creates a list of all elements with a count of 1 (i.e., the non-twin elements). 
# If there are no non-twin elements, the function returns -1. Otherwise, it returns the smallest non-twin element.


inputArr_size = 7
inputArr = [1, 1, 22, 3, 3, 4, 4]
print(identify_non_twin(inputArr_size, inputArr))  # Output: 22

inputArr_size = 4
inputArr = [1, 1, 2, 2]
print(identify_non_twin(inputArr_size, inputArr))  # Output: -1


3.

# write an algorithm in python to help identify the person from the given input who is not a twin. Input: the first line of input consist of an integer - inputArr_size, representing the number of entries in the array (N). 
# The next line consist of N space-separated integer elements in the array.

# Output: Print the smallest value of the person who is not a twin from the given array of elements.

# Examples 1: Input: 7 1 1 2 3 3 4 4 Output: 2 Explanations: In the given array of element, only non-twin element is '2'. So, the output is 2.

# eg 2: Input: 4 1 1 2 2 Output: -1 Explanation: given array of element contain all the twin elements. So, the output is -1.


# 1. Define a function called funcTwins that takes a list of integers called inputArr as input.
# 2. Create an empty dictionary called countDict to keep track of the count of each element in the inputArr.
# 3. Iterate over each element in the inputArr, and increment its count in the countDict.
# 4. Create a list called nonTwinList, and append all elements from the countDict whose count is 1.
# 5. If nonTwinList is empty, return -1 and exit.
# 6. Otherwise, return the minimum value from nonTwinList and exit.


def funcTwins(inputArr):
    countDict = {}
    for i in inputArr:
        if i in countDict:
            countDict[i] += 1
        else:
            countDict[i] = 1
    nonTwinList = [k for k, v in countDict.items() if v == 1]
    if len(nonTwinList) == 0:
        return -1
    else:
        return min(nonTwinList)


# You can call the function funcTwins with a list of integers as an argument. The function creates a dictionary to store the count of each element in the list, and then creates a list of all elements with a count of 1 
# (i.e., the non-twin elements). 
# If there are no non-twin elements, the function returns -1. Otherwise, it returns the smallest non-twin element.

inputArr = [1, 1, 2, 3, 3, 4, 4]
print(funcTwins(inputArr))  # Output: 2

inputArr = [1, 1, 2, 2]
print(funcTwins(inputArr))  # Output: -1