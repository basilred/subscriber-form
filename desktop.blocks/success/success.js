modules.define('success', ['i-bem__dom'], function (provide, BEMDOM) {
	
	provide(BEMDOM.decl(this.name, {
		onSetMod: {
			'valid': function() {
				this.elem('typemessage').text('thanks, your address has been added');
				console.log('Email is valid.')
			},
			'invalid': function() {
				this.elem('typemessage').text('please enter a valid email address');
				console.log('Email is valid.')
			}
		}
	}));

});
