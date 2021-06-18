 // Xndir-1
// function x (x) {
//     let a = Math.floor(x);
//    let str = x + ""
//     let bool = false
//     let b = ""
//     for (const strElement of str) {
//         if(bool === true) {
//             b += strElement
//         }
//         if (strElement === "." ) {
//             bool = true
//         }
//     }
//     console.log(a)
//     console.log(parseInt(b))
// }
//


 //xndir-2
 // function x (X) {
 //    let x;
 //     if (x >= 0) {
 //         y = x
 //     }else(y = -x)
 // }
 //

    // xndir 3--- ternary operator:
 // function getY(x) {
 //    let y;
 //    return (x >=0 && x < 5)? y = 2 * Math.pow(x,2) + 3 * x -1 : y = x + 1;
 // }

//sovorakan exanakov xndir 3
//  function getY(x) {
//     let y;
//     if(x >= 0 && x < 5) {
//         y = 2 * x**2 + 3 * x -1;
//     }else {
//         y = x + 1;
//     }
//     return y;
//  }


 // sovorakan exanakov xndir 5:
 // function getY(x, y, z){
 //    let bool = false;
 //    if(Math.pow(x,2)<Math.pow(y,2) + Math.pow(z,2) &&
 //        Math.pow(y,2)<Math.pow(x,2) + Math.pow(z,2) &&
 //        Math.pow(z,2)<Math.pow(x,2) + Math.pow(y,2)
 //        ){
 //        bool = true;
 //    }
 //    return bool;
 // }

 // function getY(x, y, z) {
    // let bool = false;
    // return Math.pow(x,2)<Math.pow(y,2) + Math.pow(z,2) &&
    //         Math.pow(y,2)<Math.pow(x,2) + Math.pow(z,2) &&
    //        Math.pow(z,2)<Math.pow(x,2) + Math.pow(y,2)?  bool = true :
    //
 // }

//xndir 6:
//  function getY(x, y, z) {
//     let max;
//     if(x > y) {
//         max = x;
//     }
//     if(z > max) {
//         max = z;
//     }
//     return max;
//  }


 // xndur 12
 // function getS(n) {
 //    let s = 0;
 //    for(let i = 1;i <= n;i++) {
 //        if(i <= n) {
 //            s += Math.pow(i,2)
 //        }
 //    }
 //    return s;
 // }

// xndir 13
// function getY (i) {
//     let y;
//     for(let k =1; k <= i; k++) {
//        y = Math.pow(2, i)
//     }
//     return y;
// }

//xndir 14
//  function getS(n) {
//     let sum = 0;
//     for(let i = 1; i <=n; i++) {
//         sum += i * i; //1 5 14
//         if( sum >= n) {
//             break;
//         }
//     }
//     return sum;
// }


//xndir 15
//  function getS (n) {
//     let s = 0;
//     for( let i = 1; i <= n; i++) {
//         s += 2**i;
//     }
//     return s;
//  }


 // function xndir16(n) {
 //    let sum = 0;
 //    for(let i = 1; i <= n; i++) {
 //        let sum2 = 0;
 //        for(let k = 1; k <= i; k++) {
 //            sum2 += Math.sin(k);
 //        }
 //        //sum2 = 0; ufff
 //        if(sum2 === 0) {
 //            console.error("sistem pizdec")
 //        }
 //        sum += i/sum2;
 //    }
 //    return sum;
 // }


 //xndir 21:
