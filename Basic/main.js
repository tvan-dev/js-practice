// 1. Kiểm tra số nguyên tố
// Input: Một số nguyên dương n.
// Output: true nếu n là số nguyên tố, ngược lại false.
function isPrime(n) {
    for ( let i = 2; i <= Math.sqrt(n) ;  i++ ) {
        if (n % i === 0) return false
    }

    return true
}
// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false

// 2. Tìm tất cả số nguyên tố trong một khoảng
// Input: Hai số nguyên a, b.
// Output: Một mảng chứa tất cả các số nguyên tố trong khoảng [a, b].
function findPrimesInRange(a, b) {
    let result = [];
    for ( let i = 10; i<= 20; i++){
        if (isPrime(i)) {
            result.push(i)
        }
    }
    return result
}
// console.log(findPrimesInRange(10, 20)); // [11, 13, 17, 19]

// 3. Kiểm tra số hoàn hảo: tong cac uoc tru chinh no = chinh no
// Input: Một số nguyên dương n.
// Output: true nếu n là số hoàn hảo, ngược lại false.
function isPerfectNumber(n) {
    let total = 0;
    for ( let i = 1; i < n; i++){
        
        if( n % i === 0) {
            total += i;
        }
    }
    console.log(total);
    return total === n
    }
// console.log(isPerfectNumber(28)); // true
// console.log(isPerfectNumber(10)); // false

// 4. Tính tổng của các số nguyên tố nhỏ hơn n
// Input: Một số nguyên dương n.
// Output: Tổng các số nguyên tố nhỏ hơn n.
function sumOfPrimesLessThan(n) {
    let total = 0;
    for ( let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            total += i;
        }
    }
    return total;
}
// console.log(sumOfPrimesLessThan(10)); // 17

// 5. Kiểm tra số Armstrong
// Input: Một số nguyên dương n.
// Output: true nếu n là số Armstrong, ngược lại false.
function isArmstrongNumber(n) {
    let toStr = String(n);
    let total = 0;
    for ( let i = 0; i < toStr.length; i++)  {
        let toNum = toStr[i];
        total += toNum ** toStr.length;
    }
    return total === n;
}
// console.log(isArmstrongNumber(153)); // true
// console.log(isArmstrongNumber(123)); // false

// 6. Tìm LCM và GCD của hai số
// Input: Hai số nguyên dương a và b.
// Output: Trả về đối tượng với hai giá trị lcm và gcd.
function findLCMandGCD(a, b) {
    let gcd = 1 ;
    let lcm = a*b/ gcd;
    let a1 = a
    let b1 = b
    
    if ( a < b) {
        let temp = a;
        a = b;
        b = temp;
    }

    
    let x
    while (x !== 0) {
        x = a % b

        if ( x === 0) {
            gcd = b;
            lcm = a1 * b1 / gcd
            // return `lcm: ${lcm}, gcd: ${gcd} `
            return {
                'lcm': lcm,
                'gcd': gcd
            }
        } else {
            a = b;
            b = x;
        }
    }
}
// console.log(findLCMandGCD(12, 18)); // { lcm: 36, gcd: 6 }

