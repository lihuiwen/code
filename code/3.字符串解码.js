// ```
// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

// 示例 1：

// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"
// 示例 2：

// 输入：s = "3[a2[c]]"
// 输出："accaccacc"
// 示例 3：

// 输入：s = "2[abc]3[cd]ef"
// 输出："abcabccdcdcdef"
// 示例 4：

// 输入：s = "abc3[cd]xyz"
// 输出："abccdcdcdxyz"

// ```


var handleString = function (str) {
  this.stack = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ']') {
      this.stack.push(str[i])
    } else {
      this.pStr()
    }
  }
  console.log(this.stack.join(''))
}
handleString.prototype.pStr = function () {
  let str = ''
  let numMap = ['1','2','3','4','5','6','7','8','9','0']
  while (this.stack.length >= 0 && this.stack[this.stack.length - 1] !== '[') {
    str = this.stack.pop() + str
  }
  this.stack.pop()
  let num = ''
  while (this.stack.length >= 0 && numMap.includes(this.stack[this.stack.length - 1])) {
    num = this.stack.pop() + num
  }
  num = parseInt(num)
  let str2 = ''
  while(num--){
    str2 += str
  }
  this.stack.push(str2)
}