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

            var email = this.findBlockInside({block: 'input'}),
            	success = this.findBlockInside({block: 'success'});

            if (this._isEmailAddress(email.getVal())) {
                success.setMod('valid', 'tick');
            } else {
            	success.setMod('valid', 'cross');
            }
		},
        
        _isEmailAddress: function(addr) {
            
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return addr.match(pattern);
            
        }
	}));

});