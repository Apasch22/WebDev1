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

for x in range(1,101):
    if x % 3 == 0:
        print("Fizz")
    elif x % 5 == 0:
        print("Buzz")
    elif x % 3 and x % 5 == 0:
        print("FizzBuzz")
    else:
        print(x)

for x in range(1,101):
    fizz = "Fizz" if x % 3 == 0 else ""
    buzz = "Buzz" if x % 5 == 0 else ""
    print(f{fizz}{buzz} or x)

f = open("pythontest.txt", "a")
f.write("File Content")
print(f.read())
f.close()

def lowercase(string):
    string.lower()

name = "DERRICK"
age = "68"
print(f"{lowercase(name)} is {age} years old")