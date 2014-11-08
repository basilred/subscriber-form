modules.define('success', ['i-bem__dom'], function (provide, BEMDOM) {
	
	provide(BEMDOM.decl(this.name, {
		onSetMod: {
			'valid': {
				'tick': function() {
					this.delMod();
					this.elem('sign').text('tick');
					this.elem('typemessage').text('thanks, your address has been added');
				},
				
				'cross': function() {
					this.delMod();
					this.elem('sign').text('cross');
					this.elem('typemessage').text('please enter a valid email address');
				},

				'none': function() {
					this.delMod();
					this.elem('sign').text('');
					this.elem('typemessage').text('');
				}
			}

		}
	}));

});
