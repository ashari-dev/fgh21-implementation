function cekPalindrome(kata) {
  let hasil = "";

  for (let i = kata.length; i > 0; i--) {
    hasil += kata[i - 1];
  }
  if (hasil === kata) {
    console.log("Palindrom");
  }
}

cekPalindrome("mamam");
