// Get Longest Substring Without Repeating Characters

const string = "oiuhvg cbnzkgibsdfjncvxnbhvjdkscnzvx bknlsz xmcvbnjksdfghjklxcvbnm";

const longestSubstring = (string) => {
    var longest = "";
    var current = "";
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        var index = current.indexOf(char);
        if (index > -1) {
            current = current.substring(index + 1);
        }
        current += char;
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}

console.log(longestSubstring(string));