// function getFact(y) {
//     let sum = 1;
//    for(let i = 1; i <=5; i++) {
//
//        sum *= i;
//    }
//    return sum;
// }
// function xndir21(x) {
//     let sum = 0;
// for(let i = 0; i <= x; i++) {
//     sum += Math.pow(x,2*i+1)/getFact(2*i+1)
// }
// return sum;
// }



 // function xndir2(n) {
 //    let y;
 //    let m;
 //    for(let i = n; i <= m; i++) {
 //        y = Math.pow(i,i);
 //    }
 //    return y;
 // }



 // function xndir3(n) {
 //    let y = 0;
 //    for(let i = 1; i <= n; i++) {
 //        let x = xndir3a(i)
 //    y += (i +1) * x;
 //    }
 //    return y;
 // }
 //
 // function xndir3a(i) {
 //    let k = 0;
 //    for(let j = 1; j <= i; j++) {
 //        k += i + j**2;
 //    }
 //    return k;
 // }


 // function xndir4(n) {
 //    let x = 2;
 //    let sum = 1;
 //    let y;
 //    for(let i = 1; i <= n; i++) {
 //        sum *= i;
 //       y = Math.pow(i,i) * Math.pow(x,i) / sum;
 //    }
 //    return y;
 // }


 // function xndir5(n) {
 //    let sum = 1;
 //    let s;
 //    let sum2 = 1;
 //    for(let k = 1; k <= n; k++) {
 //        sum *=(2 * k**2 +1);
 //        sum2 *= n;
 //        s = 1 / sum2 * Math.pow(-1,k) * sum;
 //    }
 //    return s;
 // }



 // function xndir23(n) {
 //    let str = n + "";
 //     for (const strElement of str) {
 //         console.log(parseInt(strElement))
 //     }
 // }





 // function xndir24(n) {
 //    let str = n + "";
 //    let strRes = "";
 //     for (const strElement of str) {
 //         if(parseInt(strElement) < 5) {
 //             strRes += strElement * 2;
 //         }else {
 //            strRes += strElement;
 //         }
 //     }
 //    return parseInt(strRes);
 // }
 //



 // function xndir1(x) {
 //    let y;
 //    for(x = 1; x <=8; x += 0.2) {
 //        if(x < 5) {
 //         y = 2 * x + 1;
 //        }else {
 //            y = x**2 -1
 //        }
 //        console.log(y)
 //
 //    }
 // }

 // function xndir2(x) {
 //    let y;
 //    for(x = 1; x <= 12; x++) {
 //        if(x < 3) {
 //            y = 5 * x + 2;
 //        }
 //
 //        if(x >= 3 && x <= 10) {
 //            y = x**2 + x - 1;
 //        }
 //
 //        if(x > 10) {
 //            y = 1;
 //        }
 //        console.log(y)
 //    }
 // }


 // function xndir3(n) {
 //    let sum = 0;
 //    for(let i = 1; i <= n; i++) {
 //        sum += Math.sin(i) / Math.cos(i);
 //    }
 //    return sum;
 // }




 // function xndir4(n) {
 //    let  x;
 //    let sum = 0;
 //    for(let i = 0; i <= n; i++) {
 //        sum += Math.sin(i) * x;
 //    }
 //    return sum;
 // }


 // function xndir8(n) {
 //    const x = 5;
 //    let y = 1;
 //    let sum = 1;
 //    for( let i = 1; i <= n; i++) {
 //        sum  *= i;
 //        y *= Math.cos(i) * x / (2**i *  sum);
 //    }
 //    return y;
 // }


 // function xndir9(x) {
 //    let y = 1;
 //    if(x % 2) {
 //        for(let i = 1; i <= x; i += 2) {
 //            y *= i;
 //        }
 //        console.log('111', y)
 //    }else {
 //        for(let i = 2; i <= x; i += 2) {
 //            y *= i;
 //        }
 //        console.log('222', y)
 //    }
 // }


 // function xndir10(n) {
 //    let a = 500;
 //    for(let i = 1; i <= n; i++) {
 //       if(4**i < a) {
 //       }else {
 //           console.log(4**(i - 1))
 //           break
 //       }
 //    }
 // }


 // function xndir12(n) {
 //     n = +prompt("enter number n")
 //     let str = n + "";
 //     let sum = 0;
 //   for(let strElement of str) {
 //       sum +=  parseInt(strElement);
 //   }
 //   return sum;
 // }


 // function xndir13(n) {
 //     n = +prompt("enter number n");
 //     let arr = [];
 //     let sum = "";
 //    let str = n + "";
 //    for(let strElement of str) {
 //        arr.push(strElement)
 //     }
 //    for(let i = 0; i < arr.length; i++) {
 //        sum += arr[arr.length - i - 1];
 //    }
 //    return parseInt(sum);
 // }

 // function getRandomArbitrary(min, max) {
 //     return Math.floor(Math.random() * (max - min) + min);
 // }

 // function xndir38(n) {
 //    let matrix = [];
 //    let sum = 0;
 //    let count = 0;
 //    for(let i = 0; i < n; i++) {
 //        matrix.push([]);
 //        for (let j = 0; j < n; j++) {
 //            let random = getRandomArbitrary(-n,n);
 //            matrix[i][j] = random;
 //            if(random >= 0 ){
 //                count++;
 //                sum += random;
 //
 //            }
 //        }
 //    }
 //     console.log(matrix)
 //    return sum / count;
 // }


 // function xndir39(n) {
 //     let matrix = [];
 //    let min = n;
 //    let sum = 0;
 //    for(let i = 0; i < n; i++) {
 //        matrix.push([]);
 //        for (let j = 0; j < n; j++) {
 //            let random = getRandomArbitrary(-n,n);
 //            matrix[i][j] = random;
 //            if(random <= min) {
 //                min = random;
 //            }
 //        }
 //    }
 //     console.log(matrix)
 //    return min;
 // }



 // function xndir40(n) {
 //     let matrix = [];
 //    for(let i = 0; i < n; i++) {
 //        matrix.push([]);
 //        for (let j = 0; j < n; j++) {
 //            let random = getRandomArbitrary(0,n);
 //            matrix[i][j] = random;
 //        }
 //    }
 //    return matrix;
 // }
 //
 // function xndir40a(k) {
 //    let matrix = xndir40(10);
 //    console.log(matrix)
 //     for (let i = 1; i <matrix.length - 1; i++) {
 //         let temp = matrix[i - 1]
 //         if(matrix[i][k] < matrix[i - 1][k]) {
 //             for(k = 0; k <= k.length; k++) {
 //                 matrix[i - 1] = matrix[i];
 //                 matrix[i] = temp;
 //             }
 //         }
 //     }
 //     return matrix;
 // }
