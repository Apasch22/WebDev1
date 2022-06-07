from msvcrt import kbhit
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
    print(f"{fizz}{buzz}" or x)

f = open("pythontest.txt", "a")
f.write("File Content")
print(f.read())
f.close()

def lowercase(string):
    string.lower()

name = "DERRICK"
age = "68"
print(f"{lowercase(name)} is {age} years old")

def upperlower(string):
    string.upper() if len(string) % 2 == 0 else ""
    string.lower() if len(string) % 2 != 0 else ""

upperlower("This is a string")

r = random.randrange(1,100)
even = " is an even number and is" if r % 2 == 0 else ""
odd = " is as odd number and is" if r % 2 != 0 else ""
above = " greater than 50." if r > 50 else ""
below = " less than 50." if r < 50 else ""
equal = " equal to 50." if r == 50 else ""
print (f"{r}{even}{odd}{above}{below}{equal}" or "bruh")

def upperfirst(string):
    for letter in string:
        if letter == string[0]:
            letter.upper()
    print(string)

upperfirst("string")

for i in range(1,101):
    two = "A" if i % 2 == 0 else ""
    three = "B" if i % 3 == 0 else ""
    five = "C" if i % 5 == 0 else ""
    seven = "D" if i % 7 == 0 else ""
    nine = "E" if i % 9 == 0 else ""
    eleven = "F" if i % 11 == 0 else ""
    thirteen = "G" if i % 13 == 0 else ""
    seventeen = "H" if i % 17 == 0 else ""
    nineteen = "I" if i % 19 == 0 else ""
print(f"{two}{three}{five}{seven}{nine}{eleven}{thirteen}{seventeen}{nineteen}" or i)