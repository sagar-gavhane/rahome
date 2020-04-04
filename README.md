# rahome

Popular data structures for writing efficient programs in JavaScript.

## Badges

![npm version](https://img.shields.io/npm/v/rahome?style=flat-square)
![npm issues](https://img.shields.io/npm/dm/rahome?style=flat-square)
![npm license](https://img.shields.io/npm/l/rahome?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/rahome?style=flat-square)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/sagar-gavhane/rahome/CI?style=flat-square)
[![GitHub issues](https://img.shields.io/github/issues/sagar-gavhane/rahome?style=flat-square)](https://github.com/sagar-gavhane/rahome/issues)
![GitHub contributors](https://img.shields.io/github/contributors-anon/sagar-gavhane/rahome?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/sagar-gavhane/rahome?style=flat-square)

## Installing

This module is distributed via `npm` which is bundled with `node` and should be installed as one of your project's dependence.

```bash
npm install rahome --save
```

## Usage

```javascript
import { LinkedList } from 'rahome'

const list = new LinkedList()
list.add(10) // add 10 to list => [10]
list.add(20) // add 20 to list => [10] -> [20]
list.add(30) // add 20 to list => [10] -> [20] -> [30]

list.addFirst(5) // add 10 to list => [5] -> [10] -> [20] -> [30]

list.addLast(40) // add 40 to list => [5] -> [10] -> [20] -> [30] -> [40]
```

## Contributing

Pull requests are welcome. Please read [CONTRIBUTING.md](https://github.com/sagar-gavhane/rahome/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sagar-gavhane/rahome/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/sagar-gavhane/rahome/blob/master/LICENSE) file for details
