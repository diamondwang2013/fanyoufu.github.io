import random
secret = random.randint(1,10)
temp = input('guess what i thinking for ?')
temp = int(temp)

while secret != temp:
    if temp > secret:
        print("你猜大了，小一点吧")
    else:
        print("你猜小了，大一点吧")
    temp = input('guess what i thinking for ?')
    temp = int(temp)
print("over!正确答案是：" + str(secret))
