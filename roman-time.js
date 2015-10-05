if (process.argv.length != 4)
{
	console.log("arguments length is incorrect")
	process.exit(0)
}
var hours = parseInt(process.argv[2]);
var minutes = parseInt(process.argv[3]);
if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0)
	console.log("Time is incorrect")

var nums = "- I II III IV V VI VII VIII IX X XI XII XIII XIV XV XVI XVII XVIII XIX XX XXI XXII XXIII XXIV XXV XXVI XXVII XXVIII XXIX XXX XXXI XXXII XXXIII XXXIV XXXV XXXVI XXXVII XXXVIII XXXIX XL XLI XLII XLIII XLIV XLV XLVI XLVII XLVIII XLIX L LI LII LIII LIV LV LVI LVII LVIII LIX".split(' ');
console.log(nums[hours] + ":" + nums[minutes])