// 7. Sắp xếp mảng số theo thứ tự tăng dần hoặc giảm dần
// Input: Một mảng các số nguyên arr, và một tham số order ('asc' hoặc 'desc').
// Output: Mảng được sắp xếp theo thứ tự yêu cầu.
function sortArray(arr, order) {
    let temp;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (order === 'asc') {
                if ( arr[j] > arr[j + 1] ) {
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            } else {
                if ( arr[j] < arr[j + 1] ) {
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
    }

    return arr
}
// console.log(sortArray([3, 1, 4, 1, 5], 'asc')); // [1, 1, 3, 4, 5]

// 8. Chuyển đổi số từ hệ thập phân sang nhị phân :  chia cho 2 lấy phần dư sau đó viết phần dư ngược lại
// Input: Một số nguyên dương n.
// Output: Chuỗi biểu diễn số nhị phân của n.
function decimalToBinary(n) {
    let binary = "";
    while (n > 0) {
        binary = (n % 2) + binary;  // Lấy phần dư và thêm vào trước chuỗi
        n = Math.floor(n / 2);      // Cập nhật thương mới
    }
    return binary || "0"; // Trả về "0" nếu n là 0
}
// console.log(decimalToBinary(10)); // "1010"

// 9. Kiểm tra chuỗi palindrome
// Input: Một chuỗi s.
// Output: true nếu chuỗi là palindrome, ngược lại false.
function isPalindrome(s) {
    let result = ""
    for ( let i = s.length - 1; i >= 0; i--) {
        result += s[i]
    }
    return result === s
}
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false

// 10. Tính giai thừa của một số
// Input: Một số nguyên dương n.
// Output: Giai thừa của số n.
function factorial(n) {
    let result = n;
    for ( let i = 1; i < n; i++) {
        result *= i
    }
    return result;
} 
// console.log(factorial(5)); // 120

// 11. Đảo ngược một chuỗi
// Input: Một chuỗi s.
// Output: Chuỗi sau khi đảo ngược.
function reverseString(s) {
    let result = ""
    for (let i = s.length -1; i >= 0; i--) {
        result += s[i]
    }
    return result;
}
// console.log(reverseString("hello")); // "olleh"

// 12. Tìm số lớn nhất và nhỏ nhất trong mảng
// Input: Một mảng các số nguyên arr.
// Output: Một đối tượng chứa hai giá trị min và max đại diện cho số nhỏ nhất và lớn nhất.
function findMinMax(arr) {
    let min = arr[0]
    let max = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if ( arr[i] < min ) {
            min = arr[i]
        } 
        if (arr[i] > max) {
            max = arr[i]
        }
        
    }
    return {
        min: min,
        max: max
    }
}
// console.log(findMinMax([3, 1, 4, 1, 6])); // { min: 1, max: 5 }

// 13. Kiểm tra một số có phải là số hoàn hảo hay không
// Input: Một số nguyên n.
// Output: true nếu n là số hoàn hảo, ngược lại false.
function isPerfect(n) {
    let total = 0;

    for ( let i = 1; i < n; i++) {
        if( n % i === 0) {
            total += i
        }
    }
    // console.log(total);
//     return total === n
}
// console.log(isPerfect(28)); // true
// console.log(isPerfect(6)); // true

// / 14. Kiểm tra một số có phải là số Fibonacci hay không
// Input: Một số nguyên n.
// Output: true nếu n là một số Fibonacci, ngược lại false.
function isFibonacci(n) {
    // let x =  Math.sqrt(5*n**2 + 4)
    // let y =  Math.sqrt(5*n**2 - 4)
    // return Number.isInteger(x) || Number.isInteger(y)

    let a = 0;
    let b = 1;

    let total = 0
    while ( total < n) {
        total = a + b
        a = b
        b = total
    }
    return total === n
    
}
// console.log(isFibonacci(8)); // true
// console.log(isFibonacci(13)); // false

// 15. Chuyển đổi chữ thường thành chữ hoa và ngược lại
// Input: Một chuỗi s.
// Output: Chuỗi với tất cả các ký tự đã được chuyển đổi.
function toggleCase(s) {
    let result = "";
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if ( char === char.toUpperCase()) {
            char = char.toLowerCase()
            result += char
        } else {
            char = char.toUpperCase()
            result += char
        }
    }
    return result
}
// console.log(toggleCase("HeLLo WoRLd")); // "hEllO wOrlD"

// 16. Tính tổng các chữ số trong một số
// Input: Một số nguyên dương n.
// Output: Tổng các chữ số của n.
function sumOfDigits(n) {
    let total = 0;
    let str = String(n);
    
    for (let i = 0; i < str.length;  i++) {
        total += Number(str[i])
    }
    return total
}
// console.log(sumOfDigits(123)); // 6

// 17. Kiểm tra xem mảng có đối xứng không
// Input: Một mảng arr.
// Output: true nếu mảng đối xứng, ngược lại false.
function isSymmetric(arr) {
    let n = arr.length
    
        for (let i = 0; i < n/2 ; i++) {
            if ( arr[i] !== arr[n - 1 - i]) {
                return false;
            }
        }
        return true
}
// console.log(isSymmetric([1, 2, 3, 2, 1])); // true
// console.log(isSymmetric([1, 2, 3, 4])); // false

// / 18. Tìm phần tử lặp lại trong mảng
// Input: Một mảng arr.
// Output: Mảng chứa các phần tử xuất hiện nhiều hơn một lần.
function findDuplicates(arr) {
    let arrNew = [];
    let map = {}

    for (let i = 0; i <arr.length; i++) {
        if (arr[i] in map) {
            arrNew.push(arr[i])
            map[arr[i]] +=1
        } else {
            map[arr[i]] = 1
        }
    }
    // return arrNew;
    return map;
    
}
// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [1, 2]

// 19. Tính tổng của hai số không dùng phép cộng
// Input: Hai số nguyên a và b.
// Output: Tổng của a và b.
function sumWithoutPlus(a, b) {
    return a + b 
}
// console.log(sumWithoutPlus(3, 5)); // 8

// 20. Tạo chuỗi Fibonacci
// Input: Một số nguyên dương n.
// Output: Mảng chứa n phần tử của chuỗi Fibonacci.
function fibonacciSequence(n) {
    let a = 0;
    let b = 1
    let arr = [0, 1]
    let temp
    while (arr.length < n) {
        temp = a + b;
        arr.push(temp)
        a = b;
        b = temp;
    }
    return arr;
    
}
console.log(fibonacciSequence(5)); // [0, 1, 1, 2, 3]