function divideAndSort(number) {
  // Mengubah number menjadi string
  const angka = number + "";

  // Proses pemisahan dan menjadikan array
  const arrAngka = [];
  let bb = 0;
  let result = "";
  for (let i = 0; i < angka.length; i++) {
    if (angka[i] === "0") {
      arrAngka[bb] = result;
      bb++;
      result = "";
    } else {
      result += angka[i];
    }
  }
  arrAngka[bb] = result;

  // Fungsi bubble sort untuk mengurutkan array angka
  function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  // Fungsi untuk mengubah string menjadi array angka dan mengurutkannya
  function stringToSortedArray(str) {
    const numArr = [];
    for (let i = 0; i < str.length; i++) {
      numArr.push(parseInt(str[i], 10));
    }
    return bubbleSort(numArr);
  }

  // Mengurutkan setiap bagian angka dalam array
  for (let i = 0; i < arrAngka.length; i++) {
    let sortedArray = stringToSortedArray(arrAngka[i]);
    let sortedStr = "";
    for (let j = 0; j < sortedArray.length; j++) {
      sortedStr += sortedArray[j];
      }
      arrAngka[i] = sortedStr;
      }
  // Menggabungkan kembali semua bagian menjadi satu string
  let hasil = ''
  for (let i = 0; i < arrAngka.length; i++) {
    hasil = hasil + arrAngka[i]
    
  }

  console.log(hasil);
}

divideAndSort(5956560157966056);
