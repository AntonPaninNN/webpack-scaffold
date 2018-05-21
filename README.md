# webpack scaffold 
## Simple webpack example for testing 

### 1. UglifyJSPlugin - allows to uglify all selected JS.

```javascript
new UglifyJSPlugin({sourceMap: true})
```

### 2. HtmlWebpackPlugin - link all created artifacts to specified html file

```javascript
new HtmlWebpackPlugin({
	template: path.join(__dirname, 'src', 'index.html'),
})
``` 

### 3. entry section - specify input artifacts

```javascript
entry: {
	vendor: ['jquery'],
	app: './src/app.js'
}
```

### 4. output section - specify output artifacts

```javascript
output: {
	filename: '[name].[chunkhash].js',
	path: path.resolve(__dirname, 'dist')
}
```

### 5. babel-loader - loader for translation JS to ES5

```javascript
test: /\.js$/,
exclude: /node_modules/,
loader: 'babel-loader'
```

### 6. style-loader, css-loader - loaders for CSS. Allows to put css to js files

```javascript
test: /\.css$/,
use: [ 'style-loader', 'css-loader' ]
```

### 7. url-loader - load artifact and change name with hash or base64 (depending on file size)

```javascript
test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
loader: 'url-loader',
options: {
	limit: 10000
}
```

