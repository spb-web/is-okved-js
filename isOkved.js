( function( ) {
	var regExpOkvedCode = /^(\d{1,2})(\.\d(\d(\.\d{1,2})?)?)?$/;
	var isOkved = function( okved ) {
		return (
			typeof okved === "string" &&
			regExpOkvedCode.test( okved ) === true
		);
	}
	/* 
	 * Экспортируем модуль
	 */
	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
		module.exports = isOkved;
	} else {
		if ( typeof define === "function" && define.amd ) {
			define( [ ], function() {
				return isOkved;
			} );
		} else {
			window.isOkved = isOkved;
		}
	}
} )( );