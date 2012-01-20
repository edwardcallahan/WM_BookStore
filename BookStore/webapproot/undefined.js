dojo.declare("BookStore", wm.Application, {
	"dialogAnimationTime": 350, 
	"disableDirtyEditorTracking": false, 
	"i18n": false, 
	"main": "Main", 
	"projectSubVersion": "Alpha1", 
	"projectVersion": 1, 
	"saveCounter": 44, 
	"studioVersion": "6.4.4GA", 
	"theme": "wm_coolblue", 
	"toastPosition": "br",
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		languageLiveView1: ["wm.LiveView", {"dataType":"com.bookdb.data.Language","related":[],"service":"bookdb","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Language","sortable":true,"dataIndex":"language","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Abbreviation","sortable":true,"dataIndex":"abbreviation","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Numbooks","sortable":true,"dataIndex":"numbooks","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Numdownloads","sortable":true,"dataIndex":"numdownloads","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}]}, {}]
	},
	_end: 0
});

BookStore.extend({

	_end: 0
});