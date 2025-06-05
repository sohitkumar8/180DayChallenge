// Pattern 5: Hollow Right Triangle Star Pattern

let n = 5;  // n ka value set krna ki kitna row ka pattern banana hai.
for (let i = 1; i <= n; i++){  // i ka value 1 se lekar n tak chalega.
    let str = "";   // str varianble ko string type kar ke star or space store karne ke liye use kiya jayega.
    for (let j = 1; j <= i; j++){   // j ka value 1 se lekar i tak chalega.
        // j ka value 1 ya i ya i ka value n hai to star print hoga, warna space print hoga.
        if (j === 1 || j === i || i === n){ // agar j ka value 1 ya i ya i ka value n hai to star print hoga.
            str += "*";  // str variable me star store hoga.
        }else {    // agar j ka value 1 ya i ya i ka value n nahi hai to space print hoga.
            str += " ";   // str variable me space store hoga.
        }
    }
    console.log(str);  // str variable ko console me print kiya jayega.
}

