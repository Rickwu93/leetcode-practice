"""
While

"""

# answer = input("Please say hi")

# while answer != "hi":
#     answer = input("Rude. Please say hi...")

# print("Hi to you too!")

# num = 10
# while num > 0:
#     print(f"Number Is: {num}")
#     num -= 1

# count = 7
# while count > 0:
#     print("*" * count)
#     count -= 1

# import random
# roll1 = random.randint(1,6)
# roll2 = random.randint(1,6)
# roll_count = 1

# while roll1 != 1 or roll2 != 1:
#     print(roll1, roll2)
#     roll1 = random.randint(1,6)
#     roll2 = random.randint(1,6)
#     roll_count += 1

# print(roll1, roll2)
# print("finally snake eyes")
# print(f"it took {roll_count} rolls" )

"""
For Loops

for item in iterable:
"""

"""
range(start,stop,step)
for num in range(1,10,2):
    print(num)
"""

# for num in range(10):
#     print("Hello World!")

# for num in range(0,100,2):


"""Bottles of beer example with both loops"""

# for num_bottles in range(99,0,-1):
#     print(f"{num_bottles} bottles of beer on the wall")
#     print(f"{num_bottles} bottles of beer")

#     if num_bottles == 1:
#         print(f"take one down, pass it around, no more bottles of beer on the wall.")
#     else:
#         print(f"take one down, pass it around, {num_bottles - 1} bottles of beer on the wall.")

# num_bottles = 99
# while num_bottles > 0:
#     print(f"{num_bottles} bottles of beer on the wall")
#     print(f"{num_bottles} bottles of beer")

#     if num_bottles == 1:
#         print(f"take one down, pass it around, no more bottles of beer on the wall.")
#     else:
#         print(f"take one down, pass it around, {num_bottles - 1} bottles of beer on the wall.")
#     num_bottles -= 1