## expo weather app

```
npm install
expo start -c
```

<img src="https://user-images.githubusercontent.com/57563053/125204021-1e95ef80-e2b6-11eb-9c2f-a90844e17398.gif" width=200 height=400 />
<br/>

```
에러발생

node_modules/expo/AppEntry.js: [BABEL] /node_modules/expo/AppEntry.js: Unknown option: .name.

```

```

Solution

Rename the import from 'react-native-dotenv' to '@env':

해결 전
import { WEATHER_API_KEY } from '@react-native-dotenv';

해결 후
import { WEATHER_API_KEY } from '@env';

```

```

babel.config.js

해결 전
module.exports = function (api) {
api.cache(true);
return {
presets: ['babel-preset-expo', 'module:react-native-dotenv'],
};
};

해결 후
module.exports = {
presets: ["module:metro-react-native-babel-preset"],
plugins: [
"module:react-native-dotenv",
...
]
};
```
