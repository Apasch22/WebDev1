import random

dict = {"make" : "Toyota", "model" : "Supra", "year" : "1987"}
print (dict)
print(len(dict))

x = random.randrange(1,100)

print (x)

if x > 50:
    print("x is greater than 50")
elif x < 50:
    print("x is less than 50")
else:
    print("x is equal to 50")

tup = (12, "String", True, 57, False)

print(type(tup))