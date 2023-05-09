// 1.Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
// const reverseString = (array) => {
//     let newArrayReverse = [];
//     for (let index = array.length-1; 0 <= index; index--) {
//         newArrayReverse.push(array[index]);
//     }
//     return newArrayReverse;
// }


// let inputStr = prompt("Nhập vào chuỗi muốn đảo ngược");

// console.log(reverseString(inputStr));


// 2. Viết một function xoá các phần từ trùng lặp trong một mảng các số:
// let array = [2 , 4, 3, 4, 2, 6, 2 , 4, 1, 5];
// newArray = array.filter((item, index) => array.indexOf(item) === index);
// console.log(newArray);

// 3.Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
let array = [2 , 4, 3, 4, 2, 6, 2 , 4, 1, 5];

function array_unique(array){
    array.sort();

    console.log(array)
    let max =[0,0];

    //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
    //So sánh số lần xuất hiện và thay đổi max khi cần.
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
        else{
             //So sánh số lần xuất hiện với max[1] 
             if (max[1] < count){ 
                  //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                  //Và gán số lần xuất hiện vào max[1]
                  max[0] = array[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
}



array_unique(array)