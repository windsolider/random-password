# random-1password
Generate random passwords, special characters, uppercase letters, lowercase letters, numbers optional

# Install
```
npm install random-1password
```

# Example
```
import {generatePassword,generatePassword3} from 'random-1password';

// 得到一个长度9位的包含大小写字母、数字或特殊字符(!@#$%^&*()_+-=[]{}|;:,.<>?)的字符串
const pwd = generatePassword3(9);

// 得到一个长度11位的包含大小写字母、数字或特殊字符(!@#$%^&*()_+-=[]{}|;:,.<>?)的字符串
const pwd = generatePassword3(11);

// 得到一个长度9位的包含大小写字母、数字、特殊字符(!@#$%^&*()_+-=[]{}|;:,.<>?)的字符串
const pwd = generatePassword(9)

// 得到一个长度9位的包含小写字母、数字、特殊字符(!@#$%^&*()_+-=[]{}|;:,.<>?)的字符串
let useLowercase = true, useUppercase = false, useNumbers = true, useSymbols = true;
const pwd = generatePassword(9,useLowercase,useUppercase,useNumbers,useSymbols);

// 得到一个长度9位的包含大写字母、数字、特殊字符(!@#$%^&*()_+-=[]{}|;:,.<>?)的字符串
let useLowercase = false, useUppercase = true, useNumbers = true, useSymbols = true;
const pwd = generatePassword(9,useLowercase,useUppercase,useNumbers,useSymbols);

// 得到一个长度9位的包含大写字母的字符串
let useLowercase = false, useUppercase = true, useNumbers = false, useSymbols = false;
const pwd = generatePassword(9,useLowercase,useUppercase,useNumbers,useSymbols);
```

# To do
- [ ] 密码强弱度校验