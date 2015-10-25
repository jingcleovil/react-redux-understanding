var elixir = require('laravel-elixir');

elixir.config.assetsPath = "src/client"
elixir.config.publicPath="dist";

elixir(function(mix){
	mix
		.styles([
			'bootstrap.min.css',
            'admin-forms.css',
            'theme.css',
		],'dist/css/common.min.css')
})