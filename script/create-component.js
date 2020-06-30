const fs = require('fs');
const path = require('path');
const fileSave = require('file-save');

if (!process.argv[2]) {
  console.error('[组件名]必填');
  process.exit(1);
}
const args = process.argv.splice(2);
const componentName = args[0];

main();

function main () {
  createComponentDir();
  createDocDir();
};

function createComponentDir () {
  let componentrRoot = '../packages/';
  let targetDirPathName = componentName;
  let targetDirPath = path.join(__dirname, componentrRoot, targetDirPathName);
  let subRoot = `../packages/${targetDirPathName}`;
  let subDirPath = path.join(__dirname, subRoot, 'src');
  createFileDir(targetDirPath);
  createFileDir(subDirPath);
  createVueFile(subRoot);
  createJsFile(subRoot);
}

function createDocDir () {
  let docRoot = '../doc/markdown';
  let docTargetDirPathName = componentName;
  let docTargetDirPath = path.join(__dirname, docRoot, docTargetDirPathName);
  createFileDir(docTargetDirPath);
  let enSubDirPath = path.join(__dirname, `../doc/markdown/${docTargetDirPathName}`, 'en-US');
  createFileDir(enSubDirPath);
  let zhSubDirPath = path.join(__dirname, `../doc/markdown/${docTargetDirPathName}`, 'zh-CN');
  createFileDir(zhSubDirPath);
  createEnDocFile(docTargetDirPathName);
  createZhDocFile(docTargetDirPathName);
}

function createVueFile (subRoot) {
  let vueTemplate = fs.readFileSync(path.join(__dirname, './component-template/template.vue'), 'utf8');
  let className = 'Pa' + componentName;
  let vueContent = vueTemplate.replace(/ComponentName/g, className);
  vueContent = vueContent.replace(/ComponentName/g, componentName);
  let vueTargetFilePath = path.join(__dirname, subRoot, 'src', 'index.vue');
  createFile(vueTargetFilePath, vueContent);
}

function createJsFile (subRoot) {
  let jsTemplate = fs.readFileSync(path.join(__dirname, './component-template/template.js'), 'utf8');
  let jsContent = jsTemplate.replace(/ComponentName/g, componentName);
  let jsTargetFilePath = path.join(__dirname, subRoot, 'index.js');
  createFile(jsTargetFilePath, jsContent);
}

function createEnDocFile (docTargetDirPathName) {
  let enDocTemplate = fs.readFileSync(path.join(__dirname, './component-template/en-doc-template.md'), 'utf8');
  let enDocContent = enDocTemplate.replace(/componentName/g, componentName.toLowerCase());
  let enDocFilePath = path.join(__dirname, `../doc/markdown/${docTargetDirPathName}/en-US`, 'index.md');
  createFile(enDocFilePath, enDocContent);
}

function createZhDocFile (docTargetDirPathName) {
  let zhDocTemplate = fs.readFileSync(path.join(__dirname, './component-template/en-doc-template.md'), 'utf8');
  let zhDocContent = zhDocTemplate.replace(/componentName/g, componentName.toLowerCase());
  let zhDocFilePath = path.join(__dirname, `../doc/markdown/${docTargetDirPathName}/zh-CN`, 'index.md');
  createFile(zhDocFilePath, zhDocContent);
}

function createFile (targetFilePath, content) {
  if (!fs.existsSync(targetFilePath)) {
    fs.writeFile(targetFilePath, content, (err) => {
      if (err) throw err;
      console.log('The ' + targetFilePath + ' file has been created!');
    });
  } else {
    console.error('error!\n' + targetFilePath + ' has already been existed!');
  }
}

function createFileDir (dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('The ' + dirPath + ' folder has been created!');
  }
}

// 添加到 components.json
const componentsFile = require('../components.json');
if (componentsFile[componentName]) {
  console.error(`${componentName} 已存在.`);
  process.exit(1);
}
componentsFile[componentName] = `./packages/${componentName}/index.js`;
fileSave(path.join(__dirname, '../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 添加到 index.scss
const sassPath = path.join(__dirname, '../packages/theme-chalk/src/index.scss');
const sassImportText = `${fs.readFileSync(sassPath)}@import "./${componentName}.scss";`;
fileSave(sassPath)
  .write(sassImportText, 'utf8')
  .end('\n');

// 创建 组件的scss文件
const scssPath = path.join(__dirname, `../packages/theme-chalk/src/${componentName}.scss`);
fs.writeFileSync(scssPath);
