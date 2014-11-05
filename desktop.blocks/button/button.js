modules.define('button', ['i-bem__dom'], function (provide, BEMDOM) {
	
	provide(BEMDOM.decl(this.name, {
		onSetMod: {
			'js': {
				'inited': function() {
					this.bindTo('click', function(e) {
						this._onSubmit(e);
					});
				}
			}
		},

		_onSubmit: function(e) {
			e.preventDefault();
			this.emit('submit');
		}
	}));

});
