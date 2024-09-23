import * as fs from 'fs';
import * as path from 'path';

// 指定要读取的目录路径
const directoryPath = path.join(__dirname, '../../功法/JAVA'); // 假设'someFolder'是你想读取的文件夹

// 使用readdirSync函数同步读取目录
const files = fs.readdirSync(directoryPath);
var names = [];
files.forEach(file => {
  const filePath = path.join(directoryPath, file); // 获取文件完整路径
  const stats = fs.statSync(filePath); // 获取文件状态信息

  if(stats.isFile()){ // 判断是否为文件
    console.log(`文件: ${filePath}`);
    if (file != 'README.md')
      names.push(file);
  } else if(stats.isDirectory()){ // 判断是否为文件夹
    console.log(`文件夹: ${filePath}`);
  }
});
console.log(names)
export default [
  "",
  {
    title: "JAVA",
    collapsable: false,
    children: names,
  },
];
