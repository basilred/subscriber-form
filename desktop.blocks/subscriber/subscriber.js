modules.define('subscriber', ['i-bem__dom'], function (provide, BEMDOM) {
	
	provide(BEMDOM.decl(this.name, {
		onSetMod: {
			'js': {
				'inited': function() {
					var submitBtn = this.findBlockInside({block: 'button'});
					submitBtn.on('submit', this._onSubmit, this);
				}
			}
		},

		_onSubmit: function() {
			console.log('Obrabotka.');
            var email = this.findBlockInside({block: 'input'});
            console.log(email.getVal());
            if (this._isEmailAddress(email.getVal())) {
                console.log('It is true');
            }
		},
        
        _isEmailAddress: function(addr) {
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return addr.match(pattern);
        }
	}));

});