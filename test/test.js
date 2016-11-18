const assert = require('assert')
    , isOkved = require('./../isOkved.js');


describe('isOkved', function( ){
	describe('Отправка заведомо ложных значений', ( ) => {
		function makeTest( testData ) {
			it( `При передаче ${ testData.text } возвращает false`, function() {
			    assert.equal( false, isOkved( testData.value ));
			});
		};
		[
			{
				text: "булевое значение 'false'",
				value: false
			},
			{
				text: "булевое значение 'true'",
				value: true
			},
			{
				text: "пустого массива",
				value: [ ]
			},
			{
				text: "не пустого массива",
				value: [ 11, 22, 33 ]
			},
			{
				text: "объекта",
				value: { }
			},
			{
				text: "null",
				value: null
			},
			{
				text: "пустой строки",
				value: ""
			},
			{
				text: "нуля",
				value: 0
			},
			{
				text: "передача строки содержащие символы отличные от цифр ( 10 символов )",
				value: "1234_5679"
			},
			{
				text: "передача строки содержащие символы отличные от цифр ( 12 символов )",
				value: "1234a567912"
			}
		].forEach( ( data ) => {
			makeTest( data );
		} );
	} );
	describe('Отправка валидных кодов ОКВЭД', ( ) => {
		function makeTest( testData ) {
			it( `При передаче ${ testData } возвращает true`, function() {
			    assert.equal( true, isOkved( testData ));
			});
		};
		[
			'01',
			'01.1',
			'01.10',
			'01.10.1',
			'01.10.10'
		].forEach( ( data ) => {
			makeTest( data );
		} );
	} );


	describe('Отправка НЕ валидных кодов ОКВЭД', ( ) => {
		function makeTest( testData ) {
			it( `При передаче ${ testData } возвращает false`, function() {
			    assert.equal( false, isOkved( testData ));
			});
		};
		[
			'0',
			'1',
			'2',
			'3',
			'123',
			'10.123',
			'12.12.123',
			'12.1212.12',
			'1111000769',
			'12.12.1212',
			'01.10.10.10'
		].forEach( ( data ) => {
			makeTest( data );
		} );
	} );
});