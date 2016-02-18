longestword = function(str){
    strArr = str.split(' ')
    var count = function(strArr){
        var total = 0
            for (var i = 0 ; i < strArr.length ; i++){
                if (strArr[i].length > total){
                    total = strArr[i].length
                    var word = strArr[i]
                }
            }
        console.log(word, total)
    }
    count(strArr)
}

longestword('peter piper killed the bigbadwolfmotherfucker but if not what happens?')