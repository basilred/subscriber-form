modules.define('success', ['i-bem__dom'], function (provide, BEMDOM) {
	
	provide(BEMDOM.decl(this.name, {
		onSetMod: {
			'valid': function() {
				this.elem('sign').text('tick');
				this.elem('typemessage').text('thanks, your address has been added');
			},
			
			'invalid': function() {
				this.elem('sign').text('cross');
				this.elem('typemessage').text('please enter a valid email address');
			},

			'none': function() {
				this.elem('sign').text('');
				this.elem('typemessage').text('');
			}

		}
	}));

});