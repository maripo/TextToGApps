var MENU_IDS = {};
function addMenus ()
{
	MENU_IDS.SEARCH_MAP = chrome.contextMenus.create
	({
		"title": chrome.i18n.getMessage('searchGoogleMaps'), 
		"contexts":["selection"],
		"onclick": searchGoogleMaps
	});
	MENU_IDS.ADD_CALENDAR = chrome.contextMenus.create
	({
		"title": chrome.i18n.getMessage('addGoogleCalendar'), 
		"contexts":["selection"],
		"onclick": addGoogleCalendar
	});
	MENU_IDS.CHECK_CALENDAR = chrome.contextMenus.create
	({
		"title": chrome.i18n.getMessage('checkGoogleCalendar'), 
		"contexts":["selection"],
		"onclick": checkGoogleCalendar
	});
	MENU_IDS.COMPOSE_MAIL = chrome.contextMenus.create
	({
		"title": chrome.i18n.getMessage('sendMail'), 
		"contexts":["selection"],
		"onclick": sendMail
	});
}

function searchGoogleMaps (clicked, tab)
{
	console.log("searchGoogleMaps");
	window.open("http://maps.google.co.jp/maps?q="+clicked.selectionText);
}
function addGoogleCalendar (clicked, tab)
{
	console.log("addGoogleCalendar");
}
function checkGoogleCalendar (clicked, tab)
{
	console.log("checkGoogleCalendar");
}
function sendMail (clicked, tab)
{
	console.log("sendMail");
	window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+clicked.selectionText);
}

addMenus();