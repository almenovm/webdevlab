n = int(input())
arr = []
for i in range(n):
    temp = int(input())
    arr.append(temp)

for i in range(n):
    if arr[i] % 2 == 0:
        print(arr[i])
