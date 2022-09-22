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
![image](https://user-images.githubusercontent.com/85356853/191843809-ab735168-f472-43bd-bfc1-54b9bdf17941.png)

### Пример работы со стандартным форматером Stylish:
```
gendiff __fixtures__/file1.json __fixtures__/file2.yaml
```
![image](https://user-images.githubusercontent.com/85356853/191843929-4d10119a-5974-4d5b-8045-3e3d9d1717fa.png)

### Пример работы с форматером Plain:
```
gendiff -f plain __fixtures__/file1.json __fixtures__/file2.yaml
```
![image](https://user-images.githubusercontent.com/85356853/191844066-66166c06-4a07-4a68-bc81-eb614b6210e6.png)

### Пример работы с форматером JSON
```
gendiff -f json __fixtures__/file1.json __fixtures__/file2.yaml
```
![image](https://user-images.githubusercontent.com/85356853/191844128-5bced93c-36ec-4846-9fc4-e718a1a3e854.png)
