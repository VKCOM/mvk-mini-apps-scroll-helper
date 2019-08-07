<div align="center">
  <a href="https://github.com/VKCOM">
    <img width="100%" src="https://vk.com/images/landings/services/hero.jpg">
  </a>
  <br>
  <br>

[![npm][npm]][npm-url]
[![deps][deps]][deps-url]

</div>

# mvk-mini-apps-scroll-helper

Хелпер настройки скролла для [VK Mini Apps](https://vk.com/services) на платформе m.vk.com

## Подключение

Добавьте в зависимости пакет:

```bash
npm i @vkontakte/mvk-mini-apps-scroll-helper
```

Перед рендером приложения вызовите хелпер:

```js
import mVKMiniAppsScrollHelper from '@vkontakte/mvk-mini-apps-scroll-helper';

// Корневой элемент приложения
const root = document.getElementById('root');

// Вызываем хелпер, передавая в аргумент корневой элемент приложения
mVKMiniAppsScrollHelper(root);

// Рендер приложения
ReactDOM.render(<App />, root);
```

[npm]: https://img.shields.io/npm/v/@vkontakte/mvk-mini-apps-scroll-helper.svg
[npm-url]: https://npmjs.com/package/@vkontakte/mvk-mini-apps-scroll-helper
[deps]: https://img.shields.io/david/vkcom/mvk-mini-apps-scroll-helper.svg
[deps-url]: https://david-dm.org/vkcom/mvk-mini-apps-scroll-helper

## License

[MIT](LICENSE).
