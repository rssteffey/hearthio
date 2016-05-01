// When moving to useraccuonts
// https://github.com/meteor-useraccounts/core/blob/master/Guide.md
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY',
});
