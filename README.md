### Hexlet tests:
[![Actions Status](https://github.com/Skeler667/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/ArsenyKonkolovich/backend-project-lvl2/actions) 
### Codeclimate Maintainability and Test Coverage:
[![Maintainability](https://api.codeclimate.com/v1/badges/fdfec1f5969ded9b72bd/maintainability)](https://codeclimate.com/github/Skeler667/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fdfec1f5969ded9b72bd/test_coverage)](https://codeclimate.com/github/Skeler667/frontend-project-lvl2/test_coverage)
### Tests and linter status:
[![Test-and-linter](https://github.com/Skeler667/frontend-project-lvl2/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/Skeler667/frontend-project-lvl2/actions/workflows/main.yml)

## Вычислитель отличий :collision:

### Краткое описание: :page_facing_up:

- [X] Программа сравнивает два конфигурационных файла с расширениями .json, .yml, .yaml;
- [X] Cli-утилита принимает два аргумента — пути до этих файлов;
- [X] Результат сравнения файлов может выводиться в разных форматах.

### Системные требования: :computer:

- [X] Поддерживаемая версия Node.js - 17;

- Склонируйте репозиторий:
```
git clone https://github.com/Skeler667/frontend-project-lvl1
```
- Установите зависимости
```
make install
npm link
```

### Вызов справки:
```
gendiff -h
```
![image](https://user-images.githubusercontent.com/85356853/191842126-0caadf00-10f7-4b2f-9520-362aa6751aa9.png)

### Пример работы со стандартным форматером Stylish:
```
gendiff __fixtures__/file1.json __fixtures__/file2.yaml
```
![image](https://user-images.githubusercontent.com/85356853/191842648-209eeb85-2ceb-4acc-9cb8-6a8044dc8ac5.png)

### Пример работы с форматером Plain:
```
gendiff -f plain __fixtures__/file1.json __fixtures__/file2.yaml
```
![image](https://user-images.githubusercontent.com/85356853/191843076-e516baed-df68-4314-a395-6a4e1e4961a7.png)

### Пример работы с форматером JSON
```
gendiff -f json __fixtures__/file1.json __fixtures__/file2.yaml
```
![image](https://user-images.githubusercontent.com/85356853/191843228-da07b6cb-08e2-42a6-939e-d5c36977b06d.png)
